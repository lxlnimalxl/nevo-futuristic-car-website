import React, { useState } from 'react';
import HeroCarCutout from '../assets/hero-car-cutout.png';
import HeroCarFull from '../assets/hero-car-full.jpg';
import {
  Wifi,
  BatteryCharging,
  Zap,
  Cpu,
  ArrowUpRight,
  Sparkles,
  Gauge,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export default function Hero({ onOpenPreOrder, onOpenSpecSheet }) {
  const [driveMode, setDriveMode] = useState('Track');
  const [carColor, setCarColor] = useState('obsidian');

  const modes = [
    { id: 'Eco', range: '850 km', accel: '3.4s', pwr: '65%' },
    { id: 'Sport', range: '780 km', accel: '2.4s', pwr: '80%' },
    { id: 'Track', range: '710 km', accel: '1.9s', pwr: '100%' },
  ];

  const currentMode = modes.find((m) => m.id === driveMode) || modes[2];

  return (
    <section id="home" className="relative min-h-[1480px] pt-32 pb-24 overflow-hidden bg-[#040404]">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] glow-orb-orange" />
      <div className="absolute top-[600px] left-[-150px] w-[550px] h-[550px] glow-orb-orange" />

      {/* Hero Container */}
      <div className="max-w-[1520px] mx-auto px-6 relative z-10">
        {/* Giant Futuristic Headline with Gradient & 3D Layering */}
        <div className="relative text-center select-none pt-6">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[230px] font-extrabold italic tracking-tighter uppercase leading-none bg-gradient-to-r from-white/10 via-[#FFE0C0] to-white/10 bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(255,131,5,0.15)] opacity-90 transition-all duration-700">
            futuristic
          </h1>

          {/* Sub-badge over text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/20 text-xs font-mono uppercase tracking-widest text-[#FF8305] shadow-lg">
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Autonomous Neural Hypercar — Gen IV</span>
          </div>
        </div>

        {/* 3D Car Visual Layer */}
        <div className="relative -mt-24 sm:-mt-36 md:-mt-52 lg:-mt-72 flex justify-center z-20">
          <div className="relative w-full max-w-[1380px] group">
            {/* Ground reflection glow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#FF8305]/20 rounded-full blur-3xl pointer-events-none" />

            {/* High-res 3D Car Cutout */}
            <img
              src={HeroCarCutout}
              alt="NEVO 3D Futuristic Hypercar"
              className="w-full h-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.8)] transform hover:scale-[1.01] transition-transform duration-700 pointer-events-none select-none"
            />

            {/* Floating Drive Mode Switcher */}
            <div className="absolute bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 border border-white/20 shadow-2xl backdrop-blur-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50 pl-2 hidden sm:inline">
                Drive Dynamics:
              </span>
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setDriveMode(m.id)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    driveMode === m.id
                      ? 'bg-[#FF8305] text-white shadow-lg shadow-[#FF8305]/40'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {m.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats & Capability Bar (Figma Group 1261154401 at y:1248) */}
        <div className="mt-16 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-20">
          {/* Left Column: Quick Metric Badges (Group 1261154398) */}
          <div className="md:col-span-3 space-y-6">
            {/* 5G Smart Connectivity */}
            <div className="glass-card rounded-[20px] p-6 border border-white/15 glass-card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="font-brand text-4xl sm:text-5xl font-medium text-white tracking-tight">
                  5G
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF8305]">
                  <Wifi size={22} />
                </div>
              </div>
              <h4 className="text-base font-normal text-white/70">Smart Connectivity</h4>
              <p className="text-xs text-white/40 font-mono mt-1">Satellite uplink & OTA sync</p>
            </div>

            {/* 30k Lasting Battery */}
            <div className="glass-card rounded-[20px] p-6 border border-white/15 glass-card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="font-brand text-4xl sm:text-5xl font-medium text-white tracking-tight">
                  30k
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF8305]">
                  <BatteryCharging size={22} />
                </div>
              </div>
              <h4 className="text-base font-normal text-white/70">lasting Battery</h4>
              <p className="text-xs text-white/40 font-mono mt-1">Graphene solid-state cell array</p>
            </div>
          </div>

          {/* Middle Column: Glass Card Sliders (Section 2, Rectangle 30) */}
          <div className="md:col-span-5">
            <div className="glass-card rounded-[24px] p-8 sm:p-9 border border-white/20 relative shadow-2xl space-y-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF8305] animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                    Live Telemetry Systems
                  </span>
                </div>
                <span className="text-xs font-mono text-[#FF8305] font-semibold">
                  MODE: {currentMode.id.toUpperCase()}
                </span>
              </div>

              {/* Slider 1: Electric Powertrain */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2.5">
                    <Zap size={18} className="text-[#FF8305]" />
                    <span className="text-white/90 font-medium">Electric Powertrain</span>
                  </div>
                  <span className="text-white font-mono font-bold">{currentMode.pwr}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-[#FF8305] rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(255,131,5,0.6)]"
                    style={{ width: currentMode.pwr }}
                  />
                </div>
              </div>

              {/* Slider 2: AI Autopilot */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2.5">
                    <Cpu size={18} className="text-[#FF8305]" />
                    <span className="text-white/90 font-medium">AI Autopilot</span>
                  </div>
                  <span className="text-white font-mono font-bold">80%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-[#FF8305] rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(255,131,5,0.6)]"
                    style={{ width: '80%' }}
                  />
                </div>
              </div>

              {/* Dynamic specs readout */}
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs text-white/60 font-mono">
                <div>
                  <span className="text-white/40 block">0-100 KM/H</span>
                  <span className="text-lg font-bold text-white font-sans">{currentMode.accel}</span>
                </div>
                <div>
                  <span className="text-white/40 block">EST. RANGE</span>
                  <span className="text-lg font-bold text-white font-sans">{currentMode.range}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Powered Driving & Pre-Order CTA */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-4xl sm:text-5xl font-normal text-white leading-tight">
                AI powered driving
              </h3>
              <p className="text-base text-white/60 leading-relaxed font-light">
                Autonomous intelligence delivering next-generation velocity, safety, and adaptive performance across all road conditions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPreOrder}
                className="w-full sm:w-auto px-8 py-4 btn-primary text-base font-semibold tracking-wide flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#FF8305]/20"
              >
                <span>Pre-Order Now</span>
                <ArrowUpRight size={20} />
              </button>

              <button
                onClick={onOpenSpecSheet}
                className="w-full sm:w-auto px-6 py-4 btn-outline text-sm font-medium tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Full Specs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
