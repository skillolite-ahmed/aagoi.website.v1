import React from 'react';
import { Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1269A8]/10 text-[#1269A8]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152D46] tracking-tight">
            Let&apos;s Connect.
          </h2>
          <p className="text-lg text-[#526477] leading-relaxed">
            For general enquiries, questions or communication regarding Aagoi, please get in touch.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <a
            href={siteConfig.contact.mailto}
            className="group bg-[#F7F9FC] hover:bg-white border border-[#E5EAF0] hover:border-[#1269A8]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1269A8]/10 text-[#1269A8] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#526477]">
                Official Email
              </span>
              <h3 className="text-xl font-bold text-[#152D46] mt-1 mb-2 group-hover:text-[#1269A8] transition-colors break-all">
                {siteConfig.contact.email}
              </h3>
              <p className="text-xs text-[#526477] leading-relaxed">
                Direct channel for general enquiries, advisory feedback, and strategic introductions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5EAF0] flex items-center justify-between text-xs font-semibold text-[#1269A8]">
              <span>Send an email</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={siteConfig.contact.tel}
            className="group bg-[#F7F9FC] hover:bg-white border border-[#E5EAF0] hover:border-[#17A6A0]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#17A6A0]/10 text-[#17A6A0] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#526477]">
                Official Telephone
              </span>
              <h3 className="text-xl font-bold text-[#152D46] mt-1 mb-2 group-hover:text-[#17A6A0] transition-colors">
                {siteConfig.contact.phoneDisplay}
              </h3>
              <p className="text-xs text-[#526477] leading-relaxed">
                Direct telephone line for official corporate and foundational queries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5EAF0] flex items-center justify-between text-xs font-semibold text-[#17A6A0]">
              <span>Place a call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
