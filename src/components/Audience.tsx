import React from 'react';
import { TrendingUp, Briefcase, Building2, CheckCircle2, Globe } from 'lucide-react';

const categories = [
  {
    title: 'Experienced Professionals',
    subtitle: 'Accelerating Momentum',
    description:
      'Professionals with established work experience exploring a more structured and supported approach to their next career move.',
    icon: TrendingUp,
    traits: [
      '5+ years of total professional work experience',
      'Seeking a clearer direction for their next move',
      'Ready for a structured, supported approach',
    ],
  },
  {
    title: 'Managers, Senior Specialists & Leaders',
    subtitle: 'Strategic Career Moves',
    description:
      'Managers, Senior Managers and experienced specialists exploring strategic career moves and leadership opportunities with appropriate discretion.',
    icon: Briefcase,
    traits: [
      '5+ years of total professional work experience',
      'Navigating high-stakes career transitions',
      'Seeking alignment with the right opportunity',
    ],
  },
  {
    title: 'Functional Heads & Business Leaders',
    subtitle: 'Senior-Level Direction',
    description:
      'Functional leaders and business leaders evaluating senior-level opportunities and their next professional direction, where experience and positioning matter most.',
    icon: Building2,
    traits: [
      '5+ years of total professional work experience',
      'Evaluating senior and leadership opportunities',
      'Looking for a credible, confidential process',
    ],
  },
];

export const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-24 bg-white border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Who We Help
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            Career support for experienced professionals.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            Aagoi's personalised career support is designed for professionals with 5+ years of total professional work experience who are ready to take a more considered, structured approach to their next career move.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-8 hover:border-[#1269A8]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5EAF0] text-[#1269A8] flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#17A6A0] uppercase tracking-wider">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#152D46] mt-1 mb-3">{cat.title}</h3>
                  <p className="text-sm text-[#526477] leading-relaxed mb-6">{cat.description}</p>
                </div>

                <div className="pt-6 border-t border-[#E5EAF0] space-y-2.5 mt-auto">
                  {cat.traits.map((trait, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-[#526477]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1269A8] shrink-0" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Eligibility Note */}
        <div className="mt-10 bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 max-w-5xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center shrink-0">
            <Globe className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-[#152D46] mb-1">
              Current Eligibility — 5+ Years of Total Professional Work Experience
            </h4>
            <p className="text-sm text-[#526477] leading-relaxed">
              Aagoi's personalised career support is currently focused on experienced professionals with 5+ years of total professional work experience. Our broader career-technology ecosystem is being developed to support professionals across diverse stages over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
