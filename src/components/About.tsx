import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const problems = [
  'Scattered applications across multiple platforms with little coordination',
  'Repetitive manual searching with limited relevance filtering',
  'Difficulty identifying opportunities aligned to your experience and goals',
  'Disconnected HR communication and inconsistent follow-ups',
  'Limited visibility into the actual progress of your job search',
];

const solutions = [
  'Targeted opportunity research matched to your experience and career goals',
  'Structured evaluation and match verification before opportunities are presented',
  'Professional profile and resume support to strengthen your positioning',
  'Coordinated HR and employer outreach on your behalf',
  'Organised communication and follow-up management throughout the process',
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
            The challenge with an unstructured job search.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            Without a clear strategy, job searching can become a cycle of activity without meaningful progress. Aagoi brings structure, direction and human support to your career move.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column A — Unstructured */}
          <div className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#526477]">
                Without Structure
              </span>
              <span className="text-xs text-[#526477] font-medium bg-white px-2.5 py-1 rounded-md border border-[#E5EAF0]">
                Activity-Oriented
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#152D46] mb-4">
              Fragmented. Disconnected. Exhausting.
            </h3>
            <ul className="space-y-3 flex-1">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#526477]">
                  <XCircle className="w-4 h-4 text-[#B0BAC6] mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#E5EAF0] text-xs text-[#526477] font-medium italic">
              Activity without direction rarely leads to the right outcome.
            </div>
          </div>

          {/* Column B — Aagoi's approach */}
          <div className="bg-gradient-to-br from-white via-white to-[#F0F6FB] border-2 border-[#1269A8]/25 rounded-2xl p-8 flex flex-col relative shadow-sm">
            <div className="absolute -top-3 right-8 bg-[#1269A8] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              The Aagoi Approach
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1269A8]">
                With Aagoi
              </span>
              <span className="text-xs font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-1 rounded-md">
                Outcome-Oriented
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#152D46] mb-4">
              Structured. Targeted. Supported.
            </h3>
            <ul className="space-y-3 flex-1">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#526477]">
                  <CheckCircle2 className="w-4 h-4 text-[#17A6A0] mt-0.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#E5EAF0] flex items-center justify-between text-xs font-semibold text-[#1269A8]">
              <span>Purposeful progression, built around your experience</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
