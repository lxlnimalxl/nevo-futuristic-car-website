import React from 'react';
import AboutCar from '../assets/about-car.jpg';
import { ArrowUpRight, Wind, Leaf, Timer, Compass, ShieldCheck } from 'lucide-react';

export default function AboutFeatures({ onOpenPreOrder, onOpenSpecSheet }) {
  return (
    <section id="about" className="py-32 bg-[#040404] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-[-120px] w-[600px] h-[600px] glow-orb-orange" />
      <div className="absolute bottom-20 left-[-150px] w-[500px] h-[500px] glow-orb-orange" />

      <div className="max-w-[1520px] mx-auto px-6 relative z-10">
        {/* Top Split Section: Title & 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Description & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-mono uppercase tracking-widest text-[#FF8305] block">
                Aerodynamic Architecture
              </span>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05]">
                Smart Features the Future
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start pt-2">
              <div className="sm:col-span-4">
                <span className="text-xl sm:text-2xl font-medium text-white block">
                  maximum performance
                </span>
                <span className="text-xs text-[#FF8305] font-mono mt-1 block">
                  Gen-IV Electric Platform
                </span>
              </div>

              <div className="sm:col-span-8">
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  Precision engineering meets carbon-negative sustainability. Every surface and curvature is calibrated to minimize aerodynamic drag while elevating driver immersion.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <button
                onClick={onOpenPreOrder}
                className="px-8 py-4 btn-primary text-base font-semibold tracking-wide flex items-center gap-3 cursor-pointer shadow-xl shadow-[#FF8305]/20"
              >
                <span>Get Started</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onOpenSpecSheet}
                className="flex items-center gap-2 px-6 py-4 text-base font-medium text-white/80 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="group-hover:text-[#FF8305] transition-colors">Learn More</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#FF8305]"
                />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Car Close-Up Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[640px] rounded-[32px] overflow-hidden border border-white/20 glass-card shadow-2xl group">
              {/* Image with zoom on hover */}
              <img
                src={AboutCar}
                alt="NEVO 3D Precision Engineering"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4 border border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-white/60 block">Ultra-Rigid Chassis</span>
                  <span className="text-sm font-bold text-white">Carbon Composite Monocoque</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FF8305]/20 border border-[#FF8305] flex items-center justify-center text-[#FF8305]">
                  <ShieldCheck size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split Section: 2 Feature Cards + Telemetry Counters */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Cards: Futuristic Aerodynamic + Sustainable Materials */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Aerodynamics */}
            <div className="glass-card rounded-[24px] p-8 border border-white/15 glass-card-hover space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8305]">
                <Wind size={26} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-normal text-white">
                  Futuristic aerodynamic
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Active vortex aero channels and automated ground-effect skirts delivering a world-class 0.19 drag coefficient.
                </p>
              </div>
            </div>

            {/* Card 2: Sustainable Materials */}
            <div className="glass-card rounded-[24px] p-8 border border-white/15 glass-card-hover space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8305]">
                <Leaf size={26} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-normal text-white">
                  Sustainable materials
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Interior surfaces fashioned from upcycled plant-based polymers and 100% recycled carbon fiber weave.
                </p>
              </div>
            </div>
          </div>

          {/* Right Metrics: Fast Charging & Navigation Counters */}
          <div className="lg:col-span-5 glass-card rounded-[24px] p-8 sm:p-10 border border-white/15 space-y-8">
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Equipped with 800V dual-architecture fast charging and high-precision constellation positioning for autonomous cross-border journeys.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {/* Stat 1: 30 Minutes */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-4xl sm:text-5xl font-medium text-white tracking-tight">
                    30
                  </span>
                  <span className="text-xl sm:text-2xl font-normal text-[#FF8305]">Minutes</span>
                </div>
                <h4 className="text-base text-white/70 font-normal">Fast charging</h4>
                <p className="text-xs text-white/40 font-mono">10% to 80% SoC on 350kW DC</p>
              </div>

              {/* Stat 2: 103+ Navigation */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-4xl sm:text-5xl font-medium text-white tracking-tight">
                    103+
                  </span>
                </div>
                <h4 className="text-base text-white/70 font-normal">navigation</h4>
                <p className="text-xs text-white/40 font-mono">Real-time GNSS satellite locks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
