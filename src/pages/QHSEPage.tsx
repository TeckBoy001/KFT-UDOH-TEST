import React from 'react';
import { ShieldCheck, HeartHandshake, Leaf, HardHat, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { PageId } from '../types';

interface QHSEPageProps {
  onNavigate: (page: PageId) => void;
}

export const QHSEPage: React.FC<QHSEPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Operational Safety & Integrity
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Quality, Health, Safety, Environment & Community Relations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Targeting zero Lost Time Injuries (LTI), safeguarding delicate mangrove ecosystems, and building lasting harmony with host communities across Delta State.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars of QHSE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Four Safety Pillars"
            title="Rigorous Discipline Onshore & Across Waterways"
            description="Engineering excellence cannot exist without uncompromising safety protocols. Every operational hour is governed by certified QHSE procedures."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1: Quality */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-[#0A3982] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A3982] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Quality Assurance (QA/QC)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured inspection test plans (ITP), calibrated surveying instruments, and laboratory verification for all asphalt, concrete, and backfill materials.
              </p>
            </div>

            {/* Pillar 2: Safety & Health */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-[#D71920] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Occupational Health & Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandatory daily Toolbox Talks, Job Hazard Analysis (JHA) before every heavy lift or river transit, and strict 100% PPE compliance across all personnel.
              </p>
            </div>

            {/* Pillar 3: Environment */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-emerald-600 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Environmental Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Spill response kits on all marine vessels, sediment turbidity monitoring during dredging, and proactive restoration of riverbank mangrove corridors.
              </p>
            </div>

            {/* Pillar 4: Host Community */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-purple-600 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Host Community Relations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A 100% strike-free operational track record built through transparent dialogue with traditional councils, youth leadership, and local vendor inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Standards in the Field: Slide 14 Integration */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D71920]">
                Field Safety Standards
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
                Visible Identification & Safety Protocol Compliance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In hazardous civil construction yards and fast-moving riverine waterways, visual identification and certified PPE save lives. KFT Uduboh enforces strict corporate identity standards on all field equipment, protective gear, and vessel crews.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0A3982] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Certified Impact Helmets (PPE-Level 3)</h4>
                    <p className="text-xs text-slate-600">Equipped with reflective high-vis corporate decals for 360-degree site visibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0A3982] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">SOLAS-Approved Marine Flotation Vests</h4>
                    <p className="text-xs text-slate-600">Mandatory on all spud barges, tugboats, and riverine crew launches with auto-inflation whistles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0A3982] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Encoded Security & Medical Access Badging</h4>
                    <p className="text-xs text-slate-600">Instant on-site verification of medical fitness certification and emergency blood group data.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4">
                <img
                  src="/assets/slides/14-1.png"
                  alt="KFT Uduboh Safety Helmet and Badge Applications"
                  className="w-full h-auto rounded-xl object-contain"
                />
                <div className="pt-3 text-center text-xs text-slate-500 font-medium">
                  Official KFT Uduboh Safety Gear & Field Credential Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Relations & CASHES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#071328] to-[#0A3982] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920] bg-white/10 px-3 py-1 rounded-full">
                <HeartHandshake className="w-4 h-4" />
                Host Community Integration
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Our CASHES Charter: Peaceful Waterways, Empowered People
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                Operating successfully in the Niger Delta requires genuine mutual respect with host communities. We maintain dedicated Community Liaison Officers (CLOs) who work directly with youth councils and traditional leadership to ensure localized hiring, training, and seamless project execution.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-300">Peaceful Host Community Track Record</div>
              </div>
              <Button variant="primary" size="md" onClick={() => onNavigate('contact')}>
                Review Community Engagement Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
