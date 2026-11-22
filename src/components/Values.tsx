import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Understand Your Career Direction',
    description:
      'We learn about your professional experience, strengths, career ambitions, preferred roles, expectations and constraints to establish a clear direction for your search.',
    detail: 'Your goals shape the search.',
  },
  {
    num: '02',
    title: 'Research & Prepare',
    description:
      'We research relevant job openings and companies, identify potential HR, recruiter and referral contacts, and prepare personalised outreach messages and follow-ups. Opportunities and prepared next steps are organised for your review.',
    detail: 'We prepare the groundwork. You review what matters.',
  },
  {
    num: '03',
    title: 'Take the Next Step Together',
    description:
      'You review opportunities, send prepared messages through your own accounts, engage with contacts, share feedback and take part in agreed next steps. We continue coordinating and supporting your progress as your search evolves.',
    detail: 'Aagoi handles the groundwork. You remain in control.',
  },
];

export const Values: React.FC = () => {
  return (
    <section id="values" className="py-16 sm:py-20 lg:py-24 bg-[#152D46] text-white relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#1269A8]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#17A6A0]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#17A6A0]/20 text-[#3DCCC7] border border-[#17A6A0]/30">
            The Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research. Preparation. Progress.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A structured career-support process where Aagoi handles the groundwork, you take the next step, and both sides work together towards your career goals.
          </p>
        </div>

        {/* Desktop: Connected Horizontal Timeline (lg+) */}
        <div className="hidden lg:block relative mb-16">
          {/* Horizontal connecting track line */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-[#1269A8] via-[#1686D9] to-[#17A6A0] opacity-40 z-0"
          />

          <div className="grid grid-cols-3 gap-10 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                {/* Numbered node */}
                <div className="w-14 h-14 rounded-full bg-[#152D46] border-2 border-[#3DCCC7] text-[#3DCCC7] flex items-center justify-center font-extrabold text-lg mb-6 shadow-md shrink-0">
                  {step.num}
                </div>
                {/* Step title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>
                {/* Detail line */}
                <div className="pt-3 border-t border-white/10 w-full text-sm font-medium text-[#3DCCC7]">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline (< lg) */}
        <div className="lg:hidden relative pl-8 sm:pl-10 border-l-2 border-[#1269A8]/40 space-y-8 mb-10 ml-3 sm:ml-4">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              {/* Vertical node marker positioned on the rail */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-10 h-10 rounded-full bg-[#152D46] border-2 border-[#3DCCC7] text-[#3DCCC7] flex items-center justify-center font-bold text-sm shrink-0">
                {step.num}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
                {step.description}
              </p>
              <div className="text-sm font-medium text-[#3DCCC7]">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="text-center">
          <div className="inline-block bg-white/[0.06] border border-white/15 rounded-2xl px-6 py-4 sm:px-8 sm:py-5 max-w-2xl backdrop-blur-xs">
            <p className="text-base sm:text-lg font-medium text-slate-200">
              Your career decisions remain yours. Aagoi supports — it does not decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
