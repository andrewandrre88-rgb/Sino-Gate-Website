const fs = require('fs');

let file = fs.readFileSync('src/components/Footer.tsx', 'utf8');

file = file.replace(/import \{ ShieldCheck/g, "import { useLanguage } from '../context/LanguageContext';\nimport { ShieldCheck");

file = file.replace(/export const Footer: React\.FC<FooterProps> = \(\{ onOpenQuote \}\) => \{/, "export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {\n  const { lang, isRtl } = useLanguage();");

file = file.replace(/Ready to secure your China supply chain\?/g, "{lang === 'AR' ? 'هل أنت مستعد لتأمين سلسلة التوريد الخاصة بك في الصين؟' : 'Ready to secure your China supply chain?'}");
file = file.replace(/Speak with a bilingual China operations specialist today/g, "{lang === 'AR' ? 'تحدث مع متخصص عمليات ثنائي اللغة في الصين اليوم' : 'Speak with a bilingual China operations specialist today'}");
file = file.replace(/Whether you need urgent vessel space in Shenzhen, factory audits in Zhejiang, or rapid Hong Kong incorporation, our boots on the ground are ready\./g, "{lang === 'AR' ? 'سواء كنت بحاجة إلى مساحة شحن عاجلة في شينزين، أو تدقيق مصانع في تشجيانغ، أو تأسيس سريع لشركة في هونغ كونغ، فريقنا الميداني مستعد.' : 'Whether you need urgent vessel space in Shenzhen, factory audits in Zhejiang, or rapid Hong Kong incorporation, our boots on the ground are ready.'}");
file = file.replace(/Request Immediate Quote/g, "{lang === 'AR' ? 'اطلب تسعيرة فورية' : 'Request Immediate Quote'}");

file = file.replace(/>SINO GATE</g, ">{lang === 'AR' ? 'ساينو جيت (SINO GATE)' : 'SINO GATE'}<");
file = file.replace(/Sino Gate is an independent international freight forwarding and cross-border trade consultancy headquartered in Shenzhen and Hong Kong\. We bridge international buyers directly with audited Chinese manufacturing and compliant corporate infrastructure\./g, "{lang === 'AR' ? 'ساينو جيت هي شركة استشارات شحن وتجارة دولية مستقلة مقرها في شينزين وهونغ كونغ. نربط المشترين الدوليين مباشرة بالمصانع الصينية المدققة.' : 'Sino Gate is an independent international freight forwarding and cross-border trade consultancy headquartered in Shenzhen and Hong Kong. We bridge international buyers directly with audited Chinese manufacturing and compliant corporate infrastructure.'}");

file = file.replace(/NVOCC Registered/g, "{lang === 'AR' ? 'مسجل كـ NVOCC' : 'NVOCC Registered'}");
file = file.replace(/HK TCSP License/g, "{lang === 'AR' ? 'ترخيص HK TCSP' : 'HK TCSP License'}");
file = file.replace(/ISO 2859-1 Standards/g, "{lang === 'AR' ? 'معايير ISO 2859-1' : 'ISO 2859-1 Standards'}");

file = file.replace(/Logistics & Freight/g, "{lang === 'AR' ? 'اللوجستيات والشحن' : 'Logistics & Freight'}");
file = file.replace(/>Ocean FCL Full Container</g, ">{lang === 'AR' ? 'الشحن البحري حاويات كاملة (FCL)' : 'Ocean FCL Full Container'}<");
file = file.replace(/>LCL Consolidation \(1-15 CBM\)</g, ">{lang === 'AR' ? 'الشحن الجزئي (1-15 متر مكعب)' : 'LCL Consolidation (1-15 CBM)'}<");
file = file.replace(/>Air Express & Freight Charters</g, ">{lang === 'AR' ? 'الشحن الجوي السريع والمستأجر' : 'Air Express & Freight Charters'}<");
file = file.replace(/>China-Europe Railway Express</g, ">{lang === 'AR' ? 'قطار الشحن السريع بين الصين وأوروبا' : 'China-Europe Railway Express'}<");
file = file.replace(/>DDP Door-to-Door Delivery</g, ">{lang === 'AR' ? 'التوصيل من الباب للباب (DDP)' : 'DDP Door-to-Door Delivery'}<");
file = file.replace(/>China Export Customs Brokerage</g, ">{lang === 'AR' ? 'التخليص الجمركي للصادرات في الصين' : 'China Export Customs Brokerage'}<");

file = file.replace(/Sourcing & Quality/g, "{lang === 'AR' ? 'التوريد والجودة' : 'Sourcing & Quality'}");
file = file.replace(/>Direct Factory Sourcing</g, ">{lang === 'AR' ? 'التوريد المباشر من المصنع' : 'Direct Factory Sourcing'}<");
file = file.replace(/>Chinese NNN Legal Contracts</g, ">{lang === 'AR' ? 'العقود القانونية الصينية NNN' : 'Chinese NNN Legal Contracts'}<");
file = file.replace(/>Sample Consolidation Hub</g, ">{lang === 'AR' ? 'مركز تجميع العينات' : 'Sample Consolidation Hub'}<");
file = file.replace(/>Pre-Shipment Inspection \(PSI\)</g, ">{lang === 'AR' ? 'فحص ما قبل الشحن (PSI)' : 'Pre-Shipment Inspection (PSI)'}<");
file = file.replace(/>During Production \(DUPRO\)</g, ">{lang === 'AR' ? 'فحص أثناء الإنتاج (DUPRO)' : 'During Production (DUPRO)'}<");
file = file.replace(/>Container Loading Check \(CLC\)</g, ">{lang === 'AR' ? 'فحص تحميل الحاويات (CLC)' : 'Container Loading Check (CLC)'}<");
file = file.replace(/>Supplier Capability Audit \(FSA\)</g, ">{lang === 'AR' ? 'تدقيق قدرات المورد (FSA)' : 'Supplier Capability Audit (FSA)'}<");

file = file.replace(/Company Formation/g, "{lang === 'AR' ? 'تأسيس الشركات' : 'Company Formation'}");
file = file.replace(/>Open a Company in China \(WFOE\)</g, ">{lang === 'AR' ? 'تأسيس شركة في الصين (WFOE)' : 'Open a Company in China (WFOE)'}<");
file = file.replace(/>China Domestic Bank Accounts</g, ">{lang === 'AR' ? 'الحسابات البنكية المحلية في الصين' : 'China Domestic Bank Accounts'}<");
file = file.replace(/>Chinese VAT Fapiao Setup</g, ">{lang === 'AR' ? 'إعداد الفواتير الضريبية الصينية' : 'Chinese VAT Fapiao Setup'}<");
file = file.replace(/>Open a Company in Hong Kong</g, ">{lang === 'AR' ? 'تأسيس شركة في هونغ كونغ' : 'Open a Company in Hong Kong'}<");
file = file.replace(/>HK Multi-Currency Banking</g, ">{lang === 'AR' ? 'الخدمات المصرفية متعددة العملات في HK' : 'HK Multi-Currency Banking'}<");
file = file.replace(/>HK 0% Offshore Profit Exemption</g, ">{lang === 'AR' ? 'إعفاء ضريبي 0% على الأرباح الخارجية في HK' : 'HK 0% Offshore Profit Exemption'}<");
file = file.replace(/>HK \+ WFOE Hybrid Structure</g, ">{lang === 'AR' ? 'الهيكل الهجين HK + WFOE' : 'HK + WFOE Hybrid Structure'}<");

file = file.replace(/© 2026 Sino Gate Logistics & Corporate Advisory Ltd\. All rights reserved\./g, "{lang === 'AR' ? '© 2026 ساينو جيت للخدمات اللوجستية والاستشارات. جميع الحقوق محفوظة.' : '© 2026 Sino Gate Logistics & Corporate Advisory Ltd. All rights reserved.'}");
file = file.replace(/Shenzhen • Hong Kong • Ningbo • Yiwu • Shanghai/g, "{lang === 'AR' ? 'شينزين • هونغ كونغ • نينغبو • إيوو • شانغهاي' : 'Shenzhen • Hong Kong • Ningbo • Yiwu • Shanghai'}");
file = file.replace(/Privacy & Confidentiality Protected/g, "{lang === 'AR' ? 'الخصوصية والسرية محمية' : 'Privacy & Confidentiality Protected'}");

fs.writeFileSync('src/components/Footer.tsx', file);
