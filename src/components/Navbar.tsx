import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5EAF0]'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E5EAF0]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark / Official Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] rounded-md px-1 py-1"
            aria-label="Aagoi - Return to top"
          >
            <img
              src="/aagoi-logo-transparent.png"
              alt="Aagoi"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:opacity-95"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#526477] hover:text-[#152D46] px-3 py-2 rounded-lg transition-colors hover:bg-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#1269A8]/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={siteConfig.forms.client}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
            >
              <span>Request Early Access</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#152D46] hover:bg-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#1269A8]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5EAF0] shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#152D46] hover:bg-[#F7F9FC] hover:text-[#1269A8] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E5EAF0] mt-3">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-5 py-3 rounded-lg shadow-sm transition-colors"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
