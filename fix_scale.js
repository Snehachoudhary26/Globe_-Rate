const fs = require('fs');
let s1 = fs.readFileSync('src/components/animations/SplashScreen.tsx', 'utf8');
fs.writeFileSync('src/components/animations/SplashScreen.tsx', s1.replace(/scale-\[1\.3\]/g, 'scale-100'));
let s2 = fs.readFileSync('src/app/page.tsx', 'utf8');
fs.writeFileSync('src/app/page.tsx', s2.replace(/scale-\[1\.3\]/g, 'scale-100'));
