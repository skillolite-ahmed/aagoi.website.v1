import React from 'react';

export const EthicalFoundation: React.FC = () => {
  return (
    <section id="ethics" className="py-20 bg-[#17A6A0]/[0.06] border-t border-[#E5EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Thin teal rule above heading */}
          <div className="w-12 h-0.5 bg-[#17A6A0] mx-auto mb-6" aria-hidden="true" />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#152D46] tracking-tight">
            Our Ethical Foundation
          </h2>

          {/* Paragraph 1 */}
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            Aagoi&apos;s business philosophy is inspired by Islamic principles of honesty, integrity, fairness, trust (Amanah) and accountability.
          </p>

          {/* Paragraph 2 */}
          <p className="text-base sm:text-lg text-[#526477] leading-relaxed">
            We believe these values can benefit everyone, regardless of religion or background. We aim to uphold transparency, respect, responsible employment and ethical business practices.
          </p>

          {/* Closing Statement */}
          <div className="pt-4">
            <p className="text-lg sm:text-xl font-bold text-[#152D46] leading-snug">
              Our principles are rooted in Islamic values, but our doors are open to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
