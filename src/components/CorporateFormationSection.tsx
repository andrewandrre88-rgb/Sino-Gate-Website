import React, { useState } from 'react';
import { CORPORATE_COMPARISON } from '../data/logisticsData';
import { 
  Building2, 
  Landmark, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Coins, 
  Stamp, 
  Globe2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface CorporateFormationProps {
  onOpenQuote: (service?: string) => void;
}

export const CorporateFormationSection: React.FC<CorporateFormationProps> = ({ onOpenQuote }) => {
  const [activeView, setActiveView] = useState<'both' | 'china' | 'hk'>('both');

  return (
    <section id="corporate" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 font-['Space_Grotesk']">
            <span>Corporate Expansion</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>China WFOE & Hong Kong Limited</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Establish your legal commercial presence in China & Hong Kong
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need a domestic Mainland WFOE to hire local staff and issue VAT Fapiao, or a fast-track Hong Kong company for tax-efficient global trading and international banking, Sino Gate handles the entire government filing from start to finish.
          </p>
        </div>

        {/* Two Flagship Cards: China WFOE vs HK Limited */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Open a Company in China (Mainland WFOE) */}
          <div id="company-china" className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-9 border border-slate-200 hover:border-blue-400 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xl shadow-xs">
                  🇨🇳
                </div>
                <span className="text-[11px] font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                  Mainland China Entity
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk'] mb-2">
                Open a Company in China (WFOE)
              </h3>
              <p className="text-xs font-semibold text-slate-500 mb-6">
                Wholly Foreign-Owned Enterprise • Full Mainland Operational Rights
              </p>

              <div className="space-y-3.5 mb-8 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <Stamp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Official Chinese Company Chops</strong>
                    <span>Legal registration of Company Chop, Legal Rep Chop, Financial Chop, and Contract Seal with the Public Security Bureau (PSB).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">VAT Fapiao Invoicing Authority</strong>
                    <span>Full authorization to issue official Chinese tax invoices (General or 13% Special VAT Fapiao), allowing domestic clients to deduct tax.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <Landmark className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">RMB & Foreign Capital Bank Accounts</strong>
                    <span>Corporate accounts at Bank of China, ICBC, or HSBC China with SAFE (State Administration of Foreign Exchange) registration.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Registered Address & Resident Rep</strong>
                    <span>Compliant commercial registered addresses in Shenzhen (Futian/Qianhai), Shanghai, or Guangzhou, plus visa sponsorship for foreign executives.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-800 block">Timeline: 3 - 5 Weeks</span>
                <span>Includes all government approvals</span>
              </div>
              <button
                onClick={() => onOpenQuote('china_wfoe')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Start China WFOE Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Open a Company in Hong Kong */}
          <div id="company-hk" className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-9 border border-blue-200 hover:border-blue-500 transition-all shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider">
              Fast Track • 48 Hours
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl shadow-xs">
                  🇭🇰
                </div>
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mr-24">
                  Hong Kong SAR Entity
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk'] mb-2">
                Open a Company in Hong Kong
              </h3>
              <p className="text-xs font-semibold text-blue-700 mb-6">
                Hong Kong Limited Company • 100% Remote Formation • 0% Offshore Tax
              </p>

              <div className="space-y-3.5 mb-8 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">48-Hour Rapid Electronic Filing</strong>
                    <span>Certificate of Incorporation (CI) and Business Registration (BR) issued electronically via the Hong Kong Companies Registry.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <Coins className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Two-Tier Low Tax Regime (8.25%)</strong>
                    <span>Only 8.25% profits tax on the first HKD 2,000,000 profit; 16.5% standard. 0% tax on qualified offshore-derived profits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <Globe2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">International Multi-Currency Banking</strong>
                    <span>Guaranteed bank introduction to HSBC HK, Standard Chartered, or instant business accounts with Airwallex, Statrys, and Currenxie.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Licensed Company Secretary & Address</strong>
                    <span>Sino Gate provides full TCSP-licensed corporate secretary, designated representative for SCR, and prestigious Central HK address.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-800 block">Timeline: 2 Business Days</span>
                <span>Zero physical travel required</span>
              </div>
              <button
                onClick={() => onOpenQuote('hk_company')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/25"
              >
                <span>Incorporate in Hong Kong</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                Side-by-Side Entity Comparison
              </h3>
              <p className="text-xs text-slate-500">
                Determine which legal structure matches your operational model
              </p>
            </div>
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full self-start sm:self-auto">
              Updated for 2026 Foreign Investment Laws
            </span>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300/80">
                  <th className="py-3 px-4 text-slate-400 font-bold uppercase tracking-wider w-1/4">
                    Key Dimension
                  </th>
                  <th className="py-3 px-4 text-slate-900 font-extrabold text-sm w-3/8 bg-slate-100/50 rounded-tl-xl">
                    Mainland China WFOE
                  </th>
                  <th className="py-3 px-4 text-blue-900 font-extrabold text-sm w-3/8 bg-blue-50/60 rounded-tr-xl">
                    Hong Kong Limited Company
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CORPORATE_COMPARISON.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-white/50'}>
                    <td className="py-4 px-4 font-bold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-600 leading-relaxed bg-slate-100/20">
                      {row.wfoeChina}
                    </td>
                    <td className="py-4 px-4 text-slate-600 leading-relaxed bg-blue-50/20 font-medium">
                      {row.hkCompany}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-slate-600">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                <strong>Hybrid Corporate Structure (Most Popular):</strong> Form a Hong Kong parent holding company that owns 100% of your Mainland China WFOE. This combines 0% offshore trading benefits with full domestic China operational access.
              </span>
            </div>
            <button
              onClick={() => onOpenQuote('hybrid_structure')}
              className="shrink-0 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
            >
              Consult on Hybrid Structure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
