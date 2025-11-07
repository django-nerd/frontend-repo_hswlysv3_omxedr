import React from 'react';

const NavItem = ({ label }) => (
  <a
    href="#"
    className="uppercase text-[16px] tracking-[0.06em] text-black/90 hover:text-black transition-colors"
    style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
  >
    {label}
  </a>
);

const NavButton = ({ children }) => (
  <button
    className="uppercase text-[16px] tracking-[0.06em] px-4 py-2 border border-black text-black rounded-sm transition-colors duration-200 hover:bg-black hover:text-white"
    style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
  >
    {children}
  </button>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {['MENU', 'TRENDING', 'SAVED', 'ABOUT'].map((item) => (
            <NavItem key={item} label={item} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <NavButton>SIGN UP</NavButton>
          <NavButton>LOG IN</NavButton>
        </div>
      </nav>
    </header>
  );
}
