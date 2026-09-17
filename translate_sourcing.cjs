const fs = require('fs');

let file = fs.readFileSync('src/components/SourcingSection.tsx', 'utf8');

// Replace tabs
file = file.replace(/Step \{idx \+ 1\} of 5/g, "{lang === 'AR' ? 'الخطوة ' + (idx + 1) + ' من 5' : 'Step ' + (idx + 1) + ' of 5'}");
file = file.replace(/\{step\.title\}/g, "{lang === 'AR' && step.titleAr ? step.titleAr : step.title}");
file = file.replace(/\{step\.description\}/g, "{lang === 'AR' && step.descriptionAr ? step.descriptionAr : step.description}");
file = file.replace(/Verified by Sino Gate/g, "{lang === 'AR' ? 'تم التحقق من قبل Sino Gate' : 'Verified by Sino Gate'}");
file = file.replace(/Have product drawings or a spec sheet\?/g, "{lang === 'AR' ? 'هل لديك رسومات منتج أو ورقة مواصفات؟' : 'Have product drawings or a spec sheet?'}");
file = file.replace(/Get 3 audited factory quotes in 48 hours/g, "{lang === 'AR' ? 'احصل على 3 أسعار مصانع مدققة خلال 48 ساعة' : 'Get 3 audited factory quotes in 48 hours'}");
file = file.replace(/Send us your target FOB price, BOM, or Alibaba link. Our bilingual sourcing managers will physically verify true manufacturers and return domestic quotation sheets\./g, "{lang === 'AR' ? 'أرسل لنا السعر المستهدف أو فاتورة المواد أو رابط علي بابا. سيتحقق مدراؤنا ميدانياً ويعيدون عروض أسعار محلية.' : 'Send us your target FOB price, BOM, or Alibaba link. Our bilingual sourcing managers will physically verify true manufacturers and return domestic quotation sheets.'}");
file = file.replace(/Submit Sourcing Inquiry/g, "{lang === 'AR' ? 'تقديم استفسار توريد' : 'Submit Sourcing Inquiry'}");

// Tab 2 comparison
file = file.replace(/The Reality of Buying from China Online/g, "{lang === 'AR' ? 'حقيقة الشراء من الصين عبر الإنترنت' : 'The Reality of Buying from China Online'}");
file = file.replace(/Over 65% of vendors on online wholesale platforms are 2nd or 3rd-tier trading companies with markup layers and zero quality control. Here is how Sino Gate protects your capital:/g, "{lang === 'AR' ? 'أكثر من 65٪ من البائعين عبر الإنترنت هم وسطاء من المستوى الثاني أو الثالث بدون رقابة على الجودة. هكذا تحمي Sino Gate رأس مالك:' : 'Over 65% of vendors on online wholesale platforms are 2nd or 3rd-tier trading companies with markup layers and zero quality control. Here is how Sino Gate protects your capital:'}");
file = file.replace(/Online Trading Agents \/ Brokers/g, "{lang === 'AR' ? 'الوكلاء / السماسرة عبر الإنترنت' : 'Online Trading Agents / Brokers'}");
file = file.replace(/15% - 35% Hidden Markup:/g, "{lang === 'AR' ? '15٪ - 35٪ هوامش خفية:' : '15% - 35% Hidden Markup:'}");
file = file.replace(/Middlemen add undisclosed margins while hiding the true factory name and location\./g, "{lang === 'AR' ? 'يضيف الوسطاء هوامش غير معلنة أثناء إخفاء اسم المصنع الحقيقي وموقعه.' : 'Middlemen add undisclosed margins while hiding the true factory name and location.'}");
file = file.replace(/No Legal Recourse:/g, "{lang === 'AR' ? 'لا يوجد حق لجوء قانوني:' : 'No Legal Recourse:'}");
file = file.replace(/Foreign disputes cannot be settled through overseas courts once money is wired to offshore accounts\./g, "{lang === 'AR' ? 'لا يمكن تسوية النزاعات عبر محاكم خارجية بمجرد تحويل الأموال لحسابات خارجية.' : 'Foreign disputes cannot be settled through overseas courts once money is wired to offshore accounts.'}");
file = file.replace(/Subcontracting Bait-and-Switch:/g, "{lang === 'AR' ? 'التعاقد من الباطن والاستبدال:' : 'Subcontracting Bait-and-Switch:'}");
file = file.replace(/Perfect gold sample supplied initially; bulk order secretly outsourced to an inferior cheap workshop\./g, "{lang === 'AR' ? 'توفير عينة مثالية؛ بينما يتم الاستعانة سرا بورشة رخيصة للطلب الإجمالي.' : 'Perfect gold sample supplied initially; bulk order secretly outsourced to an inferior cheap workshop.'}");
file = file.replace(/No Intellectual Property Protection:/g, "{lang === 'AR' ? 'لا توجد حماية للملكية الفكرية:' : 'No Intellectual Property Protection:'}");
file = file.replace(/Your tooling and CAD mold designs are sold freely to your competitors on domestic marketplaces\./g, "{lang === 'AR' ? 'تُباع تصاميم القوالب الخاصة بك بحرية لمنافسيك في الأسواق المحلية.' : 'Your tooling and CAD mold designs are sold freely to your competitors on domestic marketplaces.'}");

file = file.replace(/>Sino Gate Standard</g, ">{lang === 'AR' ? 'معيار Sino Gate' : 'Sino Gate Standard'}<");
file = file.replace(/Sino Gate Boots-on-the-Ground Partner/g, "{lang === 'AR' ? 'شريك Sino Gate الميداني' : 'Sino Gate Boots-on-the-Ground Partner'}");
file = file.replace(/Direct Factory Transparency:/g, "{lang === 'AR' ? 'شفافية المصنع المباشر:' : 'Direct Factory Transparency:'}");
file = file.replace(/You receive the actual factory name, business registration code, address, and owner contact\./g, "{lang === 'AR' ? 'تتلقى اسم المصنع الحقيقي ورمز التسجيل والعنوان وجهة الاتصال بالمالك.' : 'You receive the actual factory name, business registration code, address, and owner contact.'}");
file = file.replace(/Enforceable NNN Agreements:/g, "{lang === 'AR' ? 'اتفاقيات NNN قابلة للتنفيذ:' : 'Enforceable NNN Agreements:'}");
file = file.replace(/Drafted in Chinese under PRC jurisdiction, legally binding in local Chinese people's courts\./g, "{lang === 'AR' ? 'تصاغ بالصينية تحت ولاية الصين، ملزمة قانوناً في المحاكم المحلية.' : 'Drafted in Chinese under PRC jurisdiction, legally binding in local Chinese people\\'s courts.'}");
file = file.replace(/Domestic Price Discovery:/g, "{lang === 'AR' ? 'اكتشاف الأسعار المحلية:' : 'Domestic Price Discovery:'}");
file = file.replace(/Quotes benchmarked against domestic factory wholesale indices in RMB with transparent cost breakdowns\./g, "{lang === 'AR' ? 'تقارن الأسعار بمؤشرات الجملة المحلية باليوان مع تفصيل شفاف للتكلفة.' : 'Quotes benchmarked against domestic factory wholesale indices in RMB with transparent cost breakdowns.'}");
file = file.replace(/Milestone Escrow:/g, "{lang === 'AR' ? 'الضمان المشروط:' : 'Milestone Escrow:'}");
file = file.replace(/Final supplier payment is released only after our independent inspector signs off on the AQL inspection\./g, "{lang === 'AR' ? 'يتم تحرير الدفعة النهائية بعد موافقة المفتش المستقل.' : 'Final supplier payment is released only after our independent inspector signs off on the AQL inspection.'}");

// Tab 3 consolidation
file = file.replace(/Shenzhen & Yiwu Bonded Consolidation Hub/g, "{lang === 'AR' ? 'مركز التجميع الجمركي في شينزين وإيوو' : 'Shenzhen & Yiwu Bonded Consolidation Hub'}");
file = file.replace(/Consolidate Multiple Factory Samples into One Courier Shipment/g, "{lang === 'AR' ? 'تجميع عينات مصانع متعددة في شحنة بريد سريع واحدة' : 'Consolidate Multiple Factory Samples into One Courier Shipment'}");
file = file.replace(/Instead of paying \$100–\$150 DHL courier fees to 4 or 5 different factories across China, instruct them to ship domestic freight \(\$3 to \$5\) to our Shenzhen or Yiwu fulfillment centers\./g, "{lang === 'AR' ? 'بدلاً من دفع 150 دولاراً لـ 5 مصانع مختلفة، اطلب منهم الشحن محلياً (3-5 دولارات) إلى مراكزنا.' : 'Instead of paying $100–$150 DHL courier fees to 4 or 5 different factories across China, instruct them to ship domestic freight ($3 to $5) to our Shenzhen or Yiwu fulfillment centers.'}");
file = file.replace(/Unboxing & Photo Bench Check/g, "{lang === 'AR' ? 'الفحص والتصوير' : 'Unboxing & Photo Bench Check'}");
file = file.replace(/We inspect prototypes upon arrival, measure dimensions, and take HD photos before forwarding\./g, "{lang === 'AR' ? 'نفحص النماذج الأولية ونقيس الأبعاد ونلتقط صوراً عالية الدقة قبل إعادة توجيهها.' : 'We inspect prototypes upon arrival, measure dimensions, and take HD photos before forwarding.'}");
file = file.replace(/Repackaging & Space Optimization/g, "{lang === 'AR' ? 'إعادة التعبئة وتحسين المساحة' : 'Repackaging & Space Optimization'}");
file = file.replace(/We remove unnecessary bulky factory packaging to minimize volumetric weight billing\./g, "{lang === 'AR' ? 'نزيل العبوات غير الضرورية لتقليل فواتير الوزن الحجمي.' : 'We remove unnecessary bulky factory packaging to minimize volumetric weight billing.'}");

file = file.replace(/Interactive Cost Estimator/g, "{lang === 'AR' ? 'أداة تقدير التكلفة التفاعلية' : 'Interactive Cost Estimator'}");
file = file.replace(/Number of Prototype Factories:/g, "{lang === 'AR' ? 'عدد مصانع النماذج:' : 'Number of Prototype Factories:'}");
file = file.replace(/\{supplierCount\} Factories/g, "{supplierCount} {lang === 'AR' ? 'مصانع' : 'Factories'}");
file = file.replace(/2 Factories/g, "{lang === 'AR' ? '2 مصانع' : '2 Factories'}");
file = file.replace(/5 Factories/g, "{lang === 'AR' ? '5 مصانع' : '5 Factories'}");
file = file.replace(/8 Factories/g, "{lang === 'AR' ? '8 مصانع' : '8 Factories'}");
file = file.replace(/Individual Express \(Direct from each\):/g, "{lang === 'AR' ? 'البريد الفردي (مباشر من كل مصنع):' : 'Individual Express (Direct from each):'}");
file = file.replace(/Sino Gate Consolidated Express:/g, "{lang === 'AR' ? 'بريد Sino Gate المجمع:' : 'Sino Gate Consolidated Express:'}");
file = file.replace(/Estimated Savings/g, "{lang === 'AR' ? 'الوفورات المقدرة' : 'Estimated Savings'}");
file = file.replace(/Start Consolidation/g, "{lang === 'AR' ? 'ابدأ التجميع' : 'Start Consolidation'}");

fs.writeFileSync('src/components/SourcingSection.tsx', file);
