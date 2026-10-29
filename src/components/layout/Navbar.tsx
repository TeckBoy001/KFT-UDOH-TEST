import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PageId } from '../../types';
import { Button } from '../common/Button';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'service-detail', label: 'Spotlight' },
    { id: 'projects', label: 'Projects' },
    { id: 'fleet', label: 'Fleet & Equipment' },
    { id: 'qhse', label: 'QHSE Standards' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Corporate Strip */}
      <div className="hidden lg:block bg-[#071938] text-slate-300 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Head Office: Effurun, Delta State | Marine Base: Gbaramatu Kingdom</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#D71920]" />
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.emails[0].value}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#D71920]" />
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="font-semibold text-white hover:text-red-400 transition-colors">
                {COMPANY_INFO.phones[0].display}
              </a>
            </div>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-medium">RC Registered • Local Content Certified</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-200 ${scrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#0A3982] rounded-md group"
            aria-label="KFT Uduboh Home"
          >
            <img
              src="/assets/logos/4.0_Logo_PNG_without_BG_logo_with_no_BG.png"
              alt="KFT Uduboh Nigeria Limited Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                    isActive
                      ? 'text-[#0A3982] bg-blue-50/70 font-bold'
                      : 'text-slate-700 hover:text-[#0A3982] hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D71920] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleLinkClick('contact')}
              className="text-xs uppercase tracking-wider font-bold"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#0A3982] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0A3982]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl transition-all" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            <div className="p-3 mb-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-[#0A3982]">KFT Operations Desk</span>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="font-bold text-[#D71920] flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {COMPANY_INFO.phones[0].display}
              </a>
            </div>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#0A3982] text-white shadow-sm'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => handleLinkClick('contact')}
                className="w-full justify-center"
              >
                Inquire & Mobilize Fleet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
