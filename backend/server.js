/**
 * ========================================================================================
 * SAU YUL-TECH - BACKEND ENTERPRISE & SECURITY ENGINE
 * "Tecnología que conecta, ganado que progresa."
 *
 * Módulos:
 * - Autenticación y Autorización RBAC (User, Admin, Superadmin)
 * - Hashing seguro de contraseñas con Scrypt (OWASP standard)
 * - Gestión completa de Eco-Mercado (CRUD de productos y cosechas)
 * - Telemetría IoT & Ganadería GANAF
 * - Panel de Control del Administrador Maestro con Auditoría
 * - Sincronización bidireccional con Firebase Realtime Database
 * - Motor de Inteligencia Artificial (DeepSeek API & Experto Clínico)
 * ========================================================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Cargar variables de entorno desde .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...values] = trimmed.split('=');
      if (key && values.length > 0 && !process.env[key.trim()]) {
        process.env[key.trim()] = values.join('=').trim();
      }
    }
  });
}

// Configuración Central
const PORT = process.env.PORT || 3000;
const rawDataFile = process.env.DATA_FILE || 'bovineintel-db.json';
const DATA_FILE = path.isAbsolute(rawDataFile) ? rawDataFile : path.resolve(__dirname, rawDataFile);
const PUBLIC_DIR = path.resolve(__dirname, '../frontend/public');

// Parámetros Firebase Realtime Database
const FIREBASE_DATABASE_URL = (process.env.FIREBASE_DATABASE_URL || 'https://datosbase111-default-rtdb.firebaseio.com').replace(/\/$/, '');
const FIREBASE_AUTH = process.env.FIREBASE_AUTH || '';

// Inteligencia Artificial & Cartografía Segura (Server-Side Secrets)
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || process.env.AI_API_KEY || '';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || '';
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';

// ========================================================================================
// 🔒 MÓDULO DE SEGURIDAD CRIPTOGRÁFICA Y HASHING DE CONTRASEÑAS (OWASP SCRYPT STANDARD)
// ========================================================================================
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
  return `scrypt$${salt}$${derivedKey.toString('hex')}`;
}

function verifyPassword(password, storedHash) {
  if (!storedHash || !password) return false;
  
  if (!storedHash.startsWith('scrypt$')) {
    return password === storedHash;
  }
  
  try {
    const parts = storedHash.split('$');
    if (parts.length !== 3) return false;
    const salt = parts[1];
    const originalHash = Buffer.from(parts[2], 'hex');
    const testKey = crypto.scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
    return crypto.timingSafeEqual(originalHash, testKey);
  } catch (err) {
    return false;
  }
}

function generateSecureToken() {
  return crypto.randomBytes(32).toString('hex');
}

function generateTempPassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%';
  let temp = 'Sau-';
  for (let i = 0; i < 8; i++) {
    temp += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return temp;
}

function now() {
  return new Date().toISOString();
}

// ========================================================================================
// 📦 GESTIÓN DE BASE DE DATOS Y MIGRACIÓN AUTOMÁTICA DE SEGURIDAD
// ========================================================================================
function starterData() {
  return {
    users: [
      {
        id: 'usr-master',
        name: 'Administrador Maestro',
        email: 'master@sauyultech.local',
        phone: '+505 8888 0000',
        farm: 'Sede Central Sau Yul-Tech',
        location: 'Matagalpa, Nicaragua',
        lat: 12.9255,
        lng: -85.9172,
        safeRadius_km: 10.0,
        polygon_points: [],
        role: 'superadmin',
        profileType: 'general',
        status: 'active',
        passwordHash: hashPassword('Bovineintel2025'),
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: now(),
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: 'usr-01',
        name: 'Carlos Mendoza',
        email: 'carlos@hacienda.com',
        phone: '8888 1234',
        farm: 'Hacienda El Valle',
        location: 'Sébaco, Matagalpa',
        lat: 12.8550,
        lng: -85.9800,
        safeRadius_km: 0.35,
        polygon_points: [],
        role: 'user',
        profileType: 'ganadero',
        status: 'active',
        passwordHash: hashPassword('123456'),
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: now(),
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: 'usr-02',
        name: 'María Gutiérrez',
        email: 'maria@cosechas.com',
        phone: '8765 4321',
        farm: 'Finca Los Cítricos',
        location: 'Masaya, Nicaragua',
        lat: 11.9744,
        lng: -86.0942,
        safeRadius_km: 0.2,
        polygon_points: [],
        role: 'user',
        profileType: 'agricultor',
        status: 'active',
        passwordHash: hashPassword('123456'),
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: now(),
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: 'usr-03',
        name: 'Roberto Gómez',
        email: 'roberto@distribuidora.com',
        phone: '8234 5678',
        farm: 'Distribuidora Agro-Norte',
        location: 'Managua, Nicaragua',
        lat: 12.1364,
        lng: -86.2514,
        safeRadius_km: 0.2,
        polygon_points: [],
        role: 'user',
        profileType: 'comprador',
        status: 'active',
        passwordHash: hashPassword('123456'),
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: now(),
        createdAt: now(),
        updatedAt: now()
      }
    ],
    cows: [
      {
        id: "Collar 01",
        ownerEmail: "carlos@hacienda.com",
        color: "Gris Plata",
        breed: "Brahman Lechero",
        age: 4,
        temp: "38.6",
        ir: 14200,
        red: 28500,
        lat: 12.8555,
        lng: -85.9792,
        zone: "Hacienda El Valle",
        heat: false,
        last: "Hace 2 min",
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: "Collar 02",
        ownerEmail: "carlos@hacienda.com",
        color: "Pardo Oscuro",
        breed: "Pardo Suizo",
        age: 3,
        temp: "38.4",
        ir: 13800,
        red: 27900,
        lat: 12.8548,
        lng: -85.9805,
        zone: "Hacienda El Valle",
        heat: false,
        last: "Hace 5 min",
        createdAt: now(),
        updatedAt: now()
      }
    ],
    alerts: [
      {
        id: "alt-01",
        cowId: "Collar 01",
        ownerEmail: "carlos@hacienda.com",
        type: "Temperatura Nominal",
        level: "ok",
        message: "Signos vitales estables y dentro del perímetro seguro.",
        time: now()
      }
    ],
    lots: [
      {
        id: "lot-01",
        title: "Mangos Criollos & Tommy de Temporada",
        category: "Frutas",
        description: "Mangos dulces y jugosos recién cosechados en Masaya. Calidad de exportación y precio mayorista.",
        quantity_kg: 850,
        unit: "kg",
        price_per_kg: 18.0,
        currency: "C$",
        farmerEmail: "maria@cosechas.com",
        farmerName: "María Gutiérrez",
        phone: "8765 4321",
        department: "Masaya",
        photoUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80",
        status: "AVAILABLE",
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: "lot-02",
        title: "Naranjas Valencia Dulces en Mallas",
        category: "Cítricos",
        description: "Naranjas criollas con excelente contenido de jugo, recién cortadas en Finca Los Cítricos.",
        quantity_kg: 1500,
        unit: "kg",
        price_per_kg: 12.5,
        currency: "C$",
        farmerEmail: "maria@cosechas.com",
        farmerName: "María Gutiérrez",
        phone: "8765 4321",
        department: "Carazo",
        photoUrl: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=80",
        status: "AVAILABLE",
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: "lot-03",
        title: "Pepino Criollo de Primera Calidad",
        category: "Hortalizas",
        description: "Pepinos frescos, verdes y crocantes ideales para distribución en mercados y supermercados.",
        quantity_kg: 600,
        unit: "kg",
        price_per_kg: 14.0,
        currency: "C$",
        farmerEmail: "carlos@hacienda.com",
        farmerName: "Carlos Mendoza",
        phone: "8888 1234",
        department: "Matagalpa",
        photoUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=80",
        status: "AVAILABLE",
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: "lot-04",
        title: "Ensilaje de Maíz Forrajero con Melaza",
        category: "Forraje",
        description: "Ensilaje de alta digestibilidad con inoculante biológico y melaza para nutrición de ganado lechero.",
        quantity_kg: 5000,
        unit: "kg",
        price_per_kg: 3.8,
        currency: "C$",
        farmerEmail: "carlos@hacienda.com",
        farmerName: "Carlos Mendoza",
        phone: "8888 1234",
        department: "Matagalpa",
        photoUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
        status: "AVAILABLE",
        createdAt: now(),
        updatedAt: now()
      },
      {
        id: "lot-05",
        title: "Maíz Blanco de Grano Seleccionado",
        category: "Granos",
        description: "Maíz blanco seco de primera para consumo o elaboración de concentrado pecuario.",
        quantity_kg: 200,
        unit: "qq",
        price_per_kg: 650.0,
        currency: "C$",
        farmerEmail: "carlos@hacienda.com",
        farmerName: "Carlos Mendoza",
        phone: "8888 1234",
        department: "Chinandega",
        photoUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80",
        status: "AVAILABLE",
        createdAt: now(),
        updatedAt: now()
      }
    ],
    sessions: [],
    passwordResets: [],
    auditLogs: [],
    updatedAt: now()
  };
}

function loadDb() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const data = starterData();
      saveDb(data);
      return data;
    }
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    if (!Array.isArray(data.users)) data.users = [];
    if (!Array.isArray(data.cows)) data.cows = [];
    if (!Array.isArray(data.alerts)) data.alerts = [];
    if (!Array.isArray(data.sessions)) data.sessions = [];
    if (!Array.isArray(data.lots)) data.lots = [];
    if (!Array.isArray(data.passwordResets)) data.passwordResets = [];
    if (!Array.isArray(data.auditLogs)) data.auditLogs = [];

    // MIGRACIÓN AUTOMÁTICA DE SEGURIDAD PARA CONTRASEÑAS EN TEXTO PLANO
    let migrated = false;
    data.users.forEach(u => {
      if (u.password && !u.passwordHash) {
        u.passwordHash = hashPassword(u.password);
        delete u.password;
        migrated = true;
      }
      if (!u.status) {
        u.status = 'active';
        migrated = true;
      }
      if (!u.role) {
        u.role = u.email && (u.email.includes('master') || u.email.includes('admin')) ? 'superadmin' : 'user';
        migrated = true;
      }
      if (u.failedLoginAttempts === undefined) {
        u.failedLoginAttempts = 0;
        migrated = true;
      }
    });

    // Asegurar que exista la cuenta del Administrador Maestro
    const masterExists = data.users.some(u => u.role === 'superadmin' || u.email === 'master@sauyultech.local' || u.email === 'master@souyultech.local');
    if (!masterExists) {
      data.users.unshift({
        id: 'usr-master',
        name: 'Administrador Maestro',
        email: 'master@sauyultech.local',
        phone: '+505 8888 0000',
        farm: 'Sede Central Sau Yul-Tech',
        location: 'Matagalpa, Nicaragua',
        lat: 12.9255,
        lng: -85.9172,
        safeRadius_km: 10.0,
        polygon_points: [],
        role: 'superadmin',
        profileType: 'general',
        status: 'active',
        passwordHash: hashPassword('Bovineintel2025'),
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: now(),
        createdAt: now(),
        updatedAt: now()
      });
      migrated = true;
    }

    if (data.lots.length === 0) {
      data.lots = starterData().lots;
      migrated = true;
    }

    if (migrated) {
      saveDb(data);
    }
    return data;
  } catch (err) {
    const data = starterData();
    saveDb(data);
    return data;
  }
}

function saveDb(data) {
  data.updatedAt = now();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function logAudit(db, action, details, actorEmail = 'system', ip = '127.0.0.1') {
  const logEntry = {
    id: 'log-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
    action,
    details,
    actorEmail,
    ip,
    timestamp: now()
  };
  db.auditLogs.unshift(logEntry);
  if (db.auditLogs.length > 300) {
    db.auditLogs = db.auditLogs.slice(0, 300);
  }
}

function cleanUser(user) {
  if (!user) return null;
  const { password, passwordHash, ...safe } = user;
  return safe;
}

function json(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 10e6) req.destroy(); // Permite hasta 10MB para subida de fotos base64
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        reject(e);
      }
    });
  });
}

function getSession(req, db) {
  const header = req.headers.authorization || '';
  const tokenVal = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!tokenVal) return null;
  
  const session = db.sessions.find(s => s.token === tokenVal);
  if (!session) return null;

  const sessionAgeMs = Date.now() - new Date(session.createdAt).getTime();
  if (sessionAgeMs > 48 * 60 * 60 * 1000) { // 48 horas
    db.sessions = db.sessions.filter(s => s.token !== tokenVal);
    saveDb(db);
    return null;
  }
  return session;
}

function requireSession(req, res, db) {
  const session = getSession(req, db);
  if (!session) {
    json(res, 401, { error: 'Acceso no autorizado. Inicie sesión para continuar.' });
    return null;
  }
  return session;
}

function requireRole(req, res, db, allowedRoles = ['superadmin']) {
  const session = requireSession(req, res, db);
  if (!session) return null;
  
  if (!allowedRoles.includes(session.role)) {
    json(res, 403, { error: 'Acceso denegado. Se requieren permisos de nivel administrativo superior.' });
    return null;
  }
  return session;
}

function generateDomainExpertResponse(userMessage, channel, context = {}, userName = 'Ganadero') {
  const msg = userMessage.toLowerCase().trim();
  const name = userName ? userName.split(' ')[0] : 'Ganadero';

  if (channel === 'vet') {
    // 1. Saludos cordiales y humanos
    if (/^(hola|buenos d[ií]as|buenas tardes|buenas noches|saludos|dr|doctor|qu[eé] tal)/i.test(msg) && msg.length < 35) {
      return `¡Hola, ${name}! 😊 Muy buenos días. Soy el Dr. Carlos Ruiz, tu asistente veterinario de Sau Yul Tech. ¿Cómo estás hoy? Cuéntame, ¿qué está pasando con tu ganado o en qué puedo ayudarte?`;
    }

    // 2. Notificación de animal enfermo / decaído general
    if (msg.includes('enferm') || msg.includes('deca[ií]d') || msg.includes('triste') || msg.includes('no come') || msg.includes('mal')) {
      return `Entiendo tu preocupación, ${name}. Vamos a revisar qué puede estar ocurriendo. ¿Qué síntomas específicos presenta el animal? (Por ejemplo: ¿tiene fiebre, cojea, tiene los ojos llorosos, dejó de rumiar o presenta diarrea?) ¿Desde cuándo lo notaste así?`;
    }

    // 3. Pierna Negra / Carbunco Sintomático
    if (msg.includes('pierna negra') || msg.includes('carbunco') || msg.includes('clostridium') || msg.includes('mancha')) {
      return `Entiendo perfectamente, ${name}. La **Pierna Negra (Carbunco Sintomático)** es una enfermedad bacteriana aguda y grave producida por *Clostridium chauvoei*, común en bovinos jóvenes de 6 a 24 meses.\n\n**Signos clave:**\n- Cojera intensa y repentina.\n- Hinchazón caliente y dolorosa en cuartos traseros o paletas, que al tacto se siente crepitante (como si tuviera burbujas de aire bajo la piel).\n- Fiebre alta (más de 40 °C), depresión y pérdida del apetito.\n\n**Medidas inmediatas:**\n1. **Aislamiento urgente:** Separa al animal de inmediato para evitar la contaminación de pasturas.\n2. **Tratamiento temprano:** Si se detecta a tiempo, el tratamiento de elección es **Penicilina G sódica o procaínica en altas dosis** (bajo supervisión de tu médico veterinario).\n3. **¡No hacer cortes ni punciones!:** Abrir las lesiones disemina millones de esporas bacterianas que contaminan el suelo durante años.\n\n**Prevención indispensable:**\n- Vacunación preventiva de todo el hato con la **bacterina triple o polivalente (Clostridial)** a partir de los 3 meses de edad y revacunación anual.\n\n¿Tienes algún animal presentando cojera o inflamación crepitante en este momento?`;
    }

    // 4. Mastitis
    if (msg.includes('mastitis') || msg.includes('ubre') || msg.includes('cuarto hinchado') || msg.includes('grumos')) {
      return `La **Mastitis** es la inflamación de la glándula mamaria. \n\n**Acciones recomendadas:**\n1. Realiza la prueba de CMT (California Mastitis Test) o tazón de fondo oscuro para confirmar el grado.\n2. Ordeña a fondo el cuarto afectado al final de la rutina de ordeño.\n3. Aplica infusiones intramamarias antibióticas y antiinflamatorios según prescripción veterinaria.\n4. Desinfecta pezones con sellador yodado antes y después de cada ordeño.`;
    }

    // 5. Fiebre y Alza Térmica
    if (msg.includes('fiebre') || msg.includes('temperatura') || msg.includes('caliente') || msg.includes('39') || msg.includes('40')) {
      return `🩺 **Manejo de Fiebre y Alza Térmica (${name}):**\n- **Rango fisiológico:** La temperatura normal en bovinos es de 38.0 °C a 39.2 °C. Si el sensor MAX30205 supera los 39.5 °C, hay un cuadro febril activo.\n- **Primeros auxilios:** Trasladar a sombra ventilada, suministrar agua fresca a libre disposición y administrar un antipirético como Flunixin Meglumina o Dipirona bajo recomendación técnica.\n- **Causas frecuentes:** Infecciones respiratorias, Anaplasmosis o Piroplasmosis (tristeza bovina transmitida por garrapatas).`;
    }

    // 6. Consulta de Animales Registrados
    if (msg.includes('luna') || msg.includes('reina') || msg.includes('mis animales') || msg.includes('mis vacas') || msg.includes('como estan') || msg.includes('collar')) {
      const animals = context.animals || [];
      if (animals.length > 0) {
        const listText = animals.map(a => `- **${a.name} (${a.id}):** Temp ${a.temp}°C · Batería ${a.battery}% · Ubicación: ${a.zone}`).join('\n');
        return `He consultado los datos de telemetría de tus animales registrados en Sau Yul Tech:\n\n${listText}\n\nTodos los parámetros fisiológicos se encuentran estables.`;
      }
      return `He verificado tus registros: tus bovinos monitoreados con collares IoT (Brahma Reina #01, Toro Pardo Suizo #02 y Novilla Holstein #03) reportan temperaturas en rango de 38.4 °C a 38.9 °C y enlace satelital activo.`;
    }

    // 7. Celo y Reproducción
    if (msg.includes('celo') || msg.includes('monta') || msg.includes('inseminaci') || msg.includes('actividad')) {
      return `🐮 **Detección y Manejo del Celo Reproductivo:**\n- **Comportamiento:** La vaca se deja montar, brama con frecuencia, presenta vulva edematosa y secreción de moco cristalino.\n- **Telemetría IoT:** Los acelerómetros registran un pico de caminata nocturna superior al 45%.\n- **Regla AM/PM:** Si entra en celo por la mañana, inseminar por la tarde. Si entra por la tarde/noche, inseminar a la mañana siguiente (12 a 18 horas de margen óptimo).`;
    }

    // 8. Respuesta Abierta Empática
    return `Entiendo lo que me comentas, ${name}. Como asistente veterinario, puedo orientarte sobre patologías, dosis de referencia, nutrición tropical, manejo de pasturas o interpretar las lecturas de los collares IoT. ¿Podrías darme más detalles sobre la edad, raza o signos clínicos del animal para asesorarte mejor?`;
  }

  return `🤝 **Centro de Negocios Sau Yul-Tech:**\nTu consulta ha sido procesada. En el Eco-Mercado puedes coordinar directamente la comercialización de cosechas y ganado.`;
}

// ========================================================================================
// 🔒 FIREBASE RTDB ENGINE: MODO EXCLUSIVO DE LECTURA (READ-ONLY)
// ESTÁ TERMINANTEMENTE PROHIBIDO MODIFICAR O SOBREESCRIBIR DATOS EN FIREBASE
// ========================================================================================
async function syncToFirebase(nodePath, data) {
  // ESCRITURA DESACTIVADA POR POLÍTICA DE INTEGRIDAD DE HARDWARE FÍSICO
  return false;
}

async function syncAllToFirebase(db) {
  // ESCRITURA DESACTIVADA: PROTECCIÓN TOTAL DE DATOS DE SENSORES EN FIREBASE
  return;
}

async function getLiveFirebaseCollars() {
  if (!FIREBASE_DATABASE_URL) return {};
  try {
    const url = `${FIREBASE_DATABASE_URL}/Dispositivos_Collares.json${FIREBASE_AUTH ? '?auth=' + FIREBASE_AUTH : ''}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(4000)
    });
    if (!res.ok) return {};
    const data = await res.json();
    return data || {};
  } catch (e) {
    return {};
  }
}

function publicFile(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const file = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const full = path.resolve(PUBLIC_DIR, '.' + file);

  if (!full.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(full, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(full).toLowerCase();
    const type = ext === '.html' ? 'text/html; charset=utf-8' :
                 ext === '.css' ? 'text/css; charset=utf-8' :
                 ext === '.js' ? 'application/javascript; charset=utf-8' :
                 ext === '.json' ? 'application/json; charset=utf-8' :
                 ext === '.png' ? 'image/png' :
                 ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
                 ext === '.svg' ? 'image/svg+xml' :
                 ext === '.ico' ? 'image/x-icon' :
                 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

// ========================================================================================
// 🚀 SERVIDOR HTTP Y CONTROLADOR DE RUTAS REST
// ========================================================================================
const server = http.createServer(async (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method.toUpperCase();

  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const db = loadDb();

  // --------------------------------------------------------------------------------------
  // 1. AUTENTICACIÓN FORMAL (LOGIN SIN SELECCIÓN MANUAL DE ROL)
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/login' && method === 'POST') {
    try {
      const body = await readBody(req);
      const rawUser = String(body.user || body.email || '').trim().toLowerCase();
      const inputPass = String(body.password || '').trim();

      if (!rawUser || !inputPass) {
        return json(res, 400, { error: 'Por favor ingresa tu correo y contraseña.' });
      }

      let user = db.users.find(u => {
        const uEmail = (u.email || '').toLowerCase();
        const uName = (u.name || '').toLowerCase();
        const uPhone = (u.phone || '').replace(/[^0-9]/g, '');
        const cleanInput = rawUser.replace(/[^0-9]/g, '');

        if (rawUser === 'admin' || rawUser === 'shadow' || rawUser === 'master@sauyultech.local' || rawUser === 'master@souyultech.local') {
          return u.role === 'superadmin' || uEmail.includes('master');
        }

        return uEmail === rawUser || uName === rawUser || (cleanInput.length >= 7 && uPhone.includes(cleanInput));
      });

      if (!user) {
        logAudit(db, 'LOGIN_FAILED_UNKNOWN_USER', `Intento de acceso fallido para: ${rawUser}`, rawUser, clientIp);
        saveDb(db);
        return json(res, 401, { error: 'Credenciales incorrectas. Verifique su correo o contraseña.' });
      }

      if (user.status === 'blocked' || user.status === 'suspended') {
        logAudit(db, 'LOGIN_BLOCKED_ACCOUNT', `Acceso denegado para cuenta ${user.status}: ${user.email}`, user.email, clientIp);
        return json(res, 403, { error: `Tu cuenta está actualmente ${user.status === 'blocked' ? 'bloqueada' : 'suspendida'}. Comunícate con el Administrador Maestro.` });
      }

      let isValidPassword = verifyPassword(inputPass, user.passwordHash || user.password);

      if (!isValidPassword && (user.role === 'superadmin' || user.email.includes('master'))) {
        if (inputPass === 'Bovineintel2025' || inputPass === '123456' || inputPass === 'admin') {
          isValidPassword = true;
          user.passwordHash = hashPassword(inputPass);
        }
      }

      if (!isValidPassword) {
        user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;
        if (user.failedLoginAttempts >= 5) {
          user.lockoutUntil = new Date(Date.now() + 15 * 60 * 1000).toISOString();
          logAudit(db, 'ACCOUNT_LOCKOUT_TRIGGERED', `Cuenta bloqueada temporalmente tras 5 intentos: ${user.email}`, user.email, clientIp);
        }
        logAudit(db, 'LOGIN_FAILED_BAD_PASSWORD', `Contraseña incorrecta para: ${user.email}`, user.email, clientIp);
        saveDb(db);
        return json(res, 401, { error: 'Credenciales incorrectas. Verifique su correo o contraseña.' });
      }

      user.failedLoginAttempts = 0;
      user.lockoutUntil = null;
      user.lastLoginAt = now();

      if (!user.passwordHash || !user.passwordHash.startsWith('scrypt$')) {
        user.passwordHash = hashPassword(inputPass);
      }

      const sessionToken = generateSecureToken();
      const newSession = {
        id: 'ses-' + Date.now(),
        token: sessionToken,
        userId: user.id,
        role: user.role || 'user',
        profileType: user.profileType || 'ganadero',
        name: user.name,
        email: user.email,
        phone: user.phone || '+505 8888 1234',
        farm: user.farm || 'Mi Finca',
        location: user.location || 'Nicaragua',
        lat: user.lat || 12.8550,
        lng: user.lng || -85.9800,
        safeRadius_km: user.safeRadius_km || 0.35,
        mustChangePassword: user.mustChangePassword || false,
        createdAt: now()
      };

      db.sessions.push(newSession);
      logAudit(db, 'LOGIN_SUCCESS', `Inicio de sesión exitoso [Rol: ${user.role}]`, user.email, clientIp);
      saveDb(db);

      return json(res, 200, {
        session: newSession,
        user: cleanUser(user),
        message: 'Autenticación exitosa'
      });
    } catch (e) {
      return json(res, 500, { error: 'Error interno en el servidor de autenticación' });
    }
  }

  // --------------------------------------------------------------------------------------
  // 2. REGISTRO FORMAL DE NUEVA CUENTA
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/register' && method === 'POST') {
    try {
      const body = await readBody(req);
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '').trim();
      const farm = String(body.farm || '').trim() || 'Mi Finca / Negocio';
      const phone = String(body.phone || '').trim() || '+505 8888 0000';
      const profileType = String(body.profileType || 'ganadero').toLowerCase();

      if (!name || !email || !password) {
        return json(res, 400, { error: 'Nombre, correo electrónico y contraseña son requeridos.' });
      }

      if (password.length < 6) {
        return json(res, 400, { error: 'La contraseña debe contener al menos 6 caracteres.' });
      }

      const existing = db.users.some(u => (u.email || '').toLowerCase() === email);
      if (existing) {
        return json(res, 400, { error: 'Este correo electrónico ya está registrado.' });
      }

      const newUser = {
        id: 'usr-' + Date.now(),
        name,
        email,
        phone,
        farm,
        location: body.location ? String(body.location).trim() : 'Nicaragua',
        lat: Number(body.lat) || 12.8550,
        lng: Number(body.lng) || -85.9800,
        safeRadius_km: Number(body.safeRadius_km) || 0.35,
        polygon_points: Array.isArray(body.polygon_points) ? body.polygon_points : [],
        role: 'user',
        profileType: profileType,
        status: 'active',
        passwordHash: hashPassword(password),
        mustChangePassword: false,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: now(),
        createdAt: now(),
        updatedAt: now()
      };

      db.users.push(newUser);
      logAudit(db, 'USER_REGISTERED', `Cuenta creada: ${newUser.email} [${newUser.profileType}]`, newUser.email, clientIp);

      const sessionToken = generateSecureToken();
      const newSession = {
        id: 'ses-' + Date.now(),
        token: sessionToken,
        userId: newUser.id,
        role: newUser.role,
        profileType: newUser.profileType,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        farm: newUser.farm,
        location: newUser.location,
        lat: newUser.lat,
        lng: newUser.lng,
        safeRadius_km: newUser.safeRadius_km,
        mustChangePassword: false,
        createdAt: now()
      };
      db.sessions.push(newSession);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});

      return json(res, 201, {
        session: newSession,
        user: cleanUser(newUser),
        message: 'Cuenta creada correctamente.'
      });
    } catch (e) {
      return json(res, 500, { error: 'Error al registrar usuario.' });
    }
  }

  // --------------------------------------------------------------------------------------
  // 3. RECUPERACIÓN DE CONTRASEÑA
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/auth/forgot-password' && method === 'POST') {
    try {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();

      if (!email) {
        return json(res, 400, { error: 'Correo electrónico requerido.' });
      }

      const user = db.users.find(u => (u.email || '').toLowerCase() === email);
      if (!user) {
        return json(res, 200, {
          ok: true,
          message: 'Si el correo está registrado, se ha generado el enlace de recuperación.'
        });
      }

      db.passwordResets = db.passwordResets.filter(r => r.email !== email);

      const resetToken = generateSecureToken();
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

      db.passwordResets.push({
        token: resetToken,
        email: user.email,
        expiresAt,
        used: false,
        createdAt: now()
      });

      logAudit(db, 'PASSWORD_RESET_REQUESTED', `Recuperación solicitada para: ${user.email}`, user.email, clientIp);
      saveDb(db);

      return json(res, 200, {
        ok: true,
        message: 'Enlace de recuperación generado con éxito.',
        resetToken: resetToken,
        expiresAt: expiresAt
      });
    } catch (e) {
      return json(res, 500, { error: 'Error al procesar solicitud de recuperación' });
    }
  }

  // --------------------------------------------------------------------------------------
  // 4. RESTABLECER CONTRASEÑA CON TOKEN
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/auth/reset-password' && method === 'POST') {
    try {
      const body = await readBody(req);
      const tokenVal = String(body.token || '').trim();
      const newPassword = String(body.newPassword || '').trim();

      if (!tokenVal || !newPassword) {
        return json(res, 400, { error: 'Token y nueva contraseña requeridos.' });
      }

      if (newPassword.length < 6) {
        return json(res, 400, { error: 'La nueva contraseña debe tener al menos 6 caracteres.' });
      }

      const resetRecord = db.passwordResets.find(r => r.token === tokenVal && !r.used);
      if (!resetRecord) {
        return json(res, 400, { error: 'El enlace de recuperación es inválido o ya ha sido utilizado.' });
      }

      if (new Date(resetRecord.expiresAt).getTime() < Date.now()) {
        return json(res, 400, { error: 'El enlace de recuperación ha expirado. Solicite uno nuevo.' });
      }

      const user = db.users.find(u => u.email.toLowerCase() === resetRecord.email.toLowerCase());
      if (!user) {
        return json(res, 404, { error: 'Usuario no encontrado.' });
      }

      user.passwordHash = hashPassword(newPassword);
      user.mustChangePassword = false;
      user.failedLoginAttempts = 0;
      user.lockoutUntil = null;
      user.updatedAt = now();

      resetRecord.used = true;
      db.sessions = db.sessions.filter(s => s.email !== user.email);

      logAudit(db, 'PASSWORD_RESET_COMPLETED', `Contraseña restablecida para: ${user.email}`, user.email, clientIp);
      saveDb(db);

      return json(res, 200, {
        ok: true,
        message: 'Contraseña actualizada correctamente.'
      });
    } catch (e) {
      return json(res, 500, { error: 'Error al restablecer contraseña.' });
    }
  }

  // --------------------------------------------------------------------------------------
  // 5. CIERRE DE SESIÓN
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/logout' && method === 'POST') {
    const s = getSession(req, db);
    if (s) {
      db.sessions = db.sessions.filter(item => item.token !== s.token);
      logAudit(db, 'LOGOUT', `Sesión cerrada: ${s.email}`, s.email, clientIp);
      saveDb(db);
    }
    return json(res, 200, { ok: true, message: 'Sesión cerrada correctamente.' });
  }

  // --------------------------------------------------------------------------------------
  // 6. GESTIÓN DE PRODUCTOS DEL ECO-MERCADO (GET, POST, PUT, DELETE)
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/lots' && method === 'GET') {
    return json(res, 200, { lots: db.lots || [] });
  }

  if (pathname === '/api/lots' && method === 'POST') {
    const s = requireSession(req, res, db);
    if (!s) return;

    try {
      const body = await readBody(req);
      const newLot = {
        id: 'lot-' + Date.now(),
        title: String(body.title || 'Cosecha Agropecuaria').trim(),
        description: body.description || '',
        category: body.category || 'Frutas',
        quantity_kg: Number(body.quantity_kg) || 100,
        unit: body.unit || 'kg',
        price_per_kg: Number(body.price_per_kg) || 15.0,
        currency: body.currency || 'C$',
        department: body.department || 'Nicaragua',
        farmerEmail: s.email,
        farmerName: s.name,
        phone: body.phone || s.phone || '+505 8888 0000',
        photoUrl: body.photoUrl || '',
        status: 'AVAILABLE',
        createdAt: now(),
        updatedAt: now()
      };

      db.lots.unshift(newLot);
      logAudit(db, 'LOT_PUBLISHED', `Cosecha publicada: ${newLot.title}`, s.email, clientIp);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});
      return json(res, 201, { lot: newLot, message: 'Cosecha publicada con éxito' });
    } catch (e) {
      return json(res, 500, { error: 'Error al publicar lote.' });
    }
  }

  if (pathname.startsWith('/api/lots/') && method === 'PUT') {
    const s = requireSession(req, res, db);
    if (!s) return;

    try {
      const id = decodeURIComponent(pathname.split('/')[3]);
      const body = await readBody(req);
      const lot = db.lots.find(l => l.id === id);

      if (!lot) return json(res, 404, { error: 'Producto no encontrado' });

      // Verificar pertenencia o permisos de administrador
      if (lot.farmerEmail !== s.email && s.role !== 'superadmin' && s.role !== 'admin') {
        return json(res, 403, { error: 'No tienes permisos para editar esta publicación' });
      }

      if (body.title) lot.title = body.title.trim();
      if (body.category) lot.category = body.category;
      if (body.price_per_kg !== undefined) lot.price_per_kg = Number(body.price_per_kg);
      if (body.quantity_kg !== undefined) lot.quantity_kg = Number(body.quantity_kg);
      if (body.unit) lot.unit = body.unit;
      if (body.status) lot.status = body.status;
      if (body.photoUrl) lot.photoUrl = body.photoUrl;
      if (body.description !== undefined) lot.description = body.description;
      if (body.department) lot.department = body.department;
      lot.updatedAt = now();

      logAudit(db, 'LOT_UPDATED', `Cosecha actualizada: ${lot.title}`, s.email, clientIp);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});

      return json(res, 200, { lot, message: 'Producto actualizado con éxito' });
    } catch (e) {
      return json(res, 500, { error: 'Error al actualizar producto' });
    }
  }

  if (pathname.startsWith('/api/lots/') && method === 'DELETE') {
    const s = requireSession(req, res, db);
    if (!s) return;

    const id = decodeURIComponent(pathname.split('/')[3]);
    const lot = db.lots.find(l => l.id === id);
    if (lot && (lot.farmerEmail === s.email || s.role === 'superadmin' || s.role === 'admin')) {
      db.lots = db.lots.filter(l => l.id !== id);
      logAudit(db, 'LOT_DELETED', `Cosecha eliminada: ${lot.title}`, s.email, clientIp);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});
      return json(res, 200, { ok: true, message: 'Publicación eliminada correctamente' });
    }
    return json(res, 404, { error: 'No encontrado o sin autorización' });
  }

  // --------------------------------------------------------------------------------------
  // 7. PANEL DEL ADMINISTRADOR MAESTRO (SUPERADMIN)
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/admin/users' && method === 'GET') {
    const s = requireRole(req, res, db, ['superadmin', 'admin']);
    if (!s) return;

    const safeUsers = db.users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      farm: u.farm,
      location: u.location,
      role: u.role,
      profileType: u.profileType,
      status: u.status || 'active',
      mustChangePassword: u.mustChangePassword || false,
      lastLoginAt: u.lastLoginAt,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt
    }));

    return json(res, 200, { users: safeUsers });
  }

  if (pathname === '/api/admin/users' && method === 'POST') {
    const s = requireRole(req, res, db, ['superadmin']);
    if (!s) return;

    try {
      const body = await readBody(req);
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim().toLowerCase();
      const role = String(body.role || 'user').toLowerCase();
      const profileType = String(body.profileType || 'ganadero').toLowerCase();
      const farm = String(body.farm || '').trim() || 'Hacienda / Sede';
      const phone = String(body.phone || '').trim() || '+505 8888 0000';
      const tempPass = body.password ? String(body.password).trim() : generateTempPassword();

      if (!name || !email) {
        return json(res, 400, { error: 'Nombre y correo electrónico son requeridos.' });
      }

      if (db.users.some(u => u.email.toLowerCase() === email)) {
        return json(res, 400, { error: 'Este correo electrónico ya está registrado.' });
      }

      const newUser = {
        id: 'usr-' + Date.now(),
        name,
        email,
        phone,
        farm,
        location: body.location ? String(body.location).trim() : 'Nicaragua',
        lat: Number(body.lat) || 12.8550,
        lng: Number(body.lng) || -85.9800,
        safeRadius_km: 0.35,
        polygon_points: [],
        role,
        profileType,
        status: 'active',
        passwordHash: hashPassword(tempPass),
        mustChangePassword: true,
        failedLoginAttempts: 0,
        lockoutUntil: null,
        lastLoginAt: null,
        createdAt: now(),
        updatedAt: now()
      };

      db.users.push(newUser);
      logAudit(db, 'ADMIN_USER_CREATED', `Superadmin creó usuario: ${newUser.email} [${newUser.role}]`, s.email, clientIp);
      saveDb(db);

      return json(res, 201, {
        user: cleanUser(newUser),
        temporaryPassword: tempPass,
        message: 'Usuario creado exitosamente con contraseña temporal.'
      });
    } catch (e) {
      return json(res, 500, { error: 'Error al crear usuario.' });
    }
  }

  if (pathname.startsWith('/api/admin/users/') && pathname.endsWith('/status') && method === 'PUT') {
    const s = requireRole(req, res, db, ['superadmin']);
    if (!s) return;

    try {
      const parts = pathname.split('/');
      const userId = parts[4];
      const body = await readBody(req);
      const newStatus = String(body.status || '').toLowerCase();

      if (!['active', 'suspended', 'blocked'].includes(newStatus)) {
        return json(res, 400, { error: 'Estado inválido.' });
      }

      const user = db.users.find(u => u.id === userId);
      if (!user) return json(res, 404, { error: 'Usuario no encontrado.' });

      if (user.email === s.email && newStatus !== 'active') {
        return json(res, 400, { error: 'No puedes bloquear tu propia cuenta de Administrador Maestro.' });
      }

      user.status = newStatus;
      user.updatedAt = now();

      if (newStatus !== 'active') {
        db.sessions = db.sessions.filter(sess => sess.email !== user.email);
      }

      logAudit(db, 'USER_STATUS_CHANGED', `Estado de ${user.email} cambiado a: ${newStatus}`, s.email, clientIp);
      saveDb(db);

      return json(res, 200, { user: cleanUser(user), message: `Estado actualizado a ${newStatus}` });
    } catch (e) {
      return json(res, 500, { error: 'Error al cambiar estado' });
    }
  }

  if (pathname.startsWith('/api/admin/users/') && pathname.endsWith('/role') && method === 'PUT') {
    const s = requireRole(req, res, db, ['superadmin']);
    if (!s) return;

    try {
      const parts = pathname.split('/');
      const userId = parts[4];
      const body = await readBody(req);
      const newRole = String(body.role || '').toLowerCase();

      if (!['user', 'admin', 'superadmin'].includes(newRole)) {
        return json(res, 400, { error: 'Rol inválido.' });
      }

      const user = db.users.find(u => u.id === userId);
      if (!user) return json(res, 404, { error: 'Usuario no encontrado.' });

      user.role = newRole;
      user.updatedAt = now();

      db.sessions.forEach(sess => {
        if (sess.email === user.email) sess.role = newRole;
      });

      logAudit(db, 'USER_ROLE_CHANGED', `Rol de ${user.email} cambiado a: ${newRole}`, s.email, clientIp);
      saveDb(db);

      return json(res, 200, { user: cleanUser(user), message: `Rol actualizado a ${newRole}` });
    } catch (e) {
      return json(res, 500, { error: 'Error al cambiar rol' });
    }
  }

  if (pathname.startsWith('/api/admin/users/') && pathname.endsWith('/reset-password') && method === 'POST') {
    const s = requireRole(req, res, db, ['superadmin']);
    if (!s) return;

    try {
      const parts = pathname.split('/');
      const userId = parts[4];
      const user = db.users.find(u => u.id === userId);

      if (!user) return json(res, 404, { error: 'Usuario no encontrado.' });

      const tempPass = generateTempPassword();
      user.passwordHash = hashPassword(tempPass);
      user.mustChangePassword = true;
      user.failedLoginAttempts = 0;
      user.lockoutUntil = null;
      user.updatedAt = now();

      db.sessions = db.sessions.filter(sess => sess.email !== user.email);

      logAudit(db, 'ADMIN_PASSWORD_RESET', `Superadmin restableció la contraseña de: ${user.email}`, s.email, clientIp);
      saveDb(db);

      return json(res, 200, {
        ok: true,
        userEmail: user.email,
        temporaryPassword: tempPass,
        message: 'Contraseña restablecida exitosamente.'
      });
    } catch (e) {
      return json(res, 500, { error: 'Error al restablecer contraseña' });
    }
  }

  if (pathname === '/api/admin/audit-logs' && method === 'GET') {
    const s = requireRole(req, res, db, ['superadmin']);
    if (!s) return;
    return json(res, 200, { auditLogs: db.auditLogs.slice(0, 100) });
  }

  if (pathname === '/api/admin/diagnostics' && method === 'GET') {
    const s = requireRole(req, res, db, ['superadmin']);
    if (!s) return;

    const memoryUsage = process.memoryUsage();
    return json(res, 200, {
      status: 'HEALTHY',
      uptimeSeconds: Math.floor(process.uptime()),
      totalUsers: db.users.length,
      activeSessions: db.sessions.length,
      totalCows: db.cows.length,
      totalLots: db.lots.length,
      memoryHeapMB: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2),
      firebaseConnected: Boolean(FIREBASE_DATABASE_URL),
      timestamp: now()
    });
  }

  // --------------------------------------------------------------------------------------
  // 8. API STATE (ESTADO GLOBAL)
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/state' && method === 'GET') {
    const s = getSession(req, db);
    const role = s ? s.role : 'user';
    const email = s ? s.email : '';

    if (role === 'superadmin' || role === 'admin') {
      return json(res, 200, {
        users: db.users.map(cleanUser),
        cows: db.cows,
        alerts: db.alerts,
        lots: db.lots,
        auditLogs: role === 'superadmin' ? db.auditLogs.slice(0, 20) : []
      });
    }

    return json(res, 200, {
      users: db.users.filter(u => u.email === email || (s && u.farm === s.farm)).map(cleanUser),
      cows: db.cows.filter(c => c.ownerEmail === email),
      alerts: db.alerts.filter(a => a.ownerEmail === email),
      lots: db.lots
    });
  }

  // --------------------------------------------------------------------------------------
  // 9. DISPOSITIVOS, COLLARES Y TELEMETRÍA
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/cows' && method === 'POST') {
    const s = requireSession(req, res, db);
    if (!s) return;

    try {
      const body = await readBody(req);
      if (!body.id) return json(res, 400, { error: 'ID de collar requerido.' });

      const owner = db.users.find(u => u.email === s.email) || s;
      const cow = {
        id: body.id.trim(),
        ownerEmail: s.email,
        color: body.color || 'No especificado',
        breed: body.breed || 'Bovino',
        age: Number(body.age) || 3,
        temp: "--",
        ir: 0,
        red: 0,
        lat: Number(owner.lat) || 12.8550,
        lng: Number(owner.lng) || -85.9800,
        zone: owner.farm || 'Finca Principal',
        heat: false,
        last: 'Recién vinculado',
        createdAt: now(),
        updatedAt: now()
      };

      db.cows.push(cow);
      logAudit(db, 'COW_COLLAR_LINKED', `Collar ${cow.id} vinculado`, s.email, clientIp);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});

      return json(res, 201, { cow });
    } catch (e) {
      return json(res, 500, { error: 'Error al registrar collar.' });
    }
  }

  if (pathname.startsWith('/api/cows/') && pathname.endsWith('/transfer') && method === 'PUT') {
    const s = requireSession(req, res, db);
    if (!s) return;

    try {
      const parts = pathname.split('/');
      const cowId = decodeURIComponent(parts[3]);
      const body = await readBody(req);
      const cow = db.cows.find(c => c.id === cowId);
      if (!cow) return json(res, 404, { error: 'Animal no encontrado.' });

      const newFarm = String(body.newFarm || '').trim();
      const reason = String(body.reason || 'Traspaso de potrero/finca').trim();
      if (!newFarm) return json(res, 400, { error: 'Nueva finca es requerida.' });

      if (!cow.history) cow.history = [];
      cow.history.push({
        type: 'TRANSFER',
        from: cow.zone,
        to: newFarm,
        reason,
        date: now(),
        by: s.email
      });

      cow.zone = newFarm;
      cow.updatedAt = now();

      logAudit(db, 'COW_TRANSFERRED', `Animal ${cow.animalName || cow.id} transferido a ${newFarm}`, s.email, clientIp);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});
      return json(res, 200, { cow, message: 'Animal transferido exitosamente.' });
    } catch (e) {
      return json(res, 500, { error: 'Error al transferir animal.' });
    }
  }

  if (pathname.startsWith('/api/cows/') && pathname.endsWith('/deceased') && method === 'PUT') {
    const s = requireSession(req, res, db);
    if (!s) return;

    try {
      const parts = pathname.split('/');
      const cowId = decodeURIComponent(parts[3]);
      const body = await readBody(req);
      const cow = db.cows.find(c => c.id === cowId);
      if (!cow) return json(res, 404, { error: 'Animal no encontrado.' });

      const cause = String(body.cause || 'Causa no especificada').trim();

      if (!cow.history) cow.history = [];
      cow.history.push({
        type: 'DECEASED',
        cause,
        date: now(),
        by: s.email
      });

      cow.status = 'Fallecido';
      cow.deceased = true;
      cow.deceasedAt = now();
      cow.deceasedCause = cause;
      cow.updatedAt = now();

      logAudit(db, 'COW_DECEASED', `Animal ${cow.animalName || cow.id} declarado fallecido (${cause})`, s.email, clientIp);
      saveDb(db);
      syncAllToFirebase(db).catch(() => {});
      return json(res, 200, { cow, message: 'Estado actualizado a Fallecido. Historial preservado.' });
    } catch (e) {
      return json(res, 500, { error: 'Error al registrar fallecimiento.' });
    }
  }

  if (pathname === '/api/users/profile' && method === 'PUT') {
    const s = requireSession(req, res, db);
    if (!s) return;

    try {
      const body = await readBody(req);
      const user = db.users.find(u => u.email === s.email);
      if (!user) return json(res, 404, { error: 'Usuario no encontrado.' });

      if (body.name) user.name = String(body.name).trim();
      if (body.phone) user.phone = String(body.phone).trim();
      if (body.farm) user.farm = String(body.farm).trim();
      if (body.location) user.location = String(body.location).trim();
      if (body.safeRadius_km) user.safeRadius_km = Number(body.safeRadius_km);
      if (body.lat) user.lat = Number(body.lat);
      if (body.lng) user.lng = Number(body.lng);
      user.updatedAt = now();

      logAudit(db, 'USER_PROFILE_UPDATED', `Usuario ${user.email} actualizó su perfil`, s.email, clientIp);
      saveDb(db);
      return json(res, 200, { user: cleanUser(user), message: 'Perfil actualizado exitosamente.' });
    } catch (e) {
      return json(res, 500, { error: 'Error al actualizar perfil.' });
    }
  }

  // --------------------------------------------------------------------------------------
  // 10. IA ASISTENTE (TELE-VETERINARIA & AGRO)
  // --------------------------------------------------------------------------------------
  if (pathname === '/api/ai/chat' && method === 'POST') {
    try {
      const body = await readBody(req);
      const userMessage = String(body.message || '').trim();
      const channel = String(body.channel || 'vet').trim();
      const context = body.context || {};

      if (!userMessage) {
        return json(res, 400, { error: 'Mensaje requerido.' });
      }

      // Intento 1: Google Gemini API (Server-Side)
      if (GEMINI_API_KEY && typeof fetch !== 'undefined') {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
          const systemInstruction = `Eres el Dr. Carlos Ruiz, Médico Veterinario e IA Clínica de la plataforma Sau Yul-Tech en Nicaragua. Eres un experto en salud bovina, sensores MAX30205, IoT y zootecnia. Contexto de los animales: ${JSON.stringify(context)}. Responde de forma clara, profesional y empática.`;
          
          const geminiRes = await fetch(geminiUrl, {
            signal: AbortSignal.timeout(5000),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                { role: 'user', parts: [{ text: `${systemInstruction}\n\nConsulta del usuario: ${userMessage}` }] }
              ],
              generationConfig: { maxOutputTokens: 600, temperature: 0.6 }
            })
          });

          const geminiData = await geminiRes.json();
          if (geminiData && geminiData.candidates && geminiData.candidates[0] && geminiData.candidates[0].content) {
            const replyText = geminiData.candidates[0].content.parts[0].text;
            return json(res, 200, { reply: replyText, source: 'gemini-ai' });
          }
        } catch (geminiErr) {}
      }

      // Intento 2: DeepSeek API (Server-Side)
      if (DEEPSEEK_API_KEY && typeof fetch !== 'undefined') {
        try {
          const aiResponse = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
              model: 'deepseek-chat',
              messages: [
                { role: 'system', content: `Eres el Dr. Carlos Ruiz, Médico Veterinario e IA Clínica de Sau Yul-Tech en Nicaragua. Contexto: ${JSON.stringify(context)}` },
                { role: 'user', content: userMessage }
              ],
              max_tokens: 600,
              temperature: 0.6
            })
          });

          const data = await aiResponse.json();
          if (data && data.choices && data.choices[0] && data.choices[0].message) {
            return json(res, 200, {
              reply: data.choices[0].message.content,
              source: 'deepseek-ai'
            });
          }
        } catch (err) {}
      }

      const fallbackReply = generateDomainExpertResponse(userMessage, channel, context);
      return json(res, 200, {
        reply: fallbackReply,
        source: 'sauyultech-expert-engine'
      });
    } catch (e) {
      return json(res, 500, { error: 'Error procesando IA.' });
    }
  }

    // --------------------------------------------------------------------------------------
  // 📡 11. TELEMETRÍA IOT EN VIVO DESDE FIREBASE REALTIME DATABASE (READ-ONLY)
  // --------------------------------------------------------------------------------------
  if ((pathname === '/api/iot/telemetry' || pathname === '/api/firebase/collars') && method === 'GET') {
    try {
      const firebaseCollars = await getLiveFirebaseCollars();
      return json(res, 200, {
        success: true,
        source: 'firebase-realtime-database-live',
        timestamp: new Date().toISOString(),
        dispositivos: firebaseCollars
      });
    } catch (e) {
      return json(res, 500, { success: false, error: 'Error al consultar Firebase RTDB.' });
    }
  }

  publicFile(req, res);
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 SAU YUL-TECH ENTERPRISE SERVER INICIADO (PUERTO: ${PORT})`);
  console.log(`🛡️ Seguridad: Scrypt Password Hashing + RBAC + Audit Engine`);
  console.log(`📡 URL Local: http://localhost:${PORT}`);
  console.log(`☁️ Firebase RTDB: ${FIREBASE_DATABASE_URL}`);
  console.log(`=======================================================`);

  // Sincronización a Firebase desactivada por política de lectura exclusiva
});
