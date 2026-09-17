import React, { useState } from 'react';
import { Anchor, Phone, Mail, Globe, Menu, X, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (defaultService?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'ZH'>('EN');

  const navLinks = [
    { id: 'logistics', label: 'Logistics & Freight', href: '#logistics' },
    { id: 'sourcing', label: 'China Sourcing', href: '#sourcing' },
    { id: 'inspection', label: 'Quality Inspection (AQL)', href: '#inspection' },
    { id: 'company-china', label: 'China WFOE Setup', href: '#company-china' },
    { id: 'company-hk', label: 'Hong Kong Company', href: '#company-hk' },
    { id: 'offices', label: 'China Hubs', href: '#offices' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top micro-bar: Verified operational status & hotline */}
      <header className="w-full bg-[#111622] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Operations Live: Shenzhen • Hong Kong • Ningbo • Yiwu</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Beijing Time: GMT+8 (Business Hours Open)</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a href="tel:+8675588269100" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Shenzhen HQ:</span> +86 755 8826 9100
            </a>
            <a href="tel:+85228105988" className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>HK Hub:</span> +852 2810 5988
            </a>
            <button
              onClick={() => setLang(lang === 'EN' ? 'ZH' : 'EN')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold flex items-center gap-1 transition-all"
            >
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{lang === 'EN' ? 'EN / 中文' : '中文 / EN'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Primary Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-bold text-xl tracking-tight">
              <span className="font-['Space_Grotesk'] text-white text-lg">SG</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk']">
                  SINO GATE
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  華門國際
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                China Trade & Logistics Gateway
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-normal transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA Group */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#logistics')}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Route Planner
            </button>
            <button
              onClick={() => onOpenQuote()}
              id="nav-quote-btn"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all flex items-center gap-1.5"
            >
              <span>Instant Quote / RFQ</span>
              <span className="text-blue-200 font-normal">›››</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="sm:hidden px-3.5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-bold text-center shadow-sm"
              >
                Request Consultation / Formal RFQ
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
