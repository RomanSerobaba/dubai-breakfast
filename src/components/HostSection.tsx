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
    <section id="speaker" className="w-full py-24 sm:py-32 bg-[#0A192F] text-white border-b border-[#1E3A5F]/60 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Ведущая и организатор</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Международная практика маркетинга — в работе над вашей задачей
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Кто проводит: Алина Лисина, агентство Blue White и доказательство 20-летней экспертизы в продажах на высокий чек.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          
          {/* Left Column: Portrait & Video Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Portrait Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#1E3A5F]">
              <MediaPlaceholder
                type="portrait"
                aspectRatio="3:4"
                imageUrl="/images/host_alina_lisina.svg"
                title="Алина Лисина"
                description="Предприниматель, маркетолог с 20-летним опытом, основатель международного агентства Blue White"
                recommendedSize="800 × 1000 px"
                overlayBadge="Ведущая · Blue White"
                className="w-full min-h-[460px]"
              />
            </div>

            {/* Video Intro Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#1E3A5F]">
              <MediaPlaceholder
                type="video"
                aspectRatio="16:9"
                title="Видео-приветствие Алины Лисиной"
                description="Короткое 60-секундное видеообращение к участникам завтрака в Дубае"
                recommendedSize="1920 × 1080 px (Горизонтальное видео)"
                className="w-full min-h-[160px]"
              />
            </div>

          </div>

          {/* Right Column: Bio, Methodology & Track Record */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-5 text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              <p>
                <strong className="text-white font-semibold">Алина Лисина</strong> — предприниматель и маркетолог с 20-летним опытом. Основатель международного агентства <strong className="text-white font-semibold">Blue White</strong>, работающего с компаниями в ОАЭ, Великобритании, Европе и США.
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                Специализация агентства — построение управляемых систем маркетинга и продаж для бизнесов с длинным циклом сделки и высоким средним чеком: от девелоперских проектов и брокерских команд в Дубае до B2B-технологий и международных консалтинговых практик.
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                На бизнес-завтраке Алина не читает абстрактные лекции. Вся встреча построена вокруг прикладной методологии Blue White: разбор барьеров конверсии, выстраивание системного позиционирования и точечная настройка воронки под состоятельных клиентов.
              </p>
            </div>

            {/* 4 Track Record Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-6 bg-[#0D213F] rounded-2xl border border-[#1E3A5F] flex flex-col justify-between">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Опыт на рынке
                </div>
                <div className="text-3xl font-extrabold font-mono text-white mb-1">
                  20 лет
                </div>
                <div className="text-xs text-slate-300">
                  Непрерывной практики в маркетинге и продажах сложных услуг
                </div>
              </div>

              <div className="p-6 bg-[#0D213F] rounded-2xl border border-[#1E3A5F] flex flex-col justify-between">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Международный масштаб
                </div>
                <div className="text-3xl font-extrabold font-mono text-white mb-1">
                  Global
                </div>
                <div className="text-xs text-slate-300">
                  Клиенты в Дубае, Лондоне, Лимассоле, США и ЕС
                </div>
              </div>

              <div className="p-6 bg-[#0D213F] rounded-2xl border border-[#1E3A5F] flex flex-col justify-between">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Серия завтраков
                </div>
                <div className="text-3xl font-extrabold font-mono text-white mb-1">
                  18-я встреча
                </div>
                <div className="text-xs text-slate-300">
                  Проверенный формат закрытых мастермайндов
                </div>
              </div>

              <div className="p-6 bg-[#0D213F] rounded-2xl border border-[#1E3A5F] flex flex-col justify-between">
                <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-2">
                  Фокус встречи
                </div>
                <div className="text-3xl font-extrabold font-mono text-white mb-1">
                  100% польза
                </div>
                <div className="text-xs text-slate-300">
                  Конкретные гипотезы роста без «воды» и мотивационных речей
                </div>
              </div>

            </div>

            {/* Quote block */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              «В сегменте высокого чека классические маркетинговые шаблоны перестают работать. Клиент не покупает с рекламы в лоб — ему нужно доказать экспертизу, снять скрытые риски и обосновать стоимость до того, как начнётся торг. Именно эту систему мы и выстраиваем».
              <div className="mt-3 text-white font-semibold not-italic text-xs font-mono">
                — Алина Лисина
              </div>
            </div>

          </div>

        </div>

        {/* Global Hubs Ticker Strip running full-width */}
        <div className="pt-10 border-t border-[#1E3A5F]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#E06D2B]" />
              <span>География мероприятий и клиентов Blue White:</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0D213F] rounded-2xl border border-[#1E3A5F] flex flex-col justify-between group hover:border-[#E06D2B] transition-colors"
              >
                <div>
                  <div className="text-base font-bold text-white group-hover:text-[#E06D2B] transition-colors">
                    {hub.city}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {hub.country}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 mt-2 font-medium">
                  {hub.role}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
