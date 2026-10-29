import React from 'react';
import { Target, Eye, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/companyData';
import { PageId } from '../../types';

interface CompanyIntroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const CompanyIntroSection: React.FC<CompanyIntroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Company Overview"
          title="Engineering Solutions Across Land and Water"
          description="KFT Uduboh Nigeria Limited is an indigenous company committed to delivering robust engineering value from planning and mobilization through to execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Left Column: Authentic Brand Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#0A3982] shadow-sm">
              <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                "KFT Uduboh Nigeria Limited is a diversified Nigerian company delivering services across civil construction, marine operations, dredging, land reclamation, procurement and equipment and vessel hiring."
              </p>
              <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-[#0A3982]">
                Official Corporate Profile — Delta State, Nigeria
              </span>
            </div>

            <p className="text-sm sm:text-base">
              Our construction capabilities cover road construction, building works and other civil infrastructure projects, while our marine operations support demanding activities across waterways and coastal environments.
            </p>

            <p className="text-sm sm:text-base">
              We also provide dredging and land reclamation solutions, alongside access to barges, tugboats and other equipment required for marine and construction operations.
            </p>

            <p className="text-sm sm:text-base font-semibold text-slate-900">
              With a practical understanding of project requirements, we focus on delivering efficient, safe and dependable solutions from planning and mobilisation through to execution.
            </p>

            {/* Core Values Inline Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {COMPANY_INFO.coreValues.map((val) => (
                <div key={val.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0A3982]">
                    <CheckCircle className="w-4 h-4 text-[#D71920]" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="navy"
                size="md"
                onClick={() => onNavigate('about')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Our Heritage & Mission
              </Button>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Strategic Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Mission Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A3982] to-[#072453] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-white/5 rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D71920] flex items-center justify-center text-white shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                "{COMPANY_INFO.mission}"
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#170006] to-[#3a0913] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-white/5 rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A3982] flex items-center justify-center text-white shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                "{COMPANY_INFO.vision}"
              </p>
            </div>

            {/* Local Content & Safety Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Total Safety & Local Content Commitment</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  100% compliant with Nigerian coastal and petroleum sector local participation frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
