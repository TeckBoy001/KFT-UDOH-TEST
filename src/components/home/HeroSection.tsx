import React from 'react';
import { ArrowRight, Anchor, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/companyData';
import { PageId } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071328] via-[#0A3982] to-[#082655] text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#D71920]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A3982]/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D71920] animate-pulse"></span>
              <span>KFT Uduboh Nigeria Limited</span>
              <span className="text-white/40">|</span>
              <span className="text-slate-300 font-normal">RC Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Built with Strength. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-white">
                Driven by Precision.
              </span>
            </h1>

            {/* Sub-headline / Specific Value Proposition */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A diversified Nigerian contractor delivering civil infrastructure, heavy marine operations, dredging, land reclamation, and equipment leasing across the Niger Delta and Nigeria.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0" />
                <span>Heavy Earthmoving & Swamp Fleets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0" />
                <span>Tugboats, Spud Barges & Dredgers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0" />
                <span>Effurun & Gbaramatu Operating Bases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0" />
                <span>Rigorous QHSE & NIMASA Standards</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('contact')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Mobilization / Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('services')}
                className="border-white/40 text-white hover:bg-white hover:text-[#0A3982]"
              >
                Explore Capabilities
              </Button>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Anchor className="w-3.5 h-3.5 text-[#D71920]" /> Coastal Riverine Marine Support
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Nigerian Content
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backing Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D71920] to-[#0A3982] rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-slate-900/90 to-[#071328]/95 border border-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                {/* Brand Logo Display */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <img
                    src="/assets/logos/6.0_White_LOGO_WHITE_primary_logo.png"
                    alt="KFT Uduboh Nigeria Limited"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D71920] bg-white/10 px-2 py-1 rounded">
                    Official Identity
                  </span>
                </div>

                {/* Identity Slide Visual: Excavator Boom & Dipper Arm */}
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 relative group">
                  <img
                    src="/assets/slides/5-2.png"
                    alt="KFT Uduboh Logo Formation - Boom and Dipper Arm"
                    className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide uppercase">
                        The Power of Articulation
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Excavator boom geometry representing heavy strength & precision execution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Credentials Strip */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xl sm:text-2xl font-black text-white">25+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Fleet Machinery Assets</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xl sm:text-2xl font-black text-[#D71920]">24/7</div>
                    <div className="text-[11px] text-slate-400 font-medium">Marine Standby Support</div>
                  </div>
                </div>

                {/* Slogan Pill */}
                <div className="text-center pt-2">
                  <p className="text-xs italic text-slate-300">
                    "{COMPANY_INFO.tagline}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
