import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const OfficeLocations: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Head Office Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A3982]"></div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0A3982]/10 text-[#0A3982] mb-2">
              <Compass className="w-3 h-3" /> Corporate Headquarters
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">{COMPANY_INFO.headOffice.title}</h4>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A3982] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {COMPANY_INFO.headOffice.address}
        </p>

        <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-700">
            <Phone className="w-4 h-4 text-[#D71920] shrink-0" />
            <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="hover:text-[#0A3982] font-semibold transition-colors">
              {COMPANY_INFO.phones[0].display}
            </a>
            <span className="text-slate-300">|</span>
            <a href={`tel:${COMPANY_INFO.phones[1].value}`} className="hover:text-[#0A3982] transition-colors">
              {COMPANY_INFO.phones[1].display}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <Mail className="w-4 h-4 text-[#D71920] shrink-0" />
            <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="hover:text-[#0A3982] transition-colors">
              {COMPANY_INFO.emails[0].value}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-slate-500">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Mon – Fri: 08:00 – 17:30 WAT | 24/7 Field Dispatch Emergency</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Heavy Engineering Yard & Administrative Complex</span>
          <span className="font-semibold text-emerald-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Active Base
          </span>
        </div>
      </div>

      {/* Branch Office Card */}
      <div className="bg-white rounded-2xl border-2 border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D71920]"></div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D71920]/10 text-[#D71920] mb-2">
              <Compass className="w-3 h-3" /> Marine & Coastal Base
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">{COMPANY_INFO.branchOffice.title}</h4>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {COMPANY_INFO.branchOffice.address}
        </p>

        <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-700">
            <Phone className="w-4 h-4 text-[#D71920] shrink-0" />
            <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="hover:text-[#0A3982] font-semibold transition-colors">
              {COMPANY_INFO.phones[0].display}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <Mail className="w-4 h-4 text-[#D71920] shrink-0" />
            <a href={`mailto:${COMPANY_INFO.emails[1].value}`} className="hover:text-[#0A3982] transition-colors">
              {COMPANY_INFO.emails[1].value}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-slate-500">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>24/7 Riverine Waterways Operation & Tugboat Berth Watch</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Jetty Landing, Spud Barges & Coastal Towage Hub</span>
          <span className="font-semibold text-emerald-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Active Base
          </span>
        </div>
      </div>
    </div>
  );
};
