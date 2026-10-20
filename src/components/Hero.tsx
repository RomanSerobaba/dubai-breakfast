import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

interface HeroProps {
  onApplyParticipant: () => void;
  onApplyBreakdown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyParticipant, onApplyBreakdown }) => {
  return (
    <section className="relative w-full min-h-[92vh] bg-[#071324] text-white overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 border-b border-[#1E3A5F]/60">
      <AnimatedGridLines className="z-10" />
      
      {/* Real Masterclass Event Photo Background - clearly visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Real Masterclass Event Photo */}
        <img
          src="/assets/aistudio/hero-presentation-bg.jpg"
          alt="Бизнес-завтрак мастермайнд"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center sm:object-[center_top] brightness-[0.85] contrast-[1.05]"
        />

        {/* Light single darkening tint so the photo is clearly visible without being obscured */}
        <div className="absolute inset-0 bg-[#071324]/30" />

        {/* Soft edge gradients: top for header readability, bottom for section blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071324]/70 via-transparent to-[#071324]/85" />

        {/* Subtle warm accent glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.15),transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center my-auto">
        
        {/* Kicker Header matching reference style */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <span className="w-10 sm:w-16 h-px bg-[#E06D2B]" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] animated-gradient-text font-mono">
            HIGH-TICKET GROWTH BREAKFAST DUBAI
          </span>
          <span className="w-10 sm:w-16 h-px bg-[#E06D2B]" />
        </div>

        {/* Big Primary Headline (Dual color like reference: White + Orange) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] tracking-tight text-white mb-6 leading-[1.15] text-balance max-w-5xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Как системно привлекать клиентов{' '}
          <span className="animated-gradient-text">и продавать на высокий чек?</span>
        </h1>

        {/* Description Copy */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-200 max-w-3xl leading-relaxed mb-10 font-normal text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Закрытый бизнес-завтрак и стратегический мастермайнд для собственников и топ-менеджеров в недвижимости, B2B и консалтинге. Разберите барьеры конверсии и масштабирования.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={onApplyParticipant}
            type="button"
            className="flex items-center gap-2.5 px-9 sm:px-11 py-4.5 text-sm sm:text-base font-semibold text-white animated-gradient-button rounded-full cursor-pointer shadow-xl hover:shadow-[#E06D2B]/40 whitespace-nowrap"
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
        </div>

      </div>

    </section>
  );
};
