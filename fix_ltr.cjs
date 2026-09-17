const fs = require('fs');

// OfficesLocationsSection.tsx
let offices = fs.readFileSync('src/components/OfficesLocationsSection.tsx', 'utf8');
offices = offices.replace(
  /<span>\{lang === 'AR' \? 'واتساب \/ هاتف: ' \+ activeHub\.phone : 'WhatsApp \/ Call: ' \+ activeHub\.phone\}<\/span>/g,
  '<span>{lang === \'AR\' ? \'واتساب / هاتف: \' : \'WhatsApp / Call: \'}<span dir="ltr">{activeHub.phone}</span></span>'
);
fs.writeFileSync('src/components/OfficesLocationsSection.tsx', offices);

// Navbar.tsx
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(
  /<span className="hidden sm:inline">\{lang === 'AR' \? 'واتساب \/ هاتف:' : 'WhatsApp \/ Phone:'\}<\/span> \+86 18567413851/g,
  '<span className="hidden sm:inline">{lang === \'AR\' ? \'واتساب / هاتف:\' : \'WhatsApp / Phone:\'}</span> <span dir="ltr">+86 18567413851</span>'
);
fs.writeFileSync('src/components/Navbar.tsx', navbar);

// Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /<span>\+86 18567413851<\/span>/g,
  '<span dir="ltr">+86 18567413851</span>'
);
fs.writeFileSync('src/components/Footer.tsx', footer);

// QuoteInquiryModal.tsx
let modal = fs.readFileSync('src/components/QuoteInquiryModal.tsx', 'utf8');
modal = modal.replace(
  /<a href="tel:\+8618567413851" className="text-blue-600 font-semibold">\+86 18567413851<\/a>/g,
  '<a href="tel:+8618567413851" className="text-blue-600 font-semibold" dir="ltr">+86 18567413851</a>'
);
fs.writeFileSync('src/components/QuoteInquiryModal.tsx', modal);

