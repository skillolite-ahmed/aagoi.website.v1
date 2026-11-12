import React from 'react';
import { Briefcase, TrendingUp, RefreshCw, Globe, CheckCircle2, Clock } from 'lucide-react';

export const Audience: React.FC = () => {
  const categories = [
    {
      title: 'Mid-Career Professionals',
      subtitle: 'Accelerating Momentum',
      description:
        'Experienced individuals seeking intentional upward mobility, greater scope, or breaking through mid-career plateaus into higher-impact roles.',
      icon: TrendingUp,
      traits: [
        '5+ years of verified professional experience',
        'Seeking strategic career progression',
        'Desire for structured market positioning',
      ],
    },
    {
      title: 'Senior Specialists & Leaders',
      subtitle: 'Strategic & Confidential Moves',
      description:
        'Functional heads, lead architects, and senior practitioners navigating high-stakes career transitions where alignment, culture, and discretion matter most.',
      icon: Briefcase,
      traits: [
        'Extensive domain mastery & track record',
        'High-discretion executive transitions',
        'Alignment with organizational vision',
      ],
    },
    {
      title: 'Career & Domain Transitioners',
      subtitle: 'Repositioning Core Expertise',
      description:
        'Professionals shifting between industries, functions, or consulting into tech, who need their transferable experience translated into high-relevance positioning.',
      icon: RefreshCw,
      traits: [
        'Transferable cross-functional acumen',
        'Strategic narrative repositioning',
        'Targeted transition roadmaps',
      ],
    },
  ];

  return (
    <section id="audience" className="py-24 bg-white border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Who We Help
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            Built Around Your Career Experience.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            Our personalised career assistance is designed specifically for experienced professionals with <strong className="text-[#152D46]">at least 5 years of total work experience</strong> who are considering their next career move.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-8 hover:border-[#1269A8]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5EAF0] text-[#1269A8] flex items-center justify-center mb-6 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#17A6A0] uppercase tracking-wider">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#152D46] mt-1 mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#526477] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5EAF0] space-y-2.5">
                  {cat.traits.map((trait, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-[#526477]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1269A8] shrink-0" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Service Criteria & Flexible Commitment Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-6 sm:p-7 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center shrink-0 mt-0.5">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#152D46] mb-1">
                For Professionals with 5+ Years Experience
              </h4>
              <p className="text-xs sm:text-sm text-[#526477] leading-relaxed">
                This personalised service is structured specifically for professionals who already possess a track record in the workforce. It is not designed for fresh graduates or entry-level job seekers.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-6 sm:p-7 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#17A6A0]/10 text-[#17A6A0] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#152D46] mb-1">
                Flexible Participation
              </h4>
              <p className="text-xs sm:text-sm text-[#526477] leading-relaxed">
                Your career journey is built around your schedule. You participate according to your professional availability and a mutually agreed timeline, with no rigid daily-hours requirement.
              </p>
            </div>
          </div>
        </div>

        {/* Inclusivity & Ecosystem Scope Note */}
        <div className="mt-8 bg-gradient-to-r from-[#F7F9FC] via-white to-[#F7F9FC] border border-[#E5EAF0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center shrink-0">
            <Globe className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#152D46]">
              An Inclusive Long-Term Career Technology Vision
            </h4>
            <p className="text-sm text-[#526477] leading-relaxed">
              While our high-touch personalised assistance is tailored for experienced career milestones (5+ years), Aagoi’s overarching career technology ecosystem is being developed to remain fundamentally inclusive across sectors, career stages, and backgrounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
