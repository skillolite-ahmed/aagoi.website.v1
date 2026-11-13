import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const categories = [
  {
    title: 'Experienced Professionals & Specialists',
    subtitle: 'Career Direction',
    description:
      'For professionals with established experience who want a clearer, more focused approach to their next career move.',
    points: [
      'Established professional experience.',
      'Seeking stronger alignment with career goals.',
      'Ready for a structured, supported approach.',
    ],
  },
  {
    title: 'Managers & Senior Managers',
    subtitle: 'Strategic Career Moves',
    description:
      'For professionals leading teams or functions and considering their next level of responsibility or a strategic career move.',
    points: [
      'Experience managing teams or responsibilities.',
      'Considering leadership or functional opportunities.',
      'Seeking a more considered career transition.',
    ],
  },
  {
    title: 'Functional Heads & Business Leaders',
    subtitle: 'Senior-Level Direction',
    description:
      'For senior professionals considering leadership opportunities or a new professional direction at the next stage of their careers.',
    points: [
      'Evaluating senior-level opportunities.',
      'Aligning experience with leadership goals.',
      'Seeking personalised, considered support.',
    ],
  },
];

export const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-24 bg-[#F7F9FC] border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Who We Help
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            Career Support for Experienced Professionals.
          </h2>
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            Aagoi&apos;s personalised career support is designed for professionals with 5+ years of total professional work experience who are ready to take a more considered approach to their next career move.
          </p>
        </div>

        {/* 3 Audience Cards with Top Accent Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5EAF0] border-t-4 border-t-[#1269A8] rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#17A6A0] uppercase tracking-wider block mb-2">
                  {cat.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#152D46] mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#526477] leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5EAF0] space-y-2.5">
                {cat.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#526477]">
                    <CheckCircle2 className="w-4 h-4 text-[#1269A8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Slim Full-Width Banner: Who Is Eligible? */}
        <div className="bg-white border border-[#E5EAF0] rounded-xl px-6 py-5 sm:px-8 sm:py-6 shadow-2xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-[#152D46] mb-1">
              Who Is Eligible?
            </h4>
            <p className="text-sm text-[#526477] leading-relaxed">
              Aagoi&apos;s current personalised career-support service is for professionals with 5+ years of total professional work experience. This includes experienced specialists, managers and senior leaders, including those with 15+ years of experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
