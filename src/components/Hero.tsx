import React from 'react';
import { ArrowUpRight, Video, User, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onApplyParticipant: () => void;
  onApplyBreakdown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyParticipant, onApplyBreakdown }) => {
  return (
    <section className="relative w-full min-h-[92vh] bg-[#0A192F] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-8 border-b border-[#1E3A5F]/60">
      
      {/* Background full-width media: Dubai Sunrise Skyline with gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_dubai_skyline.svg"
          alt="Dubai Skyline Sunrise Panorama"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-bottom opacity-70"
        />

        {/* Ambient radial lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/60" />

        {/* Media visual badge in top corner aligned with menu */}
        <div className="absolute top-24 left-0 right-0 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-end">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-slate-300 font-mono shadow-sm pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#E06D2B] animate-pulse" />
              <span className="hidden sm:inline">Фон: панорама Дубая на рассвете (1920 × 1080)</span>
              <span className="font-semibold text-white sm:hidden">1920 × 1080</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Width perfectly matching menu */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* Kicker Header: HIGH-TICKET GROWTH BREAKFAST DUBAI matching reference style */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <span className="w-8 sm:w-12 h-px bg-[#E06D2B]" />
          <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.24em] text-[#E06D2B] font-mono">
            HIGH-TICKET GROWTH BREAKFAST DUBAI
          </span>
          <span className="w-8 sm:w-12 h-px bg-[#E06D2B]" />
        </div>

        {/* Eyebrow Details Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 uppercase tracking-widest mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E06D2B] animate-ping" />
          <span>Дубай · Ноябрь · Утренний формат (10:00 – 13:00)</span>
          <span className="text-[#E06D2B] font-bold">· 20 мест · от €85</span>
        </div>

        {/* Big Primary Headline: "Как системно привлекать клиентов и продавать на высокий чек" */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-black tracking-tight text-white mb-6 sm:mb-8 leading-[1.06] max-w-5xl text-balance font-sans">
          Как системно привлекать клиентов и продавать на высокий чек
        </h1>

        {/* Description Copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
          Закрытый бизнес-завтрак и стратегический мастермайнд для собственников и руководителей компаний в недвижимости, B2B, консалтинге и других нишах с высоким чеком. Разберитесь, что ограничивает ваши продажи: качество аудитории, оффер, каналы привлечения или работа с клиентом до сделки.
        </p>

        {/* Host Callout Card */}
        <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 max-w-2xl mb-10 text-xs sm:text-sm text-slate-300">
          <div className="w-11 h-11 rounded-xl bg-[#E06D2B]/20 border border-[#E06D2B]/30 flex items-center justify-center text-[#E06D2B] shrink-0 font-bold font-mono text-base">
            АЛ
          </div>
          <div>
            <div className="text-white font-bold text-sm flex items-center gap-2">
              <span>Ведущая — Алина Лисина</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/30">
                20 лет B2B
              </span>
            </div>
            <div className="text-slate-300 text-xs mt-0.5 leading-relaxed">
              Предприниматель, маркетолог с 20-летним опытом, основатель международного агентства Blue White, работающего с клиентами по всему миру.
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <button
            onClick={onApplyParticipant}
            type="button"
            className="flex items-center gap-2.5 px-8 sm:px-10 py-4 text-sm sm:text-base font-bold text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-lg hover:shadow-[#E06D2B]/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Подать заявку на участие</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <button
            onClick={onApplyBreakdown}
            type="button"
            className="flex items-center gap-2 px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap backdrop-blur-md hover:-translate-y-0.5"
          >
            <span>Выбрать участие с разбором (1 место)</span>
            <ArrowUpRight className="w-4 h-4 text-slate-300" />
          </button>
        </div>

      </div>

      {/* Bottom Strip: Metadata Parameters matching menu width */}
      <div className="relative z-10 w-full border-t border-white/10 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-white font-bold">20 гостей</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Предварительный отбор участников</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-white font-bold">3 персональных разбора</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-amber-400 font-semibold">Раннее бронирование</span>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Downtown / DIFC, Dubai · Завтрак включён
          </div>
        </div>
      </div>

    </section>
  );
};
