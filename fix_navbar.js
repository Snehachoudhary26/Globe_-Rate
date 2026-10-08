const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.replace(/href="#features"/g, 'href="/dashboard"');
code = code.replace(/href="#nova-ai"/g, 'href="/dashboard/nova"');
code = code.replace(/href="#destinations"/g, 'href="/dashboard/map"');
fs.writeFileSync('src/app/page.tsx', code);
