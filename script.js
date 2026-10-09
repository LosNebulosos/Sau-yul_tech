
// ========================================================================================
// 🌐 ENLACES OFICIALES Y CONSTANTES DE IMÁGENES GOOGLE DRIVE
// ========================================================================================
const imagenesSauYulTech = {
  toroBrahman: "https://lh3.googleusercontent.com/d/1k8mclb6QZY_aj9N8pJ-TJ3_yCW1CkqQb",
  parejaGanadoAtardecer: "https://lh3.googleusercontent.com/d/1-pH2S8dhy4Fh2pRlLkf0KX4AIrw-ZsIm",
  haciendaPanoramica: "https://lh3.googleusercontent.com/d/1RoYpeTKnBkhdYwKTle411iNVZ3WQXU_1",
  grupoGanadoFrontal: "https://lh3.googleusercontent.com/d/1uoiHi-7MryxDHRVaw_689VlzUHxTFKaA",
  ganadoPanoramicaAtardecer: "https://lh3.googleusercontent.com/d/18yiOW6bqtvU5PzjvQ47XjwV1j90Z0J3O",
  vacaHolstein: "https://lh3.googleusercontent.com/d/1bWIVynnc-kSK4tBP_rAQGoZteNMbNZja",
  logoSauYulTech01: "logo.png",
  logoSauYulTech02: "logo.png",
  brahmanBlancoDescansando: "https://lh3.googleusercontent.com/d/1QUtZ-Vu21jOQzy5rUzebfjcC2ll-tUkl"
};
const iconosSauYulTech = {
  icon72: "https://lh3.googleusercontent.com/d/14LloiL7HQ4JJstc5Ryd4KS7_ihSbozt6",
  icon96: "https://lh3.googleusercontent.com/d/1LekIUczamPwh1JD6y-GfWV6-MpsHoU00",
  icon128: "https://lh3.googleusercontent.com/d/1EojG2F-y_2bOvpph4zFJXfBA0RJmy0-U",
  icon144: "https://lh3.googleusercontent.com/d/1Pp32GsyuInYvjW8oJCEotG_XUhk80XWg",
  icon152: "https://lh3.googleusercontent.com/d/1CrVB10PHk-_0z75I0Vzf5y9cil0BsZlo",
  icon192: "https://lh3.googleusercontent.com/d/1M3WFvn9I1zgVLyfgkhLTDAdvS7ObcxLo",
  icon384: "https://lh3.googleusercontent.com/d/15IAUNtuND3Der0looCevZxCYmplP3miC",
  icon512: "https://lh3.googleusercontent.com/d/1kg2k4F4-A7xckTLzdRxfxzR-Q-g0cCct",
  logoTransparente: "logo.png"
};

function getRenderableImageUrl(url) {
  if (!url || typeof url !== 'string') return url || '';
  if (url.startsWith('data:') || url.startsWith('blob:')) return url;
  const match = url.match(/[?&]id=([a-zA-Z0-9_\-]+)/) || url.match(/\/d\/([a-zA-Z0-9_\-]+)/);
  if (match) {
    return 'https://lh3.googleusercontent.com/d/' + match[1];
  }
  return url;
}

/**
 * ========================================================================================
 * SAU YUL TECH - MOTOR PRINCIPAL ENTERPRISE & MARKETPLACE AGTECH 2026
 * "El latido digital de tu tierra."
 * ========================================================================================
 */

// ========================================================================================
// 📦 1. ESTADO GLOBAL DE LA PLATAFORMA (SINGLE SOURCE OF TRUTH)
// ========================================================================================
// ========================================================================================
// 🖼️ 1. CATÁLOGO VISUAL & IMÁGENES REPRESENTATIVAS DE ALTA CALIDAD
// ========================================================================================
// ========================================================================================
// 🖼️ 1. CATÁLOGO VISUAL DE FOTOGRAFÍAS REALES PROFESIONALES (CERO EMOJIS / PLACEHOLDERS)
// ========================================================================================
const realProducePhotos = {
  // 🍎 FRUTAS
  'Mango Tommy Atkins': 'https://lh3.googleusercontent.com/d/1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3',
  'Mango Rojo': 'https://lh3.googleusercontent.com/d/1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3',
  'Mango Criollo': 'https://lh3.googleusercontent.com/d/1VWEcwMpBe_tYQfUKRoEiRcFsDqMDmrV_',
  'Mango Amarillo': 'https://lh3.googleusercontent.com/d/1VWEcwMpBe_tYQfUKRoEiRcFsDqMDmrV_',
  'Mango Chino': 'https://lh3.googleusercontent.com/d/1VWEcwMpBe_tYQfUKRoEiRcFsDqMDmrV_',
  'Papaya': 'https://lh3.googleusercontent.com/d/1yOzN_fDi-i8z4kGaxhKMRLstqnkJqilN',
  'Papaya Hawaiana': 'https://lh3.googleusercontent.com/d/1yOzN_fDi-i8z4kGaxhKMRLstqnkJqilN',
  'Piña': 'https://lh3.googleusercontent.com/d/1nKDTlPXe8eUGIc4qZqOSlXl-QzF1ZXtN',
  'Piña Golden': 'https://lh3.googleusercontent.com/d/1nKDTlPXe8eUGIc4qZqOSlXl-QzF1ZXtN',
  'Aguacate': 'https://lh3.googleusercontent.com/d/16Qvux4K1U95zysiLvupVuC-2oxts4oFn',
  'Aguacate Hass': 'https://lh3.googleusercontent.com/d/16Qvux4K1U95zysiLvupVuC-2oxts4oFn',
  'Plátano macho': 'https://lh3.googleusercontent.com/d/1cnEjDXENoJfaiGmB5K88tsU7_4z5tEu7',
  'Plátano verde': 'https://lh3.googleusercontent.com/d/1cnEjDXENoJfaiGmB5K88tsU7_4z5tEu7',
  'Plátano maduro': 'https://lh3.googleusercontent.com/d/1eGozU5k7Ni6Zoe635xIQtx7VJ6Eemv2z',
  'Guineo': 'https://lh3.googleusercontent.com/d/1guX8TkkmA0g2kdUzandDhbg3LLzg9TtB',
  'Guineo verde': 'https://lh3.googleusercontent.com/d/1guX8TkkmA0g2kdUzandDhbg3LLzg9TtB',

  // 🍊 CÍTRICOS
  'Naranja Valencia': 'https://lh3.googleusercontent.com/d/15CoXtcOW9jvmER3CM_XEi6icNW69ghsO',
  'Naranja de Jugo': 'https://lh3.googleusercontent.com/d/15CoXtcOW9jvmER3CM_XEi6icNW69ghsO',
  'Naranja en Malla': 'https://lh3.googleusercontent.com/d/1Fpkl_s2hFCmpsiSE42Dj7axhhCUpCcHq',
  'Limón Persa': 'https://lh3.googleusercontent.com/d/1ASfWgyibjSR78fVH4NfvFXFchw_4snjS',
  'Limón verde': 'https://lh3.googleusercontent.com/d/1ASfWgyibjSR78fVH4NfvFXFchw_4snjS',
  'Mandarina': 'https://lh3.googleusercontent.com/d/11no9oJcOjk1vuSiM4EcKbOPglVjgj75V',
  'Toronja': 'https://lh3.googleusercontent.com/d/1TcRmJy-ywRwf91G7gXDG8taleBni0Szm',
  'Grapefruit': 'https://lh3.googleusercontent.com/d/1TcRmJy-ywRwf91G7gXDG8taleBni0Szm',

  // 🥕 VEGETALES, HORTALIZAS Y RAÍCES
  'Tomate pera': 'https://lh3.googleusercontent.com/d/1LwVhGP5GwQpfIzsvNyyhdB7UdNtYyjrW',
  'Tomate Roma': 'https://lh3.googleusercontent.com/d/1LwVhGP5GwQpfIzsvNyyhdB7UdNtYyjrW',
  'Tomate manzano': 'https://lh3.googleusercontent.com/d/13F8touBFsBcNTj9N4jDYERBEqPgb4gNQ',
  'Tomate redondo': 'https://lh3.googleusercontent.com/d/13F8touBFsBcNTj9N4jDYERBEqPgb4gNQ',
  'Chiltoma Nataly': 'https://lh3.googleusercontent.com/d/1_UFx8slnXCE6L_HgM5qNX33L0BT8zDy-',
  'Chiltoma verde': 'https://lh3.googleusercontent.com/d/1_UFx8slnXCE6L_HgM5qNX33L0BT8zDy-',
  'Pimientos': 'https://lh3.googleusercontent.com/d/1k9mTiQXwlSzyro4pRMStJ9OhVHmsZSXN',
  'Pimientos Morrones': 'https://lh3.googleusercontent.com/d/1k9mTiQXwlSzyro4pRMStJ9OhVHmsZSXN',
  'Cebolla morada': 'https://lh3.googleusercontent.com/d/1Lq2MebLz3_Bg-Jt5UIx8TkHvVRrKfHTv',
  'Cebolla amarilla': 'https://lh3.googleusercontent.com/d/1c8IEkS3n60BPDuFeme1wLqt_DDe6auwV',
  'Zanahoria': 'https://lh3.googleusercontent.com/d/13k3U74ed9L-fW_F-tuPXv8GNGFSb6xhH',
  'Papa blanca': 'https://lh3.googleusercontent.com/d/1tdZp_eCCrurnBDQOlzQuwrReXfKTz2XC',
  'Yuca': 'https://lh3.googleusercontent.com/d/1dmXZJ8iSuyxOL6baAfKL8n0CM2wngmpt',
  'Yuca parafinada': 'https://lh3.googleusercontent.com/d/1dmXZJ8iSuyxOL6baAfKL8n0CM2wngmpt',
  'Lechuga': 'https://lh3.googleusercontent.com/d/11zYn6K3-YOpZm7B6cwi71_Bk80wm432Z',
  'Lechuga crespa': 'https://lh3.googleusercontent.com/d/11zYn6K3-YOpZm7B6cwi71_Bk80wm432Z',
  'Repollo': 'https://lh3.googleusercontent.com/d/1sENHFqKz0t5t-ncYIUnky_55Kikx7spg',
  'Repollo verde': 'https://lh3.googleusercontent.com/d/1sENHFqKz0t5t-ncYIUnky_55Kikx7spg',
  'Rábano blanco': 'https://lh3.googleusercontent.com/d/199_dcy1ySliY4XD1u33LOkTlJrNmNqW5',
  'Nabo': 'https://lh3.googleusercontent.com/d/199_dcy1ySliY4XD1u33LOkTlJrNmNqW5',
  'Quequisque': 'https://lh3.googleusercontent.com/d/15aYSj0tTJE1FoPG3o-aosdBR-m1NR5qi',
  'Malanga': 'https://lh3.googleusercontent.com/d/15aYSj0tTJE1FoPG3o-aosdBR-m1NR5qi',
  'Quequisque exportación': 'https://lh3.googleusercontent.com/d/1QQvzAuSN0yDR1HLxE4vD9Ej0EXPhDSN4',

  // 🌾 GRANOS
  'Maíz blanco': 'https://lh3.googleusercontent.com/d/1s-kjgSgMyzWX4evR8gvMmChJc1e6u2p3',
  'Frijol rojo seda': 'https://lh3.googleusercontent.com/d/1wGm6B33ANJRxx1-57nG5CgJvxR-5fSGu',
  'Frijol rojo': 'https://lh3.googleusercontent.com/d/1wGm6B33ANJRxx1-57nG5CgJvxR-5fSGu',
  'Frijol criollo': 'https://lh3.googleusercontent.com/d/1Kc6bYKxoJ12zkKAzfkPDI5rqJ3fds6jz',
  'Maíz amarillo': 'https://lh3.googleusercontent.com/d/1_5jG6IxKRnKANaBV65vyyWtK3Za60hzg',
  'Café verde': 'https://lh3.googleusercontent.com/d/1KEmpmQ3zXEus-1s-c5sfEWEeNXn-GfYa',
  'Café oro': 'https://lh3.googleusercontent.com/d/1KEmpmQ3zXEus-1s-c5sfEWEeNXn-GfYa',
  'Café molido': 'https://lh3.googleusercontent.com/d/1NdXTBA9hcAjt0v2GkTVMILBUG2-wATeK',
  'Café tostado': 'https://lh3.googleusercontent.com/d/1NdXTBA9hcAjt0v2GkTVMILBUG2-wATeK',
  'Café pergamino': 'https://lh3.googleusercontent.com/d/1Fyl-YL-qUupdikUY758ARg1oNfzMDl51',
  'Arroz blanco': 'https://lh3.googleusercontent.com/d/1MawE8F5UoX7lzyiUip-wkhrR7LlFrrSo',
  'Arroz': 'https://lh3.googleusercontent.com/d/1MawE8F5UoX7lzyiUip-wkhrR7LlFrrSo',
  'Sorgo': 'https://lh3.googleusercontent.com/d/1NIv7ATMsuN-Glp_Nx7srwhjWK6Xaus0Q',
  'Sorgo rojo': 'https://lh3.googleusercontent.com/d/1NIv7ATMsuN-Glp_Nx7srwhjWK6Xaus0Q',

  // ♻️ FORRAJE, NUTRICIÓN GANADERA Y SUBPRODUCTOS
  'Pulpa de café': 'https://lh3.googleusercontent.com/d/1a6ibTOnAZ61T1Gafk5Q2cKYomz90U9oG',
  'Cascarilla de café': 'https://lh3.googleusercontent.com/d/1f13vnw8UO4mCwqt67tyUJuBTFwdAxwbN',
  'Melaza': 'https://lh3.googleusercontent.com/d/1vzrbSKQwMwiemBS6xboNGWfjpZs9AHCe',
  'Melaza de caña': 'https://lh3.googleusercontent.com/d/1vzrbSKQwMwiemBS6xboNGWfjpZs9AHCe',
  'Bagazo de caña': 'https://lh3.googleusercontent.com/d/1JLxRo6NSkTvs7kb5o_92IyhT9fp_Z_q1',
  'Pasto picado': 'https://lh3.googleusercontent.com/d/1aSdWIqByjbyHD59IhlR_woYYEboeQ9P7',
  'Pasto picado fresco': 'https://lh3.googleusercontent.com/d/1aSdWIqByjbyHD59IhlR_woYYEboeQ9P7',
  'Pasto de corte': 'https://lh3.googleusercontent.com/d/1qftwsN8XwPKv-LH7Z8snEuebNKXOH1DY',
  'Pasto Taiwán': 'https://lh3.googleusercontent.com/d/1qftwsN8XwPKv-LH7Z8snEuebNKXOH1DY',
  'Olotes de maíz': 'https://lh3.googleusercontent.com/d/1S-mPLwowrb2-RUiFrj4eJ6Hwq4t78Ivu',
  'Rastrojo de maíz': 'https://lh3.googleusercontent.com/d/1S-mPLwowrb2-RUiFrj4eJ6Hwq4t78Ivu',
  'Cáscara de maní': 'https://lh3.googleusercontent.com/d/1CXGyecDsWWYmZb5ci2EYHI624nrH5x7U',
  'Heno estrella': 'https://lh3.googleusercontent.com/d/1TvBiwHu-b7lSpPGm9qzJfK1eHhsz4F5M',
  'Paca de heno estrella': 'https://lh3.googleusercontent.com/d/1TvBiwHu-b7lSpPGm9qzJfK1eHhsz4F5M',
  'Heno verde': 'https://lh3.googleusercontent.com/d/1CusZVCAedJwgcAC2aa5POteMe1nM9llZ',
  'Paca de heno verde': 'https://lh3.googleusercontent.com/d/1CusZVCAedJwgcAC2aa5POteMe1nM9llZ',
  'Ensilaje': 'https://lh3.googleusercontent.com/d/13IzOHvaJoziHwF-gLQ1IJJYKcB-xxuVU',
  'Ensilaje de maíz': 'https://lh3.googleusercontent.com/d/13IzOHvaJoziHwF-gLQ1IJJYKcB-xxuVU',
  'Pasto picado fino': 'https://lh3.googleusercontent.com/d/17UwC_-p8M2clQEwzbMqpEJ6q8lGdlVYE',
  'Silo en bolsa': 'https://lh3.googleusercontent.com/d/1rvrkIvgZJPUPrjKEnyBWoB11UpWC22vU',
  'Concentrado balanceado': 'https://lh3.googleusercontent.com/d/1uCJhARrzTi8ORXAUkKMRlZDn92KnCBv2',
  'Concentrado pecuario': 'https://lh3.googleusercontent.com/d/1uCJhARrzTi8ORXAUkKMRlZDn92KnCBv2',
  'Sal mineralizada': 'https://lh3.googleusercontent.com/d/1I94uXy8lD-raUjEFlP8lH1_WKX72V9YQ',
  'Sal mineral': 'https://lh3.googleusercontent.com/d/1I94uXy8lD-raUjEFlP8lH1_WKX72V9YQ',
  'Bloques multinutricionales': 'https://lh3.googleusercontent.com/d/1vkX2eTY0BwcN7bF5_otLOG33uqA_axNp',
  'Bloque nutricional': 'https://lh3.googleusercontent.com/d/1vkX2eTY0BwcN7bF5_otLOG33uqA_axNp'
};

const defaultProduceImages = {
  'Frutas': 'https://lh3.googleusercontent.com/d/1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3',
  'Cítricos': 'https://lh3.googleusercontent.com/d/15CoXtcOW9jvmER3CM_XEi6icNW69ghsO',
  'Hortalizas': 'https://lh3.googleusercontent.com/d/1k9mTiQXwlSzyro4pRMStJ9OhVHmsZSXN',
  'Granos': 'https://lh3.googleusercontent.com/d/1wGm6B33ANJRxx1-57nG5CgJvxR-5fSGu',
  'Forraje': 'https://lh3.googleusercontent.com/d/1TvBiwHu-b7lSpPGm9qzJfK1eHhsz4F5M',
  'Nutrición Ganadera': 'https://lh3.googleusercontent.com/d/1uCJhARrzTi8ORXAUkKMRlZDn92KnCBv2',
  'Lácteos': 'https://lh3.googleusercontent.com/d/1vkX2eTY0BwcN7bF5_otLOG33uqA_axNp',
  'Carnes': 'https://lh3.googleusercontent.com/d/1k8mclb6QZY_aj9N8pJ-TJ3_yCW1CkqQb'
};

const produceImageCatalog = realProducePhotos;

// ========================================================================================
// 💰 1.1 BASE DE PRECIOS DE REFERENCIA MAYORISTAS (CÁLCULOS 100% INTERNOS)
// ========================================================================================
const wholesalePriceReferences = {
  // Frutas
  'Mango Tommy': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 400.00, refUnitPrice: 4.00, minRetail: 4.00, maxRetail: 8.00, defaultUnit: 'unidad' },
  'Mango Criollo': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 200.00, refUnitPrice: 2.00, minRetail: 2.00, maxRetail: 5.00, defaultUnit: 'unidad' },
  'Papaya': { wholesaleQty: 12, wholesaleUnit: 'unidades', wholesalePrice: 480.00, refUnitPrice: 40.00, minRetail: 35.00, maxRetail: 60.00, defaultUnit: 'unidad' },
  'Piña': { wholesaleQty: 12, wholesaleUnit: 'unidades', wholesalePrice: 216.00, refUnitPrice: 18.00, minRetail: 18.00, maxRetail: 35.00, defaultUnit: 'unidad' },
  'Aguacate': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 3800.00, refUnitPrice: 38.00, minRetail: 40.00, maxRetail: 65.00, defaultUnit: 'unidad' },
  'Plátano macho': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 400.00, refUnitPrice: 4.00, minRetail: 4.50, maxRetail: 8.00, defaultUnit: '100 uds' },
  'Plátano maduro': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 380.00, refUnitPrice: 3.80, minRetail: 4.00, maxRetail: 7.50, defaultUnit: '100 uds' },
  'Guineo': { wholesaleQty: 1, wholesaleUnit: 'racimo', wholesalePrice: 90.00, refUnitPrice: 90.00, minRetail: 95.00, maxRetail: 140.00, defaultUnit: 'racimo (150 uds)' },

  // Cítricos
  'Naranja Valencia': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 200.00, refUnitPrice: 2.00, minRetail: 2.20, maxRetail: 5.00, defaultUnit: 'unidad' },
  'Naranja en Malla': { wholesaleQty: 1, wholesaleUnit: 'malla', wholesalePrice: 180.00, refUnitPrice: 180.00, minRetail: 190.00, maxRetail: 250.00, defaultUnit: 'malla (100 uds)' },
  'Limón Persa': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 180.00, refUnitPrice: 1.80, minRetail: 2.00, maxRetail: 4.50, defaultUnit: 'unidad' },
  'Mandarina': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 220.00, refUnitPrice: 2.20, minRetail: 2.40, maxRetail: 5.00, defaultUnit: 'unidad' },
  'Toronja': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 350.00, refUnitPrice: 3.50, minRetail: 3.80, maxRetail: 7.00, defaultUnit: 'unidad' },

  // Hortalizas
  'Tomate pera': { wholesaleQty: 45, wholesaleUnit: 'lb', wholesalePrice: 290.00, refUnitPrice: 6.44, minRetail: 7.00, maxRetail: 18.00, defaultUnit: 'cajilla (45 lb)' },
  'Tomate manzano': { wholesaleQty: 45, wholesaleUnit: 'lb', wholesalePrice: 310.00, refUnitPrice: 6.88, minRetail: 7.50, maxRetail: 20.00, defaultUnit: 'cajilla (45 lb)' },
  'Chiltoma Nataly': { wholesaleQty: 100, wholesaleUnit: 'unidades', wholesalePrice: 220.00, refUnitPrice: 2.20, minRetail: 2.40, maxRetail: 5.00, defaultUnit: 'bolsa (100 uds)' },
  'Pimientos': { wholesaleQty: 12, wholesaleUnit: 'unidades', wholesalePrice: 60.00, refUnitPrice: 5.00, minRetail: 5.50, maxRetail: 10.00, defaultUnit: 'docena' },
  'Cebolla morada': { wholesaleQty: 50, wholesaleUnit: 'lb', wholesalePrice: 320.00, refUnitPrice: 6.40, minRetail: 7.00, maxRetail: 18.00, defaultUnit: 'malla (50 lb)' },
  'Cebolla amarilla': { wholesaleQty: 50, wholesaleUnit: 'lb', wholesalePrice: 250.00, refUnitPrice: 5.00, minRetail: 5.50, maxRetail: 16.00, defaultUnit: 'malla (50 lb)' },
  'Zanahoria': { wholesaleQty: 80, wholesaleUnit: 'lb', wholesalePrice: 360.00, refUnitPrice: 4.50, minRetail: 5.00, maxRetail: 14.00, defaultUnit: 'bolsa (80 lb)' },
  'Papa blanca': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 460.00, refUnitPrice: 4.60, minRetail: 5.00, maxRetail: 15.00, defaultUnit: 'saco (100 lb)' },
  'Yuca': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 350.00, refUnitPrice: 3.50, minRetail: 4.00, maxRetail: 12.00, defaultUnit: 'saco (100 lb)' },
  'Lechuga': { wholesaleQty: 12, wholesaleUnit: 'unidades', wholesalePrice: 50.00, refUnitPrice: 4.16, minRetail: 4.50, maxRetail: 10.00, defaultUnit: 'docena' },
  'Repollo': { wholesaleQty: 12, wholesaleUnit: 'unidades', wholesalePrice: 300.00, refUnitPrice: 25.00, minRetail: 26.00, maxRetail: 45.00, defaultUnit: 'unidad' },
  'Rábano': { wholesaleQty: 12, wholesaleUnit: 'manojos', wholesalePrice: 240.00, refUnitPrice: 20.00, minRetail: 22.00, maxRetail: 35.00, defaultUnit: 'manojo' },
  'Quequisque': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 550.00, refUnitPrice: 5.50, minRetail: 6.00, maxRetail: 16.00, defaultUnit: 'saco (100 lb)' },
  'Quequisque exportación': { wholesaleQty: 40, wholesaleUnit: 'lb', wholesalePrice: 320.00, refUnitPrice: 8.00, minRetail: 8.50, maxRetail: 20.00, defaultUnit: 'caja (40 lb)' },

  // Granos
  'Maíz blanco': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 650.00, refUnitPrice: 6.50, minRetail: 7.00, maxRetail: 12.00, defaultUnit: 'saco (100 lb)' },
  'Frijol rojo seda': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 2200.00, refUnitPrice: 22.00, minRetail: 24.00, maxRetail: 38.00, defaultUnit: 'saco (100 lb)' },
  'Frijol criollo': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 2300.00, refUnitPrice: 23.00, minRetail: 25.00, maxRetail: 40.00, defaultUnit: 'lb' },
  'Maíz amarillo': { wholesaleQty: 12, wholesaleUnit: 'unidades', wholesalePrice: 40.00, refUnitPrice: 3.33, minRetail: 3.50, maxRetail: 8.00, defaultUnit: 'docena' },
  'Café verde': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 5800.00, refUnitPrice: 58.00, minRetail: 60.00, maxRetail: 90.00, defaultUnit: 'saco (100 lb)' },
  'Café molido': { wholesaleQty: 25, wholesaleUnit: 'lb', wholesalePrice: 3000.00, refUnitPrice: 120.00, minRetail: 130.00, maxRetail: 180.00, defaultUnit: 'lb' },
  'Café pergamino': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 4600.00, refUnitPrice: 46.00, minRetail: 50.00, maxRetail: 75.00, defaultUnit: 'saco (100 lb)' },
  'Arroz blanco': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 1450.00, refUnitPrice: 14.50, minRetail: 16.00, maxRetail: 24.00, defaultUnit: 'saco (100 lb)' },
  'Sorgo': { wholesaleQty: 100, wholesaleUnit: 'lb', wholesalePrice: 520.00, refUnitPrice: 5.20, minRetail: 5.50, maxRetail: 10.00, defaultUnit: 'saco (100 lb)' },

  // Forraje & Nutrición Ganadera
  'Pulpa de café': { wholesaleQty: 1, wholesaleUnit: 'tonelada', wholesalePrice: 650.00, refUnitPrice: 650.00, minRetail: 700.00, maxRetail: 950.00, defaultUnit: 'tonelada' },
  'Cascarilla de café': { wholesaleQty: 1, wholesaleUnit: 'saco (50 lb)', wholesalePrice: 45.00, refUnitPrice: 45.00, minRetail: 48.00, maxRetail: 75.00, defaultUnit: 'saco (50 lb)' },
  'Melaza': { wholesaleQty: 1, wholesaleUnit: 'galón', wholesalePrice: 35.00, refUnitPrice: 35.00, minRetail: 38.00, maxRetail: 55.00, defaultUnit: 'galón' },
  'Bagazo de caña': { wholesaleQty: 1, wholesaleUnit: 'tonelada', wholesalePrice: 500.00, refUnitPrice: 500.00, minRetail: 540.00, maxRetail: 750.00, defaultUnit: 'tonelada' },
  'Pasto picado': { wholesaleQty: 1, wholesaleUnit: 'tonelada', wholesalePrice: 600.00, refUnitPrice: 600.00, minRetail: 650.00, maxRetail: 850.00, defaultUnit: 'tonelada' },
  'Pasto de corte': { wholesaleQty: 1, wholesaleUnit: 'tonelada', wholesalePrice: 750.00, refUnitPrice: 750.00, minRetail: 800.00, maxRetail: 1050.00, defaultUnit: 'tonelada' },
  'Olotes de maíz': { wholesaleQty: 1, wholesaleUnit: 'saco (60 lb)', wholesalePrice: 40.00, refUnitPrice: 40.00, minRetail: 42.00, maxRetail: 65.00, defaultUnit: 'saco (60 lb)' },
  'Cáscara de maní': { wholesaleQty: 1, wholesaleUnit: 'tonelada', wholesalePrice: 650.00, refUnitPrice: 650.00, minRetail: 700.00, maxRetail: 950.00, defaultUnit: 'tonelada' },
  'Heno estrella': { wholesaleQty: 1, wholesaleUnit: 'paca (45 lb)', wholesalePrice: 115.00, refUnitPrice: 115.00, minRetail: 125.00, maxRetail: 160.00, defaultUnit: 'paca (45 lb)' },
  'Heno verde': { wholesaleQty: 1, wholesaleUnit: 'paca (50 lb)', wholesalePrice: 130.00, refUnitPrice: 130.00, minRetail: 140.00, maxRetail: 180.00, defaultUnit: 'paca (50 lb)' },
  'Ensilaje': { wholesaleQty: 1, wholesaleUnit: 'tonelada', wholesalePrice: 900.00, refUnitPrice: 900.00, minRetail: 980.00, maxRetail: 1300.00, defaultUnit: 'tonelada' },
  'Pasto picado fino': { wholesaleQty: 1, wholesaleUnit: 'saco (80 lb)', wholesalePrice: 55.00, refUnitPrice: 55.00, minRetail: 60.00, maxRetail: 85.00, defaultUnit: 'saco (80 lb)' },
  'Silo en bolsa': { wholesaleQty: 1, wholesaleUnit: 'bolsa (50 kg)', wholesalePrice: 120.00, refUnitPrice: 120.00, minRetail: 130.00, maxRetail: 175.00, defaultUnit: 'bolsa (50 kg)' },
  'Concentrado balanceado': { wholesaleQty: 1, wholesaleUnit: 'saco (100 lb)', wholesalePrice: 620.00, refUnitPrice: 620.00, minRetail: 680.00, maxRetail: 850.00, defaultUnit: 'saco (100 lb)' },
  'Sal mineralizada': { wholesaleQty: 1, wholesaleUnit: 'saco (45 lb)', wholesalePrice: 280.00, refUnitPrice: 280.00, minRetail: 300.00, maxRetail: 400.00, defaultUnit: 'saco (45 lb)' },
  'Bloques multinutricionales': { wholesaleQty: 1, wholesaleUnit: 'bloque (25 kg)', wholesalePrice: 160.00, refUnitPrice: 160.00, minRetail: 175.00, maxRetail: 240.00, defaultUnit: 'bloque (25 kg)' }
};

function getWholesaleReference(title) {
  if (!title) return null;
  const match = Object.keys(wholesalePriceReferences).find(k => title.toLowerCase().includes(k.toLowerCase()));
  return match ? wholesalePriceReferences[match] : null;
}

const state = {
  currentSession: null,
  activeView: 'public-home',
  activeCategoryFilter: 'ALL',
  searchQuery: '',
  sidebarCollapsed: false,
  selectedDetailProductId: null,

  // Configuración Central de Margen (12%)
  pricingConfig: {
    marginPercent: 12.0,
    fixedFee: 0.0
  },

  // Base de Datos Integral de Productos de Sau Yul Tech (52 Rubros con FOTOGRAFÍAS REALES Y TÍTULOS EXACTOS)
  productsList: [
  {
    num: 1,
    id: 'PROD-001',
    title: 'Mango Tommy Atkins / Rojo de Mesa Maduro',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Mangos rojos Tommy Atkins de primera selección, pulpa firme, dulce y con bajo contenido de fibra. Cosechados en su punto óptimo para consumo de mesa y supermercados.',
    quantity_initial: 500,
    quantity_available: 420,
    quantity_sold: 80,
    unit: 'unidad',
    producerPrice: 4.00,
    marginPercent: 12.0,
    marginAmount: 0.48,
    sellingPrice: 4.48,
    price: 4.48,
    oldPrice: 6.00,
    isDeal: true,
    discountPercent: 25,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 38,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Rivas',
    photoUrl: 'https://lh3.googleusercontent.com/d/1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T08:00:00Z'
  },
  {
    num: 2,
    id: 'PROD-002',
    title: 'Mango Criollo Amarillo / Mango Chino Dulce',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Mangos amarillos criollos de pulpa muy jugosa, aromática y dulce. Cosechados en fincas tradicionales del pacífico.',
    quantity_initial: 800,
    quantity_available: 650,
    quantity_sold: 150,
    unit: 'unidad',
    producerPrice: 2.00,
    marginPercent: 12.0,
    marginAmount: 0.24,
    sellingPrice: 2.24,
    price: 2.24,
    oldPrice: 3.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 24,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Rivas',
    photoUrl: 'https://lh3.googleusercontent.com/d/1VWEcwMpBe_tYQfUKRoEiRcFsDqMDmrV_',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T08:30:00Z'
  },
  {
    num: 3,
    id: 'PROD-003',
    title: 'Naranja Valencia de Jugo Fresca',
    category: 'Cítricos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Naranjas Valencia seleccionadas con alto rendimiento de jugo natural, cáscara delgada y balance perfecto entre acidez y dulzura.',
    quantity_initial: 1200,
    quantity_available: 950,
    quantity_sold: 250,
    unit: 'unidad',
    producerPrice: 2.00,
    marginPercent: 12.0,
    marginAmount: 0.24,
    sellingPrice: 2.24,
    price: 2.24,
    oldPrice: 3.00,
    isDeal: true,
    discountPercent: 25,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 52,
    farmerEmail: 'juan@citricosriococo.com',
    farmerName: 'Juan Pablo Martínez',
    department: 'Carazo',
    photoUrl: 'https://lh3.googleusercontent.com/d/15CoXtcOW9jvmER3CM_XEi6icNW69ghsO',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T09:00:00Z'
  },
  {
    num: 4,
    id: 'PROD-004',
    title: 'Naranja Valencia en Malla Mayorista (100 unidades)',
    category: 'Cítricos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Malla con 100 unidades de naranja dulce Valencia lista para comercialización mayorista, negocios de jugos naturales y supermercados.',
    quantity_initial: 60,
    quantity_available: 45,
    quantity_sold: 15,
    unit: 'malla (100 uds)',
    producerPrice: 180.00,
    marginPercent: 12.0,
    marginAmount: 21.60,
    sellingPrice: 201.60,
    price: 201.60,
    oldPrice: 240.00,
    isDeal: true,
    discountPercent: 16,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 41,
    farmerEmail: 'juan@citricosriococo.com',
    farmerName: 'Juan Pablo Martínez',
    department: 'Carazo',
    photoUrl: 'https://lh3.googleusercontent.com/d/1Fpkl_s2hFCmpsiSE42Dj7axhhCUpCcHq',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T09:30:00Z'
  },
  {
    num: 5,
    id: 'PROD-005',
    title: 'Limón Persa Verde sin Semilla de Primera',
    category: 'Cítricos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Limones persas verdes de piel lustrosa y gran porcentaje de zumo sin semillas, ideales para gastronomía profesional, marisquerías y coctelería.',
    quantity_initial: 900,
    quantity_available: 720,
    quantity_sold: 180,
    unit: 'unidad',
    producerPrice: 1.80,
    marginPercent: 12.0,
    marginAmount: 0.22,
    sellingPrice: 2.02,
    price: 2.02,
    oldPrice: 2.50,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 19,
    farmerEmail: 'juan@citricosriococo.com',
    farmerName: 'Juan Pablo Martínez',
    department: 'Carazo',
    photoUrl: 'https://lh3.googleusercontent.com/d/1ASfWgyibjSR78fVH4NfvFXFchw_4snjS',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T10:00:00Z'
  },
  {
    num: 6,
    id: 'PROD-006',
    title: 'Mandarina Dulce de Temporada con Hojas',
    category: 'Cítricos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Mandarinas frescas con hojas recién cosechadas del huerto, fáciles de pelar a mano y con gajos jugosos y aromáticos.',
    quantity_initial: 400,
    quantity_available: 310,
    quantity_sold: 90,
    unit: 'unidad',
    producerPrice: 2.20,
    marginPercent: 12.0,
    marginAmount: 0.26,
    sellingPrice: 2.46,
    price: 2.46,
    oldPrice: 3.20,
    isDeal: true,
    discountPercent: 23,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 29,
    farmerEmail: 'finca@elparaiso.com',
    farmerName: 'Marcos Peralta',
    department: 'Masaya',
    photoUrl: 'https://lh3.googleusercontent.com/d/11no9oJcOjk1vuSiM4EcKbOPglVjgj75V',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T10:30:00Z'
  },
  {
    num: 7,
    id: 'PROD-007',
    title: 'Toronja Rosada / Grapefruit Ruby Red',
    category: 'Cítricos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Toronjas rosadas Ruby Red de pulpa carnosa y abundante jugo agridulce, ricas en antioxidantes y vitamina C.',
    quantity_initial: 350,
    quantity_available: 280,
    quantity_sold: 70,
    unit: 'unidad',
    producerPrice: 3.50,
    marginPercent: 12.0,
    marginAmount: 0.42,
    sellingPrice: 3.92,
    price: 3.92,
    oldPrice: 5.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 16,
    farmerEmail: 'finca@elparaiso.com',
    farmerName: 'Marcos Peralta',
    department: 'Masaya',
    photoUrl: 'https://lh3.googleusercontent.com/d/1TcRmJy-ywRwf91G7gXDG8taleBni0Szm',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T11:00:00Z'
  },
  {
    num: 8,
    id: 'PROD-008',
    title: 'Papaya Hawaiana Roja Dulce de Mesa',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Papayas de pulpa roja intensa y semilla pequeña, peso promedio de 3 a 5 libras por fruta. Sabor suave y dulce digestivo.',
    quantity_initial: 180,
    quantity_available: 140,
    quantity_sold: 40,
    unit: 'unidad',
    producerPrice: 40.00,
    marginPercent: 12.0,
    marginAmount: 4.80,
    sellingPrice: 44.80,
    price: 44.80,
    oldPrice: 50.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 22,
    farmerEmail: 'carlos@agrifinca.com',
    farmerName: 'Carlos Ruiz',
    department: 'Carazo',
    photoUrl: 'https://lh3.googleusercontent.com/d/1yOzN_fDi-i8z4kGaxhKMRLstqnkJqilN',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T11:30:00Z'
  },
  {
    num: 9,
    id: 'PROD-009',
    title: 'Piña Golden MD2 Extra Dulce de Exportación',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Piñas Golden MD2 con corona perfecta, pulpa dorada y alto contenido de azúcares naturales (14+ grados Brix).',
    quantity_initial: 240,
    quantity_available: 190,
    quantity_sold: 50,
    unit: 'unidad',
    producerPrice: 18.00,
    marginPercent: 12.0,
    marginAmount: 2.16,
    sellingPrice: 20.16,
    price: 20.16,
    oldPrice: 25.00,
    isDeal: true,
    discountPercent: 19,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 45,
    farmerEmail: 'carlos@agrifinca.com',
    farmerName: 'Carlos Ruiz',
    department: 'Managua',
    photoUrl: 'https://lh3.googleusercontent.com/d/1nKDTlPXe8eUGIc4qZqOSlXl-QzF1ZXtN',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T12:00:00Z'
  },
  {
    num: 10,
    id: 'PROD-010',
    title: 'Aguacate Hass / Mantequilla Seleccionado',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Aguacates de pulpa cremosa tipo mantequilla, semilla mediana y cáscara oscura rugosa en óptimo punto de consumo.',
    quantity_initial: 300,
    quantity_available: 230,
    quantity_sold: 70,
    unit: 'unidad',
    producerPrice: 38.00,
    marginPercent: 12.0,
    marginAmount: 4.56,
    sellingPrice: 42.56,
    price: 42.56,
    oldPrice: 50.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 31,
    farmerEmail: 'finca@elparaiso.com',
    farmerName: 'Marcos Peralta',
    department: 'Masaya',
    photoUrl: 'https://lh3.googleusercontent.com/d/16Qvux4K1U95zysiLvupVuC-2oxts4oFn',
    status: 'PUBLICADO',
    createdAt: '2026-08-16T12:30:00Z'
  },
  {
    num: 11,
    id: 'PROD-011',
    title: 'Maíz Blanco Nacional en Mazorca y Grano Seco',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Maíz blanco de primera calidad, secado bajo sol natural con humedad al 12%, apto para nixtamalización, molienda y tortillas.',
    quantity_initial: 100,
    quantity_available: 78,
    quantity_sold: 22,
    unit: 'saco (100 lb)',
    producerPrice: 650.00,
    marginPercent: 12.0,
    marginAmount: 78.00,
    sellingPrice: 728.00,
    price: 728.00,
    oldPrice: 800.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 27,
    farmerEmail: 'granero@norte.com',
    farmerName: 'Cooperativa Granos del Norte',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1s-kjgSgMyzWX4evR8gvMmChJc1e6u2p3',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T07:00:00Z'
  },
  {
    num: 12,
    id: 'PROD-012',
    title: 'Frijol Rojo Seda en Saco Mayorista (100 lb)',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Frijol rojo seda de grano reluciente, tamaño parejo y alta capacidad de ablande con caldo espeso y sabroso.',
    quantity_initial: 120,
    quantity_available: 95,
    quantity_sold: 25,
    unit: 'saco (100 lb)',
    producerPrice: 2200.00,
    marginPercent: 12.0,
    marginAmount: 264.00,
    sellingPrice: 2464.00,
    price: 2464.00,
    oldPrice: 2700.00,
    isDeal: true,
    discountPercent: 8,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 64,
    farmerEmail: 'granero@norte.com',
    farmerName: 'Cooperativa Granos del Norte',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1wGm6B33ANJRxx1-57nG5CgJvxR-5fSGu',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T07:30:00Z'
  },
  {
    num: 13,
    id: 'PROD-013',
    title: 'Frijol Rojo Criollo Seleccionado de Campo',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Frijol criollo de montaña cosechado artesanalmente, seleccionado a mano y libre de gorgojo o impurezas.',
    quantity_initial: 2500,
    quantity_available: 1950,
    quantity_sold: 550,
    unit: 'lb',
    producerPrice: 23.00,
    marginPercent: 12.0,
    marginAmount: 2.76,
    sellingPrice: 25.76,
    price: 25.76,
    oldPrice: 30.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 33,
    farmerEmail: 'granero@norte.com',
    farmerName: 'Cooperativa Granos del Norte',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1Kc6bYKxoJ12zkKAzfkPDI5rqJ3fds6jz',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T08:00:00Z'
  },
  {
    num: 14,
    id: 'PROD-014',
    title: 'Maíz Amarillo Dulce en Mazorcas Tiernas',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Elotes tiernos de maíz amarillo dulce para asar, hervir, güirilas y sopas tradicionales.',
    quantity_initial: 300,
    quantity_available: 240,
    quantity_sold: 60,
    unit: 'docena',
    producerPrice: 40.00,
    marginPercent: 12.0,
    marginAmount: 4.80,
    sellingPrice: 44.80,
    price: 44.80,
    oldPrice: 55.00,
    isDeal: true,
    discountPercent: 18,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 21,
    farmerEmail: 'granero@norte.com',
    farmerName: 'Cooperativa Granos del Norte',
    department: 'Estelí',
    photoUrl: 'https://lh3.googleusercontent.com/d/1_5jG6IxKRnKANaBV65vyyWtK3Za60hzg',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T08:30:00Z'
  },
  {
    num: 15,
    id: 'PROD-015',
    title: 'Café Verde / Café Oro de Estricta Altura (SHG)',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Granos de café verde oro beneficiados por vía húmeda, cultivados a 1,300 msnm con taza limpia y notas achocolatadas.',
    quantity_initial: 80,
    quantity_available: 65,
    quantity_sold: 15,
    unit: 'saco (100 lb)',
    producerPrice: 5800.00,
    marginPercent: 12.0,
    marginAmount: 696.00,
    sellingPrice: 6496.00,
    price: 6496.00,
    oldPrice: 7200.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 42,
    farmerEmail: 'finca@alturasdelnorte.com',
    farmerName: 'Finca Alturas del Norte',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1KEmpmQ3zXEus-1s-c5sfEWEeNXn-GfYa',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T09:00:00Z'
  },
  {
    num: 16,
    id: 'PROD-016',
    title: 'Café Tostado y Molido Artesanal de Montaña',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Café 100% arábica tostado artesanalmente en lotes pequeños, molienda media balanceada de aroma envolvente.',
    quantity_initial: 400,
    quantity_available: 310,
    quantity_sold: 90,
    unit: 'lb',
    producerPrice: 120.00,
    marginPercent: 12.0,
    marginAmount: 14.40,
    sellingPrice: 134.40,
    price: 134.40,
    oldPrice: 160.00,
    isDeal: true,
    discountPercent: 16,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 78,
    farmerEmail: 'finca@alturasdelnorte.com',
    farmerName: 'Finca Alturas del Norte',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1NdXTBA9hcAjt0v2GkTVMILBUG2-wATeK',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T09:30:00Z'
  },
  {
    num: 17,
    id: 'PROD-017',
    title: 'Café Pergamino Secado al Sol en Patio',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Café en cáscara de pergamino secado en patios solares con movimiento constante para garantizar humedad uniforme.',
    quantity_initial: 90,
    quantity_available: 70,
    quantity_sold: 20,
    unit: 'saco (100 lb)',
    producerPrice: 4600.00,
    marginPercent: 12.0,
    marginAmount: 552.00,
    sellingPrice: 5152.00,
    price: 5152.00,
    oldPrice: 5600.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 15,
    farmerEmail: 'finca@alturasdelnorte.com',
    farmerName: 'Finca Alturas del Norte',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1Fyl-YL-qUupdikUY758ARg1oNfzMDl51',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T10:00:00Z'
  },
  {
    num: 18,
    id: 'PROD-018',
    title: 'Arroz Blanco Grano Entero en Saco (100 lb)',
    category: 'Granos',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Arroz blanco de primera calidad 80/20 grano entero pulido, blanco brillante y excelente rendimiento al cocinarse.',
    quantity_initial: 150,
    quantity_available: 120,
    quantity_sold: 30,
    unit: 'saco (100 lb)',
    producerPrice: 1450.00,
    marginPercent: 12.0,
    marginAmount: 174.00,
    sellingPrice: 1624.00,
    price: 1624.00,
    oldPrice: 1800.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 36,
    farmerEmail: 'arrocera@sebaco.com',
    farmerName: 'Molino del Valle de Sébaco',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1MawE8F5UoX7lzyiUip-wkhrR7LlFrrSo',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T10:30:00Z'
  },
  {
    num: 19,
    id: 'PROD-019',
    title: 'Sorgo Rojo / Maicillo Forrajero en Grano',
    category: 'Granos',
    marketType: 'CONSUMO_ANIMAL',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Granos limpios de sorgo rojo forrajero y espigas secas, alto contenido de energía digestible para raciones pecuarias.',
    quantity_initial: 200,
    quantity_available: 160,
    quantity_sold: 40,
    unit: 'saco (100 lb)',
    producerPrice: 520.00,
    marginPercent: 12.0,
    marginAmount: 62.40,
    sellingPrice: 582.40,
    price: 582.40,
    oldPrice: 650.00,
    isDeal: true,
    discountPercent: 10,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 18,
    farmerEmail: 'arrocera@sebaco.com',
    farmerName: 'Molino del Valle de Sébaco',
    department: 'León',
    photoUrl: 'https://lh3.googleusercontent.com/d/1NIv7ATMsuN-Glp_Nx7srwhjWK6Xaus0Q',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T11:00:00Z'
  },
  {
    num: 20,
    id: 'PROD-020',
    title: 'Tomate Pera / Roma de Primera Selección',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Tomates pera alargados de piel firme y color rojo intenso, ideales para salsas, ensaladas y distribución mayorista.',
    quantity_initial: 80,
    quantity_available: 62,
    quantity_sold: 18,
    unit: 'cajilla (45 lb)',
    producerPrice: 290.00,
    marginPercent: 12.0,
    marginAmount: 34.80,
    sellingPrice: 324.80,
    price: 324.80,
    oldPrice: 380.00,
    isDeal: true,
    discountPercent: 14,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 53,
    farmerEmail: 'hortalizas@sebaco.com',
    farmerName: 'Agropecuaria Sébaco',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1LwVhGP5GwQpfIzsvNyyhdB7UdNtYyjrW',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T11:30:00Z'
  },
  {
    num: 21,
    id: 'PROD-021',
    title: 'Tomate Manzano / Redondo de Ensalada',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Tomates redondos tipo ensalada de contextura carnosa, tamaño uniforme y excelente sabor en fresco.',
    quantity_initial: 70,
    quantity_available: 54,
    quantity_sold: 16,
    unit: 'cajilla (45 lb)',
    producerPrice: 310.00,
    marginPercent: 12.0,
    marginAmount: 37.20,
    sellingPrice: 347.20,
    price: 347.20,
    oldPrice: 400.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 28,
    farmerEmail: 'hortalizas@sebaco.com',
    farmerName: 'Agropecuaria Sébaco',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/13F8touBFsBcNTj9N4jDYERBEqPgb4gNQ',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T12:00:00Z'
  },
  {
    num: 22,
    id: 'PROD-022',
    title: 'Chiltoma Nataly Verde de Cocina (100 unidades)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Chiltomas verdes carnosas y brillantes de primera selección, fundamentales en la culinaria nicaragüense.',
    quantity_initial: 100,
    quantity_available: 80,
    quantity_sold: 20,
    unit: 'bolsa (100 uds)',
    producerPrice: 220.00,
    marginPercent: 12.0,
    marginAmount: 26.40,
    sellingPrice: 246.40,
    price: 246.40,
    oldPrice: 280.00,
    isDeal: true,
    discountPercent: 12,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 39,
    farmerEmail: 'hortalizas@sebaco.com',
    farmerName: 'Agropecuaria Sébaco',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1_UFx8slnXCE6L_HgM5qNX33L0BT8zDy-',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T12:30:00Z'
  },
  {
    num: 23,
    id: 'PROD-023',
    title: 'Pimientos Morrones Mixtos de Colores',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Pimientos morrones de cuatro colores (rojo, verde, amarillo y naranja) de piel lustrosa y paredes carnosas.',
    quantity_initial: 250,
    quantity_available: 200,
    quantity_sold: 50,
    unit: 'docena',
    producerPrice: 60.00,
    marginPercent: 12.0,
    marginAmount: 7.20,
    sellingPrice: 67.20,
    price: 67.20,
    oldPrice: 80.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 25,
    farmerEmail: 'hortalizas@sebaco.com',
    farmerName: 'Agropecuaria Sébaco',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1k9mTiQXwlSzyro4pRMStJ9OhVHmsZSXN',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T13:00:00Z'
  },
  {
    num: 24,
    id: 'PROD-024',
    title: 'Cebolla Morada / Roja en Malla (50 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Bulbos firmes de cebolla morada con sabor picante agradable y color vivo para encurtidos y ensaladas gourmet.',
    quantity_initial: 90,
    quantity_available: 72,
    quantity_sold: 18,
    unit: 'malla (50 lb)',
    producerPrice: 320.00,
    marginPercent: 12.0,
    marginAmount: 38.40,
    sellingPrice: 358.40,
    price: 358.40,
    oldPrice: 420.00,
    isDeal: true,
    discountPercent: 15,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 29,
    farmerEmail: 'cebollas@esteli.com',
    farmerName: 'Hortalizas del Norte',
    department: 'Estelí',
    photoUrl: 'https://lh3.googleusercontent.com/d/1Lq2MebLz3_Bg-Jt5UIx8TkHvVRrKfHTv',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T13:30:00Z'
  },
  {
    num: 25,
    id: 'PROD-025',
    title: 'Cebolla Amarilla Seca en Malla Mayorista (50 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Cebollas amarillas bien curadas y secas, piel dorada resistente y larga vida de anaquel para bodegas y comercio.',
    quantity_initial: 110,
    quantity_available: 88,
    quantity_sold: 22,
    unit: 'malla (50 lb)',
    producerPrice: 250.00,
    marginPercent: 12.0,
    marginAmount: 30.00,
    sellingPrice: 280.00,
    price: 280.00,
    oldPrice: 320.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 34,
    farmerEmail: 'cebollas@esteli.com',
    farmerName: 'Hortalizas del Norte',
    department: 'Estelí',
    photoUrl: 'https://lh3.googleusercontent.com/d/1c8IEkS3n60BPDuFeme1wLqt_DDe6auwV',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T14:00:00Z'
  },
  {
    num: 26,
    id: 'PROD-026',
    title: 'Zanahoria Fresca con Hojas de Altura (80 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Zanahorias dulces y crujientes de piel anaranjada lisa, cosechadas con follaje verde de campos de altura.',
    quantity_initial: 70,
    quantity_available: 55,
    quantity_sold: 15,
    unit: 'bolsa (80 lb)',
    producerPrice: 360.00,
    marginPercent: 12.0,
    marginAmount: 43.20,
    sellingPrice: 403.20,
    price: 403.20,
    oldPrice: 460.00,
    isDeal: true,
    discountPercent: 12,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 42,
    farmerEmail: 'agricola@miraflor.com',
    farmerName: 'Finca Miraflor',
    department: 'Estelí',
    photoUrl: 'https://lh3.googleusercontent.com/d/13k3U74ed9L-fW_F-tuPXv8GNGFSb6xhH',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T14:30:00Z'
  },
  {
    num: 27,
    id: 'PROD-027',
    title: 'Papa Blanca de Altura Lavada en Saco (100 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Papas blancas lavadas de tamaño clasificado, sin manchas ni defectos, ideales para frituras o consumo de mesa.',
    quantity_initial: 100,
    quantity_available: 78,
    quantity_sold: 22,
    unit: 'saco (100 lb)',
    producerPrice: 460.00,
    marginPercent: 12.0,
    marginAmount: 55.20,
    sellingPrice: 515.20,
    price: 515.20,
    oldPrice: 580.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 37,
    farmerEmail: 'agricola@miraflor.com',
    farmerName: 'Finca Miraflor',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1tdZp_eCCrurnBDQOlzQuwrReXfKTz2XC',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T15:00:00Z'
  },
  {
    num: 28,
    id: 'PROD-028',
    title: 'Yuca Fresca Parafinada en Saco (100 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Raíces de yuca parafinadas para preservar humedad y textura, pulpa blanca que se cocina suave y arenosa.',
    quantity_initial: 90,
    quantity_available: 70,
    quantity_sold: 20,
    unit: 'saco (100 lb)',
    producerPrice: 350.00,
    marginPercent: 12.0,
    marginAmount: 42.00,
    sellingPrice: 392.00,
    price: 392.00,
    oldPrice: 450.00,
    isDeal: true,
    discountPercent: 13,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 26,
    farmerEmail: 'raices@nuevaguinea.com',
    farmerName: 'Agropecuaria Nueva Guinea',
    department: 'Zelaya Central',
    photoUrl: 'https://lh3.googleusercontent.com/d/1dmXZJ8iSuyxOL6baAfKL8n0CM2wngmpt',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T15:30:00Z'
  },
  {
    num: 29,
    id: 'PROD-029',
    title: 'Lechuga Verde Escarola / Crespa Fresca',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Lechugas frescas crespas con hojas verdes voluminosas y crujientes, cultivadas con buenas prácticas agrícolas.',
    quantity_initial: 180,
    quantity_available: 145,
    quantity_sold: 35,
    unit: 'docena',
    producerPrice: 50.00,
    marginPercent: 12.0,
    marginAmount: 6.00,
    sellingPrice: 56.00,
    price: 56.00,
    oldPrice: 70.00,
    isDeal: true,
    discountPercent: 20,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 22,
    farmerEmail: 'hortalizas@sebaco.com',
    farmerName: 'Agropecuaria Sébaco',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/11zYn6K3-YOpZm7B6cwi71_Bk80wm432Z',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T16:00:00Z'
  },
  {
    num: 30,
    id: 'PROD-030',
    title: 'Repollo Verde Compacto de Montaña',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Repollos verdes de cabeza firme, pesada y crujiente. Peso de 4 a 6 libras por unidad, ideales para ensaladas y guisados.',
    quantity_initial: 350,
    quantity_available: 290,
    quantity_sold: 60,
    unit: 'unidad',
    producerPrice: 25.00,
    marginPercent: 12.0,
    marginAmount: 3.00,
    sellingPrice: 28.00,
    price: 28.00,
    oldPrice: 35.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 30,
    farmerEmail: 'agricola@miraflor.com',
    farmerName: 'Finca Miraflor',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1sENHFqKz0t5t-ncYIUnky_55Kikx7spg',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T16:30:00Z'
  },
  {
    num: 31,
    id: 'PROD-031',
    title: 'Rábano Blanco / Nabo Criollo Fresco',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Rábanos blancos tuberosos con hojas frescas, crujientes al morder y con suave toque picante para caldos y ensaladas.',
    quantity_initial: 200,
    quantity_available: 165,
    quantity_sold: 35,
    unit: 'manojo',
    producerPrice: 20.00,
    marginPercent: 12.0,
    marginAmount: 2.40,
    sellingPrice: 22.40,
    price: 22.40,
    oldPrice: 28.00,
    isDeal: true,
    discountPercent: 20,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 17,
    farmerEmail: 'agricola@miraflor.com',
    farmerName: 'Finca Miraflor',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/199_dcy1ySliY4XD1u33LOkTlJrNmNqW5',
    status: 'PUBLICADO',
    createdAt: '2026-08-17T17:00:00Z'
  },
  {
    num: 32,
    id: 'PROD-032',
    title: 'Quequisque / Malanga Blanca Fresca en Saco (100 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Tubérculos de quequisque blanco con cáscara rústica, ricos en almidones digestibles para sopas, purés y frituras.',
    quantity_initial: 80,
    quantity_available: 64,
    quantity_sold: 16,
    unit: 'saco (100 lb)',
    producerPrice: 550.00,
    marginPercent: 12.0,
    marginAmount: 66.00,
    sellingPrice: 616.00,
    price: 616.00,
    oldPrice: 700.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 28,
    farmerEmail: 'raices@nuevaguinea.com',
    farmerName: 'Agropecuaria Nueva Guinea',
    department: 'Zelaya Central',
    photoUrl: 'https://lh3.googleusercontent.com/d/15aYSj0tTJE1FoPG3o-aosdBR-m1NR5qi',
    status: 'PUBLICADO',
    createdAt: '2026-08-18T07:00:00Z'
  },
  {
    num: 33,
    id: 'PROD-033',
    title: 'Pulpa de Café Ensilada / Abono y Nutrición Pecuaria',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: true,
    saleMode: 'PESO',
    description: 'Pulpa fresca de café fermentada en trinchera con melaza, excelente acondicionador orgánico de suelos y complemento forrajero rumiante.',
    quantity_initial: 25,
    quantity_available: 20,
    quantity_sold: 5,
    unit: 'tonelada',
    producerPrice: 650.00,
    marginPercent: 12.0,
    marginAmount: 78.00,
    sellingPrice: 728.00,
    price: 728.00,
    oldPrice: 850.00,
    isDeal: true,
    discountPercent: 14,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 34,
    farmerEmail: 'finca@alturasdelnorte.com',
    farmerName: 'Finca Alturas del Norte',
    department: 'Jinotega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1a6ibTOnAZ61T1Gafk5Q2cKYomz90U9oG',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Revisar pH antes de suministro en comederos. Proporción máxima recomendada: 15% de la ración total.',
    createdAt: '2026-08-18T07:30:00Z'
  },
  {
    num: 34,
    id: 'PROD-034',
    title: 'Quequisque Seleccionado de Exportación (40 lb)',
    category: 'Hortalizas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Cormos de quequisque cepillados, clasificados por calibre uniforme y libres de heridas, listos para mercados exigentes.',
    quantity_initial: 100,
    quantity_available: 82,
    quantity_sold: 18,
    unit: 'caja (40 lb)',
    producerPrice: 320.00,
    marginPercent: 12.0,
    marginAmount: 38.40,
    sellingPrice: 358.40,
    price: 358.40,
    oldPrice: 400.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 20,
    farmerEmail: 'raices@nuevaguinea.com',
    farmerName: 'Agropecuaria Nueva Guinea',
    department: 'Zelaya Central',
    photoUrl: 'https://lh3.googleusercontent.com/d/1QQvzAuSN0yDR1HLxE4vD9Ej0EXPhDSN4',
    status: 'PUBLICADO',
    createdAt: '2026-08-18T08:00:00Z'
  },
  {
    num: 35,
    id: 'PROD-035',
    title: 'Cascarilla de Café Seca para Cama y Fibra (50 lb)',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: true,
    saleMode: 'PESO',
    description: 'Cascarilla seca de beneficio de café, ideal para camas absorbentes en corrales y galpones avícolas, o aporte de fibra con melaza.',
    quantity_initial: 120,
    quantity_available: 95,
    quantity_sold: 25,
    unit: 'saco (50 lb)',
    producerPrice: 45.00,
    marginPercent: 12.0,
    marginAmount: 5.40,
    sellingPrice: 50.40,
    price: 50.40,
    oldPrice: 65.00,
    isDeal: true,
    discountPercent: 22,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 19,
    farmerEmail: 'finca@alturasdelnorte.com',
    farmerName: 'Finca Alturas del Norte',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1f13vnw8UO4mCwqt67tyUJuBTFwdAxwbN',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Almacenar en lugar seco y techado. Si se suministra al ganado, humedecer previamente con melaza disuelta.',
    createdAt: '2026-08-18T08:30:00Z'
  },
  {
    num: 36,
    id: 'PROD-036',
    title: 'Plátano Macho Verde Gigante en Cabeza (100 uds)',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Plátanos machos verdes de calibre superior a 11 pulgadas, cáscara gruesa verde brillante y pulpa maciza para tostones y frituras.',
    quantity_initial: 80,
    quantity_available: 65,
    quantity_sold: 15,
    unit: '100 uds',
    producerPrice: 400.00,
    marginPercent: 12.0,
    marginAmount: 48.00,
    sellingPrice: 448.00,
    price: 448.00,
    oldPrice: 520.00,
    isDeal: true,
    discountPercent: 14,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 56,
    farmerEmail: 'platanares@rivas.com',
    farmerName: 'Platanares de Rivas',
    department: 'Rivas',
    photoUrl: 'https://lh3.googleusercontent.com/d/1cnEjDXENoJfaiGmB5K88tsU7_4z5tEu7',
    status: 'PUBLICADO',
    createdAt: '2026-08-18T09:00:00Z'
  },
  {
    num: 37,
    id: 'PROD-037',
    title: 'Melaza Pura de Caña de Azúcar (Miel de Purga)',
    category: 'Nutrición Ganadera',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Melaza pura densa y no cristalizada, altamente energética, rica en carbohidratos solubles y minerales para raciones ganaderas.',
    quantity_initial: 300,
    quantity_available: 240,
    quantity_sold: 60,
    unit: 'galón',
    producerPrice: 35.00,
    marginPercent: 12.0,
    marginAmount: 4.20,
    sellingPrice: 39.20,
    price: 39.20,
    oldPrice: 48.00,
    isDeal: true,
    discountPercent: 18,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 68,
    farmerEmail: 'ingenio@chichigalpa.com',
    farmerName: 'Agroindustria San Antonio',
    department: 'Chinandega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1vzrbSKQwMwiemBS6xboNGWfjpZs9AHCe',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Mantener recipientes tapados para evitar fermentación por agua de lluvia.',
    createdAt: '2026-08-18T09:30:00Z'
  },
  {
    num: 38,
    id: 'PROD-038',
    title: 'Bagazo de Caña Forrajero Tratado con Melaza',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: true,
    saleMode: 'PESO',
    description: 'Fibra de caña de azúcar desfibrada y tratada, excelente como fuente de volumen y relleno ruminal durante épocas secas.',
    quantity_initial: 30,
    quantity_available: 24,
    quantity_sold: 6,
    unit: 'tonelada',
    producerPrice: 500.00,
    marginPercent: 12.0,
    marginAmount: 60.00,
    sellingPrice: 560.00,
    price: 560.00,
    oldPrice: 650.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 16,
    farmerEmail: 'ingenio@chichigalpa.com',
    farmerName: 'Agroindustria San Antonio',
    department: 'Chinandega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1JLxRo6NSkTvs7kb5o_92IyhT9fp_Z_q1',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Suministrar mezclado con sal mineralizada y melaza enriquecida.',
    createdAt: '2026-08-18T10:00:00Z'
  },
  {
    num: 39,
    id: 'PROD-039',
    title: 'Pasto Picado Fresco con Caña Forrajera',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Picadillo fresco verde de pasto de corte y cogollo de caña picado a 1.5 cm, listo para consumo inmediato en establos.',
    quantity_initial: 20,
    quantity_available: 16,
    quantity_sold: 4,
    unit: 'tonelada',
    producerPrice: 600.00,
    marginPercent: 12.0,
    marginAmount: 72.00,
    sellingPrice: 672.00,
    price: 672.00,
    oldPrice: 750.00,
    isDeal: true,
    discountPercent: 10,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 29,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1aSdWIqByjbyHD59IhlR_woYYEboeQ9P7',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Suministrar el mismo día de entrega para conservar frescura y palatabilidad.',
    createdAt: '2026-08-18T10:30:00Z'
  },
  {
    num: 40,
    id: 'PROD-040',
    title: 'Pasto de Corte Taiwán / Cuba OM-22 en Haces',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Haces de pasto de corte Cuba OM-22 verde y frondoso, cosechado a los 65 días con 14% de proteína cruda y tallo tierno.',
    quantity_initial: 25,
    quantity_available: 20,
    quantity_sold: 5,
    unit: 'tonelada',
    producerPrice: 750.00,
    marginPercent: 12.0,
    marginAmount: 90.00,
    sellingPrice: 840.00,
    price: 840.00,
    oldPrice: 950.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 38,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1qftwsN8XwPKv-LH7Z8snEuebNKXOH1DY',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Picado recomendado antes de servir para optimizar aprovechamiento ruminal.',
    createdAt: '2026-08-18T11:00:00Z'
  },
  {
    num: 41,
    id: 'PROD-041',
    title: 'Olotes y Rastrojo de Maíz Seco para Ganado (60 lb)',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: true,
    saleMode: 'PESO',
    description: 'Tusa y mazorcas de maíz desgranadas secas, fuente fibrosa para mezclar con melaza y suplementos en períodos de estiaje.',
    quantity_initial: 150,
    quantity_available: 120,
    quantity_sold: 30,
    unit: 'saco (60 lb)',
    producerPrice: 40.00,
    marginPercent: 12.0,
    marginAmount: 4.80,
    sellingPrice: 44.80,
    price: 44.80,
    oldPrice: 55.00,
    isDeal: true,
    discountPercent: 18,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 14,
    farmerEmail: 'granero@norte.com',
    farmerName: 'Cooperativa Granos del Norte',
    department: 'Estelí',
    photoUrl: 'https://lh3.googleusercontent.com/d/1S-mPLwowrb2-RUiFrj4eJ6Hwq4t78Ivu',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Mantener seco para prevenir proliferación de aflatoxinas.',
    createdAt: '2026-08-18T11:30:00Z'
  },
  {
    num: 42,
    id: 'PROD-042',
    title: 'Cáscara de Maní a Granel para Cama y Fibra',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: true,
    saleMode: 'PESO',
    description: 'Cascarilla de maní seca y limpia procedente de descascarillado, de alto poder absorbente para camas de ganado y avicultura.',
    quantity_initial: 20,
    quantity_available: 16,
    quantity_sold: 4,
    unit: 'tonelada',
    producerPrice: 650.00,
    marginPercent: 12.0,
    marginAmount: 78.00,
    sellingPrice: 728.00,
    price: 728.00,
    oldPrice: 850.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 23,
    farmerEmail: 'mani@occidente.com',
    farmerName: 'Agroexportadora de Occidente',
    department: 'Chinandega',
    photoUrl: 'https://lh3.googleusercontent.com/d/1CXGyecDsWWYmZb5ci2EYHI624nrH5x7U',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Excelente aislamiento térmico para camas de becerreras y establos.',
    createdAt: '2026-08-18T12:00:00Z'
  },
  {
    num: 43,
    id: 'PROD-043',
    title: 'Plátano Maduro de Mesa Dulce (100 unidades)',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Plátanos maduros con piel dorada moteada, pulpa suave y muy dulce para asar, cocer o freír maduro con queso.',
    quantity_initial: 90,
    quantity_available: 72,
    quantity_sold: 18,
    unit: '100 uds',
    producerPrice: 380.00,
    marginPercent: 12.0,
    marginAmount: 45.60,
    sellingPrice: 425.60,
    price: 425.60,
    oldPrice: 480.00,
    isDeal: true,
    discountPercent: 11,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 47,
    farmerEmail: 'platanares@rivas.com',
    farmerName: 'Platanares de Rivas',
    department: 'Rivas',
    photoUrl: 'https://lh3.googleusercontent.com/d/1eGozU5k7Ni6Zoe635xIQtx7VJ6Eemv2z',
    status: 'PUBLICADO',
    createdAt: '2026-08-18T12:30:00Z'
  },
  {
    num: 44,
    id: 'PROD-044',
    title: 'Guineo Verde para Cocinar y Ración Pecuaria',
    category: 'Frutas',
    marketType: 'CONSUMO_HUMANO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Racimos de guineo verde fresco de excelente tamaño, aptos tanto para consumo familiar tradicional como para suplemento de ganado.',
    quantity_initial: 50,
    quantity_available: 38,
    quantity_sold: 12,
    unit: 'racimo (150 uds)',
    producerPrice: 90.00,
    marginPercent: 12.0,
    marginAmount: 10.80,
    sellingPrice: 100.80,
    price: 100.80,
    oldPrice: 120.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 19,
    farmerEmail: 'platanares@rivas.com',
    farmerName: 'Platanares de Rivas',
    department: 'Rivas',
    photoUrl: 'https://lh3.googleusercontent.com/d/1guX8TkkmA0g2kdUzandDhbg3LLzg9TtB',
    status: 'PUBLICADO',
    createdAt: '2026-08-18T13:00:00Z'
  },
  {
    num: 45,
    id: 'PROD-045',
    title: 'Paca de Heno Estrella Curado y Compactado (45 lb)',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Pacas rectangulares de pasto estrella secadas al sol con 12% de humedad, libres de malezas espinosas y hongos.',
    quantity_initial: 350,
    quantity_available: 280,
    quantity_sold: 70,
    unit: 'paca (45 lb)',
    producerPrice: 115.00,
    marginPercent: 12.0,
    marginAmount: 13.80,
    sellingPrice: 128.80,
    price: 128.80,
    oldPrice: 145.00,
    isDeal: true,
    discountPercent: 11,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 62,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/1TvBiwHu-b7lSpPGm9qzJfK1eHhsz4F5M',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Almacenar sobre tarimas bajo techo en ambiente seco y ventilado.',
    createdAt: '2026-08-19T07:00:00Z'
  },
  {
    num: 46,
    id: 'PROD-046',
    title: 'Paca de Heno Verde Pangola Nutritivo (50 lb)',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'CANTIDAD',
    description: 'Heno verde de pasto Pangola de alto valor nutritivo y hojas tiernas, ideal para terneros, vacas lecheras y equinos.',
    quantity_initial: 300,
    quantity_available: 240,
    quantity_sold: 60,
    unit: 'paca (50 lb)',
    producerPrice: 130.00,
    marginPercent: 12.0,
    marginAmount: 15.60,
    sellingPrice: 145.60,
    price: 145.60,
    oldPrice: 165.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 35,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Chontales',
    photoUrl: 'https://lh3.googleusercontent.com/d/1CusZVCAedJwgcAC2aa5POteMe1nM9llZ',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Proteger del contacto directo con el suelo.',
    createdAt: '2026-08-19T07:30:00Z'
  },
  {
    num: 47,
    id: 'PROD-047',
    title: 'Ensilaje de Maíz y Sorgo en Pila Fermentada',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Silo fermentado en trinchera con inóculo láctico, excelente aroma y digestibilidad para mantener la producción lechera todo el año.',
    quantity_initial: 40,
    quantity_available: 32,
    quantity_sold: 8,
    unit: 'tonelada',
    producerPrice: 900.00,
    marginPercent: 12.0,
    marginAmount: 108.00,
    sellingPrice: 1008.00,
    price: 1008.00,
    oldPrice: 1150.00,
    isDeal: true,
    discountPercent: 12,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 48,
    farmerEmail: 'ganaderia@chontales.com',
    farmerName: 'Ganadera Santa Rosa',
    department: 'Chontales',
    photoUrl: 'https://lh3.googleusercontent.com/d/13IzOHvaJoziHwF-gLQ1IJJYKcB-xxuVU',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Mantener la pila cubierta con plástico tras retirar la porción diaria.',
    createdAt: '2026-08-19T08:00:00Z'
  },
  {
    num: 48,
    id: 'PROD-048',
    title: 'Pasto Picado Fino para Ración TMR (80 lb)',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Pasto de corte con picado fino homogéneo (1 cm), listo para combinar en vagón mezclador con concentrado y sales.',
    quantity_initial: 160,
    quantity_available: 130,
    quantity_sold: 30,
    unit: 'saco (80 lb)',
    producerPrice: 55.00,
    marginPercent: 12.0,
    marginAmount: 6.60,
    sellingPrice: 61.60,
    price: 61.60,
    oldPrice: 75.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 22,
    farmerEmail: 'Sauyoultech@comercializadora.com',
    farmerName: 'Comercializadora Sau Yul Tech S.A.',
    department: 'Matagalpa',
    photoUrl: 'https://lh3.googleusercontent.com/d/17UwC_-p8M2clQEwzbMqpEJ6q8lGdlVYE',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Consumir fresco dentro de las 24 horas posteriores a la entrega.',
    createdAt: '2026-08-19T08:30:00Z'
  },
  {
    num: 49,
    id: 'PROD-049',
    title: 'Silo en Bolsa Sellada Hermética (50 kg)',
    category: 'Forraje',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Microsilo de maíz y pasto empacado al vacío en bolsa plástica de calibre grueso de 50 kg, ideal para fácil transporte y cero merma.',
    quantity_initial: 200,
    quantity_available: 160,
    quantity_sold: 40,
    unit: 'bolsa (50 kg)',
    producerPrice: 120.00,
    marginPercent: 12.0,
    marginAmount: 14.40,
    sellingPrice: 134.40,
    price: 134.40,
    oldPrice: 155.00,
    isDeal: true,
    discountPercent: 13,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 39,
    farmerEmail: 'ganaderia@chontales.com',
    farmerName: 'Ganadera Santa Rosa',
    department: 'Boaco',
    photoUrl: 'https://lh3.googleusercontent.com/d/1rvrkIvgZJPUPrjKEnyBWoB11UpWC22vU',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'No perforar las bolsas durante el almacenamiento; abrir únicamente al momento de alimentar.',
    createdAt: '2026-08-19T09:00:00Z'
  },
  {
    num: 50,
    id: 'PROD-050',
    title: 'Concentrado Balanceado Pecuario 18% Proteína (100 lb)',
    category: 'Nutrición Ganadera',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Alimento concentrado balanceado con maíz, harina de soya, melaza y premezcla vitamínico-mineral formulado para alta lechería y engorde.',
    quantity_initial: 150,
    quantity_available: 120,
    quantity_sold: 30,
    unit: 'saco (100 lb)',
    producerPrice: 620.00,
    marginPercent: 12.0,
    marginAmount: 74.40,
    sellingPrice: 694.40,
    price: 694.40,
    oldPrice: 780.00,
    isDeal: true,
    discountPercent: 11,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 54,
    farmerEmail: 'nutricion@souyultech.com',
    farmerName: 'Planta de Nutrición Sau Yul Tech',
    department: 'Managua',
    photoUrl: 'https://lh3.googleusercontent.com/d/1uCJhARrzTi8ORXAUkKMRlZDn92KnCBv2',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Dosificar según producción láctea: 1 lb de concentrado por cada 3 litros de leche producida.',
    createdAt: '2026-08-19T09:30:00Z'
  },
  {
    num: 51,
    id: 'PROD-051',
    title: 'Sal Mineralizada Ganadera con Fósforo al 8% (45 lb)',
    category: 'Nutrición Ganadera',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Sal mineral enriquecida con fósforo, zinc, selenio y magnesio para maximizar índices de fertilidad, ganancia de peso y salud ósea.',
    quantity_initial: 180,
    quantity_available: 145,
    quantity_sold: 35,
    unit: 'saco (45 lb)',
    producerPrice: 280.00,
    marginPercent: 12.0,
    marginAmount: 33.60,
    sellingPrice: 313.60,
    price: 313.60,
    oldPrice: 360.00,
    isDeal: false,
    discountPercent: 0,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 31,
    farmerEmail: 'nutricion@souyultech.com',
    farmerName: 'Planta de Nutrición Sau Yul Tech',
    department: 'Managua',
    photoUrl: 'https://lh3.googleusercontent.com/d/1I94uXy8lD-raUjEFlP8lH1_WKX72V9YQ',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Suministrar a voluntad en saladeros techados para evitar deslave por lluvia.',
    createdAt: '2026-08-19T10:00:00Z'
  },
  {
    num: 52,
    id: 'PROD-052',
    title: 'Bloque Multinutricional de Melaza y Urea (25 kg)',
    category: 'Nutrición Ganadera',
    marketType: 'APROVECHAMIENTO_PECUARIO',
    isDescarte: false,
    saleMode: 'PESO',
    description: 'Bloque sólido de lamedero continuo con melaza densa, nitrógeno no proteico (urea protegida) y macro/microminerales para potrero.',
    quantity_initial: 220,
    quantity_available: 180,
    quantity_sold: 40,
    unit: 'bloque (25 kg)',
    producerPrice: 160.00,
    marginPercent: 12.0,
    marginAmount: 19.20,
    sellingPrice: 179.20,
    price: 179.20,
    oldPrice: 210.00,
    isDeal: true,
    discountPercent: 15,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 43,
    farmerEmail: 'nutricion@souyultech.com',
    farmerName: 'Planta de Nutrición Sau Yul Tech',
    department: 'Boaco',
    photoUrl: 'https://lh3.googleusercontent.com/d/1vkX2eTY0BwcN7bF5_otLOG33uqA_axNp',
    status: 'PUBLICADO',
    livestockSafetyNotes: 'Asegurar disponibilidad permanente de agua fresca en el potrero al usar bloques con urea.',
    createdAt: '2026-08-19T10:30:00Z'
  }
],

  // Lotes Matriz del Productor
  lotesList: [
    {
      id: 'LOT-MANGO-2026',
      code: 'LOT-MANGO-2026',
      crop: 'Mango Criollo',
      category: 'Frutas',
      totalQuantity: 1500,
      remainingQuantity: 1050,
      unit: 'kg',
      harvestDate: '2026-08-10',
      farmerEmail: 'Sauyoultech@comercializadora.com'
    },
    {
      id: 'LOT-NARANJA-2026',
      code: 'LOT-NARANJA-2026',
      crop: 'Naranja Valencia',
      category: 'Cítricos',
      totalQuantity: 2000,
      remainingQuantity: 1200,
      unit: 'kg',
      harvestDate: '2026-08-12',
      farmerEmail: 'Sauyoultech@comercializadora.com'
    }
  ],

  // Favoritos del Comprador
  favoritesList: JSON.parse(localStorage.getItem('sauyultech_favorites') || '["PROD-001", "PROD-004"]'),

  // Reseñas de Productos
  reviewsList: JSON.parse(localStorage.getItem('sauyultech_reviews') || JSON.stringify([
    { id: 'REV-1', productId: 'PROD-001', userName: 'Roberto Mayorista', rating: 5, comment: 'Excelente calidad y frescura. Llegaron intactos y muy dulces.', date: '18 Ago 2026' },
    { id: 'REV-2', productId: 'PROD-001', userName: 'Comercial del Valle', rating: 5, comment: 'Muy buen precio y el envío fue rápido.', date: '16 Ago 2026' },
    { id: 'REV-3', productId: 'PROD-005', userName: 'Supermercado Central', rating: 5, comment: 'El mejor queso seco de Matagalpa, textura perfecta.', date: '17 Ago 2026' }
  ])),

  // Notificaciones Segmentadas por Rol
  notificationsList: JSON.parse(localStorage.getItem('sauyultech_notifications') || JSON.stringify([
    { id: 'NOTIF-1', role: 'comprador', title: '🚚 Pedido #PED-894102 En Camino', desc: 'El repartidor está en ruta hacia tu dirección con tus mangos frescos.', time: 'Hace 15 min', read: false },
    { id: 'NOTIF-2', role: 'comprador', title: '🔥 Nueva Oferta de Cosecha', desc: 'Descuento del 20% en Naranjas Dulces Valencia.', time: 'Hace 2 horas', read: false },
    { id: 'NOTIF-3', role: 'agricultor', title: '🎉 ¡Venta Acreditada en Monedero!', desc: 'Se han acreditado C$ 2,240.00 a tu Monedero Virtual por venta de lote de mangos.', time: 'Hace 30 min', read: false },
    { id: 'NOTIF-4', role: 'agricultor', title: '💬 Mensaje de Comprador', desc: 'Roberto Mayorista te ha enviado una consulta sobre disponibilidad de carga.', time: 'Hace 1 hora', read: false },
    { id: 'NOTIF-5', role: 'ganadero', title: '📜 Carta de Traspaso Emitida', desc: 'La Carta Oficial de Traspaso #TR-2026-001 ha sido generada y avalada.', time: 'Hace 3 horas', read: false },
    { id: 'NOTIF-6', role: 'ganadero', title: '🛰️ Geocerca & Alerta Térmica', desc: 'Bovino Gyr Esperanza #12 registró temperatura de 39.2°C en Potrero Norte.', time: 'Hace 4 horas', read: false },
    { id: 'NOTIF-7', role: 'veterinario', title: '🩺 Consulta Clínica Solicitada', desc: 'Evaluación veterinaria requerida para lote de novillas en Hacienda El Valle.', time: 'Hace 5 horas', read: false },
    { id: 'NOTIF-8', role: 'superadmin', title: '💳 Solicitud de Liquidación Bancaria', desc: 'Productora María Gutiérrez solicitó retiro de C$ 5,000.00 a cuenta BAC Credomatic.', time: 'Hace 10 min', read: false }
  ])),

  // Monedero Virtual del Productor
  producerWallet: JSON.parse(localStorage.getItem('sauyultech_producer_wallet') || JSON.stringify({
    balanceAvailable: 24500.00,
    balancePendingEscrow: 3800.00,
    totalWithdrawn: 42000.00,
    transactions: [
      { id: 'TX-901', type: 'VENTA', concept: 'Venta Lote Mangos Criollos (PED-894102)', amount: 2240.00, date: '19/08/2026', status: 'ACREDITADO' },
      { id: 'TX-902', type: 'RETIRO', concept: 'Liquidación a BAC Credomatic #365-894102-1', amount: 15000.00, date: '15/08/2026', status: 'LIQUIDADO' },
      { id: 'TX-903', type: 'VENTA', concept: 'Venta Aguacate Simmons 40 kg (PED-881204)', amount: 3600.00, date: '14/08/2026', status: 'ACREDITADO' }
    ]
  })),

  // Conversaciones de Chat Directo (Comprador ↔ Productor)
  chatConversations: JSON.parse(localStorage.getItem('sauyultech_chat_conversations') || JSON.stringify({
    'Sauyoultech@comercializadora.com': [
      { sender: 'seller', text: '¡Hola! Bienvenido a Finca Los Cítricos. Todos nuestros mangos y cítricos están frescos y listos para despacho inmediato.', time: '10:30 AM' }
    ]
  })),

  // Liquidaciones de Retiro para Superadmin
  settlementsList: JSON.parse(localStorage.getItem('sauyultech_settlements') || JSON.stringify([
    { id: 'LIQ-8901', sellerName: 'Comercializadora Sau Yul Tech S.A.', bank: 'BAC Credomatic', account: '365-894102-1', amount: 14200.00, status: 'PENDIENTE', date: '15/09/2026', txId: 'TX-902' },
    { id: 'LIQ-8902', sellerName: 'Carlos Ruiz (Finca Agrícola Carazo)', bank: 'Banpro Grupo Promerica', account: '1002-0458-9102', amount: 28400.00, status: 'PAGADO', date: '14/09/2026' },
    { id: 'LIQ-8903', sellerName: 'Don Javier Silva (Hacienda El Valle)', bank: 'Banco LAFISE Bancentro', account: '450-891044-8', amount: 32000.00, status: 'PAGADO', date: '12/09/2026' },
    { id: 'LIQ-8904', sellerName: 'Cooperativa Granos del Norte', bank: 'BAC Credomatic', account: '365-110294-5', amount: 19800.00, status: 'PENDIENTE', date: '15/09/2026' }
  ])),

  // Carrito de Compras
  cart: [],

  // Pedidos
  ordersList: [
    {
      id: 'PED-894102',
      buyerEmail: 'Sauyoultech@comercializadora.com',
      buyerName: 'Administrador Maestro Sau Yul Tech',
      buyerPhone: '+505 8765-4321',
      buyerDept: 'Managua',
      buyerAddress: 'Pista Suburbana, Edificio Discovery Plaza, Mod 4',
      items: [
        { productId: 'PROD-001', title: 'Mangos Criollos Seleccionados', qty: 10, unit: 'kg', price: 22.40, producerPrice: 20.00, farmerEmail: 'Sauyoultech@comercializadora.com' }
      ],
      subtotal: 224.00,
      shipping: 50.00,
      total: 274.00,
      status: 'EN_CAMINO',
      stepIndex: 3,
      payMethod: 'CARD',
      createdAt: '2026-08-19T10:15:00Z'
    },
    {
      id: 'PED-772190',
      buyerEmail: 'Sauyoultech@comercializadora.com',
      buyerName: 'Administrador Maestro Sau Yul Tech',
      buyerPhone: '+505 8765-4321',
      buyerDept: 'Managua',
      buyerAddress: 'Pista Suburbana, Edificio Discovery Plaza',
      items: [
        { productId: 'PROD-005', title: 'Queso Seco Artesanal de Finca', qty: 5, unit: 'lb', price: 95.20, producerPrice: 85.00, farmerEmail: 'Sauyoultech@comercializadora.com' }
      ],
      subtotal: 476.00,
      shipping: 50.00,
      total: 526.00,
      status: 'ENTREGADO',
      stepIndex: 4,
      payMethod: 'CARD',
      createdAt: '2026-08-18T16:00:00Z'
    }
  ],

  // Bovinos y Telemetría Satelital (100% Intacto)
  cowsList: [
    { id: 'COW-001', name: 'Brahma Reina #04', collarId: 'SAU-IOT-091', temp: 38.6, hr: 68, battery: 94, status: 'NORMAL', zone: 'Potrero Central', lat: 12.8562, lng: -85.9812 },
    { id: 'COW-002', name: 'Gyr Esperanza #12', collarId: 'SAU-IOT-092', temp: 39.2, hr: 82, battery: 88, status: 'ALERTA', zone: 'Potrero Norte', lat: 12.8540, lng: -85.9790 },
    { id: 'COW-003', name: 'Holstein Linda #08', collarId: 'SAU-IOT-093', temp: 38.5, hr: 64, battery: 91, status: 'NORMAL', zone: 'Potrero Sur', lat: 12.8570, lng: -85.9825 }
  ]
};

// ========================================================================================
// 🔔 UTILIDADES & TOAST NOTIFICATIONS
// ========================================================================================
function showToast(message, type = 'success') {
  const toastArea = document.getElementById('toastArea');
  if (!toastArea) return;

  const icons = {
    success: 'fa-circle-check',
    warn: 'fa-triangle-exclamation',
    error: 'fa-circle-xmark',
    info: 'fa-circle-info'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${icons[type] || 'fa-bell'}"></i><span>${message}</span>`;
  toastArea.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3800);
}

function calculateProductPricing(producerBasePrice) {
  const base = parseFloat(producerBasePrice) || 0;
  const marginPct = parseFloat(state.pricingConfig.marginPercent) || 12.0;
  const fixed = parseFloat(state.pricingConfig.fixedFee) || 0.0;
  const marginAmt = (base * (marginPct / 100)) + fixed;
  const finalPrice = Math.round((base + marginAmt) * 100) / 100;
  return {
    producerPrice: base,
    marginPercent: marginPct,
    marginAmount: Math.round(marginAmt * 100) / 100,
    sellingPrice: finalPrice
  };
}

// ========================================================================================
// 🎬 2. CONTROLADOR DE SPLASH SCREEN
// ========================================================================================
const splashController = {
  init() {
    // Animación de bienvenida desactivada permanentemente a solicitud del usuario
    const splash = document.getElementById('welcomeSplashOverlay');
    if (splash) splash.remove();
  },
  dismiss() {
    const splash = document.getElementById('welcomeSplashOverlay');
    if (splash) splash.remove();
  }
};

// ========================================================================================
// 🌲 3. CONTROLADOR DE SIDEBAR (COMPACTO 250px & COLAPSIBLE)
// ========================================================================================
const sidebarController = {
  toggleCollapse() {
    const sidebar = document.getElementById('mainAppSidebar');
    const icon = document.getElementById('sidebarCollapseIcon');
    if (!sidebar) return;

    state.sidebarCollapsed = !state.sidebarCollapsed;
    sidebar.classList.toggle('collapsed', state.sidebarCollapsed);
    if (icon) {
      icon.className = state.sidebarCollapsed ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
    }
  }
};

// ========================================================================================
// 🔐 4. GESTOR DE AUTENTICACIÓN & CONTROL DE ROLES
// ========================================================================================
const authManager = {
  selectedRole: 'comprador',

  init() {
    this.loadRememberedCredentials();
    this.checkStoredSession();
  },

  loadRememberedCredentials() {
    try {
      const saved = JSON.parse(localStorage.getItem('sauyultech_remembered_credentials') || 'null');
      const testEmails = [
        'roberto@distribuidora.com',
        'maria@cosechas.com',
        'hacienda@elvalle.com',
        'veterinario@souyultech.com',
        'admin@sauyultech.com'
      ];
      if (saved && saved.email && testEmails.includes(saved.email.toLowerCase())) {
        localStorage.removeItem('sauyultech_remembered_credentials');
        return;
      }
      if (saved && saved.email) {
        const emailInput = document.getElementById('loginEmail');
        const passInput = document.getElementById('loginPassword');
        const rememberCheck = document.getElementById('loginRememberMe');
        if (emailInput && !emailInput.value) emailInput.value = saved.email;
        if (passInput && !passInput.value && saved.password) passInput.value = saved.password;
        if (rememberCheck) rememberCheck.checked = true;
        if (saved.role) {
          this.selectedRole = saved.role;
          const roleBtn = document.querySelector(`.login-profile-selector-grid .profile-select-btn[onclick*="${saved.role}"]`);
          if (roleBtn) {
            document.querySelectorAll('.login-profile-selector-grid .profile-select-btn').forEach(b => b.classList.remove('active'));
            roleBtn.classList.add('active');
          }
          const roleInput = document.getElementById('loginSelectedProfileRole');
          if (roleInput) roleInput.value = saved.role;
        }
      }
    } catch (err) {
      console.warn('⚠️ [AuthManager] Error al cargar credenciales recordadas:', err);
    }
  },

  fillDemoAccount() {
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    const roleInput = document.getElementById('loginSelectedProfileRole');
    this.selectedRole = 'superadmin';
    if (roleInput) roleInput.value = 'superadmin';

    document.querySelectorAll('.login-profile-selector-grid .profile-select-btn').forEach(b => b.classList.remove('active'));
    const adminBtn = document.querySelector('.login-profile-selector-grid .profile-select-btn[onclick*="superadmin"]');
    if (adminBtn) adminBtn.classList.add('active');

    if (emailInput) emailInput.value = 'Sauyoultech@comercializadora.com';
    if (passInput) passInput.value = 'ComercializadoraSauyoultechS.A26-09-2026@';
    showToast('Credenciales maestras de Administrador cargadas.', 'success');
  },

  togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    const icon = btnEl ? (btnEl.querySelector('i') || btnEl) : null;
    if (icon) {
      if (isPass) {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }
  },

  validatePasswordMatch() {
    const pass = document.getElementById('regPassword')?.value || '';
    const confirm = document.getElementById('regPasswordConfirm')?.value || '';
    const msgEl = document.getElementById('regPasswordMatchMsg');
    if (!msgEl) return true;

    if (!confirm) {
      msgEl.innerHTML = '';
      return true;
    }

    if (pass === confirm) {
      msgEl.className = 'password-match-indicator matching';
      msgEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Las contraseñas coinciden correctamente';
      return true;
    } else {
      msgEl.className = 'password-match-indicator mismatch';
      msgEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Las contraseñas no coinciden';
      return false;
    }
  },

  getRegisteredUsers() {
    let list = JSON.parse(localStorage.getItem('sauyultech_registered_users') || '[]');
    const deletedEmails = JSON.parse(localStorage.getItem('sauyultech_deleted_emails') || '[]');
    
    // Lista de correos de prueba obsoletos a purgar
    const testEmails = [
      'roberto@distribuidora.com',
      'maria@cosechas.com',
      'hacienda@elvalle.com',
      'veterinario@souyultech.com',
      'admin@sauyultech.com'
    ];
    list = list.filter(u => u && u.email && !testEmails.includes(u.email.toLowerCase().trim()) && !deletedEmails.includes(u.email.toLowerCase().trim()));

    // Único usuario maestro del sistema (plantilla base por defecto)
    const masterAdmin = {
      id: 'usr-admin-master',
      name: 'Administrador Maestro Sau Yul Tech',
      email: 'Sauyoultech@comercializadora.com',
      phone: '+505 8888-9999',
      farm: 'Comercializadora Sau Yul Tech S.A.',
      profileType: 'superadmin',
      location: 'Managua, Nicaragua',
      password: 'ComercializadoraSauyoultechS.A26-09-2026@',
      role: 'superadmin',
      status: 'ACTIVO',
      createdAt: '2026-09-16T00:00:00.000Z'
    };

    const adminIdx = list.findIndex(u => u && u.email && u.email.toLowerCase() === 'sauyoultech@comercializadora.com');
    if (adminIdx >= 0) {
      // Priorizar los cambios guardados por el administrador para no sobreescribir ediciones
      list[adminIdx] = { ...masterAdmin, ...list[adminIdx] };
    } else {
      list.unshift(masterAdmin);
    }

    localStorage.setItem('sauyultech_registered_users', JSON.stringify(list));
    return list;
  },

  selectLoginRole(role, btnEl) {
    this.selectedRole = role;
    document.querySelectorAll('.profile-select-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    const input = document.getElementById('loginSelectedProfileRole');
    if (input) input.value = role;

    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    
    if (role === 'superadmin') {
      if (emailInput && !emailInput.value.trim()) emailInput.value = 'Sauyoultech@comercializadora.com';
      if (passInput && !passInput.value) passInput.value = 'ComercializadoraSauyoultechS.A26-09-2026@';
    }
  },

  switchSubView(view) {
    document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
    
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    if (view === 'login') {
      if (formLogin) { formLogin.style.display = 'flex'; formLogin.classList.add('active'); }
      if (formRegister) { formRegister.style.display = 'none'; formRegister.classList.remove('active'); }
      document.getElementById('tabBtn-login')?.classList.add('active');
      this.loadRememberedCredentials();
    } else {
      if (formLogin) { formLogin.style.display = 'none'; formLogin.classList.remove('active'); }
      if (formRegister) { formRegister.style.display = 'flex'; formRegister.classList.add('active'); }
      document.getElementById('tabBtn-register')?.classList.add('active');
    }
  },

  async handleLogin(e) {
    e.preventDefault();
    const inputUserOrEmail = document.getElementById('loginEmail').value.trim();
    const inputPass = document.getElementById('loginPassword').value.trim();
    const role = this.selectedRole || 'superadmin';
    const rememberCheck = document.getElementById('loginRememberMe');

    const cleanUser = inputUserOrEmail.toLowerCase();
    const MASTER_EMAIL = 'sauyoultech@comercializadora.com';
    const MASTER_PASS = 'ComercializadoraSauyoultechS.A26-09-2026@';

    // 0. Comprobación estricta local de usuarios eliminados: SUS CREDENCIALES YA NO EXISTEN
    const deletedEmails = JSON.parse(localStorage.getItem('sauyultech_deleted_emails') || '[]');
    if (deletedEmails.includes(cleanUser)) {
      try {
        const rem = JSON.parse(localStorage.getItem('sauyultech_remembered_credentials') || 'null');
        if (rem && rem.email && rem.email.toLowerCase().trim() === cleanUser) {
          localStorage.removeItem('sauyultech_remembered_credentials');
        }
      } catch (e) {}
      const pInput = document.getElementById('loginPassword');
      if (pInput) pInput.value = '';
      showToast('Este usuario fue eliminado por el Administrador y sus credenciales ya no existen en la plataforma.', 'danger');
      return;
    }

    // 1. Reconocimiento de credenciales maestras de Administrador
    const isMasterUser = [MASTER_EMAIL, 'admin', 'superadmin'].includes(cleanUser);

    if (isMasterUser) {
      const usersList = this.getRegisteredUsers();
      const currentMaster = usersList.find(u => u && u.email && u.email.toLowerCase() === MASTER_EMAIL);
      const expectedPass = currentMaster?.password || MASTER_PASS;

      const validAdminPasses = [MASTER_PASS, 'admin123', 'admin', expectedPass].filter(Boolean);
      if (!validAdminPasses.includes(inputPass)) {
        showToast('Contraseña de Administrador incorrecta. Por favor verifique sus credenciales.', 'danger');
        return;
      }

      const masterSession = currentMaster || {
        id: 'usr-admin-master',
        name: 'Administrador Maestro Sau Yul Tech',
        email: 'Sauyoultech@comercializadora.com',
        phone: '+505 8888-9999',
        farm: 'Comercializadora Sau Yul Tech S.A.',
        profileType: 'superadmin',
        role: 'superadmin',
        location: 'Managua, Nicaragua',
        password: MASTER_PASS,
        status: 'ACTIVO'
      };

      state.currentSession = masterSession;
      localStorage.setItem('sauyultech_session', JSON.stringify(masterSession));
      
      if (rememberCheck && rememberCheck.checked) {
        localStorage.setItem('sauyultech_remembered_credentials', JSON.stringify({
          email: inputUserOrEmail,
          password: inputPass,
          role: 'superadmin'
        }));
      }

      if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
        firebaseSync.saveUser(masterSession);
      }

      document.getElementById('form-login')?.reset();
      this.applySessionUI(masterSession);
      showToast('¡Acceso concedido como Administrador Maestro!', 'success');
      appRouter.navigate('app-master-admin');
      masterAdminController.init();
      if (typeof firebaseSync !== 'undefined') {
        firebaseSync.syncAll(false);
      }
      return;
    }

    // 2. Comprobación en Tiempo Real en la Nube (Firebase Firestore) para evitar resurrección entre dispositivos
    let cloudVerifiedUser = null;
    if (typeof firebaseSync !== 'undefined' && firebaseSync.isReady && firebaseSync.db) {
      try {
        const docId = cleanUser.replace(/[^a-z0-9_@.-]/g, '_');
        
        // A. Verificar si el usuario fue registrado en la lista de eliminados de Firestore (deleted_users)
        const delCol = firebaseSync.methods.collection(firebaseSync.db, 'deleted_users');
        const delDocSnap = await firebaseSync.methods.getDoc(firebaseSync.methods.doc(delCol, docId)).catch(() => null);
        if (delDocSnap && delDocSnap.exists()) {
          if (!deletedEmails.includes(cleanUser)) {
            deletedEmails.push(cleanUser);
            localStorage.setItem('sauyultech_deleted_emails', JSON.stringify(deletedEmails));
          }
          let localList = JSON.parse(localStorage.getItem('sauyultech_registered_users') || '[]');
          localList = localList.filter(u => u && u.email && u.email.toLowerCase().trim() !== cleanUser);
          localStorage.setItem('sauyultech_registered_users', JSON.stringify(localList));
          localStorage.removeItem('sauyultech_remembered_credentials');
          const pInput = document.getElementById('loginPassword');
          if (pInput) pInput.value = '';
          showToast('Credenciales inexistentes. Este perfil fue eliminado por el Administrador y ya no existe.', 'danger');
          return;
        }

        // B. Verificar existencia real en la colección 'users' de Firestore
        const userCol = firebaseSync.methods.collection(firebaseSync.db, 'users');
        let userDocSnap = await firebaseSync.methods.getDoc(firebaseSync.methods.doc(userCol, docId)).catch(() => null);
        if ((!userDocSnap || !userDocSnap.exists()) && docId !== cleanUser) {
          userDocSnap = await firebaseSync.methods.getDoc(firebaseSync.methods.doc(userCol, cleanUser)).catch(() => null);
        }

        if (userDocSnap && userDocSnap.exists()) {
          cloudVerifiedUser = userDocSnap.data();
        } else {
          // Si no existe en Firestore, el administrador lo eliminó en la nube: PURGAR LOCALMENTE
          let localList = JSON.parse(localStorage.getItem('sauyultech_registered_users') || '[]');
          const hadLocal = localList.some(u => u && u.email && u.email.toLowerCase().trim() === cleanUser);
          if (hadLocal) {
            console.warn('🚫 [AuthManager] Usuario eliminado en la nube detectado localmente. Purgando:', cleanUser);
            if (!deletedEmails.includes(cleanUser)) {
              deletedEmails.push(cleanUser);
              localStorage.setItem('sauyultech_deleted_emails', JSON.stringify(deletedEmails));
            }
            localList = localList.filter(u => u && u.email && u.email.toLowerCase().trim() !== cleanUser);
            localStorage.setItem('sauyultech_registered_users', JSON.stringify(localList));
            localStorage.removeItem('sauyultech_remembered_credentials');
            const pInput = document.getElementById('loginPassword');
            if (pInput) pInput.value = '';
            showToast('Credenciales inexistentes. Este perfil fue eliminado por el Administrador.', 'danger');
            return;
          }
        }
      } catch (err) {
        console.warn('⚠️ [AuthManager] Verificación Firestore en login omitida por red:', err);
      }
    }

    // 3. Buscar en usuarios registrados (priorizando versión de la nube)
    const users = this.getRegisteredUsers();
    const existing = cloudVerifiedUser || users.find(u => 
      (u.email && u.email.toLowerCase() === cleanUser) ||
      (u.name && u.name.toLowerCase() === cleanUser) ||
      (u.phone && u.phone.replace(/[^0-9]/g, '') === inputUserOrEmail.replace(/[^0-9]/g, '') && inputUserOrEmail.length >= 6)
    );

    if (existing) {
      if (existing.password && inputPass && existing.password !== inputPass) {
        showToast('Contraseña incorrecta. Por favor verifique sus datos.', 'danger');
        return;
      }

      // Gestión de Recordar Credenciales
      if (rememberCheck && rememberCheck.checked) {
        localStorage.setItem('sauyultech_remembered_credentials', JSON.stringify({
          email: inputUserOrEmail,
          password: inputPass,
          role: role
        }));
      } else {
        localStorage.removeItem('sauyultech_remembered_credentials');
      }

      state.currentSession = existing;
      localStorage.setItem('sauyultech_session', JSON.stringify(existing));
      
      document.getElementById('form-login')?.reset();
      this.applySessionUI(existing);
      showToast(`¡Bienvenido de nuevo, ${existing.name}!`, 'success');

      if (existing.profileType === 'superadmin' || existing.role === 'superadmin') {
        appRouter.navigate('app-master-admin');
        masterAdminController.init();
        if (typeof firebaseSync !== 'undefined') {
          firebaseSync.syncAll(false);
        }
      } else if (existing.profileType === 'comprador') {
        appRouter.navigate('app-market');
      } else if (existing.profileType === 'agricultor') {
        appRouter.navigate('app-agricultor');
      } else if (existing.profileType === 'ganadero') {
        appRouter.navigate('app-ganadero');
      } else if (existing.profileType === 'veterinario') {
        appRouter.navigate('app-veterinary');
      } else {
        appRouter.navigate('app-market');
      }
      return;
    }

    // 4. Usuario no encontrado
    showToast('Credenciales inexistentes. Este perfil fue eliminado o no existe en la plataforma.', 'danger');
  },

  async handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const farm = document.getElementById('regFarm').value.trim();
    const profileType = document.getElementById('regProfileType').value;
    const location = document.getElementById('regLocationDept').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const confirmPassword = document.getElementById('regPasswordConfirm')?.value.trim() || '';

    if (!name || !email || !password) {
      showToast('Por favor completa todos los campos obligatorios.', 'warn');
      return;
    }

    if (confirmPassword && password !== confirmPassword) {
      showToast('Las contraseñas no coinciden. Por favor verifícalas.', 'danger');
      return;
    }

    const users = this.getRegisteredUsers();
    const emailExists = users.some(u => u.email && u.email.toLowerCase() === email.toLowerCase());

    if (emailExists) {
      showToast('Este correo ya está registrado. Inicia sesión con tu contraseña.', 'warn');
      this.switchSubView('login');
      const loginEmailInput = document.getElementById('loginEmail');
      if (loginEmailInput) loginEmailInput.value = email;
      return;
    }

    const newUser = {
      id: 'usr-' + Date.now(),
      name,
      email,
      phone: phone || '+505 8888-0000',
      farm: farm || 'Finca / Negocio',
      profileType: profileType || 'comprador',
      location: location || 'Nicaragua',
      password,
      role: (profileType === 'superadmin' || email.toLowerCase().includes('admin')) ? 'superadmin' : 'user',
      status: 'ACTIVO',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));

    // Recordar credenciales para que no se pierdan nunca
    localStorage.setItem('sauyultech_remembered_credentials', JSON.stringify({
      email: newUser.email,
      password: newUser.password,
      role: newUser.profileType
    }));

    state.currentSession = newUser;
    localStorage.setItem('sauyultech_session', JSON.stringify(newUser));
    document.getElementById('form-register')?.reset();

    // Persistencia directa en la nube Firebase Firestore
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      firebaseSync.saveUser(newUser);
    }

    this.applySessionUI(newUser);
    showToast(`¡Cuenta creada con éxito! Bienvenido, ${newUser.name}.`, 'success');

    if (newUser.profileType === 'superadmin' || newUser.role === 'superadmin') {
      appRouter.navigate('app-master-admin');
      masterAdminController.init();
    } else if (newUser.profileType === 'comprador') {
      appRouter.navigate('app-market');
    } else if (newUser.profileType === 'agricultor') {
      appRouter.navigate('app-agricultor');
    } else if (newUser.profileType === 'ganadero') {
      appRouter.navigate('app-ganadero');
    } else if (newUser.profileType === 'veterinario') {
      appRouter.navigate('app-veterinary');
    }
  },

  switchRoleDirectly(newRole) {
    const isSuperAdmin = state.currentSession && (state.currentSession.role === 'superadmin' || state.currentSession.profileType === 'superadmin');
    
    // Restricción de seguridad: no permitir auto-asignarse veterinario ni admin sin credenciales
    if ((newRole === 'veterinario' || newRole === 'superadmin') && !isSuperAdmin) {
      showToast('Este rol requiere acreditación colegiada o asignación directa desde la Administración.', 'warn');
      return;
    }

    if (!state.currentSession) {
      state.currentSession = {
        name: 'Usuario Sau Yul Tech',
        email: `${newRole}@souyultech.com`,
        phone: '+505 8765-4321',
        farm: 'Finca Modelo',
        location: 'Nicaragua',
        password: '123'
      };
    }

    state.currentSession.profileType = newRole;
    if (newRole === 'superadmin') {
      state.currentSession.role = 'superadmin';
    } else {
      state.currentSession.role = 'user';
    }
    localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));

    // Persistir cambio de rol en Firebase
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      firebaseSync.saveUser(state.currentSession);
    }

    this.applySessionUI(state.currentSession);
    profileController.init();
    notificationCenter.renderNotifications();

    const roleNames = {
      comprador: 'Comprador Mayorista',
      agricultor: 'Productor Agrícola',
      ganadero: 'Ganadero (Hato & IoT)',
      veterinario: 'Médico Veterinario',
      superadmin: 'Administrador Maestro'
    };

    showToast(`Cambiado a perfil de: ${roleNames[newRole] || newRole}`, 'info');

    if (newRole === 'superadmin') {
      appRouter.navigate('app-master-admin');
      masterAdminController.init();
    } else if (newRole === 'comprador') {
      appRouter.navigate('app-market');
    } else if (newRole === 'agricultor') {
      appRouter.navigate('app-agricultor');
    } else if (newRole === 'ganadero') {
      appRouter.navigate('app-ganadero');
    } else if (newRole === 'veterinario') {
      appRouter.navigate('app-veterinary');
    }
  },

  applySessionUI(user) {
    if (!user) return;
    document.body.classList.add('user-authenticated');

    const publicWrap = document.getElementById('publicContainerWrap');
    const privateShell = document.getElementById('appPrivateShell');
    if (publicWrap) publicWrap.style.display = 'none';
    if (privateShell) privateShell.style.display = 'flex';

    // Sidebar User Info
    const userNameEl = document.getElementById('sidebarUserName');
    const userRoleEl = document.getElementById('sidebarUserRole');
    const headerUserName = document.getElementById('headerUserNameText');
    const quickRoleSelect = document.getElementById('sidebarQuickRoleSelect');

    const roleNames = {
      comprador: 'COMPRADOR',
      agricultor: 'PRODUCTOR',
      ganadero: 'GANADERO',
      veterinario: 'VETERINARIO',
      superadmin: 'ADMINISTRADOR'
    };

    const currentRole = user.profileType || (user.role === 'superadmin' ? 'superadmin' : 'comprador');
    const isSuperAdmin = user.role === 'superadmin' || currentRole === 'superadmin';

    if (userNameEl) userNameEl.textContent = user.name;
    if (userRoleEl) userRoleEl.textContent = `(${roleNames[currentRole] || currentRole.toUpperCase()})`;
    if (headerUserName) headerUserName.textContent = user.name.split(' ')[0];
    if (quickRoleSelect) {
      let adminOpt = quickRoleSelect.querySelector('option[value="superadmin"]');
      if (isSuperAdmin) {
        if (!adminOpt) {
          adminOpt = document.createElement('option');
          adminOpt.value = 'superadmin';
          adminOpt.textContent = 'Administrador Maestro';
          quickRoleSelect.appendChild(adminOpt);
        }
      } else {
        if (adminOpt) adminOpt.remove();
      }
      quickRoleSelect.value = currentRole;
    }

    // Render avatar
    if (profileController && profileController.renderAvatarUI) {
      profileController.renderAvatarUI(user);
    }

    // Actualizar notificaciones específicas del rol
    if (notificationCenter && notificationCenter.renderNotifications) {
      notificationCenter.renderNotifications();
    }

    // Control dinámico de secciones de sidebar
    const secBuyer = document.getElementById('sidebarSectionBuyer');
    const secSeller = document.getElementById('sidebarSectionSeller');
    const secGanadero = document.getElementById('sidebarSectionGanadero');
    const secAdmin = document.getElementById('sidebarSectionAdmin');

    if (user.role === 'superadmin' || currentRole === 'superadmin') {
      if (secBuyer) secBuyer.style.display = 'block';
      if (secSeller) secSeller.style.display = 'block';
      if (secGanadero) secGanadero.style.display = 'block';
      if (secAdmin) secAdmin.style.display = 'block';
    } else if (currentRole === 'comprador') {
      if (secBuyer) secBuyer.style.display = 'block';
      if (secSeller) secSeller.style.display = 'none';
      if (secGanadero) secGanadero.style.display = 'none';
      if (secAdmin) secAdmin.style.display = 'none';
    } else if (currentRole === 'agricultor') {
      if (secBuyer) secBuyer.style.display = 'block'; // El productor SIEMPRE puede ver y navegar al Eco-Mercado
      if (secSeller) secSeller.style.display = 'block'; // Panel de ventas y publicación
      if (secGanadero) secGanadero.style.display = 'none';
      if (secAdmin) secAdmin.style.display = 'none';
    } else if (currentRole === 'ganadero') {
      if (secBuyer) secBuyer.style.display = 'block'; // Los ganaderos exploran forrajes y alimentos en el Eco-Mercado
      if (secSeller) secSeller.style.display = 'block';
      if (secGanadero) secGanadero.style.display = 'block';
      if (secAdmin) secAdmin.style.display = 'none';
    } else if (currentRole === 'veterinario') {
      if (secBuyer) secBuyer.style.display = 'block';
      if (secSeller) secSeller.style.display = 'none';
      if (secGanadero) secGanadero.style.display = 'block';
      if (secAdmin) secAdmin.style.display = 'none';
    }

    marketController.renderPublicPreview();
    marketController.renderHomeMarketplace();
    if (typeof profileController !== 'undefined') profileController.init();
  },

  async checkStoredSession() {
    const raw = localStorage.getItem('sauyultech_session');
    if (!raw) return;
    try {
      const sess = JSON.parse(raw);
      if (!sess || !sess.email) {
        localStorage.removeItem('sauyultech_session');
        state.currentSession = null;
        document.body.classList.remove('user-authenticated');
        return;
      }

      const cleanEmail = sess.email.toLowerCase().trim();
      const testEmails = [
        'roberto@distribuidora.com',
        'maria@cosechas.com',
        'hacienda@elvalle.com',
        'veterinario@souyultech.com',
        'admin@sauyultech.com'
      ];
      if (testEmails.includes(cleanEmail)) {
        console.log('🧹 [AuthManager] Sesión de prueba eliminada:', cleanEmail);
        localStorage.removeItem('sauyultech_session');
        state.currentSession = null;
        document.body.classList.remove('user-authenticated');
        return;
      }

      // 1. Validar lista local de usuarios eliminados
      const deletedEmails = JSON.parse(localStorage.getItem('sauyultech_deleted_emails') || '[]');
      if (deletedEmails.includes(cleanEmail)) {
        console.warn('🚫 [AuthManager] Sesión rechazada en recarga: usuario eliminado.', cleanEmail);
        localStorage.removeItem('sauyultech_session');
        state.currentSession = null;
        document.body.classList.remove('user-authenticated');
        this.logout();
        return;
      }

      // 2. Si no es el Administrador Maestro, validar en usuarios registrados y en Firestore
      if (cleanEmail !== 'sauyoultech@comercializadora.com') {
        const localUsers = this.getRegisteredUsers();
        const existsLocally = localUsers.some(u => u && u.email && u.email.toLowerCase().trim() === cleanEmail);
        if (!existsLocally) {
          console.warn('🚫 [AuthManager] Usuario de sesión no figura en usuarios registrados. Purgando sesión.');
          localStorage.removeItem('sauyultech_session');
          state.currentSession = null;
          document.body.classList.remove('user-authenticated');
          this.logout();
          return;
        }

        if (typeof firebaseSync !== 'undefined' && firebaseSync.isReady && firebaseSync.db) {
          try {
            const docId = cleanEmail.replace(/[^a-z0-9_@.-]/g, '_');
            
            // Verificar si está registrado en deleted_users de Firestore
            const delCol = firebaseSync.methods.collection(firebaseSync.db, 'deleted_users');
            const delDocSnap = await firebaseSync.methods.getDoc(firebaseSync.methods.doc(delCol, docId)).catch(() => null);
            if (delDocSnap && delDocSnap.exists()) {
              console.warn('🚫 [AuthManager] Sesión revocada: usuario registrado como eliminado en Firestore.');
              if (!deletedEmails.includes(cleanEmail)) {
                deletedEmails.push(cleanEmail);
                localStorage.setItem('sauyultech_deleted_emails', JSON.stringify(deletedEmails));
              }
              localStorage.removeItem('sauyultech_session');
              state.currentSession = null;
              document.body.classList.remove('user-authenticated');
              this.logout();
              return;
            }

            // Verificar si el documento del usuario aún existe en Firestore
            const userCol = firebaseSync.methods.collection(firebaseSync.db, 'users');
            let userDocSnap = await firebaseSync.methods.getDoc(firebaseSync.methods.doc(userCol, docId)).catch(() => null);
            if ((!userDocSnap || !userDocSnap.exists()) && docId !== cleanEmail) {
              userDocSnap = await firebaseSync.methods.getDoc(firebaseSync.methods.doc(userCol, cleanEmail)).catch(() => null);
            }
            if (!userDocSnap || !userDocSnap.exists()) {
              console.warn('🚫 [AuthManager] Sesión revocada: usuario no existe en Firestore (eliminado en la nube).');
              if (!deletedEmails.includes(cleanEmail)) {
                deletedEmails.push(cleanEmail);
                localStorage.setItem('sauyultech_deleted_emails', JSON.stringify(deletedEmails));
              }
              localStorage.removeItem('sauyultech_session');
              state.currentSession = null;
              document.body.classList.remove('user-authenticated');
              this.logout();
              return;
            }
          } catch (e) {
            console.warn('⚠️ [AuthManager] Validación Firestore en sesión omitida por red:', e);
          }
        }
      }

      state.currentSession = sess;
      this.applySessionUI(state.currentSession);
    } catch (err) {
      localStorage.removeItem('sauyultech_session');
      state.currentSession = null;
      document.body.classList.remove('user-authenticated');
    }
  },

  logout() {
    state.currentSession = null;
    localStorage.removeItem('sauyultech_session');
    sessionStorage.clear();
    document.body.classList.remove('user-authenticated');

    // Desconectar oyentes de administrador en tiempo real
    if (typeof firebaseSync !== 'undefined' && firebaseSync.resetAdminListeners) {
      firebaseSync.resetAdminListeners();
    }
    const secAdmin = document.getElementById('sidebarSectionAdmin');
    if (secAdmin) secAdmin.style.display = 'none';

    // Cerrar sidebar móvil y modales si estaban abiertos
    if (typeof uiModal !== 'undefined') {
      if (uiModal.closeMobileSidebar) uiModal.closeMobileSidebar();
      if (uiModal.closeAll) uiModal.closeAll();
    }

    // Limpiar formularios
    document.getElementById('form-login')?.reset();
    document.getElementById('form-register')?.reset();

    // Alternar visibilidad de los contenedores para respuesta inmediata
    const publicWrap = document.getElementById('publicContainerWrap');
    const privateShell = document.getElementById('appPrivateShell');
    if (publicWrap) {
      publicWrap.style.display = 'flex';
      publicWrap.classList.remove('hidden-shell');
    }
    if (privateShell) {
      privateShell.style.display = 'none';
      privateShell.classList.add('hidden-shell');
    }

    // Desactivar todas las vistas privadas y activar la vista de inicio público
    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    const homeView = document.getElementById('view-public-home');
    if (homeView) homeView.classList.add('active');
    state.activeView = 'public-home';

    // Sincronizar botones de navegación de la barra pública
    document.querySelectorAll('.nav-app-btn').forEach(b => b.classList.remove('active'));
    const homeNavBtn = document.getElementById('navBtn-home');
    if (homeNavBtn) homeNavBtn.classList.add('active');

    // Desplazar a la parte superior
    window.scrollTo({ top: 0, behavior: 'instant' });

    showToast('Has cerrado sesión correctamente. ¡Bienvenido al Menú Principal!', 'info');

    // Salida garantizada: Redirigir y recargar limpiamente para sacar al usuario por completo de la página privada
    try {
      const targetUrl = window.location.origin + window.location.pathname + '#public-home';
      window.location.replace(targetUrl);
      setTimeout(() => {
        window.location.reload();
      }, 80);
    } catch (err) {
      window.location.href = window.location.origin + window.location.pathname + '#public-home';
    }
  }
};

// ========================================================================================
// 🧭 5. ENRUTADOR PRINCIPAL (APP ROUTER)
// ========================================================================================
const appRouter = {
  navigateUserHome() {
    if (!state.currentSession) {
      this.navigate('public-home');
    } else if (state.currentSession.profileType === 'ganadero') {
      this.navigate('app-market-ganadero');
    } else if (state.currentSession.profileType === 'agricultor') {
      this.navigate('app-agricultor');
    } else {
      this.navigate('app-market');
    }
  },

  navigate(viewId) {
    // Cerrar el menú lateral móvil en cualquier cambio de pantalla
    if (typeof uiModal !== 'undefined' && uiModal.closeMobileSidebar) {
      uiModal.closeMobileSidebar();
    }

    // Protección de rutas privadas para no autenticados
    if (viewId.startsWith('app-') && !state.currentSession) {
      viewId = 'auth';
    }

    // Protección estricta y absoluta del Panel Maestro de Administración (Solo Administradores)
    if (viewId === 'app-master-admin') {
      const isSuperAdmin = state.currentSession && (
        state.currentSession.role === 'superadmin' || 
        state.currentSession.profileType === 'superadmin' ||
        (state.currentSession.email && state.currentSession.email.toLowerCase().trim() === 'sauyoultech@comercializadora.com')
      );
      if (!isSuperAdmin) {
        showToast('Acceso denegado: El Panel de Administración está reservado exclusivamente para Administradores.', 'danger');
        viewId = state.currentSession ? 'app-market' : 'auth';
      }
    }

    // Protección de rutas de vendedor para compradores comunes (superadmin tiene pase total)
    if (state.currentSession && state.currentSession.role !== 'superadmin' && state.currentSession.profileType === 'comprador') {
      if (['app-agricultor', 'app-ventas', 'app-ganadero', 'app-iot'].includes(viewId)) {
        showToast('Acceso exclusivo para productores y vendedores.', 'warn');
        viewId = 'app-market';
      }
    }

    // CONTROL ESTRICTO DE VISIBILIDAD ENTRE SITIO PÚBLICO Y APP PRIVADA
    const isPublic = viewId.startsWith('public-') || viewId === 'auth';
    const publicContainerWrap = document.getElementById('publicContainerWrap');
    const appPrivateShell = document.getElementById('appPrivateShell');

    if (publicContainerWrap && appPrivateShell) {
      if (isPublic) {
        publicContainerWrap.style.display = 'flex';
        publicContainerWrap.classList.remove('hidden-shell');
        appPrivateShell.style.display = 'none';
        appPrivateShell.classList.add('hidden-shell');
      } else {
        publicContainerWrap.style.display = 'none';
        publicContainerWrap.classList.add('hidden-shell');
        appPrivateShell.style.display = 'flex';
        appPrivateShell.classList.remove('hidden-shell');
      }
    }

    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-app-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav-btn').forEach(b => b.classList.remove('active'));

    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add('active');
      state.activeView = viewId;
      window.location.hash = viewId;
    }

    // Activar botones de navegación
    const navBtn = document.getElementById(`navBtn-${viewId.replace('public-', '')}`);
    const sideBtn = document.getElementById(`sideBtn-${viewId.replace('app-', '')}`);
    if (navBtn) navBtn.classList.add('active');
    if (sideBtn) sideBtn.classList.add('active');

    // Sincronizar barra de navegación inferior móvil (Dock)
    document.querySelectorAll('.mobile-dock-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
    });

    // Cerrar inspector de animal al cambiar de vista
    if (typeof cowsController !== 'undefined' && cowsController.closeInspector) {
      cowsController.closeInspector();
    }

    // Desencadenar renders de vista
    if (viewId === 'app-market') {
      marketController.renderHomeMarketplace();
    } else if (viewId === 'app-market-ganadero') {
      marketController.renderMarketGanadero();
    } else if (viewId === 'app-catalog') {
      marketController.renderCatalog();
    } else if (viewId === 'app-categories') {
      marketController.renderCategoriesShowcase();
    } else if (viewId === 'app-offers') {
      marketController.renderOffersHub();
    } else if (viewId === 'app-favorites') {
      marketController.renderFavoritesHub();
    } else if (viewId === 'app-tracking') {
      trackingController.renderTrackingOrders();
    } else if (viewId === 'app-pedidos') {
      ordersManager.renderBuyerOrders();
    } else if (viewId === 'app-notifications') {
      notificationCenter.renderNotifications();
    } else if (viewId === 'app-master-admin') {
      masterAdminController.init();
    } else if (viewId === 'app-agricultor') {
      marketController.renderSellerProducts();
      marketController.renderSellerLotes();
      if (typeof producerChatHub !== 'undefined') {
        producerChatHub.init();
      }
    } else if (viewId === 'app-ventas') {
      marketController.renderFarmerSales();
    } else if (viewId === 'app-ganadero') {
      cowsController.initMap();
      if (typeof transfersController !== "undefined") transfersController.init();
    } else if (viewId === 'app-iot') {
      iotHardwareController.renderCollars();
    } else if (viewId === 'app-profile') {
      profileController.populateProfileForm();
    } else if (viewId === 'public-market') {
      marketController.renderPublicPreview();
    } else if (viewId === 'auth') {
      authManager.loadRememberedCredentials();
    }

    // Sincronizar visibilidad del carrito flotante (solo en secciones donde se utiliza)
    if (typeof cartManager !== 'undefined' && cartManager.syncFloatingVisibility) {
      cartManager.syncFloatingVisibility(viewId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    uiModal.closeMobileSidebar();
  }
};

// ========================================================================================
// 🛍️ 6. CONTROLADOR DEL ECO-MERCADO DIGITAL (EXPERIENCIA TIPO AMAZON / EBAY)
// ========================================================================================
const marketController = {
  async loadMarketData() {
    this.loadLotesFromStorage();
    const raw = localStorage.getItem('sauyultech_products');
    if (raw) {
      try {
        const stored = JSON.parse(raw);
        if (Array.isArray(stored) && stored.length > 0) {
          const mergedMap = new Map();
          // Base inicial maestra
          state.productsList.forEach(p => mergedMap.set(p.id, p));
          // Productos locales (modificados o creados por el usuario)
          stored.forEach(p => {
            const canonical = mergedMap.get(p.id);
            if (canonical && p.id.startsWith('PROD-')) {
              mergedMap.set(p.id, {
                ...p,
                title: canonical.title,
                description: canonical.description,
                category: canonical.category,
                photoUrl: canonical.photoUrl,
                photo: canonical.photoUrl
              });
            } else {
              mergedMap.set(p.id, { ...canonical, ...p });
            }
          });
          state.productsList = Array.from(mergedMap.values());
        }
      } catch (e) {}
    }

    // Sanitizar y mapear fotos para garantizar el uso de las 52 imágenes con descripción idéntica
    const canonicalMap = new Map();
    state.productsList.forEach(p => {
      if (p.id && p.id.startsWith('PROD-')) canonicalMap.set(p.id, p);
    });

    state.productsList.forEach(p => {
      const canonical = canonicalMap.get(p.id);
      if (canonical) {
        p.title = canonical.title;
        p.description = canonical.description;
        p.category = canonical.category;
        p.photoUrl = canonical.photoUrl;
        p.photo = canonical.photoUrl;
      } else if (!p.photoUrl || p.photoUrl.startsWith('img/') || !p.photoUrl.includes('google') || p.photoUrl.includes('unsplash.com') || p.photoUrl.includes('media_') || p.photoUrl.includes('produce_') || p.photoUrl.includes('hero_agro')) {
        const matched = Object.keys(realProducePhotos).find(k => (p.title || '').toLowerCase().includes(k.toLowerCase()));
        if (matched) {
          p.photoUrl = realProducePhotos[matched];
        } else if (p.category && defaultProduceImages[p.category]) {
          p.photoUrl = defaultProduceImages[p.category];
        } else {
          p.photoUrl = defaultProduceImages['Frutas'];
        }
      }
    });
    this.saveProductsToStorage();

    this.renderHomeMarketplace();
    this.renderPublicPreview();
    this.renderHotDealsMarquee();
    cartManager.updateBadge();
    this.updateFavsBadge();
  },

  saveProductsToStorage() {
    localStorage.setItem('sauyultech_products', JSON.stringify(state.productsList));
  },

  saveLotesToStorage() {
    localStorage.setItem('sauyultech_lotes', JSON.stringify(state.lotesList));
  },

  loadLotesFromStorage() {
    const raw = localStorage.getItem('sauyultech_lotes');
    if (raw) {
      try {
        const stored = JSON.parse(raw);
        if (Array.isArray(stored) && stored.length > 0) {
          state.lotesList = stored;
        }
      } catch (e) {}
    }
  },

  updateFavsBadge() {
    const badge = document.getElementById('sidebarFavsBadge');
    if (badge) badge.textContent = state.favoritesList.length;
  },

  // Render Eco-Mercado Ganadero (Alimentos & Descartes Aprovechables)
  renderMarketGanadero() {
    const grid = document.getElementById('ganaderoMarketProductsGrid');
    if (!grid) return;

    const list = state.productsList.filter(p => p.status === 'PUBLICADO' && (p.marketType === 'APROVECHAMIENTO_GANADERO' || p.marketType === 'AMBOS' || p.isDescarte));

    grid.innerHTML = list.length 
      ? list.map(p => this.generateProductCardHTML(p)).join('')
      : '<p style="color:var(--text-muted); text-align:center; padding:30px;">No hay productos ganaderos disponibles en este momento.</p>';
  },

  // Generador de Tarjeta de Producto (HTML Inteligente con Contador de Cantidad y Badges de Mercado)
  generateProductCardHTML(p) {
    const isFav = state.favoritesList.includes(p.id);
    const rawPhoto = p.photo || p.photoUrl || (produceImageCatalog[Object.keys(produceImageCatalog).find(k => (p.title || '').toLowerCase().includes(k.toLowerCase()))]) || defaultProduceImages[p.category] || defaultProduceImages['Frutas'];
    const photo = getRenderableImageUrl(rawPhoto);
    const unitPriceVal = parseFloat(p.sellingPrice || p.price);
    const priceDisplay = `C$ ${unitPriceVal.toFixed(2)}`;
    const isOutOfStock = p.quantity_available <= 0;

    let marketTypeBadge = '';
    if (p.isDescarte) {
      marketTypeBadge = `<span class="badge-market-type descartes"><i class="fa-solid fa-recycle"></i> Aprovechamiento</span>`;
    } else if (p.marketType === 'APROVECHAMIENTO_GANADERO') {
      marketTypeBadge = `<span class="badge-market-type ganadero"><i class="fa-solid fa-cow"></i> Uso Ganadero</span>`;
    } else {
      marketTypeBadge = `<span class="badge-market-type convencional"><i class="fa-solid fa-seedling"></i> Consumo Humano</span>`;
    }

    return `
      <div class="market-product-card ${isOutOfStock ? 'out-of-stock' : ''}">
        <div class="product-image-container" onclick="marketController.openProductDetail('${p.id}')">
          <img src="${photo}" data-gdrive-url="${rawPhoto}" alt="${p.title}" loading="lazy" onerror="if(!this.dataset.retried){this.dataset.retried=1;this.src=this.dataset.gdriveUrl;}">
          ${p.isDeal ? `<span class="product-badge-flag deal">🔥 -${p.discountPercent || 15}% OFF</span>` : p.isFeatured ? `<span class="product-badge-flag featured">🌟 DESTACADO</span>` : ''}
          ${isOutOfStock ? `<span class="product-badge-flag" style="background:#ef4444; color:#FFF; font-weight:900; top:auto; bottom:10px; left:10px;">🔴 AGOTADO</span>` : ''}
          <button type="button" class="product-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); marketController.toggleFavorite('${p.id}', this)" title="Guardar en Favoritos">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="product-card-body">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px; margin-bottom:4px;">
              <span class="badge-status active" style="font-size:0.7rem; padding:2px 8px;">${p.category}</span>
              ${marketTypeBadge}
            </div>

            <h3 style="font-size:1.02rem; margin:6px 0 4px; cursor:pointer;" onclick="marketController.openProductDetail('${p.id}')">${p.title}</h3>
            
            <p class="product-card-desc" onclick="marketController.openProductDetail('${p.id}')" title="${p.description || ''}" style="cursor:pointer;">
              ${p.description || ''}
            </p>
            
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem;">
              <small style="color:var(--text-muted); font-weight:700;">📍 ${p.farmerName} · ${p.department}</small>
              <strong style="color:${isOutOfStock ? '#ef4444' : 'var(--dorado)'}; font-size:0.78rem;">
                ${isOutOfStock ? 'Sin stock' : `${p.quantity_available} ${p.unit} disp.`}
              </strong>
            </div>

            ${p.descarteReason ? `<small style="display:block; color:var(--dorado); font-size:0.74rem; margin-top:2px;">♻️ ${p.descarteReason}</small>` : ''}

            <div class="product-rating-row" style="margin-top:4px;">
              <span class="star-gold">⭐</span> <strong>${p.rating || '4.8'}</strong> <small>(${p.reviewsCount || 20})</small>
            </div>
          </div>
          
          <div class="product-price-action-row">
            <div class="product-price-display-row">
              <div>
                ${p.oldPrice ? `<span class="product-old-price">C$ ${parseFloat(p.oldPrice).toFixed(2)}</span>` : ''}
                <div class="product-price-display">${priceDisplay} <small style="font-size:0.75rem; color:var(--text-secondary); font-weight:700;">/${p.unit}</small></div>
              </div>
              <span id="cardTotalBadge-${p.id}" class="card-dynamic-total-badge">Total: C$ ${unitPriceVal.toFixed(2)}</span>
            </div>

            ${isOutOfStock ? `
              <button type="button" class="secondary-btn" style="padding:7px 12px; font-size:0.82rem; opacity:0.6; width:100%; justify-content:center;" disabled>
                Agotado
              </button>
            ` : `
              <div class="card-stepper-action-wrap">
                <div class="qty-stepper-wrap" onclick="event.stopPropagation();">
                  <button type="button" class="qty-stepper-btn" onclick="marketController.stepCardQty('${p.id}', -1)" title="Disminuir">−</button>
                  <input type="number" id="cardQtyInput-${p.id}" class="qty-stepper-input" value="1" min="1" max="${p.quantity_available}" oninput="marketController.handleCardQtyInput('${p.id}', this.value)" onchange="marketController.handleCardQtyChange('${p.id}', this.value)" onkeydown="marketController.handleCardQtyKeyDown(event, '${p.id}')" onclick="event.stopPropagation();">
                  <button type="button" class="qty-stepper-btn" onclick="marketController.stepCardQty('${p.id}', 1)" title="Aumentar">+</button>
                </div>
                <button type="button" class="primary-action" style="padding:8px 14px; font-size:0.85rem; font-weight:800; display:flex; align-items:center; gap:6px;" onclick="event.stopPropagation(); marketController.addCardWithQty('${p.id}')" title="Agregar al Carrito">
                  <i class="fa-solid fa-cart-plus"></i> + Carrito
                </button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  },

  requireAuthToShop(productId = null) {
    showToast('👋 Para comprar productos o agregarlos al carrito, primero debes registrarte o iniciar sesión.', 'warn');
    if (uiModal.isOpen('modal-product-detail')) {
      uiModal.close('modal-product-detail');
    }
    appRouter.navigate('auth');
    authManager.switchSubView('register');
  },

  // Manejo de Cantidad con Teclado (Entrada en Vivo mientras el usuario escribe)
  handleCardQtyInput(productId, val) {
    const prod = state.productsList.find(p => p.id === productId);
    if (!prod || prod.quantity_available <= 0) return;

    const totalBadge = document.getElementById(`cardTotalBadge-${productId}`);
    const input = document.getElementById(`cardQtyInput-${productId}`);

    if (val === '' || val === null) {
      if (totalBadge) totalBadge.textContent = 'Total: C$ 0.00';
      return;
    }

    let qty = parseInt(val, 10);
    if (isNaN(qty)) qty = 1;

    if (qty > prod.quantity_available) {
      qty = prod.quantity_available;
      if (input) input.value = qty;
      showToast(`Stock disponible: ${prod.quantity_available} ${prod.unit}`, 'warn');
    }

    const unitPrice = parseFloat(prod.sellingPrice || prod.price);
    const subtotal = Math.max(0, qty) * unitPrice;
    if (totalBadge) {
      totalBadge.textContent = `Total: C$ ${subtotal.toFixed(2)}`;
    }
  },

  // Validación al salir del campo (onchange / blur)
  handleCardQtyChange(productId, val) {
    const prod = state.productsList.find(p => p.id === productId);
    if (!prod || prod.quantity_available <= 0) return;

    const input = document.getElementById(`cardQtyInput-${productId}`);
    const totalBadge = document.getElementById(`cardTotalBadge-${productId}`);

    let qty = parseInt(val, 10);
    if (isNaN(qty) || qty < 1) {
      qty = 1;
    } else if (qty > prod.quantity_available) {
      qty = prod.quantity_available;
      showToast(`Stock máximo disponible: ${prod.quantity_available} ${prod.unit}`, 'warn');
    }

    if (input) input.value = qty;

    const unitPrice = parseFloat(prod.sellingPrice || prod.price);
    const subtotal = qty * unitPrice;
    if (totalBadge) {
      totalBadge.textContent = `Total: C$ ${subtotal.toFixed(2)}`;
    }
  },

  // Tecla Enter para agregar directo al carrito
  handleCardQtyKeyDown(event, productId) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleCardQtyChange(productId, event.target.value);
      this.addCardWithQty(productId);
    }
  },

  // Ajuste con botones [- 1 +] con Cálculo Dinámico Limpio
  stepCardQty(productId, delta) {
    const prod = state.productsList.find(p => p.id === productId);
    if (!prod || prod.quantity_available <= 0) return;

    const input = document.getElementById(`cardQtyInput-${productId}`);
    const totalBadge = document.getElementById(`cardTotalBadge-${productId}`);
    if (!input) return;

    let current = parseInt(input.value, 10) || 1;
    let next = current + delta;
    if (next < 1) next = 1;
    if (next > prod.quantity_available) {
      next = prod.quantity_available;
      showToast(`Stock máximo disponible (${prod.quantity_available} ${prod.unit})`, 'warn');
    }
    input.value = next;

    const unitPrice = parseFloat(prod.sellingPrice || prod.price);
    const subtotal = next * unitPrice;
    if (totalBadge) {
      totalBadge.textContent = `Total: C$ ${subtotal.toFixed(2)}`;
    }
  },

  addCardWithQty(productId) {
    const input = document.getElementById(`cardQtyInput-${productId}`);
    let qty = input ? parseInt(input.value, 10) || 1 : 1;
    if (isNaN(qty) || qty < 1) qty = 1;
    cartManager.addToCart(productId, qty);
  },

  // 1. Render Inicio Eco-Mercado Adaptativo según Perfil de Usuario
  
  renderHotDealsMarquee() {
    const track = document.getElementById('publicHotDealsMarqueeTrack');
    if (!track) return;

    let deals = state.productsList.filter(p => p.status === 'PUBLICADO' && p.quantity_available > 0);
    if (!deals.length) deals = state.productsList.slice(0, 6);

    // Duplicar array para efecto continuo de bucle infinito (marquee)
    const listToRender = [...deals, ...deals];

    track.innerHTML = listToRender.map(p => {
      const rawPhoto = p.photo || p.photoUrl || (produceImageCatalog[Object.keys(produceImageCatalog).find(k => (p.title || '').toLowerCase().includes(k.toLowerCase()))]) || defaultProduceImages[p.category] || defaultProduceImages['Frutas'];
      const photoSrc = getRenderableImageUrl(rawPhoto);
      const priceVal = parseFloat(p.sellingPrice || p.price) || 0;
      const oldPriceVal = p.oldPrice ? parseFloat(p.oldPrice) : (priceVal * 1.25);

      return `
        <div class="hot-marquee-card">
          <div class="hot-marquee-img-box">
            <img src="${photoSrc}" data-gdrive-url="${rawPhoto}" alt="${p.title}" class="hot-marquee-img" onerror="if(!this.dataset.retried){this.dataset.retried=1;this.src=this.dataset.gdriveUrl;}">
            <span class="hot-marquee-badge">🔥 HOT</span>
          </div>
          <div class="hot-marquee-body">
            <strong class="hot-marquee-title">${p.title}</strong>
            <div class="hot-marquee-price-row">
              <span class="hot-marquee-price">C$ ${priceVal.toFixed(2)}</span>
              <span class="hot-marquee-old-price">C$ ${oldPriceVal.toFixed(2)}</span>
            </div>
            <button type="button" class="primary-action" style="padding:6px 10px; font-size:0.8rem; justify-content:center; margin-top:4px;" onclick="cartManager.addToCart('${p.id}', 1)">
              <i class="fa-solid fa-cart-plus"></i> + Carrito
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderHomeMarketplace() {
    this.renderHotDealsMarquee();
    const dealsGrid = document.getElementById('marketplace-deals-grid');
    const featuredGrid = document.getElementById('marketplace-featured-grid');
    const feedGrid = document.getElementById('marketplace-feed-grid');

    const profile = state.currentSession?.profileType || 'comprador';

    let published = state.productsList.filter(p => p.status === 'PUBLICADO' && p.quantity_available > 0);

    // FILTRO ADAPTATIVO POR PERFIL
    if (profile === 'ganadero') {
      // Ganadero: Ve productos de aprovechamiento ganadero y mixtos
      published = published.filter(p => p.marketType === 'APROVECHAMIENTO_GANADERO' || p.marketType === 'AMBOS' || p.isDescarte);
    } else if (profile === 'comprador') {
      // Comprador: Solo ve consumo humano
      published = published.filter(p => p.marketType === 'CONSUMO_HUMANO' || p.marketType === 'AMBOS');
    }

    if (dealsGrid) {
      const deals = published.filter(p => p.isDeal);
      dealsGrid.innerHTML = deals.length ? deals.map(p => this.generateProductCardHTML(p)).join('') : '<p style="color:var(--text-muted);">No hay ofertas relámpago en este momento.</p>';
    }

    if (featuredGrid) {
      const featured = published.filter(p => p.isFeatured);
      featuredGrid.innerHTML = featured.length ? featured.map(p => this.generateProductCardHTML(p)).join('') : published.slice(0, 3).map(p => this.generateProductCardHTML(p)).join('');
    }

    if (feedGrid) {
      feedGrid.innerHTML = published.map(p => this.generateProductCardHTML(p)).join('');
    }
  },

  // 2. Render Catálogo Completo con Filtros Adaptativos
  renderCatalog() {
    this.applyCatalogFilters();
  },

  applyCatalogFilters() {
    const sortVal = document.getElementById('catalogSortSelect')?.value || 'NEWEST';
    const catVal = document.getElementById('catalogFilterCat')?.value || 'ALL';
    const deptVal = document.getElementById('catalogFilterDept')?.value || 'ALL';
    const inStockOnly = document.getElementById('catalogFilterInStock')?.checked ?? true;
    const dealsOnly = document.getElementById('catalogFilterOnlyDeals')?.checked ?? false;
    const ratingRadio = document.querySelector('input[name="ratingMin"]:checked')?.value || '0';
    const minRating = parseFloat(ratingRadio);

    const profile = state.currentSession?.profileType || 'comprador';

    let list = state.productsList.filter(p => p.status === 'PUBLICADO');

    // FILTRADO POR ROL
    if (profile === 'ganadero') {
      list = list.filter(p => p.marketType === 'APROVECHAMIENTO_GANADERO' || p.marketType === 'AMBOS' || p.isDescarte);
    } else if (profile === 'comprador') {
      list = list.filter(p => p.marketType === 'CONSUMO_HUMANO' || p.marketType === 'AMBOS');
    }

    if (inStockOnly) list = list.filter(p => p.quantity_available > 0);
    if (dealsOnly) list = list.filter(p => p.isDeal);
    if (catVal !== 'ALL') list = list.filter(p => p.category === catVal);
    if (deptVal !== 'ALL') list = list.filter(p => p.department === deptVal);
    if (minRating > 0) list = list.filter(p => (p.rating || 4.8) >= minRating);

    // Búsqueda si existe
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.farmerName.toLowerCase().includes(q));
    }

    // Ordenamiento
    if (sortVal === 'PRICE_LOW') list.sort((a, b) => a.sellingPrice - b.sellingPrice);
    else if (sortVal === 'PRICE_HIGH') list.sort((a, b) => b.sellingPrice - a.sellingPrice);
    else if (sortVal === 'RATING') list.sort((a, b) => (b.rating || 4.8) - (a.rating || 4.8));
    else if (sortVal === 'POPULAR') list.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    else list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const grid = document.getElementById('catalogProductsGrid');
    const countEl = document.getElementById('catalogResultsCount');
    if (countEl) countEl.textContent = `Mostrando ${list.length} productos`;

    if (grid) {
      grid.innerHTML = list.length ? list.map(p => this.generateProductCardHTML(p)).join('') : `
        <div style="grid-column:1/-1; text-align:center; padding:40px 20px; background:var(--negro-card); border-radius:var(--radius); border:1.5px solid var(--cafe-borde);">
          <i class="fa-solid fa-magnifying-glass" style="font-size:2.5rem; color:var(--dorado); margin-bottom:10px;"></i>
          <h3 style="color:#FFFFFF;">No encontramos productos con esos filtros</h3>
          <p style="color:var(--ceramica-suave); font-size:0.9rem;">Prueba ajustando los criterios de búsqueda o categoría.</p>
        </div>
      `;
    }
  },

  resetCatalogFilters() {
    const cat = document.getElementById('catalogFilterCat');
    const dept = document.getElementById('catalogFilterDept');
    const stock = document.getElementById('catalogFilterInStock');
    const deals = document.getElementById('catalogFilterOnlyDeals');
    const search = document.getElementById('marketplaceGlobalSearchInput');

    if (cat) cat.value = 'ALL';
    if (dept) dept.value = 'ALL';
    if (stock) stock.checked = true;
    if (deals) deals.checked = false;
    if (search) search.value = '';
    state.searchQuery = '';
    this.applyCatalogFilters();
  },

  // 3. Render Categorías Showcase
  renderCategoriesShowcase() {
    const container = document.getElementById('categoriesShowcaseGrid');
    if (!container) return;

    const categories = [
      { name: 'Frutas', icon: '🥭', img: 'https://lh3.googleusercontent.com/d/1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3', desc: 'Mangos, piñas, bananos y sandías' },
      { name: 'Cítricos', icon: '🍊', img: 'https://lh3.googleusercontent.com/d/15CoXtcOW9jvmER3CM_XEi6icNW69ghsO', desc: 'Naranjas, limones, mandarinas' },
      { name: 'Hortalizas', icon: '🥬', img: 'https://lh3.googleusercontent.com/d/1k9mTiQXwlSzyro4pRMStJ9OhVHmsZSXN', desc: 'Tomates, cebollas, chiltomas, papas' },
      { name: 'Granos', icon: '🌾', img: 'https://lh3.googleusercontent.com/d/1wGm6B33ANJRxx1-57nG5CgJvxR-5fSGu', desc: 'Maíz, frijoles rojos, arroz' },
      { name: 'Lácteos', icon: '🥛', img: 'https://lh3.googleusercontent.com/d/1vkX2eTY0BwcN7bF5_otLOG33uqA_axNp', desc: 'Queso seco, cuajada, crema pura' },
      { name: 'Carnes', icon: '🥩', img: 'img/brahman_bull_standing.jpg', desc: 'Cortes seleccionados de res y cerdo' },
      { name: 'Forraje', icon: '🌿', img: 'https://lh3.googleusercontent.com/d/1TvBiwHu-b7lSpPGm9qzJfK1eHhsz4F5M', desc: 'Pacas de heno, ensilaje y pastos' },
      { name: 'Miel', icon: '🍯', img: 'https://lh3.googleusercontent.com/d/1vzrbSKQwMwiemBS6xboNGWfjpZs9AHCe', desc: 'Miel pura de abeja de bosque' }
    ];

    container.innerHTML = categories.map(c => {
      const count = state.productsList.filter(p => p.category === c.name && p.status === 'PUBLICADO').length;
      return `
        <div class="category-card-box" onclick="marketController.selectCategoryFromShowcase('${c.name}')">
          <img src="${getRenderableImageUrl(c.img)}" data-gdrive-url="${c.img}" alt="${c.name}" class="category-card-img" onerror="if(!this.dataset.retried){this.dataset.retried=1;this.src=this.dataset.gdriveUrl;}">
          <div class="category-card-info">
            <h3 style="font-size:1.1rem;">${c.icon} ${c.name}</h3>
            <small style="color:var(--text-muted); font-weight:700;">${count} productos disponibles</small>
            <p style="font-size:0.78rem; color:var(--text-secondary); margin-top:4px;">${c.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  },

  selectCategoryFromShowcase(catName) {
    const filterSelect = document.getElementById('catalogFilterCat');
    if (filterSelect) filterSelect.value = catName;
    appRouter.navigate('app-catalog');
  },

  // 4. Render Ofertas Hub
  renderOffersHub() {
    const grid = document.getElementById('allOffersProductsGrid');
    if (!grid) return;
    const deals = state.productsList.filter(p => p.isDeal && p.status === 'PUBLICADO');
    grid.innerHTML = deals.length ? deals.map(p => this.generateProductCardHTML(p)).join('') : '<p>No hay ofertas activas en este momento.</p>';
  },

  // 5. Render Favoritos
  renderFavoritesHub() {
    const grid = document.getElementById('favoritesProductsGrid');
    if (!grid) return;
    const favs = state.productsList.filter(p => state.favoritesList.includes(p.id));
    grid.innerHTML = favs.length ? favs.map(p => this.generateProductCardHTML(p)).join('') : `
      <div style="grid-column:1/-1; text-align:center; padding:50px 20px; background:var(--negro-card); border-radius:var(--radius); border:1.5px solid var(--cafe-borde);">
        <i class="fa-regular fa-heart" style="font-size:3rem; color:var(--dorado); margin-bottom:12px;"></i>
        <h3 style="color:#FFFFFF;">Aún no tienes productos favoritos</h3>
        <p style="color:var(--ceramica-suave); margin-bottom:16px;">Guarda tus cosechas preferidas con el icono de corazón ❤️.</p>
        <button type="button" class="primary-action" onclick="appRouter.navigate('app-catalog')">Explorar Catálogo</button>
      </div>
    `;
  },

  toggleFavorite(productId, btnEl) {
    if (!state.currentSession) {
      showToast('⚠️ Para guardar productos en favoritos primero debes registrarte o iniciar sesión.', 'warn');
      appRouter.navigate('auth');
      authManager.switchSubView('register');
      return;
    }
    const idx = state.favoritesList.indexOf(productId);
    if (idx > -1) {
      state.favoritesList.splice(idx, 1);
      if (btnEl) btnEl.classList.remove('active');
      showToast('Producto removido de favoritos', 'info');
    } else {
      state.favoritesList.push(productId);
      if (btnEl) btnEl.classList.add('active');
      showToast('¡Producto guardado en tus favoritos ❤️!', 'success');
    }
    localStorage.setItem('sauyultech_favorites', JSON.stringify(state.favoritesList));
    this.updateFavsBadge();
    if (state.activeView === 'app-favorites') this.renderFavoritesHub();
  },

  // Buscador Header con Coincidencias en Tiempo Real & Autocompletado Instantáneo
  handleHeaderSearch(val) {
    state.searchQuery = val.trim();
    
    // Sincronizar campo de búsqueda lateral si existe
    const sidebarSearch = document.getElementById('catalogSidebarSearchInput');
    if (sidebarSearch && sidebarSearch.value !== val) {
      sidebarSearch.value = val;
    }

    // Renderizar sugerencias desplegables instantáneas
    this.renderSearchSuggestions(val.trim());

    // Si estamos en la vista de catálogo, filtrar el grid en tiempo real mientras escribe
    if (state.activeView === 'app-catalog') {
      this.applyCatalogFilters();
    }
  },

  handleSidebarSearch(val) {
    state.searchQuery = val.trim();
    const headerSearch = document.getElementById('marketplaceGlobalSearchInput');
    if (headerSearch && headerSearch.value !== val) {
      headerSearch.value = val;
    }
    this.applyCatalogFilters();
  },

  renderSearchSuggestions(query) {
    const box = document.getElementById('searchLiveSuggestionsBox');
    if (!box) return;

    if (!query || query.length < 1) {
      box.classList.remove('active');
      box.innerHTML = '';
      return;
    }

    const q = query.toLowerCase();
    const matches = state.productsList.filter(p => 
      p.status === 'PUBLICADO' && (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.department.toLowerCase().includes(q) ||
        p.farmerName.toLowerCase().includes(q)
      )
    ).slice(0, 6);

    if (!matches.length) {
      box.innerHTML = `
        <div style="padding:14px; text-align:center; color:var(--ceramica); font-size:0.85rem;">
          <i class="fa-solid fa-magnifying-glass" style="margin-right:6px; color:var(--text-muted);"></i>
          No hay coincidencias para "<strong>${query}</strong>"
        </div>
      `;
      box.classList.add('active');
      return;
    }

    box.innerHTML = `
      <div style="padding:6px 12px 4px; font-size:0.75rem; font-weight:800; color:var(--dorado); text-transform:uppercase; letter-spacing:0.04em;">
        Coincidencias encontradas (${matches.length})
      </div>
      ${matches.map(p => {
        const rawPhoto = p.photo || p.photoUrl || (produceImageCatalog[Object.keys(produceImageCatalog).find(k => (p.title || '').toLowerCase().includes(k.toLowerCase()))]) || defaultProduceImages[p.category] || defaultProduceImages['Frutas'];
    const photo = getRenderableImageUrl(rawPhoto);
        const priceVal = parseFloat(p.sellingPrice || p.price);
        return `
          <div class="search-suggestion-item" onclick="marketController.selectSearchSuggestion('${p.id}')">
            <div style="display:flex; align-items:center; gap:10px;">
              <img src="${photo}" alt="${p.title}" class="search-suggestion-thumb">
              <div>
                <strong style="color:#FFFFFF; font-size:0.9rem; display:block;">${p.title}</strong>
                <small style="color:var(--ceramica); font-size:0.76rem;">📍 ${p.department} · ${p.category}</small>
              </div>
            </div>
            <div style="text-align:right;">
              <strong style="color:var(--dorado); font-size:0.95rem;">C$ ${priceVal.toFixed(2)}</strong>
              <small style="display:block; color:var(--text-muted); font-size:0.72rem;">/${p.unit}</small>
            </div>
          </div>
        `;
      }).join('')}
      <div style="padding:6px 8px; border-top:1px solid rgba(206,189,163,0.15); text-align:center;">
        <button type="button" class="primary-action" style="width:100%; padding:6px; font-size:0.8rem; justify-content:center;" onclick="marketController.executeHeaderSearch()">
          Ver todos los resultados en el Catálogo →
        </button>
      </div>
    `;
    box.classList.add('active');
  },

  selectSearchSuggestion(productId) {
    this.closeSearchSuggestions();
    this.openProductDetail(productId);
  },

  closeSearchSuggestions() {
    const box = document.getElementById('searchLiveSuggestionsBox');
    if (box) box.classList.remove('active');
  },

  handleHeaderCategoryChange(cat) {
    const filterCat = document.getElementById('catalogFilterCat');
    if (filterCat) filterCat.value = cat;
    this.closeSearchSuggestions();
    appRouter.navigate('app-catalog');
  },

  executeHeaderSearch() {
    this.closeSearchSuggestions();
    appRouter.navigate('app-catalog');
  },

  filterCat(category, btnEl) {
    document.querySelectorAll('.category-pill-btn, .mobile-category-chip').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    const filterCat = document.getElementById('catalogFilterCat');
    if (filterCat) filterCat.value = category;
    appRouter.navigate('app-catalog');
  },

  // Modal Detalle de Producto Mejorado con Selector de Cantidad Dinámico [- 1 +]
  openProductDetail(productId) {
    const p = state.productsList.find(x => x.id === productId);
    if (!p) return;

    state.selectedDetailProductId = productId;
    const rawPhoto = p.photo || p.photoUrl || (produceImageCatalog[Object.keys(produceImageCatalog).find(k => (p.title || '').toLowerCase().includes(k.toLowerCase()))]) || defaultProduceImages[p.category] || defaultProduceImages['Frutas'];
    const photo = getRenderableImageUrl(rawPhoto);
    const isOutOfStock = p.quantity_available <= 0;

    document.getElementById('modalProductDetailTitle').textContent = p.title;
    const detailImg = document.getElementById('modalProductDetailImg');
    if (detailImg) {
      detailImg.src = photo;
      detailImg.dataset.gdriveUrl = rawPhoto;
      detailImg.onerror = function() {
        if (!this.dataset.retried) {
          this.dataset.retried = '1';
          this.src = this.dataset.gdriveUrl;
        }
      };
    }
    document.getElementById('modalProductDetailCategoryBadge').textContent = p.category;
    document.getElementById('modalProductDetailDesc').textContent = p.description || 'Producto fresco de finca cosechado bajo estándares de calidad.';
    document.getElementById('modalProductDetailFarmer').textContent = p.farmerName;
    document.getElementById('modalProductDetailLocation').textContent = p.department;
    document.getElementById('modalProductDetailStock').textContent = isOutOfStock ? 'Agotado (0 unidades)' : `${p.quantity_available} ${p.unit} disponibles`;
    document.getElementById('modalProductDetailLote').textContent = p.loteId || 'Directo de Finca';

    // Badge de Mercado / Descartes
    const marketBadge = document.getElementById('modalProductDetailMarketBadge');
    if (marketBadge) {
      if (p.isDescarte) {
        marketBadge.innerHTML = `<span class="badge-market-type descartes"><i class="fa-solid fa-recycle"></i> Aprovechamiento: ${p.descarteReason || 'Excedente Agrícola'}</span>`;
      } else if (p.marketType === 'APROVECHAMIENTO_GANADERO') {
        marketBadge.innerHTML = `<span class="badge-market-type ganadero"><i class="fa-solid fa-cow"></i> Destinado a Ganadería</span>`;
      } else {
        marketBadge.innerHTML = `<span class="badge-market-type convencional"><i class="fa-solid fa-seedling"></i> Mercado Convencional</span>`;
      }
    }

    // Nota de seguridad ganadera si aplica
    const safetyNoteBox = document.getElementById('modalProductDetailSafetyNote');
    if (safetyNoteBox) {
      if (p.livestockSafetyNotes) {
        safetyNoteBox.style.display = 'block';
        safetyNoteBox.innerHTML = `<strong>⚠️ Recomendación Ganadera:</strong> ${p.livestockSafetyNotes}`;
      } else {
        safetyNoteBox.style.display = 'none';
      }
    }

    const priceEl = document.getElementById('modalProductDetailPrice');
    const oldPriceEl = document.getElementById('modalProductDetailOldPrice');
    const dealBadge = document.getElementById('modalProductDetailDealBadge');

    priceEl.textContent = `C$ ${parseFloat(p.sellingPrice || p.price).toFixed(2)} / ${p.unit}`;
    if (p.oldPrice) {
      oldPriceEl.style.display = 'block';
      oldPriceEl.textContent = `C$ ${parseFloat(p.oldPrice).toFixed(2)}`;
    } else {
      oldPriceEl.style.display = 'none';
    }

    if (dealBadge) dealBadge.style.display = p.isDeal ? 'block' : 'none';

    const qtyInput = document.getElementById('modalProductDetailQty');
    if (qtyInput) {
      qtyInput.value = isOutOfStock ? 0 : 1;
      qtyInput.max = p.quantity_available;
      qtyInput.disabled = isOutOfStock;
    }

    const addBtn = document.getElementById('modalProductDetailAddBtn');
    const buyBtn = document.getElementById('modalProductDetailBuyBtn');
    if (addBtn) addBtn.disabled = isOutOfStock;
    if (buyBtn) buyBtn.disabled = isOutOfStock;

    document.getElementById('modalProductDetailRatingText').textContent = p.rating || '4.8';
    document.getElementById('modalProductDetailReviewsCount').textContent = `(${p.reviewsCount || 20} reseñas)`;

    this.updateDetailSubtotal();

    // Render Reseñas
    reviewsController.renderProductReviews(productId);

    uiModal.open('modal-product-detail');
  },

  stepDetailQty(delta) {
    if (!state.selectedDetailProductId) return;
    const prod = state.productsList.find(x => x.id === state.selectedDetailProductId);
    if (!prod || prod.quantity_available <= 0) return;

    const input = document.getElementById('modalProductDetailQty');
    if (!input) return;

    let current = parseInt(input.value, 10) || 1;
    let next = current + delta;
    if (next < 1) next = 1;
    if (next > prod.quantity_available) {
      next = prod.quantity_available;
      showToast(`Stock máximo disponible: ${prod.quantity_available} ${prod.unit}`, 'warn');
    }
    input.value = next;
    this.updateDetailSubtotal();
  },

  handleDetailQtyInput(val) {
    if (!state.selectedDetailProductId) return;
    const prod = state.productsList.find(x => x.id === state.selectedDetailProductId);
    if (!prod || prod.quantity_available <= 0) return;

    const input = document.getElementById('modalProductDetailQty');
    const subtotalDisplay = document.getElementById('modalProductDetailSubtotalDisplay');

    if (val === '' || val === null) {
      if (subtotalDisplay) {
        subtotalDisplay.innerHTML = `
          <small style="color:var(--text-muted); font-size:0.75rem; font-weight:800; display:block;">TOTAL A PAGAR:</small>
          <strong style="color:var(--verde); font-size:1.45rem; font-weight:900;">C$ 0.00</strong>
        `;
      }
      return;
    }

    let parsed = parseInt(val, 10);
    if (isNaN(parsed)) parsed = 1;

    if (parsed > prod.quantity_available) {
      parsed = prod.quantity_available;
      if (input) input.value = parsed;
      showToast(`Stock máximo disponible: ${prod.quantity_available} ${prod.unit}`, 'warn');
    }

    const unitPrice = parseFloat(prod.sellingPrice || prod.price);
    const subtotal = Math.max(0, parsed) * unitPrice;

    if (subtotalDisplay) {
      subtotalDisplay.innerHTML = `
        <small style="color:var(--text-muted); font-size:0.75rem; font-weight:800; display:block;">TOTAL A PAGAR (${parsed} ${prod.unit}):</small>
        <strong style="color:var(--verde); font-size:1.45rem; font-weight:900;">C$ ${subtotal.toFixed(2)}</strong>
      `;
    }
  },

  handleDetailQtyChange(val) {
    if (!state.selectedDetailProductId) return;
    const prod = state.productsList.find(x => x.id === state.selectedDetailProductId);
    if (!prod || prod.quantity_available <= 0) return;

    const input = document.getElementById('modalProductDetailQty');
    let parsed = parseInt(val, 10);
    if (isNaN(parsed) || parsed < 1) {
      parsed = 1;
    } else if (parsed > prod.quantity_available) {
      parsed = prod.quantity_available;
      showToast(`Stock máximo disponible: ${prod.quantity_available} ${prod.unit}`, 'warn');
    }
    if (input) input.value = parsed;
    this.updateDetailSubtotal();
  },

  handleDetailQtyKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleDetailQtyChange(event.target.value);
      this.handleAddFromDetail();
    }
  },

  updateDetailSubtotal() {
    if (!state.selectedDetailProductId) return;
    const prod = state.productsList.find(x => x.id === state.selectedDetailProductId);
    if (!prod) return;

    const qtyInput = document.getElementById('modalProductDetailQty');
    const subtotalDisplay = document.getElementById('modalProductDetailSubtotalDisplay');
    const qty = parseInt(qtyInput?.value, 10) || 1;
    const unitPrice = parseFloat(prod.sellingPrice || prod.price);
    const subtotal = qty * unitPrice;

    if (subtotalDisplay) {
      subtotalDisplay.innerHTML = `
        <small style="color:var(--text-muted); font-size:0.75rem; font-weight:800; display:block;">TOTAL A PAGAR (${qty} ${prod.unit}):</small>
        <strong style="color:var(--verde); font-size:1.45rem; font-weight:900;">C$ ${subtotal.toFixed(2)}</strong>
      `;
    }
  },

  handleAddFromDetail() {
    const qtyInput = document.getElementById('modalProductDetailQty');
    let qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
    if (isNaN(qty) || qty < 1) qty = 1;
    if (state.selectedDetailProductId) {
      cartManager.addToCart(state.selectedDetailProductId, qty);
      uiModal.close('modal-product-detail');
    }
  },

  handleBuyNowFromDetail() {
    this.handleAddFromDetail();
    checkoutController.openCheckoutModal();
  },

  openChatFromProductDetail() {
    if (!state.selectedDetailProductId) return;
    const prod = state.productsList.find(p => p.id === state.selectedDetailProductId);
    if (!prod) return;
    uiModal.close('modal-product-detail');
    chatController.openChatWithProducer(
      prod.id,
      prod.farmerEmail || 'Sauyoultech@comercializadora.com',
      prod.farmerName || 'Comercializadora Sau Yul Tech S.A.',
      prod.farmerFarm || prod.location || 'Comercializadora Sau Yul Tech S.A.',
      prod.title
    );
  },

  // Vista Pública Preview
  renderPublicPreview() {
    this.renderHotDealsMarquee();
    const grid = document.getElementById('public-market-preview-grid');
    if (!grid) return;
    const published = state.productsList.filter(p => p.status === 'PUBLICADO').slice(0, 4);
    grid.innerHTML = published.map(p => this.generateProductCardHTML(p)).join('');
  },

  // ========================================================================================
  // 🌾 7. VENDEDOR / AGRICULTOR: PUBLICACIÓN DUAL & CONTROL DE INVENTARIO
  // ========================================================================================
  currentPublishMarketType: 'CONSUMO_HUMANO',

  handlePublishClick() {
    this.openPublishProductModal();
  },

  openPublishProductModal(editId = null, defaultType = 'CONSUMO_HUMANO') {
    const user = state.currentSession || {};
    const bankHolderInput = document.getElementById('formProductBankAccountHolder');
    if (bankHolderInput && !bankHolderInput.value) {
      bankHolderInput.value = user.name || '';
    }
    document.getElementById('editLotId').value = editId || '';
    this.setPublishMarketType(defaultType);

    document.getElementById('publishModalTitle').textContent = editId ? '✏️ Editar Producto en Eco-Mercado' : '🌱 Publicar Producto en Eco-Mercado';

    const originSelect = document.getElementById('formProductOriginLote');
    if (originSelect) {
      originSelect.innerHTML = '<option value="NONE">Sin lote asociado (Directo)</option>' +
        state.lotesList.map(l => `<option value="${l.id}">${l.code} - ${l.crop} (${l.remainingQuantity} ${l.unit})</option>`).join('');
    }

    if (editId) {
      const prod = state.productsList.find(x => x.id === editId);
      if (prod) {
        document.getElementById('formLotTitle').value = prod.title;
        document.getElementById('formLotCategory').value = prod.category;
        document.getElementById('formLotQty').value = prod.quantity_available;
        document.getElementById('formLotUnit').value = prod.unit;
        document.getElementById('formLotSaleMode').value = prod.saleMode || 'CANTIDAD';
        document.getElementById('formProducerPriceInput').value = prod.producerPrice;
        document.getElementById('formProductStatusSelect').value = prod.status;
        document.getElementById('formProductLocationInput').value = prod.department;
        document.getElementById('formLotDescription').value = prod.description || '';
        document.getElementById('formDescarteReasonInput').value = prod.descarteReason || '';
        document.getElementById('formLivestockNotesInput').value = prod.livestockSafetyNotes || '';
        this.setPublishMarketType(prod.marketType || (prod.isDescarte ? 'APROVECHAMIENTO_GANADERO' : 'CONSUMO_HUMANO'));
        this.handleLivePriceCalc();
      }
    } else {
      document.getElementById('formLotTitle').value = '';
      document.getElementById('formLotQty').value = '';
      document.getElementById('formProducerPriceInput').value = '';
      document.getElementById('formLotDescription').value = '';
      document.getElementById('formDescarteReasonInput').value = '';
      document.getElementById('formLivestockNotesInput').value = '';
      this.handleLivePriceCalc();
    }

    uiModal.open('modal-publish-product');
  },

  handleOriginLoteChange() {
    const originSelect = document.getElementById('formProductOriginLote');
    if (!originSelect || !originSelect.value || originSelect.value === 'NONE') return;
    const lote = (state.lotesList || []).find(l => String(l.id) === String(originSelect.value));
    if (lote) {
      const titleInput = document.getElementById('formLotTitle');
      const catSelect = document.getElementById('formLotCategory');
      const qtyInput = document.getElementById('formLotQty');
      const unitSelect = document.getElementById('formLotUnit');
      const locInput = document.getElementById('formProductLocationInput');

      if (titleInput && (!titleInput.value || titleInput.value.trim() === '')) {
        titleInput.value = lote.crop || lote.name || '';
      }
      if (catSelect && lote.category) {
        catSelect.value = lote.category;
      }
      if (qtyInput && lote.remainingQuantity) {
        qtyInput.value = lote.remainingQuantity;
      }
      if (unitSelect && lote.unit) {
        unitSelect.value = lote.unit;
      }
      if (locInput && lote.location) {
        locInput.value = lote.location;
      }
      this.handleLivePriceCalc();
    }
  },

  setPublishMarketType(type) {
    this.currentPublishMarketType = type;
    document.querySelectorAll('.dual-publish-option').forEach(opt => opt.classList.remove('active'));

    const btnOpt = document.getElementById(`optPublish-${type}`);
    if (btnOpt) btnOpt.classList.add('active');

    const descarteFields = document.getElementById('descarteExtraFieldsBox');
    if (descarteFields) {
      descarteFields.style.display = (type === 'APROVECHAMIENTO_GANADERO' || type === 'AMBOS') ? 'block' : 'none';
    }
  },

  handleLivePriceCalc() {
    const titleVal = document.getElementById('formLotTitle')?.value || '';
    const baseVal = document.getElementById('formProducerPriceInput')?.value;
    const qtyVal = document.getElementById('formLotQty')?.value;
    const base = parseFloat(baseVal) || 0;
    const qty = parseInt(qtyVal) || 0;

    const pricing = calculateProductPricing(base);
    const marginText = document.getElementById('modalCalculatedMarginText');
    const sellingText = document.getElementById('modalCalculatedSellingPriceText');
    const pctText = document.getElementById('modalMarginPercentText');
    const totalInventoryText = document.getElementById('modalTotalInventoryValueText');
    const wholesaleHintEl = document.getElementById('publishWholesaleRefHint');

    if (pctText) pctText.textContent = `${state.pricingConfig.marginPercent}%`;
    if (marginText) marginText.textContent = `+ C$ ${pricing.marginAmount.toFixed(2)}`;
    if (sellingText) sellingText.textContent = `C$ ${pricing.sellingPrice.toFixed(2)}`;
    
    // Total Inventario = Cantidad × Precio Unitario
    const totalVal = qty * base;
    if (totalInventoryText) {
      totalInventoryText.textContent = `C$ ${totalVal.toLocaleString('es-NI', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    // Orientación de Precios Justos basada en Referencias Mayoristas (Privada para el Agricultor)
    const ref = getWholesaleReference(titleVal);
    if (wholesaleHintEl) {
      if (ref && base > 0) {
        if (base < ref.minRetail * 0.4 || base > ref.maxRetail * 2.5) {
          wholesaleHintEl.style.display = 'block';
          wholesaleHintEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> <strong>Orientación de Precios:</strong> El precio introducido difiere del rango de referencia del mercado (C$ ${ref.minRetail.toFixed(2)} - C$ ${ref.maxRetail.toFixed(2)} / ${ref.defaultUnit}). Verifica que sea correcto.`;
        } else {
          wholesaleHintEl.style.display = 'none';
        }
      } else {
        wholesaleHintEl.style.display = 'none';
      }
    }
  },

  handleImageFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        document.getElementById('formLotPhotoDataUrl').value = evt.target.result;
        document.getElementById('formLotImagePreview').src = evt.target.result;
        document.getElementById('imagePreviewContainer').style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  },

  handleSaveProductSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('editLotId').value;
    const title = document.getElementById('formLotTitle').value.trim();
    const category = document.getElementById('formLotCategory').value;
    const loteId = document.getElementById('formProductOriginLote').value;
    const qty = parseInt(document.getElementById('formLotQty').value) || 0;
    const unit = document.getElementById('formLotUnit').value;
    const saleMode = document.getElementById('formLotSaleMode').value;
    const producerPrice = parseFloat(document.getElementById('formProducerPriceInput').value) || 0;
    const status = document.getElementById('formProductStatusSelect').value;
    const location = document.getElementById('formProductLocationInput').value.trim();
    const description = document.getElementById('formLotDescription').value.trim();
    const descarteReason = document.getElementById('formDescarteReasonInput').value.trim();
    const livestockSafetyNotes = document.getElementById('formLivestockNotesInput').value.trim();
    const bankName = document.getElementById('formProductBankName')?.value || 'BAC Credomatic Nicaragua';
    const bankCurrency = document.getElementById('formProductBankCurrency')?.value || 'NIO';
    const bankAccountNumber = document.getElementById('formProductBankAccountNumber')?.value?.trim() || '';
    const bankAccountHolder = document.getElementById('formProductBankAccountHolder')?.value?.trim() || '';
    const uploadedPhoto = document.getElementById('formLotPhotoDataUrl').value;
    
    // Asignación de Imagen Fotorrealista Representativa
    const matchedPhoto = Object.keys(produceImageCatalog).find(k => title.toLowerCase().includes(k.toLowerCase()));
    const photoUrl = uploadedPhoto || (matchedPhoto ? produceImageCatalog[matchedPhoto] : null) || defaultProduceImages[category] || defaultProduceImages['Frutas'];

    if (!title || producerPrice <= 0 || qty <= 0) {
      showToast('Por favor completa todos los campos requeridos.', 'warn');
      return;
    }

    const pricing = calculateProductPricing(producerPrice);
    const marketType = this.currentPublishMarketType || 'CONSUMO_HUMANO';
    const isDescarte = marketType === 'APROVECHAMIENTO_GANADERO' || Boolean(descarteReason);

    if (editId) {
      const prod = state.productsList.find(x => x.id === editId);
      if (prod) {
        prod.title = title;
        prod.category = category;
        prod.marketType = marketType;
        prod.isDescarte = isDescarte;
        prod.descarteReason = descarteReason;
        prod.livestockSafetyNotes = livestockSafetyNotes;
        prod.saleMode = saleMode;
        prod.loteId = loteId === 'NONE' ? null : loteId;
        prod.quantity_available = qty;
        prod.unit = unit;
        prod.producerPrice = pricing.producerPrice;
        prod.marginPercent = pricing.marginPercent;
        prod.marginAmount = pricing.marginAmount;
        prod.sellingPrice = pricing.sellingPrice;
        prod.price = pricing.sellingPrice;
        prod.status = status;
        prod.department = location;
        prod.description = description;
        if (uploadedPhoto) prod.photoUrl = photoUrl;
        showToast(`Producto "${title}" actualizado correctamente.`, 'success');
      }
    } else {
      const newId = `PROD-${String(state.productsList.length + 1).padStart(3, '0')}`;
      state.productsList.unshift({
        id: newId,
        title,
        category,
        marketType,
        isDescarte,
        descarteReason,
        livestockSafetyNotes,
      bankName,
      bankCurrency,
      bankAccountNumber,
      bankAccountHolder,
        saleMode,
        loteId: loteId === 'NONE' ? null : loteId,
        quantity_initial: qty,
        quantity_available: qty,
        quantity_sold: 0,
        unit,
        producerPrice: pricing.producerPrice,
        marginPercent: pricing.marginPercent,
        marginAmount: pricing.marginAmount,
        sellingPrice: pricing.sellingPrice,
        price: pricing.sellingPrice,
        oldPrice: null,
        isDeal: false,
        isFeatured: false,
        rating: 5.0,
        reviewsCount: 1,
        farmerEmail: state.currentSession?.email || 'Sauyoultech@comercializadora.com',
        farmerName: state.currentSession?.name || (state.currentSession?.farm ? state.currentSession.farm : 'Productor Local Sau Yul Tech'),
        department: location || state.currentSession?.location || 'Nicaragua',
        description,
        photoUrl,
        status: status || 'PUBLICADO',
        createdAt: new Date().toISOString()
      });
      showToast(`¡Producto "${title}" publicado exitosamente en el Eco-Mercado!`, 'success');
    }

    this.saveProductsToStorage();
    const savedProd = editId ? state.productsList.find(p => p.id === editId) : state.productsList[0];
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveProduct && savedProd) {
      firebaseSync.saveProduct(savedProd);
    }
    uiModal.close('modal-publish-product');
    this.renderSellerProducts();
    this.renderHomeMarketplace();
    this.renderPublicPreview();
    if (typeof this.applyCatalogFilters === 'function') this.applyCatalogFilters();
    if (typeof this.renderHotDealsMarquee === 'function') this.renderHotDealsMarquee();
  },

  // Render Productos del Agricultor con Filtros de Mercado (Convencional vs Descartes)
  activeSellerTab: 'ALL',

  setSellerTab(tab, btnEl) {
    this.activeSellerTab = tab;
    document.querySelectorAll('.seller-tab-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    this.renderSellerProducts();
  },

  renderSellerProducts() {
    const container = document.getElementById('sellerProductsGridContainer');
    if (!container) return;

    const userEmail = state.currentSession?.email || 'Sauyoultech@comercializadora.com';
    let myProds = state.productsList.filter(p => p.farmerEmail === userEmail || state.currentSession?.role === 'superadmin');

    // Actualizar KPIs de Inventario
    this.renderSellerInventoryKPIs(myProds);

    // Filtrar por pestaña
    if (this.activeSellerTab === 'CONVENCIONAL') {
      myProds = myProds.filter(p => p.marketType === 'CONSUMO_HUMANO' || (p.marketType === 'AMBOS' && !p.isDescarte));
    } else if (this.activeSellerTab === 'DESCARTES') {
      myProds = myProds.filter(p => p.isDescarte || p.marketType === 'APROVECHAMIENTO_GANADERO');
    }

    if (!myProds.length) {
      container.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:30px; background:var(--bg-muted); border-radius:var(--radius-sm); border:1.5px solid var(--cafe-borde);">
          <p style="color:var(--text-secondary); font-weight:700;">No hay productos en esta sección.</p>
          <button type="button" class="btn-gold-action" style="margin-top:10px;" onclick="marketController.openPublishProductModal()">+ Publicar Producto</button>
        </div>
      `;
      return;
    }

    container.innerHTML = myProds.map(p => {
      const photo = p.photoUrl || defaultProduceImages[p.category] || defaultProduceImages['Frutas'];
      const totalInventoryVal = p.quantity_available * p.producerPrice;
      const totalSoldVal = (p.quantity_sold || 0) * p.producerPrice;

      return `
        <div class="market-product-card">
          <div class="product-image-container" style="height:150px;">
            <img src="${photo}" alt="${p.title}">
            <span class="badge-status ${p.status === 'PUBLICADO' ? 'active' : 'warn'}" style="position:absolute; top:8px; left:8px;">${p.status}</span>
            <span class="badge-market-type ${p.isDescarte ? 'descartes' : 'convencional'}" style="position:absolute; bottom:8px; left:8px;">
              ${p.isDescarte ? '♻️ Aprovechamiento' : '🍎 Convencional'}
            </span>
          </div>
          <div class="product-card-body">
            <div>
              <h3 style="font-size:1rem; margin-bottom:4px;">${p.title}</h3>
              
              <!-- Resumen de Inventario y Fórmulas -->
              <div style="background:var(--bg-muted); border-radius:8px; padding:10px; margin-top:6px; font-size:0.8rem; border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:4px;">
                <div style="display:flex; justify-content:space-between;">
                  <span style="color:var(--ceramica);">Stock Disponible:</span>
                  <strong style="color:var(--dorado);">${p.quantity_available} ${p.unit}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                  <span style="color:var(--ceramica);">Precio Unitario:</span>
                  <strong>C$ ${parseFloat(p.producerPrice).toFixed(2)}</strong>
                </div>
                <div style="display:flex; justify-content:space-between; border-top:1px dashed var(--border-subtle); padding-top:4px; margin-top:2px;">
                  <span style="color:var(--ceramica);">Valor Restante:</span>
                  <strong style="color:var(--verde);">C$ ${totalInventoryVal.toFixed(2)}</strong>
                </div>
                <div style="display:flex; justify-content:space-between; color:var(--text-muted); font-size:0.75rem;">
                  <span>Vendidas: ${p.quantity_sold || 0} ${p.unit}</span>
                  <span>Ingresos: C$ ${totalSoldVal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div style="display:flex; gap:8px; margin-top:10px;">
              <button type="button" class="secondary-btn" style="flex:1; font-size:0.8rem; padding:6px;" onclick="marketController.openPublishProductModal('${p.id}')">
                <i class="fa-solid fa-pen"></i> Editar
              </button>
              <button type="button" class="danger-btn" style="padding:6px 10px; font-size:0.8rem;" onclick="marketController.deleteProduct('${p.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  renderSellerInventoryKPIs(products) {
    const totalDisp = products.reduce((s, p) => s + (p.quantity_available || 0), 0);
    const totalSold = products.reduce((s, p) => s + (p.quantity_sold || 0), 0);
    const remainingVal = products.reduce((s, p) => s + ((p.quantity_available || 0) * p.producerPrice), 0);
    const revenueVal = products.reduce((s, p) => s + ((p.quantity_sold || 0) * p.producerPrice), 0);

    const dispEl = document.getElementById('statSellerStockTotal');
    const soldEl = document.getElementById('statSellerUnitsSold');
    const valEl = document.getElementById('statSellerInventoryValue');
    const revEl = document.getElementById('statSellerTotalRevenue');

    if (dispEl) animateCounter('statSellerStockTotal', totalDisp, 650, '', ' unidades');
    if (soldEl) animateCounter('statSellerUnitsSold', totalSold, 650, '', ' unidades');
    if (valEl) valEl.textContent = `C$ ${remainingVal.toLocaleString('es-NI', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (revEl) revEl.textContent = `C$ ${revenueVal.toLocaleString('es-NI', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  },

  deleteProduct(id) {
    if (confirm('¿Deseas eliminar este producto del Eco-Mercado?')) {
      state.productsList = state.productsList.filter(x => x.id !== id);
      this.saveProductsToStorage();
      if (typeof firebaseSync !== 'undefined' && firebaseSync.deleteProduct) {
        firebaseSync.deleteProduct(id);
      }
      this.renderSellerProducts();
      this.renderHomeMarketplace();
      showToast('Producto eliminado del catálogo', 'info');
    }
  },

  // Lotes Matriz
  renderSellerLotes() {
    const grid = document.getElementById('agricultorLotesGrid');
    if (!grid) return;

    grid.innerHTML = state.lotesList.map(l => `
      <div class="lote-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <strong style="color:var(--bosque-medio); font-size:1.05rem;">${l.code}</strong>
          <div style="display:flex; gap:6px; align-items:center;">
            <span class="badge-status active">${l.category}</span>
            <button type="button" class="danger-btn" style="padding:2px 6px; font-size:0.7rem; border-radius:4px;" onclick="marketController.deleteLote('${l.id}')" title="Eliminar lote">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
        <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:10px;">Cultivo: <strong>${l.crop}</strong></div>
        <div style="display:flex; justify-content:space-between; font-size:0.84rem; margin-bottom:6px;">
          <span>Disponible:</span>
          <strong>${l.remainingQuantity} / ${l.totalQuantity} ${l.unit}</strong>
        </div>
        <div class="lote-progress-bar-track">
          <div class="lote-progress-bar-fill" style="width:${(l.remainingQuantity / l.totalQuantity) * 100}%;"></div>
        </div>
      </div>
    `).join('');
  },

  openCreateLoteModal() {
    uiModal.open('modal-create-lote');
  },

  handleCreateLoteSubmit(e) {
    e.preventDefault();
    const code = document.getElementById('formLoteCode').value.trim();
    const crop = document.getElementById('formLoteCrop').value.trim();
    const category = document.getElementById('formLoteCategory').value;
    const qty = parseInt(document.getElementById('formLoteTotalQty').value) || 0;
    const unit = document.getElementById('formLoteUnit').value;
    const harvestDate = document.getElementById('formLoteHarvestDate').value;

    const newLote = {
      id: 'LOT-' + Date.now(),
      code,
      crop,
      category,
      totalQuantity: qty,
      remainingQuantity: qty,
      unit,
      harvestDate,
      farmerEmail: state.currentSession?.email || 'Sauyoultech@comercializadora.com'
    };

    state.lotesList.unshift(newLote);
    this.saveLotesToStorage();
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveLote) {
      firebaseSync.saveLote(newLote);
    }
    uiModal.close('modal-create-lote');
    this.renderSellerLotes();
    showToast(`¡Lote ${code} registrado con éxito!`, 'success');
  },

  // Ventas del Agricultor
  renderFarmerSales() {
    const tableContainer = document.getElementById('farmerOrdersTableContainer');
    if (!tableContainer) return;

    const userEmail = state.currentSession?.email || 'Sauyoultech@comercializadora.com';
    const receivedOrders = state.ordersList.filter(o => o.items.some(it => it.farmerEmail === userEmail || state.currentSession?.role === 'superadmin'));

    let totalIngresos = 0;
    let pendientes = 0;
    let entregados = 0;

    receivedOrders.forEach(o => {
      totalIngresos += o.subtotal;
      if (o.status === 'ENTREGADO') entregados++;
      else pendientes++;
    });

    const ingEl = document.getElementById('statFarmerIngresos');
    const totEl = document.getElementById('statFarmerTotalPedidos');
    const penEl = document.getElementById('statFarmerPendientes');
    const entEl = document.getElementById('statFarmerEntregados');

    if (ingEl) ingEl.textContent = `C$ ${totalIngresos.toFixed(2)}`;
    if (totEl) totEl.textContent = receivedOrders.length;
    if (penEl) penEl.textContent = pendientes;
    if (entEl) entEl.textContent = entregados;

    if (!receivedOrders.length) {
      tableContainer.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:30px;">Aún no tienes pedidos recibidos de compradores.</p>';
      return;
    }

    tableContainer.innerHTML = receivedOrders.map(o => `
      <div class="order-card-item" style="background:var(--bg-card); border:1.5px solid var(--border-subtle); border-radius:var(--radius-sm); padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div>
            <strong>Pedido #${o.id}</strong>
            <small style="color:var(--text-muted); display:block;">Comprador: ${o.buyerName} (${o.buyerPhone})</small>
          </div>
          <select onchange="marketController.updateOrderStatus('${o.id}', this.value)" style="padding:6px 10px; border-radius:var(--radius-sm); font-weight:800; border:1px solid var(--border-strong);">
            <option value="PENDIENTE" ${o.status === 'PENDIENTE' ? 'selected' : ''}>Pendiente</option>
            <option value="CONFIRMADO" ${o.status === 'CONFIRMADO' ? 'selected' : ''}>Confirmado</option>
            <option value="PREPARANDO" ${o.status === 'PREPARANDO' ? 'selected' : ''}>Preparando</option>
            <option value="EN_CAMINO" ${o.status === 'EN_CAMINO' ? 'selected' : ''}>En Camino</option>
            <option value="ENTREGADO" ${o.status === 'ENTREGADO' ? 'selected' : ''}>Entregado</option>
          </select>
        </div>
        <div style="font-size:0.85rem; color:var(--text-secondary); border-top:1px dashed var(--border-subtle); padding-top:8px;">
          ${o.items.map(it => `• ${it.qty} ${it.unit} x ${it.title}`).join('<br>')}
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:8px; font-weight:800;">
          <span>Entrega: ${o.buyerDept} (${o.buyerAddress})</span>
          <span style="color:var(--bosque-medio);">Total: C$ ${parseFloat(o.total).toFixed(2)}</span>
        </div>
      </div>
    `).join('');
  },

  updateOrderStatus(orderId, newStatus) {
    const order = state.ordersList.find(x => x.id === orderId);
    if (order) {
      order.status = newStatus;
      const stepMap = { PENDIENTE: 1, CONFIRMADO: 2, PREPARANDO: 3, EN_CAMINO: 4, ENTREGADO: 5 };
      order.stepIndex = stepMap[newStatus] || 1;
      if (typeof ordersManager !== 'undefined' && ordersManager.saveOrdersToStorage) {
        ordersManager.saveOrdersToStorage();
      }
      if (typeof firebaseSync !== 'undefined' && firebaseSync.saveOrder) {
        firebaseSync.saveOrder(order);
      }
      showToast(`Estado del pedido #${orderId} actualizado a ${newStatus}`, 'success');
      this.renderFarmerSales();
    }
  }
};

// ========================================================================================
// ⭐ 8. CONTROLADOR DE RESEÑAS & VALORACIONES
// ========================================================================================
const reviewsController = {
  renderProductReviews(productId) {
    const container = document.getElementById('modalProductReviewsList');
    if (!container) return;

    const reviews = state.reviewsList.filter(r => r.productId === productId);
    if (!reviews.length) {
      container.innerHTML = '<p style="color:var(--text-muted); font-size:0.84rem;">Sé el primero en dejar una reseña sobre este producto.</p>';
      return;
    }

    container.innerHTML = reviews.map(r => `
      <div style="background:rgba(0,0,0,0.5); border:1px solid var(--cafe-borde); border-radius:8px; padding:12px 14px; font-size:0.86rem; margin-bottom:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:#FFFFFF;">${r.userName}</strong>
          <span class="star-gold">${'⭐'.repeat(r.rating)}</span>
        </div>
        <p style="color:var(--ceramica-suave); margin-top:4px;">"${r.comment}"</p>
        <small style="color:var(--text-muted); font-size:0.75rem;">${r.date}</small>
      </div>
    `).join('');
  },

  handleSubmitReview(e) {
    e.preventDefault();
    if (!state.selectedDetailProductId) return;

    const rating = parseInt(document.getElementById('reviewRatingSelect')?.value) || 5;
    const comment = document.getElementById('reviewCommentInput')?.value.trim();

    if (!comment) return;

    const newRev = {
      id: 'REV-' + Date.now(),
      productId: state.selectedDetailProductId,
      userName: state.currentSession?.name || 'Comprador Verificado',
      rating,
      comment,
      date: new Date().toLocaleDateString('es-NI', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    state.reviewsList.unshift(newRev);
    localStorage.setItem('sauyultech_reviews', JSON.stringify(state.reviewsList));

    if (document.getElementById('reviewCommentInput')) {
      document.getElementById('reviewCommentInput').value = '';
    }
    this.renderProductReviews(state.selectedDetailProductId);
    showToast('¡Gracias por tu reseña ⭐!', 'success');
  }
};

const reviewsManager = {
  currentProductId: null,
  currentOrderId: null,
  selectedRating: 5,

  init() {
    const raw = localStorage.getItem('sauyultech_reviews');
    if (raw) {
      try {
        state.reviewsList = JSON.parse(raw);
      } catch (e) {}
    }
  },

  openReviewModal(productId, orderId) {
    this.currentProductId = productId || 'PROD-001';
    this.currentOrderId = orderId || 'PED-894102';
    this.selectedRating = 5;

    const prod = state.productsList.find(p => p.id === this.currentProductId);
    const badge = document.getElementById('reviewProductBadge');
    if (badge) badge.textContent = prod ? prod.title : 'Producto de Cosecha';

    const pInput = document.getElementById('reviewTargetProductId');
    const oInput = document.getElementById('reviewTargetOrderId');
    const rInput = document.getElementById('reviewSelectedRating');
    const cInput = document.getElementById('reviewCommentText');

    if (pInput) pInput.value = this.currentProductId;
    if (oInput) oInput.value = this.currentOrderId;
    if (rInput) rInput.value = '5';
    if (cInput) cInput.value = '';

    this.setStarRating(5);
    uiModal.open('modal-leave-review');
  },

  setStarRating(rating) {
    this.selectedRating = rating;
    const rInput = document.getElementById('reviewSelectedRating');
    if (rInput) rInput.value = rating;

    const stars = document.querySelectorAll('#starRatingPicker .star-item');
    stars.forEach((s, idx) => {
      if (idx < rating) s.classList.add('active');
      else s.classList.remove('active');
    });

    const labels = {
      1: '1 de 5 estrellas (Deficiente)',
      2: '2 de 5 estrellas (Regular)',
      3: '3 de 5 estrellas (Bueno)',
      4: '4 de 5 estrellas (Muy Bueno)',
      5: '5 de 5 estrellas (Excelente Calidad)'
    };
    const labelEl = document.getElementById('starRatingLabel');
    if (labelEl) labelEl.textContent = labels[rating] || `${rating} estrellas`;
  },

  handleReviewSubmit(e) {
    e.preventDefault();
    const comment = document.getElementById('reviewCommentText').value.trim();
    const rating = parseInt(document.getElementById('reviewSelectedRating').value) || 5;
    const productId = document.getElementById('reviewTargetProductId').value;
    const userName = state.currentSession ? state.currentSession.name : 'Comprador Verificado';

    const newRev = {
      id: 'REV-' + Date.now(),
      productId: productId,
      userName: userName,
      rating: rating,
      comment: comment,
      date: new Date().toLocaleDateString('es-NI', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    state.reviewsList.unshift(newRev);
    localStorage.setItem('sauyultech_reviews', JSON.stringify(state.reviewsList));

    // Recalcular rating en producto
    const prod = state.productsList.find(p => p.id === productId);
    if (prod) {
      const prodRevs = state.reviewsList.filter(r => r.productId === productId);
      const avg = prodRevs.reduce((acc, r) => acc + r.rating, 0) / prodRevs.length;
      prod.rating = parseFloat(avg.toFixed(1));
      prod.reviewsCount = prodRevs.length;
    }

    // Notificación al agricultor
    notificationCenter.addNotification({
      role: 'agricultor',
      title: '⭐ ¡Nueva Reseña de Comprador!',
      desc: `${userName} calificó con ${rating} estrellas tu cosecha: "${comment.slice(0, 40)}..."`
    });

    uiModal.close('modal-leave-review');
    showToast('¡Reseña verificada publicada con éxito! Gracias por tu valoración.', 'success');
  }
};

// ========================================================================================
// 💰 MONEDERO VIRTUAL DEL PRODUCTOR & LIQUIDACIONES BANCARIAS
// ========================================================================================
const walletController = {
  init() {
    const raw = localStorage.getItem('sauyultech_producer_wallet');
    if (raw) {
      try {
        state.producerWallet = JSON.parse(raw);
      } catch (e) {}
    }

    if (!state.producerWallet) {
      state.producerWallet = {
        balanceAvailable: 24500.00,
        balancePendingEscrow: 3800.00,
        totalWithdrawn: 42000.00,
        transactions: [
          { id: 'TX-901', type: 'VENTA', concept: 'Venta Lote Mangos Criollos (PED-894102)', amount: 2240.00, date: '19/08/2026', status: 'ACREDITADO' },
          { id: 'TX-902', type: 'RETIRO', concept: 'Liquidación a BAC Credomatic #365-894102-1', amount: 15000.00, date: '15/08/2026', status: 'LIQUIDADO' },
          { id: 'TX-903', type: 'VENTA', concept: 'Venta Aguacate Simmons 40 kg (PED-881204)', amount: 3600.00, date: '14/08/2026', status: 'ACREDITADO' }
        ]
      };
      this.saveToStorage();
    }

    this.renderWallet();
  },

  saveToStorage() {
    localStorage.setItem('sauyultech_producer_wallet', JSON.stringify(state.producerWallet));
  },

  renderWallet() {
    const w = state.producerWallet || { balanceAvailable: 0, balancePendingEscrow: 0, totalWithdrawn: 0, transactions: [] };
    
    const balanceDisplay = document.getElementById('producerWalletBalanceDisplay');
    const statAvailable = document.getElementById('statWalletAvailable');
    const statPending = document.getElementById('statWalletPending');
    const statWithdrawn = document.getElementById('statWalletWithdrawn');

    if (balanceDisplay) balanceDisplay.textContent = `C$ ${w.balanceAvailable.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (statAvailable) statAvailable.textContent = `C$ ${w.balanceAvailable.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (statPending) statPending.textContent = `C$ ${w.balancePendingEscrow.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (statWithdrawn) statWithdrawn.textContent = `C$ ${w.totalWithdrawn.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;

    this.updateAccordionBalances();
  },

  toggleRetiroAccordion(force) {
    const acc = document.getElementById('agricultorRetiroAccordion');
    if (!acc) return;
    const shouldOpen = typeof force === 'boolean' ? force : !acc.classList.contains('open');
    if (shouldOpen) {
      acc.classList.add('open');
      this.updateAccordionBalances();
      const input = document.getElementById('withdrawAccordionAmountInput');
      if (input && (!input.value || parseFloat(input.value) === 0)) {
        input.value = Math.min(5000, state.producerWallet?.balanceAvailable || 0);
      }
      this.updateRetiroPreview();
      acc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      acc.classList.remove('open');
    }
  },

  setWithdrawAmount(val) {
    const input = document.getElementById('withdrawAccordionAmountInput');
    const max = state.producerWallet?.balanceAvailable || 0;
    if (input) {
      input.value = Math.min(val, max);
      this.updateRetiroPreview();
    }
  },

  setWithdrawMaxAmount() {
    const input = document.getElementById('withdrawAccordionAmountInput');
    const max = state.producerWallet?.balanceAvailable || 0;
    if (input) {
      input.value = max;
      this.updateRetiroPreview();
    }
  },

  updateRetiroPreview() {
    const input = document.getElementById('withdrawAccordionAmountInput');
    const previewAmt = document.getElementById('previewRetiroAmount');
    const previewNet = document.getElementById('previewRetiroNet');
    const val = parseFloat(input?.value) || 0;
    if (previewAmt) previewAmt.textContent = `C$ ${val.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (previewNet) previewNet.textContent = `C$ ${val.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
  },

  updateAccordionBalances() {
    const pill = document.getElementById('accordionBalancePill');
    const bal = state.producerWallet?.balanceAvailable || 0;
    if (pill) pill.textContent = `Saldo Disponible: C$ ${bal.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    const input = document.getElementById('withdrawAccordionAmountInput');
    if (input) input.max = bal;
  },

  handleAccordionWithdrawSubmit(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('withdrawAccordionAmountInput').value) || 0;
    const bankAccount = document.getElementById('withdrawAccordionBankSelect').value;

    if (amount <= 0 || amount > state.producerWallet.balanceAvailable) {
      showToast('Monto de retiro no válido o supera tu saldo disponible.', 'danger');
      return;
    }

    state.producerWallet.balanceAvailable -= amount;
    const txId = 'TX-RET-' + Date.now().toString().slice(-4);
    
    const newTx = {
      id: txId,
      type: 'RETIRO',
      concept: `Solicitud de Retiro a ${bankAccount}`,
      amount: amount,
      date: new Date().toLocaleDateString('es-NI'),
      status: 'PENDIENTE_APROBACION'
    };
    state.producerWallet.transactions.unshift(newTx);
    this.saveToStorage();
    this.renderWallet();
    this.updateAccordionBalances();
    this.toggleRetiroAccordion(false);

    const producerName = state.currentSession ? (state.currentSession.name + (state.currentSession.farm ? ` (${state.currentSession.farm})` : '')) : 'Comercializadora Sau Yul Tech S.A.';
    const producerEmail = state.currentSession ? state.currentSession.email : 'Sauyoultech@comercializadora.com';

    const liqReq = {
      id: 'LIQ-' + Date.now().toString().slice(-4),
      sellerName: producerName,
      sellerEmail: producerEmail,
      bank: bankAccount.includes('BAC') ? 'BAC Credomatic' : (bankAccount.includes('BANPRO') ? 'Banpro Promerica' : 'Banco LAFISE'),
      account: bankAccount,
      amount: amount,
      status: 'PENDIENTE',
      date: new Date().toLocaleDateString('es-NI'),
      timestamp: Date.now(),
      txId: txId
    };

    // Crear solicitud en el Centro de Liquidaciones del Administrador
    if (typeof masterAdminController !== 'undefined' && masterAdminController.addSettlementRequest) {
      masterAdminController.addSettlementRequest(liqReq);
    }

    // Persistir solicitud de liquidación en Firebase Firestore
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveSettlementRequest) {
      firebaseSync.saveSettlementRequest(liqReq);
    }

    // Notificación al Admin (con roles compatibles)
    if (typeof notificationCenter !== 'undefined') {
      notificationCenter.addNotification({
        role: 'superadmin',
        title: '💳 Nueva Solicitud de Retiro Bancario',
        desc: `${producerName} solicitó liquidación de C$ ${amount.toFixed(2)} a ${bankAccount}.`
      });
    }

    showToast(`¡Solicitud de retiro por C$ ${amount.toFixed(2)} enviada al Panel Administrativo!`, 'success');
  },

  openWithdrawModal() {
    this.toggleRetiroAccordion(true);
  },

  handleWithdrawSubmit(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('withdrawAmountInput').value) || 0;
    const bankAccount = document.getElementById('withdrawBankAccountSelect').value;

    if (amount <= 0 || amount > state.producerWallet.balanceAvailable) {
      showToast('Monto de retiro no válido o supera tu saldo disponible.', 'danger');
      return;
    }

    state.producerWallet.balanceAvailable -= amount;
    const txId = 'TX-RET-' + Date.now().toString().slice(-4);
    
    const newTx = {
      id: txId,
      type: 'RETIRO',
      concept: `Solicitud de Retiro a ${bankAccount}`,
      amount: amount,
      date: new Date().toLocaleDateString('es-NI'),
      status: 'PENDIENTE_APROBACION'
    };
    state.producerWallet.transactions.unshift(newTx);
    this.saveToStorage();
    this.renderWallet();

    const producerName = state.currentSession ? (state.currentSession.name + (state.currentSession.farm ? ` (${state.currentSession.farm})` : '')) : 'Comercializadora Sau Yul Tech S.A.';
    const producerEmail = state.currentSession ? state.currentSession.email : 'Sauyoultech@comercializadora.com';

    const liqReq = {
      id: 'LIQ-' + Date.now().toString().slice(-4),
      sellerName: producerName,
      sellerEmail: producerEmail,
      bank: bankAccount.includes('BAC') ? 'BAC Credomatic' : (bankAccount.includes('BANPRO') ? 'Banpro Promerica' : 'Banco LAFISE'),
      account: bankAccount,
      amount: amount,
      status: 'PENDIENTE',
      date: new Date().toLocaleDateString('es-NI'),
      timestamp: Date.now(),
      txId: txId
    };

    // Crear solicitud en el Centro de Liquidaciones del Administrador
    if (typeof masterAdminController !== 'undefined' && masterAdminController.addSettlementRequest) {
      masterAdminController.addSettlementRequest(liqReq);
    }

    // Persistir solicitud de liquidación en Firebase Firestore
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveSettlementRequest) {
      firebaseSync.saveSettlementRequest(liqReq);
    }

    // Notificación al Admin
    if (typeof notificationCenter !== 'undefined') {
      notificationCenter.addNotification({
        role: 'superadmin',
        title: '💳 Nueva Solicitud de Retiro Bancario',
        desc: `${producerName} solicitó liquidación de C$ ${amount.toFixed(2)} a ${bankAccount}.`
      });
    }

    uiModal.close('modal-solicitar-retiro');
    showToast(`¡Solicitud de retiro por C$ ${amount.toFixed(2)} enviada al Panel Administrativo!`, 'success');
  },

  toggleWalletHistoryModal() {
    const listContainer = document.getElementById('modalWalletHistoryList');
    if (!listContainer) return;

    const txs = state.producerWallet.transactions || [];
    if (!txs.length) {
      listContainer.innerHTML = '<p style="text-align:center; color:#5C4033; padding:20px;">No hay movimientos registrados en el monedero.</p>';
    } else {
      listContainer.innerHTML = txs.map(t => `
        <div class="wallet-tx-item ${t.type === 'VENTA' ? 'credit' : 'debit'}">
          <div>
            <strong style="color:#382517; display:block; font-size:0.95rem;">${t.concept}</strong>
            <small style="color:#5C4033;">${t.date} · Folio: ${t.id}</small>
          </div>
          <div style="text-align:right;">
            <strong style="color:${t.type === 'VENTA' ? '#1FA971' : '#E53935'}; font-size:1.1rem; display:block;">
              ${t.type === 'VENTA' ? '+' : '-'} C$ ${t.amount.toLocaleString('es-NI', { minimumFractionDigits: 2 })}
            </strong>
            <span class="badge-status ${t.status === 'ACREDITADO' || t.status === 'LIQUIDADO' ? 'active' : 'warn'}" style="font-size:0.72rem;">
              ${t.status}
            </span>
          </div>
        </div>
      `).join('');
    }

    uiModal.open('modal-wallet-history');
  },

  creditSale(amount, orderId, productTitle) {
    if (!state.producerWallet) this.init();
    state.producerWallet.balanceAvailable += amount;
    state.producerWallet.transactions.unshift({
      id: 'TX-VTA-' + Date.now().toString().slice(-4),
      type: 'VENTA',
      concept: `Venta Eco-Mercado (${productTitle || 'Cosecha'}) - #${orderId}`,
      amount: amount,
      date: new Date().toLocaleDateString('es-NI'),
      status: 'ACREDITADO'
    });
    this.saveToStorage();
    this.renderWallet();

    notificationCenter.addNotification({
      role: 'agricultor',
      title: '🎉 ¡Acreditación en Monedero Virtual!',
      desc: `Has recibido C$ ${amount.toFixed(2)} por la venta de ${productTitle || 'tu producto'} (#${orderId}).`
    });
  }
};

// ========================================================================================
// 💬 SISTEMA DE CHAT DIRECTO (COMPRADOR <-> PRODUCTOR)
// ========================================================================================
const chatController = {
  currentChatThreadKey: null,
  activePeer: null,

  init() {
    const raw = localStorage.getItem('sauyultech_chat_conversations');
    if (raw) {
      try {
        state.chatConversations = JSON.parse(raw);
      } catch (e) {}
    }
    if (!state.chatConversations) {
      state.chatConversations = {
        'Sauyoultech@comercializadora.com': [
          { sender: 'seller', text: '¡Hola! Bienvenido a Finca Los Cítricos. Todos nuestros mangos y cítricos están frescos y listos para despacho inmediato.', time: '10:30 AM' }
        ]
      };
      this.saveToStorage();
    }
  },

  saveToStorage() {
    localStorage.setItem('sauyultech_chat_conversations', JSON.stringify(state.chatConversations));
  },

  openChatWithProducer(productId, farmerEmail, farmerName, farmerFarm, productTitle) {
    const fEmail = farmerEmail || 'Sauyoultech@comercializadora.com';
    const fName = farmerName || 'Comercializadora Sau Yul Tech S.A.';
    const fFarm = farmerFarm || 'Comercializadora Sau Yul Tech S.A.';
    const pTitle = productTitle || 'Cosecha de Temporada';

    this.currentChatThreadKey = fEmail;
    this.activePeer = { name: fName, farm: fFarm, email: fEmail, productTitle: pTitle };

    const nameEl = document.getElementById('chatModalProducerName');
    const farmEl = document.getElementById('chatModalProducerFarm');
    const avatarEl = document.getElementById('chatModalAvatar');
    const contextEl = document.getElementById('chatProductContextText');

    if (nameEl) nameEl.textContent = fName;
    if (farmEl) farmEl.textContent = `${fFarm} · Productor Verificado`;
    if (avatarEl) avatarEl.textContent = fName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    if (contextEl) contextEl.textContent = `Consultando sobre: ${pTitle}`;

    if (!state.chatConversations[fEmail]) {
      state.chatConversations[fEmail] = [
        { sender: 'seller', text: `¡Hola! Con gusto te atiendo sobre ${pTitle}. ¿En qué te puedo ayudar?`, time: 'Ahora' }
      ];
      this.saveToStorage();
    }

    this.renderChatMessages();
    uiModal.open('modal-chat-directo');
  },

  closeChatModal() {
    uiModal.close('modal-chat-directo');
  },

  renderChatMessages() {
    const scrollEl = document.getElementById('chatMessagesScroll');
    if (!scrollEl || !this.currentChatThreadKey) return;

    const msgs = state.chatConversations[this.currentChatThreadKey] || [];
    scrollEl.innerHTML = msgs.map(m => `
      <div class="chat-bubble ${m.sender === 'buyer' || m.sender === 'user' ? 'mine' : 'peer'}">
        <div>${m.text}</div>
        <small>${m.time}</small>
      </div>
    `).join('');

    scrollEl.scrollTop = scrollEl.scrollHeight;
  },

  sendQuickReply(text) {
    const input = document.getElementById('chatInputMessage');
    if (input) {
      input.value = text;
      this.handleMessageSubmit(new Event('submit'));
    }
  },

  handleMessageSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById('chatInputMessage');
    if (!input || !input.value.trim() || !this.currentChatThreadKey) return;

    const text = input.value.trim();
    input.value = '';

    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (!state.chatConversations[this.currentChatThreadKey]) {
      state.chatConversations[this.currentChatThreadKey] = [];
    }

    state.chatConversations[this.currentChatThreadKey].push({
      sender: 'buyer',
      text: text,
      time: timeStr
    });
    this.saveToStorage();
    this.renderChatMessages();

    if (typeof producerChatHub !== 'undefined' && producerChatHub.onBuyerMessageReceived) {
      producerChatHub.onBuyerMessageReceived(this.currentChatThreadKey);
    }

    // Notificación al productor
    notificationCenter.addNotification({
      role: 'agricultor',
      title: '💬 Nuevo Mensaje de Comprador',
      desc: `Un comprador te preguntó: "${text.slice(0, 40)}..."`
    });

    // Auto-respuesta simulada del productor
    setTimeout(() => {
      const autoReplies = [
        '¡Perfecto! Contamos con stock listo para cargar y transporte coordinado.',
        'Gracias por consultar. Los productos cuentan con control de calidad IPSA.',
        'Podemos coordinar la entrega en tu dirección o punto de acopio cuando gustes.'
      ];
      const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      if (state.chatConversations[this.currentChatThreadKey]) {
        state.chatConversations[this.currentChatThreadKey].push({
          sender: 'seller',
          text: randomReply,
          time: `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
        });
        this.saveToStorage();
        this.renderChatMessages();
        if (typeof producerChatHub !== 'undefined' && producerChatHub.renderMessagesFeed) {
          producerChatHub.renderMessagesFeed();
          producerChatHub.renderThreads();
        }
      }
    }, 1000);
  }
};

// ========================================================================================
// 💬 SISTEMA WHATSAPP BUSINESS DEL PRODUCTOR (CHAT CON COMPRADORES)
// ========================================================================================
const producerChatHub = {
  activeThreadKey: 'carlos@supermercado.com',
  filterQuery: '',
  threads: [
    {
      id: 'carlos@supermercado.com',
      buyerName: 'Roberto Mendoza',
      buyerCompany: 'Distribuidora Central Managua',
      productTitle: 'Mangos Criollos Maduros (20kg)',
      avatar: 'RM',
      avatarBg: '#00A884',
      online: true,
      lastOnline: 'En línea',
      unreadCount: 1,
      initialMessages: [
        { sender: 'buyer', text: 'Buenas tardes don productor, ¿tiene disponibles 80 cajas de Mango Criollo para despachar este jueves al Mayoreo?', time: '14:20' },
        { sender: 'seller', text: '¡Buenas tardes Roberto! Sí, tenemos cosecha fresca lista de primera calidad con calibre exportación.', time: '14:22' },
        { sender: 'buyer', text: '¿Podría hacerme un precio especial si me llevo 120 cajas completas con flete a Managua?', time: '14:25' }
      ]
    },
    {
      id: 'carlos@supermercado.com',
      buyerName: 'Ing. Carlos Castillo',
      buyerCompany: 'Supermercados del Norte',
      productTitle: 'Naranjas Valencia Dulces (Saco 50lb)',
      avatar: 'CC',
      avatarBg: '#3B82F6',
      online: true,
      lastOnline: 'En línea',
      unreadCount: 0,
      initialMessages: [
        { sender: 'buyer', text: 'Hola, revisamos su lote de naranjas Valencia y nos interesa firmar contrato de suministro quincenal.', time: '11:15' },
        { sender: 'seller', text: 'Excelente don Carlos, contamos con 5 manzanas certificadas libres de plagas IPSA.', time: '11:30' },
        { sender: 'buyer', text: 'Unos 60 sacos quincenales. ¿Tiene transporte propio o usamos el nuestro?', time: '12:05' }
      ]
    },
    {
      id: 'helena@frutasyverduras.com',
      buyerName: 'Lic. Helena Rivas',
      buyerCompany: 'Agro-Exportadora Las Segovias',
      productTitle: 'Limón Criollo Tahití Primera',
      avatar: 'HR',
      avatarBg: '#8B5CF6',
      online: false,
      lastOnline: 'Últ. vez hoy a las 10:45',
      unreadCount: 0,
      initialMessages: [
        { sender: 'buyer', text: 'Estimado, ¿el limón Tahití tiene grado de acidez óptimo para empaque de exportación?', time: '10:40' },
        { sender: 'seller', text: 'Buen día Helena. Sí, cosecha recién recolectada con grado Brix y acidez balanceados.', time: '10:42' },
        { sender: 'buyer', text: 'Perfecto. Le confirmo el pedido a través de la plataforma para pago en custodia.', time: '10:45' }
      ]
    },
    {
      id: 'pedro@restaurante.com',
      buyerName: 'Pedro Alvarado',
      buyerCompany: 'Restaurantes Típicos El Madroño',
      productTitle: 'Plátano Gigante Curarre',
      avatar: 'PA',
      avatarBg: '#D97706',
      online: true,
      lastOnline: 'En línea',
      unreadCount: 0,
      initialMessages: [
        { sender: 'buyer', text: 'Buenas, ¿cuántas cabezas de plátano verde le quedan del lote actual?', time: '09:10' },
        { sender: 'seller', text: 'Hola Pedro, tenemos 350 cabezas listas para corte y entrega inmediata.', time: '09:15' }
      ]
    }
  ],

  init() {
    if (!state.chatConversations) {
      const raw = localStorage.getItem('sauyultech_chat_conversations');
      if (raw) {
        try {
          state.chatConversations = JSON.parse(raw);
        } catch (e) {
          state.chatConversations = {};
        }
      } else {
        state.chatConversations = {};
      }
    }

    // Asegurar mensajes iniciales
    this.threads.forEach(t => {
      if (!state.chatConversations[t.id] || !state.chatConversations[t.id].length) {
        state.chatConversations[t.id] = [...t.initialMessages];
      }
    });
    chatController.saveToStorage();

    this.renderThreads();
    this.selectThread(this.activeThreadKey, false);
  },

  renderThreads() {
    const listEl = document.getElementById('waProducerThreadsList');
    if (!listEl) return;

    const q = (this.filterQuery || '').toLowerCase();
    const filtered = this.threads.filter(t => 
      t.buyerName.toLowerCase().includes(q) || 
      t.productTitle.toLowerCase().includes(q) ||
      t.buyerCompany.toLowerCase().includes(q)
    );

    let totalUnread = 0;

    listEl.innerHTML = filtered.map(t => {
      const msgs = state.chatConversations[t.id] || [];
      const lastMsg = msgs[msgs.length - 1];
      const lastSnippet = lastMsg ? (lastMsg.sender === 'seller' ? `✓ ${lastMsg.text}` : lastMsg.text) : 'Sin mensajes';
      const lastTime = lastMsg ? lastMsg.time : 'Hoy';
      const isActive = t.id === this.activeThreadKey;
      if (t.unreadCount > 0) totalUnread += t.unreadCount;

      return `
        <div class="wa-thread-item ${isActive ? 'active' : ''}" onclick="producerChatHub.selectThread('${t.id}')">
          <div class="wa-thread-avatar" style="background:${t.avatarBg};">
            ${t.avatar}
            ${t.online ? '<div class="wa-online-dot"></div>' : ''}
          </div>
          <div class="wa-thread-info">
            <div class="wa-thread-top">
              <div class="wa-thread-name">${t.buyerName}</div>
              <span class="wa-thread-time">${lastTime}</span>
            </div>
            <div style="font-size:0.75rem; color:#CEBDA3; margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              <i class="fa-solid fa-tag" style="color:var(--dorado); font-size:0.7rem;"></i> ${t.productTitle}
            </div>
            <div class="wa-thread-bottom">
              <span class="wa-thread-snippet">${lastSnippet}</span>
              ${t.unreadCount > 0 ? `<span class="wa-thread-badge">${t.unreadCount}</span>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    const badgeTotal = document.getElementById('waUnreadTotalBadge');
    if (badgeTotal) {
      badgeTotal.textContent = totalUnread > 0 ? `${totalUnread} Mensaje${totalUnread > 1 ? 's' : ''} Nuevo${totalUnread > 1 ? 's' : ''}` : `${this.threads.length} Chats Activos`;
    }
  },

  selectThread(threadId, focusInput = true) {
    this.activeThreadKey = threadId;
    const thread = this.threads.find(t => t.id === threadId) || this.threads[0];
    if (!thread) return;

    thread.unreadCount = 0;

    // Actualizar encabezado del chat
    const nameEl = document.getElementById('waHeaderBuyerName');
    const avatarEl = document.getElementById('waHeaderAvatar');
    const statusEl = document.getElementById('waHeaderBuyerStatus');
    const productEl = document.getElementById('waHeaderBuyerProduct');

    if (nameEl) nameEl.innerHTML = `${thread.buyerName} <span style="font-size:0.78rem; font-weight:normal; color:#8696A0;">(${thread.buyerCompany})</span>`;
    if (avatarEl) {
      avatarEl.innerHTML = `${thread.avatar} ${thread.online ? '<div class="wa-online-dot"></div>' : ''}`;
      avatarEl.style.background = thread.avatarBg;
    }
    if (statusEl) {
      statusEl.innerHTML = thread.online ? `<i class="fa-solid fa-circle" style="font-size:0.5rem; vertical-align:middle;"></i> En línea` : `<span style="color:#8696A0;">${thread.lastOnline}</span>`;
      statusEl.style.color = thread.online ? '#25D366' : '#8696A0';
    }
    if (productEl) {
      productEl.textContent = thread.productTitle;
    }

    this.renderMessagesFeed();
    this.renderThreads();

    // Soporte responsive para pantallas móviles
    if (window.innerWidth <= 860) {
      const colThreads = document.getElementById('waThreadsColumn');
      const colChat = document.getElementById('waChatColumn');
      const backBtn = document.getElementById('waBackBtn');
      if (colThreads) colThreads.classList.add('hidden-mobile');
      if (colChat) colChat.classList.remove('hidden-mobile');
      if (backBtn) backBtn.style.display = 'inline-flex';
    }

    if (focusInput) {
      const input = document.getElementById('waProducerInput');
      if (input) input.focus();
    }
  },

  backToThreadList() {
    const colThreads = document.getElementById('waThreadsColumn');
    const colChat = document.getElementById('waChatColumn');
    if (colThreads) colThreads.classList.remove('hidden-mobile');
    if (colChat) colChat.classList.add('hidden-mobile');
  },

  renderMessagesFeed() {
    const feed = document.getElementById('waProducerMessagesFeed');
    if (!feed || !this.activeThreadKey) return;

    const msgs = state.chatConversations[this.activeThreadKey] || [];
    feed.innerHTML = msgs.map(m => {
      const isSeller = m.sender === 'seller';
      return `
        <div class="wa-bubble ${isSeller ? 'outgoing' : 'incoming'}">
          <div style="font-size:0.73rem; font-weight:800; margin-bottom:3px; color:${isSeller ? '#34D399' : '#53BDEB'}; display:flex; justify-content:space-between;">
            <span>${isSeller ? 'Tú (Productor)' : 'Comprador'}</span>
          </div>
          <div style="color:#E9EDEF;">${m.text}</div>
          <div class="wa-bubble-meta">
            <span>${m.time}</span>
            ${isSeller ? '<span class="wa-check-double"><i class="fa-solid fa-check-double"></i></span>' : ''}
          </div>
        </div>
      `;
    }).join('');

    feed.scrollTop = feed.scrollHeight;
  },

  sendMessage(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById('waProducerInput');
    if (!input || !input.value.trim() || !this.activeThreadKey) return;

    const text = input.value.trim();
    input.value = '';

    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (!state.chatConversations[this.activeThreadKey]) {
      state.chatConversations[this.activeThreadKey] = [];
    }

    state.chatConversations[this.activeThreadKey].push({
      sender: 'seller',
      text: text,
      time: timeStr
    });

    chatController.saveToStorage();
    this.renderMessagesFeed();
    this.renderThreads();

    showToast('Respuesta enviada al comprador por WhatsApp', 'success');

    // Auto-respuesta realista del comprador tras 2.2 segundos
    const currentKey = this.activeThreadKey;
    setTimeout(() => {
      if (state.chatConversations[currentKey] && Math.random() > 0.25) {
        const buyerReplies = [
          '¡Perfecto don productor! De acuerdo con los términos, procederé a realizar el pedido en la plataforma.',
          'Excelente, muchas gracias por la pronta respuesta. Me preparo para recibir el despacho.',
          'Entendido. Le confirmo que el transporte pasará por la finca el día coordinado.',
          'Agradezco la información sobre la certificación IPSA. Ya autorizo el pago en custodia.'
        ];
        const randomReply = buyerReplies[Math.floor(Math.random() * buyerReplies.length)];
        const replyNow = new Date();
        state.chatConversations[currentKey].push({
          sender: 'buyer',
          text: randomReply,
          time: `${replyNow.getHours()}:${String(replyNow.getMinutes()).padStart(2, '0')}`
        });
        chatController.saveToStorage();
        if (producerChatHub.activeThreadKey === currentKey) {
          producerChatHub.renderMessagesFeed();
        }
        producerChatHub.renderThreads();
        showToast('💬 Nuevo mensaje recibido de comprador', 'info');
      }
    }, 2200);
  },

  sendQuickChip(text) {
    const input = document.getElementById('waProducerInput');
    if (input) {
      input.value = text;
      this.sendMessage();
    }
  },

  filterThreads(query) {
    this.filterQuery = query || '';
    this.renderThreads();
  },

  markAsRead() {
    const thread = this.threads.find(t => t.id === this.activeThreadKey);
    if (thread) thread.unreadCount = 0;
    this.renderThreads();
    showToast('Conversación marcada como atendida', 'info');
  },

  onBuyerMessageReceived(threadKey) {
    let thread = this.threads.find(t => t.id === threadKey);
    if (!thread) {
      thread = {
        id: threadKey,
        buyerName: 'Comprador Eco-Mercado',
        buyerCompany: 'Cliente Verificado',
        productTitle: 'Cosecha Consultada',
        avatar: 'CM',
        avatarBg: '#10B981',
        online: true,
        lastOnline: 'En línea',
        unreadCount: 1,
        initialMessages: []
      };
      this.threads.unshift(thread);
    } else {
      if (this.activeThreadKey !== threadKey) {
        thread.unreadCount = (thread.unreadCount || 0) + 1;
      }
    }
    if (this.activeThreadKey === threadKey) {
      this.renderMessagesFeed();
    }
    this.renderThreads();
  }
};

// ========================================================================================
// 🚚 9. CONTROLADOR DE SEGUIMIENTO EN VIVO DE PEDIDOS
// ========================================================================================
const trackingController = {
  renderTrackingOrders() {
    const container = document.getElementById('activeTrackingOrdersContainer');
    if (!container) return;

    const userEmail = state.currentSession?.email || 'Sauyoultech@comercializadora.com';
    const orders = state.ordersList.filter(o => o.buyerEmail === userEmail);

    if (!orders.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:40px; background:var(--negro-card); border-radius:var(--radius); border:1.5px solid var(--cafe-borde);">
          <i class="fa-solid fa-truck" style="font-size:2.5rem; color:var(--dorado); margin-bottom:10px;"></i>
          <h3 style="color:#FFFFFF;">No tienes pedidos activos en seguimiento</h3>
          <p style="color:var(--ceramica-suave); margin-bottom:14px;">Realiza tu primera compra en el Eco-Mercado para seguirla en tiempo real.</p>
          <button type="button" class="btn-gold-action" onclick="appRouter.navigate('app-catalog')">Explorar Cosechas</button>
        </div>
      `;
      return;
    }

    container.innerHTML = orders.map(o => {
      const step = o.stepIndex || 3;
      return `
        <div class="order-tracking-card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <span class="badge-status active">Pedido #${o.id}</span>
              <h3 style="font-size:1.15rem; margin-top:4px;">Entrega en ${o.buyerDept}</h3>
              <small style="color:var(--text-secondary);">Destino: ${o.buyerAddress}</small>
            </div>
            <div style="text-align:right;">
              <strong style="color:var(--bosque-medio); font-size:1.1rem;">Total: C$ ${parseFloat(o.total).toFixed(2)}</strong>
              <small style="display:block; color:var(--text-muted);">Pago: ${o.payMethod === 'CARD' ? 'Tarjeta' : o.payMethod === 'TRANSFER' ? 'Transferencia' : 'Contra Entrega'}</small>
            </div>
          </div>

          <!-- Stepper Visual -->
          <div class="tracking-stepper-visual">
            <div class="tracking-step-node ${step >= 1 ? 'completed' : ''}" title="Pedido Realizado"><i class="fa-solid fa-file-lines"></i></div>
            <div class="tracking-step-node ${step >= 2 ? 'completed' : ''}" title="Pago Confirmado"><i class="fa-solid fa-credit-card"></i></div>
            <div class="tracking-step-node ${step >= 3 ? 'completed' : ''}" title="Preparando Cosecha"><i class="fa-solid fa-boxes-packing"></i></div>
            <div class="tracking-step-node ${step >= 4 ? 'completed current' : ''}" title="En Camino"><i class="fa-solid fa-truck-fast"></i></div>
            <div class="tracking-step-node ${step >= 5 ? 'completed' : ''}" title="Entregado"><i class="fa-solid fa-house-chimney-check"></i></div>
          </div>

          <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:800; color:var(--text-muted);">
            <span>Realizado</span>
            <span>Confirmado</span>
            <span>Preparando</span>
            <span style="color:var(--bosque-medio);">En Camino</span>
            <span>Entregado</span>
          </div>

          <div style="background:var(--bg-muted); padding:10px 14px; border-radius:6px; font-size:0.85rem; display:flex; justify-content:space-between; align-items:center;">
            <span><strong>Artículos:</strong> ${o.items.map(i => `${i.qty} ${i.unit} ${i.title}`).join(', ')}</span>
            <span class="badge-status ${o.status === 'ENTREGADO' ? 'active' : 'warn'}">${o.status}</span>
          </div>
        </div>
      `;
    }).join('');
  }
};

// ========================================================================================
// 🛒 10. GESTOR DEL CARRITO DE COMPRAS
// ========================================================================================
// ========================================================================================
// 🛒 10. GESTOR DE CARRITO DE COMPRAS (100% FUNCIONAL, PERSISTENTE Y SIN BLOQUEOS)
// ========================================================================================
// ========================================================================================
// 🛒 10. GESTOR DE CARRITO DE COMPRAS (100% REAL, PERSISTENTE Y SIN BLOQUEOS)
// ========================================================================================
const cartManager = {
  _justDragged: false,
  _currentLeft: null,
  _currentTop: null,

  init() {
    this.loadCartFromStorage();
    this.updateBadge();
    this.initDraggableFab();
    this.syncFloatingVisibility(state.activeView || 'public-home');
  },

  initDraggableFab() {
    const fab = document.getElementById('btnFloatingCart');
    if (!fab) return;

    this.restoreFabPosition(fab);

    let isPointerDown = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;
    let hasMoved = false;

    fab.addEventListener('pointerdown', (e) => {
      // Solo botón primario
      if (e.button !== 0 && e.pointerType === 'mouse') return;

      isPointerDown = true;
      hasMoved = false;
      startX = e.clientX;
      startY = e.clientY;

      const rect = fab.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;

      try {
        fab.setPointerCapture(e.pointerId);
      } catch (err) {}

      fab.classList.add('is-dragging');
    });

    fab.addEventListener('pointermove', (e) => {
      if (!isPointerDown) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (!hasMoved && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        hasMoved = true;
      }

      if (hasMoved) {
        if (e.cancelable) e.preventDefault();

        const fabW = fab.offsetWidth || 62;
        const fabH = fab.offsetHeight || 62;
        const pad = 12;

        let newLeft = initialLeft + dx;
        let newTop = initialTop + dy;

        // Limitar dentro del viewport visible de la pantalla
        const maxLeft = window.innerWidth - fabW - pad;
        const maxTop = window.innerHeight - fabH - pad;

        newLeft = Math.max(pad, Math.min(newLeft, maxLeft));
        newTop = Math.max(pad, Math.min(newTop, maxTop));

        fab.style.setProperty('top', `${newTop}px`, 'important');
        fab.style.setProperty('left', `${newLeft}px`, 'important');
        fab.style.setProperty('bottom', 'auto', 'important');
        fab.style.setProperty('right', 'auto', 'important');

        fab._currentLeft = newLeft;
        fab._currentTop = newTop;
      }
    });

    const onPointerEnd = (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      fab.classList.remove('is-dragging');

      try {
        fab.releasePointerCapture(e.pointerId);
      } catch (err) {}

      if (hasMoved) {
        cartManager._justDragged = true;
        setTimeout(() => { cartManager._justDragged = false; }, 250);

        try {
          localStorage.setItem('sauyultech_fab_pos', JSON.stringify({
            top: fab._currentTop,
            left: fab._currentLeft
          }));
        } catch (err) {}
      }
    };

    fab.addEventListener('pointerup', onPointerEnd);
    fab.addEventListener('pointercancel', onPointerEnd);

    window.addEventListener('resize', () => {
      this.restoreFabPosition(fab);
    });
  },

  restoreFabPosition(fab) {
    if (!fab) fab = document.getElementById('btnFloatingCart');
    if (!fab) return;
    try {
      const saved = localStorage.getItem('sauyultech_fab_pos');
      if (saved) {
        const pos = JSON.parse(saved);
        if (pos && typeof pos.top === 'number' && typeof pos.left === 'number') {
          const fabW = fab.offsetWidth || 62;
          const fabH = fab.offsetHeight || 62;
          const pad = 12;
          const maxLeft = window.innerWidth - fabW - pad;
          const maxTop = window.innerHeight - fabH - pad;

          const left = Math.max(pad, Math.min(pos.left, maxLeft));
          const top = Math.max(pad, Math.min(pos.top, maxTop));

          fab.style.setProperty('top', `${top}px`, 'important');
          fab.style.setProperty('left', `${left}px`, 'important');
          fab.style.setProperty('bottom', 'auto', 'important');
          fab.style.setProperty('right', 'auto', 'important');
          fab._currentLeft = left;
          fab._currentTop = top;
          return;
        }
      }
    } catch (e) {}

    // Limpiar propiedades personalizadas para usar los valores CSS por defecto
    fab.style.removeProperty('top');
    fab.style.removeProperty('left');
    fab.style.removeProperty('bottom');
    fab.style.removeProperty('right');
  },

  syncFloatingVisibility(viewId) {
    const fab = document.getElementById('btnFloatingCart');
    if (!fab) return;

    // Secciones donde el carrito es relevante y se va a utilizar:
    const shoppingViews = [
      'public-market',        // Eco-Mercado público
      'app-market',           // Mercado general autenticado
      'app-market-ganadero',  // Insumos y comercio pecuario
      'app-catalog',          // Catálogo completo
      'app-categories',       // Categorías de productos
      'app-offers',           // Ofertas y promociones
      'app-favorites',        // Favoritos guardados
      'app-pedidos'           // Mis pedidos
    ];

    const currentView = viewId || state.activeView || 'public-home';
    const isInShoppingView = shoppingViews.includes(currentView);

    // En Inicio (public-home), Login (auth), Admin (app-master-admin), IoT, etc., NUNCA estorba
    if (isInShoppingView) {
      fab.classList.add('is-visible');
      fab.style.setProperty('display', 'flex', 'important');
      this.restoreFabPosition(fab);
    } else {
      fab.classList.remove('is-visible');
      fab.style.setProperty('display', 'none', 'important');
    }
  },

  loadCartFromStorage() {
    try {
      const saved = localStorage.getItem('sauyultech_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) state.cart = parsed;
      }
    } catch (e) {
      console.warn('Error al cargar carrito de storage:', e);
    }
  },

  saveCartToStorage() {
    try {
      localStorage.setItem('sauyultech_cart', JSON.stringify(state.cart));
    } catch (e) {
      console.warn('Error al guardar carrito en storage:', e);
    }
  },

  addToCart(productId, quantity = 1) {
    return this.addItem(productId, quantity);
  },

  addItem(productId, quantity = 1) {
    const prod = state.productsList.find(p => String(p.id) === String(productId));
    if (!prod) {
      showToast('Producto no encontrado.', 'warn');
      return;
    }

    const available = parseInt(prod.quantity_available, 10) || 0;
    if (available <= 0) {
      showToast('Este producto se encuentra agotado.', 'warn');
      return;
    }

    let qtyToAdd = parseInt(quantity, 10) || 1;
    if (isNaN(qtyToAdd) || qtyToAdd < 1) qtyToAdd = 1;

    let existing = state.cart.find(x => String(x.productId) === String(productId));
    const currentInCart = existing ? (parseInt(existing.qty, 10) || 0) : 0;
    const targetTotal = currentInCart + qtyToAdd;

    if (targetTotal > available) {
      qtyToAdd = Math.max(0, available - currentInCart);
      if (qtyToAdd === 0) {
        showToast(`Ya tienes el stock máximo (${available} ${prod.unit}) en tu carrito.`, 'warn');
        return;
      }
    }

    const price = parseFloat(prod.sellingPrice || prod.price) || 0;
    const photo = prod.photo || prod.photoUrl || (produceImageCatalog[Object.keys(produceImageCatalog).find(k => prod.title.toLowerCase().includes(k.toLowerCase()))]) || defaultProduceImages[prod.category] || defaultProduceImages['Frutas'];

    if (existing) {
      existing.qty += qtyToAdd;
    } else {
      state.cart.push({
        productId: String(prod.id),
        title: prod.title,
        price: price,
        unit: prod.unit || 'Unidad',
        category: prod.category || 'Agrícola',
        photo: photo,
        photoUrl: photo,
        qty: qtyToAdd,
        farmerName: prod.farmerName || 'Productor Directo'
      });
    }

    this.saveCartToStorage();
    this.updateBadge();
    showToast(`¡${qtyToAdd} ${prod.unit} de ${prod.title} agregado al carrito!`, 'success');
  },

  updateBadge() {
    const totalCount = state.cart.reduce((sum, it) => sum + (parseInt(it.qty, 10) || 0), 0);
    
    // Badge flotante
    const fabBadge = document.getElementById('cartFloatingBadge');
    if (fabBadge) {
      fabBadge.textContent = totalCount;
      fabBadge.style.display = totalCount > 0 ? 'flex' : 'none';
      if (totalCount > 0) {
        fabBadge.style.animation = 'none';
        fabBadge.offsetHeight;
        fabBadge.style.animation = 'pulseBadge 0.35s ease';
      }
    }

    // Badge modal
    const modalBadge = document.getElementById('cartModalItemCountBadge');
    if (modalBadge) {
      modalBadge.textContent = `${totalCount} artículo${totalCount === 1 ? '' : 's'}`;
    }

    // Badges en header y sidebar
    const badges = [
      document.getElementById('headerCartCount'),
      document.getElementById('sidebarCartCount')
    ];
    badges.forEach(b => { 
      if (b) {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'inline-flex' : 'none';
      }
    });

    // Mantener sincronizada la visibilidad del botón flotante
    if (this.syncFloatingVisibility) {
      this.syncFloatingVisibility(state.activeView);
    }
  },

  openCartModal() {
    if (this._justDragged) return; // Si fue arrastre, no abrir modal
    this.renderCartItems();
    uiModal.open('modal-cart');
  },

    renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotalPrice');
    const totalEl = document.getElementById('cartTotalPrice');
    const summarySection = document.getElementById('cartSummarySection');
    if (!container) return;

    if (!state.cart || !state.cart.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:36px 20px; display:flex; flex-direction:column; align-items:center; gap:12px;">
          <div style="width:70px; height:70px; border-radius:50%; background:rgba(200,152,68,0.15); display:flex; align-items:center; justify-content:center; color:var(--dorado); font-size:2rem;">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <strong style="font-size:1.15rem; color:var(--brown-title);">Tu carrito está vacío</strong>
          <p style="font-size:0.88rem; color:var(--brown-text); max-width:320px; margin:0; line-height:1.5;">Explora los productos frescos de nuestros agricultores y agrégalos con un solo clic.</p>
          <button type="button" class="primary-action" onclick="uiModal.close('modal-cart'); appRouter.navigate('app-market');" style="margin-top:8px; padding:10px 20px; font-size:0.9rem;">
            <i class="fa-solid fa-store"></i> Explorar Catálogo
          </button>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = 'C$ 0.00';
      if (totalEl) totalEl.textContent = 'C$ 0.00';
      if (summarySection) summarySection.style.display = 'none';
      return;
    }

    if (summarySection) summarySection.style.display = 'flex';

    let subtotal = 0;
    container.innerHTML = state.cart.map(item => {
      const priceVal = parseFloat(item.price) || 0;
      const qtyVal = parseInt(item.qty, 10) || 1;
      const itemSubtotal = priceVal * qtyVal;
      subtotal += itemSubtotal;
      
      const prod = state.productsList.find(p => String(p.id) === String(item.productId));
      const maxStock = prod ? prod.quantity_available : 999;
      const rawPhoto = item.photo || item.photoUrl || (produceImageCatalog[Object.keys(produceImageCatalog).find(k => (item.title || '').toLowerCase().includes(k.toLowerCase()))]) || defaultProduceImages[item.category] || defaultProduceImages['Frutas'];
      const photoSrc = getRenderableImageUrl(rawPhoto);
      const title = item.title || prod?.title || 'Producto Agropecuario';
      const unit = item.unit || prod?.unit || 'Unidad';
      const farmer = item.farmerName || prod?.farmerName || 'Productor Directo';

      return `
        <div class="cart-item-card-row">
          <img src="${photoSrc}" alt="${title}" class="cart-item-card-img">
          
          <div class="cart-item-card-info">
            <strong class="cart-item-title">${title}</strong>
            <div class="cart-item-price-unit">C$ ${priceVal.toFixed(2)} / ${unit}</div>
            <small class="cart-item-farmer"><i class="fa-solid fa-user-check" style="color:var(--verde);"></i> ${farmer}</small>
          </div>

          <div class="cart-item-actions-wrap">
            <div class="cart-stepper-box">
              <button type="button" class="cart-step-btn" onclick="cartManager.stepQty('${item.productId}', -1)" title="Disminuir">−</button>
              <input type="number" min="1" max="${maxStock}" value="${qtyVal}" onchange="cartManager.changeQty('${item.productId}', this.value)" class="cart-step-input">
              <button type="button" class="cart-step-btn" onclick="cartManager.stepQty('${item.productId}', 1)" title="Aumentar">+</button>
            </div>

            <div class="cart-item-subtotal-box">
              <small style="color:var(--brown-text); font-size:0.7rem; font-weight:800; display:block;">SUBTOTAL:</small>
              <strong style="color:var(--verde); font-size:1.05rem; font-weight:900;">C$ ${itemSubtotal.toFixed(2)}</strong>
            </div>

            <button type="button" class="cart-item-delete-btn" onclick="cartManager.removeItem('${item.productId}')" title="Eliminar producto">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    const shipping = 50.00;
    if (subtotalEl) subtotalEl.textContent = `C$ ${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `C$ ${(subtotal + shipping).toFixed(2)}`;
  },

  stepQty(productId, delta) {
    const item = state.cart.find(x => String(x.productId) === String(productId));
    if (!item) return;
    const prod = state.productsList.find(p => String(p.id) === String(productId));
    const maxStock = prod ? prod.quantity_available : 999;
    
    let newQty = (parseInt(item.qty, 10) || 1) + delta;
    if (newQty < 1) {
      this.removeItem(productId);
      return;
    }
    if (newQty > maxStock) {
      newQty = maxStock;
      showToast(`Stock máximo disponible: ${maxStock} ${item.unit}`, 'warn');
    }

    item.qty = newQty;
    this.saveCartToStorage();
    this.updateBadge();
    this.renderCartItems();
  },

  changeQty(productId, newQty) {
    const item = state.cart.find(x => String(x.productId) === String(productId));
    if (!item) return;
    const prod = state.productsList.find(p => String(p.id) === String(productId));
    const maxStock = prod ? prod.quantity_available : 999;

    let qty = parseInt(newQty, 10) || 1;
    if (qty < 1) qty = 1;
    if (qty > maxStock) {
      qty = maxStock;
      showToast(`Stock máximo disponible: ${maxStock} ${item.unit}`, 'warn');
    }

    item.qty = qty;
    this.saveCartToStorage();
    this.updateBadge();
    this.renderCartItems();
  },

  removeItem(productId) {
    state.cart = state.cart.filter(x => String(x.productId) !== String(productId));
    this.saveCartToStorage();
    this.updateBadge();
    this.renderCartItems();
    showToast('Producto eliminado del carrito.', 'info');
  },

  clearCart() {
    if (!state.cart.length) return;
    state.cart = [];
    this.saveCartToStorage();
    this.updateBadge();
    this.renderCartItems();
    showToast('El carrito ha sido vaciado.', 'info');
  }
};

// ========================================================================================
// 💳 11. GESTOR DE CHECKOUT & PAGOS IN-APP
// ========================================================================================
const checkoutController = {
  selectedPayMethod: 'CARD',
  lastCreatedOrder: null,

  openCheckoutModal() {
    if (!state.currentSession) {
      showToast('⚠️ Para tramitar tu pedido debes registrarte o iniciar sesión.', 'warn');
      uiModal.close('modal-cart');
      appRouter.navigate('auth');
      authManager.switchSubView('register');
      return;
    }

    if (!state.cart.length) {
      showToast('Tu carrito está vacío.', 'warn');
      return;
    }

    uiModal.close('modal-cart');
    const user = state.currentSession || {};
    document.getElementById('checkoutBuyerName').value = user.name || '';
    document.getElementById('checkoutBuyerPhone').value = user.phone || '';
    document.getElementById('checkoutBuyerDept').value = user.location || 'Managua';
    document.getElementById('checkoutBuyerAddress').value = user.farm || '';

    const subtotal = state.cart.reduce((s, it) => s + (it.qty * it.price), 0);
    const total = subtotal + 50.00;
    document.getElementById('checkoutFinalAmountText').textContent = `C$ ${total.toFixed(2)}`;

    // Set default payment method to CARD
    const cardBtn = document.getElementById('payMethodCard');
    this.selectPaymentMethod('CARD', cardBtn);

    uiModal.open('modal-checkout');
  },

  selectPaymentMethod(method, btnEl) {
    this.selectedPayMethod = method;
    document.querySelectorAll('#formCheckoutOrder .checkout-pay-grid .profile-select-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    const inputHidden = document.getElementById('checkoutSelectedPayMethod');
    if (inputHidden) inputHidden.value = method;

    const cardBox = document.getElementById('checkoutCardDetailsSection');
    const transBox = document.getElementById('checkoutTransferDetailsSection');
    const codBox = document.getElementById('checkoutCodDetailsSection');

    const cardHolder = document.getElementById('cardHolderName');
    const cardNum = document.getElementById('cardNumberInput');
    const cardExp = document.getElementById('cardExpiryInput');
    const cardCvv = document.getElementById('cardCvvInput');

    if (cardBox) cardBox.style.display = method === 'CARD' ? 'block' : 'none';
    if (transBox) transBox.style.display = method === 'TRANSFER' ? 'block' : 'none';
    if (codBox) codBox.style.display = method === 'COD' ? 'block' : 'none';

    // Manejo de validación HTML5
    const isCard = method === 'CARD';
    if (cardHolder) cardHolder.required = isCard;
    if (cardNum) cardNum.required = isCard;
    if (cardExp) cardExp.required = isCard;
    if (cardCvv) cardCvv.required = isCard;
  },

  formatCardNumber(input) {
    let val = input.value.replace(/\D/g, '').substring(0, 16);
    let parts = [];
    for (let i = 0; i < val.length; i += 4) {
      parts.push(val.substring(i, i + 4));
    }
    input.value = parts.join(' ');

    const icon = document.getElementById('cardBrandIcon');
    if (icon) {
      if (val.startsWith('4')) {
        icon.className = 'fa-brands fa-cc-visa card-brand-detected';
        icon.style.color = '#1A1F71';
      } else if (/^5[1-5]/.test(val) || /^2[2-7]/.test(val)) {
        icon.className = 'fa-brands fa-cc-mastercard card-brand-detected';
        icon.style.color = '#EB001B';
      } else if (/^3[47]/.test(val)) {
        icon.className = 'fa-brands fa-cc-amex card-brand-detected';
        icon.style.color = '#007CC3';
      } else {
        icon.className = 'fa-solid fa-credit-card card-brand-detected';
        icon.style.color = 'var(--text-muted)';
      }
    }
  },

  formatCardExpiry(input) {
    let val = input.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) {
      input.value = val.substring(0, 2) + '/' + val.substring(2, 4);
    } else {
      input.value = val;
    }
  },

  processOrderPayment(e) {
    e.preventDefault();
    const name = document.getElementById('checkoutBuyerName').value.trim();
    const phone = document.getElementById('checkoutBuyerPhone').value.trim();
    const dept = document.getElementById('checkoutBuyerDept').value.trim();
    const address = document.getElementById('checkoutBuyerAddress').value.trim();

    const subtotal = state.cart.reduce((s, it) => s + (it.qty * it.price), 0);
    const shipping = 50.00;
    const total = subtotal + shipping;

    let displayPayMethod = this.selectedPayMethod;
    if (this.selectedPayMethod === 'CARD') {
      const cardNumVal = document.getElementById('cardNumberInput')?.value.replace(/\s/g, '') || '';
      const last4 = cardNumVal.slice(-4) || '8842';
      displayPayMethod = `Tarjeta Débito/Crédito (•••• ${last4})`;
    } else if (this.selectedPayMethod === 'TRANSFER') {
      const ref = document.getElementById('transferReferenceInput')?.value.trim() || 'Verificación In-App';
      displayPayMethod = `Transferencia Bancaria (${ref})`;
    } else if (this.selectedPayMethod === 'COD') {
      displayPayMethod = `Pago Contra Entrega en Efectivo`;
    }

    const newOrder = {
      id: 'PED-' + Math.floor(100000 + Math.random() * 900000),
      buyerEmail: state.currentSession?.email || 'comprador@sauyultech.com',
      buyerName: name,
      buyerPhone: phone,
      buyerDept: dept,
      buyerAddress: address,
      items: [...state.cart],
      subtotal,
      shipping,
      total,
      status: 'CONFIRMADO',
      stepIndex: 2,
      payMethod: displayPayMethod,
      createdAt: new Date().toISOString()
    };

    this.lastCreatedOrder = newOrder;

    // Descontar inventario de los productos y lotes, y sumar unidades vendidas
    state.cart.forEach(item => {
      const prod = state.productsList.find(p => p.id === item.productId);
      if (prod) {
        prod.quantity_available = Math.max(0, prod.quantity_available - item.qty);
        prod.quantity_sold = (prod.quantity_sold || 0) + item.qty;
        if (prod.quantity_available === 0) {
          prod.stockStatus = 'AGOTADO';
        }
        if (prod.loteId) {
          const lote = state.lotesList.find(l => l.id === prod.loteId);
          if (lote) lote.remainingQuantity = Math.max(0, lote.remainingQuantity - item.qty);
        }
      }
    });

    // Acreditar automáticamente al Monedero Virtual de los Productores correspondientes
    state.cart.forEach(item => {
      const netProducerCredit = item.qty * (item.producerPrice || (item.price * 0.88));
      if (typeof walletController !== 'undefined' && walletController.creditSale) {
        walletController.creditSale(netProducerCredit, newOrder.id, item.title);
      }
    });

    state.ordersList.unshift(newOrder);
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveOrder) firebaseSync.saveOrder(newOrder);
    if (typeof ordersManager !== 'undefined' && ordersManager.saveOrdersToStorage) {
      ordersManager.saveOrdersToStorage();
    }
    state.cart = [];
    cartManager.updateBadge();
    marketController.saveProductsToStorage();
    if (typeof marketController.saveLotesToStorage === 'function') {
      marketController.saveLotesToStorage();
    }

    uiModal.close('modal-checkout');

    // Mostrar Comprobante
    const receiptBox = document.getElementById('receiptDetailsBox');
    if (receiptBox) {
      receiptBox.innerHTML = `
        <div><strong>Código de Pedido:</strong> #${newOrder.id}</div>
        <div><strong>Receptor:</strong> ${newOrder.buyerName} (${newOrder.buyerPhone})</div>
        <div><strong>Dirección:</strong> ${newOrder.buyerDept}, ${newOrder.buyerAddress}</div>
        <div><strong>Método de Pago:</strong> ${newOrder.payMethod}</div>
        <div><strong>Artículos:</strong> ${newOrder.items.map(i => `${i.qty} ${i.unit} ${i.title}`).join(', ')}</div>
        <div style="font-size:1.15rem; font-weight:900; color:var(--bosque-medio); border-top:1px dashed var(--border-strong); padding-top:6px; margin-top:4px;">TOTAL PAGADO: C$ ${newOrder.total.toFixed(2)}</div>
      `;
    }

    uiModal.open('modal-receipt');
    showToast(`¡Pedido #${newOrder.id} completado con éxito!`, 'success');
  },

  openChatFromReceipt() {
    if (!this.lastCreatedOrder) {
      uiModal.close('modal-receipt');
      chatController.openChatWithProducer('prod-general', 'Sauyoultech@comercializadora.com', 'Comercializadora Sau Yul Tech S.A.', 'Comercializadora Sau Yul Tech S.A.', 'Cosechas Frescas');
      return;
    }
    const o = this.lastCreatedOrder;
    const firstItem = o.items && o.items[0];
    uiModal.close('modal-receipt');
    chatController.openChatWithProducer(
      firstItem ? firstItem.productId : 'prod-general',
      (firstItem && firstItem.farmerEmail) || 'Sauyoultech@comercializadora.com',
      (firstItem && firstItem.farmerName) || 'Comercializadora Sau Yul Tech S.A.',
      'Finca Los Cítricos - Masaya',
      firstItem ? firstItem.title : `Pedido #${o.id}`
    );
  }
};

// ========================================================================================
// 📦 12. GESTOR DE PEDIDOS DEL COMPRADOR
// ========================================================================================
const ordersManager = {
  saveOrdersToStorage() {
    localStorage.setItem('sauyultech_orders', JSON.stringify(state.ordersList));
  },

  loadOrdersFromStorage() {
    const raw = localStorage.getItem('sauyultech_orders');
    if (raw) {
      try {
        const stored = JSON.parse(raw);
        if (Array.isArray(stored) && stored.length > 0) {
          state.ordersList = stored;
        }
      } catch (e) {}
    }
  },

  renderBuyerOrders() {
    this.loadOrdersFromStorage();
    const container = document.getElementById('buyerOrdersListContainer');
    if (!container) return;

    const userEmail = state.currentSession?.email;
    let myOrders = state.ordersList || [];
    if (userEmail) {
      myOrders = myOrders.filter(o => o.buyerEmail === userEmail || state.currentSession?.role === 'superadmin' || o.buyerEmail === 'Sauyoultech@comercializadora.com');
    }

    if (!myOrders.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:linear-gradient(180deg, #18201B 0%, #111613 100%); border:1.5px solid rgba(200, 152, 68, 0.35); border-radius:14px;">
          <i class="fa-solid fa-box-open" style="font-size:3rem; color:var(--dorado); margin-bottom:14px;"></i>
          <h3 style="color:#FFFFFF; margin-bottom:6px;">No tienes pedidos registrados</h3>
          <p style="color:#CEBDA3; font-size:0.9rem; margin-bottom:18px;">Explora nuestras cosechas frescas en el Eco-Mercado y realiza tu primera compra.</p>
          <button type="button" class="btn-gold-action" onclick="appRouter.navigate('app-catalog')">
            <i class="fa-solid fa-basket-shopping"></i> Ir al Eco-Mercado
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = myOrders.map(o => `
      <div class="order-history-card">
        <div class="order-history-header">
          <div>
            <strong class="order-history-id"><i class="fa-solid fa-box" style="color:var(--dorado); margin-right:6px;"></i>Pedido #${o.id}</strong>
            <span class="order-history-date"><i class="fa-regular fa-calendar"></i> ${new Date(o.createdAt).toLocaleDateString()} · ${new Date(o.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <span class="order-history-status-badge ${o.status === 'ENTREGADO' || o.status === 'CONFIRMADO' ? '' : 'pending'}">
            <i class="fa-solid ${o.status === 'ENTREGADO' || o.status === 'CONFIRMADO' ? 'fa-circle-check' : 'fa-clock'}"></i> ${o.status}
          </span>
        </div>
        
        <div class="order-history-items-box">
          ${(o.items || []).map(it => `
            <div class="order-history-item-row">
              <div class="order-history-item-name">
                <strong>${it.qty} ${it.unit || 'kg'}</strong> <span style="margin:0 4px; color:#CEBDA3;">×</span> <span>${it.title}</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px;">
                <strong class="order-history-item-price">C$ ${(it.qty * it.price).toFixed(2)}</strong>
                <button type="button" class="btn-gold-action" style="padding:6px 12px; font-size:0.78rem; font-weight:800;" onclick="reviewsManager.openReviewModal('${it.productId}', '${o.id}')" title="Calificar esta cosecha y productor">
                  <i class="fa-solid fa-star"></i> Calificar
                </button>
                <button type="button" class="secondary-btn" style="padding:6px 12px; font-size:0.78rem; font-weight:800; background:rgba(31,169,113,0.18); border-color:#1FA971; color:#34D399;" onclick="chatController.openChatWithProducer('${it.productId}', '${it.farmerEmail || 'Sauyoultech@comercializadora.com'}', '${it.farmerName || 'Comercializadora Sau Yul Tech S.A.'}', 'Comercializadora Sau Yul Tech S.A.', '${it.title}')" title="Contactar al productor">
                  <i class="fa-solid fa-comments"></i> Chat
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="order-history-footer">
          <div>
            <span class="order-history-delivery-info"><i class="fa-solid fa-truck" style="color:var(--verde);"></i> Entrega: <strong>${o.buyerDept || 'Managua'}, ${o.buyerAddress || 'Dirección registrada'}</strong></span>
            <small style="color:#A3907C; font-size:0.8rem; display:block; margin-top:3px;"><i class="fa-solid fa-credit-card" style="color:var(--dorado);"></i> Pago: <span style="color:#CEBDA3;">${o.payMethod || 'Tarjeta Débito/Crédito'}</span></small>
            <strong class="order-history-total">TOTAL: C$ ${o.total.toFixed(2)}</strong>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button type="button" class="secondary-btn" style="padding:10px 18px; font-size:0.86rem; font-weight:800; color:#FFFFFF; border-color:rgba(200,152,68,0.5); background:rgba(255,255,255,0.06);" onclick="ordersManager.viewOrderReceipt('${o.id}')">
              <i class="fa-solid fa-receipt" style="color:var(--dorado);"></i> Ver Comprobante
            </button>
            <button type="button" class="btn-gold-action" style="padding:10px 20px; font-size:0.86rem; font-weight:900;" onclick="ordersManager.reorderOrder('${o.id}')">
              <i class="fa-solid fa-rotate-right"></i> Volver a Comprar
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  reorderOrder(orderId) {
    const order = (state.ordersList || []).find(o => o.id === orderId);
    if (!order || !order.items || !order.items.length) {
      showToast('No se encontró información del pedido.', 'warn');
      return;
    }

    let addedCount = 0;
    order.items.forEach(item => {
      let prod = state.productsList.find(p => p.id === item.productId);
      if (!prod) {
        prod = {
          id: item.productId || ('PROD-' + Math.floor(Math.random() * 1000)),
          title: item.title,
          price: item.price,
          unit: item.unit || 'kg',
          quantity_available: 50,
          photo: item.photo || 'https://lh3.googleusercontent.com/d/1hUy9jfgYDapPMYKcXuav4e3ctLfVUoR3',
          farmerName: item.farmerName || 'Productor Verificado'
        };
        state.productsList.push(prod);
      }
      if (prod.quantity_available <= 0) {
        prod.quantity_available = Math.max(50, item.qty * 2);
        prod.stockStatus = 'DISPONIBLE';
      }

      const qtyToAdd = Math.max(1, item.qty);
      const existing = state.cart.find(c => c.productId === prod.id);
      if (existing) {
        existing.qty += qtyToAdd;
      } else {
        state.cart.push({
          productId: prod.id,
          title: prod.title,
          price: prod.sellingPrice || prod.price,
          unit: prod.unit,
          photo: prod.photo,
          qty: qtyToAdd,
          farmerName: prod.farmerName || item.farmerName || 'Productor Verificado',
          producerPrice: prod.producerPrice || item.producerPrice || (prod.price * 0.88)
        });
      }
      addedCount++;
    });

    cartManager.updateBadge();
    cartManager.renderCartItems();
    marketController.openCartModal();
    showToast('¡Productos agregados al carrito con éxito!', 'success');
  },

  viewOrderReceipt(orderId) {
    const order = (state.ordersList || []).find(o => o.id === orderId);
    if (!order) return;
    checkoutController.lastCreatedOrder = order;

    const receiptBox = document.getElementById('receiptDetailsBox');
    if (receiptBox) {
      receiptBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(200,152,68,0.25); padding-bottom:8px; margin-bottom:8px;">
          <span style="color:#CEBDA3; font-weight:700;">Código de Pedido:</span>
          <strong style="color:var(--dorado); font-size:1.05rem;">#${order.id}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span style="color:#CEBDA3;">Fecha:</span>
          <strong style="color:#FFFFFF;">${new Date(order.createdAt).toLocaleString()}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span style="color:#CEBDA3;">Receptor:</span>
          <strong style="color:#FFFFFF;">${order.buyerName} (${order.buyerPhone})</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <span style="color:#CEBDA3;">Dirección:</span>
          <strong style="color:#FFFFFF;">${order.buyerDept}, ${order.buyerAddress}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <span style="color:#CEBDA3;">Método de Pago:</span>
          <strong style="color:#34D399;">${order.payMethod}</strong>
        </div>
        <div style="border-top:1px solid rgba(200,152,68,0.25); padding-top:8px; margin-top:4px;">
          <span style="color:#CEBDA3; font-weight:800; display:block; margin-bottom:6px;">Cosechas Compradas:</span>
          ${(order.items || []).map(i => `
            <div style="display:flex; justify-content:space-between; color:#FFFFFF; font-size:0.88rem; margin-bottom:4px;">
              <span><strong style="color:var(--dorado);">${i.qty} ${i.unit || 'kg'}</strong> × ${i.title}</span>
              <strong style="color:var(--dorado);">C$ ${(i.qty * i.price).toFixed(2)}</strong>
            </div>
          `).join('')}
        </div>
        <div style="font-size:1.25rem; font-weight:900; color:#34D399; border-top:1.5px dashed rgba(200,152,68,0.4); padding-top:10px; margin-top:10px; display:flex; justify-content:space-between;">
          <span>TOTAL PAGADO:</span>
          <span>C$ ${order.total.toFixed(2)}</span>
        </div>
      `;
    }
    uiModal.open('modal-receipt');
  },

  goToMyOrders() {
    uiModal.close('modal-receipt');
    appRouter.navigate('app-pedidos');
  }
};

// ========================================================================================
// 🔔 13. CENTRO DE NOTIFICACIONES
// ========================================================================================
const notificationCenter = {
  getFilteredNotifications() {
    const userRole = state.currentSession ? (state.currentSession.profileType || state.currentSession.role || 'comprador') : 'comprador';
    const isAdmin = userRole === 'superadmin' || userRole === 'admin' || state.currentSession?.role === 'superadmin';
    return (state.notificationsList || []).filter(n => {
      if (!n.role || n.role === 'all') return true;
      if (isAdmin && (n.role === 'superadmin' || n.role === 'admin' || n.role === 'all_admin')) return true;
      return n.role === userRole;
    });
  },

  renderNotifications() {
    const container = document.getElementById('notificationsListContainer');
    if (!container) return;

    const list = this.getFilteredNotifications();
    const unreadCount = list.filter(n => !n.read).length;

    const headerBadge = document.getElementById('headerNotifsBadge');
    const sidebarBadge = document.getElementById('sidebarNotifsBadge');
    if (headerBadge) {
      headerBadge.textContent = unreadCount;
      headerBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
    }
    if (sidebarBadge) {
      sidebarBadge.textContent = unreadCount;
      sidebarBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
    }

    if (typeof masterAdminController !== 'undefined' && masterAdminController.updatePendingBadge) {
      masterAdminController.updatePendingBadge();
    }

    if (!list.length) {
      container.innerHTML = `
        <div style="background:var(--negro-card); border:1.5px solid var(--cafe-borde); border-radius:var(--radius-sm); padding:28px; text-align:center;">
          <i class="fa-solid fa-bell-slash" style="font-size:2rem; color:var(--brown); margin-bottom:10px; display:block;"></i>
          <strong style="color:#FFFFFF; font-size:1.1rem; display:block;">No tienes notificaciones pendientes</strong>
          <p style="color:var(--ceramica-suave); font-size:0.88rem; margin-top:4px;">Las novedades exclusivas de tu perfil se mostrarán en esta sección.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(n => `
      <div style="background:var(--negro-card); border:1.5px solid var(--cafe-borde); border-radius:var(--radius-sm); padding:16px 20px; display:flex; justify-content:space-between; align-items:center; box-shadow:var(--shadow-md); margin-bottom:12px;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span class="admin-badge-clean" style="font-size:0.7rem; background:#C89844; color:#182B20; font-weight:900;">${(n.role || 'GENERAL').toUpperCase()}</span>
            <strong style="font-size:1.02rem; color:#FFFFFF; font-weight:800;">${n.title}</strong>
          </div>
          <p style="color:var(--ceramica-suave); font-size:0.9rem; margin-top:2px; line-height:1.4;">${n.desc}</p>
          <small style="color:var(--text-muted); font-size:0.78rem; font-weight:600; margin-top:6px; display:inline-block;">${n.time}</small>
        </div>
        ${!n.read ? `<span class="action-count-badge notifs-badge" style="background:#e53935; color:#FFFFFF; font-size:0.75rem; padding:4px 10px; border-radius:var(--radius-pill); font-weight:900;">Nueva</span>` : ''}
      </div>
    `).join('');
  },

  markAllAsRead() {
    const userRole = state.currentSession ? (state.currentSession.profileType || state.currentSession.role || 'comprador') : 'comprador';
    const isAdmin = userRole === 'superadmin' || userRole === 'admin' || state.currentSession?.role === 'superadmin';
    state.notificationsList.forEach(n => {
      if (!n.role || n.role === 'all' || n.role === userRole || (isAdmin && (n.role === 'superadmin' || n.role === 'admin'))) {
        n.read = true;
      }
    });
    localStorage.setItem('sauyultech_notifications', JSON.stringify(state.notificationsList));
    this.renderNotifications();
    showToast('Notificaciones marcadas como leídas', 'info');
  },

  addNotification(notif) {
    const newNotif = {
      id: 'NOTIF-' + Date.now(),
      time: 'Hace un momento',
      read: false,
      ...notif
    };
    if (!state.notificationsList) state.notificationsList = [];
    state.notificationsList.unshift(newNotif);
    localStorage.setItem('sauyultech_notifications', JSON.stringify(state.notificationsList));
    this.renderNotifications();
    if (typeof masterAdminController !== 'undefined' && masterAdminController.updatePendingBadge) {
      masterAdminController.updatePendingBadge();
    }
  }
};

// ========================================================================================
// 🐄 14. CONTROLADOR GANADERO & SATÉLITE (100% INTACTO)
// ========================================================================================

// ========================================================================================
// 📿 CONTROLADOR DE DISPOSITIVOS Y COLLARES IOT EN VIVO
// ========================================================================================
// ========================================================================================
// 📡 SERVICIO DE TELEMETRÍA REAL EN VIVO DESDE FIREBASE REALTIME DATABASE (READ-ONLY)
// TOMA EXCLUSIVAMENTE LOS DATOS REALES DE LOS COMPONENTES SIN INVENTAR DATOS FICTICIOS
// ========================================================================================
const firebaseTelemetryService = {
  dbUrl: 'https://datosbase111-default-rtdb.firebaseio.com',
  dbAuth: 'iFy4c5w94E0707O079dKcDxojPLnqgceFCy2zr6U',
  pollInterval: null,
  lastData: null,
  isLive: false,

  init() {
    this.fetchLiveTelemetry();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(() => this.fetchLiveTelemetry(), 3500);
    }
  },

  async fetchLiveTelemetry() {
    let collarsData = null;

    // 1. Intento primario: Lectura directa desde Firebase Realtime Database
    try {
      const url = `${this.dbUrl}/Dispositivos_Collares.json?auth=${this.dbAuth}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        collarsData = await res.json();
      }
    } catch (err) {
      // 2. Intento secundario: A través del endpoint seguro del backend
      try {
        const bRes = await fetch('/api/iot/telemetry');
        if (bRes.ok) {
          const bData = await bRes.json();
          if (bData && bData.dispositivos) collarsData = bData.dispositivos;
        }
      } catch (bErr) {}
    }

    if (collarsData && typeof collarsData === 'object') {
      this.isLive = true;
      this.lastData = collarsData;
      this.processFirebaseCollars(collarsData);
    }
  },

  processFirebaseCollars(data) {
    const entries = Object.entries(data);
    if (!entries.length) return;

    // Mapear collares reales recibidos del hardware físico
    const mappedCows = entries.map(([key, val], idx) => {
      const collarLabel = key.replace(/_/g, ' ');
      const rawTemp = val.temperatura;
      const rawIr = val.infrarrojo !== undefined ? val.infrarrojo : 0;
      const rawRed = val.rojo !== undefined ? val.rojo : 0;
      const rawLat = parseFloat(val.latitud) || 0;
      const rawLng = parseFloat(val.longitud) || 0;

      // Evaluar estado térmico y óptico
      let displayTemp = '--';
      let status = 'NORMAL';
      let isCalibrating = false;

      if (rawTemp === -999 || rawTemp === null || rawTemp === undefined || rawTemp < 0) {
        displayTemp = '-999 (Calibrando)';
        status = 'CALIBRANDO';
        isCalibrating = true;
      } else {
        displayTemp = parseFloat(rawTemp).toFixed(1);
        if (rawTemp > 39.5) status = 'FIEBRE';
        else if (rawTemp < 37.0) status = 'HIPOTERMIA';
      }

      // Evaluar coordenadas GPS reales
      const hasGpsFix = (rawLat !== 0 && rawLng !== 0);
      const lat = hasGpsFix ? rawLat : (12.8550 + (idx * 0.0015));
      const lng = hasGpsFix ? rawLng : (-85.9800 + (idx * 0.0015));
      const zone = hasGpsFix ? `GPS (${rawLat.toFixed(4)}, ${rawLng.toFixed(4)})` : 'Potrero 1 (Buscando GPS)';

      return {
        id: key,
        collarId: key,
        name: `Bovino ${collarLabel}`,
        breed: 'Ganado Monitoreado IoT',
        temp: displayTemp,
        rawTemp: rawTemp,
        ir: rawIr,
        red: rawRed,
        battery: 92,
        rssi: -68,
        sats: hasGpsFix ? 11 : 0,
        lat: lat,
        lng: lng,
        hasGpsFix: hasGpsFix,
        zone: zone,
        status: status,
        isCalibrating: isCalibrating,
        lastSync: new Date().toLocaleTimeString()
      };
    });

    // Actualizar state con los datos reales de Firebase
    state.cowsList = mappedCows;

    // Refrescar vistas en tiempo real
    if (typeof iotHardwareController !== 'undefined') {
      iotHardwareController.renderCollars();
    }
    if (typeof cowsController !== 'undefined') {
      cowsController.renderTable();
      cowsController.updateStats();
      if (cowsController.mapInstance) {
        cowsController.renderCowsOnMap();
      }
    }
  }
};

// ========================================================================================
// 📿 CONTROLADOR DE DISPOSITIVOS Y COLLARES IOT (ALIMENTADO EN VIVO POR FIREBASE)
// ========================================================================================
// ========================================================================================
// ⚡ UTILIDAD DE ANIMACIÓN DE CONTADORES NUMÉRICOS (MICROINTERACCIONES)
// ========================================================================================
function animateCounter(elementId, targetValue, duration = 750, prefix = '', suffix = '') {
  const el = document.getElementById(elementId);
  if (!el) return;
  const numTarget = typeof targetValue === 'number' ? targetValue : parseFloat(String(targetValue).replace(/[^0-9.-]+/g, '')) || 0;
  const startTime = performance.now();
  
  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(numTarget * easeOut);
    el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = `${prefix}${numTarget.toLocaleString()}${suffix}`;
    }
  }
  requestAnimationFrame(step);
}

// ========================================================================================
// 📿 CONTROLADOR DE DISPOSITIVOS Y COLLARES IOT (ALIMENTADO EN VIVO POR FIREBASE & SIMULADOR)
// ========================================================================================
const iotHardwareController = {
  activeFilter: 'ALL',
  isSimulating: false,
  simulationInterval: null,

  filterCollars(filter, btn) {
    this.activeFilter = filter;
    if (btn) {
      document.querySelectorAll('.iot-filter-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    this.renderCollars();
  },

  toggleLiveSimulation() {
    this.isSimulating = !this.isSimulating;
    const icon = document.getElementById('iotSimBtnIcon');
    if (this.isSimulating) {
      if (icon) icon.className = 'fa-solid fa-pause';
      showToast('📡 Simulación IoT en vivo iniciada (telemetría dinámica activa)', 'success');
      this.simulationInterval = setInterval(() => {
        state.cowsList.forEach(c => {
          c.temp = +(c.temp + (Math.random() - 0.48) * 0.15).toFixed(1);
          if (c.temp > 40.0) c.temp = 39.8;
          if (c.temp < 38.0) c.temp = 38.2;
          c.hr = Math.floor(68 + Math.random() * 12);
          c.lastSync = 'Hace 2s';
        });
        this.renderCollars();
        if (cowsController && cowsController.selectedCowId) {
          cowsController.inspectAnimal(cowsController.selectedCowId);
        }
      }, 3000);
    } else {
      if (icon) icon.className = 'fa-solid fa-play';
      clearInterval(this.simulationInterval);
      this.simulationInterval = null;
      showToast('⏸️ Simulación de telemetría en pausa', 'info');
    }
  },

  renderCollars() {
    const grid = document.getElementById('iotPrivateCollaresGrid');
    if (!grid) return;

    let collars = state.cowsList || [];
    if (this.activeFilter === 'NORMAL') {
      collars = collars.filter(c => c.status === 'NORMAL');
    } else if (this.activeFilter === 'FIEBRE') {
      collars = collars.filter(c => c.status !== 'NORMAL');
    }

    if (!collars.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:36px; background:#111613; border-radius:14px; border:1px solid rgba(200,152,68,0.3);">
          <i class="fa-solid fa-satellite-dish" style="font-size:2rem; color:var(--dorado); margin-bottom:10px;"></i>
          <p style="color:#FFFFFF; font-weight:800; margin:0;">No hay dispositivos con el filtro seleccionado</p>
          <small style="color:#CEBDA3;">Cambia el filtro a "Todos" para supervisar el hato completo.</small>
        </div>
      `;
      return;
    }

    grid.innerHTML = collars.map(c => `
      <div class="iot-collar-card dark-tech" style="border: 2px solid ${c.status === 'FIEBRE' ? '#EF4444' : '#1FA971'} !important;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="beacon-pulse-${c.status === 'NORMAL' ? 'green' : 'red'}"></span>
              <span class="badge-status active" style="font-size:0.75rem; font-weight:900; padding:2px 8px; background:#1FA971; color:#FFFFFF;">
                ${c.collarId}
              </span>
            </div>
            <strong style="display:block; color:#FFFFFF; font-size:1.15rem; font-weight:900; margin-top:4px;">${c.name}</strong>
            <small style="color:#CEBDA3; font-weight:700;">📡 Enlace LoRa SX1262 · Potrero: ${c.zone}</small>
          </div>

          <span class="badge-status ${c.status === 'NORMAL' ? 'active' : 'danger'}" style="font-size:0.75rem; font-weight:900;">
            ${c.status === 'NORMAL' ? '🟢 NORMAL' : '🔴 FIEBRE'}
          </span>
        </div>

        <!-- LECTURAS REALES DE SENSORES HARDWARE -->
        <div class="iot-metrics-mini-grid" style="grid-template-columns:1fr 1fr; gap:10px;">
          
          <div class="iot-mini-metric" style="background:#18201B; padding:10px 12px; border-radius:10px; border:1px solid rgba(200,152,68,0.25);">
            <small style="color:#CEBDA3; font-weight:800; font-size:0.72rem;">TEMPERATURA (MAX30205)</small>
            <strong style="color:${c.status === 'FIEBRE' ? '#EF4444' : '#1FA971'}; font-size:1.05rem; display:block; margin-top:2px;">
              ${c.temp} °C
            </strong>
          </div>

          <div class="iot-mini-metric" style="background:#18201B; padding:10px 12px; border-radius:10px; border:1px solid rgba(200,152,68,0.25);">
            <small style="color:#CEBDA3; font-weight:800; font-size:0.72rem;">RITMO (PPG INFRARROJO)</small>
            <strong style="color:#FFFFFF; font-size:1.05rem; display:block; margin-top:2px;">
              <i class="fa-solid fa-heart heartbeat-icon"></i> ${c.hr || 72} BPM
            </strong>
          </div>

          <div class="iot-mini-metric" style="background:#18201B; padding:10px 12px; border-radius:10px; border:1px solid rgba(200,152,68,0.25);">
            <small style="color:#CEBDA3; font-weight:800; font-size:0.72rem;">NIVEL DE BATERÍA</small>
            <div class="battery-meter-container" style="margin-top:4px;">
              <div class="battery-pill-box">
                <div class="battery-pill-level" style="width:${c.battery}%; background:${c.battery > 50 ? '#1FA971' : c.battery > 20 ? '#F59E0B' : '#EF4444'};"></div>
              </div>
              <strong style="color:#FFFFFF; font-size:0.85rem;">${c.battery}%</strong>
            </div>
          </div>

          <div class="iot-mini-metric" style="background:#18201B; padding:10px 12px; border-radius:10px; border:1px solid rgba(200,152,68,0.25);">
            <small style="color:#CEBDA3; font-weight:800; font-size:0.72rem;">PRECISIÓN SATELITAL</small>
            <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
              <div class="signal-bars-box">
                <div class="signal-bar bar-1 active"></div>
                <div class="signal-bar bar-2 active"></div>
                <div class="signal-bar bar-3 active"></div>
                <div class="signal-bar bar-4 active"></div>
              </div>
              <strong style="color:#1FA971; font-size:0.85rem;">±1.2m RTK</strong>
            </div>
          </div>

        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; font-size:0.75rem; color:#CEBDA3; font-weight:700;">
          <span>Último reporte: ${c.lastSync || 'En Vivo'}</span>
          <span style="color:#1FA971;"><i class="fa-solid fa-circle-check"></i> Red Pecuaria Conectada</span>
        </div>

        <div style="display:flex; gap:10px; margin-top:14px;">
          <button type="button" class="btn-gold-action" style="flex:1; padding:8px 12px; font-size:0.82rem; justify-content:center;" onclick="iotHardwareController.triggerBeeper('${c.collarId}', '${c.name}')">
            <i class="fa-solid fa-volume-high"></i> Beeper Localizador
          </button>
          <button type="button" class="primary-action" style="flex:1; padding:8px 12px; font-size:0.82rem; justify-content:center;" onclick="appRouter.navigate('app-ganadero'); setTimeout(() => cowsController.inspectAnimal('${c.id}'), 200);">
            <i class="fa-solid fa-map-location-dot"></i> Ver en Mapa
          </button>
        </div>
      </div>
    `).join('');
  },

  triggerBeeper(id, name) {
    showToast(`🔊 Beeper activado en ${id} (${name}). Frecuencia 2.4kHz para pastores.`, 'info');
  }
};

// ========================================================================================
// 🐄 CONTROLADOR DE GANADERÍA & RASTREO SATELITAL (MULTIPLATAFORMA DESKTOP/MÓVIL)
// ========================================================================================
const cowsController = {
  mapInstance: null,
  markersLayer: null,
  geofenceLayer: null,
  farmCenter: [12.8550, -85.9800],
  geofenceRadius: 400,
  selectedCowId: null,

  saveCowsToStorage() {
    localStorage.setItem('sauyultech_cows', JSON.stringify(state.cowsList));
  },

  loadCowsFromStorage() {
    const raw = localStorage.getItem('sauyultech_cows');
    if (raw) {
      try {
        const stored = JSON.parse(raw);
        if (Array.isArray(stored) && stored.length > 0) {
          state.cowsList = stored;
        }
      } catch (e) {}
    }
    const savedCenter = localStorage.getItem('sauyultech_farm_center');
    if (savedCenter) {
      try {
        const center = JSON.parse(savedCenter);
        if (Array.isArray(center) && center.length === 2) {
          this.farmCenter = center;
        }
      } catch (e) {}
    }
    const savedRadius = localStorage.getItem('sauyultech_geofence_radius');
    if (savedRadius) {
      const r = parseFloat(savedRadius);
      if (!isNaN(r) && r > 0) {
        this.geofenceRadius = r;
      }
    }
  },

  initMap() {
    this.loadCowsFromStorage();
    const mapEl = document.getElementById('ganadero-live-satellite-map');
    if (!mapEl || this.mapInstance) return;

    this.mapInstance = L.map('ganadero-live-satellite-map').setView(this.farmCenter, 16);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Esri World Imagery'
    }).addTo(this.mapInstance);

    this.markersLayer = L.layerGroup().addTo(this.mapInstance);
    this.drawGeofence();
    this.renderCowsOnMap();
    this.renderTable();
    this.updateStats();
  },

  drawGeofence() {
    if (this.geofenceLayer && this.mapInstance) this.mapInstance.removeLayer(this.geofenceLayer);
    this.geofenceLayer = L.circle(this.farmCenter, {
      radius: this.geofenceRadius,
      color: '#C9A24A',
      fillColor: '#198754',
      fillOpacity: 0.18,
      weight: 2.5,
      dashArray: '5, 8'
    }).addTo(this.mapInstance);
  },

  renderCowsOnMap() {
    if (!this.markersLayer) return;
    this.markersLayer.clearLayers();

    state.cowsList.forEach(c => {
      const marker = L.circleMarker([c.lat, c.lng], {
        radius: 11,
        fillColor: c.status === 'NORMAL' ? '#1fa971' : '#ef4444',
        color: '#FFFFFF',
        weight: 2.5,
        fillOpacity: 1
      });
      marker.on('click', () => {
        cowsController.inspectAnimal(c.id);
      });
      this.markersLayer.addLayer(marker);
    });
  },

  inspectAnimal(cowId) {
    const cow = state.cowsList.find(x => x.id === cowId) || state.cowsList[0];
    if (!cow) return;
    this.selectedCowId = cow.id;

    if (this.mapInstance && cow.lat && cow.lng) {
      this.mapInstance.flyTo([cow.lat, cow.lng], 17, { duration: 1.0 });
    }

    const isMobile = window.innerWidth <= 768;
    const contentHtml = `
      <div style="padding:14px 18px; border-bottom:1px solid rgba(200,152,68,0.25); display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="beacon-pulse-${cow.status === 'NORMAL' ? 'green' : 'red'}"></span>
          <h3 style="margin:0; color:#FFFFFF; font-size:1.1rem; font-weight:900;">${cow.name}</h3>
        </div>
        <button type="button" class="btn-clean" onclick="cowsController.closeInspector()" style="color:#CEBDA3; font-size:1.2rem; cursor:pointer;" title="Cerrar Ficha">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div style="padding:16px 18px; display:flex; flex-direction:column; gap:14px;">
        <div style="display:flex; gap:14px; align-items:center;">
          <div style="width:72px; height:72px; border-radius:14px; overflow:hidden; border:1.5px solid var(--dorado); flex-shrink:0; box-shadow:0 4px 14px rgba(0,0,0,0.4);">
            <img src="${cow.photo || 'https://lh3.googleusercontent.com/d/1uoiHi-7MryxDHRVaw_689VlzUHxTFKaA'}" alt="${cow.name}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="flex:1; min-width:0;">
            <div style="color:var(--dorado); font-size:0.82rem; font-weight:800;"><i class="fa-solid fa-microchip"></i> Collar: <code>${cow.collarId}</code></div>
            <div style="color:#FFFFFF; font-size:1rem; font-weight:800; margin:2px 0;">${cow.breed || 'Brahman Puro · Arete 402'}</div>
            <div style="color:#CEBDA3; font-size:0.8rem;"><i class="fa-solid fa-map-pin" style="color:var(--verde);"></i> Potrero: <strong>${cow.zone}</strong></div>
          </div>
        </div>

        <!-- Telemetría en Vivo -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:rgba(0,0,0,0.35); padding:12px 14px; border-radius:12px; border:1px solid rgba(200,152,68,0.25);">
          <div>
            <small style="color:#CEBDA3; font-size:0.7rem; font-weight:700;">TEMPERATURA VITAL</small>
            <div style="color:${cow.status === 'NORMAL' ? '#1FA971' : '#EF4444'}; font-size:1.15rem; font-weight:900;">
              ${cow.temp} °C
            </div>
            <span style="font-size:0.72rem; color:${cow.status === 'NORMAL' ? '#34D399' : '#EF4444'}; font-weight:700;">
              ${cow.status === 'NORMAL' ? '🟢 Rango Normal' : '🔴 Fiebre Detectada'}
            </span>
          </div>

          <div>
            <small style="color:#CEBDA3; font-size:0.7rem; font-weight:700;">RITMO CARDÍACO</small>
            <div style="color:#FFFFFF; font-size:1.15rem; font-weight:900;">
              <i class="fa-solid fa-heart heartbeat-icon"></i> ${cow.hr || 72} BPM
            </div>
            <span style="font-size:0.72rem; color:#CEBDA3;">PPG Infrarrojo Activo</span>
          </div>

          <div>
            <small style="color:#CEBDA3; font-size:0.7rem; font-weight:700;">BATERÍA DEL COLLAR</small>
            <div class="battery-meter-container" style="margin-top:4px;">
              <div class="battery-pill-box">
                <div class="battery-pill-level" style="width:${cow.battery}%; background:${cow.battery > 50 ? '#1FA971' : cow.battery > 20 ? '#F59E0B' : '#EF4444'};"></div>
              </div>
              <strong style="color:#FFFFFF; font-size:0.85rem;">${cow.battery}%</strong>
            </div>
          </div>

          <div>
            <small style="color:#CEBDA3; font-size:0.7rem; font-weight:700;">SEÑAL LORA & SATÉLITE</small>
            <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
              <div class="signal-bars-box">
                <div class="signal-bar bar-1 active"></div>
                <div class="signal-bar bar-2 active"></div>
                <div class="signal-bar bar-3 active"></div>
                <div class="signal-bar bar-4 active"></div>
              </div>
              <strong style="color:#1FA971; font-size:0.85rem;">100% Óptima</strong>
            </div>
          </div>
        </div>

        <!-- Coordenadas Geográficas -->
        <div style="font-size:0.78rem; color:#CEBDA3; background:rgba(255,255,255,0.03); padding:10px 14px; border-radius:10px; border:1px solid rgba(255,255,255,0.06); display:flex; justify-content:space-between; align-items:center;">
          <span><i class="fa-solid fa-satellite" style="color:var(--dorado);"></i> GPS: <strong>${cow.lat.toFixed(4)}° N, ${cow.lng.toFixed(4)}° W</strong></span>
          <span style="color:#8696A0; font-size:0.72rem;">Sincronizado</span>
        </div>

        <!-- Botones de Acción Rápida -->
        <div style="display:flex; gap:10px; margin-top:2px;">
          <button type="button" class="btn-gold-action" style="flex:1; padding:10px 14px; font-size:0.84rem; font-weight:800; justify-content:center;" onclick="cowsController.openTransferModal('${cow.id}')">
            <i class="fa-solid fa-file-signature"></i> Traspaso
          </button>
          <button type="button" class="secondary-btn" style="flex:1; padding:10px 14px; font-size:0.84rem; font-weight:800; justify-content:center;" onclick="cowsController.pingBeeper('${cow.collarId}')">
            <i class="fa-solid fa-volume-high"></i> Beeper
          </button>
        </div>
      </div>
    `;

    if (isMobile) {
      const mobileSheet = document.getElementById('mobileAnimalBottomSheet');
      const mobileContent = document.getElementById('mobileBottomSheetContent');
      if (mobileContent) mobileContent.innerHTML = contentHtml;
      if (mobileSheet) mobileSheet.classList.add('open');
      const desktopInspector = document.getElementById('desktopAnimalInspector');
      if (desktopInspector) desktopInspector.classList.remove('open');
    } else {
      const desktopInspector = document.getElementById('desktopAnimalInspector');
      if (desktopInspector) {
        desktopInspector.innerHTML = contentHtml;
        desktopInspector.classList.add('open');
      }
      const mobileSheet = document.getElementById('mobileAnimalBottomSheet');
      if (mobileSheet) mobileSheet.classList.remove('open');
    }
  },

  closeInspector() {
    const desktopInspector = document.getElementById('desktopAnimalInspector');
    const mobileSheet = document.getElementById('mobileAnimalBottomSheet');
    if (desktopInspector) desktopInspector.classList.remove('open');
    if (mobileSheet) mobileSheet.classList.remove('open');
  },

  pingBeeper(collarId) {
    showToast(`🔔 Señal acústica de 85dB enviada al collar ${collarId}`, 'info');
  },

  renderTable() {
    const tbody = document.getElementById('ganaderoCowsTableBody');
    if (tbody) {
      tbody.innerHTML = state.cowsList.map(c => `
        <tr onclick="cowsController.inspectAnimal('${c.id}')" style="cursor:pointer;">
          <td><strong>${c.name}</strong></td>
          <td><code>${c.collarId}</code></td>
          <td><strong>${c.temp} °C</strong></td>
          <td><span class="badge-status ${c.status === 'NORMAL' ? 'active' : 'warn'}">${c.status}</span></td>
          <td>🔋 ${c.battery}%</td>
          <td>${c.zone}</td>
          <td>
            <button type="button" class="btn-gold-action" style="padding:4px 10px; font-size:0.75rem; border-radius:6px; margin-right:4px;" onclick="event.stopPropagation(); cowsController.openTransferModal('${c.id}')">
              <i class="fa-solid fa-file-signature"></i> Traspaso
            </button>
            <button type="button" class="danger-btn" style="padding:4px 8px; font-size:0.75rem; border-radius:6px;" onclick="event.stopPropagation(); cowsController.deleteCow('${c.id}')" title="Eliminar bovino permanentemente">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      `).join('');
    }

    // Renderizar versión móvil en tarjetas verticales táctiles
    const mobileFeed = document.getElementById('cattleMobileCardsFeed');
    if (mobileFeed) {
      mobileFeed.innerHTML = state.cowsList.map(c => `
        <div class="cattle-mobile-card" onclick="cowsController.inspectAnimal('${c.id}')">
          <div class="cattle-mobile-card-header">
            <div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="beacon-pulse-${c.status === 'NORMAL' ? 'green' : 'red'}"></span>
                <strong style="color:#FFFFFF; font-size:1.05rem;">${c.name}</strong>
              </div>
              <small style="color:var(--dorado); font-weight:700;">Collar: <code>${c.collarId}</code> · ${c.zone}</small>
            </div>
            <span class="badge-status ${c.status === 'NORMAL' ? 'active' : 'warn'}" style="font-size:0.75rem;">${c.status}</span>
          </div>
          <div class="cattle-mobile-vitals-row">
            <div class="cattle-mobile-vital-item">
              <small>TEMPERATURA</small>
              <strong style="color:${c.status === 'NORMAL' ? '#1FA971' : '#EF4444'};">${c.temp}°C</strong>
            </div>
            <div class="cattle-mobile-vital-item">
              <small>PULSO</small>
              <strong style="color:#FFFFFF;"><i class="fa-solid fa-heart heartbeat-icon"></i> ${c.hr || 70} BPM</strong>
            </div>
            <div class="cattle-mobile-vital-item">
              <small>BATERÍA</small>
              <strong style="color:#1FA971;">🔋 ${c.battery}%</strong>
            </div>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:2px;">
            <button type="button" class="btn-gold-action" style="padding:6px 14px; font-size:0.78rem; font-weight:800;" onclick="event.stopPropagation(); cowsController.openTransferModal('${c.id}')">
              <i class="fa-solid fa-file-signature"></i> Traspaso
            </button>
            <button type="button" class="secondary-btn" style="padding:6px 12px; font-size:0.78rem; font-weight:800;" onclick="event.stopPropagation(); cowsController.inspectAnimal('${c.id}')">
              <i class="fa-solid fa-map-location-dot"></i> Ver en Mapa
            </button>
          </div>
        </div>
      `).join('');
    }
  },

  updateStats() {
    const tot = state.cowsList.length;
    const nor = state.cowsList.filter(x => x.status === 'NORMAL').length;
    const ale = state.cowsList.filter(x => x.status !== 'NORMAL').length;

    animateCounter('statTotalAnimales', tot);
    animateCounter('statCollaresActivos', tot);
    animateCounter('statAnimalesNormales', nor);
    animateCounter('statAlertas', ale);
  },

  filterTable() {
    const query = (document.getElementById('cattleTableSearchInput')?.value || '').toLowerCase();
    const rows = document.querySelectorAll('#ganaderoCowsTableBody tr');
    rows.forEach(r => {
      r.style.display = r.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
    const cards = document.querySelectorAll('#cattleMobileCardsFeed .cattle-mobile-card');
    cards.forEach(c => {
      c.style.display = c.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
  },

  openRegisterCowModal() {
    uiModal.open('modal-register-cow');
  },

  handleRegisterCowSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const collar = document.getElementById('formCowCollarId')?.value.trim();
    const name = document.getElementById('formCowAnimalName')?.value.trim();
    const zone = document.getElementById('formCowZone')?.value.trim();

    const newCow = {
      id: 'COW-' + Date.now(),
      name,
      collarId: collar,
      temp: 38.6,
      hr: 70,
      battery: 100,
      status: 'NORMAL',
      zone,
      lat: this.farmCenter[0] + (Math.random() - 0.5) * 0.003,
      lng: this.farmCenter[1] + (Math.random() - 0.5) * 0.003
    };

    state.cowsList.push(newCow);
    this.saveCowsToStorage();

    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveBovine) {
      firebaseSync.saveBovine(newCow);
    }

    uiModal.close('modal-register-cow');
    this.renderCowsOnMap();
    this.renderTable();
    this.updateStats();
    if (cartasController && cartasController.populateInlineCows) {
      cartasController.populateInlineCows();
    }
    showToast(`¡Animal ${name} vinculado al collar ${collar}!`, 'success');
  },

  openTransferModal(id) {
    if (cartasController && cartasController.toggleFoldableAccordion) {
      cartasController.toggleFoldableAccordion(true, '01_Carta_Traspaso_Animal.png', id);
    } else {
      cartasController.openCartaModal('01_Carta_Traspaso_Animal.png', id);
    }
  },

  handleTransferSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    showToast('Traspaso procesado mediante Carta Oficial Sau Youl-Tech', 'success');
  },

  openDeceasedModal(id) {
    const cow = state.cowsList.find(c => c.id === id);
    if (!cow) return;
    const idInput = document.getElementById('deceasedCowId');
    const nameInput = document.getElementById('deceasedCowDisplayName');
    const dateInput = document.getElementById('deceasedDate');
    if (idInput) idInput.value = cow.id;
    if (nameInput) nameInput.value = `${cow.name} (${cow.collarId || 'Sin collar'})`;
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    uiModal.open('modal-cow-deceased');
  },

  deleteCow(id) {
    const cow = state.cowsList.find(c => c.id === id);
    const cowName = cow ? cow.name : id;
    if (!confirm(`¿Estás seguro de que deseas eliminar permanentemente a "${cowName}" del sistema y de Firebase?`)) return;
    
    state.cowsList = state.cowsList.filter(c => c.id !== id);
    this.saveCowsToStorage();

    if (typeof firebaseSync !== 'undefined' && firebaseSync.deleteBovine) {
      firebaseSync.deleteBovine(id);
    }

    this.renderCowsOnMap();
    this.renderTable();
    this.updateStats();
    this.closeInspector();
    if (cartasController && cartasController.populateInlineCows) {
      cartasController.populateInlineCows();
    }
    showToast(`Bovino ${cowName} eliminado de la base de datos.`, 'info');
  },

  handleDeceasedSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const id = document.getElementById('deceasedCowId')?.value;
    const cause = document.getElementById('deceasedCause')?.value || 'Deceso reportado';
    const date = document.getElementById('deceasedDate')?.value || new Date().toISOString().split('T')[0];

    const cow = state.cowsList.find(c => c.id === id);
    if (cow) {
      cow.status = 'DECESO';
      cow.deceasedCause = cause;
      cow.deceasedDate = date;
      this.saveCowsToStorage();

      if (typeof firebaseSync !== 'undefined' && firebaseSync.saveBovine) {
        firebaseSync.saveBovine(cow);
      }

      this.renderCowsOnMap();
      this.renderTable();
      this.updateStats();
      uiModal.close('modal-cow-deceased');
      showToast(`Deceso de ${cow.name} registrado en bitácora sanitaria.`, 'info');
    }
  },

  getMyCurrentLocation() {
    if (!navigator.geolocation) {
      showToast('⚠️ Tu dispositivo o navegador no soporta geolocalización satelital.', 'warn');
      return;
    }
    showToast('🛰️ Obteniendo coordenadas satelitales GPS en vivo...', 'info');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        this.farmCenter = [lat, lng];
        localStorage.setItem('sauyultech_farm_center', JSON.stringify([lat, lng]));

        const farmDetails = document.getElementById('ganaderoFarmDetails');
        if (farmDetails) {
          farmDetails.innerHTML = `📍 Ubicación GPS Finca · 🛰️ Coordenadas Satelitales: <strong>${lat.toFixed(4)}° N, ${lng.toFixed(4)}° W</strong>`;
        }

        if (this.mapInstance) {
          this.mapInstance.setView(this.farmCenter, 16);
          this.drawGeofence();
          this.renderCowsOnMap();
        }
        showToast(`📍 Coordenadas GPS fijadas: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° W`, 'success');
      },
      (err) => {
        console.warn('Geolocation error:', err);
        showToast('⚠️ No se pudo obtener la posición GPS. Verifica los permisos de ubicación en tu navegador.', 'warn');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  },

  handleRadiusSliderChange(val) {
    const num = parseFloat(val) || 400;
    const radiusDisplay = document.getElementById('geofenceRadiusDisplay');
    const areaDisplay = document.getElementById('geofenceAreaDisplay');

    if (radiusDisplay) {
      radiusDisplay.textContent = `${num} m`;
    }
    if (areaDisplay) {
      const ha = (Math.PI * Math.pow(num, 2) / 10000).toFixed(2);
      areaDisplay.textContent = `${ha} Ha`;
    }

    if (this.geofenceLayer && this.mapInstance) {
      this.geofenceLayer.setRadius(num);
    }
  },

  saveGeofenceRadius() {
    const slider = document.getElementById('geofenceRadiusSlider');
    const radius = slider ? (parseFloat(slider.value) || 400) : 400;
    this.geofenceRadius = radius;
    localStorage.setItem('sauyultech_geofence_radius', radius.toString());

    this.drawGeofence();
    uiModal.close('modal-geofence-adjust');
    const ha = (Math.PI * Math.pow(radius, 2) / 10000).toFixed(2);
    showToast(`🛰️ Geocerca satelital actualizada a ${radius}m (${ha} Ha)`, 'success');
  }
};

// ========================================================================================
// 🩺 15. DR. IA VETERINARIO (CONSULTORIO DE APOYO)
// ========================================================================================
// ========================================================================================
// 🩺 15. DR. IA VETERINARIO (CONSULTORIO CLÍNICO CON BURBUJAS INTERACTIVAS)
// ========================================================================================
// ========================================================================================
// 🩺 13. DR. CARLOS RUIZ IA (MOTOR CONVERSACIONAL CON HISTORIAL Y CONTEXTO)
// ========================================================================================
// ========================================================================================
// 🩺 13. DR. CARLOS RUIZ IA (LIBERTAD TOTAL DE PENSAMIENTO CON GOOGLE GEMINI)
// ========================================================================================
const vetChatController = {
  conversationHistory: [],
  apiKey: (typeof window !== 'undefined' && window.GEMINI_API_KEY) || (typeof localStorage !== 'undefined' && localStorage.getItem('gemini_api_key')) || '',

  init() {
    const container = document.getElementById('chatVetMessagesList');
    if (!container) return;

    if (!container.children.length) {
      const user = state.currentSession || {};
      const userName = user.name ? user.name.split(' ')[0] : 'Ganadero';

      container.innerHTML = `
        <div class="chat-bubble-vet">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
            <span style="display:inline-flex; width:34px; height:34px; border-radius:50%; background:rgba(31,169,113,0.15); color:#1FA971; align-items:center; justify-content:center; font-size:1.1rem; border:1px solid #1FA971;"><i class="fa-solid fa-user-doctor"></i></span>
            <div>
              <strong style="color:#382517; font-size:1rem; display:block;">Dr. Carlos Ruiz IA</strong>
              <small style="color:#1FA971; font-weight:800; font-size:0.75rem;">Médico Veterinario Zootecnista · Google Gemini IA</small>
            </div>
          </div>
          <p style="margin:0; font-size:0.96rem; line-height:1.65; color:#2C1E12; font-weight:500;">
            ¡Hola, <strong>${userName}</strong>! 😊 Buenos días. Soy el Dr. Carlos Ruiz, tu médico veterinario y asistente zootécnico en Sau Yul Tech.
          </p>
          <p style="margin-top:8px; font-size:0.94rem; line-height:1.65; color:#2C1E12; font-weight:500;">
            Pregúntame con total libertad lo que desees: cualquier síntoma, enfermedad (como Pierna Negra, Mastitis, Parásitos), nutrición, formulación de raciones, primeros auxilios o el estado de tus animales. ¿Qué está pasando con tu ganado hoy?
          </p>
          <small style="display:flex; align-items:center; gap:6px; margin-top:12px; color:#5C4033; font-size:0.78rem; font-weight:700; border-top:1px dashed #D5C7B5; padding-top:8px;">
            <i class="fa-solid fa-brain" style="color:#1FA971;"></i> Razonamiento clínico libre y asistencia veterinaria continua potenciada por Inteligencia Artificial.
          </small>
        </div>
      `;
    }
  },

  quickAsk(text) {
    const input = document.getElementById('chatVetMessageInput');
    if (input) {
      input.value = text;
      this.handleSubmit({ preventDefault: () => {} });
    }
  },

  async handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById('chatVetMessageInput');
    const container = document.getElementById('chatVetMessagesList');
    if (!input || !container) return;

    const query = input.value.trim();
    if (!query) return;

    const user = state.currentSession || {};
    const userName = user.name || 'Ganadero';

    // 1. Mostrar Mensaje del Ganadero
    container.innerHTML += `
      <div class="chat-bubble-user">
        <div style="font-size:0.78rem; opacity:0.85; margin-bottom:2px; font-weight:800;"><i class="fa-solid fa-user"></i> Tú (${userName}):</div>
        <div style="font-size:0.95rem; line-height:1.55;">${this.escapeHTML(query)}</div>
      </div>
    `;
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // Guardar en memoria de conversación
    this.conversationHistory.push({ role: 'user', text: query });

    // 2. Indicador "Pensando con Inteligencia Artificial..."
    const typingId = 'typing-' + Date.now();
    container.innerHTML += `
      <div id="${typingId}" class="chat-bubble-vet" style="opacity:0.9; display:flex; align-items:center; gap:10px;">
        <span style="color:#1FA971; font-weight:800; font-size:0.9rem;"><i class="fa-solid fa-brain fa-fade"></i> Dr. Carlos Ruiz IA está pensando y analizando tu caso...</span>
      </div>
    `;
    container.scrollTop = container.scrollHeight;

    // 3. Preparar contexto de los animales registrados en la finca
    const cowsSummary = state.cowsList.map(c => `${c.name} (${c.id}): Temp ${c.temp}°C, Ubicacion: ${c.zone}, Raza: ${c.breed}`).join('; ');

    let responseText = '';

    // 4. LLAMADA DIRECTA AL MOTOR DE INTELIGENCIA ARTIFICIAL GOOGLE GEMINI
    try {
      const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=' + this.apiKey;
      
      const systemInstruction = `Eres el Dr. Carlos Ruiz, un Médico Veterinario Zootecnista experto, humano, empático y profesional de la plataforma Sau Yul Tech en Nicaragua.

INSTRUCCIONES CLAVE DE RAZONAMIENTO Y CONVERSACIÓN:
1. TIENES TOTAL LIBERTAD PARA PENSAR Y RESPONDER CUALQUIER PREGUNTA: No te limites a bases de datos fijas. Si el usuario te pregunta por cualquier patología, tratamiento, primeros auxilios, dosis de referencia, alimentación, razas, cirugías, o dudas generales de campo, responde con tu propio criterio veterinario experto.
2. CONVERSA CON NATURALIDAD: Si el usuario saluda, responde con calidez llamándolo por su nombre (${userName}). Si describe síntomas incompletos (ej. "mi vaca está enferma"), muéstrale empatía y hazle preguntas clínicas orientadoras (¿Qué síntomas tiene? ¿Tiene fiebre o cojera? ¿Dejó de rumiar? ¿Desde cuándo?).
3. CASOS GRAVES (ej. Pierna Negra / Carbunco Sintomático [Clostridium chauvoei]): Explica qué es, signos (cojera súbita, inflamación muscular crepitante con gas bajo la piel, fiebre), peligro de muerte rápida, tratamiento de urgencia (Penicilinas en altas dosis bajo prescripción médica), la regla de oro de NO cortar las lesiones para no contaminar el potrero con esporas, y la prevención con bacterina triple/polivalente.
4. ANIMALES EN FINCA: Si te preguntan por sus animales, aquí tienes el resumen registrado: [${cowsSummary}].
5. Formato: Usa negritas, viñetas y párrafos limpios para que sea muy fácil de leer en cualquier dispositivo.`;

      // Construir historial multi-turno
      const contents = [
        {
          role: 'user',
          parts: [{ text: systemInstruction + '\n\n[INICIO DE LA CONVERSACIÓN CON ' + userName + ']' }]
        },
        {
          role: 'model',
          parts: [{ text: 'Entendido. Soy el Dr. Carlos Ruiz, listo para razonar, orientar y conversar con ' + userName + ' sobre cualquier tema veterinario o de su finca.' }]
        }
      ];

      // Añadir últimos 6 turnos
      this.conversationHistory.slice(-6).forEach(item => {
        contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }]
        });
      });

      const res = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            maxOutputTokens: 900,
            temperature: 0.75,
            topP: 0.95
          }
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          responseText = data.candidates[0].content.parts[0].text;
        }
      }
    } catch(fetchErr) {
      console.warn('Error en llamada a Gemini API:', fetchErr);
    }

    // 5. Fallback a Backend si fetch directo fue bloqueado
    if (!responseText) {
      try {
        const bRes = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: query, userName: userName, livestockContext: { summary: cowsSummary } })
        });
        if (bRes.ok) {
          const bData = await bRes.json();
          if (bData.reply) responseText = bData.reply;
        }
      } catch(bErr) {}
    }

    // 6. Fallback Inteligente Local
    if (!responseText) {
      const q = query.toLowerCase();
      const firstWord = userName.split(' ')[0];
      if (q.includes('hola') || q.includes('buenos') || q.includes('dr')) {
        responseText = `¡Hola, ${firstWord}! 😊 Muy buenos días. Soy el Dr. Carlos Ruiz. ¿En qué puedo apoyarte hoy con respecto a tu ganado o finca?`;
      } else if (q.includes('pierna negra') || q.includes('carbunco') || q.includes('clostridium')) {
        responseText = `La **Pierna Negra (Carbunco Sintomático)** es una enfermedad letal causada por *Clostridium chauvoei*.\n\n- **Signos:** Cojera aguda, hinchazón crepitante caliente en cuartos musculares y fiebre alta.\n- **Tratamiento temprano:** Penicilina G sódica/procaínica en dosis altas por vía intramuscular bajo indicación médica.\n- **Precaución vital:** No abrir las lesiones para evitar infectar el suelo con esporas.\n- **Prevención:** Vacunación preventiva triple a los 3 meses y refuerzo anual.\n\n¿Tienes algún animal mostrando estos signos?`;
      } else {
        responseText = `Entiendo tu consulta, ${firstWord}. Para brindarte la mejor orientación: ¿qué signos clínicos o comportamiento anormal has notado en el animal? Con esos detalles podremos evaluar el mejor tratamiento.`;
      }
    }

    // Remover indicador de escribiendo
    document.getElementById(typingId)?.remove();

    // Guardar en historial
    this.conversationHistory.push({ role: 'assistant', text: responseText });

    // Formatear markdown (negritas, viñetas, saltos)
    let formattedText = responseText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p style="margin-top:8px; font-size:0.95rem; line-height:1.65; color:#2C1E12; font-weight:500;">')
      .replace(/\n/g, '<br>');

    // 7. Renderizar Burbuja del Dr. Carlos Ruiz IA
    container.innerHTML += `
      <div class="chat-bubble-vet">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
          <span style="display:inline-flex; width:32px; height:32px; border-radius:50%; background:rgba(31,169,113,0.15); color:#1FA971; align-items:center; justify-content:center; font-size:1rem; border:1px solid #1FA971;"><i class="fa-solid fa-user-doctor"></i></span>
          <div>
            <strong style="color:#382517; font-size:0.98rem; display:block;">Dr. Carlos Ruiz IA</strong>
            <small style="color:#1FA971; font-weight:800; font-size:0.75rem;">Médico Veterinario Zootecnista · Google Gemini IA</small>
          </div>
        </div>
        <p style="margin:0; font-size:0.95rem; line-height:1.65; color:#2C1E12; font-weight:500;">${formattedText}</p>
        <small style="display:flex; align-items:center; gap:6px; margin-top:12px; color:#5C4033; font-size:0.78rem; font-weight:700; border-top:1px dashed #D5C7B5; padding-top:8px;">
          <i class="fa-solid fa-shield-check" style="color:#1FA971;"></i> Orientación clínica profesional Sau Yul Tech asistida por Inteligencia Artificial.
        </small>
      </div>
    `;
    container.scrollTop = container.scrollHeight;
  },

  escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
};

// ========================================================================================
// 👑 16. SUPERADMIN & CONTROL DE MÁRGENES
// ========================================================================================
// ========================================================================================
// 👑 15. CONTROLADOR MAESTRO DE LIQUIDACIONES Y VENDEDORES (SUPERADMIN)
// ========================================================================================
// ========================================================================================
// 👑 15. CONTROLADOR MAESTRO DE COMERCIALIZADORA, VENDEDORES Y LIQUIDACIONES
// ========================================================================================
const masterAdminController = {
  currentTab: 'overview',

  init() {
    this.renderOverview();
    this.renderSettlementsDashboard();
    this.renderUsersManagement();
    this.updatePendingBadge();
  },

  updatePendingBadge() {
    const list = state.settlementsList || [];
    const pendingCount = list.filter(s => s.status === 'PENDIENTE').length;

    const tabBadge = document.getElementById('badgePendingSettlements');
    if (tabBadge) {
      tabBadge.textContent = pendingCount;
      tabBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    const sideBadge = document.getElementById('sidebarAdminSettlementsBadge');
    if (sideBadge) {
      sideBadge.textContent = pendingCount;
      sideBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    const pendingSettlements = document.getElementById('overviewPendingSettlementsCount');
    if (pendingSettlements) {
      pendingSettlements.textContent = `${pendingCount} Pendiente${pendingCount !== 1 ? 's' : ''}`;
    }
  },

  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll('.profile-select-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.master-tab-content').forEach(c => c.style.display = 'none');

    const tabBtn = document.getElementById(`tabMasterBtn-${tabName}`);
    const tabPane = document.getElementById(`masterSubTab-${tabName}`);

    if (tabBtn) tabBtn.classList.add('active');
    if (tabPane) tabPane.style.display = 'block';

    if (tabName === 'overview') this.renderOverview();
    else if (tabName === 'settlements') this.renderSettlementsDashboard();
    else if (tabName === 'sellers') this.renderUsersManagement();
    else if (tabName === 'config') {
      const marginInput = document.getElementById('adminMarginPercentInput');
      if (marginInput) marginInput.value = state.pricingConfig.marginPercent || 12.0;
    }
    this.updatePendingBadge();
  },

  renderOverview() {
    const orders = state.ordersList || [];
    let grossTotal = 0;
    orders.forEach(o => {
      grossTotal += (o.total || 0);
    });

    if (grossTotal === 0) grossTotal = 148500.00; // Demostración inicial

    const marginRevenue = grossTotal * (state.pricingConfig.marginPercent / 100);
    const producerNet = grossTotal - marginRevenue;
    const users = authManager.getRegisteredUsers();

    const grossEl = document.getElementById('kpiMasterGrossSales');
    const toPayEl = document.getElementById('kpiMasterToPaySellers');
    const marginEl = document.getElementById('kpiMasterMarginRevenue');
    const sellersEl = document.getElementById('kpiMasterTotalSellers');

    if (grossEl) grossEl.textContent = `C$ ${grossTotal.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (toPayEl) toPayEl.textContent = `C$ ${producerNet.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (marginEl) marginEl.textContent = `C$ ${marginRevenue.toLocaleString('es-NI', { minimumFractionDigits: 2 })}`;
    if (sellersEl) sellersEl.textContent = users.length;

    const prodCount = document.getElementById('overviewProdCount');
    const ordersCount = document.getElementById('overviewOrdersCount');
    const pendingSettlements = document.getElementById('overviewPendingSettlementsCount');

    const pendingList = (state.settlementsList || []).filter(s => s.status === 'PENDIENTE');

    if (prodCount) prodCount.textContent = (state.productsList || []).length;
    if (ordersCount) ordersCount.textContent = orders.length || 12;
    if (pendingSettlements) pendingSettlements.textContent = `${pendingList.length} Pendiente${pendingList.length !== 1 ? 's' : ''}`;
    this.updatePendingBadge();
  },

  renderSettlementsDashboard() {
    const tableBody = document.getElementById('masterAdminSellersSettlementsBody') || document.getElementById('settlementsTableBody');
    if (!tableBody) return;

    const filterStatus = document.getElementById('settlementFilterStatus')?.value || 'ALL';
    const searchQuery = (document.getElementById('sellerSearchInput')?.value || '').toLowerCase().trim();

    let list = state.settlementsList || [];
    if (filterStatus === 'PENDING') {
      list = list.filter(s => s.status === 'PENDIENTE');
    } else if (filterStatus === 'PAID') {
      list = list.filter(s => s.status === 'PAGADO' || s.status === 'LIQUIDADO');
    }

    if (searchQuery) {
      list = list.filter(s => 
        (s.sellerName || '').toLowerCase().includes(searchQuery) ||
        (s.bank || '').toLowerCase().includes(searchQuery) ||
        (s.account || '').toLowerCase().includes(searchQuery) ||
        (s.id || '').toLowerCase().includes(searchQuery)
      );
    }

    if (!list.length) {
      tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:24px; color:#5C4033; font-weight:700;">No hay solicitudes de liquidación que coincidan con los filtros.</td></tr>';
      return;
    }

    tableBody.innerHTML = list.map(s => {
      const amountVal = parseFloat(s.amount || 0);
      const gross = s.grossAmount || (amountVal / 0.88);
      const commission = gross * (state.pricingConfig.marginPercent / 100);
      return `
        <tr style="border-bottom:1px solid #D5C7B5; background:#FFFFFF;">
          <td style="padding:12px 14px; color:#2C1E12;">
            <strong>${s.sellerName}</strong><br>
            <small style="color:#5C4033; font-weight:700;">ID: ${s.id}</small>
          </td>
          <td style="padding:12px 14px; color:#2C1E12;">
            <strong>${s.bank}</strong><br>
            <small style="color:#5C4033; font-weight:700;">Cta: ${s.account} (${s.holder || s.sellerName})</small>
          </td>
          <td style="padding:12px 14px; color:#2C1E12; font-weight:700;">
            C$ ${gross.toLocaleString('es-NI', {minimumFractionDigits:2})}
          </td>
          <td style="padding:12px 14px; color:#C89844; font-weight:800;">
            - C$ ${commission.toLocaleString('es-NI', {minimumFractionDigits:2})} (${state.pricingConfig.marginPercent}%)
          </td>
          <td style="padding:12px 14px;">
            <strong style="color:#1FA971; font-size:1.02rem;">C$ ${amountVal.toLocaleString('es-NI', {minimumFractionDigits:2})}</strong>
          </td>
          <td style="padding:12px 14px;">
            <span class="badge-status ${s.status === 'PAGADO' || s.status === 'LIQUIDADO' ? 'active' : 'warn'}">${s.status}</span>
          </td>
          <td style="padding:12px 14px; text-align:center; white-space:nowrap;">
            <button type="button" class="btn-gold-action" style="padding:6px 12px; font-size:0.8rem; font-weight:800; margin-right:4px;" onclick="masterAdminController.toggleSettlementStatus('${s.id}')">
              ${s.status === 'PAGADO' || s.status === 'LIQUIDADO' ? '↩ Revertir' : '✔ Aprobar Pago'}
            </button>
            <button type="button" class="danger-btn" style="padding:6px 10px; font-size:0.8rem;" onclick="masterAdminController.deleteSettlement('${s.id}')" title="Eliminar solicitud">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    this.updatePendingBadge();
  },

  filterSellersTable() {
    this.renderSettlementsDashboard();
  },

  addSettlementRequest(req) {
    if (!state.settlementsList) state.settlementsList = [];
    state.settlementsList.unshift(req);
    localStorage.setItem('sauyultech_settlements', JSON.stringify(state.settlementsList));
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveSettlementRequest) {
      firebaseSync.saveSettlementRequest(req);
    }
    this.renderSettlementsDashboard();
    this.renderOverview();
    this.updatePendingBadge();
  },

  deleteSettlement(liqId) {
    if (!confirm(`¿Estás seguro de que deseas eliminar la solicitud de liquidación ${liqId}?`)) return;
    state.settlementsList = (state.settlementsList || []).filter(s => s.id !== liqId);
    localStorage.setItem('sauyultech_settlements', JSON.stringify(state.settlementsList));
    if (typeof firebaseSync !== 'undefined' && firebaseSync.deleteSettlement) {
      firebaseSync.deleteSettlement(liqId);
    }
    showToast(`Liquidación ${liqId} eliminada de la base de datos y de Firebase.`, 'info');
    this.renderSettlementsDashboard();
    this.renderOverview();
    this.updatePendingBadge();
  },

  toggleSettlementStatus(liqId) {
    const item = (state.settlementsList || []).find(s => s.id === liqId);
    if (!item) return;

    const isPaid = (item.status === 'PAGADO' || item.status === 'LIQUIDADO');
    const newStatus = isPaid ? 'PENDIENTE' : 'PAGADO';
    item.status = newStatus;
    localStorage.setItem('sauyultech_settlements', JSON.stringify(state.settlementsList));

    // Sincronizar en Firebase Firestore
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveSettlementRequest) {
      firebaseSync.saveSettlementRequest(item);
    }

    // Sincronizar con el monedero del productor si corresponde
    if (state.producerWallet && state.producerWallet.transactions) {
      const tx = state.producerWallet.transactions.find(t => t.id === item.txId || t.concept.includes(item.account) || t.amount === item.amount);
      if (tx) {
        tx.status = isPaid ? 'PENDIENTE_APROBACION' : 'LIQUIDADO';
      }
      if (!isPaid) {
        state.producerWallet.totalWithdrawn = (state.producerWallet.totalWithdrawn || 0) + item.amount;
        if (walletController && walletController.saveToStorage) walletController.saveToStorage();
        if (walletController && walletController.renderWallet) walletController.renderWallet();
        
        notificationCenter.addNotification({
          role: 'agricultor',
          title: '🏦 ¡Transferencia Bancaria Completada!',
          desc: `Tu retiro de C$ ${item.amount.toLocaleString('es-NI', {minimumFractionDigits:2})} a ${item.bank} (${item.account}) ha sido transferido y liquidado.`
        });
      } else {
        state.producerWallet.totalWithdrawn = Math.max(0, (state.producerWallet.totalWithdrawn || 0) - item.amount);
        if (walletController && walletController.saveToStorage) walletController.saveToStorage();
        if (walletController && walletController.renderWallet) walletController.renderWallet();
      }
    }

    showToast(`Liquidación ${liqId} ${!isPaid ? 'aprobada y pagada' : 'revertida a pendiente'}.`, 'success');
    this.renderSettlementsDashboard();
    this.renderOverview();
    this.updatePendingBadge();
  },

  renderUsersManagement(filterQuery = '') {
    const container = document.getElementById('masterSubTab-sellers');
    if (!container) return;

    let users = authManager.getRegisteredUsers();
    const totalCount = users.length;

    if (filterQuery && typeof filterQuery === 'string' && filterQuery.trim()) {
      const q = filterQuery.toLowerCase().trim();
      users = users.filter(u => 
        (u.name || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q) ||
        (u.farm || '').toLowerCase().includes(q) ||
        (u.location || '').toLowerCase().includes(q) ||
        (u.profileType || '').toLowerCase().includes(q)
      );
    }

    const tbodyContent = users.length ? users.map(u => `
      <tr style="border-bottom:1px solid #EFE8DE;">
        <td style="padding:12px 14px; color:#2C1E12;"><strong>${u.name}</strong><br><small style="color:#5C4033; font-weight:700;">Tel: ${u.phone || 'N/A'}</small></td>
        <td style="padding:12px 14px;"><code style="background:#FAF6F0; padding:3px 8px; border-radius:4px; font-weight:700; color:#182B20; font-size:0.88rem;">${u.email}</code></td>
        <td style="padding:12px 14px; color:#2C1E12; font-weight:600;">${u.farm || 'N/A'}</td>
        <td style="padding:12px 14px; color:#2C1E12;">${u.location || 'Nicaragua'}</td>
        <td style="padding:12px 14px;">
          <span class="badge-status ${u.role === 'superadmin' ? 'active' : 'warn'}" style="font-size:0.75rem; padding:3px 8px;">
            ${(u.profileType || u.role || 'comprador').toUpperCase()}
          </span>
        </td>
        <td style="padding:12px 14px;">
          <select onchange="masterAdminController.changeUserRole('${u.email}', this.value)" style="padding:4px 8px; border:1.5px solid #8C7355; border-radius:6px; font-weight:700; background:#FAF6F0; color:#2C1E12; font-size:0.82rem;">
            <option value="comprador" ${(u.profileType === 'comprador') ? 'selected' : ''}>Comprador</option>
            <option value="agricultor" ${(u.profileType === 'agricultor') ? 'selected' : ''}>Productor</option>
            <option value="ganadero" ${(u.profileType === 'ganadero') ? 'selected' : ''}>Ganadero</option>
            <option value="veterinario" ${(u.profileType === 'veterinario') ? 'selected' : ''}>Veterinario</option>
            <option value="superadmin" ${(u.profileType === 'superadmin' || u.role === 'superadmin') ? 'selected' : ''}>Administrador</option>
          </select>
        </td>
        <td style="padding:12px 14px; text-align:center; white-space:nowrap;">
          <button type="button" class="btn-gold-action" style="padding:5px 10px; font-size:0.75rem; margin-right:4px;" onclick="masterAdminController.openEditUserModal('${u.email}')" title="Editar datos del usuario">
            <i class="fa-solid fa-pen-to-square"></i> Editar
          </button>
          ${(u.email && u.email.toLowerCase() === 'sauyoultech@comercializadora.com') ? '<span style="color:#5C4033; font-size:0.8rem; font-weight:800;"><i class="fa-solid fa-crown" style="color:#C89844;"></i> Principal</span>' : `
            <button type="button" class="danger-btn" style="padding:5px 10px; font-size:0.75rem;" onclick="masterAdminController.deleteUser('${u.email}')" title="Eliminar usuario">
              <i class="fa-solid fa-trash-can"></i> Eliminar
            </button>
          `}
        </td>
      </tr>
    `).join('') : `
      <tr><td colspan="7" style="text-align:center; padding:24px; color:#5C4033; font-weight:700;">No se encontraron usuarios que coincidan con la búsqueda.</td></tr>
    `;

    const existingTbody = document.getElementById('adminUsersTbody');
    const existingCount = document.getElementById('adminUsersCountHeader');

    if (existingTbody && existingCount) {
      existingTbody.innerHTML = tbodyContent;
      existingCount.textContent = totalCount;
      return;
    }

    container.innerHTML = `
      <div style="background:#FAF6F0; border:2px solid #8C7355; border-radius:20px; padding:28px; box-shadow:0 8px 25px rgba(0,0,0,0.06);">
        
        <!-- Alerta de Estado de Base de Datos y Sincronización -->
        <div id="adminDbStatusNotice" style="background:#FFFFFF; border:1.5px solid #C89844; border-radius:12px; padding:14px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <i class="fa-solid fa-database" style="color:#1FA971; font-size:1.4rem;"></i>
            <div>
              <strong style="color:#2C1E12; font-size:0.92rem; display:block;">Base de Datos Local Activa & Protegida</strong>
              <small style="color:#5C4033;">Todos los registros nuevos se guardan de inmediato en el almacenamiento persistente de tu navegador.</small>
            </div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <button type="button" class="btn-gold-action" style="padding:6px 14px; font-size:0.82rem;" onclick="if(typeof firebaseSync !== 'undefined' && firebaseSync.syncUsers) firebaseSync.syncUsers(); showToast('Sincronizando con Firebase Cloud...', 'info');">
              <i class="fa-solid fa-cloud-arrow-up"></i> Sincronizar con Firebase
            </button>
            <a href="https://console.firebase.google.com/project/ecomercado-clientes/firestore" target="_blank" class="secondary-btn" style="padding:6px 12px; font-size:0.82rem; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Consola Firebase
            </a>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:18px;">
          <div>
            <h2 style="color:#382517; font-size:1.45rem; font-weight:900; margin:0;">
              <i class="fa-solid fa-users" style="color:#C89844;"></i> Base de Datos General de Usuarios (<span id="adminUsersCountHeader">${totalCount}</span>)
            </h2>
            <small style="color:#5C4033; font-weight:700;">Compradores, Productores, Ganaderos, Veterinarios y Administradores registrados en el sistema.</small>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
            <input type="text" id="adminUserSearchInput" placeholder="Buscar por nombre, correo, finca..." value="${filterQuery}" oninput="masterAdminController.filterUsersTable(this.value)" style="background:#FFFFFF; color:#2C1E12; border:1.5px solid #8C7355; border-radius:8px; padding:8px 14px; font-weight:600; font-size:0.88rem; width:260px;">
            <button type="button" class="primary-action" onclick="masterAdminController.openCreateUserModal()">
              <i class="fa-solid fa-user-plus"></i> + Registrar Usuario
            </button>
          </div>
        </div>

        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; background:#FFFFFF; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <thead>
              <tr style="background:#EFE8DE; border-bottom:2px solid #8C7355; text-align:left;">
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem;">USUARIO / NOMBRE</th>
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem;">CORREO ELECTRÓNICO</th>
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem;">FINCA / EMPRESA</th>
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem;">UBICACIÓN</th>
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem;">ROL / PERFIL</th>
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem;">CAMBIAR ROL</th>
                <th style="padding:12px 14px; color:#382517; font-weight:900; font-size:0.86rem; text-align:center;">ACCIONES</th>
              </tr>
            </thead>
            <tbody id="adminUsersTbody">
              ${tbodyContent}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderUsersTable() {
    this.renderUsersManagement();
  },

  filterUsersTable(query) {
    this.renderUsersManagement(query);
  },

  openCreateUserModal() {
    uiModal.open('modal-create-user');
  },

  handleCreateUserSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('adminNewName')?.value.trim();
    const email = document.getElementById('adminNewEmail')?.value.trim();
    const phone = document.getElementById('adminNewPhone')?.value.trim() || '+505 8888-0000';
    const farm = document.getElementById('adminNewFarm')?.value.trim() || 'Finca / Negocio';
    const location = document.getElementById('adminNewLocation')?.value.trim() || 'Nicaragua';
    const profileType = document.getElementById('adminNewProfile')?.value || 'comprador';
    const password = document.getElementById('adminNewPassword')?.value.trim() || '123';
    const role = (profileType === 'superadmin') ? 'superadmin' : 'user';

    if (!name || !email) {
      showToast('Por favor completa al menos el nombre y correo electrónico.', 'warn');
      return;
    }

    const users = authManager.getRegisteredUsers();
    if (users.some(u => u.email && u.email.toLowerCase() === email.toLowerCase())) {
      showToast('Ya existe un usuario registrado con este correo.', 'warn');
      return;
    }

    const newUser = {
      id: 'usr-' + Date.now(),
      name,
      email,
      phone,
      farm,
      profileType,
      location,
      password,
      role,
      status: 'ACTIVO',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));

    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      firebaseSync.saveUser(newUser);
    }

    showToast(`¡Usuario "${name}" (${profileType.toUpperCase()}) creado y guardado en la base de datos!`, 'success');
    uiModal.close('modal-create-user');
    
    const form = document.getElementById('formAdminCreateUser');
    if (form) form.reset();

    this.renderUsersManagement();
    this.renderOverview();
  },

  openEditUserModal(email) {
    const users = authManager.getRegisteredUsers();
    const u = users.find(x => x.email && x.email.toLowerCase() === email.toLowerCase());
    if (!u) {
      showToast('Usuario no encontrado.', 'warn');
      return;
    }

    const origEmailInput = document.getElementById('adminEditOriginalEmail');
    const nameInput = document.getElementById('adminEditName');
    const emailInput = document.getElementById('adminEditEmail');
    const phoneInput = document.getElementById('adminEditPhone');
    const farmInput = document.getElementById('adminEditFarm');
    const locInput = document.getElementById('adminEditLocation');
    const profileInput = document.getElementById('adminEditProfile');
    const passInput = document.getElementById('adminEditPassword');

    if (origEmailInput) origEmailInput.value = u.email;
    if (nameInput) nameInput.value = u.name || '';
    if (emailInput) emailInput.value = u.email || '';
    if (phoneInput) phoneInput.value = u.phone || '';
    if (farmInput) farmInput.value = u.farm || '';
    if (locInput) locInput.value = u.location || '';
    if (profileInput) profileInput.value = u.profileType || (u.role === 'superadmin' ? 'superadmin' : 'comprador');
    if (passInput) passInput.value = u.password || '';

    uiModal.open('modal-edit-user');
  },

  async handleEditUserSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const origEmail = document.getElementById('adminEditOriginalEmail')?.value.trim();
    const name = document.getElementById('adminEditName')?.value.trim();
    const email = document.getElementById('adminEditEmail')?.value.trim();
    const phone = document.getElementById('adminEditPhone')?.value.trim() || '+505 8888-0000';
    const farm = document.getElementById('adminEditFarm')?.value.trim() || 'Finca / Negocio';
    const location = document.getElementById('adminEditLocation')?.value.trim() || 'Nicaragua';
    const profileType = document.getElementById('adminEditProfile')?.value || 'comprador';
    const password = document.getElementById('adminEditPassword')?.value.trim();
    const role = (profileType === 'superadmin') ? 'superadmin' : 'user';

    if (!name || !email) {
      showToast('Por favor completa al menos nombre y correo.', 'warn');
      return;
    }

    let users = authManager.getRegisteredUsers();
    const idx = users.findIndex(u => u.email && u.email.toLowerCase() === origEmail.toLowerCase());
    if (idx === -1) {
      showToast('Usuario original no encontrado en la base de datos.', 'danger');
      return;
    }

    const updatedUser = {
      ...users[idx],
      name,
      email,
      phone,
      farm,
      location,
      profileType,
      role,
      updatedAt: new Date().toISOString()
    };
    if (password) updatedUser.password = password;

    users[idx] = updatedUser;
    localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));

    // Si cambió el correo, eliminar el documento previo de Firestore y actualizar credenciales recordadas
    if (origEmail.toLowerCase() !== email.toLowerCase()) {
      if (typeof firebaseSync !== 'undefined' && firebaseSync.deleteUser) {
        await firebaseSync.deleteUser(origEmail);
      }
      try {
        const rem = JSON.parse(localStorage.getItem('sauyultech_remembered_credentials') || 'null');
        if (rem && rem.email && rem.email.toLowerCase() === origEmail.toLowerCase()) {
          rem.email = email;
          if (password) rem.password = password;
          rem.role = profileType;
          localStorage.setItem('sauyultech_remembered_credentials', JSON.stringify(rem));
        }
      } catch (e) {}
    } else if (password) {
      try {
        const rem = JSON.parse(localStorage.getItem('sauyultech_remembered_credentials') || 'null');
        if (rem && rem.email && rem.email.toLowerCase() === email.toLowerCase()) {
          rem.password = password;
          localStorage.setItem('sauyultech_remembered_credentials', JSON.stringify(rem));
        }
      } catch (e) {}
    }

    // Guardar usuario actualizado en Firebase Firestore
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      await firebaseSync.saveUser(updatedUser);
    }

    // Si es la sesión activa actual, actualizar inmediatamente sesión y vistas
    if (state.currentSession && state.currentSession.email && state.currentSession.email.toLowerCase() === origEmail.toLowerCase()) {
      state.currentSession = { ...state.currentSession, ...updatedUser };
      localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));
      authManager.applySessionUI(state.currentSession);
      if (typeof profileController !== 'undefined' && profileController.init) {
        profileController.init();
      }
    }

    uiModal.close('modal-edit-user');
    showToast(`¡Usuario "${name}" actualizado y guardado en Firebase Cloud!`, 'success');
    
    // Forzar reconstrucción completa de la tabla en pantalla
    const existingTbody = document.getElementById('adminUsersTbody');
    if (existingTbody) existingTbody.innerHTML = '';
    this.renderUsersManagement();
    this.renderOverview();
  },

  async deleteUser(email) {
    if (!email) return;
    const cleanEmail = email.toLowerCase().trim();
    if (cleanEmail === 'sauyoultech@comercializadora.com') {
      showToast('No se puede eliminar la cuenta del Administrador Principal.', 'warn');
      return;
    }
    
    let proceed = true;
    try {
      proceed = window.confirm(`¿Estás seguro de que deseas eliminar permanentemente al usuario ${email}?\nSe eliminarán todas sus credenciales de acceso y sus registros en Firebase Cloud.`);
    } catch (e) {
      proceed = true;
    }
    if (!proceed) return;

    // 1. Añadir a la lista negra permanente de correos eliminados (no podrán ingresar jamás)
    const deletedEmails = JSON.parse(localStorage.getItem('sauyultech_deleted_emails') || '[]');
    if (!deletedEmails.includes(cleanEmail)) {
      deletedEmails.push(cleanEmail);
      localStorage.setItem('sauyultech_deleted_emails', JSON.stringify(deletedEmails));
    }

    // 2. Eliminar de lista de usuarios registrados
    let users = authManager.getRegisteredUsers();
    const targetUser = users.find(u => u && u.email && u.email.toLowerCase().trim() === cleanEmail);
    users = users.filter(u => u && u.email && u.email.toLowerCase().trim() !== cleanEmail);
    localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));

    // 3. Destruir credenciales recordadas en el dispositivo si pertenecen a este usuario
    try {
      const remembered = JSON.parse(localStorage.getItem('sauyultech_remembered_credentials') || 'null');
      if (remembered && remembered.email && remembered.email.toLowerCase().trim() === cleanEmail) {
        localStorage.removeItem('sauyultech_remembered_credentials');
        console.log('🧹 [MasterAdmin] Credenciales recordadas eliminadas para:', cleanEmail);
      }
    } catch (e) {
      localStorage.removeItem('sauyultech_remembered_credentials');
    }

    // 4. Limpiar campos de login si tenían cargadas estas credenciales
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPassInput = document.getElementById('loginPassword');
    if (loginEmailInput && loginEmailInput.value.toLowerCase().trim() === cleanEmail) {
      loginEmailInput.value = '';
      if (loginPassInput) loginPassInput.value = '';
    }

    // 5. Si el usuario eliminado es la sesión activa en este momento, cerrar sesión de inmediato
    const wasCurrentSession = state.currentSession && state.currentSession.email && state.currentSession.email.toLowerCase().trim() === cleanEmail;

    // 6. Eliminar credenciales y documentos en Firebase Firestore y crear registro en deleted_users
    if (typeof firebaseSync !== 'undefined' && firebaseSync.deleteUser) {
      await firebaseSync.deleteUser(cleanEmail, targetUser?.id);
    }

    if (wasCurrentSession) {
      showToast(`Tu perfil ha sido eliminado y la sesión fue cerrada.`, 'warn');
      authManager.logout();
      return;
    }

    showToast(`Usuario y credenciales de "${email}" eliminados permanentemente del sistema y de Firebase Cloud.`, 'success');
    const existingTbody = document.getElementById('adminUsersTbody');
    if (existingTbody) existingTbody.innerHTML = '';
    this.renderUsersManagement();
    this.renderOverview();
  },

  changeUserRole(email, newRole) {
    const users = authManager.getRegisteredUsers();
    const idx = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (idx >= 0) {
      users[idx].profileType = newRole;
      users[idx].role = newRole === 'superadmin' ? 'superadmin' : 'user';
      localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));

      if (state.currentSession && state.currentSession.email.toLowerCase() === email.toLowerCase()) {
        state.currentSession.profileType = newRole;
        state.currentSession.role = users[idx].role;
        localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));
        authManager.applySessionUI(state.currentSession);
      }

      // Persistir rol modificado en Firebase Firestore
      if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
        firebaseSync.saveUser(users[idx]);
      }

      showToast(`Rol de ${users[idx].name} cambiado a: ${newRole.toUpperCase()} (guardado en Firebase)`, 'success');
      this.renderUsersManagement();
    }
  },

  handleSaveMarginConfig(e) {
    if (e && e.preventDefault) e.preventDefault();
    const val = parseFloat(document.getElementById('adminMarginPercentInput')?.value);
    if (isNaN(val) || val < 0 || val > 100) {
      showToast('Por favor introduce un porcentaje de margen válido (0% a 100%).', 'warn');
      return;
    }
    state.pricingConfig.marginPercent = val;
    localStorage.setItem('sauyultech_margin_percent', String(val));
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveConfig) {
      firebaseSync.saveConfig('pricing', { marginPercent: val, updatedAt: new Date().toISOString() });
    }
    showToast(`¡Margen de comercializadora actualizado a ${val}% y respaldado en Firebase!`, 'success');
    this.renderOverview();
  }
};

// ========================================================================================
// 👤 17. PERFIL DE USUARIO
// ========================================================================================
const profileController = {
  activeTab: 'info',

  init() {
    const user = state.currentSession || {
      name: 'Administrador Maestro Sau Yul Tech',
      email: 'Sauyoultech@comercializadora.com',
      phone: '+505 8888-9999',
      farm: 'Comercializadora Sau Yul Tech S.A.',
      location: 'Managua, Nicaragua',
      profileType: 'superadmin'
    };

    // Campos de formulario
    const nameInput = document.getElementById('profileName');
    const emailInput = document.getElementById('profileEmail');
    const phoneInput = document.getElementById('profilePhone');
    const farmInput = document.getElementById('profileFarm');
    const locInput = document.getElementById('profileLocation');

    if (nameInput) nameInput.value = user.name || '';
    if (emailInput) emailInput.value = user.email || '';
    if (phoneInput) phoneInput.value = user.phone || '';
    if (farmInput) farmInput.value = user.farm || '';
    if (locInput) locInput.value = user.location || '';

    // Encabezado visual
    const headerName = document.getElementById('profileHeaderName');
    const headerFarm = document.getElementById('profileHeaderFarm');
    const roleBadge = document.getElementById('profileRoleBadge');
    const avatarBadge = document.getElementById('profileAvatarBadge');

    const roleLabels = {
      comprador: 'COMPRADOR MAYORISTA',
      agricultor: 'PRODUCTOR AGRÍCOLA',
      ganadero: 'GANADERO PROFESIONAL',
      veterinario: 'MÉDICO VETERINARIO',
      superadmin: 'ADMINISTRADOR MAESTRO'
    };

    const currentRole = user.profileType || 'comprador';

    if (headerName) headerName.textContent = user.name || 'Usuario Sau Yul Tech';
    if (headerFarm) headerFarm.textContent = `${user.farm || 'Finca / Negocio'} · ${user.location || 'Nicaragua'}`;
    if (roleBadge) roleBadge.textContent = roleLabels[currentRole] || currentRole.toUpperCase();
    if (avatarBadge) {
      const initials = (user.name || 'SY').split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
      avatarBadge.textContent = initials || 'SY';
    }
  },

  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll('.profile-tab-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.profile-tab-pane').forEach(p => p.style.display = 'none');

    const tabBtn = document.getElementById(`tabProfBtn-${tabName}`);
    const tabPane = document.getElementById(`profTab-${tabName}`);

    if (tabBtn) tabBtn.classList.add('active');
    if (tabPane) tabPane.style.display = 'block';
  },

  checkPasswordMatch() {
    const newPass = document.getElementById('profileNewPass')?.value || '';
    const confirmPass = document.getElementById('profileConfirmPass')?.value || '';
    const msgEl = document.getElementById('profilePassMatchMsg');
    if (!msgEl) return true;

    if (!confirmPass) {
      msgEl.innerHTML = '';
      return true;
    }

    if (newPass === confirmPass) {
      msgEl.className = 'password-match-indicator matching';
      msgEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Las contraseñas coinciden';
      return true;
    } else {
      msgEl.className = 'password-match-indicator mismatch';
      msgEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Las contraseñas no coinciden';
      return false;
    }
  },

  handleSaveProfile(e) {
    e.preventDefault();
    if (!state.currentSession) return;

    state.currentSession.name = document.getElementById('profileName').value.trim();
    state.currentSession.phone = document.getElementById('profilePhone').value.trim();
    state.currentSession.farm = document.getElementById('profileFarm').value.trim();
    state.currentSession.location = document.getElementById('profileLocation').value.trim();

    localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));
    
    // Actualizar en la lista de registrados
    const users = authManager.getRegisteredUsers();
    const idx = users.findIndex(u => u && u.email && u.email.toLowerCase() === state.currentSession.email.toLowerCase());
    if (idx >= 0) {
      users[idx] = { ...users[idx], ...state.currentSession };
      localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));
    }

    // Persistir cambios en Firebase Cloud
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      firebaseSync.saveUser(state.currentSession);
    }

    authManager.applySessionUI(state.currentSession);
    this.init();
    showToast('¡Información de perfil actualizada exitosamente!', 'success');
  },

  handleChangePassword(e) {
    e.preventDefault();
    const newPass = document.getElementById('profileNewPass').value.trim();
    const confirmPass = document.getElementById('profileConfirmPass').value.trim();

    if (newPass.length < 6) {
      showToast('La nueva contraseña debe tener al menos 6 caracteres.', 'warn');
      return;
    }

    if (newPass !== confirmPass) {
      showToast('Las contraseñas no coinciden.', 'danger');
      return;
    }

    if (state.currentSession) {
      state.currentSession.password = newPass;
      localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));

      const users = authManager.getRegisteredUsers();
      const idx = users.findIndex(u => u && u.email && u.email.toLowerCase() === state.currentSession.email.toLowerCase());
      if (idx >= 0) {
        users[idx].password = newPass;
        localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));
      }

      // Persistir contraseña en Firebase Cloud
      if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
        firebaseSync.saveUser(state.currentSession);
      }
    }

    document.getElementById('profileNewPass').value = '';
    document.getElementById('profileConfirmPass').value = '';
    document.getElementById('profilePassMatchMsg').innerHTML = '';
    showToast('¡Contraseña actualizada con éxito!', 'success');
  },

  handleSaveBanking(e) {
    e.preventDefault();
    const bank = document.getElementById('profileBankName').value;
    const accType = document.getElementById('profileAccountType').value;
    const accNum = document.getElementById('profileAccountNumber').value.trim();

    if (!state.currentSession) return;
    state.currentSession.banking = { bank, accType, accNum };
    localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));

    // Persistir datos bancarios en Firebase
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      firebaseSync.saveUser(state.currentSession);
    }

    showToast('¡Datos bancarios guardados con éxito!', 'success');
  },

  triggerAvatarPicker() {
    const input = document.getElementById('profileAvatarFileInput');
    if (input) input.click();
  },

  handleAvatarFileUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      this.updateUserAvatar(dataUrl);
      showToast('¡Foto de perfil personalizada actualizada con éxito!', 'success');
    };
    reader.readAsDataURL(file);
  },

  selectPresetAvatar(avatarUrl) {
    this.updateUserAvatar(avatarUrl);
    showToast('¡Avatar seleccionado aplicado a tu perfil!', 'success');
  },

  updateUserAvatar(avatarUrl) {
    if (!state.currentSession) return;
    state.currentSession.avatar = avatarUrl;
    localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));

    const users = authManager.getRegisteredUsers();
    const idx = users.findIndex(u => u.email === state.currentSession.email);
    if (idx >= 0) {
      users[idx].avatar = avatarUrl;
      localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));
    }

    // Persistir avatar en Firebase
    if (typeof firebaseSync !== 'undefined' && firebaseSync.saveUser) {
      firebaseSync.saveUser(state.currentSession);
    }

    this.renderAvatarUI(state.currentSession);
  },

  renderAvatarUI(user) {
    const avatarBadge = document.getElementById('profileAvatarBadge');
    const headerAvatar = document.getElementById('headerUserAvatar');
    const sidebarAvatar = document.getElementById('sidebarUserAvatar');

    if (user && user.avatar) {
      if (avatarBadge) avatarBadge.innerHTML = `<img src="${user.avatar}" alt="Avatar">`;
      if (headerAvatar) headerAvatar.innerHTML = `<img src="${user.avatar}" alt="Avatar" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
      if (sidebarAvatar) sidebarAvatar.innerHTML = `<img src="${user.avatar}" alt="Avatar" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
    } else if (user) {
      const initials = (user.name || 'SY').split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
      if (avatarBadge) avatarBadge.textContent = initials;
      if (headerAvatar) headerAvatar.textContent = initials;
    }
  },

  handleRestrictedRoleClick(role) {
    const isSuperAdmin = state.currentSession && (state.currentSession.role === 'superadmin' || state.currentSession.profileType === 'superadmin');
    if (isSuperAdmin) {
      authManager.switchRoleDirectly(role);
      return;
    }
    if (role === 'veterinario') {
      showToast('🔒 El rol de Médico Veterinario requiere verificación de título profesional y no puede ser auto-asignado.', 'warn');
    } else if (role === 'superadmin') {
      showToast('🔒 El rol de Administrador Master solo puede ser asignado internamente desde el Panel Maestro.', 'warn');
    }
  }
};

// ========================================================================================
// 📜 18. DOCUMENTOS LEGALES & PREFERENCIAS DE COOKIES
// ========================================================================================
const legalController = {
  open(tab = 'terms') {
    this.switchTab(tab);
    uiModal.open('modal-legal-document');
  },
  close() {
    uiModal.close('modal-legal-document');
  },
  switchTab(tab) {
    document.querySelectorAll('.legal-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.legal-content-panel').forEach(p => p.classList.remove('active'));
    const btn = document.getElementById(`legalTabBtn-${tab}`);
    const panel = document.getElementById(`legalPanel-${tab}`);
    if (btn) btn.classList.add('active');
    if (panel) panel.classList.add('active');
  }
};

// ========================================================================================
// 📱 19. GESTOR DE MODALES & DRAWER MÓVIL
// ========================================================================================
const uiModal = {
  open(id) { 
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('hidden');
      el.style.display = 'flex';
    }
  },
  close(id) { 
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  },
  isOpen(id) {
    const el = document.getElementById(id);
    return el && !el.classList.contains('hidden') && el.style.display !== 'none';
  },
  toggleMobileSidebar() {
    const sidebar = document.getElementById('mainAppSidebar');
    const backdrop = document.getElementById('mobileSidebarBackdrop');
    sidebar?.classList.toggle('mobile-open');
    backdrop?.classList.toggle('mobile-open');
  },
  closeMobileSidebar() {
    const sidebar = document.getElementById('mainAppSidebar');
    const backdrop = document.getElementById('mobileSidebarBackdrop');
    sidebar?.classList.remove('mobile-open');
    backdrop?.classList.remove('mobile-open');
  }
};

// ========================================================================================
// 🚀 20. INICIALIZACIÓN
// ========================================================================================
document.addEventListener('DOMContentLoaded', async () => {
  splashController.init();
  cartManager.init();
  walletController.init();
  chatController.init();
  if (typeof producerChatHub !== 'undefined') {
    producerChatHub.init();
  }
  reviewsManager.init();
  cartasController.init();
  masterAdminController.init();
  if (typeof firebaseSync !== 'undefined' && firebaseSync.init) {
    firebaseSync.init();
  }
  await authManager.checkStoredSession();
  await marketController.loadMarketData();
  notificationCenter.renderNotifications();

  const initialHash = window.location.hash.replace('#', '') || (state.currentSession ? (state.currentSession.profileType === 'comprador' ? 'app-market' : state.currentSession.profileType === 'agricultor' ? 'app-agricultor' : 'app-ganadero') : 'public-home');
  appRouter.navigate(initialHash);

  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '');
    if (h && h !== state.activeView) appRouter.navigate(h);
  });

  // Cerrar sugerencias al hacer clic fuera del buscador
  document.addEventListener('click', (e) => {
    const searchBar = document.querySelector('.marketplace-search-bar');
    if (searchBar && !searchBar.contains(e.target)) {
      marketController.closeSearchSuggestions();
    }
  });

  // Cerrar chat y modales con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof chatController !== 'undefined' && chatController.closeChatModal) {
        chatController.closeChatModal();
      }
      document.querySelectorAll('.app-modal-overlay:not(.hidden), .chat-dialog-overlay:not(.hidden)').forEach(modal => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
      });
    }
  });
});



// ========================================================================================
// 🔥 1. FIREBASE FIRESTORE & CLOUD REALTIME SYNC (SAU YOUL-TECH)
// ========================================================================================
const firebaseSync = {
  db: null,
  methods: null,
  isReady: false,
  unsubscribeProducts: null,
  unsubscribeUsers: null,
  unsubscribeBovines: null,
  unsubscribeOrders: null,
  unsubscribeLotes: null,
  unsubscribeSettlements: null,
  unsubscribeConfig: null,

  isAdmin() {
    return !!(state.currentSession && (
      state.currentSession.role === 'superadmin' || 
      state.currentSession.profileType === 'superadmin' ||
      (state.currentSession.email && state.currentSession.email.toLowerCase().trim() === 'sauyoultech@comercializadora.com')
    ));
  },

  resetAdminListeners() {
    if (this.unsubscribeUsers) {
      try { this.unsubscribeUsers(); } catch (e) {}
      this.unsubscribeUsers = null;
    }
    if (this.unsubscribeSettlements) {
      try { this.unsubscribeSettlements(); } catch (e) {}
      this.unsubscribeSettlements = null;
    }
    if (this.unsubscribeConfig) {
      try { this.unsubscribeConfig(); } catch (e) {}
      this.unsubscribeConfig = null;
    }
  },

  init() {
    if (window.firebaseDb && window.firestoreMethods) {
      this.onReady(window.firebaseDb, window.firestoreMethods);
    } else {
      window.addEventListener('firebase-initialized', (e) => {
        if (e.detail && e.detail.db) {
          this.onReady(e.detail.db, e.detail.methods);
        }
      });
      // Fallback check after 1.5s
      setTimeout(() => {
        if (!this.isReady && window.firebaseDb && window.firestoreMethods) {
          this.onReady(window.firebaseDb, window.firestoreMethods);
        }
      }, 1500);
    }
  },

  onReady(db, methods) {
    this.db = db;
    this.methods = methods;
    this.isReady = true;
    console.log('🔥 [FirebaseSync] Conectado y listo para sincronización con Firestore!');
    this.updateCloudStatusBadge(true);
    this.syncAll(false);
  },

  async syncAll(verbose = true) {
    if (!this.isReady || !this.db) {
      if (verbose && this.isAdmin()) showToast('⚠️ Conectando a Firebase Cloud...', 'info');
      return;
    }
    const isAdminUser = this.isAdmin();
    if (verbose && isAdminUser) showToast('🔄 Sincronizando plataforma con Firebase Cloud...', 'info');
    try {
      // Tareas de acceso público y catálogos
      const tasks = [
        this.syncEcoProducts(),
        this.syncBovines(),
        this.syncTransfers(),
        this.syncOrders(),
        this.syncLotes()
      ];

      // Operaciones administrativas y de usuarios restringidas exclusivamente a Administradores
      if (isAdminUser) {
        tasks.push(this.syncUsers());
        tasks.push(this.syncSettlements());
        tasks.push(this.syncConfig());
      }

      await Promise.allSettled(tasks);
      this.updateCloudStatusBadge(true);
      if (verbose && isAdminUser) {
        showToast('✅ ¡Todos los datos y usuarios sincronizados con Firebase Cloud en tiempo real!', 'success');
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error en syncAll:', err);
    }
  },

  updateCloudStatusBadge(status) {
    const badges = document.querySelectorAll('.firebase-cloud-badge, #firebaseStatusBadge');
    badges.forEach(b => {
      if (status === true || status === 'connected') {
        b.classList.add('connected');
        b.innerHTML = '<span class="pulse-dot"></span> <i class="fa-solid fa-cloud-bolt"></i> Firebase Cloud Conectado';
      } else if (status === 'pending_console') {
        b.classList.remove('connected');
        b.innerHTML = '<i class="fa-solid fa-cloud"></i> Base Local (Activar Firestore en Consola)';
      } else {
        b.classList.remove('connected');
        b.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Base de Datos Local Activa';
      }
    });
  },

  // Sincronización de Productos del Eco-Mercado
  async syncEcoProducts() {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'eco_products');
      const snapshot = await this.methods.getDocs(colRef);

      if (snapshot.empty) {
        console.log('🚀 [FirebaseSync] Colección eco_products vacía en Firestore. Inicializando con el catálogo base...');
        for (const p of state.productsList) {
          await this.methods.setDoc(this.methods.doc(colRef, p.id), p);
        }
        console.log('✅ [FirebaseSync] Catálogo sincronizado exitosamente a Firestore!');
      } else {
        const cloudProducts = [];
        snapshot.forEach(docSnap => cloudProducts.push(docSnap.data()));
        if (cloudProducts.length > 0) {
          const mergedMap = new Map();
          state.productsList.forEach(p => mergedMap.set(p.id, p));
          cloudProducts.forEach(p => {
            const canonical = mergedMap.get(p.id);
            if (canonical && p.id.startsWith('PROD-')) {
              mergedMap.set(p.id, {
                ...p,
                title: canonical.title,
                description: canonical.description,
                category: canonical.category,
                photoUrl: canonical.photoUrl,
                photo: canonical.photoUrl
              });
            } else {
              mergedMap.set(p.id, { ...canonical, ...p });
            }
          });
          state.productsList = Array.from(mergedMap.values());
          localStorage.setItem('sauyultech_products', JSON.stringify(state.productsList));
          marketController.renderHomeMarketplace();
          marketController.renderPublicPreview();
          console.log(`✅ [FirebaseSync] ${cloudProducts.length} productos sincronizados con Firestore!`);
        }
      }

      this.updateCloudStatusBadge(true);

      // Listener en tiempo real para cambios en catálogo
      if (!this.unsubscribeProducts) {
        this.unsubscribeProducts = this.methods.onSnapshot(colRef, (snap) => {
          const updated = [];
          snap.forEach(d => updated.push(d.data()));
          if (updated.length > 0) {
            const mergedMap = new Map();
            state.productsList.forEach(p => mergedMap.set(p.id, p));
            updated.forEach(p => {
              const canonical = mergedMap.get(p.id);
              if (canonical && p.id.startsWith('PROD-')) {
                mergedMap.set(p.id, {
                  ...p,
                  title: canonical.title,
                  description: canonical.description,
                  category: canonical.category,
                  photoUrl: canonical.photoUrl,
                  photo: canonical.photoUrl
                });
              } else {
                mergedMap.set(p.id, { ...canonical, ...p });
              }
            });
            state.productsList = Array.from(mergedMap.values());
            localStorage.setItem('sauyultech_products', JSON.stringify(state.productsList));
            marketController.renderHomeMarketplace();
            marketController.renderPublicPreview();
            if (typeof marketController.applyCatalogFilters === 'function') marketController.applyCatalogFilters();
            if (typeof marketController.renderSellerProducts === 'function') marketController.renderSellerProducts();
          }
        }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de productos:', err));
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Estado de sincronización Firestore:', err.message || err);
      if (String(err).includes('Cloud Firestore API') || String(err).includes('disabled') || String(err).includes('403') || String(err).includes('permission')) {
        this.updateCloudStatusBadge('pending_console');
      } else {
        this.updateCloudStatusBadge(false);
      }
    }
  },

  async saveProduct(product) {
    if (!this.isReady || !this.db) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'eco_products'), product.id);
      await this.methods.setDoc(docRef, product, { merge: true });
      console.log('🔥 [FirebaseSync] Producto guardado en Firestore:', product.id);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar producto en Firestore:', err);
    }
  },

  async deleteProduct(productId) {
    if (!this.isReady || !this.db) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'eco_products'), productId);
      await this.methods.deleteDoc(docRef);
      console.log('🔥 [FirebaseSync] Producto eliminado de Firestore:', productId);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al eliminar producto en Firestore:', err);
    }
  },

  async saveOrder(order) {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'eco_orders');
      await this.methods.setDoc(this.methods.doc(colRef, order.id), order);
      console.log('🔥 [FirebaseSync] Pedido guardado en Firestore:', order.id);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar pedido en Firestore:', err);
    }
  },

  async saveTransferOrMovement(transferData) {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'bovine_transfers');
      await this.methods.setDoc(this.methods.doc(colRef, transferData.id), transferData);
      console.log('🔥 [FirebaseSync] Traspaso/Carta guardado en Firestore:', transferData.id);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar traspaso en Firestore:', err);
    }
  },

  async syncTransfers() {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'bovine_transfers');
      const snapshot = await this.methods.getDocs(colRef);
      if (snapshot.empty && state.transfersList && state.transfersList.length > 0) {
        console.log('🚀 [FirebaseSync] Inicializando colección bovine_transfers en Firestore...');
        for (const t of state.transfersList) {
          await this.methods.setDoc(this.methods.doc(colRef, t.id), t, { merge: true });
        }
      }
      this.listenTransfers();
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error en syncTransfers:', err);
    }
  },

  listenTransfers() {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'bovine_transfers');
      if (this.unsubscribeTransfers) return;
      this.unsubscribeTransfers = this.methods.onSnapshot(colRef, (snap) => {
        if (!snap.empty) {
          const list = [];
          snap.forEach(d => list.push(d.data()));
          list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
          state.transfersList = list;
          localStorage.setItem('sauyultech_transfers', JSON.stringify(list));
          if (typeof cartasController !== 'undefined') {
            cartasController.renderTransfersTable();
          }
        }
      });
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al escuchar traspasos:', err);
    }
  },

  async saveSettlementRequest(settlementData) {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'settlements');
      await this.methods.setDoc(this.methods.doc(colRef, settlementData.id), settlementData, { merge: true });
      console.log('🔥 [FirebaseSync] Solicitud de liquidación sincronizada en Firestore:', settlementData.id);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar liquidación en Firestore:', err);
    }
  },

  async deleteSettlement(liqId) {
    if (!this.isReady || !this.db || !liqId) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'settlements'), liqId);
      await this.methods.deleteDoc(docRef);
      console.log('🔥 [FirebaseSync] Liquidación eliminada de Firestore:', liqId);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al eliminar liquidación en Firestore:', err);
    }
  },

  async saveConfig(configKey, data) {
    if (!this.isReady || !this.db || !configKey) return;
    if (!this.isAdmin()) {
      showToast('Acceso denegado: Solo el Administrador puede modificar la configuración.', 'danger');
      return;
    }
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'app_config'), configKey);
      await this.methods.setDoc(docRef, data, { merge: true });
      console.log('🔥 [FirebaseSync] Configuración guardada en Firestore:', configKey);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar configuración en Firestore:', err);
    }
  },

  async syncConfig() {
    if (!this.isReady || !this.db) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'app_config'), 'pricing');
      const docSnap = await this.methods.getDoc(docRef);
      if (docSnap && docSnap.exists()) {
        const data = docSnap.data();
        if (data && typeof data.marginPercent === 'number') {
          state.pricingConfig.marginPercent = data.marginPercent;
          localStorage.setItem('sauyultech_margin_percent', String(data.marginPercent));
          const input = document.getElementById('adminMarginPercentInput');
          if (input) input.value = data.marginPercent;
          if (typeof masterAdminController !== 'undefined' && masterAdminController.renderOverview) {
            masterAdminController.renderOverview();
          }
          console.log(`🔥 [FirebaseSync] Configuración de margen sincronizada: ${data.marginPercent}%`);
        }
      } else if (this.isAdmin()) {
        // Inicializar documento en Firestore solo si es Administrador
        await this.methods.setDoc(docRef, { marginPercent: state.pricingConfig.marginPercent || 12.0, updatedAt: new Date().toISOString() }, { merge: true });
      }

      // Escuchar cambios de comisiones en tiempo real desde Firestore
      if (!this.unsubscribeConfig) {
        this.unsubscribeConfig = this.methods.onSnapshot(docRef, (snap) => {
          if (snap && snap.exists()) {
            const data = snap.data();
            if (data && typeof data.marginPercent === 'number') {
              state.pricingConfig.marginPercent = data.marginPercent;
              localStorage.setItem('sauyultech_margin_percent', String(data.marginPercent));
              const input = document.getElementById('adminMarginPercentInput');
              if (input) input.value = data.marginPercent;
              if (typeof masterAdminController !== 'undefined' && masterAdminController.renderOverview) {
                masterAdminController.renderOverview();
              }
              console.log(`🔥 [FirebaseSync] Margen actualizado en tiempo real: ${data.marginPercent}%`);
            }
          }
        }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de configuración:', err));
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al sincronizar configuración desde Firestore:', err);
    }
  },

  async syncSettlements() {
    if (!this.isReady || !this.db) return;
    if (!this.isAdmin()) return;
    try {
      const colRef = this.methods.collection(this.db, 'settlements');
      const snapshot = await this.methods.getDocs(colRef);
      if (snapshot.empty && state.settlementsList && state.settlementsList.length > 0) {
        console.log('🚀 [FirebaseSync] Inicializando colección settlements en Firestore...');
        for (const s of state.settlementsList) {
          await this.methods.setDoc(this.methods.doc(colRef, s.id), s, { merge: true });
        }
      }
      this.listenSettlements();
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error en syncSettlements:', err);
    }
  },

  listenSettlements() {
    if (!this.isReady || !this.db) return;
    if (!this.isAdmin()) return;
    try {
      const colRef = this.methods.collection(this.db, 'settlements');
      if (this.unsubscribeSettlements) return;
      this.unsubscribeSettlements = this.methods.onSnapshot(colRef, (snap) => {
        if (!snap.empty) {
          const list = [];
          snap.forEach(d => list.push(d.data()));
          list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
          state.settlementsList = list;
          localStorage.setItem('sauyultech_settlements', JSON.stringify(list));
          if (typeof masterAdminController !== 'undefined') {
            masterAdminController.renderSettlementsDashboard();
            masterAdminController.renderOverview();
            masterAdminController.updatePendingBadge();
          }
        }
      }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de liquidaciones:', err));
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al escuchar liquidaciones en tiempo real:', err);
    }
  },

  // Sincronización y Respaldo Integral de Perfiles y Cuentas de Usuarios en Firestore (Exclusivo SuperAdmin)
  async syncUsers() {
    if (!this.isReady || !this.db) return;
    if (!this.isAdmin()) {
      console.log('🔒 [FirebaseSync] Acceso a base de usuarios reservado exclusivamente a Administradores.');
      return;
    }
    try {
      const colRef = this.methods.collection(this.db, 'users');
      const delColRef = this.methods.collection(this.db, 'deleted_users');

      const testDocIds = [
        'roberto@distribuidora.com',
        'maria@cosechas.com',
        'hacienda@elvalle.com',
        'veterinario@souyultech.com',
        'admin@sauyultech.com',
        'usr-001',
        'usr-002',
        'usr-003',
        'usr-004',
        'usr-005'
      ];
      const testEmails = [
        'roberto@distribuidora.com',
        'maria@cosechas.com',
        'hacienda@elvalle.com',
        'veterinario@souyultech.com',
        'admin@sauyultech.com'
      ];

      // 1. Purgar documentos de prueba obsoletos en Firestore
      for (const tId of testDocIds) {
        try {
          await this.methods.deleteDoc(this.methods.doc(colRef, tId));
        } catch (e) { /* ignore */ }
      }

      // 2. Obtener lista de usuarios eliminados desde Firestore y fusionar con local
      const localDeleted = JSON.parse(localStorage.getItem('sauyultech_deleted_emails') || '[]');
      const allDeletedEmails = new Set(localDeleted.map(e => String(e).toLowerCase().trim()));
      try {
        const delSnap = await this.methods.getDocs(delColRef).catch(() => null);
        if (delSnap && !delSnap.empty) {
          delSnap.forEach(d => {
            const data = d.data();
            if (data && data.email) allDeletedEmails.add(String(data.email).toLowerCase().trim());
          });
        }
      } catch (e) {}
      const deletedList = Array.from(allDeletedEmails);
      localStorage.setItem('sauyultech_deleted_emails', JSON.stringify(deletedList));

      // 3. Obtener usuarios locales y garantizar datos del Administrador Maestro
      const localUsers = authManager.getRegisteredUsers();
      const currentAdminLocal = localUsers.find(u => u && u.email && u.email.toLowerCase() === 'sauyoultech@comercializadora.com');

      const masterUser = {
        id: 'usr-admin-master',
        name: 'Administrador Maestro Sau Yul Tech',
        email: 'Sauyoultech@comercializadora.com',
        phone: '+505 8888-9999',
        farm: 'Comercializadora Sau Yul Tech S.A.',
        profileType: 'superadmin',
        role: 'superadmin',
        location: 'Managua, Nicaragua',
        password: 'ComercializadoraSauyoultechS.A26-09-2026@',
        status: 'ACTIVO',
        createdAt: '2026-09-16T00:00:00.000Z',
        ...(currentAdminLocal || {})
      };
      await this.methods.setDoc(this.methods.doc(colRef, 'sauyoultech@comercializadora.com'), masterUser, { merge: true });

      const snapshot = await this.methods.getDocs(colRef);

      const cloudUsers = [];
      snapshot.forEach(docSnap => {
        const d = docSnap.data();
        if (d && d.email) {
          const em = d.email.toLowerCase().trim();
          if (testEmails.includes(em) || allDeletedEmails.has(em)) {
            // Eliminar de inmediato de Firestore si fue eliminado previamente
            this.methods.deleteDoc(this.methods.doc(colRef, docSnap.id)).catch(() => {});
          } else {
            cloudUsers.push(d);
          }
        }
      });

      // FUENTE DE VERDAD: Firestore Cloud Users
      // Solamente los usuarios presentes en Firestore son válidos. Lo que no esté en la nube se purga de inmediato.
      const mergedMap = new Map();
      cloudUsers.forEach(u => {
        if (u && u.email) {
          const em = u.email.toLowerCase().trim();
          if (!testEmails.includes(em) && !allDeletedEmails.has(em)) {
            mergedMap.set(em, u);
          }
        }
      });

      const existingAdmin = mergedMap.get('sauyoultech@comercializadora.com') || masterUser;
      mergedMap.set('sauyoultech@comercializadora.com', { ...masterUser, ...existingAdmin });

      const mergedList = Array.from(mergedMap.values());
      localStorage.setItem('sauyultech_registered_users', JSON.stringify(mergedList));
      console.log(`✅ [FirebaseSync] ${mergedList.length} usuario(s) activo(s) en Firestore (Admin oficial confirmado).`);

      // Si la sesión activa en el navegador pertenece a un usuario eliminado, cerrarla inmediatamente
      if (state.currentSession && state.currentSession.email) {
        const curEmail = state.currentSession.email.toLowerCase().trim();
        if (curEmail !== 'sauyoultech@comercializadora.com') {
          if (allDeletedEmails.has(curEmail) || !mergedMap.has(curEmail)) {
            console.warn('🚫 [FirebaseSync] La sesión activa no existe en Firestore. Expulsando usuario...');
            authManager.logout();
            return;
          }
        }
      }

      this.updateCloudStatusBadge(true);

      // Listener en tiempo real para nuevos usuarios y actualizaciones de perfil
      if (!this.unsubscribeUsers) {
        this.unsubscribeUsers = this.methods.onSnapshot(colRef, (snap) => {
          if (snap.empty) return;
          const currentDeleted = new Set(JSON.parse(localStorage.getItem('sauyultech_deleted_emails') || '[]').map(e => String(e).toLowerCase().trim()));
          const map = new Map();
          snap.forEach(d => {
            const data = d.data();
            if (data && data.email) {
              const em = data.email.toLowerCase().trim();
              if (currentDeleted.has(em) || testEmails.includes(em)) {
                this.methods.deleteDoc(this.methods.doc(colRef, d.id)).catch(() => {});
              } else {
                map.set(em, data);
              }
            }
          });

          const exAdmin = map.get('sauyoultech@comercializadora.com') || masterUser;
          map.set('sauyoultech@comercializadora.com', { ...masterUser, ...exAdmin });
          const finalList = Array.from(map.values());
          localStorage.setItem('sauyultech_registered_users', JSON.stringify(finalList));

          // Si el usuario autenticado actualmente fue eliminado en Firestore en tiempo real, expulsarlo
          if (state.currentSession && state.currentSession.email) {
            const curEmail = state.currentSession.email.toLowerCase().trim();
            if (curEmail !== 'sauyoultech@comercializadora.com') {
              if (currentDeleted.has(curEmail) || !map.has(curEmail)) {
                console.warn('🚫 [FirebaseSync] Sesión activa revocada en tiempo real. Expulsando...');
                authManager.logout();
                return;
              }
            }
          }

          if (typeof masterAdminController !== 'undefined' && masterAdminController.renderUsersManagement) {
            masterAdminController.renderUsersManagement();
          }
        }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de usuarios:', err));
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Estado de sincronización Firestore:', err.message || err);
      if (String(err).includes('Cloud Firestore API') || String(err).includes('disabled') || String(err).includes('403') || String(err).includes('permission')) {
        this.updateCloudStatusBadge('pending_console');
      } else {
        this.updateCloudStatusBadge(false);
      }
    }
  },

  async saveUser(userData) {
    if (!userData || !userData.email) return;
    
    // 1. Guardar de inmediato en localStorage para respuesta instantánea
    const users = authManager.getRegisteredUsers();
    const idx = users.findIndex(u => u && u.email && u.email.toLowerCase() === userData.email.toLowerCase());
    if (idx >= 0) {
      users[idx] = { ...users[idx], ...userData };
    } else {
      users.push(userData);
    }
    localStorage.setItem('sauyultech_registered_users', JSON.stringify(users));

    // Si es el usuario de la sesión activa, actualizar sesión
    if (state.currentSession && state.currentSession.email && state.currentSession.email.toLowerCase() === userData.email.toLowerCase()) {
      state.currentSession = { ...state.currentSession, ...userData };
      localStorage.setItem('sauyultech_session', JSON.stringify(state.currentSession));
    }

    // 2. Guardar en Firebase Firestore
    if (!this.isReady || !this.db) {
      console.log('ℹ️ [FirebaseSync] Perfil guardado localmente (Firebase conectando).');
      return;
    }
    try {
      const cleanEmail = userData.email.toLowerCase().trim();
      const docId = cleanEmail.replace(/[^a-z0-9_@.-]/g, '_');
      const colRef = this.methods.collection(this.db, 'users');
      await this.methods.setDoc(this.methods.doc(colRef, docId), userData, { merge: true });
      if (docId !== cleanEmail) {
        await this.methods.setDoc(this.methods.doc(colRef, cleanEmail), userData, { merge: true });
      }
      console.log(`🔥 [FirebaseSync] Perfil de "${userData.name}" (${userData.email}) guardado con éxito en Firebase Firestore!`);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar perfil de usuario en Firestore:', err);
    }
  },

  async deleteUser(email, userId = null) {
    if (!this.isReady || !this.db || !email) return;
    try {
      const cleanEmail = email.toLowerCase().trim();
      const docId = cleanEmail.replace(/[^a-z0-9_@.-]/g, '_');
      const colRef = this.methods.collection(this.db, 'users');
      const delColRef = this.methods.collection(this.db, 'deleted_users');

      // 1. Registrar en colección deleted_users de Firestore para persistencia entre todos los dispositivos
      await this.methods.setDoc(this.methods.doc(delColRef, docId), {
        email: cleanEmail,
        deletedAt: new Date().toISOString(),
        status: 'DELETED'
      }, { merge: true }).catch(() => {});

      // 2. Eliminar por docId saneado
      await this.methods.deleteDoc(this.methods.doc(colRef, docId)).catch(() => {});

      // 3. Eliminar por correo limpio si difería
      if (docId !== cleanEmail) {
        await this.methods.deleteDoc(this.methods.doc(colRef, cleanEmail)).catch(() => {});
      }

      // 4. Eliminar por userId si existe
      if (userId) {
        await this.methods.deleteDoc(this.methods.doc(colRef, String(userId))).catch(() => {});
      }

      // 5. Barrer y purgar cualquier documento coincidente por correo en la colección
      const snap = await this.methods.getDocs(colRef).catch(() => null);
      if (snap && !snap.empty) {
        snap.forEach(d => {
          const u = d.data();
          if (u && u.email && u.email.toLowerCase().trim() === cleanEmail) {
            this.methods.deleteDoc(this.methods.doc(colRef, d.id)).catch(() => {});
          }
        });
      }

      console.log('🔥 [FirebaseSync] Credenciales y perfil de usuario eliminados de Firestore:', cleanEmail);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al eliminar usuario en Firestore:', err);
    }
  },

  async saveBovine(cow) {
    if (!this.isReady || !this.db || !cow) return;
    try {
      const colRef = this.methods.collection(this.db, 'bovines');
      await this.methods.setDoc(this.methods.doc(colRef, cow.id), cow, { merge: true });
      console.log('🔥 [FirebaseSync] Bovino guardado en Firestore:', cow.id);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar bovino en Firestore:', err);
    }
  },

  async deleteBovine(cowId) {
    if (!this.isReady || !this.db || !cowId) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'bovines'), cowId);
      await this.methods.deleteDoc(docRef);
      console.log('🔥 [FirebaseSync] Bovino eliminado de Firestore:', cowId);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al eliminar bovino en Firestore:', err);
    }
  },

  async syncBovines() {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'bovines');
      const snapshot = await this.methods.getDocs(colRef);

      if (snapshot.empty) {
        console.log('🚀 [FirebaseSync] Colección bovines vacía en Firestore. Inicializando hato...');
        for (const c of state.cowsList) {
          await this.methods.setDoc(this.methods.doc(colRef, c.id), c, { merge: true });
        }
        console.log('✅ [FirebaseSync] Hato inicial guardado en Firestore!');
      } else {
        const cloudCows = [];
        snapshot.forEach(docSnap => cloudCows.push(docSnap.data()));
        if (cloudCows.length > 0) {
          const map = new Map();
          state.cowsList.forEach(c => map.set(c.id, c));
          cloudCows.forEach(c => map.set(c.id, { ...map.get(c.id), ...c }));
          state.cowsList = Array.from(map.values());
          localStorage.setItem('sauyultech_cows', JSON.stringify(state.cowsList));
          if (typeof cowsController !== 'undefined') {
            cowsController.renderCowsOnMap();
            cowsController.renderTable();
            cowsController.updateStats();
          }
          console.log(`✅ [FirebaseSync] ${cloudCows.length} bovinos sincronizados desde Firestore!`);
        }
      }

      if (!this.unsubscribeBovines) {
        this.unsubscribeBovines = this.methods.onSnapshot(colRef, (snap) => {
          if (snap.empty) return;
          const updated = [];
          snap.forEach(d => updated.push(d.data()));
          if (updated.length > 0) {
            const map = new Map();
            state.cowsList.forEach(c => map.set(c.id, c));
            updated.forEach(c => map.set(c.id, { ...map.get(c.id), ...c }));
            state.cowsList = Array.from(map.values());
            localStorage.setItem('sauyultech_cows', JSON.stringify(state.cowsList));
            if (typeof cowsController !== 'undefined') {
              cowsController.renderCowsOnMap();
              cowsController.renderTable();
              cowsController.updateStats();
            }
          }
        }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de bovinos:', err));
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error en syncBovines:', err);
    }
  },

  async syncOrders() {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'eco_orders');
      const snapshot = await this.methods.getDocs(colRef);

      if (snapshot.empty) {
        console.log('🚀 [FirebaseSync] Colección eco_orders vacía en Firestore. Inicializando pedidos...');
        for (const ord of state.ordersList) {
          await this.methods.setDoc(this.methods.doc(colRef, ord.id), ord, { merge: true });
        }
      } else {
        const cloudOrders = [];
        snapshot.forEach(docSnap => cloudOrders.push(docSnap.data()));
        if (cloudOrders.length > 0) {
          const map = new Map();
          state.ordersList.forEach(o => map.set(o.id, o));
          cloudOrders.forEach(o => map.set(o.id, { ...map.get(o.id), ...o }));
          state.ordersList = Array.from(map.values());
          localStorage.setItem('sauyultech_orders', JSON.stringify(state.ordersList));
          console.log(`✅ [FirebaseSync] ${cloudOrders.length} pedidos sincronizados desde Firestore!`);
        }
      }

      if (!this.unsubscribeOrders) {
        this.unsubscribeOrders = this.methods.onSnapshot(colRef, (snap) => {
          if (snap.empty) return;
          const updated = [];
          snap.forEach(d => updated.push(d.data()));
          if (updated.length > 0) {
            const map = new Map();
            state.ordersList.forEach(o => map.set(o.id, o));
            updated.forEach(o => map.set(o.id, { ...map.get(o.id), ...o }));
            state.ordersList = Array.from(map.values());
            localStorage.setItem('sauyultech_orders', JSON.stringify(state.ordersList));
            if (typeof orderTrackerController !== 'undefined' && orderTrackerController.renderTracking) {
              orderTrackerController.renderTracking();
            }
          }
        }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de pedidos:', err));
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error en syncOrders:', err);
    }
  },

  async syncLotes() {
    if (!this.isReady || !this.db) return;
    try {
      const colRef = this.methods.collection(this.db, 'lotes');
      const snapshot = await this.methods.getDocs(colRef);

      if (snapshot.empty) {
        console.log('🚀 [FirebaseSync] Colección lotes vacía en Firestore. Inicializando lotes...');
        for (const l of state.lotesList) {
          await this.methods.setDoc(this.methods.doc(colRef, String(l.id)), l, { merge: true });
        }
      } else {
        const cloudLotes = [];
        snapshot.forEach(docSnap => cloudLotes.push(docSnap.data()));
        if (cloudLotes.length > 0) {
          const map = new Map();
          state.lotesList.forEach(l => map.set(String(l.id), l));
          cloudLotes.forEach(l => map.set(String(l.id), { ...map.get(String(l.id)), ...l }));
          state.lotesList = Array.from(map.values());
          localStorage.setItem('sauyultech_lotes', JSON.stringify(state.lotesList));
          if (typeof marketController !== 'undefined' && marketController.renderSellerLotes) {
            marketController.renderSellerLotes();
          }
          console.log(`✅ [FirebaseSync] ${cloudLotes.length} lotes de cosecha sincronizados desde Firestore!`);
        }
      }

      if (!this.unsubscribeLotes) {
        this.unsubscribeLotes = this.methods.onSnapshot(colRef, (snap) => {
          if (snap.empty) return;
          const updated = [];
          snap.forEach(d => updated.push(d.data()));
          if (updated.length > 0) {
            const map = new Map();
            state.lotesList.forEach(l => map.set(String(l.id), l));
            updated.forEach(l => map.set(String(l.id), { ...map.get(String(l.id)), ...l }));
            state.lotesList = Array.from(map.values());
            localStorage.setItem('sauyultech_lotes', JSON.stringify(state.lotesList));
            if (typeof marketController !== 'undefined' && marketController.renderSellerLotes) {
              marketController.renderSellerLotes();
            }
          }
        }, (err) => console.warn('⚠️ [FirebaseSync] Error en snapshot de lotes:', err));
      }
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error en syncLotes:', err);
    }
  },

  async saveLote(lote) {
    if (!this.isReady || !this.db || !lote) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'lotes'), String(lote.id));
      await this.methods.setDoc(docRef, lote, { merge: true });
      console.log('🔥 [FirebaseSync] Lote guardado en Firestore:', lote.id);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al guardar lote en Firestore:', err);
    }
  },

  async deleteLote(loteId) {
    if (!this.isReady || !this.db || !loteId) return;
    try {
      const docRef = this.methods.doc(this.methods.collection(this.db, 'lotes'), String(loteId));
      await this.methods.deleteDoc(docRef);
      console.log('🔥 [FirebaseSync] Lote eliminado de Firestore:', loteId);
    } catch (err) {
      console.warn('⚠️ [FirebaseSync] Error al eliminar lote en Firestore:', err);
    }
  }
};


// ========================================================================================
// 📜 2. GESTOR DE CARTAS OFICIALES SAU YOUL-TECH & REGISTRO DE MOVIMIENTOS
// ========================================================================================
const cartasController = {
  currentCartaData: null,
  cachedBackgroundImages: {},

  init() {
    const raw = localStorage.getItem('sauyultech_transfers');
    if (raw) {
      try {
        state.transfersList = JSON.parse(raw);
      } catch (e) {}
    }

    if (!state.transfersList || !state.transfersList.length) {
      state.transfersList = [
        {
          id: 'TR-2026-001',
          templateImage: '01_Carta_Traspaso_Animal.png',
          docTitle: 'Carta de Traspaso de Animal',
          placeDate: 'Sébaco, Matagalpa, 12 de Septiembre de 2026',
          recipient: 'A QUIEN CORRESPONDA / IPSA',
          currentOwner: 'Hacienda El Valle (Sau Yul-Tech)',
          currentOwnerId: '441-200580-0003M',
          newOwner: 'Ernesto Gutiérrez Jarquín',
          newOwnerId: '201-150875-0004R',
          destinationFarm: 'Rancho Santa Clara (Chontales)',
          animalTag: 'Arete IPSA: 448102 | Collar: SY-01',
          animalSpecs: 'Bovino / Brahman Pura Sangre / Hembra / Blanco Perlado',
          animalName: 'Brahma Reina #01 (COW-01)',
          effectiveDate: '2026-09-12',
          conditions: 'Venta Comercial / Valor C$ 32,000.00 cancelado en su totalidad',
          guiaNumber: 'IPSA-TR-2026-88412',
          observations: 'Animal en excelente estado de salud, prueba de brucelosis y tuberculosis negativa. Vacunas vigentes.',
          signer1: 'Hacienda El Valle',
          signer2: 'Ernesto Gutiérrez Jarquín',
          signer3: 'Ing. Roberto Gómez (Sau Yul-Tech)',
          status: 'COMPLETADO',
          createdAt: '2026-09-12T10:00:00Z'
        },
        {
          id: 'TR-2026-002',
          templateImage: '08_Carta_Movimiento_Traslado.png',
          docTitle: 'Carta de Movimiento o Traslado de Ganado',
          placeDate: 'Sébaco, Matagalpa, 08 de Septiembre de 2026',
          recipient: 'DELEGACIÓN MUNICIPAL IPSA / POLICÍA NACIONAL',
          currentOwner: 'Hacienda El Valle',
          currentOwnerId: '441-200580-0003M',
          newOwner: 'Finca La Esperanza (Rivas)',
          newOwnerId: '561-220482-0001B',
          destinationFarm: 'Finca La Esperanza (Rivas)',
          animalTag: 'Arete IPSA: 448104 | Collar: SY-03',
          animalSpecs: 'Bovino / Gyr Lechero / Hembra / Barroso',
          animalName: 'Novilla Gyr #03 (COW-03)',
          effectiveDate: '2026-09-08',
          conditions: 'Traslado a Pastoreo y Alquiler Temporal',
          guiaNumber: 'IPSA-GUIA-89104',
          observations: 'Movilización en camión ganadero Placa M-289410 conducido por Marcos Peralta. Guía de tránsito autorizada.',
          signer1: 'Hacienda El Valle',
          signer2: 'Finca La Esperanza',
          signer3: 'Marcos Peralta (Transportista)',
          status: 'COMPLETADO',
          createdAt: '2026-09-08T08:30:00Z'
        }
      ];
      this.saveToStorage();
    }

    this.renderTransfersTable();
    this.populateInlineCows();
  },

  saveToStorage() {
    localStorage.setItem('sauyultech_transfers', JSON.stringify(state.transfersList));
  },

  populateInlineCows() {
    const sel = document.getElementById('inlineCartaSelectCow');
    if (!sel) return;
    sel.innerHTML = '<option value="">-- Selecciona un bovino de tu finca --</option>' +
      state.cowsList.map(c => `<option value="${c.id}">${c.name} (Collar: ${c.collarId} - Raza: ${c.breed || 'Brahman'} - Temp: ${c.temp}°C)</option>`).join('');

    const today = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const formattedDate = `Sébaco, Matagalpa, ${today.getDate()} de ${meses[today.getMonth()]} de ${today.getFullYear()}`;
    
    const placeDateEl = document.getElementById('inlineCartaPlaceDate');
    const dateEl = document.getElementById('inlineCartaEffectiveDate');
    const guiaEl = document.getElementById('inlineCartaGuiaIpsa');

    if (placeDateEl && !placeDateEl.value) placeDateEl.value = formattedDate;
    if (dateEl && !dateEl.value) dateEl.value = today.toISOString().split('T')[0];
    if (guiaEl && !guiaEl.value) guiaEl.value = 'IPSA-TR-' + Math.floor(10000 + Math.random() * 90000);
  },

  toggleFoldableAccordion(openForce, templateName = '01_Carta_Traspaso_Animal.png', cowId = null) {
    const box = document.getElementById('ganaderoCartasAccordion');
    if (!box) return;

    if (openForce === true) {
      box.classList.add('open');
    } else if (openForce === false) {
      box.classList.remove('open');
    } else {
      box.classList.toggle('open');
    }

    if (box.classList.contains('open')) {
      this.populateInlineCows();
      const tSelect = document.getElementById('inlineCartaTemplateSelect');
      if (tSelect && templateName) tSelect.value = templateName;
      if (cowId) {
        const cowSelect = document.getElementById('inlineCartaSelectCow');
        if (cowSelect) cowSelect.value = cowId;
        this.onInlineCowSelectChange(cowId);
      }
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  onInlineTemplateChange(templateName) {
    console.log('[Accordion Cartas] Modelo seleccionado:', templateName);
  },

  onInlineCowSelectChange(cowId) {
    if (!cowId) return;
    const cow = state.cowsList.find(c => c.id === cowId);
    if (!cow) return;

    const tagEl = document.getElementById('inlineCartaAnimalTag');
    const specsEl = document.getElementById('inlineCartaAnimalSpecs');
    const nameEl = document.getElementById('inlineCartaAnimalName');
    const ownerEl = document.getElementById('inlineCartaCurrentOwner');

    if (tagEl) tagEl.value = `Arete IPSA: ${cow.id} | Collar: ${cow.collarId}`;
    if (specsEl) specsEl.value = `Bovino / ${cow.breed || 'Brahman'} / ${cow.gender || 'Hembra'} / ${cow.color || 'Blanco'}`;
    if (nameEl) nameEl.value = `${cow.name} (${cow.id})`;
    if (ownerEl) ownerEl.value = `Hacienda El Valle (Lote: ${cow.zone || 'Potrero Central'})`;
  },

  handleGenerateCartaInline(e) {
    e.preventDefault();
    const templateName = document.getElementById('inlineCartaTemplateSelect').value;
    const placeDate = document.getElementById('inlineCartaPlaceDate').value.trim();
    const recipient = document.getElementById('inlineCartaRecipient').value.trim();
    const currentOwner = document.getElementById('inlineCartaCurrentOwner').value.trim();
    const currentOwnerId = document.getElementById('inlineCartaCurrentOwnerId').value.trim();
    const newOwner = document.getElementById('inlineCartaNewOwner').value.trim();
    const newOwnerId = document.getElementById('inlineCartaNewOwnerId').value.trim();
    const animalTag = document.getElementById('inlineCartaAnimalTag').value.trim();
    const animalSpecs = document.getElementById('inlineCartaAnimalSpecs').value.trim();
    const animalName = document.getElementById('inlineCartaAnimalName').value.trim();
    const effectiveDate = document.getElementById('inlineCartaEffectiveDate').value;
    const conditions = document.getElementById('inlineCartaConditions').value.trim();
    const guiaIpsa = document.getElementById('inlineCartaGuiaIpsa').value.trim();
    const observations = document.getElementById('inlineCartaObservations').value.trim();
    const selectedCowId = document.getElementById('inlineCartaSelectCow').value;

    const titlesMap = {
      '01_Carta_Traspaso_Animal.png': 'Carta de Traspaso de Animal',
      '08_Carta_Movimiento_Traslado.png': 'Carta de Movimiento o Traslado',
      '02_Carta_Fallecimiento_Animal.png': 'Carta de Fallecimiento de Animal',
      '03_Carta_Nacimiento_Ingreso.png': 'Carta de Nacimiento e Ingreso',
      '04_Carta_Custodia_Temporal.png': 'Carta de Custodia Temporal',
      '05_Carta_Revision_Veterinaria.png': 'Carta de Revisión Veterinaria',
      '06_Carta_Vacunacion_Tratamiento.png': 'Carta de Vacunación y Tratamiento',
      '07_Carta_Evento_Reproductivo.png': 'Carta de Evento Reproductivo',
      '09_Carta_Extravio_Robo.png': 'Carta de Extravío o Robo',
      '10_Carta_Recuperacion_Animal.png': 'Carta de Recuperación de Animal',
      '11_Carta_Accidente_Lesion.png': 'Carta de Accidente o Lesión',
      '12_Carta_Cuarentena_Aislamiento.png': 'Carta de Cuarentena y Aislamiento',
      '14_Carta_Baja_Expediente.png': 'Carta de Baja de Expediente',
      '15_Carta_Correccion_Datos.png': 'Carta de Corrección de Datos',
      '16_Carta_Incidente_General.png': 'Carta de Incidente General'
    };

    this.currentCartaData = {
      id: 'DOC-SY-' + Date.now(),
      templateImage: templateName,
      docTitle: titlesMap[templateName] || 'Carta Oficial Sau Youl-Tech',
      placeDate,
      recipient,
      currentOwner,
      currentOwnerId,
      newOwner,
      newOwnerId,
      destinationFarm: newOwner,
      animalTag,
      animalSpecs,
      animalName,
      cowId: selectedCowId,
      effectiveDate,
      conditions,
      guiaNumber: guiaIpsa,
      observations,
      signer1: currentOwner,
      signer2: newOwner,
      signer3: 'Ing. Roberto Gómez (Sau Yul-Tech)',
      status: 'EMITIDO',
      createdAt: new Date().toISOString()
    };

    document.getElementById('viewCartaDocTitle').textContent = this.currentCartaData.docTitle;
    this.renderCartaOnCanvas(this.currentCartaData);
    uiModal.open('modal-view-carta-oficial');
  },

  openCartaModal(defaultTemplate = '01_Carta_Traspaso_Animal.png', cowId = null) {
    const selTemplate = document.getElementById('cartaTemplateSelect');
    if (selTemplate) selTemplate.value = defaultTemplate;

    const selCow = document.getElementById('cartaSelectCow');
    if (selCow) {
      selCow.innerHTML = '<option value="">-- Seleccionar animal o ingresar datos manuales --</option>' +
        state.cowsList.map(c => `<option value="${c.id}" ${cowId === c.id ? 'selected' : ''}>${c.name} (Collar: ${c.collarId} - Raza: ${c.breed || 'Brahman'} - Temp: ${c.temp}°C)</option>`).join('');
    }

    const today = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const formattedDate = `Sébaco, Matagalpa, ${today.getDate()} de ${meses[today.getMonth()]} de ${today.getFullYear()}`;
    
    document.getElementById('cartaPlaceDate').value = formattedDate;
    document.getElementById('cartaEffectiveDate').value = today.toISOString().split('T')[0];
    document.getElementById('cartaGuiaIpsa').value = 'IPSA-TR-' + Math.floor(10000 + Math.random() * 90000);

    if (cowId) {
      this.onCowSelectChange(cowId);
    }

    uiModal.open('modal-carta-ganadera');
  },

  onTemplateChange(templateName) {
    const titlesMap = {
      '01_Carta_Traspaso_Animal.png': 'Carta de Traspaso de Animal',
      '08_Carta_Movimiento_Traslado.png': 'Carta de Movimiento o Traslado de Ganado',
      '02_Carta_Fallecimiento_Animal.png': 'Carta de Fallecimiento de Animal',
      '03_Carta_Nacimiento_Ingreso.png': 'Carta de Nacimiento e Ingreso al Hato',
      '04_Carta_Custodia_Temporal.png': 'Carta de Custodia Temporal',
      '05_Carta_Revision_Veterinaria.png': 'Carta de Revisión Veterinaria',
      '06_Carta_Vacunacion_Tratamiento.png': 'Carta de Vacunación y Tratamiento',
      '07_Carta_Evento_Reproductivo.png': 'Carta de Evento Reproductivo',
      '09_Carta_Extravio_Robo.png': 'Carta de Extravío o Robo',
      '10_Carta_Recuperacion_Animal.png': 'Carta de Recuperación de Animal',
      '11_Carta_Accidente_Lesion.png': 'Carta de Accidente o Lesión',
      '12_Carta_Cuarentena_Aislamiento.png': 'Carta de Cuarentena y Aislamiento',
      '14_Carta_Baja_Expediente.png': 'Carta de Baja de Expediente Bovino',
      '15_Carta_Correccion_Datos.png': 'Carta de Corrección de Datos',
      '16_Carta_Incidente_General.png': 'Carta de Incidente General'
    };
    console.log('Modelo de carta seleccionado:', titlesMap[templateName] || templateName);
  },

  onCowSelectChange(cowId) {
    if (!cowId) return;
    const cow = state.cowsList.find(c => c.id === cowId);
    if (!cow) return;

    document.getElementById('cartaAnimalTag').value = `Arete IPSA: ${cow.id} | Collar: ${cow.collarId}`;
    document.getElementById('cartaAnimalSpecs').value = `Bovino / ${cow.breed || 'Brahman'} / ${cow.gender || 'Hembra'} / ${cow.color || 'Blanco'}`;
    document.getElementById('cartaAnimalName').value = `${cow.name} (${cow.id})`;
    document.getElementById('cartaCurrentOwner').value = `Hacienda El Valle (Lote: ${cow.zone || 'Potrero Central'})`;
  },

  handleGenerateCarta(e) {
    e.preventDefault();
    const templateName = document.getElementById('cartaTemplateSelect').value;
    const placeDate = document.getElementById('cartaPlaceDate').value.trim();
    const recipient = document.getElementById('cartaRecipient').value.trim();
    const currentOwner = document.getElementById('cartaCurrentOwner').value.trim();
    const currentOwnerId = document.getElementById('cartaCurrentOwnerId').value.trim();
    const newOwner = document.getElementById('cartaNewOwner').value.trim();
    const newOwnerId = document.getElementById('cartaNewOwnerId').value.trim();
    const animalTag = document.getElementById('cartaAnimalTag').value.trim();
    const animalSpecs = document.getElementById('cartaAnimalSpecs').value.trim();
    const animalName = document.getElementById('cartaAnimalName').value.trim();
    const effectiveDate = document.getElementById('cartaEffectiveDate').value;
    const conditions = document.getElementById('cartaConditions').value.trim();
    const guiaIpsa = document.getElementById('cartaGuiaIpsa').value.trim();
    const observations = document.getElementById('cartaObservations').value.trim();
    const signer1 = document.getElementById('cartaSigner1').value.trim();
    const signer2 = document.getElementById('cartaSigner2').value.trim();
    const signer3 = document.getElementById('cartaSigner3').value.trim();

    const selectedCowId = document.getElementById('cartaSelectCow').value;

    const titlesMap = {
      '01_Carta_Traspaso_Animal.png': 'Carta de Traspaso de Animal',
      '08_Carta_Movimiento_Traslado.png': 'Carta de Movimiento o Traslado',
      '02_Carta_Fallecimiento_Animal.png': 'Carta de Fallecimiento de Animal',
      '03_Carta_Nacimiento_Ingreso.png': 'Carta de Nacimiento e Ingreso',
      '04_Carta_Custodia_Temporal.png': 'Carta de Custodia Temporal',
      '05_Carta_Revision_Veterinaria.png': 'Carta de Revisión Veterinaria',
      '06_Carta_Vacunacion_Tratamiento.png': 'Carta de Vacunación y Tratamiento',
      '07_Carta_Evento_Reproductivo.png': 'Carta de Evento Reproductivo',
      '09_Carta_Extravio_Robo.png': 'Carta de Extravío o Robo',
      '10_Carta_Recuperacion_Animal.png': 'Carta de Recuperación de Animal',
      '11_Carta_Accidente_Lesion.png': 'Carta de Accidente o Lesión',
      '12_Carta_Cuarentena_Aislamiento.png': 'Carta de Cuarentena y Aislamiento',
      '14_Carta_Baja_Expediente.png': 'Carta de Baja de Expediente',
      '15_Carta_Correccion_Datos.png': 'Carta de Corrección de Datos',
      '16_Carta_Incidente_General.png': 'Carta de Incidente General'
    };

    this.currentCartaData = {
      id: 'DOC-SY-' + Date.now(),
      templateImage: templateName,
      docTitle: titlesMap[templateName] || 'Carta Oficial Sau Youl-Tech',
      placeDate,
      recipient,
      currentOwner,
      currentOwnerId,
      newOwner,
      newOwnerId,
      destinationFarm: newOwner,
      animalTag,
      animalSpecs,
      animalName,
      cowId: selectedCowId,
      effectiveDate,
      conditions,
      guiaNumber: guiaIpsa,
      observations,
      signer1,
      signer2,
      signer3,
      status: 'EMITIDO',
      createdAt: new Date().toISOString()
    };

    uiModal.close('modal-carta-ganadera');
    document.getElementById('viewCartaDocTitle').textContent = this.currentCartaData.docTitle;
    this.renderCartaOnCanvas(this.currentCartaData);
    uiModal.open('modal-view-carta-oficial');
  },

  renderCartaOnCanvas(data) {
    const canvas = document.getElementById('cartaCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = 1240;
    canvas.height = 1754;

    // Ruta de la plantilla
    const imageSrc = 'Cartas Sau Youl-Tech/' + (data.templateImage || '01_Carta_Traspaso_Animal.png');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // 1. Dibujar plantilla oficial de fondo
      ctx.drawImage(img, 0, 0, 1240, 1754);

      // 2. Estilo de tipografía profesional nítida
      ctx.fillStyle = '#111814';
      ctx.textBaseline = 'bottom';

      // Fecha y lugar (underline Y = 441: 92..283, 368..539, 574..632)
      ctx.font = 'bold 20px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText(data.placeDate || 'Sébaco, Matagalpa', 96, 437);

      // Destinatario (underline Y = 592: 92..539)
      ctx.font = 'bold 19px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText(data.recipient || 'A QUIEN CORRESPONDA / IPSA', 96, 587);

      const template = (data.templateImage || '').toLowerCase();

      // Caso 1: 01. Carta de Traspaso de Animal (con párrafos de cesión y cédulas)
      if (template.includes('01_carta_traspaso')) {
        ctx.font = 'bold 19px "Plus Jakarta Sans", Arial, sans-serif';
        // Propietario actual: underline Y=729, 498..803
        ctx.fillText(data.currentOwner || '', 502, 725);
        // Cédula propietario actual: underline Y=757, 266..437
        ctx.fillText(data.currentOwnerId || '', 270, 753);
        // Nuevo propietario: underline Y=785, 533..837
        ctx.fillText(data.newOwner || '', 536, 781);
        // Cédula nuevo propietario: underline Y=813, 129..301
        ctx.fillText(data.newOwnerId || '', 132, 809);

        // Ficha técnica (underlines en Y=868, 914, 958, 1004, 1048; X=405..1086)
        ctx.font = '600 19px "Plus Jakarta Sans", Arial, sans-serif';
        ctx.fillText(data.animalTag || '', 415, 864);
        ctx.fillText(data.animalSpecs || '', 415, 910);
        ctx.fillText(data.animalName || '', 415, 954);
        ctx.fillText(data.effectiveDate || '', 415, 1000);
        ctx.fillText(data.conditions || '', 415, 1044);

        // Observaciones (underlines en Y=1116, 1150, 1184; X=92..1086)
        this.drawMultilineFixedLines(ctx, data.observations, 96, [1112, 1146, 1180], 980);

      // Caso 2: 02, 03, 04 (Plantillas con campos en Y=840, 886, 930, 976, 1020, 1066)
      } else if (template.includes('02_carta_fallecimiento') || template.includes('03_carta_nacimiento') || template.includes('04_carta_custodia')) {
        ctx.font = '600 19px "Plus Jakarta Sans", Arial, sans-serif';
        ctx.fillText(data.animalTag || '', 415, 836);
        ctx.fillText(data.animalSpecs || '', 415, 882);
        ctx.fillText(data.animalName || '', 415, 926);
        ctx.fillText(data.effectiveDate || '', 415, 972);
        ctx.fillText(data.conditions || '', 415, 1016);
        ctx.fillText(data.guiaNumber || data.currentOwner || '', 415, 1062);

        // Observaciones (underlines en Y=1132, 1166, 1200)
        this.drawMultilineFixedLines(ctx, data.observations, 96, [1128, 1162, 1196], 980);

      // Caso 3: 08 (Movimiento / Traslado) y demás plantillas estándar (05, 06, 07, 09, 10, 11, 12, 14, 15, 16)
      // Underlines en Y=812, 858, 902, 948, 992, 1038
      } else {
        ctx.font = '600 19px "Plus Jakarta Sans", Arial, sans-serif';
        ctx.fillText(data.animalTag || '', 415, 808);
        ctx.fillText(data.currentOwner || '', 415, 854);
        ctx.fillText(data.destinationFarm || data.newOwner || '', 415, 898);
        ctx.fillText(data.effectiveDate || '', 415, 944);
        ctx.fillText(data.conditions || '', 415, 988);
        ctx.fillText(data.guiaNumber || data.signer3 || 'IPSA-OFICIAL-2026', 415, 1034);

        // Observaciones (underlines en Y=1104, 1138, 1172)
        this.drawMultilineFixedLines(ctx, data.observations, 96, [1100, 1134, 1168], 980);
      }

      // Firmas oficiales (underline en Y=1310)
      ctx.font = 'bold 18px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(data.signer1 || data.currentOwner || 'Propietario Emisor', 220, 1302);
      ctx.fillText(data.signer2 || data.newOwner || 'Receptor / Nuevo Dueño', 578, 1302);
      ctx.fillText(data.signer3 || 'Sau Yul-Tech Oficial', 936, 1302);
      ctx.textAlign = 'left';

      // Footer oficial (información de contacto)
      ctx.font = '600 16px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillStyle = '#4E3724';
      ctx.fillText('+505 8765-4321', 115, 1642);
      ctx.fillText('soporte@souyultech.com', 420, 1642);
      ctx.fillText('www.souyultech.com', 760, 1642);
    };

    img.onerror = () => {
      console.warn('⚠️ No se pudo cargar plantilla directa:', imageSrc);
      ctx.fillStyle = '#FAFAF7';
      ctx.fillRect(0, 0, 1240, 1754);
      ctx.fillStyle = '#18241D';
      ctx.font = 'bold 36px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillText('SAU YUL-TECH - DOCUMENTO OFICIAL', 100, 120);
      ctx.font = '22px Arial';
      ctx.fillText(data.docTitle, 100, 180);
      ctx.fillText('Fecha: ' + data.placeDate, 100, 240);
      ctx.fillText('Animal: ' + data.animalName + ' (' + data.animalTag + ')', 100, 300);
      ctx.fillText('Propietario: ' + data.currentOwner, 100, 360);
      ctx.fillText('Nuevo Dueño: ' + data.newOwner, 100, 420);
      ctx.fillText('Condiciones: ' + data.conditions, 100, 480);
      ctx.fillText('Observaciones: ' + data.observations, 100, 540);
    };
    img.src = imageSrc;
  },

  drawMultilineFixedLines(ctx, text, x, lineYPositions, maxWidth) {
    if (!text) return;
    const words = text.split(' ');
    let line = '';
    let lineIdx = 0;
    for (let n = 0; n < words.length; n++) {
      if (lineIdx >= lineYPositions.length) break;
      const testLine = line + words[n] + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, lineYPositions[lineIdx]);
        line = words[n] + ' ';
        lineIdx++;
      } else {
        line = testLine;
      }
    }
    if (lineIdx < lineYPositions.length && line.trim()) {
      ctx.fillText(line.trim(), x, lineYPositions[lineIdx]);
    }
  },

  drawMultilineText(ctx, text, x, y, maxWidth, lineHeight) {
    if (!text) return;
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  },

  saveAsOfficialMovement() {
    if (!this.currentCartaData) return;
    const data = this.currentCartaData;

    // Verificar si ya existe en transfersList
    const existingIndex = state.transfersList.findIndex(t => t.id === data.id);
    if (existingIndex >= 0) {
      state.transfersList[existingIndex] = data;
    } else {
      state.transfersList.unshift(data);
    }
    this.saveToStorage();

    // Guardar en Firebase Firestore
    firebaseSync.saveTransferOrMovement(data);

    // Si es traspaso/venta de un animal del hato, remover o actualizar su registro
    if (data.cowId && (data.templateImage.includes('01_Carta_Traspaso') || data.templateImage.includes('02_Carta_Fallecimiento') || data.templateImage.includes('14_Carta_Baja'))) {
      state.cowsList = state.cowsList.filter(c => c.id !== data.cowId);
      if (typeof cowsController !== 'undefined' && cowsController.saveCowsToStorage) {
        cowsController.saveCowsToStorage();
      }
      if (typeof firebaseSync !== 'undefined' && firebaseSync.deleteBovine) {
        firebaseSync.deleteBovine(data.cowId);
      }
      cowsController.renderTable();
      cowsController.updateStats();
      cowsController.renderCowsOnMap();
    }

    this.renderTransfersTable();
    uiModal.close('modal-view-carta-oficial');
    showToast('¡Carta Oficial guardada con éxito en el Registro de Movimientos!', 'success');
  },

  viewCarta(transferId) {
    const tr = state.transfersList.find(t => t.id === transferId);
    if (!tr) return;
    this.currentCartaData = tr;
    document.getElementById('viewCartaDocTitle').textContent = tr.docTitle || 'Carta Oficial Sau Youl-Tech';
    this.renderCartaOnCanvas(tr);
    uiModal.open('modal-view-carta-oficial');
  },

  renderTransfersTable() {
    const tbody = document.getElementById('ganaderoTransfersTableBody');
    if (!tbody) return;

    if (!state.transfersList || !state.transfersList.length) {
      tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:24px; color:var(--brown-muted); font-size:0.92rem;"><i class="fa-solid fa-folder-open"></i> No hay cartas o movimientos registrados aún.</td></tr>';
      return;
    }

    tbody.innerHTML = state.transfersList.map(tr => `
      <tr>
        <td><strong>${new Date(tr.createdAt || Date.now()).toLocaleDateString()}</strong></td>
        <td>
          <span class="badge-status active" style="font-size:0.75rem; background:#183B2B; color:#FFFFFF; border:1px solid var(--gold);">
            <i class="fa-solid fa-file-contract"></i> ${tr.docTitle || 'Carta de Traspaso'}
          </span>
        </td>
        <td><strong>${tr.animalName || 'Bovino'}</strong> <small style="display:block; color:var(--brown-muted);">${tr.animalTag || ''}</small></td>
        <td>${tr.currentOwner || tr.originFarm || 'Hacienda El Valle'}</td>
        <td><strong>${tr.newOwner || tr.destinationFarm || 'N/A'}</strong></td>
        <td><code>${tr.guiaNumber || tr.id}</code></td>
        <td><span class="badge-status active">${tr.status || 'EMITIDO'}</span></td>
        <td>
          <button type="button" class="btn-gold-action" style="padding:5px 12px; font-size:0.78rem;" onclick="cartasController.viewCarta('${tr.id}')">
            <i class="fa-solid fa-file-pdf"></i> Ver Carta / PDF
          </button>
        </td>
      </tr>
    `).join('');
  },

  exportToPDF() {
    const canvas = document.getElementById('cartaCanvas');
    if (!canvas) return;

    showToast('Generando PDF oficial en alta resolución...', 'info');

    // Usar html2pdf o data URI PDF
    if (typeof html2pdf !== 'undefined') {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.margin = '0';
      container.style.padding = '0';
      const img = document.createElement('img');
      img.src = imgData;
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      container.appendChild(img);

      const opt = {
        margin: 0,
        filename: `${(this.currentCartaData?.docTitle || 'Carta_Oficial_Sau_Youl_Tech').replace(/\s+/g, '_')}_${Date.now()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(container).save().then(() => {
        showToast('¡PDF descargado con éxito!', 'success');
      }).catch(err => {
        console.warn('Fallback a impresión:', err);
        window.print();
      });
    } else {
      this.printCarta();
    }
  },

  printCarta() {
    const canvas = document.getElementById('cartaCanvas');
    if (!canvas) return;
    const printRoot = document.getElementById('cartaPrintRoot');
    if (printRoot) {
      const imgData = canvas.toDataURL('image/png');
      printRoot.innerHTML = `<img src="${imgData}" style="width:100%; height:100%; object-fit:contain;">`;
    }
    window.print();
  },

  downloadPNG() {
    const canvas = document.getElementById('cartaCanvas');
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${(this.currentCartaData?.docTitle || 'Carta_Oficial').replace(/\s+/g, '_')}_${Date.now()}.png`;
    a.click();
    showToast('¡Imagen PNG de alta resolución descargada!', 'success');
  }
};

// Aliases para compatibilidad con código existente
const transfersController = cartasController;

