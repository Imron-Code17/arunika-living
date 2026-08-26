import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { Portfolio } from './components/Portfolio';
import { Promo } from './components/Promo';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#24201D] selection:bg-[#E6DFD5] selection:text-[#14100C]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Portfolio />
        <Promo />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
