import React from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  UserCheck,
  Clock,
  Briefcase,
  CheckCircle2,
  FileText,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const EarlyAccess: React.FC = () => {
  const steps = [
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

  return (
    <section id="early-access" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F7F9FC] via-white to-[#F7F9FC] border-2 border-[#1269A8]/25 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1269A8]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8] mb-6">
              <span>Personalised Career Support</span>
              <span className="text-[#1269A8]/40">&bull;</span>
              <span className="text-[#1686D9] font-bold">EARLY ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
              Take a More Structured Approach to Your Next Career Move.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#526477] leading-relaxed">
              Looking for a more structured way to approach your next career move? Introduce yourself through Aagoi&apos;s career-support application. Our team reviews each application individually and connects personally via WhatsApp to understand your career goals, explain how our support works, and discuss the expectations and next steps before you decide whether to proceed.
            </p>
          </div>

          {/* How Application Works - 3 Step Flow */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white border border-[#E5EAF0] rounded-2xl p-6 relative shadow-2xs flex flex-col justify-between"
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
                    <p className="text-xs sm:text-sm text-[#526477] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transparent Payment & Participation Model */}
          <div className="mt-10 bg-white border border-[#E5EAF0] rounded-2xl p-6 sm:p-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#1269A8]" />
              <h4 className="text-base font-bold text-[#152D46]">
                Transparent, Outcome-Aligned Payment Model
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#526477] leading-relaxed mb-6">
              We believe professional trust begins with clear, honest terms. Our payment structure is aligned with real milestones rather than speculative upfront costs:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#526477] mb-6">
              <div className="bg-[#F7F9FC] rounded-xl p-4 border border-[#E5EAF0]">
                <div className="font-bold text-[#152D46] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                  <span>No Upfront Payment</span>
                </div>
                <p className="text-xs text-[#526477] leading-relaxed">
                  No payment is required to begin. We evaluate and initiate your career support without upfront commitments.
                </p>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-4 border border-[#E5EAF0]">
                <div className="font-bold text-[#152D46] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                  <span>First Qualifying Interview</span>
                </div>
                <p className="text-xs text-[#526477] leading-relaxed">
                  A small, pre-agreed contribution is payable only after your first qualifying interview occurs.
                </p>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-4 border border-[#E5EAF0]">
                <div className="font-bold text-[#152D46] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#17A6A0]" />
                  <span>Successful Hiring</span>
                </div>
                <p className="text-xs text-[#526477] leading-relaxed">
                  The remaining agreed service fee is payable only after you are successfully hired.
                </p>
              </div>
            </div>

            {/* Clear Conditions & Disclaimer */}
            <div className="pt-4 border-t border-[#E5EAF0] space-y-2 text-xs text-[#526477]">
              <p>
                <strong>Full Clarity Upfront:</strong> Exact contribution amounts, qualifying interview conditions, payment triggers, and applicable exceptions are explained and agreed upon before you decide to join.
              </p>
              <p className="italic text-slate-500">
                <strong>Responsible Notice:</strong> Aagoi does not guarantee interviews, job offers, or specific hiring outcomes. We provide structured direction, profile positioning, and individual guidance to support your career trajectory.
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <a
              href={siteConfig.forms.client}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
            >
              <span>Apply for Career Support</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 pt-8 border-t border-[#E5EAF0] grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-[#526477] text-center">
            <div className="flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4 text-[#1269A8]" />
              <span>5+ Years of Total Professional Work Experience</span>
            </div>
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
  );
};
