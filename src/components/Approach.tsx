import React from 'react';

const services = [
  {
    num: '01',
    title: 'Career Direction & Clarity',
    description:
      'Build a clearer picture of your next move by aligning your experience, strengths and career ambitions.',
    note: 'Clarity before the next move.',
  },
  {
    num: '02',
    title: 'Professional Positioning',
    description:
      'Present your experience, achievements and capabilities with clarity, so your professional profile reflects the roles you want to pursue.',
    note: 'Your experience, clearly communicated.',
  },
  {
    num: '03',
    title: 'Relevant Career Opportunities',
    description:
      'Focus on opportunities that fit your experience, preferences and career direction — not simply the number of openings available.',
    note: 'Relevance over volume.',
  },
  {
    num: '04',
    title: 'Coordinated Career Support',
    description:
      'Receive personalised guidance and organised support as you review opportunities, share feedback and move through your career transition.',
    note: 'Guidance with you in control.',
  },
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-[#F7F9FC] border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned Section header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            Support Built Around Your Next Career Move.
          </h2>
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            From gaining career direction to presenting your experience with clarity, Aagoi brings intelligent technology, strategic guidance and human understanding to your next move.
          </p>
        </div>

        {/* 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-14">
          {services.map((service) => (
            <div key={service.num} className="flex flex-col justify-between">
              <div>
                {/* Large Numeral in brand blue */}
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1269A8] tracking-tight mb-3">
                  {service.num}
                </div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#152D46] mb-3">
                  {service.title}
                </h3>
                {/* Description 16-17px */}
                <p className="text-base sm:text-[17px] text-[#526477] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              {/* Note under a hairline */}
              <div className="pt-3 border-t border-[#E5EAF0]">
                <span className="text-xs sm:text-sm font-medium text-[#17A6A0]">
                  {service.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
