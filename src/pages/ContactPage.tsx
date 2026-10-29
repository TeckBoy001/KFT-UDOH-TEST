import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Compass, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { OfficeLocations } from '../components/contact/OfficeLocations';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate?: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              Operations Desk & Technical Inquiries
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Connect with KFT Uduboh Nigeria Limited
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Reach our engineering management teams in Effurun and Gbaramatu Kingdom for project bidding, equipment mobilization, tender submissions, or emergency marine support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Proposal & Dispatch Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Verified Office Bases & Direct Contacts (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#071328] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920]">
                  <Phone className="w-4 h-4" />
                  Direct Technical Inquiries
                </div>
                <h3 className="text-2xl font-black leading-snug">
                  Immediate Machinery & Vessel Dispatch
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For urgent heavy equipment hiring, tugboat towage, or emergency riverine navigation assistance, reach our duty operations desk directly.
                </p>

                <div className="pt-2 space-y-3">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].value}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-sm font-bold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D71920] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">Primary Operations Line</div>
                      <div className="text-white">{COMPANY_INFO.phones[0].display}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phones[1].value}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-sm font-bold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0A3982] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">Executive Desk</div>
                      <div className="text-white">{COMPANY_INFO.phones[1].display}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.emails[0].value}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-sm font-bold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">Official Tender Submissions</div>
                      <div className="text-white text-xs">{COMPANY_INFO.emails[0].value}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Verified Locations Component */}
              <OfficeLocations />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
