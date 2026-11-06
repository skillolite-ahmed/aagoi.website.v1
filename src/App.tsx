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
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: About */}
        <About />

        {/* Section 4: Our Approach */}
        <Approach />

        {/* Section 5: Who We Help */}
        <Audience />

        {/* Section 6: Our Values */}
        <Values />

        {/* Section 7: Client Early Access */}
        <EarlyAccess />

        {/* Section 8: Partner with Aagoi */}
        <Partnerships />

        {/* Section 9: Contact */}
        <Contact />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
};

export default App;
