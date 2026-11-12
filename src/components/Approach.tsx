import React from 'react';
import { CircuitBoard, Users, Network, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Approach: React.FC = () => {
  const cards = [
    {
      id: 'tech',
      title: 'Intelligent Career Technology',
      description:
        'AI-powered solutions that bring structure, insights and direction to career development.',
      icon: CircuitBoard,
      accentColor: '#1269A8',
      features: [
        'Insightful skill & trajectory mapping',
        'Structured professional positioning',
        'Intelligent opportunity identification',
      ],
      tag: 'Technology Layer',
    },
    {
      id: 'human',
      title: 'Personalised Human Support',
      description:
        'Practical guidance and individual attention that complement technology throughout the career journey.',
      icon: Users,
      accentColor: '#17A6A0',
      features: [
        'Nuanced professional counsel',
        'Tailored transition strategy',
        'High-trust human perspective',
      ],
      tag: 'Human Dimension',
    },
    {
      id: 'ecosystem',
      title: 'Connected Career Ecosystem',
      description:
        'A more organised way to approach opportunities, professional connections and career progress.',
      icon: Network,
      accentColor: '#1686D9',
      features: [
        'Holistic career development loop',
        'Curated professional networks',
        'Sustained career momentum',
      ],
      tag: 'Ecosystem Architecture',
    },
  ];

  return (
    <section id="approach" className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            Our Approach
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            A Smarter, More Connected Approach to Career Growth.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            By bridging the analytical precision of intelligent software with genuine human empathy and strategic guidance, Aagoi delivers a seamless, dignified career journey.
          </p>
        </div>

        {/* Three Premium Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-2xl border border-[#E5EAF0] p-8 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200"
                      style={{
                        backgroundColor: `${card.accentColor}15`,
                        color: card.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-[#526477] bg-[#F7F9FC] px-3 py-1 rounded-full border border-[#E5EAF0]">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#152D46] mb-3 group-hover:text-[#1269A8] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#526477] text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 pt-4 border-t border-[#E5EAF0]">
                    {card.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#526477]">
                        <Check className="w-3.5 h-3.5 text-[#17A6A0] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Link indicator */}
                <div className="mt-8 pt-4 border-t border-[#E5EAF0]/60 flex items-center justify-between text-xs font-semibold text-[#1269A8]">
                  <span>Discover the difference</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E5EAF0] p-8 max-w-4xl mx-auto shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#152D46]">
              Ready for a more structured career move?
            </h4>
            <p className="text-xs sm:text-sm text-[#526477]">
              Designed for experienced professionals with 5+ years of work experience. Flexible participation aligned with your schedule.
            </p>
          </div>
          <a
            href={siteConfig.forms.client}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-2xs group"
          >
            <span>Explore Early Access</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
