import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#152D46] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#1686D9] rounded-md">
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
              {siteConfig.description}
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
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#approach" className="text-slate-400 hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#audience" className="text-slate-400 hover:text-white transition-colors">
                  Who We Help
                </a>
              </li>
              <li>
                <a href="#values" className="text-slate-400 hover:text-white transition-colors">
                  Our Values
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
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
                className="flex items-center justify-between text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition-colors"
              >
                <span>Career Support – Early Access</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1686D9]" />
              </a>
              <a
                href={siteConfig.forms.partnership}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition-colors"
              >
                <span>Partner with Aagoi</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#17A6A0]" />
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={siteConfig.contact.mailto}
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#1686D9]" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.contact.tel}
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#17A6A0]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Inclusivity note */}
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
