import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const leftPoints = [
  'Applying across platforms without a clear focus.',
  'Spending time on opportunities that may not fit your experience.',
  'Managing disconnected steps without a consistent plan.',
];

const rightPoints = [
  'Opportunities considered against your experience and career goals.',
  'A clearer basis for deciding which opportunities to pursue.',
  'Personalised guidance and coordinated support as you move forward.',
];

export const About: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            The Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            More Applications Do Not Always Mean Better Opportunities.
          </h2>
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            A job search can become a cycle of activity without clear direction. Aagoi helps bring greater relevance, structure and personal support to your next career move.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column A: Without a Clear Strategy */}
          <div className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-8 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#526477]">
                  WITHOUT A CLEAR STRATEGY
                </span>
                <span className="text-xs text-[#526477] font-medium bg-white px-2.5 py-1 rounded-md border border-[#E5EAF0]">
                  ACTIVITY WITHOUT DIRECTION
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#152D46] mb-6">
                More applications. Less clarity.
              </h3>
              <ul className="space-y-4">
                {leftPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-base text-[#526477] leading-relaxed">
                    <XCircle className="w-5 h-5 text-[#8A99A8] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E5EAF0] text-sm text-[#526477] font-medium italic">
              Effort matters. Direction makes it more purposeful.
            </div>
          </div>

          {/* Column B: With Aagoi */}
          <div className="bg-gradient-to-br from-white via-white to-[#F0F6FB] border-2 border-[#1269A8] rounded-2xl p-8 sm:p-9 flex flex-col justify-between relative shadow-sm">
            <div className="absolute -top-3 right-8 bg-[#1269A8] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              WITH AAGOI
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1269A8]">
                  WITH AAGOI
                </span>
                <span className="text-xs font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-1 rounded-md">
                  A MORE FOCUSED APPROACH
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#152D46] mb-6">
                Relevant. Considered. Supported.
              </h3>
              <ul className="space-y-4">
                {rightPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-base text-[#152D46] leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#17A6A0] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E5EAF0] text-sm font-semibold text-[#1269A8]">
              Relevance over volume. Progress with purpose.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
