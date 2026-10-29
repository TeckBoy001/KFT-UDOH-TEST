import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { PageId } from '../../types';

interface FeaturedProjectsSectionProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A3982]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D71920]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme="dark"
          eyebrow="Delivered Engineering"
          title="Field Operations & Track Record"
          description="Evidence-based civil, dredging, and marine logistics execution across difficult Niger Delta terrain and critical infrastructure corridors."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/90 rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between hover:border-slate-500 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-[#D71920] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {project.category}
                  </div>
                  {project.stats && (
                    <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded border border-white/10 font-bold">
                      {project.stats.value}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                      {project.location}
                    </span>
                    {project.year && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {project.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                  <span>Client Sector: {project.clientType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate('projects')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Case Studies & Project Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
