const fs = require('fs');

let file = fs.readFileSync('src/components/QualityInspectionSection.tsx', 'utf8');

// The dynamic mapped data
file = file.replace(/\{serv\.name\}/g, "{lang === 'AR' && serv.nameAr ? serv.nameAr : serv.name}");
file = file.replace(/\{serv\.description\}/g, "{lang === 'AR' && serv.descriptionAr ? serv.descriptionAr : serv.description}");
file = file.replace(/\{serv\.turnaround\.split\(' '\)\[0\]\} turnaround/g, "{lang === 'AR' && serv.turnaroundAr ? serv.turnaroundAr.split(' ')[0] + ' وقت الإنجاز' : serv.turnaround.split(' ')[0] + ' turnaround'}");
file = file.replace(/>Explore Standard</g, ">{lang === 'AR' ? 'اكتشف المعيار' : 'Explore Standard'}<");
file = file.replace(/Production Gate: \{activeService\.stage\}/g, "{lang === 'AR' ? 'بوابة الإنتاج: ' + (activeService.stageAr || activeService.stage) : 'Production Gate: ' + activeService.stage}");
file = file.replace(/Formal Deliverable:/g, "{lang === 'AR' ? 'المخرجات الرسمية:' : 'Formal Deliverable:'}");
file = file.replace(/\{activeService\.deliverable\}/g, "{lang === 'AR' && activeService.deliverableAr ? activeService.deliverableAr : activeService.deliverable}");
file = file.replace(/Recommended Application:/g, "{lang === 'AR' ? 'التطبيق الموصى به:' : 'Recommended Application:'}");
file = file.replace(/\{activeService\.idealFor\}/g, "{lang === 'AR' && activeService.idealForAr ? activeService.idealForAr : activeService.idealFor}");

// Static Buttons
file = file.replace(/Inspect Checkpoint Protocol/g, "{lang === 'AR' ? 'افحص بروتوكول نقطة التفتيش' : 'Inspect Checkpoint Protocol'}");
file = file.replace(/Book Inspector in China/g, "{lang === 'AR' ? 'احجز مفتش في الصين' : 'Book Inspector in China'}");

// Calculator
file = file.replace(/AQL Sampling Calculator/g, "{lang === 'AR' ? 'حاسبة أخذ العينات AQL' : 'AQL Sampling Calculator'}");
file = file.replace(/Your Production Batch Size \(Units\):/g, "{lang === 'AR' ? 'حجم دفعة الإنتاج الخاصة بك (وحدات):' : 'Your Production Batch Size (Units):'}");
file = file.replace(/>pcs</g, ">{lang === 'AR' ? 'قطعة' : 'pcs'}<");
file = file.replace(/Lot Range Bracket:/g, "{lang === 'AR' ? 'نطاق الدفعة:' : 'Lot Range Bracket:'}");
file = file.replace(/\{aqlResult\.lotRange\} units/g, "{aqlResult.lotRange} {lang === 'AR' ? 'وحدة' : 'units'}");

file = file.replace(/Random Cartons Pull Size:/g, "{lang === 'AR' ? 'حجم سحب الكراتين العشوائي:' : 'Random Cartons Pull Size:'}");
file = file.replace(/\{aqlResult\.sampleSize\} units inspected/g, "{aqlResult.sampleSize} {lang === 'AR' ? 'وحدة مفحوصة' : 'units inspected'}");

file = file.replace(/>Critical Defect</g, ">{lang === 'AR' ? 'عيب حرج' : 'Critical Defect'}<");
file = file.replace(/>Zero tolerance</g, ">{lang === 'AR' ? 'عدم التسامح' : 'Zero tolerance'}<");

file = file.replace(/>Major Defect</g, ">{lang === 'AR' ? 'عيب كبير' : 'Major Defect'}<");
file = file.replace(/>AQL 2\.5 standard</g, ">{lang === 'AR' ? 'معيار AQL 2.5' : 'AQL 2.5 standard'}<");

file = file.replace(/>Minor Defect</g, ">{lang === 'AR' ? 'عيب بسيط' : 'Minor Defect'}<");
file = file.replace(/>AQL 4\.0 standard</g, ">{lang === 'AR' ? 'معيار AQL 4.0' : 'AQL 4.0 standard'}<");

file = file.replace(/Standard General Inspection Level II/g, "{lang === 'AR' ? 'مستوى الفحص العام القياسي II' : 'Standard General Inspection Level II'}");
file = file.replace(/18-Hour Digital PDF Delivery/g, "{lang === 'AR' ? 'تسليم PDF رقمي خلال 18 ساعة' : '18-Hour Digital PDF Delivery'}");

// Modal
file = file.replace(/Sino Gate On-Site Inspection Protocol/g, "{lang === 'AR' ? 'بروتوكول Sino Gate للفحص الميداني' : 'Sino Gate On-Site Inspection Protocol'}");
file = file.replace(/Standard criteria executed on factory floor/g, "{lang === 'AR' ? 'المعايير القياسية المنفذة في طابق المصنع' : 'Standard criteria executed on factory floor'}");
file = file.replace(/1\. Workmanship & Cosmetic Inspection/g, "{lang === 'AR' ? '1. فحص الصناعة والمظهر' : '1. Workmanship & Cosmetic Inspection'}");
file = file.replace(/Inspecting under 1000 lux illumination for scratches, paint defects, flash\/burrs, loose threads, color pantone deviation, and assembly gaps\./g, "{lang === 'AR' ? 'الفحص تحت إضاءة 1000 لوكس للخدوش وعيوب الطلاء والخيوط السائبة وانحراف الألوان وفجوات التجميع.' : 'Inspecting under 1000 lux illumination for scratches, paint defects, flash/burrs, loose threads, color pantone deviation, and assembly gaps.'}");
file = file.replace(/2\. Packaging & Barcode Verification/g, "{lang === 'AR' ? '2. التحقق من التعبئة والباركود' : '2. Packaging & Barcode Verification'}");
file = file.replace(/Scanning UPC\/EAN retail barcodes with handheld scanners, verifying Amazon FBA pallet labels, shipping marks, polybag suffocation warnings, and silica gel desiccant packs\./g, "{lang === 'AR' ? 'مسح الباركود، التحقق من ملصقات منصات أمازون FBA، وعلامات الشحن وتحذيرات الاختناق.' : 'Scanning UPC/EAN retail barcodes with handheld scanners, verifying Amazon FBA pallet labels, shipping marks, polybag suffocation warnings, and silica gel desiccant packs.'}");
file = file.replace(/3\. On-Site Physical & Stress Testing/g, "{lang === 'AR' ? '3. الاختبارات الفيزيائية واختبارات الإجهاد' : '3. On-Site Physical & Stress Testing'}");
file = file.replace(/ISTA 1A Carton drop test \(10 drops from specified height\), hi-pot electrical safety check, rubbing test with 95% alcohol on printed silkscreen logos, torque\/pull test\./g, "{lang === 'AR' ? 'اختبار إسقاط الكرتون، فحص السلامة الكهربائية، اختبار الاحتكاك على الشعارات، اختبار السحب.' : 'ISTA 1A Carton drop test (10 drops from specified height), hi-pot electrical safety check, rubbing test with 95% alcohol on printed silkscreen logos, torque/pull test.'}");
file = file.replace(/4\. Quantity & Shipping Carton Integrity/g, "{lang === 'AR' ? '4. الكمية وسلامة كرتون الشحن' : '4. Quantity & Shipping Carton Integrity'}");
file = file.replace(/Gross weight and net weight calibration per carton, dimensional measurements \(CBM\), and counting total packaged cartons against purchase order bill of quantities\./g, "{lang === 'AR' ? 'معايرة الوزن الإجمالي والصافي، القياسات الحجمية، وحساب الكراتين المعبأة مقابل فاتورة أمر الشراء.' : 'Gross weight and net weight calibration per carton, dimensional measurements (CBM), and counting total packaged cartons against purchase order bill of quantities.'}");

file = file.replace(/Close Preview/g, "{lang === 'AR' ? 'إغلاق المعاينة' : 'Close Preview'}");
file = file.replace(/Book This Inspection/g, "{lang === 'AR' ? 'حجز هذا الفحص' : 'Book This Inspection'}");

fs.writeFileSync('src/components/QualityInspectionSection.tsx', file);
