import React from 'react';

const services = [
  {
    num: '01',
    title: 'Opportunity Research',
    description:
      'We actively research job opportunities aligned with your experience, career goals, preferences and target roles—focusing on relevance rather than simply collecting vacancies.',
    note: 'Relevant opportunities, thoughtfully identified.',
  },
  {
    num: '02',
    title: 'Company & Contact Discovery',
    description:
      'Beyond job listings, we explore suitable companies and identify relevant HR professionals, recruiters and potential referral connections to help you approach opportunities more strategically.',
    note: 'Know where to look and whom to approach.',
  },
  {
    num: '03',
    title: 'Personalised Outreach Preparation',
    description:
      'We prepare tailored outreach messages based on the opportunity and contact. You receive ready-to-use messages to review and send through your own professional accounts.',
    note: 'The groundwork prepared. The connection remains yours.',
  },
  {
    num: '04',
    title: 'Career Search Coordination',
    description:
      'We organise opportunities, contacts, outreach progress and follow-up actions, while providing profile, resume and application support where relevant throughout your career search.',
    note: 'An organised search. A clearer path forward.',
  },
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-16 sm:py-20 lg:py-24 bg-[#F7F9FC] border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned Section header */}
        <div className="max-w-3xl space-y-4 mb-10 sm:mb-12 lg:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            We Do the Groundwork. You Take the Next Step.
          </h2>
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            Aagoi takes care of the time-consuming groundwork behind your career move—from researching relevant opportunities and companies to identifying professional contacts and preparing personalised outreach. We bring the research, preparation and coordination together, so you can focus on reviewing opportunities, building connections and moving forward.
          </p>
        </div>

        {/* 2×2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-10 lg:gap-x-16 lg:gap-y-14">
          {services.map((service) => (
            <div
              key={service.num}
              className="group flex flex-col justify-between bg-white border border-[#E5EAF0] rounded-2xl p-6 sm:p-8 hover:border-[#1269A8]/30 hover:shadow-sm transition-all duration-300"
            >
              <div>
                {/* Large Numeral in brand blue */}
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1269A8]/30 tracking-tight mb-3 group-hover:text-[#1269A8]/50 transition-colors duration-300">
                  {service.num}
                </div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#152D46] mb-3">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-base sm:text-[17px] text-[#526477] leading-relaxed mb-5 sm:mb-6">
                  {service.description}
                </p>
              </div>
              {/* Supporting note under a hairline */}
              <div className="pt-3 border-t border-[#E5EAF0]">
                <span className="text-sm font-medium text-[#17A6A0]">
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
