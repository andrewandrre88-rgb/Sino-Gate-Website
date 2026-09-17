const fs = require('fs');

let file = fs.readFileSync('src/components/CorporateFormationSection.tsx', 'utf8');

// Header is already partially translated via context. Let's make sure.
file = file.replace(/'Mainland China Entity'/, "lang === 'AR' ? 'كيان البر الرئيسي للصين' : 'Mainland China Entity'");
file = file.replace(/'Open a Company in China \(WFOE\)'/g, "lang === 'AR' ? 'تأسيس شركة في الصين (WFOE)' : 'Open a Company in China (WFOE)'");
file = file.replace(/'Wholly Foreign-Owned Enterprise • Full Mainland Operational Rights'/, "lang === 'AR' ? 'مؤسسة مملوكة بالكامل للأجانب • حقوق تشغيل كاملة في البر الرئيسي' : 'Wholly Foreign-Owned Enterprise • Full Mainland Operational Rights'");
file = file.replace(/'Official Chinese Company Chops'/, "lang === 'AR' ? 'أختام الشركة الصينية الرسمية' : 'Official Chinese Company Chops'");
file = file.replace(/'Legal registration of Company Chop, Legal Rep Chop, Financial Chop, and Contract Seal with the Public Security Bureau \(PSB\)\.'/g, "lang === 'AR' ? 'التسجيل القانوني لختم الشركة، ختم الممثل القانوني، الختم المالي، وختم العقود لدى مكتب الأمن العام.' : 'Legal registration of Company Chop, Legal Rep Chop, Financial Chop, and Contract Seal with the Public Security Bureau (PSB).'");
file = file.replace(/'VAT Fapiao Invoicing Authority'/, "lang === 'AR' ? 'سلطة إصدار فواتير ضريبة القيمة المضافة (Fapiao)' : 'VAT Fapiao Invoicing Authority'");
file = file.replace(/'Full authorization to issue official Chinese tax invoices \(General or 13% Special VAT Fapiao\), allowing domestic clients to deduct tax\.'/g, "lang === 'AR' ? 'صلاحية كاملة لإصدار الفواتير الضريبية الصينية الرسمية، مما يتيح للعملاء المحليين خصم الضرائب.' : 'Full authorization to issue official Chinese tax invoices (General or 13% Special VAT Fapiao), allowing domestic clients to deduct tax.'");
file = file.replace(/'RMB & Foreign Capital Bank Accounts'/, "lang === 'AR' ? 'حسابات بنكية باليوان والعملات الأجنبية' : 'RMB & Foreign Capital Bank Accounts'");
file = file.replace(/'Corporate accounts at Bank of China, ICBC, or HSBC China with SAFE \(State Administration of Foreign Exchange\) registration\.'/g, "lang === 'AR' ? 'حسابات شركات في بنك الصين أو ICBC أو HSBC الصين مع تسجيل SAFE.' : 'Corporate accounts at Bank of China, ICBC, or HSBC China with SAFE (State Administration of Foreign Exchange) registration.'");
file = file.replace(/'Registered Address & Resident Rep'/, "lang === 'AR' ? 'العنوان المسجل والممثل المقيم' : 'Registered Address & Resident Rep'");
file = file.replace(/'Compliant commercial registered addresses in Shenzhen \(Futian\/Qianhai\), Shanghai, or Guangzhou, plus visa sponsorship for foreign executives\.'/g, "lang === 'AR' ? 'عناوين تجارية مسجلة متوافقة في شينزين أو شانغهاي أو قوانغتشو، بالإضافة إلى رعاية تأشيرات للمديرين الأجانب.' : 'Compliant commercial registered addresses in Shenzhen (Futian/Qianhai), Shanghai, or Guangzhou, plus visa sponsorship for foreign executives.'");
file = file.replace(/'Timeline: 3 - 5 Weeks'/, "lang === 'AR' ? 'الإطار الزمني: 3 - 5 أسابيع' : 'Timeline: 3 - 5 Weeks'");
file = file.replace(/'Includes all government approvals'/, "lang === 'AR' ? 'يشمل جميع الموافقات الحكومية' : 'Includes all government approvals'");
file = file.replace(/'Start China WFOE Setup'/, "lang === 'AR' ? 'ابدأ تأسيس شركة الصين WFOE' : 'Start China WFOE Setup'");

file = file.replace(/'Fast Track • 48 Hours'/, "lang === 'AR' ? 'مسار سريع • 48 ساعة' : 'Fast Track • 48 Hours'");
file = file.replace(/'Hong Kong SAR Entity'/, "lang === 'AR' ? 'كيان هونغ كونغ الإدارية الخاصة' : 'Hong Kong SAR Entity'");
file = file.replace(/'Open a Company in Hong Kong'/g, "lang === 'AR' ? 'تأسيس شركة في هونغ كونغ' : 'Open a Company in Hong Kong'");
file = file.replace(/'Hong Kong Limited Company • 100% Remote Formation • 0% Offshore Tax'/, "lang === 'AR' ? 'شركة هونغ كونغ المحدودة • تأسيس عن بُعد 100٪ • 0٪ ضريبة دولية' : 'Hong Kong Limited Company • 100% Remote Formation • 0% Offshore Tax'");
file = file.replace(/'48-Hour Rapid Electronic Filing'/, "lang === 'AR' ? 'إيداع إلكتروني سريع خلال 48 ساعة' : '48-Hour Rapid Electronic Filing'");
file = file.replace(/'Certificate of Incorporation \(CI\) and Business Registration \(BR\) issued electronically via the Hong Kong Companies Registry\.'/g, "lang === 'AR' ? 'يتم إصدار شهادة التأسيس (CI) وتسجيل الأعمال (BR) إلكترونيًا.' : 'Certificate of Incorporation (CI) and Business Registration (BR) issued electronically via the Hong Kong Companies Registry.'");
file = file.replace(/'Two-Tier Low Tax Regime \(8\.25%\)'/, "lang === 'AR' ? 'نظام ضريبي منخفض المستويين (8.25٪)' : 'Two-Tier Low Tax Regime (8.25%)'");
file = file.replace(/'Only 8\.25% profits tax on the first HKD 2,000,000 profit; 16\.5% standard\. 0% tax on qualified offshore-derived profits\.'/g, "lang === 'AR' ? 'ضريبة أرباح بنسبة 8.25٪ فقط على أول مليوني دولار هونغ كونغ. 0٪ ضريبة على الأرباح المؤهلة من الخارج.' : 'Only 8.25% profits tax on the first HKD 2,000,000 profit; 16.5% standard. 0% tax on qualified offshore-derived profits.'");
file = file.replace(/'International Multi-Currency Banking'/, "lang === 'AR' ? 'خدمات مصرفية دولية متعددة العملات' : 'International Multi-Currency Banking'");
file = file.replace(/'Guaranteed bank introduction to HSBC HK, Standard Chartered, or instant business accounts with Airwallex, Statrys, and Currenxie\.'/g, "lang === 'AR' ? 'مقدمة بنكية مضمونة لحسابات الأعمال الفورية.' : 'Guaranteed bank introduction to HSBC HK, Standard Chartered, or instant business accounts with Airwallex, Statrys, and Currenxie.'");
file = file.replace(/'Licensed Company Secretary & Address'/, "lang === 'AR' ? 'أمين سر الشركة وعنوان مرخص' : 'Licensed Company Secretary & Address'");
file = file.replace(/'Sino Gate provides full TCSP-licensed corporate secretary, designated representative for SCR, and prestigious Central HK address\.'/g, "lang === 'AR' ? 'توفر Sino Gate أمين سر شركة مرخص بالكامل وعنوان مرموق في وسط هونغ كونغ.' : 'Sino Gate provides full TCSP-licensed corporate secretary, designated representative for SCR, and prestigious Central HK address.'");
file = file.replace(/'Timeline: 2 Business Days'/, "lang === 'AR' ? 'الإطار الزمني: يومي عمل' : 'Timeline: 2 Business Days'");
file = file.replace(/'Zero physical travel required'/, "lang === 'AR' ? 'لا يتطلب سفر فعلي' : 'Zero physical travel required'");
file = file.replace(/'Incorporate in Hong Kong'/, "lang === 'AR' ? 'التأسيس في هونغ كونغ' : 'Incorporate in Hong Kong'");

file = file.replace(/'Side-by-Side Entity Comparison'/, "lang === 'AR' ? 'مقارنة جنباً إلى جنب للكيانات' : 'Side-by-Side Entity Comparison'");
file = file.replace(/'Determine which legal structure matches your operational model'/, "lang === 'AR' ? 'حدد الهيكل القانوني الذي يتناسب مع نموذجك التشغيلي' : 'Determine which legal structure matches your operational model'");
file = file.replace(/'Updated for 2026 Foreign Investment Laws'/, "lang === 'AR' ? 'محدث لعام 2026 لقوانين الاستثمار الأجنبي' : 'Updated for 2026 Foreign Investment Laws'");

file = file.replace(/'Key Dimension'/, "lang === 'AR' ? 'البعد الرئيسي' : 'Key Dimension'");
file = file.replace(/'Mainland China WFOE'/, "lang === 'AR' ? 'شركة البر الرئيسي للصين' : 'Mainland China WFOE'");
file = file.replace(/'Hong Kong Limited Company'/, "lang === 'AR' ? 'شركة هونغ كونغ المحدودة' : 'Hong Kong Limited Company'");

file = file.replace(/\{row\.feature\}/g, "{lang === 'AR' && row.featureAr ? row.featureAr : row.feature}");
file = file.replace(/\{row\.wfoeChina\}/g, "{lang === 'AR' && row.wfoeChinaAr ? row.wfoeChinaAr : row.wfoeChina}");
file = file.replace(/\{row\.hkCompany\}/g, "{lang === 'AR' && row.hkCompanyAr ? row.hkCompanyAr : row.hkCompany}");

file = file.replace(/>Hybrid Corporate Structure \(Most Popular\):<\/strong>/g, ">{lang === 'AR' ? 'الهيكل المؤسسي الهجين (الأكثر شيوعاً):' : 'Hybrid Corporate Structure (Most Popular):'}</strong>");
file = file.replace(/> Form a Hong Kong parent holding company that owns 100% of your Mainland China WFOE\. This combines 0% offshore trading benefits with full domestic China operational access\.<\/span>/g, ">{lang === 'AR' ? ' تأسيس شركة قابضة في هونغ كونغ تمتلك 100٪ من شركتك في الصين. يجمع هذا بين فوائد التداول الخارجي بنسبة 0٪ وإمكانية الوصول التشغيلي الكامل في الصين.' : ' Form a Hong Kong parent holding company that owns 100% of your Mainland China WFOE. This combines 0% offshore trading benefits with full domestic China operational access.'}</span>");
file = file.replace(/'Consult on Hybrid Structure'/, "lang === 'AR' ? 'استشارة حول الهيكل الهجين' : 'Consult on Hybrid Structure'");

fs.writeFileSync('src/components/CorporateFormationSection.tsx', file);
