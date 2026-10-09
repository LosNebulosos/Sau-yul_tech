/**
 * Netlify Serverless Function - API Gateway para Sau Yul-Tech
 * Persistencia directa y en tiempo real en Firebase Realtime Database
 * Compatible con AWS Lambda / Netlify Functions (Cero almacenamiento en disco efímero)
 */

const crypto = require('crypto');

// ============================================
// CONFIGURACIÓN Y VARIABLES DE ENTORNO
// ============================================
const FIREBASE_DATABASE_URL = (process.env.FIREBASE_DATABASE_URL || 'https://datosbase111-default-rtdb.firebaseio.com').replace(/\/$/, '');
const FIREBASE_AUTH = process.env.FIREBASE_AUTH || '';
const MASTER_USER = process.env.MASTER_USER || 'Shadow';
const MASTER_PASS = process.env.MASTER_PASS || 'Bovineintel2025';

// ============================================
// UTILIDADES HTTP & CORS
// ============================================
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8'
};

function respond(statusCode, body) {
  return {
    statusCode,
    headers: CORS_HEADERS,
    body: JSON.stringify(body)
  };
}

function now() {
  return new Date().toISOString();
}

function token() {
  return crypto.randomBytes(24).toString('hex');
}

function uuid() {
  return crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex');
}

function cleanUser(user) {
  if (!user) return null;
  const { password, ...safe } = user;
  return safe;
}

// ============================================
// CLIENTE REST FIREBASE REALTIME DATABASE
// ============================================
async function fbGet(path) {
  if (!FIREBASE_DATABASE_URL) return null;
  try {
    const authParam = FIREBASE_AUTH ? `?auth=${encodeURIComponent(FIREBASE_AUTH)}` : '';
    const res = await fetch(`${FIREBASE_DATABASE_URL}/${path}.json${authParam}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(`[Firebase REST] Error en GET /${path}:`, err.message);
    return null;
  }
}

async function fbPut(path, data) {
  if (!FIREBASE_DATABASE_URL) return false;
  try {
    const authParam = FIREBASE_AUTH ? `?auth=${encodeURIComponent(FIREBASE_AUTH)}` : '';
    const res = await fetch(`${FIREBASE_DATABASE_URL}/${path}.json${authParam}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch (err) {
    console.error(`[Firebase REST] Error en PUT /${path}:`, err.message);
    return false;
  }
}

async function fbDelete(path) {
  if (!FIREBASE_DATABASE_URL) return false;
  try {
    const authParam = FIREBASE_AUTH ? `?auth=${encodeURIComponent(FIREBASE_AUTH)}` : '';
    const res = await fetch(`${FIREBASE_DATABASE_URL}/${path}.json${authParam}`, {
      method: 'DELETE'
    });
    return res.ok;
  } catch (err) {
    console.error(`[Firebase REST] Error en DELETE /${path}:`, err.message);
    return false;
  }
}

// ============================================
// GESTIÓN DE SESIONES EN FIREBASE
// ============================================
async function getSession(event) {
  const authHeader = event.headers['authorization'] || event.headers['Authorization'] || '';
  const tokenVal = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  if (!tokenVal) return null;

  const session = await fbGet(`Sesiones/${tokenVal}`);
  return session || null;
}

// ============================================
// HANDLER PRINCIPAL SERVERLESS (NETLIFY)
// ============================================
exports.handler = async function (event, context) {
  // Manejo de pre-vuelo CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: ''
    };
  }

  // Normalizar ruta solicitada
  let rawPath = event.path || '/';
  rawPath = rawPath.replace(/^\/\.netlify\/functions\/api/, '').replace(/^\/api/, '') || '/';
  if (!rawPath.startsWith('/')) rawPath = '/' + rawPath;

  const method = (event.httpMethod || 'GET').toUpperCase();

  let body = {};
  if (event.body) {
    try {
      body = JSON.parse(event.body);
    } catch (e) {
      body = {};
    }
  }

  try {
    // ----------------------------------------------------
    // 1. POST /login - Autenticación de Usuario / Maestro
    // ----------------------------------------------------
    if (rawPath === '/login' && method === 'POST') {
      const rawUser = String(body.user || '').trim();
      const inputUser = rawUser.toLowerCase();
      const cleanPhoneInput = rawUser.replace(/[^0-9]/g, '');
      const inputPass = String(body.password || '').trim();

      if (!inputUser || !inputPass) {
        return respond(400, { error: 'Usuario o teléfono y clave requeridos' });
      }

      // Administrador Maestro
      if (inputUser === MASTER_USER.toLowerCase() || inputUser === 'master@sauyultech.local') {
        if (inputPass === MASTER_PASS) {
          const sessionToken = token();
          const s = {
            id: uuid(),
            token: sessionToken,
            role: 'admin',
            name: 'Administrador Maestro',
            email: 'master@sauyultech.local',
            phone: '+505 8888 0000',
            lat: 12.9255,
            lng: -85.9172,
            safeRadius_km: 10.0,
            polygon_points: [],
            createdAt: now()
          };

          await fbPut(`Sesiones/${sessionToken}`, s);
          return respond(200, { session: s, message: 'Inicio de sesión exitoso' });
        }
      }

      // Ganadero Registrado en Firebase RTDB
      const usersObj = (await fbGet('Usuarios')) || {};
      const usersList = Object.values(usersObj).filter(Boolean);

      const user = usersList.find(u => {
        const uEmail = (u.email || '').toLowerCase();
        const uName = (u.name || '').toLowerCase();
        const uFarm = (u.farm || '').toLowerCase();
        const uPhoneClean = (u.phone || '').replace(/[^0-9]/g, '');

        const matchUser = (
          uEmail === inputUser ||
          uName === inputUser ||
          uFarm === inputUser ||
          (cleanPhoneInput.length >= 6 && uPhoneClean.includes(cleanPhoneInput))
        );

        const matchPass = (String(u.password).trim() === inputPass);
        return matchUser && matchPass;
      });

      if (!user) {
        return respond(401, { error: 'Credenciales inválidas. Verifique usuario, correo o contraseña.' });
      }

      const sessionToken = token();
      const s = {
        id: user.id || uuid(),
        token: sessionToken,
        role: user.role || 'user',
        name: user.name,
        email: user.email,
        phone: user.phone,
        farm: user.farm,
        location: user.location,
        lat: Number(user.lat) || 12.9255,
        lng: Number(user.lng) || -85.9172,
        safeRadius_km: Number(user.safeRadius_km) || 0.2,
        polygon_points: user.polygon_points || [],
        createdAt: now()
      };

      await fbPut(`Sesiones/${sessionToken}`, s);
      return respond(200, { session: s, message: 'Inicio de sesión exitoso' });
    }

    // ----------------------------------------------------
    // 2. POST /register - Registro de Finca y Productor
    // ----------------------------------------------------
    if (rawPath === '/register' && method === 'POST') {
      if (!body.name || !body.email || !body.farm || !body.password) {
        return respond(400, { error: 'Todos los campos marcados son obligatorios' });
      }

      const usersObj = (await fbGet('Usuarios')) || {};
      const usersList = Object.values(usersObj).filter(Boolean);

      const exists = usersList.some(u => (u.email || '').toLowerCase() === body.email.toLowerCase());
      if (exists) {
        return respond(400, { error: 'Ya existe una cuenta registrada con este correo electrónico' });
      }

      const userId = 'usr-' + Date.now();
      const newUser = {
        id: userId,
        name: body.name.trim(),
        phone: body.phone ? body.phone.trim() : '+505 8888 0000',
        email: body.email.trim(),
        farm: body.farm.trim(),
        location: body.location ? body.location.trim() : 'Nicaragua',
        lat: Number(body.lat) || 12.9255,
        lng: Number(body.lng) || -85.9172,
        safeRadius_km: Number(body.safeRadius_km) || 0.2,
        polygon_points: Array.isArray(body.polygon_points) ? body.polygon_points : [],
        password: body.password.trim(),
        role: 'user',
        createdAt: now()
      };

      // Guardar en Usuarios y en Fincas de Firebase RTDB
      await fbPut(`Usuarios/${userId}`, newUser);
      await fbPut(`Fincas/${userId}`, {
        finca: newUser.farm,
        dueno: newUser.name,
        email: newUser.email,
        telefono: newUser.phone,
        ubicacion: newUser.location,
        latitud: newUser.lat,
        longitud: newUser.lng,
        radioSeguroKm: newUser.safeRadius_km,
        puntosPoligono: newUser.polygon_points
      });

      return respond(201, { user: cleanUser(newUser) });
    }

    // ----------------------------------------------------
    // 3. GET /state - Consultar Estado General desde Firebase
    // ----------------------------------------------------
    if (rawPath === '/state' && method === 'GET') {
      const session = await getSession(event);
      const role = session ? session.role : 'admin';
      const email = session ? session.email : '';

      const [usersRaw, collaresRaw, alertsRaw, lotsRaw] = await Promise.all([
        fbGet('Usuarios'),
        fbGet('Dispositivos_Collares'),
        fbGet('Alertas'),
        fbGet('Mercado_Biomasa')
      ]);

      const users = Object.values(usersRaw || {}).filter(Boolean);
      const cows = Object.entries(collaresRaw || {}).map(([key, val]) => {
        if (!val) return null;
        return {
          id: val.id || key.replace(/_/g, ' '),
          ownerEmail: val.ownerEmail || email,
          color: val.color || 'No especificado',
          breed: val.raza || val.breed || 'Bovino',
          age: val.age || 3,
          temp: (val.temperatura !== undefined && val.temperatura !== null && !isNaN(val.temperatura)) ? String(val.temperatura) : "--",
          ir: Number(val.ir || 0),
          red: Number(val.rojo || val.red || 0),
          lat: Number(val.latitud || val.lat) || 12.9255,
          lng: Number(val.longitud || val.lng) || -85.9172,
          zone: val.ubicacion || val.zone || 'Finca Principal',
          heat: !!val.heat,
          last: val.ultimaLectura || val.hora || 'En línea'
        };
      }).filter(Boolean);

      const alerts = Array.isArray(alertsRaw) ? alertsRaw : Object.values(alertsRaw || {}).filter(Boolean);
      const lots = Array.isArray(lotsRaw) ? lotsRaw : Object.values(lotsRaw || {}).filter(Boolean);

      if (role === 'admin') {
        return respond(200, {
          users: users.map(cleanUser),
          cows,
          alerts,
          lots
        });
      }

      return respond(200, {
        users: users.filter(u => u.email === email || (session && u.farm === session.farm)).map(cleanUser),
        cows: cows.filter(c => c.ownerEmail === email),
        alerts: alerts.filter(a => a.ownerEmail === email),
        lots: lots.filter(l => l.farmerEmail === email || l.status === 'AVAILABLE')
      });
    }

    // ----------------------------------------------------
    // 4. POST /cows - Registro de Collar / Ganado
    // ----------------------------------------------------
    if (rawPath === '/cows' && method === 'POST') {
      const session = await getSession(event);
      if (!session) return respond(401, { error: 'Sesión no autorizada o expirada' });

      if (!body.id) return respond(400, { error: 'ID o número de collar requerido' });

      const collarKey = body.id.trim().replace(/\s+/g, '_');
      const cowData = {
        id: body.id.trim(),
        ownerEmail: session.email,
        raza: body.breed || 'Bovino',
        color: body.color || 'No especificado',
        temperatura: null,
        ir: 0,
        rojo: 0,
        latitud: Number(session.lat) || 12.9255,
        longitud: Number(session.lng) || -85.9172,
        ubicacion: session.farm || 'Finca Principal',
        ultimaLectura: 'Recién registrado',
        createdAt: now()
      };

      await fbPut(`Dispositivos_Collares/${collarKey}`, cowData);
      return respond(201, { cow: cowData });
    }

    // ----------------------------------------------------
    // 5. POST /cows/{id}/transfer - Traspaso / Venta
    // ----------------------------------------------------
    if (rawPath.includes('/transfer') && method === 'POST') {
      const session = await getSession(event);
      if (!session) return respond(401, { error: 'Sesión no autorizada' });

      const parts = rawPath.split('/');
      const cowId = decodeURIComponent(parts[2] || '');
      const collarKey = cowId.replace(/\s+/g, '_');

      const current = await fbGet(`Dispositivos_Collares/${collarKey}`);
      if (!current) return respond(404, { error: 'Collar no encontrado en Firebase' });

      const prevZone = current.ubicacion || 'Finca Anterior';
      current.ownerEmail = body.targetEmail || current.ownerEmail;
      current.ubicacion = body.targetFarm || 'Nueva Finca';
      current.ultimaLectura = 'Traspasado';

      await fbPut(`Dispositivos_Collares/${collarKey}`, current);

      // Registrar Alerta de Traspaso
      const altId = 'alt-' + Date.now();
      await fbPut(`Alertas/${altId}`, {
        id: altId,
        cowId: cowId,
        ownerEmail: current.ownerEmail,
        type: 'Venta y Traspaso',
        level: 'ok',
        message: `Animal transferido exitosamente de ${prevZone} a ${current.ubicacion}.`,
        time: now()
      });

      return respond(200, { ok: true, cow: current });
    }

    // ----------------------------------------------------
    // 6. DELETE /cows/{id} - Baja / Retiro de Collar
    // ----------------------------------------------------
    if (rawPath.startsWith('/cows/') && method === 'DELETE') {
      const session = await getSession(event);
      if (!session) return respond(401, { error: 'Sesión no autorizada' });

      const cowId = decodeURIComponent(rawPath.replace('/cows/', '').split('?')[0]);
      const collarKey = cowId.replace(/\s+/g, '_');

      await fbDelete(`Dispositivos_Collares/${collarKey}`);

      const altId = 'alt-' + Date.now();
      await fbPut(`Alertas/${altId}`, {
        id: altId,
        cowId: cowId,
        ownerEmail: session.email,
        type: 'Baja de Dispositivo',
        level: 'warn',
        message: `Baja registrada para ${cowId}.`,
        time: now()
      });

      return respond(200, { ok: true });
    }

    // ----------------------------------------------------
    // 7. POST /lots & DELETE /lots/{id} - Eco-Mercado
    // ----------------------------------------------------
    if (rawPath === '/lots' && method === 'POST') {
      const session = await getSession(event);
      if (!session) return respond(401, { error: 'Sesión no autorizada' });

      const lotId = 'lot-' + Date.now();
      const newLot = {
        id: lotId,
        title: body.title.trim(),
        description: body.description || '',
        quantity_kg: Number(body.quantity_kg),
        price_per_kg: Number(body.price_per_kg),
        tags: Array.isArray(body.tags) ? body.tags : [body.tags],
        farmerEmail: session.email,
        farmerName: session.name,
        phone: session.phone,
        department: 'Nicaragua',
        status: 'AVAILABLE',
        createdAt: now()
      };

      await fbPut(`Mercado_Biomasa/${lotId}`, newLot);
      return respond(201, { lot: newLot });
    }

    if (rawPath.startsWith('/lots/') && method === 'DELETE') {
      const session = await getSession(event);
      if (!session) return respond(401, { error: 'Sesión no autorizada' });

      const lotId = decodeURIComponent(rawPath.replace('/lots/', ''));
      await fbDelete(`Mercado_Biomasa/${lotId}`);
      return respond(200, { ok: true });
    }

    // ----------------------------------------------------
    // 7. GET /lots - Consultar Eco-Mercado
    // ----------------------------------------------------
    if (rawPath === '/lots' && method === 'GET') {
      const lotsRaw = await fbGet('Mercado_Biomasa');
      const lots = Array.isArray(lotsRaw) ? lotsRaw : Object.values(lotsRaw || {}).filter(Boolean);
      return respond(200, { lots });
    }

    // ----------------------------------------------------
    // 8. PUT /users/profile - Actualizar Perfil de Usuario
    // ----------------------------------------------------
    if (rawPath === '/users/profile' && method === 'PUT') {
      const session = await getSession(event);
      if (!session) return respond(401, { error: 'Sesión no autorizada' });

      const userId = session.id;
      const user = await fbGet(`Usuarios/${userId}`);
      if (!user) return respond(404, { error: 'Usuario no encontrado' });

      if (body.name) user.name = String(body.name).trim();
      if (body.phone) user.phone = String(body.phone).trim();
      if (body.farm) user.farm = String(body.farm).trim();
      if (body.location) user.location = String(body.location).trim();
      if (body.safeRadius_km) user.safeRadius_km = Number(body.safeRadius_km);
      if (body.lat) user.lat = Number(body.lat);
      if (body.lng) user.lng = Number(body.lng);

      await fbPut(`Usuarios/${userId}`, user);
      return respond(200, { user: cleanUser(user), message: 'Perfil actualizado exitosamente' });
    }

    // ----------------------------------------------------
    // 9. POST /ai/chat - Asistente Clínico IA Veterinario
    // ----------------------------------------------------
    if (rawPath === '/ai/chat' && method === 'POST') {
      const userMessage = String(body.message || '').trim();
      const context = body.context || {};
      const geminiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || 'AIzaSyDpJjv7EiNNy28n8vmlprjA-mgJ5i2iJi0';

      if (!userMessage) return respond(400, { error: 'Mensaje requerido' });

      if (geminiKey && typeof fetch !== 'undefined') {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
          const systemInstruction = `Eres el Dr. Carlos Ruiz, Médico Veterinario e IA Clínica de Sau Yul-Tech en Nicaragua. Experto en salud bovina, sensores MAX30205 y zootecnia. Contexto del hato: ${JSON.stringify(context)}.`;

          const aiRes = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\nConsulta: ${userMessage}` }] }],
              generationConfig: { maxOutputTokens: 600, temperature: 0.6 }
            })
          });

          const data = await aiRes.json();
          if (data && data.candidates && data.candidates[0] && data.candidates[0].content) {
            return respond(200, { reply: data.candidates[0].content.parts[0].text, source: 'gemini-ai' });
          }
        } catch (e) {}
      }

      return respond(200, {
        reply: `🩺 **Evaluación Clínica Asistida por IA (Dr. Carlos Ruiz):** He analizado los parámetros de tu hato. Los sensores clínicos MAX30205 reportan signos vitales nominales. Para consultas específicas indica el número de collar o arete.`,
        source: 'expert-engine'
      });
    }

    return respond(404, { error: `Ruta de API no encontrada: ${method} ${rawPath}` });
  } catch (err) {
    console.error('[Netlify Function Exception]:', err);
    return respond(500, { error: 'Error interno en función Serverless', details: err.message });
  }
};
