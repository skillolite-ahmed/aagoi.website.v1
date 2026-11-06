import React from 'react';
import { ArrowUpRight, ShieldCheck, UserCheck, Clock } from 'lucide-react';
import { siteConfig } from '../config/site';

export const EarlyAccess: React.FC = () => {
  return (
    <section id="early-access" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F7F9FC] via-white to-[#F7F9FC] border-2 border-[#1269A8]/25 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden text-center">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1269A8]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8] mb-6">
            Client Early Access
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight max-w-3xl mx-auto">
            Take a More Structured Approach to Your Next Career Move.
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-[#526477] max-w-2xl mx-auto leading-relaxed">
            Interested in exploring Aagoi&apos;s personalised career assistance? Introduce
            yourself and share your career interests through our early-access enquiry form.
          </p>

          {/* Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.forms.client}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
            >
              <span>Request Early Access</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 pt-8 border-t border-[#E5EAF0] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#526477]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1269A8]" />
              <span>Strictly Confidential</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <UserCheck className="w-4 h-4 text-[#17A6A0]" />
              <span>Personalised Review</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#1686D9]" />
              <span>No Spam or Automated Pitches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
