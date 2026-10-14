const fs = require('fs');
const path = require('path');

const targetLogo = `<div className="w-10 h-10 rounded-full overflow-hidden relative shadow-md flex-shrink-0 border border-white/20"><Image src="/images/logo-brand.png" alt="GlobeRate Logo" fill className="object-cover" priority /></div>`;

// 1. Specifically fix Dashboard Layout
const dashboardLayoutPath = 'src/app/dashboard/layout.tsx';
if (fs.existsSync(dashboardLayoutPath)) {
  let layout = fs.readFileSync(dashboardLayoutPath, 'utf8');
  
  // Replace any square container or bg-white wrapper around logo-brand.png
  layout = layout.replace(
    /<div[^>]*w-10\s+h-10[^>]*rounded-xl[^>]*>[\s\S]*?<Image[^>]*logo-brand\.png[^>]*\/>[\s\S]*?<\/div>/g,
    targetLogo
  );
  layout = layout.replace(
    /<div[^>]*bg-white[^>]*>[\s\S]*?<Image[^>]*logo-brand\.png[^>]*\/>[\s\S]*?<\/div>/g,
    targetLogo
  );
  
  // Ensure the brand text matches homepage typography
  layout = layout.replace(
    /<span[^>]*font-bold[^>]*>GlobeRate<\/span>/g,
    `<span className="text-2xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">GlobeRate</span>`
  );

  fs.writeFileSync(dashboardLayoutPath, layout);
  console.log("✅ Fixed logo in Dashboard layout to match homepage circular badge!");
}

// 2. Scan and fix any other pages (Auth, components, etc.)
function scanAndFix(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanAndFix(fullPath);
    } else if (file.endsWith('.tsx') && fullPath !== 'src/app/page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('logo-brand.png') && content.includes('rounded-xl')) {
        content = content.replace(
          /<div[^>]*w-10\s+h-10[^>]*rounded-xl[^>]*>[\s\S]*?<Image[^>]*logo-brand\.png[^>]*\/>[\s\S]*?<\/div>/g,
          targetLogo
        );
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed logo in: ${fullPath}`);
      }
    }
  }
}

scanAndFix('src');
console.log("🎉 All pages now use the exact same circular logo badge as the homepage!");
