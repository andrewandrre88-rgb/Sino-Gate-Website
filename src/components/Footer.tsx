import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#111622] text-slate-300 text-xs border-t border-slate-800">
      
      {/* Top Banner: Quick Consultation Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-700/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 font-['Space_Grotesk'] block mb-2">
              Ready to secure your China supply chain?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Speak with a bilingual China operations specialist today
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Whether you need urgent vessel space in Shenzhen, factory audits in Zhejiang, or rapid Hong Kong incorporation, our boots on the ground are ready.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+8675588269100"
              className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-600 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+86 755 8826 9100</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Request Immediate Quote</span>
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
              <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg font-['Space_Grotesk']">
                SG
              </div>
              <div>
                <span className="text-lg font-extrabold text-white font-['Space_Grotesk']">
                  SINO GATE
                </span>
                <span className="text-xs text-blue-400 font-semibold block">
                  華門國際供應鏈有限公司
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Sino Gate is an independent international freight forwarding and cross-border trade consultancy headquartered in Shenzhen and Hong Kong. We bridge international buyers directly with audited Chinese manufacturing and compliant corporate infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                NVOCC Registered
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                HK TCSP License
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                ISO 2859-1 Standards
              </span>
            </div>
          </div>

          {/* Col 2: Freight & Logistics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">
              Logistics & Freight
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#logistics" className="hover:text-white transition-colors">Ocean FCL Full Container</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">LCL Consolidation (1-15 CBM)</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">Air Express & Freight Charters</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">China-Europe Railway Express</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">DDP Door-to-Door Delivery</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">China Export Customs Brokerage</a></li>
            </ul>
          </div>

          {/* Col 3: Sourcing & Quality Inspection */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">
              Sourcing & Quality
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#sourcing" className="hover:text-white transition-colors">Direct Factory Sourcing</a></li>
              <li><a href="#sourcing" className="hover:text-white transition-colors">Chinese NNN Legal Contracts</a></li>
              <li><a href="#sourcing" className="hover:text-white transition-colors">Sample Consolidation Hub</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">Pre-Shipment Inspection (PSI)</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">During Production (DUPRO)</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">Container Loading Check (CLC)</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">Supplier Capability Audit (FSA)</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Setup */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk']">
              Company Formation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#company-china" className="hover:text-white transition-colors">Open a Company in China (WFOE)</a></li>
              <li><a href="#company-china" className="hover:text-white transition-colors">China Domestic Bank Accounts</a></li>
              <li><a href="#company-china" className="hover:text-white transition-colors">Chinese VAT Fapiao Setup</a></li>
              <li><a href="#company-hk" className="hover:text-white transition-colors">Open a Company in Hong Kong</a></li>
              <li><a href="#company-hk" className="hover:text-white transition-colors">HK Multi-Currency Banking</a></li>
              <li><a href="#company-hk" className="hover:text-white transition-colors">HK 0% Offshore Profit Exemption</a></li>
              <li><a href="#company-china" className="hover:text-white transition-colors">HK + WFOE Hybrid Structure</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Sino Gate Logistics & Corporate Advisory Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Shenzhen • Hong Kong • Ningbo • Yiwu • Shanghai</span>
            <span>Privacy & Confidentiality Protected</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
