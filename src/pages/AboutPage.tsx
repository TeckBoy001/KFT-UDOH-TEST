import React from 'react';
import { Target, Eye, Shield, Award, MapPin, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              About KFT Uduboh Nigeria Limited
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Engineering Built on Strength, Executed with Precision.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Established with an unyielding commitment to engineering excellence, KFT Uduboh bridges high-level civil infrastructure, heavy marine logistics, and specialized field equipment across the Niger Delta and Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#D71920]"></span>
                <span className="text-xs uppercase tracking-widest font-bold text-[#D71920]">
                  Who We Are
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B]">
                Delivering Multidisciplinary Value from Planning to Mobilization
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-900 border-l-4 border-[#0A3982] pl-4 py-1">
                KFT Uduboh Nigeria Limited is a diversified Nigerian company delivering services across civil construction, marine operations, dredging, land reclamation, procurement and equipment and vessel hiring.
              </p>

              <p>
                Our construction capabilities cover road construction, building works and other civil infrastructure projects, while our marine operations support demanding activities across waterways and coastal environments.
              </p>

              <p>
                We also provide dredging and land reclamation solutions, alongside access to barges, tugboats and other equipment required for marine and construction operations.
              </p>

              <p>
                With a practical understanding of project requirements, we focus on delivering efficient, safe and dependable solutions from planning and mobilisation through to execution.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="primary" size="md" onClick={() => onNavigate('contact')}>
                  Engage Our Technical Team
                </Button>
                <Button variant="outline" size="md" onClick={() => onNavigate('fleet')}>
                  Inspect Fleet & Equipment
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative group">
                <img
                  src="/assets/slides/13-1.png"
                  alt="KFT Uduboh Engineering Team"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
                      Technical Competence
                    </span>
                    <h3 className="text-lg font-bold text-white">Built to Deliver: Onshore & Offshore</h3>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-[#0A3982]">100%</div>
                  <div className="text-xs text-slate-600 font-medium">Nigerian Owned & Operated</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#D71920]">Dual</div>
                  <div className="text-xs text-slate-600 font-medium">Delta State Operating Bases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Purpose & Values"
            title="The Principles That Steer Every Contract"
            description="Our corporate charter guides our personnel across civil jobsites and waterway operations."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#0A3982] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A3982] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A3982]">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 mb-4">
                Delivering Lasting Value to Clients
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                "{COMPANY_INFO.mission}"
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#D71920] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D71920]">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 mb-4">
                A Globally Recognized Engineering Leader
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                "{COMPANY_INFO.vision}"
              </p>
            </div>
          </div>

          {/* 3 Core Values */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val) => (
              <div key={val.title} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D71920]" />
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity & Visual Standards (Slides 4, 5, 10, 11, 14) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Corporate Identity & Standards"
            title="Designed for Heavy Industry Distinction"
            description="How our brand system communicates engineering excellence, equipment precision, and corporate responsibility."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Formation */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="h-48 rounded-xl overflow-hidden bg-white p-3 border border-slate-200/80 flex items-center justify-center">
                <img src="/assets/slides/5-2.png" alt="Logo Formation" className="max-h-full object-contain" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Heavy Machine Boom & Dipper Arm</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inspired by hydraulic excavators, representing our capacity to mobilise heavy earthmoving and dredging resources across challenging soil profiles.
              </p>
            </div>

            {/* Card 2: Typography & Standards */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="h-48 rounded-xl overflow-hidden bg-white p-3 border border-slate-200/80 flex items-center justify-center">
                <img src="/assets/slides/10-1.png" alt="Montserrat Typography" className="max-h-full object-contain" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Montserrat Typography Standard</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, geometric, authoritative sans-serif typography ensuring clear, legible technical documentation from engineering schematics to client proposals.
              </p>
            </div>

            {/* Card 3: Field Gear & Safety Applications */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="h-48 rounded-xl overflow-hidden bg-white p-3 border border-slate-200/80 flex items-center justify-center">
                <img src="/assets/slides/14-1.png" alt="Safety Applications" className="max-h-full object-contain" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Field Uniforms & PPE Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visual standards extend directly to high-visibility safety helmets, staff ID credentials, and marine flotation vests on all active jobsites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Operational Bases */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme="dark"
            eyebrow="Geographic Coverage"
            title="Strategic Operational Bases in Delta State"
            description="Our dual presence allows seamless coordination of onshore civil construction and complex riverine marine missions."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920]">
                <MapPin className="w-4 h-4" /> Head Office & Heavy Yard
              </div>
              <h3 className="text-xl font-bold text-white">Effurun / Warri Headquarters</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.headOffice.address}
              </p>
              <p className="text-xs text-slate-400">
                Central administrative hub, executive project oversight, machinery maintenance workshops, and procurement warehousing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A3982]">
                <MapPin className="w-4 h-4 text-blue-400" /> Marine & Coastal Base
              </div>
              <h3 className="text-xl font-bold text-white">Kurutie Town, Gbaramatu Kingdom</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.branchOffice.address}
              </p>
              <p className="text-xs text-slate-400">
                Waterway operations center, tugboat mooring jetty, spud barge staging, and coastal emergency response post.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
