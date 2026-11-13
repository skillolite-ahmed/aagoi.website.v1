import React from 'react';
import { Compass, FileText, CheckSquare, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

const services = [
  {
    id: 'direction',
    icon: Compass,
    color: '#1269A8',
    title: 'Career Direction & Opportunity Research',
    description:
      'We take time to understand your professional background, career goals, preferences and target roles. Based on this, we research relevant opportunities aligned to your experience and direction.',
    note: 'Your goals, your direction.',
  },
  {
    id: 'profile',
    icon: FileText,
    color: '#17A6A0',
    title: 'Professional Profile & Resume Support',
    description:
      'We help strengthen the way your professional experience and achievements are presented — refining your resume and professional profiles to reflect your capabilities and target opportunities accurately.',
    note: 'Your experience, presented at its best.',
  },
  {
    id: 'evaluation',
    icon: CheckSquare,
    color: '#1686D9',
    title: 'Opportunity Evaluation & Match Verification',
    description:
      'We review identified opportunities against your requirements and experience before presenting them to you. You review and decide which opportunities to pursue — Aagoi does not make career decisions on your behalf.',
    note: 'You remain in control.',
  },
  {
    id: 'outreach',
    icon: MessageCircle,
    color: '#1269A8',
    title: 'HR/Employer Outreach & Follow-up Coordination',
    description:
      'We support relevant professional outreach to HR teams and employers, and help organise communication and follow-up activity — reducing the administrative burden of your job search.',
    note: 'Organised. Coordinated. Professional.',
  },
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-[#F7F9FC] border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            How Aagoi supports your career move.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            A service built around your experience and your next move — combining human expertise, structured research and coordinated support.
          </p>
        </div>

        {/* Four service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E5EAF0] rounded-2xl p-8 shadow-xs hover:shadow-lg hover:border-[#1269A8]/30 transition-all duration-300 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#152D46] mb-3">{service.title}</h3>
                <p className="text-sm text-[#526477] leading-relaxed flex-1">{service.description}</p>
                <div className="mt-6 pt-4 border-t border-[#E5EAF0] text-xs font-semibold text-[#1269A8]">
                  {service.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E5EAF0] p-8 max-w-4xl mx-auto shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#152D46]">
              Ready to approach your career move differently?
            </h4>
            <p className="text-xs sm:text-sm text-[#526477] leading-relaxed">
              For professionals with 5+ years of total professional work experience. No upfront payment to begin.
            </p>
          </div>
          <a
            href={siteConfig.forms.client}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
          >
            <span>Apply for Career Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};
