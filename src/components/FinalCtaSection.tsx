import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onApplyClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onApplyClick }) => {
  return (
    <section className="w-full py-24 sm:py-32 bg-gradient-to-b from-[#0D213F] via-[#0A192F] to-[#0D213F] text-white border-b border-[#1E3A5F]/60 relative overflow-hidden">
      
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
          <span>Одно утро для масштабирования бизнеса</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
          Высокий чек требует сильной системы продаж
        </h2>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          Посмотрите на свой маркетинг вместе с экспертом международного агентства. Разберите ограничения роста. Познакомьтесь с предпринимателями, которые принимают решения и развивают бизнес.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300 mb-10 font-medium">
          <span className="text-white font-bold">20 гостей</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-white font-bold">Три персональных разбора</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>Дубай, Ноябрь</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-amber-400 font-semibold">от €85</span>
        </div>

        <div>
          <button
            onClick={onApplyClick}
            type="button"
            className="inline-flex items-center gap-3 px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-xl hover:shadow-[#E06D2B]/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Подать заявку на участие</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
};
