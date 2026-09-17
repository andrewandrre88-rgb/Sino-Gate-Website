import React, { useState, useMemo } from 'react';
import { ORIGIN_PORTS, DESTINATION_PORTS, ROUTE_MATRIX, LIVE_PORT_STATUSES } from '../data/logisticsData';
import { Port } from '../types';
import { 
  Ship, 
  Plane, 
  Train, 
  ArrowRightLeft, 
  Calendar, 
  Package, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Waves, 
  Wind, 
  CloudRain, 
  Anchor, 
  ShieldCheck, 
  ExternalLink,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveRouteCardProps {
  onOpenQuote: (routeDetails?: { origin: string; dest: string; mode: string; cargo: string }) => void;
}

export const InteractiveRouteCard: React.FC<InteractiveRouteCardProps> = ({ onOpenQuote }) => {
  const { lang, isRtl } = useLanguage();
  const [selectedMode, setSelectedMode] = useState<'sea_fcl' | 'sea_lcl' | 'air' | 'rail'>('sea_fcl');
  const [originId, setOriginId] = useState<string>('sz'); // Shenzhen default
  const [destId, setDestId] = useState<string>('rtm'); // Rotterdam default
  const [cargoType, setCargoType] = useState<string>('40HQ');
  const [departureDate, setDepartureDate] = useState<string>('2026-09-25');
  const [selectedPortStatusIndex, setSelectedPortStatusIndex] = useState<number>(0);

  // Active Origin and Destination objects
  const origin = useMemo(() => ORIGIN_PORTS.find(p => p.id === originId) || ORIGIN_PORTS[0], [originId]);
  const dest = useMemo(() => DESTINATION_PORTS.find(p => p.id === destId) || DESTINATION_PORTS[1], [destId]);

  // Route specs
  const routeKey = `${originId}-${destId}`;
  const routeInfo = ROUTE_MATRIX[routeKey] || { seaDays: 28, airDays: 3, railDays: 16, departures: 'Weekly regular' };

  // Calculate estimated arrival date based on transit days
  const transitDays = useMemo(() => {
    if (selectedMode === 'air') return routeInfo.airDays;
    if (selectedMode === 'rail' && routeInfo.railDays) return routeInfo.railDays;
    return routeInfo.seaDays;
  }, [selectedMode, routeInfo]);

  const estimatedArrival = useMemo(() => {
    try {
      const dep = new Date(departureDate);
      dep.setDate(dep.getDate() + transitDays);
      return dep.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return '14-28 days';
    }
  }, [departureDate, transitDays]);

  const handleSwap = () => {
    // In import-export, China is origin, but if user wants to swap, we can keep the origin in China list
    const otherOrigins = ORIGIN_PORTS.filter(p => p.id !== originId);
    if (otherOrigins.length > 0) {
      setOriginId(otherOrigins[Math.floor(Math.random() * otherOrigins.length)].id);
    }
  };

  const activePortStatus = LIVE_PORT_STATUSES[selectedPortStatusIndex] || LIVE_PORT_STATUSES[0];

  return (
    <div className="w-full relative">
      {/* Outer Card Wrapper matching reference image's spacious, soft-shadowed white canvas */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-slate-200/80 relative overflow-hidden">
        
        {/* Top Header & Mode Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-['Space_Grotesk']">
                {lang === 'AR' ? 'التخطيط والمسارات' : 'Dispatch & Route Planner'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
              {lang === 'AR' ? 'ابحث عن مسارك التجاري ومؤشر الشحن' : 'Find your trade route & freight index'}
            </h2>
          </div>

          {/* Mode Switcher Pills (like the Round trip / One way / Multi city pills in the reference) */}
          <div className="inline-flex p-1.5 bg-[#F1F4F9] rounded-full border border-slate-200/80 self-start lg:self-center">
            <button
              onClick={() => setSelectedMode('sea_fcl')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedMode === 'sea_fcl'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>{lang === 'AR' ? 'شحن بحري FCL' : 'Ocean FCL'}</span>
            </button>
            <button
              onClick={() => setSelectedMode('sea_lcl')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedMode === 'sea_lcl'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>{lang === 'AR' ? 'شحن جزئي LCL' : 'LCL Consolidation'}</span>
            </button>
            <button
              onClick={() => setSelectedMode('air')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedMode === 'air'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>{lang === 'AR' ? 'شحن جوي' : 'Air Cargo'}</span>
            </button>
            <button
              onClick={() => setSelectedMode('rail')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedMode === 'rail'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Train className="w-3.5 h-3.5" />
              <span>{lang === 'AR' ? 'قطار الصين-أوروبا' : 'China-EU Rail'}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Left inputs & route map vs Right dark port widget */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pt-6">
          
          {/* Left / Center Column (8 cols on xl) */}
          <div className="xl:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* Origin & Destination Inputs with Swap button */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/90 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                
                {/* From Origin */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {lang === 'AR' ? 'من (ميناء التصدير / المركز في الصين)' : 'From (China Export Port / Hub)'}
                  </label>
                  <div className="relative">
                    <select
                      value={originId}
                      onChange={(e) => setOriginId(e.target.value)}
                      className={`w-full bg-white text-slate-900 font-bold text-base sm:text-lg rounded-xl px-3.5 py-3 border border-slate-200 shadow-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden appearance-none cursor-pointer ${isRtl ? 'pl-10' : 'pr-10'}`}
                    >
                      {ORIGIN_PORTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.city}, {p.country} ({p.code})
                        </option>
                      ))}
                    </select>
                    <div className={`absolute ${isRtl ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 pointer-events-none text-slate-400`}>
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                  <p className={`text-[11px] text-slate-500 font-medium ${isRtl ? 'pr-1' : 'pl-1'}`}>
                    {origin.name} • {lang === 'AR' ? 'مكتب Sino Gate المحلي متوفر' : 'Local Sino Gate office on-site'}
                  </p>
                </div>

                {/* Swap button placed in the center on desktop */}
                <button
                  type="button"
                  onClick={handleSwap}
                  title="Cycle China export port"
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-300 shadow-md items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>

                {/* To Destination */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {lang === 'AR' ? 'إلى (الوجهة العالمية)' : 'To (Global Destination Port / City)'}
                  </label>
                  <div className="relative">
                    <select
                      value={destId}
                      onChange={(e) => setDestId(e.target.value)}
                      className={`w-full bg-white text-slate-900 font-bold text-base sm:text-lg rounded-xl px-3.5 py-3 border border-slate-200 shadow-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden appearance-none cursor-pointer ${isRtl ? 'pl-10' : 'pr-10'}`}
                    >
                      {DESTINATION_PORTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.code})
                        </option>
                      ))}
                    </select>
                    <div className={`absolute ${isRtl ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 pointer-events-none text-slate-400`}>
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                  <p className={`text-[11px] text-slate-500 font-medium ${isRtl ? 'pr-1' : 'pl-1'}`}>
                    {dest.city}, {dest.country} • {lang === 'AR' ? 'يتوفر التخليص الجمركي والتوصيل' : 'Customs clearance & DDP door delivery available'}
                  </p>
                </div>

              </div>
            </div>

            {/* Departure Date & Cargo Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              
              {/* Departure */}
              <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {lang === 'AR' ? 'تاريخ المغادرة المتوقع' : 'Est. Departure'}
                  </span>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="text-xs sm:text-sm font-bold text-slate-800 bg-transparent border-0 focus:outline-hidden p-0 cursor-pointer w-full"
                  />
                </div>
              </div>

              {/* Arrival */}
              <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {lang === 'AR' ? 'تاريخ الوصول المتوقع' : 'Est. Port Arrival'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                    {estimatedArrival}
                  </span>
                </div>
              </div>

              {/* Cargo Specification */}
              <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-3 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {lang === 'AR' ? 'نوع الحمولة' : 'Cargo / Unit'}
                  </span>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="text-xs sm:text-sm font-bold text-slate-800 bg-transparent border-0 focus:outline-hidden p-0 cursor-pointer w-full"
                  >
                    <option value="40HQ">{lang === 'AR' ? "حاوية 40 قدم عالية (76 CBM)" : "40' High Cube Container (76 CBM)"}</option>
                    <option value="20GP">{lang === 'AR' ? "حاوية 20 قدم (33 CBM)" : "20' General Container (33 CBM)"}</option>
                    <option value="40GP">{lang === 'AR' ? "حاوية 40 قدم (67 CBM)" : "40' General Container (67 CBM)"}</option>
                    <option value="LCL_5CBM">{lang === 'AR' ? "شحن جزئي LCL (1-10 CBM)" : "LCL Palletized (1-10 CBM)"}</option>
                    <option value="AIR_500KG">{lang === 'AR' ? "شحن جوي (>500 كجم)" : "Air Freight (>500 kg)"}</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Stylized Visual Route Arc Banner (Inspired by the world map route line in reference image) */}
            <div className="relative rounded-2xl bg-linear-to-r from-blue-50/70 via-slate-50 to-blue-50/70 border border-blue-100/80 p-5 overflow-hidden">
              
              {/* Subtle map watermark background */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                <svg viewBox="0 0 1000 360" className="w-full h-full object-cover">
                  <path d="M 50,150 Q 200,80 350,120 T 650,140 T 950,90" fill="none" stroke="#2563EB" strokeWidth="1" />
                  <circle cx="150" cy="180" r="4" fill="#2563EB" />
                  <circle cx="380" cy="110" r="3" fill="#2563EB" />
                  <circle cx="620" cy="190" r="5" fill="#2563EB" />
                  <circle cx="820" cy="140" r="4" fill="#2563EB" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Origin Pin */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30 shrink-0 font-bold text-xs">
                    {origin.code.slice(0, 3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-800 font-bold uppercase tracking-wider">
                      <span>{lang === 'AR' ? 'مركز المنشأ' : 'Origin Hub'}</span>
                    </div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {origin.city}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {origin.name}
                    </div>
                  </div>
                </div>

                {/* Animated Curved Trajectory Line (like the flight path in reference) */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 w-full">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-blue-700 mb-1">
                    {selectedMode === 'sea_fcl' || selectedMode === 'sea_lcl' ? (
                      <Ship className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                    ) : selectedMode === 'air' ? (
                      <Plane className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <Train className="w-3.5 h-3.5 text-blue-600" />
                    )}
                    <span>{lang === 'AR' ? 'المسار البحري والمتعدد الوسائط المباشر' : 'Direct Maritime & Intermodal Corridor'}</span>
                  </div>

                  {/* SVG Route Line with Dotted Dash & Traveler Icon */}
                  <div className="w-full relative h-10 flex items-center justify-center">
                    <svg className="w-full h-10 overflow-visible" viewBox="0 0 300 40">
                      <path
                        d="M 10,30 Q 150,-10 290,30"
                        fill="none"
                        stroke="#0052FF"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        className="opacity-80"
                      />
                      {/* Midpoint traveling icon */}
                      <circle cx="150" cy="10" r="5" fill="#0052FF" className="animate-ping opacity-40" />
                      <circle cx="150" cy="10" r="4" fill="#0052FF" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-600 font-medium">
                    <span className="font-bold text-slate-900">
                      ~{transitDays} Transit Days
                    </span>
                    <span>•</span>
                    <span className="text-blue-700 font-semibold">
                      {routeInfo.departures}
                    </span>
                  </div>
                </div>

                {/* Destination Pin */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-end text-left sm:text-right">
                  <div className="order-2 sm:order-1">
                    <div className="flex items-center justify-start sm:justify-end gap-1.5 text-xs text-emerald-800 font-bold uppercase tracking-wider">
                      <span>{lang === 'AR' ? 'الوجهة' : 'Destination'}</span>
                    </div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {dest.city}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {dest.code}
                    </div>
                  </div>
                  <div className="order-1 sm:order-2 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md shrink-0 font-bold text-xs">
                    {dest.code.slice(0, 3)}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Row: Local Team Avatars + Action CTA button (Select places >>> in reference) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              
              {/* Boots on the ground / Specialists in China */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-slate-800 text-white font-bold text-xs flex items-center justify-center" title="Marcus - Shenzhen Port Lead">
                    MC
                  </div>
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-blue-600 text-white font-bold text-xs flex items-center justify-center" title="Elena - Shanghai Port Lead">
                    EW
                  </div>
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-amber-600 text-white font-bold text-xs flex items-center justify-center" title="Kevin - Ningbo & Yiwu Lead">
                    KZ
                  </div>
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                    +18
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {lang === 'AR' ? 'فريق عمليات ثنائي اللغة' : 'Bilingual China Ops Team'}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {lang === 'AR' ? 'مشرفون ميدانيون في الموانئ الصينية' : 'On-dock supervisors in Yantian, Ningbo & HK'}
                  </p>
                </div>
              </div>

              {/* Blue Pill CTA Button (Directly inspired by "Select places >>>" from reference) */}
              <button
                onClick={() => onOpenQuote({
                  origin: `${origin.city} (${origin.code})`,
                  dest: `${dest.name} (${dest.code})`,
                  mode: selectedMode,
                  cargo: cargoType
                })}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-3 group"
              >
                <span>{lang === 'AR' ? 'احجز السعر والمساحة الآن' : 'Lock In Freight Rate & Space'}</span>
                <span className={`font-normal text-blue-200 group-hover:${isRtl ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRtl ? 'rotate-180' : ''}`}>›››</span>
              </button>

            </div>

          </div>

          {/* Right Column: Dark Modern Port Telemetry Card (directly matching dark cards in reference image!) */}
          <div className="xl:col-span-4 flex flex-col space-y-4">
            
            {/* Top dark city weather card */}
            <div className="bg-[#141722] text-white rounded-3xl p-5 shadow-lg border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {lang === 'AR' ? 'مؤشر الميناء' : 'Port Origin Focus'}
                  </span>
                  <h3 className="text-lg font-extrabold text-white font-['Space_Grotesk']">
                    {activePortStatus.city}, CN
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-white">
                    {activePortStatus.tempC}°C
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium block">
                    {activePortStatus.weather}
                  </span>
                </div>
              </div>

              {/* Port Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 my-3">
                {LIVE_PORT_STATUSES.map((port, idx) => (
                  <button
                    key={port.portCode}
                    onClick={() => setSelectedPortStatusIndex(idx)}
                    className={`py-1.5 px-1 rounded-xl text-center text-xs font-bold transition-colors ${
                      selectedPortStatusIndex === idx
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {port.portCode}
                  </button>
                ))}
              </div>

              {/* Micro specs: Humidity / Wind / Berth */}
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-800/60 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-0.5">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{lang === 'AR' ? 'وقت الانتظار' : 'Berth Wait'}</span>
                  </div>
                  <span className="text-xs font-bold text-white">
                    {activePortStatus.avgBerthWaitHours} {lang === 'AR' ? 'س' : 'hrs'}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-0.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{lang === 'AR' ? 'الجمارك' : 'Customs'}</span>
                  </div>
                  <span className="text-xs font-bold text-white">
                    {activePortStatus.customsDwellHours} {lang === 'AR' ? 'س' : 'hrs'}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-0.5">
                    <Ship className="w-3 h-3 text-cyan-400" />
                    <span>{lang === 'AR' ? 'الرحلات' : 'Sailings'}</span>
                  </div>
                  <span className="text-xs font-bold text-white">
                    {activePortStatus.weeklySailings}/{lang === 'AR' ? 'أسبوع' : 'wk'}
                  </span>
                </div>
              </div>

              {/* Weekly Cargo Flow Bar Chart (like the 7-bar chart in the reference) */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300 font-medium">{lang === 'AR' ? 'مؤشر الإنتاجية الأسبوعي' : 'Weekly Throughput Index'}</span>
                  <span className="text-emerald-400 font-bold text-[11px]">{lang === 'AR' ? 'تدفق طبيعي' : 'Normal Flow'}</span>
                </div>
                
                {/* 7 Micro Bars */}
                <div className="h-16 flex items-end justify-between gap-1.5 px-1">
                  {[
                    { day: 'Mon', h: 60 },
                    { day: 'Tue', h: 82 },
                    { day: 'Wed', h: 48 },
                    { day: 'Thu', h: 72 },
                    { day: 'Fri', h: 95 },
                    { day: 'Sat', h: 88 },
                    { day: 'Sun', h: 55 },
                  ].map((bar, i) => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className={`w-full rounded-t-sm transition-all duration-500 ${
                          i === 4 ? 'bg-blue-500' : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                        style={{ height: `${bar.h}%` }}
                      ></div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick China Verification badge card */}
            <div className="bg-[#141722] text-white rounded-3xl p-5 shadow-sm border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">
                    {lang === 'AR' ? 'مرخص من NVOCC و SAMR' : 'NVOCC & SAMR Licensed'}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'AR' ? 'كيان قانوني مزدوج في شنتشن وهونغ كونغ' : 'Dual legal entity in Shenzhen & Hong Kong'}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                {lang === 'AR' ? 'مضمون 100%' : '100% Bonded'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
