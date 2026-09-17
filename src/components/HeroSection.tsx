import React from 'react';
import { InteractiveRouteCard } from './InteractiveRouteCard';
import { ShieldCheck, Anchor, CheckCircle2, Clock, Globe2, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenQuote: (routeDetails?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const { lang } = useLanguage();
  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      
      {/* Subtle top ambient glow behind the card, strictly respecting the clean royal blue & light slate aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-blue-100/50 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Narrative Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-bold shadow-xs mb-5 font-['Space_Grotesk']">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>{lang === 'AR' ? 'Sino Gate 華門國際' : 'Sino Gate 華門國際'}</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-700 font-semibold">{lang === 'AR' ? 'عمليات شنتشن وهونغ كونغ' : 'Shenzhen & Hong Kong Operations'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk'] leading-[1.12]">
            {lang === 'AR' ? (
              <>فريقك الميداني في الصين لخدمات <span className="text-blue-600">اللوجستيات</span>، <span className="text-blue-600">التوريد</span>، و<span className="text-blue-600">التوسع</span>.</>
            ) : (
              <>Your boots on the ground in China for <span className="text-blue-600">logistics</span>, <span className="text-blue-600">sourcing</span> & <span className="text-blue-600">expansion</span>.</>
            )}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'AR' ? 'عقود شحن مباشرة من الموانئ الصينية، تدقيق موثوق للمصانع، فحوصات جودة خلال 18 ساعة، وتأسيس سريع للشركات في الصين وهونغ كونغ.' : 'Direct carrier contracts from major China ports, verified factory procurement, 18-hour ISO quality inspections, and fast-track company formation in Mainland China & Hong Kong.'}
          </p>

          {/* 4 Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'AR' ? 'شحن مرخص NVOCC' : 'NVOCC Licensed Freight'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'AR' ? 'فحص جودة ISO 2859-1' : 'ISO 2859-1 (AQL II) Inspections'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>{lang === 'AR' ? 'تأسيس شركات الصين وهونغ كونغ' : 'China WFOE & HK Setup'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'AR' ? 'استجابة خلال ساعة واحدة' : '1-Hour RFQ Response'}</span>
            </div>
          </div>

        </div>

        {/* Centerpiece: Interactive Route & Dispatch Planner Card (Direct translation of user reference image!) */}
        <div className="w-full">
          <InteractiveRouteCard onOpenQuote={onOpenQuote} />
        </div>

      </div>
    </section>
  );
};
