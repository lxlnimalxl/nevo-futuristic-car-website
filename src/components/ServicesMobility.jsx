import React from 'react';
import ServiceCar from '../assets/service-car.jpg';
import { Rocket, Zap, ChevronsRight, Shield, Cloud, Radio, ArrowUpRight } from 'lucide-react';

export default function ServicesMobility({ onOpenTestDrive, onOpenPreOrder }) {
  return (
    <section id="mobility" className="py-32 bg-[#040404] relative overflow-hidden">
      {/* Edge glows */}
      <div className="absolute top-1/3 right-[-150px] w-[650px] h-[650px] glow-orb-orange" />
      <div className="absolute bottom-10 left-[-150px] w-[500px] h-[500px] glow-orb-orange" />

      <div className="max-w-[1520px] mx-auto px-6 relative z-10">
        {/* Section Heading & Cloud Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-sm font-mono uppercase tracking-widest text-[#FF8305] block">
              Autonomous Intelligence
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05]">
              Future Mobility Insights<br />
              <span className="text-white/80">Best car</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 border-l-2 border-[#FF8305] pl-6">
            <h3 className="text-2xl font-normal text-white">your devices & cloud</h3>
            <p className="text-base text-white/60 font-light leading-relaxed">
              Continuous neural telemetry synchronizes seamlessly with your mobile devices and personal ecosystem with zero-latency cloud handover.
            </p>
          </div>
        </div>

        {/* Showcase Grid: 3D Visual on Left, Metrics & AI on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Car Perspective Image */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[690px] rounded-[36px] overflow-hidden border border-white/20 glass-card shadow-2xl group">
              <img
                src={ServiceCar}
                alt="NEVO 3D Autonomous Cockpit & Engineering"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/90 via-transparent to-transparent" />

              {/* In-image Telemetry Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between glass-card rounded-2xl p-4 border border-white/20 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <span className="text-xs font-mono text-white/50 block">NEURAL ENGINE</span>
                    <span className="text-sm font-bold text-white">Version 4.2 Supervised</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF8305]">
                  <Radio size={16} />
                  <span>Sub-millimeter LiDAR Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI-Powered Driving & Spec Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl font-normal text-white">
                AI-powered driving
              </h3>
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Supervised Level-4 autonomous highway driving powered by twelve HD surround cameras, solid-state dual LiDAR, and redundant neural inference computers capable of 1,400 TOPS.
              </p>
            </div>

            {/* 2 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2">
              {/* Card 1: 360° Safety Sensors */}
              <div className="sm:col-span-7 glass-card rounded-[24px] p-6 border border-white/15 glass-card-hover space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-brand text-4xl sm:text-5xl font-medium text-white tracking-tight">
                      360°
                    </span>
                    <ChevronsRight size={20} className="text-[#FF8305]" />
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF8305]">
                    <Rocket size={22} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-normal text-white">Next Gen Safety Sensors</h4>
                  <p className="text-xs text-white/50 font-mono mt-1">Multi-spectrum ultrasonic radar</p>
                </div>
              </div>

              {/* Card 2: 800 km Smart Connectivity */}
              <div className="sm:col-span-5 glass-card rounded-[24px] p-6 border border-white/15 glass-card-hover space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-brand text-3xl sm:text-4xl font-medium text-white tracking-tight">
                    800 km
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF8305]">
                    <Zap size={22} />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-normal text-white">Smart Connectivity</h4>
                  <p className="text-xs text-white/50 font-mono mt-1">Certified WLTP range</p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10">
              <button
                onClick={onOpenTestDrive}
                className="px-8 py-4 btn-primary text-base font-semibold tracking-wide flex items-center gap-3 cursor-pointer shadow-xl shadow-[#FF8305]/20"
              >
                <span>Book Test Drive</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onOpenPreOrder}
                className="px-6 py-4 btn-outline text-base font-medium text-white tracking-wide cursor-pointer"
              >
                Configure Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
