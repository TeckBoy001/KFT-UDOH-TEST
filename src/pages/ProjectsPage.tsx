import React, { useState } from 'react';
import { MapPin, Calendar, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { PROJECTS_DATA } from '../data/projectsData';
import { PageId } from '../types';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Civil Infrastructure', 'Marine & Shoreline Works', 'Dredging & Reclamation', 'Equipment Leasing & Marine Logistics'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category.includes(selectedCategory) || (selectedCategory === 'Civil Infrastructure' && p.category.includes('Civil')));

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D71920_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
              Delivered Track Record
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Featured Engineering & Marine Project Case Studies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Real-world execution across Delta State, coastal waterways, and urban infrastructure corridors. Each engagement reflects our commitment to strength, precision, and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0A3982] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-[#0A3982] transition-colors"
            >
              {/* Project Image & Quick Stats (5 cols) */}
              <div className="lg:col-span-5 relative bg-slate-900 flex flex-col justify-between overflow-hidden group">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
                    <span className="self-start bg-[#D71920] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {project.category}
                    </span>

                    {project.stats && (
                      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white space-y-0.5">
                        <div className="text-xs uppercase text-slate-400 font-semibold">{project.stats.label}</div>
                        <div className="text-xl font-extrabold text-[#D71920]">{project.stats.value}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Narrative & Case Breakdown (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                      {project.location}
                    </span>
                    {project.year && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {project.year}
                      </span>
                    )}
                    <span className="text-slate-400">|</span>
                    <span className="font-medium text-slate-600">Client Sector: {project.clientType}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {project.title}
                  </h2>
                </div>

                {/* Challenge */}
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D71920]"></span>
                    The Challenge:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3.5 border-l-2 border-red-200">
                    {project.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0A3982]"></span>
                    Our Engineering Approach:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3.5 border-l-2 border-blue-200">
                    {project.approach}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Verified Project Outcome:
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                    {project.outcome}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate('contact')}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Inquire About Similar Project Scope
                  </Button>
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
