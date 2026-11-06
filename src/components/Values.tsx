import React from 'react';
import { ShieldCheck, HeartHandshake, Cpu, Lock, Sparkles } from 'lucide-react';

export const Values: React.FC = () => {
  const principles = [
    {
      title: 'Integrity & Trust',
      subtitle: 'Amanah & Accountability',
      description:
        'Honest communication, clear expectations, and responsible business conduct in every interaction.',
      icon: ShieldCheck,
      color: '#1686D9',
    },
    {
      title: 'Fairness & Respect',
      subtitle: 'Dignity for All',
      description:
        'Respecting every individual and career journey, regardless of background, faith, or community.',
      icon: HeartHandshake,
      color: '#17A6A0',
    },
    {
      title: 'Responsible Technology',
      subtitle: 'AI with Human Judgement',
      description:
        'Harnessing intelligent automation thoughtfully, ensuring technology serves and empowers human potential.',
      icon: Cpu,
      color: '#1686D9',
    },
    {
      title: 'Privacy & Professional Dignity',
      subtitle: 'Confidentiality First',
      description:
        'Protecting your personal data responsibly and respecting your career time, aspirations, and choices.',
      icon: Lock,
      color: '#17A6A0',
    },
  ];

  return (
    <section id="values" className="py-24 bg-[#152D46] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1269A8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#17A6A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#17A6A0]/20 text-[#17A6A0] border border-[#17A6A0]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ethical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Progress with Purpose. Built on Trust.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We believe meaningful career growth begins with trust. Our approach is guided by
            honesty, integrity, fairness and accountability, with respect for every individual
            and community.
          </p>
        </div>

        {/* Four Principles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/[0.06] border border-white/15 rounded-2xl px-8 py-5 max-w-2xl backdrop-blur-xs">
            <p className="text-base sm:text-lg font-medium text-slate-200">
              &ldquo;Our values are rooted in principles. Our doors are open to everyone.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
