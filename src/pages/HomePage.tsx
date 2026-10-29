import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { CoreServicesSection } from '../components/home/CoreServicesSection';
import { LogoStorySection } from '../components/home/LogoStorySection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { CTASection } from '../components/common/CTASection';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      <HeroSection onNavigate={onNavigate} />
      <CompanyIntroSection onNavigate={onNavigate} />
      <CoreServicesSection onNavigate={onNavigate} />
      <LogoStorySection />
      <FeaturedProjectsSection onNavigate={onNavigate} />
      <ProcessSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
