import React from 'react';
import { Target, ShieldCheck, Compass, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-b border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            About Aagoi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            More Than a Traditional Job Search.
          </h2>
          <p className="text-lg sm:text-xl text-[#526477] leading-relaxed">
            Career growth requires more than applications. It requires the right direction,
            stronger professional positioning, meaningful connections and a structured approach.
          </p>
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            Aagoi is building an integrated career technology ecosystem that brings intelligence,
            practical solutions and personalised human assistance together to create a more
            organised career journey.
          </p>
        </div>

        {/* Comparison / Structured Perspective Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Traditional Activity-Oriented Trap */}
          <div className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-8 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#526477]">
                  The Status Quo
                </span>
                <span className="text-xs text-[#526477] font-medium bg-white px-2.5 py-1 rounded-md border border-[#E5EAF0]">
                  Activity-Oriented
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#152D46] mb-3">
                Fragmented Job Applications
              </h3>
              <p className="text-[#526477] text-sm leading-relaxed mb-6">
                Most platforms encourage repetitive submissions into opaque ATS databases, generic mass outreach, and endless waiting—leaving experienced professionals undervalued and exhausted.
              </p>

              <ul className="space-y-3 text-sm text-[#526477]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526477] mt-2 shrink-0" />
                  <span>Submitting endless resumes without feedback or tailored context</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526477] mt-2 shrink-0" />
                  <span>Unstructured outreach detached from genuine career trajectory</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526477] mt-2 shrink-0" />
                  <span>Generic automated tools lacking nuanced human discernment</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5EAF0] text-xs text-[#526477] font-medium italic">
              High volume, low clarity, zero individual strategy.
            </div>
          </div>

          {/* Card 2: The Aagoi Career Ecosystem */}
          <div className="bg-gradient-to-br from-white via-white to-[#F7F9FC] border-2 border-[#1269A8]/30 rounded-2xl p-8 relative shadow-sm flex flex-col justify-between">
            {/* Top Accent Pill */}
            <div className="absolute -top-3 right-8 bg-[#1269A8] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              The Aagoi Difference
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1269A8]">
                  Our Approach
                </span>
                <span className="text-xs font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-1 rounded-md">
                  Outcome-Oriented
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#152D46] mb-3">
                Structured Career Technology & Human Guidance
              </h3>
              <p className="text-[#526477] text-sm leading-relaxed mb-6">
                We combine intelligent technology with high-touch human expertise to position your real professional value, connect with aligned opportunities, and unlock structured progression.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-[#E5EAF0]">
                  <Compass className="w-4 h-4 text-[#1269A8] shrink-0" />
                  <span className="font-medium text-[#152D46]">Better Direction</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-[#E5EAF0]">
                  <Target className="w-4 h-4 text-[#1686D9] shrink-0" />
                  <span className="font-medium text-[#152D46]">Stronger Positioning</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-[#E5EAF0]">
                  <GitBranch className="w-4 h-4 text-[#17A6A0] shrink-0" />
                  <span className="font-medium text-[#152D46]">Relevant Pathways</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F7F9FC] p-2.5 rounded-lg border border-[#E5EAF0]">
                  <ShieldCheck className="w-4 h-4 text-[#1269A8] shrink-0" />
                  <span className="font-medium text-[#152D46]">Personalised Guidance</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5EAF0] flex items-center justify-between text-xs text-[#1269A8] font-semibold">
              <span>Purposeful progression built for lasting career momentum</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Pillars Strip */}
        <div className="mt-12 bg-[#F7F9FC] rounded-xl border border-[#E5EAF0] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-[#E5EAF0]">
            <div className="sm:px-4 first:pl-0 pt-4 sm:pt-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#152D46] font-bold text-base mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                <span>Not a Resume Shop</span>
              </div>
              <p className="text-xs sm:text-sm text-[#526477]">
                We don&apos;t just reformat keywords—we clarify your career narrative and strategic positioning.
              </p>
            </div>
            <div className="sm:px-4 pt-4 sm:pt-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#152D46] font-bold text-base mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                <span>Not a Job Board</span>
              </div>
              <p className="text-xs sm:text-sm text-[#526477]">
                We do not dump thousands of random listings; we focus on curated alignment and structured moves.
              </p>
            </div>
            <div className="sm:px-4 last:pr-0 pt-4 sm:pt-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#152D46] font-bold text-base mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                <span>Ecosystem Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-[#526477]">
                We are engineering an interconnected ecosystem that unites intelligence, tools, and human trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
