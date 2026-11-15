import React from 'react';
import { X, Zap, Gauge, Shield, Cpu, Wind, Battery, Layers } from 'lucide-react';

export default function SpecSheetModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const specs = [
    { label: 'Acceleration 0-100 km/h', value: '1.9 seconds', icon: <Gauge size={16} /> },
    { label: 'Top Track Velocity', value: '380 km/h (236 mph)', icon: <Zap size={16} /> },
    { label: 'Peak Powertrain Output', value: '1,200 Horsepower (Tri-Motor AWD)', icon: <Cpu size={16} /> },
    { label: 'EPA Certified Range', value: '800 km (497 miles)', icon: <Battery size={16} /> },
    { label: 'Drag Coefficient (Cd)', value: '0.19 with active ground aero', icon: <Wind size={16} /> },
    { label: 'Fast Charging Rate', value: '10% to 80% in 18 mins (350kW DC)', icon: <Zap size={16} /> },
    { label: 'Chassis Architecture', value: 'Carbon composite monocoque', icon: <Layers size={16} /> },
    { label: 'Autonomous Sensor Suite', value: '12 HD Cameras, Dual Solid-State LiDAR', icon: <Shield size={16} /> },
    { label: 'Suspension System', value: 'Dynamic 4-corner adaptive active air', icon: <Layers size={16} /> },
    { label: 'Curb Weight', value: '1,980 kg (Optimized mass distribution)', icon: <Gauge size={16} /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0A0A0A] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl animate-scale-in max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF8305] block">
              Official Technical Dossier
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
              NEVO Hypercar Specifications
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Specs Table List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-3">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#FF8305] shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-sm font-mono font-bold text-white text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#040404] flex items-center justify-between text-xs text-white/50 font-mono">
          <span>SPECIFICATION REVISION 4.2 • CERTIFIED FIA & DOT</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full btn-outline text-white text-xs cursor-pointer"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
}
