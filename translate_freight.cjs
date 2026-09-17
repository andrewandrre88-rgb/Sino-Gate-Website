const fs = require('fs');

let file = fs.readFileSync('src/components/FreightServicesSection.tsx', 'utf8');

// Update mapped data
file = file.replace(/\{mode\.badge\}/g, "{lang === 'AR' && mode.badgeAr ? mode.badgeAr : mode.badge}");
file = file.replace(/\{mode\.name\}/g, "{lang === 'AR' && mode.nameAr ? mode.nameAr : mode.name}");
file = file.replace(/\{mode\.name\.split\(' '\)\[0\]\}/g, "{(lang === 'AR' && mode.nameAr ? mode.nameAr : mode.name).split(' ')[0]}");
file = file.replace(/Typical Transit: \{mode\.typicalTime\}/g, "{lang === 'AR' ? 'وقت العبور: ' + (mode.typicalTimeAr || mode.typicalTime) : 'Typical Transit: ' + mode.typicalTime}");
file = file.replace(/\{mode\.summary\}/g, "{lang === 'AR' && mode.summaryAr ? mode.summaryAr : mode.summary}");

// Static text replacements in FreightServicesSection
file = file.replace(/'Equipment Guide'/g, "lang === 'AR' ? 'دليل المعدات' : 'Equipment Guide'");
file = file.replace(/'Ocean Shipping Container Reference & Specifications'/g, "lang === 'AR' ? 'مواصفات ومرجع حاويات الشحن البحري' : 'Ocean Shipping Container Reference & Specifications'");
file = file.replace(/'Maximize cubic meter utilization and prevent dead-freight expenses'/g, "lang === 'AR' ? 'زيادة استخدام المتر المكعب ومنع نفقات الشحن الميت' : 'Maximize cubic meter utilization and prevent dead-freight expenses'");
file = file.replace(/'40\\' High Cube \(76 CBM\)'/g, "lang === 'AR' ? '40 قدم مكعب عالي (76 متر مكعب)' : '40\\' High Cube (76 CBM)'");
file = file.replace(/'40\\' Standard GP \(67 CBM\)'/g, "lang === 'AR' ? '40 قدم قياسي (67 متر مكعب)' : '40\\' Standard GP (67 CBM)'");
file = file.replace(/'20\\' Standard GP \(33 CBM\)'/g, "lang === 'AR' ? '20 قدم قياسي (33 متر مكعب)' : '20\\' Standard GP (33 CBM)'");
file = file.replace(/'Volumetric Capacity'/g, "lang === 'AR' ? 'السعة الحجمية' : 'Volumetric Capacity'");
file = file.replace(/'Usable internal cubic volume'/g, "lang === 'AR' ? 'الحجم الداخلي القابل للاستخدام' : 'Usable internal cubic volume'");
file = file.replace(/'Maximum Payload'/g, "lang === 'AR' ? 'أقصى حمولة' : 'Maximum Payload'");
file = file.replace(/'Cargo net weight limit'/g, "lang === 'AR' ? 'الحد الأقصى للوزن الصافي للبضائع' : 'Cargo net weight limit'");
file = file.replace(/'Internal Dimensions \(L×W×H\)'/g, "lang === 'AR' ? 'الأبعاد الداخلية' : 'Internal Dimensions (L×W×H)'");
file = file.replace(/'Clearance inside container walls'/g, "lang === 'AR' ? 'المساحة داخل جدران الحاوية' : 'Clearance inside container walls'");
file = file.replace(/'Pallet Capacity'/g, "lang === 'AR' ? 'سعة المنصات' : 'Pallet Capacity'");
file = file.replace(/'Standard 1000×1200mm configuration'/g, "lang === 'AR' ? 'تكوين قياسي 1000×1200 مم' : 'Standard 1000×1200mm configuration'");
file = file.replace(/'Ideal Cargo Type for '/g, "lang === 'AR' ? 'نوع البضائع المثالي لـ ' : 'Ideal Cargo Type for '");
file = file.replace(/'Get Rates for '/g, "lang === 'AR' ? 'احصل على أسعار لـ ' : 'Get Rates for '");
file = file.replace(/'Book '/g, "lang === 'AR' ? 'حجز ' : 'Book '");
file = file.replace(/' Rate'/g, "lang === 'AR' ? ' سعر' : ' Rate'");

// The containerSpecs needs a bit of translation as well, but it's defined locally. Let's replace the whole object.
const specsEn = `const containerSpecs = {
    '20gp': {
      name: "20' General Purpose Container",
      cbm: '33.2 CBM',
      payload: '28,180 kg',
      dims: '5.90m × 2.35m × 2.39m',
      palletCapacity: '10 Standard Pallets (1000×1200mm) or 11 Euro Pallets',
      ideal: 'Dense, heavy industrial goods, raw metals, hardware, ceramic tiles',
    },
    '40gp': {
      name: "40' General Purpose Container",
      cbm: '67.7 CBM',
      payload: '26,680 kg',
      dims: '12.03m × 2.35m × 2.39m',
      palletCapacity: '21 Standard Pallets or 25 Euro Pallets',
      ideal: 'Balanced general consumer electronics, machinery, footwear, packed dry cargo',
    },
    '40hq': {
      name: "40' High Cube Container (HQ)",
      cbm: '76.4 CBM',
      payload: '26,580 kg',
      dims: '12.03m × 2.35m × 2.69m (Extra 30cm Height)',
      palletCapacity: '21 Standard Pallets or 25 Euro Pallets (Higher vertical stacking)',
      ideal: 'Voluminous light goods, furniture, textiles, apparel, toys, e-commerce cartons',
    },
  };`;

const specsTranslated = `const containerSpecs = {
    '20gp': {
      name: lang === 'AR' ? "حاوية 20 قدم قياسية" : "20' General Purpose Container",
      cbm: '33.2 CBM',
      payload: '28,180 kg',
      dims: '5.90m × 2.35m × 2.39m',
      palletCapacity: lang === 'AR' ? '10 منصات قياسية' : '10 Standard Pallets (1000×1200mm) or 11 Euro Pallets',
      ideal: lang === 'AR' ? 'السلع الصناعية الثقيلة، المعادن الخام، الأجهزة، بلاط السيراميك' : 'Dense, heavy industrial goods, raw metals, hardware, ceramic tiles',
    },
    '40gp': {
      name: lang === 'AR' ? "حاوية 40 قدم قياسية" : "40' General Purpose Container",
      cbm: '67.7 CBM',
      payload: '26,680 kg',
      dims: '12.03m × 2.35m × 2.39m',
      palletCapacity: lang === 'AR' ? '21 منصة قياسية' : '21 Standard Pallets or 25 Euro Pallets',
      ideal: lang === 'AR' ? 'الإلكترونيات الاستهلاكية العامة، الآلات، الأحذية، البضائع الجافة' : 'Balanced general consumer electronics, machinery, footwear, packed dry cargo',
    },
    '40hq': {
      name: lang === 'AR' ? "حاوية 40 قدم عالية (HQ)" : "40' High Cube Container (HQ)",
      cbm: '76.4 CBM',
      payload: '26,580 kg',
      dims: lang === 'AR' ? '12.03م × 2.35م × 2.69م' : '12.03m × 2.35m × 2.69m (Extra 30cm Height)',
      palletCapacity: lang === 'AR' ? '21 منصة قياسية' : '21 Standard Pallets or 25 Euro Pallets (Higher vertical stacking)',
      ideal: lang === 'AR' ? 'البضائع الخفيفة الضخمة، الأثاث، المنسوجات، الملابس، الألعاب' : 'Voluminous light goods, furniture, textiles, apparel, toys, e-commerce cartons',
    },
  };`;

file = file.replace(specsEn, specsTranslated);

// Add missing ts ignore if needed, but it should be fine.
// We need to type any new fields in logisticsData.ts? We added them to types.ts. The mode is from FREIGHT_MODES which doesn't have an explicit interface, so TS might complain unless we type it.
// Let's replace 'any' for mode in mapping if TS complains.

fs.writeFileSync('src/components/FreightServicesSection.tsx', file);
