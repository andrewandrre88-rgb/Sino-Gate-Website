const fs = require('fs');

let offices = fs.readFileSync('src/components/OfficesLocationsSection.tsx', 'utf8');

// The activeHub.phone was already updated via logisticsData.ts to '+86 18567413851', but the display text in the button is "Call Direct: +86 ...". 
// I will change it to say "WhatsApp / Phone" instead of just Call Direct.
// It also has an href to `tel:...`.
offices = offices.replace(/{lang === 'AR' \? 'الاتصال المباشر: ' \+ activeHub\.phone : 'Call Direct: ' \+ activeHub\.phone}/g, "{lang === 'AR' ? 'واتساب / هاتف: ' + activeHub.phone : 'WhatsApp / Call: ' + activeHub.phone}");

fs.writeFileSync('src/components/OfficesLocationsSection.tsx', offices);
