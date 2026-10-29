import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#071328] via-[#0A3982] to-[#071938] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
            </button>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Privacy Policy & Data Governance
            </h1>
            <p className="mt-2 text-sm text-slate-200">
              Last updated: October 2026 • Compliant with Nigeria Data Protection Act (NDPA)
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0A3982]" />
              1. Corporate Data Statement & Scope
            </h2>
            <p>
              This Privacy Policy explains how <strong>{COMPANY_INFO.legalName}</strong> ("KFT Uduboh", "we", "us", or "our") collects, processes, and safeguards personal and technical project information submitted through our official website (<code>{COMPANY_INFO.domain}</code>) and associated digital communication channels.
            </p>
            <p>
              As an engineering, marine, dredging, and equipment leasing contractor operating across Delta State and Nigeria, we treat all corporate client data, tender specifications, and inquiry correspondence with the highest degree of commercial confidentiality.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0A3982]" />
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to fulfill engineering inquiries and project bidding:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Contact Identifiers:</strong> Name, professional title, business email address, telephone numbers, and corporate organization name.</li>
              <li><strong>Project Logistics:</strong> Target site coordinates, waterway channels, project scopes, equipment specifications, and mobilization timelines.</li>
              <li><strong>Technical Communications:</strong> Correspondence, tender documentation, and tender submission inquiries transmitted via our website forms or direct email channels.</li>
              <li><strong>Technical Website Data:</strong> IP addresses, browser types, and general device telemetry collected solely to ensure platform security and optimize responsive page rendering.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#0A3982]" />
              3. Purpose & Legal Basis for Processing
            </h2>
            <p>Your data is processed strictly for legitimate corporate purposes:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Formulating accurate engineering quotes, equipment leasing rates, and project mobilization schedules.</li>
              <li>Fulfilling contractual obligations and coordinating equipment transport between our Effurun yard and field jobsites.</li>
              <li>Complying with statutory Nigerian maritime regulations (NIMASA) and local content reporting frameworks (NCDMB).</li>
              <li>Maintaining operational health and safety records for site personnel and subcontractors.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#0A3982]" />
              4. Non-Disclosure & Third-Party Sharing
            </h2>
            <p>
              We <strong>never sell, lease, or monetize</strong> client information. Information is only disclosed to vetted technical partners (e.g., specialized marine surveyors or heavy transport logistics subcontractors) when strictly required to execute contracted project scopes, or when compelled by lawful governmental order.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Data Security & Storage Practices
            </h2>
            <p>
              We deploy industry-standard SSL encryption, restricted administrative access, and secure cloud storage protocols to protect corporate communications from unauthorized tampering, interception, or disclosure.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Your Legal Rights & Data Subject Access
            </h2>
            <p>
              Under the Nigeria Data Protection Act (NDPA), you have the right to request access to your submitted information, request corrections to inaccurate project details, or request total deletion of your contact records once project inquiries have concluded.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-900">
              7. Contact Our Data Governance Desk
            </h2>
            <p className="text-xs text-slate-600">
              For any questions regarding data protection or confidentiality agreements, contact our administrative management team:
            </p>
            <div className="text-xs space-y-1 text-slate-700 font-medium">
              <div><strong>{COMPANY_INFO.legalName}</strong></div>
              <div>Head Office: {COMPANY_INFO.headOffice.address}</div>
              <div>Email: <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="text-[#0A3982] underline">{COMPANY_INFO.emails[0].value}</a></div>
              <div>Telephone: {COMPANY_INFO.phones[0].display}</div>
            </div>
          </div>

          <div className="pt-4">
            <Button variant="primary" size="md" onClick={() => onNavigate('contact')}>
              Have Questions? Contact Our Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
