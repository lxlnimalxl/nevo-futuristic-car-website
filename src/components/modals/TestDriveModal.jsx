import React, { useState } from 'react';
import { X, Check, Calendar, MapPin, Compass, ArrowUpRight } from 'lucide-react';

export default function TestDriveModal({ isOpen, onClose }) {
  const [city, setCity] = useState('Los Angeles, CA');
  const [date, setDate] = useState('2026-12-05');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const studios = [
    'Los Angeles, CA — Beverly Hills Studio',
    'Munich, Germany — Maximilianstraße Studio',
    'Tokyo, Japan — Ginza Flagship',
    'London, UK — Mayfair Experience',
    'Dubai, UAE — DIFC Innovation Lounge',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-xl bg-[#0A0A0A] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF8305]/20 flex items-center justify-center text-[#FF8305]">
              <Compass size={20} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                Book a Test Drive Experience
              </h3>
              <p className="text-xs text-white/50">Command the 1,200 HP electric hypercar</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {confirmed ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <Check size={32} />
            </div>
            <h4 className="text-2xl font-heading font-bold text-white">
              Test Drive Confirmed!
            </h4>
            <p className="text-sm text-white/70 max-w-sm mx-auto font-light">
              Your session at {city} on {date} has been scheduled. A concierge will contact you with gate clearance details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Studio Location */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-white/70 flex items-center gap-2">
                <MapPin size={14} className="text-[#FF8305]" />
                <span>Select NEVO Experience Studio</span>
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#141414] border border-white/15 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF8305] transition-colors cursor-pointer"
              >
                {studios.map((s) => (
                  <option key={s} value={s} className="bg-[#0A0A0A] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-white/70 flex items-center gap-2">
                <Calendar size={14} className="text-[#FF8305]" />
                <span>Select Preferred Date</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#141414] border border-white/15 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF8305] transition-colors"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF8305] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 019-2834"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF8305] transition-colors"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 btn-primary text-base font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#FF8305]/20 mt-4"
            >
              <span>Confirm Experience Booking</span>
              <ArrowUpRight size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
