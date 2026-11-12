import React from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Users,
  TrendingUp,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC]"
    >
      {/* Existing subtle background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#152D46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN — APPROVED AAGOI WEBSITE MESSAGING */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status badges */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/10 text-[#1269A8] border border-[#1269A8]/20">
                <span className="w-2 h-2 rounded-full bg-[#1269A8] animate-pulse" />
                {siteConfig.status}
              </span>

              <span className="text-xs font-semibold tracking-wider uppercase text-[#526477] bg-white px-3 py-1 rounded-full border border-[#E5EAF0]">
                {siteConfig.introLabel}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#152D46] tracking-tight leading-[1.12]">
              Your Experience Deserves a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1269A8] via-[#1686D9] to-[#17A6A0]">
                Better Career Journey.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-lg sm:text-xl text-[#526477] leading-relaxed max-w-2xl font-normal">
              Aagoi brings together intelligent career technology and personalised human support to help experienced professionals navigate their next career move with greater clarity, direction and confidence.
            </p>

            {/* Supporting eligibility & payment indicators */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#1269A8]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  For professionals with 5+ years of experience
                </span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#17A6A0]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  No upfront payment to begin
                </span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Users className="w-4 h-4 text-[#1686D9]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Personalised human support
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
              >
                <span>Explore Early Access</span>
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

            {/* Supporting note */}
            <p className="text-xs sm:text-sm text-[#526477] pt-1">
              Be among the first to explore what we&apos;re building. Designed for experienced professionals.
            </p>
          </div>

          {/* RIGHT COLUMN — CAREER ECOSYSTEM */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle existing glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-[#1269A8]/10 via-[#17A6A0]/10 to-[#1686D9]/15 rounded-3xl blur-2xl -z-10"
              />

              {/* Ecosystem card — original outer styling preserved */}
              <div className="bg-white/95 rounded-2xl border border-[#E5EAF0] p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E5EAF0] mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-3 h-3 rounded-full bg-[#1269A8] shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#152D46]">
                      THE AAGOI CAREER ECOSYSTEM
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    Aagoi Ecosystem
                  </span>
                </div>

                <CareerEcosystem />

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-[#E5EAF0] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs text-[#526477]">
                  <div className="flex items-center gap-2 min-w-0">
                    <TrendingUp className="w-4 h-4 text-[#1269A8] shrink-0" />
                    <span className="font-medium">Technology &bull; People &bull; Opportunities</span>
                  </div>

                  <span className="font-semibold text-[#152D46] whitespace-nowrap">
                    Outcome-Oriented
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Capability {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  iconBackground: string;
}

const capabilities: Capability[] = [
  {
    title: 'Intelligent Career Technology',
    description: 'AI-powered tools and structured career solutions.',
    Icon: BrainCircuit,
    accent: 'text-[#1269A8]',
    iconBackground: 'bg-[#1269A8]/10',
  },
  {
    title: 'Personalised Human Support',
    description: 'Individual guidance shaped around professional needs.',
    Icon: Users,
    accent: 'text-[#17A6A0]',
    iconBackground: 'bg-[#17A6A0]/10',
  },
  {
    title: 'Opportunity Discovery & Industry Access',
    description:
      'Helping professionals explore relevant opportunities and connect with organisations aligned with their career direction.',
    Icon: Building2,
    accent: 'text-[#1269A8]',
    iconBackground: 'bg-[#1269A8]/10',
  },
];

const CareerEcosystem: React.FC = () => (
  <div className="flex flex-col items-center">
    <img
      src="/aagoi-logo-transparent.png"
      alt="Aagoi logo"
      className="h-8 w-auto object-contain"
    />
    <p className="mt-2 mb-3 text-[11px] font-semibold tracking-wide text-[#526477]">
      Three connected capabilities
    </p>

    <div className="w-full space-y-2">
      {capabilities.map(({ title, description, Icon, accent, iconBackground }) => (
        <div
          key={title}
          className="flex min-h-20 items-center gap-3 rounded-xl border border-[#E5EAF0] bg-white px-3 py-2.5"
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBackground} ${accent}`}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-5 text-[#152D46]">{title}</h3>
            <p className="mt-0.5 text-xs leading-4 text-[#526477]">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
