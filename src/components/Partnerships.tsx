import React from 'react';
import {
  Handshake,
  ArrowUpRight,
  Code2,
  Lightbulb,
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  TrendingUp,
  Users2,
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Partnerships: React.FC = () => {
  const areas = [
    { title: 'Early-stage Team Contributors', icon: Users2 },
    { title: 'Technology & Product Collaborators', icon: Code2 },
    { title: 'Strategic Advisors', icon: Lightbulb },
    { title: 'Industry Mentors', icon: GraduationCap },
    { title: 'Business Development Partners', icon: BriefcaseBusiness },
    { title: 'Recruitment & Employer Connections', icon: Building2 },
    { title: 'Research & Innovation Collaborators', icon: FlaskConical },
    { title: 'Organisational Partnerships', icon: Handshake },
    { title: 'Potential Investment Discussions', icon: TrendingUp },
  ];

  return (
    <section id="partnerships" className="py-24 bg-[#F7F9FC] border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#17A6A0]/10 text-[#17A6A0] border border-[#17A6A0]/20">
            <Handshake className="w-3.5 h-3.5" />
            <span>Collaboration &amp; Alliances</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            Build Something Meaningful with Aagoi.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            We are building Aagoi step by step and welcome individuals and organisations who
            share our vision for more intelligent, responsible and meaningful career growth.
          </p>
          <p className="text-sm sm:text-base text-[#526477] leading-relaxed max-w-2xl mx-auto">
            Whether you bring professional experience, technical expertise, strategic guidance,
            mentorship, business knowledge or a collaborative vision, we are open to exploring
            meaningful ways to work together.
          </p>
        </div>

        {/* Potential Collaboration Areas Grid */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#526477]">
              Open Collaboration Spheres
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5EAF0] rounded-xl p-4 flex items-center gap-3.5 hover:border-[#1269A8]/40 hover:shadow-xs transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#152D46]">
                    {area.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Transparent Clarification Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#526477] max-w-xl mx-auto italic">
              Note: Exploratory discussions do not imply existing formal partnerships or commitments. All engagements are evaluated on mutual values, integrity, and shared vision.
            </p>
          </div>
        </div>

        {/* Dedicated Partnership CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.forms.partnership}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#152D46] hover:bg-[#1269A8] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#152D46] focus:ring-offset-2"
          >
            <span>Partner with Aagoi</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
