import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

const currentYear = 2026;

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152D46] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-[#1686D9] rounded-md"
              aria-label="Aagoi - Return to top"
            >
              <img
                src="/aagoi-logo-white.png"
                alt="Aagoi"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-base font-semibold text-slate-200">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Personalised career support for experienced professionals — combining human guidance, structured opportunity research and coordinated execution.
            </p>
            <div className="pt-2 text-xs text-[#17A6A0] font-medium">
              Progress with Purpose. Built on Trust.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#approach" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#values" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#difference" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  What Makes Us Different
                </a>
              </li>
              <li>
                <a href="#audience" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  Who We Help
                </a>
              </li>
              <li>
                <a href="#early-access" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  Participation &amp; Trust
                </a>
              </li>
              <li>
                <a href="#ethics" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  Our Ethical Foundation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Dedicated Enquiries & Verified Contacts */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Direct Enquiry Pathways
            </h4>
            <div className="space-y-2.5">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1686D9]"
              >
                <span>Career Support – Early Access</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1686D9]" />
              </a>
              <a
                href={siteConfig.forms.partnership}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#17A6A0]"
              >
                <span>Partner with Aagoi</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#17A6A0]" />
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={siteConfig.contact.mailto}
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#1686D9] rounded"
              >
                <Mail className="w-3.5 h-3.5 text-[#1686D9]" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.contact.tel}
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#17A6A0] rounded"
              >
                <Phone className="w-3.5 h-3.5 text-[#17A6A0]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Inclusivity note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-slate-400">
            Our values are rooted in principles. Our doors are open to everyone.
          </div>
        </div>
      </div>
    </footer>
  );
};
