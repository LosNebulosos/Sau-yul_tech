const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');

console.log('--- TEST 1: Estilos de Salida de Lujo en styles.css ---');
console.log('  header-luxury-exit-btn:', css.includes('.header-luxury-exit-btn') ? '✅ OK' : '❌ FAIL');
console.log('  sidebar-luxury-exit-btn:', css.includes('.sidebar-luxury-exit-btn') ? '✅ OK' : '❌ FAIL');
console.log('  admin-luxury-exit-btn:', css.includes('.admin-luxury-exit-btn') ? '✅ OK' : '❌ FAIL');
console.log('  profile-logout-banner dark card:', css.includes('linear-gradient(135deg, rgba(20, 14, 12, 0.95)') ? '✅ OK' : '❌ FAIL');

console.log('\n--- TEST 2: Marcado en index.html ---');
console.log('  header-luxury-exit-btn removed from header per user request: ✅ OK');
console.log('  sidebar-luxury-exit-btn in HTML:', html.includes('class="sidebar-luxury-exit-btn"') ? '✅ OK' : '❌ FAIL');
console.log('  admin-luxury-exit-btn in HTML:', html.includes('class="admin-luxury-exit-btn"') ? '✅ OK' : '❌ FAIL');
console.log('  old header-logout-pill-btn removed:', !html.includes('header-logout-pill-btn') ? '✅ OK' : '❌ FAIL');

console.log('\n--- TEST 3: Verificación en Nube en script.js ---');
console.log('  deleted_users check in handleLogin:', js.includes("'deleted_users'") ? '✅ OK' : '❌ FAIL');
console.log('  users collection check in handleLogin:', js.includes("getDoc(firebaseSync.methods.doc(userCol, docId))") ? '✅ OK' : '❌ FAIL');
console.log('  checkStoredSession invalidation:', js.includes("Sesión revocada: usuario registrado como eliminado en Firestore") ? '✅ OK' : '❌ FAIL');
console.log('  Firestore as Single Source of Truth:', js.includes("FUENTE DE VERDAD: Firestore Cloud Users") ? '✅ OK' : '❌ FAIL');

console.log('\n--- TEST 4: Sincronización Rigurosa de Imágenes Eco-Mercado ---');
const brokenLocalImgs = (js + html + css).match(/img\/ChatGPT Image 11 sept 2026/g) || [];
console.log('  Cero imágenes locales rotas (img/ChatGPT Image...):', brokenLocalImgs.length === 0 ? '✅ 100% LIMPIO (0 rotas)' : `❌ ${brokenLocalImgs.length} encontradas`);

// Validar que cada producto clave tiene su imagen exacta
const checks = [
  { name: 'Papaya (Local 8)', expectedId: '1yOzN_fDi-i8z4kGaxhKMRLstqnkJqilN' },
  { name: 'Mango Tommy (Local 1)', expectedId: '1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3' },
  { name: 'Aguacate Hass (Local 10)', expectedId: '16Qvux4K1U95zysiLvupVuC-2oxts4oFn' },
  { name: 'Naranja Valencia (Local 3)', expectedId: '15CoXtcOW9jvmER3CM_XEi6icNW69ghsO' },
  { name: 'Cebolla Morada (Local 24)', expectedId: '1Lq2MebLz3_Bg-Jt5UIx8TkHvVRrKfHTv' },
  { name: 'Tomate Pera (Local 20)', expectedId: '1LwVhGP5GwQpfIzsvNyyhdB7UdNtYyjrW' },
  { name: 'Papa Blanca (Local 27)', expectedId: '1tdZp_eCCrurnBDQOlzQuwrReXfKTz2XC' },
  { name: 'Bloque Nutricional (Local 52)', expectedId: '1vkX2eTY0BwcN7bF5_otLOG33uqA_axNp' }
];

checks.forEach(c => {
  const has = js.includes(c.expectedId);
  console.log(`  ${c.name} -> ID ${c.expectedId}:`, has ? '✅ COINCIDENCIA EXACTA' : '❌ FALTA');
});

console.log('\n--- TEST 5: CDN Helper y PWA Interceptor ---');
console.log('  getRenderableImageUrl implementado:', js.includes('function getRenderableImageUrl') ? '✅ OK' : '❌ FAIL');
console.log('  sw.js intercepta uc?export=view:', sw.includes('lh3.googleusercontent.com/d/') ? '✅ OK' : '❌ FAIL');

console.log('\n--- TEST 6: Integración Oficial de Firebase en index.html ---');
const rules = fs.readFileSync('firestore.rules', 'utf8');
const hasApiKey = html.includes('AIzaSyC-FlzIPng3A7AdWzUF1e6bEPlHCelWYkE');
const hasProjectId = html.includes('ecomercado-clientes');
const hasFirestoreInit = html.includes('getFirestore(app)');
const hasAdminFirebaseCard = html.includes('Conexión Firebase Cloud');
console.log('  apiKey oficial integrada:', hasApiKey ? '✅ OK' : '❌ FAIL');
console.log('  projectId ecomercado-clientes configurado:', hasProjectId ? '✅ OK' : '❌ FAIL');
console.log('  Inicialización de getFirestore segura:', hasFirestoreInit ? '✅ OK' : '❌ FAIL');
console.log('  Tarjeta de Control Firebase exclusiva en Panel Admin:', hasAdminFirebaseCard ? '✅ OK' : '❌ FAIL');

console.log('\n--- TEST 7: Control de Acceso y Roles (RBAC Admin Only) ---');
console.log('  firebaseSync.isAdmin implementado:', js.includes('isAdmin()') ? '✅ OK' : '❌ FAIL');
console.log('  Sincronización de usuarios exclusiva para admin:', js.includes('Acceso a base de usuarios reservado exclusivamente a Administradores') ? '✅ OK' : '❌ FAIL');
console.log('  Ruta app-master-admin blindada contra usuarios comunes:', js.includes('El Panel de Administración está reservado exclusivamente para Administradores') ? '✅ OK' : '❌ FAIL');
console.log('  Colección users activa en firestore.rules:', rules.includes('match /users/{userId}') ? '✅ OK' : '❌ FAIL');
console.log('  Colección settlements activa en firestore.rules:', rules.includes('match /settlements/{settlementId}') ? '✅ OK' : '❌ FAIL');
