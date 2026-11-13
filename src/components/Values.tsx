import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Understand Your Career Goals',
    description:
      'We begin by understanding your professional background, work experience, target roles, career direction and preferences. This ensures our research and support is aligned to what matters to you.',
    detail: 'You share your experience and goals. We listen and plan.',
    color: '#1269A8',
  },
  {
    num: '02',
    title: 'Review Relevant Opportunities',
    description:
      'We research and evaluate opportunities against your requirements and experience. Relevant opportunities are presented to you for review. You decide which to pursue — Aagoi does not apply on your behalf without your approval.',
    detail: 'You remain in control of which opportunities to progress.',
    color: '#1686D9',
  },
  {
    num: '03',
    title: 'Coordinate the Next Steps',
    description:
      'We support profile improvements, relevant HR and employer outreach, and organised follow-ups. Throughout the process, your active involvement is key — a few minutes each working day helps us move things forward effectively.',
    detail: 'We coordinate. You participate. Progress follows.',
    color: '#17A6A0',
  },
];

export const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-[#152D46] text-white relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1269A8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#17A6A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#17A6A0]/20 text-[#17A6A0] border border-[#17A6A0]/30">
            The Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A clear process, with your involvement.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Aagoi's service is structured and transparent. Here is how we work together to support your next career move.
          </p>
        </div>

        {/* Three-step layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden md:block absolute left-[2.25rem] top-10 bottom-10 w-px bg-gradient-to-b from-[#1269A8]/30 via-[#1686D9]/30 to-[#17A6A0]/30"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-8 items-start">
                {/* Step number circle */}
                <div
                  className="shrink-0 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center text-white text-xl font-extrabold border-2 relative z-10"
                  style={{ backgroundColor: `${step.color}25`, borderColor: `${step.color}50` }}
                >
                  <span style={{ color: step.color }}>{step.num}</span>
                </div>
                {/* Content */}
                <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/[0.07] transition-colors duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">{step.description}</p>
                  <div
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: step.color }}
                  >
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/[0.06] border border-white/15 rounded-2xl px-8 py-5 max-w-2xl backdrop-blur-xs">
            <p className="text-base sm:text-lg font-medium text-slate-200">
              Your career decisions remain yours. Aagoi supports — it does not decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
