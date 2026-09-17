import React, { useState, useMemo } from 'react';
import { INSPECTION_SERVICES, AQL_TABLE } from '../data/logisticsData';
import { 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle, 
  FileCheck2, 
  Camera, 
  Sliders, 
  Download, 
  Eye, 
  Check,
  Building,
  Truck,
  Layers
} from 'lucide-react';

interface QualityInspectionProps {
  onOpenQuote: (service?: string) => void;
}

export const QualityInspectionSection: React.FC<QualityInspectionProps> = ({ onOpenQuote }) => {
  const [selectedInspectionId, setSelectedInspectionId] = useState<string>('psi');
  const [lotSizeInput, setLotSizeInput] = useState<number>(3500);
  const [showChecklistModal, setShowChecklistModal] = useState<boolean>(false);

  // Determine AQL metrics based on lot size
  const aqlResult = useMemo(() => {
    const matched = AQL_TABLE.find(row => lotSizeInput >= row.minLot && lotSizeInput <= row.maxLot);
    return matched || AQL_TABLE[AQL_TABLE.length - 1];
  }, [lotSizeInput]);

  const activeService = INSPECTION_SERVICES.find(s => s.id === selectedInspectionId) || INSPECTION_SERVICES[0];

  return (
    <section id="inspection" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 font-['Space_Grotesk']">
            <span>Factory Quality Inspection</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>ISO 2859-1 (AQL Level II)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Never pay your final supplier balance without an independent check
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our certified bilingual inspectors arrive at the factory anywhere in China within 48 hours. You receive an exhaustive 40+ page photographic report with high-resolution video proof before goods leave the factory gate.
          </p>
        </div>

        {/* 4 Inspection Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {INSPECTION_SERVICES.map((serv) => {
            const isSelected = selectedInspectionId === serv.id;
            return (
              <button
                key={serv.id}
                onClick={() => setSelectedInspectionId(serv.id)}
                className={`text-left p-6 rounded-3xl transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {serv.shortCode}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {serv.turnaround.split(' ')[0]} turnaround
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {serv.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {serv.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-700">
                  <span>Explore Standard</span>
                  <span className="text-base font-normal">→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Inspection */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center font-['Space_Grotesk'] text-sm">
                  {activeService.shortCode}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                    {activeService.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700">
                    Production Gate: {activeService.stage}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeService.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-xs">
                  <FileCheck2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Formal Deliverable:</strong>
                    <span className="text-slate-600">{activeService.deliverable}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Recommended Application:</strong>
                    <span className="text-slate-600">{activeService.idealFor}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowChecklistModal(true)}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Inspect Checkpoint Protocol</span>
                </button>
                <button
                  onClick={() => onOpenQuote(`inspection_${activeService.id}`)}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Book Inspector in China</span>
                  <span className="text-blue-200">›››</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive ISO 2859-1 (AQL Level II) Calculator */}
            <div className="lg:col-span-5 bg-[#141722] text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    AQL Sampling Calculator
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  ISO 2859-1
                </span>
              </div>

              {/* Order Quantity Input */}
              <div className="my-5">
                <label className="text-xs font-bold text-slate-400 block mb-2">
                  Your Production Batch Size (Units):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="10"
                    max="500000"
                    value={lotSizeInput}
                    onChange={(e) => setLotSizeInput(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-slate-800/90 text-white font-mono text-lg font-bold px-4 py-2.5 rounded-xl border border-slate-700 focus:outline-hidden focus:border-blue-500"
                  />
                  <span className="text-xs text-slate-400 font-bold uppercase">pcs</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Lot Range Bracket: <span className="text-blue-400 font-semibold">{aqlResult.lotRange} units</span>
                </p>
              </div>

              {/* Sampling Results Grid */}
              <div className="space-y-2.5 py-4 border-t border-slate-800 text-xs">
                
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60">
                  <span className="text-slate-300 font-medium">Random Cartons Pull Size:</span>
                  <span className="text-base font-extrabold text-blue-400 font-mono">
                    {aqlResult.sampleSize} units inspected
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center">
                    <span className="text-[10px] text-rose-400 font-bold uppercase block mb-1">
                      Critical Defect
                    </span>
                    <span className="text-lg font-extrabold text-white font-mono">
                      {aqlResult.criticalAccept}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Zero tolerance</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center">
                    <span className="text-[10px] text-amber-400 font-bold uppercase block mb-1">
                      Major Defect
                    </span>
                    <span className="text-lg font-extrabold text-white font-mono">
                      ≤ {aqlResult.majorAccept}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">AQL 2.5 standard</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
                      Minor Defect
                    </span>
                    <span className="text-lg font-extrabold text-white font-mono">
                      ≤ {aqlResult.minorAccept}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">AQL 4.0 standard</span>
                  </div>
                </div>

              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Standard General Inspection Level II</span>
                <span className="text-emerald-400 font-bold">18-Hour Digital PDF Delivery</span>
              </div>
            </div>

          </div>
        </div>

        {/* Modal: Inspection Protocol Preview */}
        {showChecklistModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-['Space_Grotesk']">
                      Sino Gate On-Site Inspection Protocol
                    </h3>
                    <p className="text-xs text-slate-500">Standard criteria executed on factory floor</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChecklistModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    1. Workmanship & Cosmetic Inspection
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Inspecting under 1000 lux illumination for scratches, paint defects, flash/burrs, loose threads, color pantone deviation, and assembly gaps.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    2. Packaging & Barcode Verification
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Scanning UPC/EAN retail barcodes with handheld scanners, verifying Amazon FBA pallet labels, shipping marks, polybag suffocation warnings, and silica gel desiccant packs.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    3. On-Site Physical & Stress Testing
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    ISTA 1A Carton drop test (10 drops from specified height), hi-pot electrical safety check, rubbing test with 95% alcohol on printed silkscreen logos, torque/pull test.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    4. Quantity & Shipping Carton Integrity
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Gross weight and net weight calibration per carton, dimensional measurements (CBM), and counting total packaged cartons against purchase order bill of quantities.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowChecklistModal(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Close Preview
                </button>
                <button
                  onClick={() => {
                    setShowChecklistModal(false);
                    onOpenQuote('inspection');
                  }}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm"
                >
                  Book This Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
