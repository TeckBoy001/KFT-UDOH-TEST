import React, { useState } from 'react';
import { 
  Building2, Ship, Waves, Truck, ShieldCheck, ShoppingBag, Navigation, Flame, CheckCircle, ArrowRight, HelpCircle 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { SERVICES_DATA } from '../data/servicesData';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'civil', label: 'Civil & Earthworks' },
    { id: 'marine', label: 'Marine & Dredging' },
    { id: 'equipment', label: 'Equipment & Logistics' },
    { id: 'energy', label: 'Oilfield Support' }
  ];

  const getFilteredServices = () => {
    if (activeFilter === 'civil') {
      return SERVICES_DATA.filter(s => s.id === 'civil-construction' || s.id === 'piling-shore-protection');
    }
    if (activeFilter === 'marine') {
      return SERVICES_DATA.filter(s => s.id === 'marine-operations' || s.id === 'dredging-reclamation');
    }
    if (activeFilter === 'equipment') {
      return SERVICES_DATA.filter(s => s.id === 'equipment-leasing' || s.id === 'haulage-heavy-logistics' || s.id === 'procurement-supply-chain');
    }
    if (activeFilter === 'energy') {
      return SERVICES_DATA.filter(s => s.id === 'oil-servicing-support');
    }
    return SERVICES_DATA;
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Ship': return <Ship className="w-6 h-6" />;
      case 'Waves': return <Waves className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Navigation': return <Navigation className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  const filtered = getFilteredServices();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              Engineering Capabilities
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Comprehensive Services Across Civil, Marine & Industrial Logistics
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              KFT Uduboh brings specialized equipment, licensed operators, and seasoned engineers to tackle the most demanding geotechnical, riverine, and civil infrastructure challenges in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeFilter === cat.id
                  ? 'bg-[#0A3982] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:border-[#0A3982] transition-colors"
            >
              {/* Left Column: Core Info & Capabilities (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A3982] flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D71920] bg-red-50 px-2 py-0.5 rounded">
                      {service.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Scope & Capabilities */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Technical Scope & Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0A3982] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problems Solved */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                    Challenges We Resolve:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.problemsSolved.map((prob, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D71920] font-bold">•</span>
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Outcomes, Fleet Utilized & CTA (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Key Client Outcomes:
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {service.keyOutcomes.map((out, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Fleet & Equipment Deployed:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {service.equipmentUtilized.map((eq, i) => (
                        <span key={i} className="text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onNavigate('contact')}
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Tender / Quotation
                  </Button>
                  {service.id === 'marine-operations' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onNavigate('service-detail')}
                      className="w-full justify-center text-xs"
                    >
                      View Marine & Civil Solutions Spotlight
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
