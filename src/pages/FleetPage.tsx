import React, { useState } from 'react';
import { Truck, Ship, Wrench, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { EQUIPMENT_FLEET_DATA } from '../data/equipmentData';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface FleetPageProps {
  onNavigate: (page: PageId) => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Heavy Earthmoving', 'Marine Vessels', 'Dredging Equipment', 'Lifting & Haulage'];

  const filtered = selectedCategory === 'All'
    ? EQUIPMENT_FLEET_DATA
    : EQUIPMENT_FLEET_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              Company Fleet & Assets
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Heavy Equipment & Marine Vessel Leasing Fleet
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Fully certified tracked machinery, amphibious swamp buggies, tugboats, spud barges, and hydraulic suction dredgers ready for rapid mobilization on wet or dry lease terms.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0A3982] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Fleet Catalog */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-[#0A3982] hover:shadow-lg transition-all"
              >
                <div>
                  {/* Image & Category Ribbon */}
                  <div className="relative h-56 bg-slate-900 overflow-hidden group">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A3982] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {item.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                      Available for Lease
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded border border-white/10">
                      {item.capacity}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.name}
                    </h3>

                    {/* Technical Specifications Table */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Technical Specifications:
                      </div>
                      <div className="space-y-1.5 text-xs">
                        {Object.entries(item.specs).map(([key, val]) => (
                          <div key={key} className="flex justify-between border-b border-slate-200/60 pb-1">
                            <span className="text-slate-500 font-medium">{key}:</span>
                            <span className="font-bold text-slate-800 text-right">{String(val)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typical Field Applications */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Field Applications:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.applications.map((app, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-blue-50 text-[#0A3982] font-semibold px-2.5 py-0.5 rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Lease Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Wet or Dry Lease</span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate('contact')}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Check Mobilization Rate
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Lease Structure Explainer Banner */}
          <div className="mt-16 bg-white rounded-2xl border-2 border-slate-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                Flexible Contract Structures
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Wet Lease vs. Dry Lease Options
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored equipment supply models engineered to suit your project's cash flow, site staffing, and regulatory requirements.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#0A3982]">1. Full Wet Lease (Turnkey)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipment supplied complete with verified certified machine operators, dedicated field mechanical support, routine lube servicing, and comprehensive marine/machinery insurance coverage.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#0A3982]">2. Dry Lease (Bareboat Hire)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cost-effective bare equipment or barge hire for established contractors with in-house certified operators and maintenance capabilities. Supported by technical handover inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
