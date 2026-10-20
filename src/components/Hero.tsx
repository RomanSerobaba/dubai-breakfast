import React from 'react';
import { ArrowUpRight, Video, User, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onApplyParticipant: () => void;
  onApplyBreakdown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyParticipant, onApplyBreakdown }) => {
  return (
    <section className="relative w-full min-h-[92vh] bg-[#0A192F] text-white overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 border-b border-[#1E3A5F]/60">
      
      {/* Background full-width media: Uploaded workspace background with deep darkening overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/7M304962_resized_bf08fdd8.jpg"
          alt="Business Breakfast Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transform transition-transform duration-1000"
        />

        {/* Ambient radial lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[#0A192F]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/50 to-[#0A192F]/30" />

        {/* Media visual badge in top corner aligned with menu */}
        <div className="absolute top-24 left-0 right-0 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-end">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-slate-300 font-mono shadow-sm pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#E06D2B] animate-pulse" />
              <span className="hidden sm:inline">Фон: атмосфера бизнес-завтрака</span>
              <span className="font-semibold text-white sm:hidden">Фото зала</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center my-auto">
        
        {/* Kicker Header matching reference style */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
          <span className="w-10 sm:w-16 h-px bg-[#E06D2B]" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] text-[#E06D2B] font-mono">
            HIGH-TICKET GROWTH BREAKFAST DUBAI
          </span>
          <span className="w-10 sm:w-16 h-px bg-[#E06D2B]" />
        </div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium mb-8">
          Blue White Networking — основано Алиной Лисиной
        </div>

        {/* Big Primary Headline (Dual color like reference: White + Orange) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] tracking-tight text-white mb-6 leading-[1.15] text-balance max-w-5xl mx-auto">
          Как системно привлекать клиентов{' '}
          <span className="text-[#E06D2B]">и продавать на высокий чек?</span>
        </h1>

        {/* Description Copy */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-light text-balance">
          Закрытый бизнес-завтрак и стратегический мастермайнд для собственников и топ-менеджеров в недвижимости, B2B и консалтинге. Разберите барьеры конверсии и масштабирования.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={onApplyParticipant}
            type="button"
            className="flex items-center gap-2.5 px-9 sm:px-11 py-4.5 text-sm sm:text-base font-semibold text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-xl hover:shadow-[#E06D2B]/40 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Подать заявку на участие</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <button
            onClick={onApplyBreakdown}
            type="button"
            className="flex items-center gap-2 px-7 sm:px-9 py-4.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap backdrop-blur-md hover:-translate-y-0.5"
          >
            <span>Выбрать участие с разбором</span>
            <ArrowUpRight className="w-4 h-4 text-slate-300" />
          </button>
        </div>

        {/* Bottom metadata line matching reference style */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium pt-4 border-t border-white/10 w-full max-w-3xl">
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            20 мест
          </span>
          <span>·</span>
          <span>Предварительный отбор</span>
          <span>·</span>
          <span>Ноябрь 2026</span>
          <span>·</span>
          <span className="text-white font-semibold">Downtown / DIFC, Dubai</span>
        </div>

      </div>

    </section>
  );
};
