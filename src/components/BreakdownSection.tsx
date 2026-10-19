import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

interface BreakdownSectionProps {
  onApplyBreakdown: () => void;
}

const BREAKDOWN_CASES = [
  {
    niche: 'Дубай · Недвижимость и девелопмент',
    title: '«Как привлекать покупателей недвижимости с нужным бюджетом?»',
    description: 'Разбор воронки девелоперского агентства: анализ каналов привлечения (Meta Ads, Google, партнёрские брокеры), выявление утечек на этапе первичной квалификации.',
    metrics: [
      { label: 'Средний чек', value: 'от $50,000+' },
      { label: 'Ключевое ограничение', value: 'Квалификация до первой встречи' },
      { label: 'Ожидаемый результат', value: 'Рост конверсии в сделку x2' },
    ],
  },
  {
    niche: 'B2B & Корпоративные IT-продукты',
    title: '«Почему после презентации дорогой услуги клиенты исчезают?»',
    description: 'Разбор коммерческого предложения и структуры переговоров: как обосновать высокий чек до оглашения стоимости и не сваливаться в сравнение прайсов.',
    metrics: [
      { label: 'Средний чек', value: '$25,000 – $100,000' },
      { label: 'Ключевое ограничение', value: 'Презентация ценности оффера' },
      { label: 'Ожидаемый результат', value: 'Сокращение цикла сделки с 90 до 35 дней' },
    ],
  },
  {
    niche: 'Международный консалтинг и услуги',
    title: '«Как выйти на владельцев компаний и лиц, принимающих решения?»',
    description: 'Построение связки LinkedIn outreach, персонализированных cold emails и квалификации лидов для прямого выхода на топ-менеджеров без холодных звонков.',
    metrics: [
      { label: 'Средний чек', value: 'от $15,000 / месяц' },
      { label: 'Ключевое ограничение', value: 'Отсутствие прямого доступа к ЛПР' },
      { label: 'Ожидаемый результат', value: '15+ квалифицированных встреч в месяц' },
    ],
  },
];

const BREAKDOWN_STEPS = [
  {
    step: '01',
    title: 'Предварительная анкета',
    description: 'До мероприятия вы заполняете структурированную анкету: продукт, аудитория, средний чек, каналы трафика, текущие показатели и главный запрос.',
  },
  {
    step: '02',
    title: 'Подготовка ведущей',
    description: 'Алина Лисина заранее анализирует ваш бизнес, структуру оффера и конкурентное поле, чтобы на встрече сразу перейти к сути без вводных отступлений.',
  },
  {
    step: '03',
    title: 'Публичный разбор в группе',
    description: 'Живой 25-минутный стратегический разбор в кругу 20 предпринимателей: точечные гипотезы, рекомендации по воронке и обратная связь от других лидеров рынка.',
  },
];

export const BreakdownSection: React.FC<BreakdownSectionProps> = ({ onApplyBreakdown }) => {
  return (
    <section id="breakdown" className="w-full py-24 sm:py-32 bg-[#0D213F] text-white border-b border-[#1E3A5F]/60 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header with Title and Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Формат стратегического мастермайнда</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl">
              Ваш бизнес — предмет профессионального разбора
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-xl">
              Три участника смогут вынести свою задачу на стратегический мастермайнд с Алиной Лисиной.
            </p>
          </div>

          <button
            onClick={onApplyBreakdown}
            type="button"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-lg hover:-translate-y-0.5 whitespace-nowrap self-start md:self-auto"
          >
            <span>Подать заявку на разбор (1 место)</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Horizontal Case Cards Stacked */}
        <div className="space-y-8 mb-16">
          {BREAKDOWN_CASES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 bg-[#0A192F] rounded-3xl border border-[#1E3A5F] shadow-lg hover:border-[#2A4D7C] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Column 1: Niche, Title, and Action Link */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xs font-mono text-[#E06D2B] uppercase tracking-wider mb-2 font-bold">
                      {item.niche}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <button
                    onClick={onApplyBreakdown}
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E06D2B] hover:text-white uppercase tracking-wider mt-4 cursor-pointer text-left transition-colors"
                  >
                    <span>Забронировать этот разбор</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Column 2: Media Placeholder */}
                <div className="lg:col-span-4">
                  <MediaPlaceholder
                    type="photo"
                    aspectRatio="4:3"
                    imageUrl={
                      idx === 0
                        ? '/images/business_breakdown_diagram.svg'
                        : idx === 1
                        ? '/images/past_events_gallery.svg'
                        : '/images/dubai_roundtable_mastermind.svg'
                    }
                    title={`Кейс 0${idx + 1}`}
                    description="Скриншот схемы воронки, аналитики трафика или фото персонального разбора"
                    recommendedSize="600 × 450 px"
                    overlayBadge={`Разбор 0${idx + 1} · Методология`}
                    className="rounded-2xl"
                  />
                </div>

                {/* Column 3: Narrative & Tabular Key Metrics */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tabular data rows */}
                  <div className="divide-y divide-[#1E3A5F] border-y border-[#1E3A5F] text-xs">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="py-3 flex items-center justify-between gap-4">
                        <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium">
                          {m.label}
                        </span>
                        <span className="font-bold text-white font-mono text-right">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 3 Steps: How the breakdown is prepared */}
        <div className="pt-10 border-t border-[#1E3A5F]">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Как проходит подготовка и разбор:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BREAKDOWN_STEPS.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-8 bg-[#0A192F] rounded-2xl border border-[#1E3A5F] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#E06D2B] mb-3">
                    ШАГ {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div>
              <span className="text-white font-bold">Осталось 1 место на разбор из 3.</span> Предварительное согласование задачи после заполнения заявки.
            </div>
            <button
              onClick={onApplyBreakdown}
              className="text-xs font-bold text-[#E06D2B] hover:text-white uppercase tracking-wider whitespace-nowrap cursor-pointer flex items-center gap-1"
            >
              <span>Подать заявку на разбор</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
