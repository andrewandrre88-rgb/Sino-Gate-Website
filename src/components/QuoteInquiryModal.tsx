import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Clock, FileText, Phone, Mail, Building, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultData?: {
    service?: string;
    origin?: string;
    dest?: string;
    mode?: string;
    cargo?: string;
  };
}

export const QuoteInquiryModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultData }) => {
  const { lang, isRtl } = useLanguage();
  const [serviceType, setServiceType] = useState<string>('freight');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [origin, setOrigin] = useState<string>('Shenzhen (YTN)');
  const [destination, setDestination] = useState<string>('Port of Rotterdam (RTM)');
  const [details, setDetails] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Sync default data when opened
  useEffect(() => {
    if (defaultData) {
      if (defaultData.service) {
        if (defaultData.service.includes('inspection')) setServiceType('inspection');
        else if (defaultData.service.includes('sourcing')) setServiceType('sourcing');
        else if (defaultData.service.includes('wfoe') || defaultData.service.includes('china')) setServiceType('china_company');
        else if (defaultData.service.includes('hk')) setServiceType('hk_company');
        else setServiceType('freight');
      }
      if (defaultData.origin) setOrigin(defaultData.origin);
      if (defaultData.dest) setDestination(defaultData.dest);
      if (defaultData.cargo) {
        setDetails(`Cargo details: ${defaultData.cargo}. Transit mode: ${defaultData.mode || 'Ocean FCL'}.`);
      }
    }
  }, [defaultData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `SG-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedId(generatedId);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-slate-200 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedId ? (
          /* Confirmation View */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk']">
              Inquiry Received by Sino Gate
            </h3>
            
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your trade inquiry has been assigned reference <strong className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{submittedId}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 max-w-md mx-auto space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Next Operational Steps (Guaranteed SLA):</span>
              </div>
              <p>• A bilingual China trade specialist will review your cargo/specifications within <strong>1 business hour</strong>.</p>
              <p>• You will receive a direct formal breakdown via email ({email || 'your email'}) and WhatsApp.</p>
              <p>• Direct contact: <a href="tel:+8618567413851" className="text-blue-600 font-semibold" dir="ltr">+86 18567413851</a></p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Inquiry Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 font-['Space_Grotesk']">
              <span>Sino Gate Trade Desk</span>
              <span>•</span>
              <span>Direct Quotation & Inquiry</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk'] mb-2">
              Request a formal proposal & rates
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {lang === 'AR' ? 'الشحن، التوريد، الفحص، والتأسيس. نضمن الرد خلال ساعة عمل واحدة.' : 'China exports, local sourcing audits, quality inspection, and HK/China corporate formation. Response guaranteed within 1 business hour.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Type Selector Pills */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  {lang === 'AR' ? 'الخدمة المطلوبة' : 'Select Primary Service'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'freight', label: lang === 'AR' ? 'الشحن واللوجستيات' : 'Freight & Logistics' },
                    { id: 'sourcing', label: lang === 'AR' ? 'التوريد من الصين' : 'China Sourcing' },
                    { id: 'inspection', label: lang === 'AR' ? 'فحص الجودة' : 'Quality Inspection (AQL)' },
                    { id: 'china_company', label: lang === 'AR' ? 'تأسيس شركة صينية' : 'Open China Company' },
                    { id: 'hk_company', label: lang === 'AR' ? 'شركة هونغ كونغ' : 'Open HK Company' },
                    { id: 'other', label: lang === 'AR' ? 'استشارة أخرى' : 'Custom Trade Consulting' },
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceType(srv.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                        serviceType === srv.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Cooper"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. robert@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 415 555 0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pacific Imports LLC"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-50 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Conditional Route / Location Fields if Freight */}
              {serviceType === 'freight' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Origin Port / Factory City
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Destination Port / Delivery Address
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-white rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200 focus:outline-hidden"
                    />
                  </div>
                </div>
              )}

              {/* Requirement Details */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Cargo, Sourcing, or Formation Specifications
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="E.g. Estimated volume (CBM / gross kg), product category, factory location in China, desired incorporation timeline, or AQL inspection date."
                  className="w-full bg-slate-50 rounded-xl p-3 text-xs font-medium text-slate-900 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-blue-600"
                ></textarea>
              </div>

              {/* Security & Confidentiality guarantee */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your commercial data and CAD specs are strictly protected under Sino Gate NDA.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Request to China Operations</span>
                      <Send className="w-3.5 h-3.5 text-blue-200" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
