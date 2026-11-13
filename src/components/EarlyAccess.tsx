import React from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  UserCheck,
  Clock,
  CheckCircle2,
  FileText,
  MessageSquare,
  Sparkles,
  MessageCircle,
  CheckSquare,
  Bell,
  Lock,
} from 'lucide-react';
import { siteConfig } from '../config/site';

const participationPoints = [
  {
    icon: CheckSquare,
    title: 'Review and Approve Opportunities',
    description: 'Review opportunities we present and confirm which to progress.',
  },
  {
    icon: MessageCircle,
    title: 'Timely Feedback',
    description: 'Share feedback, respond to updates and confirm next steps promptly.',
  },
  {
    icon: Bell,
    title: 'Keep Communication Open',
    description: 'Remain available via WhatsApp during working hours for important updates.',
  },
  {
    icon: Lock,
    title: 'Provide Accurate Information',
    description: 'Share accurate professional information to ensure well-matched opportunities.',
  },
];

const applicationSteps = [
  {
    num: '01',
    title: 'Submit Application',
    description:
      'Complete a short application to introduce your professional background, experience and career goals.',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Personal Discussion',
    description:
      'Our team reviews your application and contacts you personally through WhatsApp to understand your goals, explain the service, clarify participation expectations and discuss payment terms.',
    icon: MessageSquare,
  },
  {
    num: '03',
    title: 'Detailed Assessment & Onboarding',
    description:
      'If you decide to proceed, we privately share a detailed career assessment. After reviewing your profile and confirming alignment, we move forward with onboarding where appropriate.',
    icon: Sparkles,
  },
];

export const EarlyAccess: React.FC = () => {
  return (
    <>
      {/* ——— SECTION 07: PARTICIPATION & TRUST (WHITE BACKGROUND) ——— */}
      <section id="early-access" className="py-24 bg-white border-t border-[#E5EAF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
              How We Work Together
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
              A partnership that requires your participation.
            </h2>
            <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
              Aagoi provides structured support, guidance and coordination. For it to work effectively, your active involvement is essential throughout the process.
            </p>
          </div>

          {/* Clean 4 Participation Responsibility Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {participationPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-6 shadow-2xs hover:shadow-xs hover:border-[#1269A8]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EAF0] text-[#1269A8] flex items-center justify-center mb-4 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#152D46] mb-2">
                      {point.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#526477] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Daily Commitment — Clear Visual Emphasis */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#F0F6FB] via-[#F7F9FC] to-[#F0F6FB] border-2 border-[#1269A8]/30 rounded-2xl p-6 sm:p-8 shadow-xs mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#17A6A0]/10 text-[#17A6A0] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[#152D46]">
                  A Small Daily Commitment. A More Focused Career Move.
                </h4>
                <p className="text-sm sm:text-base text-[#526477] leading-relaxed">
                  We ask you to set aside a few minutes each working day to review updates, share feedback, respond to relevant opportunities and complete agreed next steps. There is no fixed daily time requirement or need for lengthy sessions — just consistent involvement and timely communication, fitted around your existing schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Transparent Payment Model — 3 Equal Columns on Desktop, >= 14px Text */}
          <div className="max-w-4xl mx-auto bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#1269A8]" />
              <h4 className="text-lg font-bold text-[#152D46]">
                Transparent, Outcome-Aligned Payment Model
              </h4>
            </div>

            <p className="text-sm sm:text-base text-[#526477] leading-relaxed mb-6">
              We believe professional trust begins with clear, honest terms. Our payment structure is aligned with real milestones rather than speculative upfront costs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-white rounded-xl p-5 border border-[#E5EAF0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="font-bold text-[#152D46] text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#17A6A0] shrink-0" />
                    <span>No Upfront Payment</span>
                  </div>
                  <p className="text-sm text-[#526477] leading-relaxed">
                    No payment is required to begin. We evaluate and initiate your career support without upfront commitments.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5EAF0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="font-bold text-[#152D46] text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#17A6A0] shrink-0" />
                    <span>First Qualifying Interview</span>
                  </div>
                  <p className="text-sm text-[#526477] leading-relaxed">
                    A small, pre-agreed contribution is payable only after your first qualifying interview occurs.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5EAF0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="font-bold text-[#152D46] text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#17A6A0] shrink-0" />
                    <span>Successful Hiring</span>
                  </div>
                  <p className="text-sm text-[#526477] leading-relaxed">
                    The remaining agreed service fee is payable only after you are successfully hired.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer & Notice — Must be at least 14px (text-sm) */}
            <div className="pt-6 border-t border-[#E5EAF0] space-y-3 text-sm text-[#526477] leading-relaxed">
              <p>
                <strong className="text-[#152D46]">Full Clarity Upfront:</strong> Exact contribution amounts, qualifying interview conditions, payment triggers, and applicable exceptions are explained and agreed upon before you decide to join.
              </p>
              <p className="italic text-[#526477]">
                <strong className="text-[#152D46] not-italic">Responsible Notice:</strong> Aagoi does not guarantee interviews, job offers, or specific hiring outcomes. We provide structured direction, profile positioning, and individual guidance to support your career trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— SECTION 08: FINAL APPLICATION CTA (OFF-WHITE BACKGROUND) ——— */}
      <section className="py-24 bg-[#F7F9FC] border-t border-[#E5EAF0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white via-white to-[#F0F6FB] border-2 border-[#1269A8]/25 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden text-center">
            {/* Subtle accent glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-80 h-80 bg-[#1269A8]/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8] mb-6">
              <span>Personalised Career Support</span>
              <span className="text-[#1269A8]/40">&bull;</span>
              <span className="text-[#1686D9] font-bold">EARLY ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight mb-6 relative z-10">
              Ready to approach your next career move differently?
            </h2>

            <p className="text-base sm:text-lg text-[#526477] leading-relaxed max-w-2xl mx-auto mb-12 relative z-10">
              Introduce yourself through Aagoi&apos;s career-support application. Our team reviews each application individually and connects personally via WhatsApp to understand your career goals, explain how our support works, and discuss expectations before you decide to proceed.
            </p>

            {/* Three-step application flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10 text-left">
              {applicationSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="bg-white border border-[#E5EAF0] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold tracking-widest text-[#1686D9]">
                          STEP {step.num}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#152D46] mb-2">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#526477] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Primary CTA button */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-9 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
              >
                <span>Apply for Career Support</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Trust indicators: exactly 3 items (removed 5+ years chip as instructed) */}
            <div className="relative z-10 mt-10 pt-8 border-t border-[#E5EAF0] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#526477] text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-[#17A6A0]" />
                <span>A Few Minutes Each Working Day</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1686D9]" />
                <span>Clear Terms Before You Begin</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <UserCheck className="w-4 h-4 text-[#1269A8]" />
                <span>Personalised Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
