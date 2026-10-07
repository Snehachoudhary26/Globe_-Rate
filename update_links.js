const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.replace(/href="#features"/g, 'href="/features"');
code = code.replace(/href="#nova-ai"/g, 'href="/nova-ai"');
code = code.replace(/href="#destinations"/g, 'href="/destinations"');
fs.writeFileSync('src/app/page.tsx', code);
