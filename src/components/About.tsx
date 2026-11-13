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
            Aagoi is an early-stage career-technology initiative developing a broader career ecosystem
            while currently providing personalised career support to experienced professionals.
          </p>
        </div>

        {/* Comparison / Structured Perspective Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Fragmented Job-Search Activity */}
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
                Fragmented Job-Search Activity
              </h3>
              <p className="text-[#526477] text-sm leading-relaxed mb-6">
                Job searching can involve multiple platforms, repeated applications, scattered communication and disconnected activities. Without a clear direction, it can become difficult to identify relevant opportunities and maintain consistent progress.
              </p>

              <ul className="space-y-3 text-sm text-[#526477]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526477] mt-2 shrink-0" />
                  <span>Submitting repeated applications across multiple platforms with scattered communication</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526477] mt-2 shrink-0" />
                  <span>Disconnected activities lacking a cohesive strategy or individual direction</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526477] mt-2 shrink-0" />
                  <span>Generic outreach detached from genuine career positioning and trajectory</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5EAF0] text-xs text-[#526477] font-medium italic">
              Activity matters—but direction, relevance and consistency matter too.
            </div>
          </div>

          {/* Card 2: Structured Career Technology & Human Guidance */}
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
                Structured Career Technology &amp; Human Guidance
              </h3>
              <p className="text-[#526477] text-sm leading-relaxed mb-6">
                Aagoi brings structure, intelligent career technology and personalised human support together. We currently deliver tailored, individual guidance to experienced professionals, with the goal of expanding into a comprehensive digital career ecosystem.
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

        {/* Pillars Strip: Broader Positioning Pillars */}
        <div className="mt-12 bg-[#F7F9FC] rounded-xl border border-[#E5EAF0] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-[#E5EAF0]">
            <div className="sm:px-4 first:pl-0 pt-4 sm:pt-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#152D46] font-bold text-base mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                <span>Beyond Resume Formatting</span>
              </div>
              <p className="text-xs sm:text-sm text-[#526477]">
                We don&apos;t just format documents—our current service clarifies your professional positioning and strategic narrative, while our developing platform will offer intelligent career tools.
              </p>
            </div>
            <div className="sm:px-4 pt-4 sm:pt-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#152D46] font-bold text-base mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                <span>Beyond Job Listings</span>
              </div>
              <p className="text-xs sm:text-sm text-[#526477]">
                Rather than endless random listings, our current service focuses on curated alignment, direction and high-relevance career opportunities.
              </p>
            </div>
            <div className="sm:px-4 last:pr-0 pt-4 sm:pt-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#152D46] font-bold text-base mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                <span>A Connected Career Ecosystem</span>
              </div>
              <p className="text-xs sm:text-sm text-[#526477]">
                While we currently provide personalised career support to experienced professionals, we are building a broader connected technology ecosystem for lifelong career progression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
