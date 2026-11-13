import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Audience } from './components/Audience';
import { Values } from './components/Values';
import { EarlyAccess } from './components/EarlyAccess';
import { Partnerships } from './components/Partnerships';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#152D46] selection:bg-[#1269A8] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: Problem Recognition */}
        <About />

        {/* Section 03: How Aagoi Supports Your Career Move */}
        <Approach />

        {/* Section 04: How the Process Works */}
        <Values />

        {/* Section 05: Who We Help */}
        <Audience />

        {/* Section 06: Participation & Trust + Section 07: Final CTA */}
        <EarlyAccess />

        {/* Section 08: Partnerships (compact CTA) */}
        <Partnerships />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
