const fs = require('fs');

let file = fs.readFileSync('src/components/OfficesLocationsSection.tsx', 'utf8');

// Add useLanguage hook
file = file.replace(/import \{ OFFICE_HUBS \} from '\.\.\/data\/logisticsData';/, `import { OFFICE_HUBS } from '../data/logisticsData';\nimport { useLanguage } from '../context/LanguageContext';`);

// Inside component:
file = file.replace(/const activeHub = OFFICE_HUBS\[selectedHubIndex\] \|\| OFFICE_HUBS\[0\];/, `const activeHub = OFFICE_HUBS[selectedHubIndex] || OFFICE_HUBS[0];\n  const { lang } = useLanguage();`);

// Header
file = file.replace(/'Boots on the Ground'/, "lang === 'AR' ? 'تواجد ميداني' : 'Boots on the Ground'");
file = file.replace(/'Greater China Operations'/, "lang === 'AR' ? 'عمليات الصين الكبرى' : 'Greater China Operations'");
file = file.replace(/>\s*Physical offices in China's key trade & manufacturing capitals\s*<\/h2>/, ">{lang === 'AR' ? 'مكاتب فعلية في أهم عواصم التجارة والتصنيع في الصين' : 'Physical offices in China\\'s key trade & manufacturing capitals'}</h2>");
file = file.replace(/>\s*We are not a remote middleman sitting overseas. Our bilingual logistics coordinators, certified QA inspectors, and corporate legal specialists work on the ground across Shenzhen, Hong Kong, Ningbo, Yiwu, and Shanghai every single day.\s*<\/p>/, ">{lang === 'AR' ? 'نحن لسنا وسطاء عن بعد. يعمل منسقو الخدمات اللوجستية، ومفتشو الجودة المعتمدون، والأخصائيون القانونيون لدينا ميدانياً في شينزين، وهونغ كونغ، ونينغبو، وإيوو، وشانغهاي كل يوم.' : 'We are not a remote middleman sitting overseas. Our bilingual logistics coordinators, certified QA inspectors, and corporate legal specialists work on the ground across Shenzhen, Hong Kong, Ningbo, Yiwu, and Shanghai every single day.'}</p>");

// Hub Tabs
file = file.replace(/\{idx === 0 \? 'HQ' : 'Hub'\}/g, "{lang === 'AR' ? (idx === 0 ? 'المقر' : 'مركز') : (idx === 0 ? 'HQ' : 'Hub')}");
file = file.replace(/\{hub\.city\.split\('\('\)\[0\]\}/g, "{(lang === 'AR' && hub.cityAr ? hub.cityAr : hub.city).split('(')[0]}");
file = file.replace(/\{hub\.region\.split\('\/'\)\[0\]\}/g, "{(lang === 'AR' && hub.regionAr ? hub.regionAr : hub.region).split('/')[0]}");

// Active Hub Detail
file = file.replace(/\{activeHub\.role\}/g, "{lang === 'AR' && activeHub.roleAr ? activeHub.roleAr : activeHub.role}");
file = file.replace(/\{activeHub\.city\}/g, "{lang === 'AR' && activeHub.cityAr ? activeHub.cityAr : activeHub.city}");
file = file.replace(/\{activeHub\.region\}/g, "{lang === 'AR' && activeHub.regionAr ? activeHub.regionAr : activeHub.region}");
file = file.replace(/>Physical Address:<\/strong>/g, ">{lang === 'AR' ? 'العنوان الفعلي:' : 'Physical Address:'}</strong>");
file = file.replace(/>Station Director & Lead:<\/strong>/g, ">{lang === 'AR' ? 'مدير المحطة والقائد:' : 'Station Director & Lead:'}</strong>");
file = file.replace(/\{activeHub\.teamLead\}/g, "{lang === 'AR' && activeHub.teamLeadAr ? activeHub.teamLeadAr : activeHub.teamLead}");
file = file.replace(/>Regional Core Capabilities:<\/strong>/g, ">{lang === 'AR' ? 'القدرات الإقليمية الأساسية:' : 'Regional Core Capabilities:'}</strong>");
file = file.replace(/\{activeHub\.specialty\}/g, "{lang === 'AR' && activeHub.specialtyAr ? activeHub.specialtyAr : activeHub.specialty}");
file = file.replace(/>Call Direct: \{activeHub\.phone\}<\/span>/g, ">{lang === 'AR' ? 'الاتصال المباشر: ' + activeHub.phone : 'Call Direct: ' + activeHub.phone}</span>");

// Status Panel
file = file.replace(/'China Station Status'/, "lang === 'AR' ? 'حالة محطة الصين' : 'China Station Status'");
file = file.replace(/'Open & Operational'/, "lang === 'AR' ? 'مفتوح ويعمل' : 'Open & Operational'");
file = file.replace(/'Live'/, "lang === 'AR' ? 'مباشر' : 'Live'");
file = file.replace(/>Standard Business Hours:<\/span>/g, ">{lang === 'AR' ? 'ساعات العمل الرسمية:' : 'Standard Business Hours:'}</span>");
file = file.replace(/>Duty Dispatch:<\/span>/g, ">{lang === 'AR' ? 'إرسال الطوارئ:' : 'Duty Dispatch:'}</span>");
file = file.replace(/'24\/7 Port Emergency Contact'/, "lang === 'AR' ? 'اتصال طوارئ الميناء على مدار 24/7' : '24/7 Port Emergency Contact'");
file = file.replace(/>Language Capabilities:<\/span>/g, ">{lang === 'AR' ? 'القدرات اللغوية:' : 'Language Capabilities:'}</span>");
file = file.replace(/'English, Mandarin, Cantonese'/, "lang === 'AR' ? 'الإنجليزية، الماندرين، الكانتونية' : 'English, Mandarin, Cantonese'");
file = file.replace(/>On-site Inspection Dispatch:<\/span>/g, ">{lang === 'AR' ? 'إرسال التفتيش الميداني:' : 'On-site Inspection Dispatch:'}</span>");
file = file.replace(/'Within 24-48 Hours'/, "lang === 'AR' ? 'خلال 24-48 ساعة' : 'Within 24-48 Hours'");
file = file.replace(/'Connect with '/g, "lang === 'AR' ? 'تواصل مع فريق ' : 'Connect with '");
file = file.replace(/' Team'/g, "lang === 'AR' ? '' : ' Team'");
file = file.replace(/\{activeHub\.city\.split\(' '\)\[0\]\}/g, "{(lang === 'AR' && activeHub.cityAr ? activeHub.cityAr : activeHub.city).split(' ')[0]}");


fs.writeFileSync('src/components/OfficesLocationsSection.tsx', file);
