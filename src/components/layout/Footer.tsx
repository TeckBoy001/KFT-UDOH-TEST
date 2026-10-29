import React from 'react';
import { MapPin, Phone, Mail, Globe, Shield, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { SERVICES_DATA } from '../../data/servicesData';
import { PageId } from '../../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071120] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="cursor-pointer inline-block" onClick={() => handleNav('home')}>
              <img
                src="/assets/logos/6.0_White_LOGO_WHITE_primary_logo.png"
                alt="KFT Uduboh Nigeria Limited Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]"></span>
                Brand Slogan
              </div>
              <p className="italic text-slate-400">"{COMPANY_INFO.tagline}"</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Nigerian Content Development & Monitoring Board Compliant</span>
            </div>
          </div>

          {/* Column 2: Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#D71920]"></span>
              Core Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-left group"
                  >
                    <span className="text-slate-600 group-hover:text-[#D71920] transition-colors">›</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-xs text-[#D71920] font-semibold hover:underline flex items-center gap-1 pt-1"
                >
                  View All Capabilities <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#0A3982]"></span>
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="text-slate-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="text-slate-400 hover:text-white transition-colors">
                  About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="text-slate-400 hover:text-white transition-colors">
                  Our Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fleet')} className="text-slate-400 hover:text-white transition-colors">
                  Equipment Fleet
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('qhse')} className="text-slate-400 hover:text-white transition-colors">
                  QHSE Safety
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="text-slate-400 hover:text-white transition-colors">
                  Contact & Locations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Operating Bases & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#D71920]"></span>
              Operating Bases
            </h3>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block text-xs">Head Office (Delta State):</span>
                  <span>{COMPANY_INFO.headOffice.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A3982] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block text-xs">Marine Terminal Base:</span>
                  <span>{COMPANY_INFO.branchOffice.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Phone className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="block hover:text-white transition-colors font-medium">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].value}`} className="block hover:text-white transition-colors font-medium">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="block hover:text-white transition-colors">
                    {COMPANY_INFO.emails[0].value}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.emails[1].value}`} className="block hover:text-white transition-colors">
                    {COMPANY_INFO.emails[1].value}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-500">
                <Globe className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.domain}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('qhse')} className="hover:text-slate-300 transition-colors">
              QHSE Compliance
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">
              Operational Locations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
