import React, { useState } from 'react';
import LogoStar from '../assets/logo-star.png';
import FooterCar from '../assets/footer-car.jpg';
import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative pt-28 pb-16 bg-[#040404] border-t border-white/10 overflow-hidden">
      {/* Background Silhouette Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img
          src={FooterCar}
          alt="NEVO 3D Silhouette"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-[#040404]" />
      </div>

      <div className="max-w-[1520px] mx-auto px-6 relative z-10">
        {/* Top Call to Action: Ready to Drive the Future? + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-sm font-mono uppercase tracking-widest text-[#FF8305] block">
              Reservation Allocation Open
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05]">
              Ready to Drive<br />
              <span className="text-[#FF8305] italic font-serif">the Future?</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="relative">
              <div className="glass-card rounded-[24px] p-2.5 sm:p-3 border border-white/20 flex flex-col sm:flex-row items-center gap-3 shadow-2xl focus-within:border-[#FF8305] transition-colors">
                <div className="pl-4 text-white/40 hidden sm:block">
                  <Mail size={22} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email*"
                  required
                  className="w-full bg-transparent px-4 py-3 text-lg text-white placeholder-white/40 focus:outline-none font-light"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 btn-primary text-base font-semibold tracking-wide flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {subscribed && (
                <div className="absolute -bottom-10 left-3 flex items-center gap-2 text-sm text-emerald-400 font-mono animate-fade-in">
                  <CheckCircle2 size={16} />
                  <span>VIP reservation portal invitation sent to your email.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Middle Footer Navigation Links & Brand Bio */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="flex items-center gap-3.5 group cursor-pointer inline-flex">
              <img
                src={LogoStar}
                alt="NEVO Star Logo"
                className="w-9 h-9 object-contain group-hover:rotate-45 transition-transform duration-500"
              />
              <span className="font-brand text-3xl font-bold tracking-wider text-white">
                NEVO
              </span>
            </a>

            <p className="text-white/60 text-base font-light leading-relaxed max-w-sm">
              Pushing the boundaries of pure electric propulsion, autonomous neural networks, and aerodynamic sculpture. Built for the new era of speed.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-white/40 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Series 1 Production Queues Open Globally</span>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-3 text-base text-white/60 font-light">
                <li>
                  <a href="#about" className="hover:text-[#FF8305] transition-colors">
                    About NEVO
                  </a>
                </li>
                <li>
                  <a href="#why-choose" className="hover:text-[#FF8305] transition-colors">
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="#mobility" className="hover:text-[#FF8305] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#FF8305] transition-colors">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h4>
              <ul className="space-y-3 text-base text-white/60 font-light">
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Technical Whitepaper
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Supercharging Maps
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Autonomous Telemetry
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Safety Certification
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h4>
              <ul className="space-y-3 text-base text-white/60 font-light">
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Terms of Reservation
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Privacy Protection
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Cookies Preference
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#FF8305] cursor-pointer transition-colors">
                    Compliance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© Copyright 2026, All Rights Reserved by NEVO Motors Inc.</p>

          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#home"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-[#FF8305] hover:border-[#FF8305] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#home"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-[#FF8305] hover:border-[#FF8305] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#home"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-[#FF8305] hover:border-[#FF8305] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
