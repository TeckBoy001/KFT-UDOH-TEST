import React from 'react';
import { 
  Building2, Ship, Waves, Truck, ShieldCheck, ShoppingBag, Navigation, Flame, ArrowRight 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { SERVICES_DATA } from '../../data/servicesData';
import { PageId } from '../../types';

interface CoreServicesSectionProps {
  onNavigate: (page: PageId) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({ onNavigate }) => {
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

  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Competencies"
          title="Integrated Engineering, Marine & Field Logistics"
          description="A diversified multi-capability contracting firm providing end-to-end support for energy operators, civil authorities, and industrial developers."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0A3982] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D71920] transition-colors duration-300"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A3982] group-hover:bg-[#0A3982] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0A3982] transition-colors line-clamp-2">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-700">Capabilities Include:</div>
                  <ul className="text-[11px] text-slate-500 space-y-1">
                    {service.capabilities.slice(0, 2).map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="text-[#D71920] font-bold">›</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(index === 1 ? 'service-detail' : 'services')}
                  className="w-full text-xs font-bold text-[#0A3982] group-hover:text-[#D71920] flex items-center justify-between transition-colors"
                >
                  <span>Explore Technical Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            variant="navy"
            size="lg"
            onClick={() => onNavigate('services')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Review Complete Services & Solutions Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
