import React, { useState } from 'react';
import { OFFICE_HUBS } from '../data/logisticsData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building, CheckCircle2, UserCheck } from 'lucide-react';

interface OfficesLocationsProps {
  onOpenQuote: (office?: string) => void;
}

export const OfficesLocationsSection: React.FC<OfficesLocationsProps> = ({ onOpenQuote }) => {
  const [selectedHubIndex, setSelectedHubIndex] = useState<number>(0);
  const activeHub = OFFICE_HUBS[selectedHubIndex] || OFFICE_HUBS[0];
  const { lang } = useLanguage();

  return (
    <section id="offices" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 font-['Space_Grotesk']">
            <span>Boots on the Ground</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>Greater China Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">{lang === 'AR' ? 'مكاتب فعلية في أهم عواصم التجارة والتصنيع في الصين' : 'Physical offices in China\'s key trade & manufacturing capitals'}</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{lang === 'AR' ? 'نحن لسنا وسطاء عن بعد. يعمل منسقو الخدمات اللوجستية، ومفتشو الجودة المعتمدون، والأخصائيون القانونيون لدينا ميدانياً في شينزين، وهونغ كونغ، ونينغبو، وإيوو، وشانغهاي كل يوم.' : 'We are not a remote middleman sitting overseas. Our bilingual logistics coordinators, certified QA inspectors, and corporate legal specialists work on the ground across Shenzhen, Hong Kong, Ningbo, Yiwu, and Shanghai every single day.'}</p>
        </div>

        {/* Hubs Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {OFFICE_HUBS.map((hub, idx) => {
            const isSelected = selectedHubIndex === idx;
            return (
              <button
                key={hub.city}
                onClick={() => setSelectedHubIndex(idx)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <MapPin className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-500'
                  }`}>
                    {lang === 'AR' ? (idx === 0 ? 'المقر' : 'مركز') : (idx === 0 ? 'HQ' : 'Hub')}
                  </span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base font-['Space_Grotesk']">
                  {(lang === 'AR' && hub.cityAr ? hub.cityAr : hub.city).split('(')[0]}
                </h3>
                <p className={`text-xs mt-1 truncate ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                  {(lang === 'AR' && hub.regionAr ? hub.regionAr : hub.region).split('/')[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Focus Card */}
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left detail */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  {lang === 'AR' && activeHub.roleAr ? activeHub.roleAr : activeHub.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                  {lang === 'AR' && activeHub.cityAr ? activeHub.cityAr : activeHub.city}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {lang === 'AR' && activeHub.regionAr ? activeHub.regionAr : activeHub.region}
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">{lang === 'AR' ? 'العنوان الفعلي:' : 'Physical Address:'}</strong>
                    <span>{activeHub.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">{lang === 'AR' ? 'مدير المحطة والقائد:' : 'Station Director & Lead:'}</strong>
                    <span>{lang === 'AR' && activeHub.teamLeadAr ? activeHub.teamLeadAr : activeHub.teamLead}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">{lang === 'AR' ? 'القدرات الإقليمية الأساسية:' : 'Regional Core Capabilities:'}</strong>
                    <span>{lang === 'AR' && activeHub.specialtyAr ? activeHub.specialtyAr : activeHub.specialty}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${activeHub.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{lang === 'AR' ? 'واتساب / هاتف: ' + activeHub.phone : 'WhatsApp / Call: ' + activeHub.phone}</span>
                </a>
                <a
                  href={`mailto:${activeHub.email}`}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span>{activeHub.email}</span>
                </a>
              </div>
            </div>

            {/* Right: Operational Status Panel */}
            <div className="lg:col-span-5 bg-[#141722] text-white rounded-3xl p-6 sm:p-7 shadow-md border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    China Station Status
                  </span>
                  <span className="text-lg font-extrabold text-white font-['Space_Grotesk']">
                    Open & Operational
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                  <span>{lang === 'AR' ? 'ساعات العمل الرسمية:' : 'Standard Business Hours:'}</span>
                  <span className="font-bold text-white">{activeHub.operatingHours.split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                  <span>{lang === 'AR' ? 'إرسال الطوارئ:' : 'Duty Dispatch:'}</span>
                  <span className="font-bold text-emerald-400">24/7 Port Emergency Contact</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-300">
                  <span>{lang === 'AR' ? 'القدرات اللغوية:' : 'Language Capabilities:'}</span>
                  <span className="font-bold text-white">English, Mandarin, Cantonese</span>
                </div>
                <div className="flex justify-between py-1.5 text-slate-300">
                  <span>{lang === 'AR' ? 'إرسال التفتيش الميداني:' : 'On-site Inspection Dispatch:'}</span>
                  <span className="font-bold text-blue-400">Within 24-48 Hours</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => onOpenQuote(`hub_${lang === 'AR' && activeHub.cityAr ? activeHub.cityAr : activeHub.city}`)}
                  className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Connect with {(lang === 'AR' && activeHub.cityAr ? activeHub.cityAr : activeHub.city).split(' ')[0]} Team</span>
                  <span className="text-blue-200">›››</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
