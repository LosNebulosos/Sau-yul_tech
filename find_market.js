const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('view-public-market')) {
    console.log('view-public-market at line:', i + 1);
  }
});
