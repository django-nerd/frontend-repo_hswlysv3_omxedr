import React from 'react';
import Navbar from './components/Navbar';
import HeroTitle from './components/HeroTitle';
import CTAButton from './components/CTAButton';
import HeroImage from './components/HeroImage';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-28 pb-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10">
          {/* Left: Title, description, CTA */}
          <div className="lg:col-span-7">
            <HeroTitle />
            <CTAButton />
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-5 flex justify-end relative lg:translate-y-6">
            <HeroImage />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
