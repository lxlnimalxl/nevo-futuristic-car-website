import React from 'react';
import { Crown, Eye, BatteryCharging, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChoose() {
  const cards = [
    {
      id: 1,
      icon: <Crown size={38} className="text-[#FF8305]" />,
      title: 'Futuristic dynamic design Smarter',
      description:
        'Adaptive neural suspension dynamically adjusting damping rates 1,000 times per second, ensuring effortless stability at hypersonic speeds.',
      tag: 'Adaptive Chassis',
    },
    {
      id: 2,
      icon: <Eye size={38} className="text-[#FF8305]" />,
      title: 'Sustainable materials aerodynamic design',
      description:
        'Bio-circular lightweight manufacturing reducing lifetime lifecycle carbon emissions by 64% compared to traditional luxury supercars.',
      tag: 'Zero-Emission DNA',
    },
    {
      id: 3,
      icon: <BatteryCharging size={38} className="text-[#FF8305]" />,
      title: 'Fast charging under 30 minutes',
      description:
        'Ultra-high voltage thermal immersion architecture enabling 10% to 80% rapid replenishment in under 30 minutes without battery aging.',
      tag: '800V Architecture',
    },
  ];

  return (
    <section id="why-choose" className="py-32 bg-[#040404] relative overflow-hidden">
      {/* Edge glows */}
      <div className="absolute top-1/2 left-[-180px] w-[600px] h-[600px] glow-orb-orange" />
      <div className="absolute bottom-10 right-[-150px] w-[500px] h-[500px] glow-orb-orange" />

      <div className="max-w-[1520px] mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/20 text-xs font-mono uppercase tracking-widest text-[#FF8305]">
            <Sparkles size={14} />
            <span>Next-Level Mobility Paradigm</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08]">
            Driving Made Smarter,<br />
            <span className="text-[#FF8305] italic font-serif">Safer, Greener</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto pt-2">
            Engineered from clean-sheet physics to provide uncompromising safety, limitless range, and an intoxicating electric driving sensation.
          </p>
        </div>

        {/* 3 Large Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="glass-card rounded-[28px] p-10 sm:p-12 relative flex flex-col justify-between border border-white/15 glass-card-hover group min-h-[500px]"
            >
              <div className="space-y-8">
                {/* Large Icon Container */}
                <div className="w-24 h-24 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FF8305]/50 group-hover:bg-[#FF8305]/10 transition-all duration-500 shadow-xl">
                  {card.icon}
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF8305] block">
                    {card.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white group-hover:text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-base text-white/60 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Pill */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
                <span>VERIFIED TELEMETRY</span>
                <div className="flex items-center gap-1.5 text-[#FF8305]">
                  <CheckCircle2 size={15} />
                  <span>ISO 26262 ASIL-D</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
