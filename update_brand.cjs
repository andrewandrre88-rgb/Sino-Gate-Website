const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(
  /<span className="text-xl font-extrabold tracking-tight text-slate-900 font-\['Space_Grotesk'\]">\s*SINO GATE\s*<\/span>/,
  '<span className="text-xl font-extrabold tracking-tight text-slate-900 font-[\'Space_Grotesk\']">\n                  {lang === \'AR\' ? \'بوابة الصين\' : \'SINO GATE\'}\n                </span>'
);
fs.writeFileSync('src/components/Navbar.tsx', navbar);

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /<span className="text-lg font-extrabold text-white font-\['Space_Grotesk'\]">\s*SINO GATE\s*<\/span>/,
  '<span className="text-lg font-extrabold text-white font-[\'Space_Grotesk\']">\n                  {lang === \'AR\' ? \'بوابة الصين\' : \'SINO GATE\'}\n                </span>'
);
fs.writeFileSync('src/components/Footer.tsx', footer);
