import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

interface FinalCtaSectionProps {
  onApplyClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onApplyClick }) => {
  return (
    <section className="w-full py-24 sm:py-32 text-white border-b border-[#1E3A5F]/60 relative overflow-hidden">
      
      {/* Background Photo with balanced overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/high-ticket-bg.jpg"
          alt="Бизнес-мастеркласс по сильной системе продаж"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-90 scale-100"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.2),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[#0A192F]/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-[#0A192F]/80" />
      </div>

      <AnimatedGridLines className="z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
          <span>Одно утро для масштабирования бизнеса</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
          Высокий чек требует сильной системы продаж
        </h2>

        <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          Посмотрите на свой маркетинг вместе с экспертом международного агентства. Разберите ограничения роста. Познакомьтесь с предпринимателями, которые принимают решения и развивают бизнес.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-200 mb-10 font-medium">
          <span className="text-white font-bold">20 гостей</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-white font-bold">Три персональных разбора</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>Дубай, Ноябрь</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-amber-400 font-semibold">от €85</span>
        </div>

        <div>
          <button
            onClick={onApplyClick}
            type="button"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 py-3.5 sm:py-5 text-sm sm:text-lg font-bold text-white animated-gradient-button rounded-full cursor-pointer shadow-xl hover:shadow-[#E06D2B]/30 max-w-full text-center"
          >
            <span>Подать заявку на участие</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </button>
        </div>
      </div>

    </section>
  );
};
