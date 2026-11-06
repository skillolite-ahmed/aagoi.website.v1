import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Compass, Network, Users } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC]">
      {/* Subtle background tech grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#152D46 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badges: Coming Soon & Introductory Label */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/10 text-[#1269A8] border border-[#1269A8]/20">
                <span className="w-2 h-2 rounded-full bg-[#1269A8] animate-pulse" />
                {siteConfig.status}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#526477] bg-white px-3 py-1 rounded-full border border-[#E5EAF0]">
                {siteConfig.introLabel}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#152D46] tracking-tight leading-[1.12]">
              Your Experience Deserves a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1269A8] via-[#1686D9] to-[#17A6A0]">
                Better Career Journey.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#526477] leading-relaxed max-w-2xl font-normal">
              Aagoi brings together AI-powered solutions, practical technology and
              personalised human assistance to help experienced professionals navigate
              their next career move with greater clarity, structure and confidence.
            </p>

            {/* Supporting Pillar Labels */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#1686D9]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  AI-Powered Solutions
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Users className="w-4 h-4 text-[#17A6A0]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Human-Centred Support
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Network className="w-4 h-4 text-[#1269A8]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Connected Career Ecosystem
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F9FC] text-[#152D46] border border-[#E5EAF0] text-base font-semibold px-6 py-3.5 rounded-xl hover:border-[#1269A8]/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1269A8]/30"
              >
                <span>Explore Aagoi</span>
                <ArrowDown className="w-4 h-4 text-[#526477]" />
              </a>
            </div>

            {/* Sub-note */}
            <p className="text-xs sm:text-sm text-[#526477] pt-1">
              Be among the first to explore what we&apos;re building.
            </p>
          </div>

          {/* Right Column: Interconnected Career Ecosystem Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative gradient glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1269A8]/10 via-[#17A6A0]/10 to-[#1686D9]/15 rounded-3xl blur-2xl -z-10" />

              {/* Main Container Card */}
              <div className="bg-white/95 rounded-2xl border border-[#E5EAF0] p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5EAF0] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#1269A8]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#152D46]">
                      Career Intelligence Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-0.5 rounded-full">
                    Aagoi Ecosystem
                  </span>
                </div>

                {/* SVG Visual Graphic with Nodes and Flow Pathways */}
                <div className="relative h-72 sm:h-80 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 380 300" fill="none">
                    {/* Connecting Circuit Grid Lines */}
                    <path
                      d="M 60 70 C 120 70, 140 140, 190 145"
                      stroke="#E5EAF0"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 60 220 C 120 220, 140 160, 190 155"
                      stroke="#E5EAF0"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 190 145 C 240 140, 260 70, 320 70"
                      stroke="#E5EAF0"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 190 155 C 240 160, 260 230, 320 230"
                      stroke="#E5EAF0"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />

                    {/* Active Gradient Pathways */}
                    <path
                      d="M 190 150 L 320 70"
                      stroke="url(#pathGrad1)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 60 70 L 190 150"
                      stroke="url(#pathGrad2)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 60 220 L 190 150"
                      stroke="url(#pathGrad3)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 190 150 L 320 230"
                      stroke="url(#pathGrad4)"
                      strokeWidth="2.5"
                    />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="pathGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#1269A8" />
                        <stop offset="100%" stop-color="#17A6A0" />
                      </linearGradient>
                      <linearGradient id="pathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#1686D9" />
                        <stop offset="100%" stop-color="#1269A8" />
                      </linearGradient>
                      <linearGradient id="pathGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#17A6A0" />
                        <stop offset="100%" stop-color="#1269A8" />
                      </linearGradient>
                      <linearGradient id="pathGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#1269A8" />
                        <stop offset="100%" stop-color="#1686D9" />
                      </linearGradient>
                    </defs>

                    {/* Node 1: Professional Experience (Top-Left) */}
                    <g transform="translate(20, 45)">
                      <rect width="110" height="48" rx="10" fill="#FFFFFF" stroke="#E5EAF0" strokeWidth="1.5" />
                      <circle cx="20" cy="24" r="9" fill="#1269A8" fillOpacity="0.1" />
                      <circle cx="20" cy="24" r="4" fill="#1269A8" />
                      <text x="36" y="21" fill="#152D46" fontSize="10" fontWeight="700">Career Roots</text>
                      <text x="36" y="34" fill="#526477" fontSize="9">Professional Depth</text>
                    </g>

                    {/* Node 2: Personalised Guidance (Bottom-Left) */}
                    <g transform="translate(20, 200)">
                      <rect width="120" height="48" rx="10" fill="#FFFFFF" stroke="#E5EAF0" strokeWidth="1.5" />
                      <circle cx="20" cy="24" r="9" fill="#17A6A0" fillOpacity="0.1" />
                      <circle cx="20" cy="24" r="4" fill="#17A6A0" />
                      <text x="36" y="21" fill="#152D46" fontSize="10" fontWeight="700">Human Guidance</text>
                      <text x="36" y="34" fill="#526477" fontSize="9">Tailored Advisory</text>
                    </g>

                    {/* Center Core: Aagoi Intelligence Engine */}
                    <g transform="translate(145, 105)">
                      <rect width="90" height="90" rx="18" fill="#152D46" filter="drop-shadow(0 8px 16px rgba(21, 45, 70, 0.25))" />
                      <circle cx="45" cy="45" r="32" stroke="#1686D9" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="45" cy="45" r="22" fill="#1269A8" />
                      <path d="M 38 48 L 45 35 L 52 48 M 41 44 L 49 44" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="53" cy="34" r="2" fill="#17A6A0" />
                      <text x="45" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700" letterSpacing="0.5">Aagoi Core</text>
                    </g>

                    {/* Node 3: Structured Pathways (Top-Right) */}
                    <g transform="translate(240, 45)">
                      <rect width="120" height="48" rx="10" fill="#FFFFFF" stroke="#E5EAF0" strokeWidth="1.5" />
                      <circle cx="20" cy="24" r="9" fill="#1686D9" fillOpacity="0.1" />
                      <circle cx="20" cy="24" r="4" fill="#1686D9" />
                      <text x="36" y="21" fill="#152D46" fontSize="10" fontWeight="700">Strategic Positioning</text>
                      <text x="36" y="34" fill="#526477" fontSize="9">Targeted Direction</text>
                    </g>

                    {/* Node 4: Meaningful Opportunities (Bottom-Right) */}
                    <g transform="translate(240, 205)">
                      <rect width="120" height="48" rx="10" fill="#FFFFFF" stroke="#E5EAF0" strokeWidth="1.5" />
                      <circle cx="20" cy="24" r="9" fill="#1269A8" fillOpacity="0.1" />
                      <circle cx="20" cy="24" r="4" fill="#1269A8" />
                      <text x="36" y="21" fill="#152D46" fontSize="10" fontWeight="700">Opportunity Network</text>
                      <text x="36" y="34" fill="#526477" fontSize="9">Aligned Growth</text>
                    </g>
                  </svg>
                </div>

                {/* Bottom Ecosystem Status Pill */}
                <div className="mt-4 pt-4 border-t border-[#E5EAF0] flex items-center justify-between text-xs text-[#526477]">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#1269A8]" />
                    <span className="font-medium">Direction &bull; Positioning &bull; Connection</span>
                  </div>
                  <span className="font-semibold text-[#152D46]">Outcome-Oriented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
