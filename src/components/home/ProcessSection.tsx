import React from 'react';
import { Compass, Truck, Wrench, CheckCheck } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Engineering Survey & Site Assessment',
      desc: 'Topographic mapping, bathymetric riverbed depth soundings, and geotechnical soil evaluations tailored to Niger Delta terrain.',
      icon: <Compass className="w-6 h-6 text-[#0A3982]" />
    },
    {
      step: '02',
      title: 'Rapid Resource Mobilization',
      desc: 'Dispatching heavy tracked machinery, amphibious excavators, or marine spud barges from our Effurun yard and Gbaramatu base within 24–48 hours.',
      icon: <Truck className="w-6 h-6 text-[#D71920]" />
    },
    {
      step: '03',
      title: 'Precision Field Execution',
      desc: 'Adherence to certified engineering blueprints, automated level monitoring, and experienced operators for zero-defect output.',
      icon: <Wrench className="w-6 h-6 text-[#0A3982]" />
    },
    {
      step: '04',
      title: 'QHSE Compliance & Safe Handover',
      desc: 'Rigorous quality sign-offs, post-dredging bathymetry verification, and environmental site reinstatement under zero-LTI safety protocols.',
      icon: <CheckCheck className="w-6 h-6 text-[#D71920]" />
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Execution Methodology"
          title="From Mobilization to Handover: The KFT Standard"
          description="A disciplined operational approach engineered to guarantee uptime, cost predictability, and maximum safety in onshore and riverine environments."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, i) => (
            <div
              key={st.step}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0A3982] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {st.icon}
                </div>
                <span className="text-3xl font-black text-slate-200 group-hover:text-[#D71920] transition-colors">
                  {st.step}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0A3982] transition-colors leading-snug">
                {st.title}
              </h3>

              <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                {st.desc}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 font-bold text-xs pointer-events-none">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
