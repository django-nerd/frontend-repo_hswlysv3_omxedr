import React from 'react';
import Navbar from './components/Navbar';
import HeroTitle from './components/HeroTitle';
import CTAButton from './components/CTAButton';
import HeroImage from './components/HeroImage';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Spline Cover Background */}
      <section className="relative pt-28 pb-12">
        {/* Spline background as full-bleed cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Soft white wash to keep overall background white */}
        <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
        {/* Warm, old-school paper hint (subtle yellows/oranges) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(1200px 600px at 80% 20%, rgba(255, 195, 26, 0.18), rgba(255, 195, 26, 0) 55%), radial-gradient(900px 500px at 10% 80%, rgba(255, 140, 0, 0.12), rgba(255, 140, 0, 0) 60%)',
          }}
        />

        <main className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10">
            {/* Left: Title, description, CTA */}
            <div className="lg:col-span-7">
              <HeroTitle />
              <CTAButton />
            </div>

            {/* Right: Hero Image */}
            <div className="lg:col-span-5 flex justify-end relative lg:translate-y-6">
              <HeroImage />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
