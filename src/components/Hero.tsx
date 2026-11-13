import React from 'react';
import { ArrowUpRight, ArrowDown, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[#0F1E2D]"
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
        <div className="max-w-3xl">
          {/* Status badges */}
          <div className="inline-flex flex-wrap items-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/20 text-[#60AADE] border border-[#1269A8]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60AADE] animate-pulse" />
              EARLY ACCESS
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              {siteConfig.introLabel}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Your Next Career Move{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60AADE] via-[#4DB8E8] to-[#3DCCC7]">
              Deserves More Than Another Application.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-4">
            Personalised career support for professionals ready to make their next move — combining human guidance, structured opportunity research and coordinated execution.
          </p>

          {/* Eligibility */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-8">
            For professionals with 5+ years of total professional work experience.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#3DCCC7]" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                5+ years of total professional work experience
              </span>
            </div>
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
              className="inline-flex items-center justify-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2 focus:ring-offset-[#0F1E2D]"
            >
              <span>Apply for Career Support</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#problem"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 hover:border-white/25 text-base font-semibold px-6 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span>See how it works</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Supporting note */}
          <p className="mt-6 text-xs sm:text-sm text-slate-500">
            Aagoi is opening applications for its personalised career-support service while continuing to develop its broader career-technology ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};
