import React from 'react';
import { Globe, Building, ShieldCheck, MapPin } from 'lucide-react';

const HUBS = [
  { city: 'Дубай', country: 'ОАЭ', role: 'Штаб-квартира событий' },
  { city: 'Лондон', country: 'Великобритания', role: 'B2B & Fintech' },
  { city: 'Лимассол', country: 'Кипр', role: 'IT & Корпорации' },
  { city: 'Ереван', country: 'Армения', role: 'Regional Hub' },
  { city: 'Бали', country: 'Индонезия', role: 'Founder Masterminds' },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 bg-white text-[#0A192F] border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Eyebrow & Description */}
          <div className="max-w-sm text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-1.5 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>География Blue White</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Международный опыт в маркетинге и продажах на развивающихся и глобальных рынках.
            </p>
          </div>

          {/* Right: Hub logos / typography badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {HUBS.map((hub, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start group">
                <div className="text-base sm:text-lg font-bold text-[#0A192F] tracking-tight group-hover:text-[#E06D2B] transition-colors">
                  {hub.city}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {hub.country}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
