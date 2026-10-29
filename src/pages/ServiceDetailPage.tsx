import React, { useState } from 'react';
import { 
  Ship, Anchor, Waves, ShieldCheck, ChevronDown, ChevronUp, CheckCircle, ArrowRight, MapPin, Gauge 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { FAQS_DATA } from '../data/faqsData';
import { PageId } from '../types';

interface ServiceDetailPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marineFaqs = FAQS_DATA.filter(f => f.category === 'Marine & Dredging' || f.category === 'General & Engagement');

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#170006] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              Solutions Spotlight
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Marine Operations, Dredging & Coastal Civil Engineering
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Navigating shallow waterways, executing capital dredging, and stabilizing vulnerable Niger Delta shorelines with company-owned tugboats, spud barges, and cutter suction dredgers.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Operational Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#D71920]"></span>
                <span className="text-xs uppercase tracking-widest font-bold text-[#D71920]">
                  Waterways Leadership
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B]">
                Mastering Coastal & Riverine Logistics from Effurun to Gbaramatu
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-900 border-l-4 border-[#0A3982] pl-4 py-1">
                The Delta coastal environment presents immense operational challenges: tidal differentials exceeding 2 meters, shifting sand shoals, dense mangrove root systems, and remote energy locations without road connectivity.
              </p>

              <p>
                KFT Uduboh’s specialized marine division integrates shallow-draft twin-screw tugboats, 1000-ton heavy deck spud barges, and amphibious swamp buggies to mobilize heavy industrial equipment, drill rigs, and materials deep into coastal creek systems.
              </p>

              <p>
                From our strategic marine terminal in Kurutie Town, Gbaramatu Kingdom, we maintain immediate access to the Escravos and Forcados waterways, providing commercial barge freight, capital dredging, and 24/7 emergency water towing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-sm text-[#0A3982] flex items-center gap-1.5">
                    <Ship className="w-4 h-4 text-[#D71920]" />
                    <span>Heavy Cargo Barging</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Up to 1,000 MT deadweight capacity with dual hydraulic spuds for precision offshore positioning.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-sm text-[#0A3982] flex items-center gap-1.5">
                    <Waves className="w-4 h-4 text-[#D71920]" />
                    <span>18" Hydraulic Dredging</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Channel deepening up to 14m depth with discharge slurry pipelines reaching 2.5km inland.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative">
                <img
                  src="/assets/slides/1-2.png"
                  alt="KFT Uduboh Marine & Dredging Standards"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
                      Coastal Operations
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Construction | Marine | Dredging | Equipment Hire
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A3982] to-[#072659] text-white space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#D71920]" />
                  Operational Specifications:
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Tugboat Main Engines:</span>
                    <span className="font-bold">2,400 BHP Twin-Screw Caterpillar</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Shallow Draft Operating Depth:</span>
                    <span className="font-bold">Down to 1.8m at low tide</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Spud Barge Deck Plating:</span>
                    <span className="font-bold">10 Ton/m² Heavy Structural Steel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Dredge Slurry Production:</span>
                    <span className="font-bold">650 m³/hour solid output</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Marine Delivery Workflow */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technical Workflow"
            title="Marine Deployment & Dredging Execution Lifecycle"
            description="How our marine team plans, clears waterways, anchors vessels, and completes coastal stabilization safely."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#0A3982] font-black text-sm flex items-center justify-center">
                01
              </span>
              <h4 className="text-base font-bold text-slate-900">Hydrographic Survey</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-beam echo soundings to determine exact silt volume, riverbed bathymetry, and navigational obstacles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-lg bg-red-50 text-[#D71920] font-black text-sm flex items-center justify-center">
                02
              </span>
              <h4 className="text-base font-bold text-slate-900">Tide & Channel Clearance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tide window calculations and armed marine transit clearances along Escravos and Warri river arteries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#0A3982] font-black text-sm flex items-center justify-center">
                03
              </span>
              <h4 className="text-base font-bold text-slate-900">Spud Pinning & Dredging</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deploying heavy spuds to lock floating plant into coordinates, initiating cutter suction or sheet pile installation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-lg bg-red-50 text-[#D71920] font-black text-sm flex items-center justify-center">
                04
              </span>
              <h4 className="text-base font-bold text-slate-900">Bathymetric Sign-Off</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post-dredging sounding certification to confirm contracted chart datum depths and environmental clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Work FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technical Questions"
            title="Frequently Asked Questions: Marine & Dredging"
            description="Clear answers regarding mobilization lead-times, draft limits, and environmental safeguards."
          />

          <div className="mt-12 space-y-4">
            {marineFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left bg-slate-50/70 hover:bg-slate-100/70 flex items-center justify-between transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0A3982] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('contact')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Consult with Marine Operations Specialist
            </Button>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
