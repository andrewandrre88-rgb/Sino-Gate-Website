const fs = require('fs');

const NEW_PHONE = '+86 18567413851';
const NEW_PHONE_URL = '+8618567413851';
const WA_URL = 'https://wa.me/8618567413851';

// 1. logisticsData.ts
let logistics = fs.readFileSync('src/data/logisticsData.ts', 'utf8');
logistics = logistics.replace(/phone: '\+86 755 8826 9100'/g, `phone: '${NEW_PHONE}'`);
logistics = logistics.replace(/phone: '\+852 2810 5988'/g, `phone: '${NEW_PHONE}'`);
logistics = logistics.replace(/phone: '\+86 579 8552 3420'/g, `phone: '${NEW_PHONE}'`);
logistics = logistics.replace(/phone: '\+86 21 6888 7430'/g, `phone: '${NEW_PHONE}'`);
fs.writeFileSync('src/data/logisticsData.ts', logistics);

// 2. QuoteInquiryModal.tsx
let modal = fs.readFileSync('src/components/QuoteInquiryModal.tsx', 'utf8');
modal = modal.replace(/\+86 755 8826 9100/g, NEW_PHONE);
modal = modal.replace(/\+8675588269100/g, NEW_PHONE_URL);
fs.writeFileSync('src/components/QuoteInquiryModal.tsx', modal);

// 3. Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/\+86 755 8826 9100/g, NEW_PHONE);
footer = footer.replace(/\+8675588269100/g, NEW_PHONE_URL);
fs.writeFileSync('src/components/Footer.tsx', footer);

