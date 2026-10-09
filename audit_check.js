const fs = require('fs');
const path = require('path');

console.log('=== AUDITORÍA COMPLETA DE CÓDIGO SAU YUL TECH ===');

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');

// 1. Sintaxis CSS: Comprobar llaves abiertas vs cerradas
const openBraces = (css.match(/\{/g) || []).length;
const closeBraces = (css.match(/\}/g) || []).length;
console.log(`[CSS] Llaves abiertas: ${openBraces}, cerradas: ${closeBraces} -> ${openBraces === closeBraces ? 'CORRECTO' : 'DESCUADRE'}`);

// 2. Extraer todos los elementos con id en HTML
const idRegex = /id=["']([a-zA-Z0-9_\-]+)["']/g;
const htmlIds = new Set();
let m;
while ((m = idRegex.exec(html)) !== null) {
  htmlIds.add(m[1]);
}
console.log(`[HTML] Total de IDs únicos encontrados: ${htmlIds.size}`);

// 3. Extraer todas las llamadas document.getElementById en script.js
const getElemRegex = /document\.getElementById\(['"]([a-zA-Z0-9_\-]+)['"]\)/g;
const jsQueriedIds = new Set();
while ((m = getElemRegex.exec(js)) !== null) {
  jsQueriedIds.add(m[1]);
}
console.log(`[JS] Total de IDs consultados en script.js: ${jsQueriedIds.size}`);

const missingFromHtml = [];
for (const id of jsQueriedIds) {
  if (!htmlIds.has(id)) {
    // Check if it might be dynamically created in JS
    if (!js.includes(`id="${id}"`) && !js.includes(`id='${id}'`) && !js.includes(`id=\\"${id}\\"`)) {
      missingFromHtml.push(id);
    }
  }
}
console.log(`[JS -> HTML] IDs consultados que NO existen en HTML ni se generan dinámicamente (${missingFromHtml.length}):`);
console.log(missingFromHtml);

// 4. Extraer todos los onclick/onsubmit/onchange de index.html
const onEventRegex = /on[a-z]+=["']([^"']+)["']/g;
const htmlHandlers = [];
while ((m = onEventRegex.exec(html)) !== null) {
  htmlHandlers.push(m[1].trim());
}
console.log(`[HTML] Handlers inline encontrados: ${htmlHandlers.length}`);

const brokenHandlers = [];
for (const h of htmlHandlers) {
  const matchCall = h.match(/^([a-zA-Z0-9_$.]+)\s*\(/);
  if (matchCall) {
    const fullFn = matchCall[1];
    const parts = fullFn.split('.');
    const rootObj = parts[0];
    const method = parts[1];
    
    // Check if root object exists in JS
    const rootPattern = new RegExp(`(?:const|let|var|function)\\s+${rootObj}\\b|window\\.${rootObj}\\b|class\\s+${rootObj}\\b`);
    if (!rootPattern.test(js) && !['event', 'window', 'document', 'history', 'navigator', 'this'].includes(rootObj)) {
      brokenHandlers.push({ handler: h, error: `Root object '${rootObj}' not declared in script.js` });
    } else if (method && rootPattern.test(js)) {
      // Check if method is mentioned in script.js
      if (!js.includes(method)) {
        brokenHandlers.push({ handler: h, error: `Method '${method}' not found in script.js` });
      }
    }
  }
}
console.log(`[HTML -> JS] Handlers posiblemente rotos (${brokenHandlers.length}):`);
console.log(brokenHandlers);

console.log('=== FIN DE AUDITORÍA ===');
