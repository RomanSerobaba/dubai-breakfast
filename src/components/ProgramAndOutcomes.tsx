import React from 'react';
import { ArrowUpRight, MapPin, Calendar, Clock, Coffee, CheckCircle2 } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

interface ProgramAndOutcomesProps {
  onSelectPricing: () => void;
}

const PROGRAM_MODULES = [
  {
    time: '10:00 – 10:50',
    title: 'Экспертная сессия',
    description: 'Система привлечения и продажи на высокий чек: сегменты аудитории, оффер, доверие, квалификация и конверсия в сделку.',
  },
  {
    time: '10:50 – 12:00',
    title: 'Стратегический мастермайнд',
    description: 'Три подготовленных публичных разбора реальных бизнес-запросов участников с профессиональной обратной связью Алины Лисиной.',
  },
  {
    time: '12:00 – 12:35',
    title: 'Обсуждение с предпринимателями',
    description: 'Вопросы, открытый обмен опытом и независимый взгляд на вашу бизнес-ситуацию со стороны других лидеров за столом.',
  },
  {
    time: '12:35 – 13:00',
    title: 'Завтрак и деловые знакомства',
    description: 'Время представить свой бизнес, обсудить возможное партнёрство и договориться о продолжении общения в закрытом кругу.',
  },
];

const OUTCOMES = [
  {
    title: 'Карта вашей системы привлечения',
    text: 'Что уже работает, чего не хватает и где находится главное ограничение роста продаж.',
  },
  {
    title: 'Критерии выбора каналов',
    text: 'Какие инструменты имеют смысл именно для вашей целевой аудитории и модели продажи.',
  },
  {
    title: 'Идеи для усиления предложения',
    text: 'Как убедительнее раскрывать ценность продукта и обосновывать высокий чек до оглашения цены.',
  },
  {
    title: 'Приоритеты в работе с продажами',
    text: 'Что проверить в квалификации лидов, проведении переговоров и последующих касаниях.',
  },
  {
    title: 'Прямые деловые знакомства',
    text: 'Контакты 20 собственников и руководителей компаний со средним и высоким чеком в ОАЭ.',
  },
  {
    title: 'Персональная обратная связь',
    text: 'Для участников с разбором — пошаговый план действий по запросу и приоритетные гипотезы.',
    special: true,
  },
];

export const ProgramAndOutcomes: React.FC<ProgramAndOutcomesProps> = ({ onSelectPricing }) => {
  return (
    <section id="program" className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Программа, дата и площадка</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] leading-tight max-w-2xl">
              Три часа для системной работы над ростом бизнеса
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-700 max-w-md leading-relaxed">
            Плотный утренний формат без затяжных монологов: практическая экспертиза, разборы живых кейсов и структурированный нетворкинг.
          </p>
        </div>

        {/* 4 Program Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROGRAM_MODULES.map((module, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#E06D2B] mb-3">
                  {module.time}
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] mb-3 leading-snug">
                  {module.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Venue & Timing Card with Media Placeholder */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] overflow-hidden shadow-xs mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Left: Venue info */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold">
                <MapPin className="w-4 h-4" />
                <span>Downtown / DIFC, Dubai</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F]">
                Приватный лаундж премиального ресторана
              </h3>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#E06D2B] shrink-0" />
                  <span>Дата: <strong>Ноябрь (уточняется при подтверждении заявки)</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E06D2B] shrink-0" />
                  <span>Время: <strong>10:00 – 13:00 (утренний формат)</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-[#E06D2B] shrink-0" />
                  <span>Завтрак a la carte включён в стоимость участия</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-[#F1ECE1]">
                Точный адрес, схема подъезда и парковки направляются участникам персонально после одобрения анкеты для сохранения приватности встречи.
              </p>
            </div>

            {/* Right: Venue Media Placeholder */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-[#F8F6F0]">
              <MediaPlaceholder
                type="photo"
                aspectRatio="4:3"
                imageUrl="/images/dubai_roundtable_mastermind.svg"
                title="Приватный лаундж Downtown Dubai"
                description="Панорамный зал и атмосфера бизнес-завтрака для 20 участников"
                recommendedSize="1200 × 900 px"
                overlayBadge="Локация · Downtown Dubai"
                className="rounded-2xl w-full min-h-[260px]"
              />
            </div>

          </div>
        </div>

        {/* Outcomes Section: "С чем вы уйдёте" */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-2">
              Результат участия
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A192F]">
              С чем вы уйдёте
            </h3>
            <p className="text-base text-slate-700 mt-2">
              Конкретные выводы, применимые к вашему бизнесу сразу после окончания встречи.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {OUTCOMES.map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border flex flex-col justify-between shadow-xs ${
                  item.special
                    ? 'bg-[#0D213F] text-white border-[#1E3A5F] md:col-span-2 lg:col-span-1'
                    : 'bg-white text-[#0A192F] border-[#E5E0D5]'
                }`}
              >
                <div>
                  <div className={`text-xs font-mono font-bold mb-3 ${item.special ? 'text-[#E06D2B]' : 'text-[#E06D2B]'}`}>
                    0{idx + 1}
                  </div>
                  <h4 className={`text-lg font-bold mb-3 leading-snug ${item.special ? 'text-white' : 'text-[#0A192F]'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${item.special ? 'text-slate-200' : 'text-slate-600'}`}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={onSelectPricing}
              type="button"
              className="flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <span>Выбрать формат участия</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
