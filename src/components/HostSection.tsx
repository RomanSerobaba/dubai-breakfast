import React from 'react';
import { Award, Globe, Briefcase, CheckCircle2, Video } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

const HUBS = [
  { city: 'Дубай', country: 'ОАЭ', role: 'Штаб-квартира мероприятий' },
  { city: 'Лондон', country: 'Великобритания', role: 'B2B & Fintech' },
  { city: 'Лимассол', country: 'Кипр', role: 'IT & Корпорации' },
  { city: 'Ереван', country: 'Армения', role: 'Региональный хаб' },
  { city: 'Бали', country: 'Индонезия', role: 'Founder Retreats' },
];

export const HostSection: React.FC = () => {
  return (
    <section id="speaker" className="w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Ведущая и организатор</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
            Международная практика маркетинга — в работе над вашей задачей
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Кто проводит: Алина Лисина, агентство Blue White и доказательство 20-летней экспертизы в продажах на высокий чек.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Portrait Card */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E5E0D5] relative group bg-[#0A192F]">
              <div className="aspect-[3/4] w-full relative overflow-hidden">
                <img
                  src="/assets/aistudio/speaker-alina.jpg"
                  alt="Алина Лисина"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-black/10 pointer-events-none" />
                
                {/* Badge top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[#0A192F] font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E06D2B]" />
                    Ведущая · Blue White
                  </span>
                </div>

                {/* Caption bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-white">
                  <h3 className="text-2xl font-bold tracking-tight mb-1">
                    Алина Лисина
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-snug">
                    Основатель международного агентства Blue White · 20 лет практики
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio, Methodology & Track Record */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              <p>
                <strong className="text-[#0A192F] font-semibold">Алина Лисина</strong> — предприниматель и маркетолог с 20-летним опытом. Основатель международного агентства <strong className="text-[#0A192F] font-semibold">Blue White</strong>, работающего с компаниями в ОАЭ, Великобритании, Европе и США.
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                Специализация агентства — построение управляемых систем маркетинга и продаж для бизнесов с длинным циклом сделки и высоким средним чеком: от девелоперских проектов и брокерских команд в Дубае до B2B-технологий и международных консалтинговых практик.
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                На бизнес-завтраке Алина не читает абстрактные лекции. Вся встреча построена вокруг прикладной методологии Blue White: разбор барьеров конверсии, выстраивание системного позиционирования и точечная настройка воронки под состоятельных клиентов.
              </p>
            </div>

            {/* 4 Track Record Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Опыт на рынке
                </div>
                <div className="text-3xl font-extrabold font-mono text-[#0A192F] mb-1">
                  20 лет
                </div>
                <div className="text-xs text-slate-600">
                  Непрерывной практики в маркетинге и продажах сложных услуг
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Международный масштаб
                </div>
                <div className="text-3xl font-extrabold font-mono text-[#0A192F] mb-1">
                  Global
                </div>
                <div className="text-xs text-slate-600">
                  Клиенты в Дубае, Лондоне, Лимассоле, США и ЕС
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Серия завтраков
                </div>
                <div className="text-3xl font-extrabold font-mono text-[#0A192F] mb-1">
                  18-я встреча
                </div>
                <div className="text-xs text-slate-600">
                  Проверенный формат закрытых мастермайндов
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Фокус встречи
                </div>
                <div className="text-3xl font-extrabold font-mono text-[#0A192F] mb-1">
                  100% польза
                </div>
                <div className="text-xs text-slate-600">
                  Конкретные гипотезы роста без «воды» и мотивационных речей
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Full-width Quote block */}
        <div className="p-8 sm:p-10 bg-[#F5F1E8] rounded-3xl border border-[#E5E0D5] text-base sm:text-lg text-slate-700 leading-relaxed italic shadow-sm">
          «В сегменте высокого чека классические маркетинговые шаблоны перестают работать. Клиент не покупает с рекламы в лоб — ему нужно доказать экспертизу, снять скрытые риски и обосновать стоимость до того, как начнётся торг. Именно эту систему мы и выстраиваем».
          <div className="mt-4 text-[#0A192F] font-semibold not-italic text-sm sm:text-base font-mono">
            — Алина Лисина
          </div>
        </div>

      </div>
    </section>
  );
};
