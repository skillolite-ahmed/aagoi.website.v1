import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Values } from './components/Values';
import { Difference } from './components/Difference';
import { Audience } from './components/Audience';
import { EarlyAccess } from './components/EarlyAccess';
import { Contact } from './components/Contact';
import { EthicalFoundation } from './components/EthicalFoundation';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#152D46] selection:bg-[#1269A8] selection:text-white">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero (Navy) */}
        <Hero />

        {/* 3. The Challenge (White) */}
        <About />

        {/* 4. Our Services (Off-white) */}
        <Approach />

        {/* 5. The Process (Navy) */}
        <Values />

        {/* 6. What Makes Aagoi Different? (White) */}
        <Difference />

        {/* 7. Who We Help (Off-white) */}
        <Audience />

        {/* 8. Participation & Trust (White) and Final Application CTA (Off-white) */}
        <EarlyAccess />

        {/* 9. Contact (White) */}
        <Contact />

        {/* 10. Our Ethical Foundation (Light Teal Tint) */}
        <EthicalFoundation />
      </main>

      {/* 11. Footer (Navy) */}
      <Footer />
    </div>
  );
};

export default App;
