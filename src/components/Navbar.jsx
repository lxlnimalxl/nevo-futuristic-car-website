import React, { useState } from 'react';
import LogoStar from '../assets/logo-star.png';
import { ArrowUpRight, Menu, X, ChevronDown, Compass, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenPreOrder, onOpenTestDrive }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Choose', href: '#why-choose' },
    { label: 'Mobility', href: '#mobility' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040404]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1520px] mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3.5 group cursor-pointer">
          <img
            src={LogoStar}
            alt="NEVO Star Logo"
            className="w-9 h-9 object-contain group-hover:rotate-45 transition-transform duration-500"
          />
          <span className="font-brand text-3xl font-bold tracking-wider text-white">
            NEVO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-white/70 hover:text-white transition-colors tracking-wide hover:text-[#FF8305]"
            >
              {link.label}
            </a>
          ))}

          {/* Service Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className="flex items-center gap-1.5 text-lg font-medium text-white/70 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Service</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  servicesDropdown ? 'rotate-180 text-[#FF8305]' : 'group-hover:text-[#FF8305]'
                }`}
              />
            </button>

            {servicesDropdown && (
              <div className="absolute top-10 left-0 w-64 glass-card rounded-2xl p-3 border border-white/20 shadow-2xl space-y-1 animate-scale-in">
                <a
                  href="#mobility"
                  onClick={() => setServicesDropdown(false)}
                  className="block p-2.5 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Supercharging Network
                </a>
                <a
                  href="#mobility"
                  onClick={() => setServicesDropdown(false)}
                  className="block p-2.5 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Neural Autopilot OTA
                </a>
                <button
                  onClick={() => {
                    setServicesDropdown(false);
                    onOpenTestDrive();
                  }}
                  className="w-full text-left p-2.5 rounded-xl text-sm font-medium text-[#FF8305] hover:bg-[#FF8305]/10 transition-colors cursor-pointer"
                >
                  Schedule Test Drive
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTestDrive}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-outline text-sm tracking-wide cursor-pointer"
          >
            <Compass size={16} className="text-[#FF8305]" />
            <span>Test Drive</span>
          </button>

          <button
            onClick={onOpenPreOrder}
            className="inline-flex items-center gap-2 px-6 py-2.5 btn-primary text-sm font-semibold tracking-wide cursor-pointer shadow-lg"
          >
            <span>Pre-Order</span>
            <ArrowUpRight size={17} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/15 px-6 py-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-medium text-white/80 hover:text-[#FF8305] py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestDrive();
              }}
              className="w-full py-3 rounded-2xl btn-outline text-center text-sm font-semibold cursor-pointer"
            >
              Schedule Test Drive
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreOrder();
              }}
              className="w-full py-3 rounded-2xl btn-primary text-center text-sm font-semibold cursor-pointer"
            >
              Pre-Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
