const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');
const lines = js.split('\n');

lines.forEach((l, i) => {
  if (l.includes('headerUserAvatar') || l.includes('sidebarUserAvatar')) {
    console.log((i+1) + ': ' + l.trim());
  }
});
