import React from 'react';
import { Cpu, Compass, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    title: 'Intelligent Technology',
    icon: Cpu,
  },
  {
    title: 'Strategic Guidance',
    icon: Compass,
  },
  {
    title: 'Human Understanding',
    icon: HeartHandshake,
  },
];

export const Difference: React.FC = () => {
  return (
    <section id="difference" className="py-24 bg-white border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Paragraph (18px, comfortable line length) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
              The Difference
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
              What Makes Aagoi Different?
            </h2>
            <p className="text-base sm:text-lg text-[#526477] leading-relaxed max-w-xl">
              We go beyond conventional job-search approaches by connecting intelligent technology, strategic guidance and human understanding. Our focus is on relevance over volume, meaningful progress over random applications and long-term professional growth.
            </p>
          </div>

          {/* Right Column: Three ideas as large typographic rows separated by hairlines */}
          <div className="lg:col-span-6 border-t border-[#E5EAF0] lg:border-t-0">
            <div className="divide-y divide-[#E5EAF0]">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="py-6 sm:py-8 flex items-center justify-between group"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#152D46] tracking-tight transition-colors group-hover:text-[#1269A8]">
                      {pillar.title}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F7F9FC] border border-[#E5EAF0] text-[#1269A8] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#1269A8]/10 group-hover:border-[#1269A8]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
