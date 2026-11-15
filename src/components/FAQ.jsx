import React, { useState } from 'react';
import { ChevronRight, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How long does it take to fully charge the car?',
      a: 'With our 800V DC ultra-fast charging architecture, NEVO charges from 10% to 80% in just 18 minutes on a 350kW station. On a dedicated home 22kW AC charger, a complete overnight charge takes approximately 5.5 hours.',
    },
    {
      q: 'What is the maximum driving range?',
      a: 'The Long-Range Tri-Motor edition achieves an EPA-rated range of 800 kilometers (497 miles) on a single charge, facilitated by our active aerodynamic skirts and record 0.19 Cd drag coefficient.',
    },
    {
      q: 'Is the car fully autonomous?',
      a: 'NEVO comes pre-equipped with hardware for Level-4 unsupervised autonomy. Supported by dual solid-state LiDAR, twelve surround cameras, and 1,400 TOPS neural compute platforms, it handles highway cruising and urban navigation effortlessly.',
    },
    {
      q: 'What kind of warranty do you offer?',
      a: 'We provide an industry-leading 8-year / 200,000 km comprehensive warranty covering the graphene-enhanced solid-state battery array and dual electric powertrains with guaranteed 90% retention.',
    },
    {
      q: 'Is the car environmentally friendly?',
      a: 'Yes. NEVO is manufactured in zero-carbon micro-factories using 100% renewable energy. The interior features vegan biopolymers, upcycled marine fibers, and closed-loop recycled aluminum alloys.',
    },
    {
      q: 'Can I customize the design or color of the car?',
      a: 'Our bespoke Atelier Studio offers personalized exterior hyper-metallic shades, forged aerodynamic turbine wheels, active illuminated badging, and tailored vegan cabin textures.',
    },
    {
      q: 'Where can I book a test drive?',
      a: 'You can reserve a dynamic test drive online at any NEVO Experience Center globally, or request a complimentary white-glove doorstep delivery trial right from our portal.',
    },
    {
      q: 'How does over-the-air (OTA) updating work?',
      a: 'NEVO connects via dual 5G satellite networks to download monthly encrypted firmware updates that continually optimize motor acceleration, autopilot reflexes, and thermal efficiency.',
    },
  ];

  return (
    <section id="faq" className="py-32 bg-[#040404] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-orb-orange" />

      <div className="max-w-[1520px] mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/20 text-xs font-mono uppercase tracking-widest text-[#FF8305]">
            <HelpCircle size={14} />
            <span>Questions & Intelligence</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05]">
            Future Mobility Insights
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto">
            Everything you need to know about reserving, charging, and commanding the NEVO electric hypercar.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card rounded-[22px] transition-all duration-300 border overflow-hidden ${
                  isOpen ? 'border-[#FF8305]/50 bg-white/[0.08]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-normal text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full glass-card flex items-center justify-center shrink-0 text-white transition-transform duration-300 ${
                      isOpen ? 'rotate-90 bg-[#FF8305] text-white border-transparent' : 'text-white/60'
                    }`}
                  >
                    <ChevronRight size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 pb-7 text-sm sm:text-base text-white/70 font-light leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
