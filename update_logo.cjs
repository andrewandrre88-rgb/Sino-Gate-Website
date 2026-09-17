const fs = require('fs');

const LOGO_URL = 'https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/main/sourcing%20(Logo)%20(1).png';

// 1. Update Navbar
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(
  /<div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500\/20 font-bold text-xl tracking-tight">\s*<span className="font-\['Space_Grotesk'\] text-white text-lg">SG<\/span>\s*<\/div>/g,
  `<img src="${LOGO_URL}" alt="Logo" className="h-12 w-auto object-contain" />`
);
fs.writeFileSync('src/components/Navbar.tsx', navbar);

// 2. Update Footer
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /<div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg font-\['Space_Grotesk'\]">\s*SG\s*<\/div>/g,
  `<img src="${LOGO_URL}" alt="Logo" className="h-10 w-auto object-contain bg-white/10 rounded-xl p-1" />` 
  // Added a slight white background with padding to the footer logo in case it's a dark logo (since the footer is dark). 
  // If it's a transparent dark text logo, it wouldn't be visible on the dark background. 
  // Wait, let's just make it simpler or without the bg-white/10 to respect the raw image unless it looks bad. Let's just do standard img first.
);

// Re-doing the footer replacement without the bg hack, if the logo is a transparent png, we'll just insert it.
footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /<div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg font-\['Space_Grotesk'\]">\s*SG\s*<\/div>/g,
  `<img src="${LOGO_URL}" alt="Logo" className="h-10 w-auto object-contain" />`
);
fs.writeFileSync('src/components/Footer.tsx', footer);

