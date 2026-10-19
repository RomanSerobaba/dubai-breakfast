import React from 'react';
import { Sparkles, Target, Compass, Award } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

export const GuidingSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <AnimatedGridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Суть формата и задачи</span>
          </div>
        </div>

        {/* Big centered statement matching reference typography */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F] leading-tight mb-6">
            Разберитесь, что ограничивает ваши продажи: качество аудитории, оффер, каналы привлечения или работа до сделки
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Получите профессиональный взгляд на свою систему маркетинга и продаж и познакомьтесь с предпринимателями, которые решают задачи сопоставимого масштаба.
          </p>
        </div>

        {/* 3-Column Bento Grid matching reference with generous proportions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Big Metric & Focus */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#E06D2B]" />
                <span>Закрытый круг</span>
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#0A192F] font-mono tracking-tight mb-4">
                20 гостей
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Только собственники и руководители действующих компаний в недвижимости, B2B, консалтинге и сложных услугах.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F1ECE1] flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Предварительный отбор</span>
              <span className="font-semibold text-[#0A192F]">Ручная модерация</span>
            </div>
          </div>

          {/* Card 2: Visual Card with Media Placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-xs flex flex-col">
            <MediaPlaceholder
              type="photo"
              aspectRatio="auto"
              imageUrl="/images/dubai_roundtable_mastermind.svg"
              title="Стратегический мастермайнд"
              description="Разбор бизнес-задач за круглым столом в приватном лаундже Дубая"
              recommendedSize="1200 × 800 px"
              overlayBadge="Круглый стол в Дубае"
              className="h-full min-h-[360px]"
            >
              <div className="p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Мастермайнд
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    3 персональных разбора бизнеса
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Глубокий анализ узких мест маркетинга
                  </div>
                </div>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Card 3: Tinted Agency Card */}
          <div className="p-8 sm:p-10 bg-[#0D213F] text-white rounded-3xl border border-[#1E3A5F] flex flex-col justify-between shadow-md">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-bold mb-4 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#E06D2B]" />
                <span>Международный опыт</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                Blue White Agency & Алина Лисина
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                20 лет практики в B2B, девелопменте и премиальных сервисах. Работа с клиентами в ОАЭ, Великобритании, Европе и США.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E3A5F] flex items-center justify-between text-xs text-slate-400">
              <span>Серия бизнес-завтраков:</span>
              <span className="font-bold text-white font-mono text-sm">18-я встреча серии</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
