import React, { useState } from 'react';
import { X, Check, ArrowUpRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import HeroCarCutout from '../../assets/hero-car-cutout.png';

export default function PreOrderModal({ isOpen, onClose }) {
  const [paint, setPaint] = useState('Solar Flash Orange');
  const [powertrain, setPowertrain] = useState('Tri-Motor Hyper AWD');
  const [wheels, setWheels] = useState('21" Forged Aero Turbine');
  const [autopilot, setAutopilot] = useState(true);
  const [isReserved, setIsReserved] = useState(false);

  if (!isOpen) return null;

  const paints = [
    { name: 'Solar Flash Orange', hex: '#FF8305', price: 0 },
    { name: 'Obsidian Matte Black', hex: '#1A1A1A', price: 1500 },
    { name: 'Liquid Quicksilver', hex: '#D1D5DB', price: 2000 },
    { name: 'Nebula Cyber Cyan', hex: '#06B6D4', price: 2500 },
  ];

  const basePrice = powertrain === 'Tri-Motor Hyper AWD' ? 149000 : 119000;
  const paintPrice = paints.find((p) => p.name === paint)?.price || 0;
  const wheelPrice = wheels.includes('22"') ? 3500 : 0;
  const autopilotPrice = autopilot ? 8000 : 0;
  const totalPrice = basePrice + paintPrice + wheelPrice + autopilotPrice;

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    setIsReserved(true);
    setTimeout(() => {
      setIsReserved(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0A0A0A] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl animate-scale-in max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FF8305] animate-ping" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              NEVO Atelier Configurator
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        {isReserved ? (
          <div className="p-16 text-center space-y-5 my-auto">
            <div className="w-20 h-20 rounded-full bg-[#FF8305]/20 border border-[#FF8305] text-[#FF8305] flex items-center justify-center mx-auto animate-bounce">
              <Check size={40} />
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-heading font-bold text-white">
                Reservation Confirmed!
              </h4>
              <p className="text-base text-white/70 max-w-md mx-auto font-light">
                Your build specification has been queued in Series 1 production. Allocation Token: <span className="font-mono text-[#FF8305] font-bold">#NEVO-2026-X892</span>
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <ShieldCheck size={16} />
              <span>Refundable $1,000 Reservation Receipt Dispatched</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
            {/* Left Preview Pane */}
            <div className="lg:col-span-6 bg-[#040404] p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF8305]">
                  Live Configuration
                </span>
                <h4 className="text-2xl font-normal text-white">{powertrain}</h4>
                <p className="text-xs text-white/50 font-mono">0-100 km/h: 1.9s • Top Speed: 380 km/h</p>
              </div>

              {/* 3D Visual Render */}
              <div className="my-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FF8305]/10 rounded-full blur-3xl pointer-events-none" />
                <img
                  src={HeroCarCutout}
                  alt="NEVO Configured"
                  className="w-full max-h-56 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Price Calculation Bottom Bar */}
              <div className="space-y-1.5 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Base Price ({powertrain})</span>
                  <span className="font-mono text-white">${basePrice.toLocaleString()}</span>
                </div>
                {paintPrice > 0 && (
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Paint ({paint})</span>
                    <span className="font-mono text-white">+${paintPrice.toLocaleString()}</span>
                  </div>
                )}
                {wheelPrice > 0 && (
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Wheels ({wheels})</span>
                    <span className="font-mono text-white">+${wheelPrice.toLocaleString()}</span>
                  </div>
                )}
                {autopilotPrice > 0 && (
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Level-4 Autonomous Pack</span>
                    <span className="font-mono text-white">+${autopilotPrice.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-white/10 text-xl font-heading font-bold text-white">
                  <span>Total Build</span>
                  <span className="text-[#FF8305] font-mono">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Right Form Controls */}
            <div className="lg:col-span-6 p-8 space-y-6 overflow-y-auto">
              {/* Powertrain Choice */}
              <div className="space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Select Powertrain Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { name: 'Tri-Motor Hyper AWD', hp: '1,200 HP', price: '$149,000' },
                    { name: 'Dual-Motor Long Range', hp: '750 HP', price: '$119,000' },
                  ].map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setPowertrain(p.name)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                        powertrain === p.name
                          ? 'border-[#FF8305] bg-[#FF8305]/10 text-white'
                          : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-bold block">{p.name}</span>
                      <span className="text-[11px] text-[#FF8305] font-mono block mt-0.5">
                        {p.hp} • {p.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paint Choice */}
              <div className="space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Exterior Liquid Paint: <span className="text-white">{paint}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {paints.map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setPaint(p.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer relative ${
                        paint === p.name ? 'border-white scale-110 shadow-lg' : 'border-white/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: p.hex }}
                      title={p.name}
                    />
                  ))}
                </div>
              </div>

              {/* Wheels Choice */}
              <div className="space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Aerodynamic Wheel Set
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {['21" Forged Aero Turbine', '22" Track Carbon Monoblock (+$3,500)'].map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWheels(w)}
                      className={`p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer ${
                        wheels === w
                          ? 'border-[#FF8305] bg-[#FF8305]/10 text-white font-medium'
                          : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Autonomous Upgrade Toggle */}
              <div
                onClick={() => setAutopilot(!autopilot)}
                className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-colors ${
                  autopilot ? 'border-[#FF8305] bg-[#FF8305]/10' : 'border-white/10 bg-white/5'
                }`}
              >
                <div>
                  <h5 className="text-sm font-semibold text-white">Full L4 Autonomous Copilot</h5>
                  <p className="text-xs text-white/60 font-light mt-0.5">
                    Unsupervised highway cruise, urban steer & auto-summon (+ $8,000)
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 ${
                    autopilot ? 'bg-[#FF8305] border-[#FF8305] text-white' : 'border-white/20'
                  }`}
                >
                  {autopilot && <Check size={16} />}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleConfirmReservation}
                className="w-full py-4 btn-primary text-base font-semibold tracking-wide flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#FF8305]/20 mt-4"
              >
                <span>Reserve with $1,000 Deposit</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
