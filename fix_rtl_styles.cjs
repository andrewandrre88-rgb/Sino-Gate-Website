const fs = require('fs');

function fixRtl() {
  // SourcingSection
  let file = fs.readFileSync('src/components/SourcingSection.tsx', 'utf8');
  file = file.replace(/absolute top-0 right-0 bg-blue-600 text-white text-\[10px\] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider/, "absolute top-0 right-0 rtl:right-auto rtl:left-0 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl rtl:rounded-bl-none rtl:rounded-br-xl tracking-wider");
  fs.writeFileSync('src/components/SourcingSection.tsx', file);

  // QuoteInquiryModal
  file = fs.readFileSync('src/components/QuoteInquiryModal.tsx', 'utf8');
  file = file.replace(/absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors/, "absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors");
  fs.writeFileSync('src/components/QuoteInquiryModal.tsx', file);

  // Footer
  file = fs.readFileSync('src/components/Footer.tsx', 'utf8');
  file = file.replace(/pr-6/, "pr-6 rtl:pr-0 rtl:pl-6");
  fs.writeFileSync('src/components/Footer.tsx', file);
}

fixRtl();
