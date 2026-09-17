import React, { useState } from 'react';
import { SOURCING_STEPS } from '../data/logisticsData';
import { 
  Search, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  FileText, 
  Calculator, 
  ArrowRight, 
  Building2, 
  Warehouse,
  Boxes
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SourcingSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const SourcingSection: React.FC<SourcingSectionProps> = ({ onOpenQuote }) => {
  const { lang, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'process' | 'comparison' | 'consolidation'>('process');

  // Sample consolidation calculator state
  const [supplierCount, setSupplierCount] = useState<number>(4);
  const directShippingCost = supplierCount * 110; // ~$110 per individual DHL courier box to US/EU
  const consolidatedCost = 145; // ~$145 for 1 single consolidated 8kg box
  const savings = directShippingCost - consolidatedCost;

  return (
    <section id="sourcing" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 font-['Space_Grotesk']">
            <span>{lang === 'AR' ? 'التوريد المباشر من الصين' : 'Direct Sourcing in China'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>{lang === 'AR' ? 'بدون وسطاء' : 'Zero Middlemen'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            {lang === 'AR' ? 'فريق المشتريات الموثوق الخاص بك على الأرض في الصين' : 'Your trusted procurement team on the ground in China'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {lang === 'AR' ? 'توقف عن الشراء من الشركات التجارية التي تتظاهر بأنها مصانع. نقوم بتدقيق المصنعين المباشرين، ونتفاوض بالأسعار المحلية (باليوان)، ونصيغ عقوداً قانونية صينية نافذة.' : 'Stop buying from English-speaking trading companies posing as factories. We audit direct manufacturers in Guangdong, Zhejiang, and Jiangsu, negotiate at domestic RMB rates, and draft enforceable Chinese-law contracts.'}
          </p>
        </div>

        {/* Navigation Tabs for Sourcing details */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          <button
            onClick={() => setActiveTab('process')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'process'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'AR' ? 'سير عمل المشتريات (5 خطوات)' : '5-Step Procurement Workflow'}
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'comparison'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'AR' ? 'المصنع المباشر مقابل وسيط علي بابا' : 'Direct Factory vs. Alibaba Trading Broker'}
          </button>
          <button
            onClick={() => setActiveTab('consolidation')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'consolidation'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'AR' ? 'مركز تجميع العينات (وفر أكثر من 65%)' : 'Sample Consolidation Hub (Save 65%+)'}
          </button>
        </div>

        {/* Tab 1: 5-Step Process */}
        {activeTab === 'process' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOURCING_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-blue-600 font-['Space_Grotesk']">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {lang === 'AR' ? 'الخطوة ' + (idx + 1) + ' من 5' : 'Step ' + (idx + 1) + ' of 5'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {lang === 'AR' && step.titleAr ? step.titleAr : step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {lang === 'AR' && step.descriptionAr ? step.descriptionAr : step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>{lang === 'AR' ? 'تم التحقق من قبل Sino Gate' : 'Verified by Sino Gate'}</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            ))}

            {/* CTA Card inside grid */}
            <div className="bg-[#141722] text-white rounded-3xl p-7 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
                  {lang === 'AR' ? 'هل لديك رسومات منتج أو ورقة مواصفات؟' : 'Have product drawings or a spec sheet?'}
                </span>
                <h3 className="text-xl font-extrabold font-['Space_Grotesk'] mb-3">
                  {lang === 'AR' ? 'احصل على 3 أسعار مصانع مدققة خلال 48 ساعة' : 'Get 3 audited factory quotes in 48 hours'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'AR' ? 'أرسل لنا السعر المستهدف أو فاتورة المواد أو رابط علي بابا. سيتحقق مدراؤنا ميدانياً ويعيدون عروض أسعار محلية.' : 'Send us your target FOB price, BOM, or Alibaba link. Our bilingual sourcing managers will physically verify true manufacturers and return domestic quotation sheets.'}
                </p>
              </div>
              <button
                onClick={() => onOpenQuote('sourcing')}
                className="mt-6 w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>{lang === 'AR' ? 'تقديم استفسار توريد' : 'Submit Sourcing Inquiry'}</span>
                <ArrowRight className="rtl:-scale-x-100 w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Comparison: Direct Factory vs Broker */}
        {activeTab === 'comparison' && (
          <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                {lang === 'AR' ? 'حقيقة الشراء من الصين عبر الإنترنت' : 'The Reality of Buying from China Online'}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {lang === 'AR' ? 'أكثر من 65٪ من البائعين عبر الإنترنت هم وسطاء من المستوى الثاني أو الثالث بدون رقابة على الجودة. هكذا تحمي Sino Gate رأس مالك:' : 'Over 65% of vendors on online wholesale platforms are 2nd or 3rd-tier trading companies with markup layers and zero quality control. Here is how Sino Gate protects your capital:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Online Broker Pitfalls */}
              <div className="bg-white rounded-2xl p-6 border border-rose-200 shadow-xs">
                <div className="flex items-center gap-2.5 text-rose-700 font-bold mb-4 pb-3 border-b border-rose-100">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-base font-['Space_Grotesk']">{lang === 'AR' ? 'الوكلاء / السماسرة عبر الإنترنت' : 'Online Trading Agents / Brokers'}</span>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>{lang === 'AR' ? '15٪ - 35٪ هوامش خفية:' : '15% - 35% Hidden Markup:'}</strong> {lang === 'AR' ? 'يضيف الوسطاء هوامش غير معلنة أثناء إخفاء اسم المصنع الحقيقي وموقعه.' : 'Middlemen add undisclosed margins while hiding the true factory name and location.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>{lang === 'AR' ? 'لا يوجد حق لجوء قانوني:' : 'No Legal Recourse:'}</strong> {lang === 'AR' ? 'لا يمكن تسوية النزاعات عبر محاكم خارجية بمجرد تحويل الأموال لحسابات خارجية.' : 'Foreign disputes cannot be settled through overseas courts once money is wired to offshore accounts.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>{lang === 'AR' ? 'التعاقد من الباطن والاستبدال:' : 'Subcontracting Bait-and-Switch:'}</strong> {lang === 'AR' ? 'توفير عينة مثالية؛ بينما يتم الاستعانة سرا بورشة رخيصة للطلب الإجمالي.' : 'Perfect gold sample supplied initially; bulk order secretly outsourced to an inferior cheap workshop.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>{lang === 'AR' ? 'لا توجد حماية للملكية الفكرية:' : 'No Intellectual Property Protection:'}</strong> {lang === 'AR' ? 'تُباع تصاميم القوالب الخاصة بك بحرية لمنافسيك في الأسواق المحلية.' : 'Your tooling and CAD mold designs are sold freely to your competitors on domestic marketplaces.'}</span>
                  </li>
                </ul>
              </div>

              {/* Sino Gate On-The-Ground Solution */}
              <div className="bg-white rounded-2xl p-6 border border-blue-300 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl rtl:rounded-bl-none rtl:rounded-br-xl tracking-wider">
                  Sino Gate Standard
                </div>
                <div className="flex items-center gap-2.5 text-blue-700 font-bold mb-4 pb-3 border-b border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-base font-['Space_Grotesk']">{lang === 'AR' ? 'شريك Sino Gate الميداني' : 'Sino Gate Boots-on-the-Ground Partner'}</span>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>{lang === 'AR' ? 'شفافية المصنع المباشر:' : 'Direct Factory Transparency:'}</strong> {lang === 'AR' ? 'تتلقى اسم المصنع الحقيقي ورمز التسجيل والعنوان وجهة الاتصال بالمالك.' : 'You receive the actual factory name, business registration code, address, and owner contact.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>{lang === 'AR' ? 'اتفاقيات NNN قابلة للتنفيذ:' : 'Enforceable NNN Agreements:'}</strong> {lang === 'AR' ? 'تصاغ بالصينية تحت ولاية الصين، ملزمة قانوناً في المحاكم المحلية.' : 'Drafted in Chinese under PRC jurisdiction, legally binding in local Chinese people\'s courts.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>{lang === 'AR' ? 'اكتشاف الأسعار المحلية:' : 'Domestic Price Discovery:'}</strong> {lang === 'AR' ? 'تقارن الأسعار بمؤشرات الجملة المحلية باليوان مع تفصيل شفاف للتكلفة.' : 'Quotes benchmarked against domestic factory wholesale indices in RMB with transparent cost breakdowns.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>{lang === 'AR' ? 'الضمان المشروط:' : 'Milestone Escrow:'}</strong> {lang === 'AR' ? 'يتم تحرير الدفعة النهائية بعد موافقة المفتش المستقل.' : 'Final supplier payment is released only after our independent inspector signs off on the AQL inspection.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Sample Consolidation Hub */}
        {activeTab === 'consolidation' && (
          <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Warehouse className="w-4 h-4 text-blue-600" />
                  <span>{lang === 'AR' ? 'مركز التجميع الجمركي في شينزين وإيوو' : 'Shenzhen & Yiwu Bonded Consolidation Hub'}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                  {lang === 'AR' ? 'تجميع عينات مصانع متعددة في شحنة بريد سريع واحدة' : 'Consolidate Multiple Factory Samples into One Courier Shipment'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'AR' ? 'بدلاً من دفع 150 دولاراً لـ 5 مصانع مختلفة، اطلب منهم الشحن محلياً (3-5 دولارات) إلى مراكزنا.' : 'Instead of paying $100–$150 DHL courier fees to 4 or 5 different factories across China, instruct them to ship domestic freight ($3 to $5) to our Shenzhen or Yiwu fulfillment centers.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">{lang === 'AR' ? 'الفحص والتصوير' : 'Unboxing & Photo Bench Check'}</span>
                    <span className="text-slate-500">{lang === 'AR' ? 'نفحص النماذج الأولية ونقيس الأبعاد ونلتقط صوراً عالية الدقة قبل إعادة توجيهها.' : 'We inspect prototypes upon arrival, measure dimensions, and take HD photos before forwarding.'}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">{lang === 'AR' ? 'إعادة التعبئة وتحسين المساحة' : 'Repackaging & Space Optimization'}</span>
                    <span className="text-slate-500">{lang === 'AR' ? 'نزيل العبوات غير الضرورية لتقليل فواتير الوزن الحجمي.' : 'We remove unnecessary bulky factory packaging to minimize volumetric weight billing.'}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Consolidation Savings Box */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-300 shadow-md">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  {lang === 'AR' ? 'أداة تقدير التكلفة التفاعلية' : 'Interactive Cost Estimator'}
                </h4>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                    <span>{lang === 'AR' ? 'عدد مصانع النماذج:' : 'Number of Prototype Factories:'}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-sm">
                      {supplierCount} {lang === 'AR' ? 'مصانع' : 'Factories'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    value={supplierCount}
                    onChange={(e) => setSupplierCount(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>{lang === 'AR' ? '2 مصانع' : '2 Factories'}</span>
                    <span>{lang === 'AR' ? '5 مصانع' : '5 Factories'}</span>
                    <span>{lang === 'AR' ? '8 مصانع' : '8 Factories'}</span>
                  </div>
                </div>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>{lang === 'AR' ? 'البريد الفردي (مباشر من كل مصنع):' : 'Individual Express (Direct from each):'}</span>
                    <span className="font-bold text-slate-800 line-through">${directShippingCost} USD</span>
                  </div>
                  <div className="flex justify-between text-blue-700 font-bold">
                    <span>{lang === 'AR' ? 'بريد Sino Gate المجمع:' : 'Sino Gate Consolidated Express:'}</span>
                    <span>${consolidatedCost} USD</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase block">{lang === 'AR' ? 'الوفورات المقدرة' : 'Estimated Savings'}</span>
                    <span className="text-xl font-extrabold text-emerald-700">${savings} USD ({Math.round((savings / directShippingCost) * 100)}% off)</span>
                  </div>
                  <button
                    onClick={() => onOpenQuote('sample_consolidation')}
                    className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                  >
                    {lang === 'AR' ? 'ابدأ التجميع' : 'Start Consolidation'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
