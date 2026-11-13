import React from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Users } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0F1E2D]"
    >
      {/* Background gradient layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 20%, rgba(18,105,168,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(23,166,160,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-left">
            {/* Status badges */}
            <div className="inline-flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/20 text-[#60AADE] border border-[#1269A8]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60AADE] animate-pulse" />
                EARLY ACCESS
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                PERSONALISED CAREER SUPPORT
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Your Next Career Move{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60AADE] via-[#4DB8E8] to-[#3DCCC7]">
                Deserves More Than Another Application.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-4">
              Personalised career support for experienced professionals ready to make their next move.
            </p>

            {/* Eligibility line */}
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed max-w-xl">
              For professionals with 5+ years of total professional work experience.
            </p>

            {/* Subheading below eligibility line */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-8">
              From experienced specialists and managers to senior leaders, including professionals with 15+ years of experience.
            </p>

            {/* Trust indicators (2 chips: no upfront payment & personalised human support) */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#3DCCC7]" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  No upfront payment to begin
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Users className="w-4 h-4 text-[#60AADE]" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Personalised human support
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2 focus:ring-offset-[#0F1E2D]"
              >
                <span>Apply for Career Support</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#problem"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 hover:border-white/25 text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <span>See how it works</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Supporting note at bottom of hero */}
            <p className="mt-6 text-xs sm:text-sm text-slate-500">
              Aagoi is opening applications for its personalised career-support service while continuing to develop its broader career-technology ecosystem.
            </p>
          </div>

          {/* Right Column: Upward Career Trajectory Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Subtle ambient backdrop */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-gradient-to-tr from-[#1269A8]/15 via-[#1686D9]/10 to-[#17A6A0]/15 rounded-3xl blur-2xl -z-10"
              />

              <div className="w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center p-4">
                <svg
                  viewBox="0 0 440 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="pathGradient" x1="60" y1="380" x2="380" y2="70" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1269A8" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#1686D9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#17A6A0" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#17A6A0" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#17A6A0" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Concentric Guide Rings Around Apex */}
                  <circle cx="370" cy="80" r="110" stroke="#17A6A0" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3 4" />
                  <circle cx="370" cy="80" r="80" stroke="#17A6A0" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="370" cy="80" r="50" stroke="#17A6A0" strokeOpacity="0.18" strokeWidth="1" />
                  <circle cx="370" cy="80" r="24" fill="url(#glowGradient)" />

                  {/* Subtle Grid Coordinates & Baseline Axes */}
                  <line x1="60" y1="380" x2="380" y2="380" stroke="#152D46" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="60" y1="380" x2="60" y2="80" stroke="#152D46" strokeOpacity="0.4" strokeWidth="1" />

                  {/* Horizontal Guide Lines */}
                  <line x1="60" y1="300" x2="380" y2="300" stroke="#FFFFFF" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="210" x2="380" y2="210" stroke="#FFFFFF" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60" y1="130" x2="380" y2="130" stroke="#FFFFFF" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Upward Connecting Path */}
                  <path
                    d="M 70 370 C 130 365, 150 310, 180 280 C 210 250, 240 210, 275 185 C 315 160, 335 110, 370 80"
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Vertical Projection Drop Lines */}
                  <line x1="180" y1="280" x2="180" y2="380" stroke="#1269A8" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 3" />
                  <line x1="275" y1="185" x2="275" y2="380" stroke="#1686D9" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 3" />
                  <line x1="370" y1="80" x2="370" y2="380" stroke="#17A6A0" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 3" />

                  {/* Node 1: Foundation */}
                  <circle cx="70" cy="370" r="8" fill="#0F1E2D" stroke="#1269A8" strokeWidth="2" />
                  <circle cx="70" cy="370" r="3.5" fill="#1269A8" />

                  {/* Node 2: Progression */}
                  <circle cx="180" cy="280" r="9" fill="#0F1E2D" stroke="#1269A8" strokeWidth="2" />
                  <circle cx="180" cy="280" r="4" fill="#1686D9" />

                  {/* Node 3: Leadership Elevation */}
                  <circle cx="275" cy="185" r="10" fill="#0F1E2D" stroke="#1686D9" strokeWidth="2" />
                  <circle cx="275" cy="185" r="4.5" fill="#3DCCC7" />

                  {/* Apex Node: Destination / Goal Point */}
                  <circle cx="370" cy="80" r="14" fill="#17A6A0" fillOpacity="0.15" stroke="#17A6A0" strokeWidth="1.5" />
                  <circle cx="370" cy="80" r="8" fill="#17A6A0" />
                  <circle cx="370" cy="80" r="3.5" fill="#FFFFFF" />

                  {/* Forward Trajectory Arrow Accent */}
                  <path
                    d="M 370 60 L 370 46 M 370 46 L 364 52 M 370 46 L 376 52"
                    stroke="#17A6A0"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
