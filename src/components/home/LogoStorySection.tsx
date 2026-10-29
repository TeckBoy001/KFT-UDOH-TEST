import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_INFO } from '../../data/companyData';

export const LogoStorySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Story Behind Our Mark"
          title="The Geometry of Strength & Precision"
          description="Every element of the KFT Uduboh visual identity originates from the physical machinery and engineering discipline that power our field operations."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Graphic Anatomy of the Logo (6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Visual Standards & Geometric Grid
              </span>
              <span className="text-xs font-semibold text-[#0A3982] bg-blue-50 px-2.5 py-1 rounded">
                Brand Formation
              </span>
            </div>

            <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-100 p-4">
              <img
                src="/assets/slides/4-2.png"
                alt="Logo Development Grid"
                className="w-full h-auto max-h-72 object-contain mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#0A3982]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A3982]">
                  The Perfect Square
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Represents stability, balance, corporate governance, and unyielding dependability across onshore and marine environments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#D71920]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                  Boom & Dipper Arm
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  The articulated inner triangle reflects heavy-duty machinery power, precision excavation, and forward mobilization.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Meaning & Color Symbolism (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                "Built with Strength, Driven by Precision, Committed to Delivery"
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.logoPhilosophy.inspiration}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.logoPhilosophy.articulation}
              </p>
            </div>

            {/* Color Palette Philosophy */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Official Color Hierarchy
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3982] shrink-0 shadow-sm flex items-center justify-center text-white text-[10px] font-bold">
                    #0A3982
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">KFT Navy Blue</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Represents institutional stability, engineering authority, maritime depth, and calm leadership in complex projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D71920] shrink-0 shadow-sm flex items-center justify-center text-white text-[10px] font-bold">
                    #D71920
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">KFT Crimson Red</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Represents energy, decisive operational action, strength, and unwavering determination in the most demanding conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#333333] shrink-0 shadow-sm flex items-center justify-center text-white text-[10px] font-bold">
                    #333333
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Industrial Charcoal</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Represents mechanical durability, structural steel, and grounded technical realism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
