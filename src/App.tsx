import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FreightServicesSection } from './components/FreightServicesSection';
import { SourcingSection } from './components/SourcingSection';
import { QualityInspectionSection } from './components/QualityInspectionSection';
import { CorporateFormationSection } from './components/CorporateFormationSection';
import { OfficesLocationsSection } from './components/OfficesLocationsSection';
import { Footer } from './components/Footer';
import { QuoteInquiryModal } from './components/QuoteInquiryModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDefaultData, setQuoteDefaultData] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleOpenQuote = (data?: any) => {
    if (typeof data === 'string') {
      setQuoteDefaultData({ service: data });
    } else if (data && typeof data === 'object') {
      setQuoteDefaultData(data);
    } else {
      setQuoteDefaultData(null);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setQuoteDefaultData(null);
  };

  // Track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['logistics', 'sourcing', 'inspection', 'company-china', 'company-hk', 'offices'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F9] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Primary Header */}
      <Navbar onOpenQuote={handleOpenQuote} activeSection={activeSection} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section with Interactive Route & Tariff Planner Card */}
        <HeroSection onOpenQuote={handleOpenQuote} />

        {/* 1. International Logistics & Multimodal Freight */}
        <FreightServicesSection onOpenQuote={handleOpenQuote} />

        {/* 2. Sourcing in China (Direct Factory Audits & NNN Contracts) */}
        <SourcingSection onOpenQuote={handleOpenQuote} />

        {/* 3. Quality Inspection (ISO 2859-1 AQL Level II Calculator & Protocols) */}
        <QualityInspectionSection onOpenQuote={handleOpenQuote} />

        {/* 4. Company Formation in China & Hong Kong (WFOE vs HK Ltd) */}
        <CorporateFormationSection onOpenQuote={handleOpenQuote} />

        {/* 5. Physical China Hubs (Shenzhen HQ, Hong Kong, Ningbo, Yiwu, Shanghai) */}
        <OfficesLocationsSection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Inquiry & Quotation Modal */}
      <QuoteInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        defaultData={quoteDefaultData}
      />
    </div>
  );
}
