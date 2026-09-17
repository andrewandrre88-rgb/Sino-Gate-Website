import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Phone, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const { lang, isRtl } = useLanguage();
  return (
    <footer className="bg-[#111622] text-slate-300 text-xs border-t border-slate-800">
      
      {/* Top Banner: Quick Consultation Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-700/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 font-['Space_Grotesk'] block mb-2">
              {lang === 'AR' ? 'هل أنت مستعد لتأمين سلسلة التوريد الخاصة بك في الصين؟' : 'Ready to secure your China supply chain?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              {lang === 'AR' ? 'تحدث مع متخصص عمليات ثنائي اللغة في الصين اليوم' : 'Speak with a bilingual China operations specialist today'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              {lang === 'AR' ? 'سواء كنت بحاجة إلى مساحة شحن عاجلة في شينزين، أو تدقيق مصانع في تشجيانغ، أو تأسيس سريع لشركة في هونغ كونغ، فريقنا الميداني مستعد.' : 'Whether you need urgent vessel space in Shenzhen, factory audits in Zhejiang, or rapid Hong Kong incorporation, our boots on the ground are ready.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+8618567413851"
              className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-600 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span dir="ltr">+86 18567413851</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>{lang === 'AR' ? 'اطلب تسعيرة فورية' : 'Request Immediate Quote'}</span>
              <span className="text-blue-200">›››</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & License */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/main/sourcing%20(Logo)%20(1).png" alt="Logo" className="h-10 w-auto object-contain" />
              <div>
                <span className="text-lg font-extrabold text-white font-['Space_Grotesk']">
                  {lang === 'AR' ? 'بوابة الصين' : 'SINO GATE'}
                </span>
                
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6 rtl:pr-0 rtl:pl-6">
              {lang === 'AR' ? 'ساينو جيت هي شركة استشارات شحن وتجارة دولية مستقلة مقرها في شينزين وهونغ كونغ. نربط المشترين الدوليين مباشرة بالمصانع الصينية المدققة.' : 'Sino Gate is an independent international freight forwarding and cross-border trade consultancy headquartered in Shenzhen and Hong Kong. We bridge international buyers directly with audited Chinese manufacturing and compliant corporate infrastructure.'}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {lang === 'AR' ? 'مسجل كـ NVOCC' : 'NVOCC Registered'}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {lang === 'AR' ? 'ترخيص HK TCSP' : 'HK TCSP License'}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {lang === 'AR' ? 'معايير ISO 2859-1' : 'ISO 2859-1 Standards'}
              </span>
            </div>
          </div>

          {/* Col 2: Freight & Logistics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">
              {lang === 'AR' ? 'اللوجستيات والشحن' : 'Logistics & Freight'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#logistics" className="hover:text-white transition-colors">{lang === 'AR' ? 'الشحن البحري حاويات كاملة (FCL)' : 'Ocean FCL Full Container'}</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">{lang === 'AR' ? 'الشحن الجزئي (1-15 متر مكعب)' : 'LCL Consolidation (1-15 CBM)'}</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">{lang === 'AR' ? 'الشحن الجوي السريع والمستأجر' : 'Air Express & Freight Charters'}</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">{lang === 'AR' ? 'قطار الشحن السريع بين الصين وأوروبا' : 'China-Europe Railway Express'}</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">{lang === 'AR' ? 'التوصيل من الباب للباب (DDP)' : 'DDP Door-to-Door Delivery'}</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">{lang === 'AR' ? 'التخليص الجمركي للصادرات في الصين' : 'China Export Customs Brokerage'}</a></li>
            </ul>
          </div>

          {/* Col 3: {lang === 'AR' ? 'التوريد والجودة' : 'Sourcing & Quality'} Inspection */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">
              {lang === 'AR' ? 'التوريد والجودة' : 'Sourcing & Quality'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#sourcing" className="hover:text-white transition-colors">{lang === 'AR' ? 'التوريد المباشر من المصنع' : 'Direct Factory Sourcing'}</a></li>
              <li><a href="#sourcing" className="hover:text-white transition-colors">{lang === 'AR' ? 'العقود القانونية الصينية NNN' : 'Chinese NNN Legal Contracts'}</a></li>
              <li><a href="#sourcing" className="hover:text-white transition-colors">{lang === 'AR' ? 'مركز تجميع العينات' : 'Sample Consolidation Hub'}</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">{lang === 'AR' ? 'فحص ما قبل الشحن (PSI)' : 'Pre-Shipment Inspection (PSI)'}</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">{lang === 'AR' ? 'فحص أثناء الإنتاج (DUPRO)' : 'During Production (DUPRO)'}</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">{lang === 'AR' ? 'فحص تحميل الحاويات (CLC)' : 'Container Loading Check (CLC)'}</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">{lang === 'AR' ? 'تدقيق قدرات المورد (FSA)' : 'Supplier Capability Audit (FSA)'}</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Setup */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">
              {lang === 'AR' ? 'تأسيس الشركات' : 'Company Formation'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#company-china" className="hover:text-white transition-colors">{lang === 'AR' ? 'تأسيس شركة في الصين (WFOE)' : 'Open a Company in China (WFOE)'}</a></li>
              <li><a href="#company-china" className="hover:text-white transition-colors">{lang === 'AR' ? 'الحسابات البنكية المحلية في الصين' : 'China Domestic Bank Accounts'}</a></li>
              <li><a href="#company-china" className="hover:text-white transition-colors">{lang === 'AR' ? 'إعداد الفواتير الضريبية الصينية' : 'Chinese VAT Fapiao Setup'}</a></li>
              <li><a href="#company-hk" className="hover:text-white transition-colors">{lang === 'AR' ? 'تأسيس شركة في هونغ كونغ' : 'Open a Company in Hong Kong'}</a></li>
              <li><a href="#company-hk" className="hover:text-white transition-colors">{lang === 'AR' ? 'الخدمات المصرفية متعددة العملات في HK' : 'HK Multi-Currency Banking'}</a></li>
              <li><a href="#company-hk" className="hover:text-white transition-colors">{lang === 'AR' ? 'إعفاء ضريبي 0% على الأرباح الخارجية في HK' : 'HK 0% Offshore Profit Exemption'}</a></li>
              <li><a href="#company-china" className="hover:text-white transition-colors">{lang === 'AR' ? 'الهيكل الهجين HK + WFOE' : 'HK + WFOE Hybrid Structure'}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            {lang === 'AR' ? '© 2026 ساينو جيت للخدمات اللوجستية والاستشارات. جميع الحقوق محفوظة.' : '© 2026 Sino Gate Logistics & Corporate Advisory Ltd. All rights reserved.'}
          </div>
          <div className="flex items-center gap-6">
            <span>{lang === 'AR' ? 'شينزين • هونغ كونغ • نينغبو • إيوو • شانغهاي' : 'Shenzhen • Hong Kong • Ningbo • Yiwu • Shanghai'}</span>
            <span>{lang === 'AR' ? 'الخصوصية والسرية محمية' : 'Privacy & Confidentiality Protected'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
