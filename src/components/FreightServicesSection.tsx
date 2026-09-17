import React, { useState } from 'react';
import { FREIGHT_MODES } from '../data/logisticsData';
import { 
  Ship, 
  PackageCheck, 
  Plane, 
  Train, 
  Container, 
  FileCheck2, 
  ShieldCheck, 
  ArrowUpRight, 
  Boxes,
  Compass,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FreightServicesProps {
  onOpenQuote: (service?: string) => void;
}

export const FreightServicesSection: React.FC<FreightServicesProps> = ({ onOpenQuote }) => {
  const { lang, isRtl } = useLanguage();
  const [selectedContainer, setSelectedContainer] = useState<'20gp' | '40gp' | '40hq'>('40hq');

  const containerSpecs = {
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
  };

  const activeSpec = containerSpecs[selectedContainer];

  return (
    <section id="logistics" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 font-['Space_Grotesk']">
            <span>{lang === 'AR' ? 'الخدمات اللوجستية العالمية المتعددة الوسائط' : 'Global Multimodal Logistics'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>{lang === 'AR' ? 'مرخص كـ NVOCC' : 'NVOCC Licensed'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            {lang === 'AR' ? 'عقود الشحن المباشرة والتوصيل من الباب للباب (DDP)' : 'Direct carrier contracts & door-to-door DDP delivery'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {lang === 'AR' ? 'من تجميع الشحنات الجزئية (LCL) إلى الشحن البحري والجوي الكامل. تدير Sino Gate الجمارك وخطوط الشحن وتوصيل الوجهة النهائية بدون وسطاء أو عمولات إضافية.' : 'From single-pallet LCL consolidation to full charter vessels, Sino Gate manages origin export customs, ocean/air shipping lines, and destination delivery without intermediate freight broker markups.'}
          </p>
        </div>

        {/* 4 Freight Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FREIGHT_MODES.map((mode) => {
            const Icon = mode.id === 'sea_fcl' ? Ship : mode.id === 'sea_lcl' ? PackageCheck : mode.id === 'air' ? Plane : Train;
            return (
              <div
                key={mode.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {lang === 'AR' && mode.badgeAr ? mode.badgeAr : mode.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1 font-['Space_Grotesk']">
                    {lang === 'AR' && mode.nameAr ? mode.nameAr : mode.name}
                  </h3>
                  <span className="text-xs font-bold text-blue-700 block mb-3">
                    {lang === 'AR' ? 'وقت العبور: ' + (mode.typicalTimeAr || mode.typicalTime) : 'Typical Transit: ' + mode.typicalTime}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {lang === 'AR' && mode.summaryAr ? mode.summaryAr : mode.summary}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    {mode.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenQuote(mode.id)}
                  className="mt-6 w-full py-2.5 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book {(lang === 'AR' && mode.nameAr ? mode.nameAr : mode.name).split(' ')[0]} Rate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Container Capacity & Specs Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Equipment Guide
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                Ocean Shipping Container Reference & Specifications
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Maximize cubic meter utilization and prevent dead-freight expenses
              </p>
            </div>

            {/* Container Selector Pills */}
            <div className="inline-flex p-1 bg-[#F1F4F9] rounded-full border border-slate-200/80 self-start lg:self-center">
              <button
                onClick={() => setSelectedContainer('40hq')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedContainer === '40hq'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                40' High Cube (76 CBM)
              </button>
              <button
                onClick={() => setSelectedContainer('40gp')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedContainer === '40gp'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                40' Standard GP (67 CBM)
              </button>
              <button
                onClick={() => setSelectedContainer('20gp')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedContainer === '20gp'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                20' Standard GP (33 CBM)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Volumetric Capacity
              </span>
              <span className="text-2xl font-extrabold text-blue-600 font-mono">
                {activeSpec.cbm}
              </span>
              <p className="text-xs text-slate-500 mt-1">Usable internal cubic volume</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Maximum Payload
              </span>
              <span className="text-2xl font-extrabold text-slate-900 font-mono">
                {activeSpec.payload}
              </span>
              <p className="text-xs text-slate-500 mt-1">Cargo net weight limit</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Internal Dimensions (L×W×H)
              </span>
              <span className="text-base font-extrabold text-slate-900 font-mono">
                {activeSpec.dims}
              </span>
              <p className="text-xs text-slate-500 mt-1">Clearance inside container walls</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Pallet Capacity
              </span>
              <span className="text-sm font-extrabold text-slate-900">
                {activeSpec.palletCapacity.split('(')[0]}
              </span>
              <p className="text-xs text-slate-500 mt-1">Standard 1000×1200mm configuration</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-700">
              <strong className="text-blue-900">Ideal Cargo Type for {activeSpec.name}: </strong>
              <span>{activeSpec.ideal}</span>
            </div>
            <button
              onClick={() => onOpenQuote(selectedContainer)}
              className="shrink-0 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm"
            >
              Get Rates for {selectedContainer.toUpperCase()}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
