import React from 'react';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_INFO } from '../../data/companyData';
import { PageId } from '../../types';

interface CTASectionProps {
  onNavigate: (page: PageId) => void;
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onNavigate,
  title = "Ready to Mobilize for Your Next Engineering Project?",
  subtitle = "Partner with KFT Uduboh for dependable civil construction, dredging, marine vessel logistics, and heavy machinery support across Nigeria."
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#071938] via-[#0A3982] to-[#170006] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D71920]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0A3982]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white mb-6 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse"></span>
          24/7 Rapid Mobilization & Operational Readiness
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate('contact')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Technical Proposal
          </Button>
          <Button
            variant="white"
            size="lg"
            onClick={() => onNavigate('fleet')}
          >
            View Equipment & Vessel Fleet
          </Button>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-300">
          <a
            href={`tel:${COMPANY_INFO.phones[0].value}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#D71920]" />
            <span>Direct Line: {COMPANY_INFO.phones[0].display}</span>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.emails[0].value}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-[#D71920]" />
            <span>{COMPANY_INFO.emails[0].value}</span>
          </a>
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Head Office: Effurun, Delta State
          </span>
        </div>
      </div>
    </section>
  );
};
