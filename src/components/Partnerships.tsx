import React from 'react';
import { ArrowUpRight, Handshake } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Partnerships: React.FC = () => {
  return (
    <section id="partnerships" className="py-20 bg-[#F7F9FC] border-t border-[#E5EAF0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-[#E5EAF0] rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-[#17A6A0]/10 text-[#17A6A0] flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-6 h-6" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#17A6A0]/10 text-[#17A6A0] border border-[#17A6A0]/20 mb-4">
            Collaboration &amp; Alliances
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#152D46] tracking-tight mb-4">
            Interested in working with Aagoi?
          </h2>
          <p className="text-base text-[#526477] leading-relaxed max-w-xl mx-auto mb-2">
            Explore opportunities to collaborate with us.
          </p>
          <p className="text-sm text-[#526477] leading-relaxed max-w-xl mx-auto mb-8">
            We welcome individuals and organisations who share our vision for more intelligent, responsible and meaningful career growth — whether you bring technical expertise, strategic guidance, mentorship or a collaborative vision.
          </p>

          <a
            href={siteConfig.forms.partnership}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#152D46] hover:bg-[#1269A8] text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#152D46] focus:ring-offset-2"
          >
            <span>Partner with Aagoi</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <p className="mt-6 text-xs text-[#526477] italic max-w-lg mx-auto">
            Note: Exploratory discussions do not imply existing formal partnerships or commitments. All engagements are evaluated on mutual values, integrity, and shared vision.
          </p>
        </div>
      </div>
    </section>
  );
};
