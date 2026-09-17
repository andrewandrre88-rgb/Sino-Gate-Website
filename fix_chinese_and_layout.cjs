const fs = require('fs');

// 1. Update Navbar
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
// Remove the Chinese badge next to the brand name
navbar = navbar.replace(
  /<span className="text-\[11px\] font-semibold px-2 py-0\.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">\s*華門國際\s*<\/span>/,
  ''
);
// Fix top header wrapping by ensuring it stacks nicely or has enough space on mobile
// In the top bar, \`flex flex-wrap\` is used. It might be better to just let it wrap and add \`justify-center sm:justify-between\`.
navbar = navbar.replace(
  /className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3"/,
  'className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-3 text-center sm:text-left"'
);
fs.writeFileSync('src/components/Navbar.tsx', navbar);


// 2. Update HeroSection
let hero = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');
// Replace Sino Gate 華門國際 with just Sino Gate
hero = hero.replace(
  /<span>\{lang === 'AR' \? 'Sino Gate 華門國際' : 'Sino Gate 華門國際'\}<\/span>/,
  "<span>Sino Gate</span>"
);
fs.writeFileSync('src/components/HeroSection.tsx', hero);


// 3. Update Footer
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
// Remove the Chinese company name
footer = footer.replace(
  /<span className="text-xs text-blue-400 font-semibold block">\s*華門國際供應鏈有限公司\s*<\/span>/,
  ''
);
fs.writeFileSync('src/components/Footer.tsx', footer);

