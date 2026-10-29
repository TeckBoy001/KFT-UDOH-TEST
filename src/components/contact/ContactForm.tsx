import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceCategory: 'Civil Infrastructure & Building Construction',
    projectLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for dispatch & site coordination';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project or equipment requirements';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of project context';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real asynchronous form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceCategory: 'Civil Infrastructure & Building Construction',
      projectLocation: '',
      message: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-100 p-8 sm:p-10 shadow-lg text-center space-y-5 animate-fade-in">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Our technical mobilization team in Effurun has received your request regarding <span className="font-semibold text-slate-800">{formData.serviceCategory}</span>.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 max-w-md mx-auto text-left space-y-1">
          <div className="font-semibold text-slate-700">Dispatch Reference:</div>
          <div>Contact: {formData.email} | {formData.phone}</div>
          <div>Target Location: {formData.projectLocation || 'To be specified'}</div>
          <div className="text-emerald-700 font-medium pt-1">Typical engineering response window: Within 4 business hours.</div>
        </div>
        <div>
          <Button variant="outline" size="sm" onClick={handleReset}>
            Submit Another Project Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xl shadow-slate-100/60 space-y-6">
      <div className="border-b border-slate-100 pb-5">
        <h3 className="text-xl font-bold text-slate-900">Request Technical Bid or Fleet Mobilization</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Complete this form to reach our engineering operations desk. Mandatory fields are marked with an asterisk (*).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Engr. Michael Okon"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.fullName
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#0A3982] focus:ring-[#0A3982]/20'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Business Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. m.okon@company.com"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#0A3982] focus:ring-[#0A3982]/20'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Telephone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +234 803 000 0000"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-300 focus:border-[#0A3982] focus:ring-[#0A3982]/20'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Company / Organization */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Company / Organization Name
          </label>
          <input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Chevron JV Partner / Federal Ministry"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0A3982] focus:ring-2 focus:ring-[#0A3982]/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service Category */}
        <div>
          <label htmlFor="serviceCategory" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Discipline / Inquiry Type *
          </label>
          <select
            id="serviceCategory"
            value={formData.serviceCategory}
            onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0A3982] focus:ring-2 focus:ring-[#0A3982]/20 bg-white"
          >
            <option value="Civil Infrastructure & Building Construction">Civil Infrastructure & Building Construction</option>
            <option value="Marine Operations & Coastal Logistics">Marine Operations & Coastal Logistics</option>
            <option value="Dredging & Land Reclamation">Dredging & Land Reclamation</option>
            <option value="Heavy Equipment & Marine Vessel Leasing">Heavy Equipment & Marine Vessel Leasing</option>
            <option value="Piling & Shoreline Protection Works">Piling & Shoreline Protection Works</option>
            <option value="Industrial Procurement & Technical Supply">Industrial Procurement & Technical Supply</option>
            <option value="Haulage & Heavy Cargo Transport">Haulage & Heavy Cargo Transport</option>
            <option value="Oilfield Servicing & Right-of-Way Support">Oilfield Servicing & Right-of-Way Support</option>
            <option value="General Corporate Inquiry">General Corporate Inquiry</option>
          </select>
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="projectLocation" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Project Site Location (State / LGA / Creek)
          </label>
          <input
            id="projectLocation"
            type="text"
            value={formData.projectLocation}
            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
            placeholder="e.g. Escravos, Delta State / Port Harcourt"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0A3982] focus:ring-2 focus:ring-[#0A3982]/20"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Project Scope & Technical Requirements *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe required equipment types, expected start date, project duration, site access constraints, or tender requirements..."
          className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
            errors.message
              ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
              : 'border-slate-300 focus:border-[#0A3982] focus:ring-[#0A3982]/20'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          All project information is treated with strict corporate commercial confidentiality.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Transmitting Proposal Request...' : 'Submit Inquiry to Operations'}
        </Button>
      </div>
    </form>
  );
};
