import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProgramAndOutcomesProps {
  onSelectPricing: () => void;
}

const PROGRAM_MODULES = [
  {
    title: 'Экспертная сессия',
    description: 'Система привлечения и продажи на высокий чек: аудитория, предложение, каналы, доверие, квалификация и конверсия в сделку.',
  },
  {
    title: 'Стратегический мастермайнд',
    description: 'Три подготовленных разбора реальных бизнес-запросов с профессиональной обратной связью.',
  },
  {
    title: 'Обсуждение с предпринимателями',
    description: 'Вопросы, обмен опытом и взгляд на вашу ситуацию со стороны руководителей других компаний.',
  },
  {
    title: 'Завтрак и деловые знакомства',
    description: 'Время представить бизнес, обсудить сотрудничество и договориться о продолжении общения.',
  },
];

const OUTCOMES = [
  {
    title: 'Карта вашей системы привлечения',
    text: 'Что уже работает, чего не хватает и где стоит искать ограничение.',
  },
  {
    title: 'Критерии выбора каналов',
    text: 'Какие инструменты имеют смысл именно для вашей аудитории и модели продажи.',
  },
  {
    title: 'Идеи для усиления предложения',
    text: 'Как убедительнее раскрывать ценность продукта и обосновывать стоимость.',
  },
  {
    title: 'Приоритеты в работе с продажами',
    text: 'Что проверить в квалификации, переговорах и последующих касаниях.',
  },
  {
    title: 'Деловые знакомства',
    text: 'Контакты собственников и руководителей компаний с высоким чеком.',
  },
  {
    title: 'Для участников с разбором',
    text: 'Персональная обратная связь по заранее подготовленному запросу и рекомендации по следующим шагам.',
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
              <span>Программа мероприятия</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] leading-tight max-w-2xl">
              Три часа для работы над ростом бизнеса
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-700 max-w-md leading-relaxed">
            Плотный утренний формат без затяжных монологов: практическая экспертиза, разборы живых кейсов и структурированный нетворкинг.
          </p>
        </div>

        {/* 4 Program Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {PROGRAM_MODULES.map((module, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#E06D2B]/10 text-[#E06D2B] flex items-center justify-center font-bold text-sm mb-5">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3 leading-snug">
                  {module.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes Section ("С чем вы уйдёте") */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] p-8 sm:p-14 shadow-xs">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Практические результаты</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A192F]">
              С чем вы уйдёте
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {OUTCOMES.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E06D2B]/10 text-[#E06D2B] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A192F] text-base mb-1.5">
                    {outcome.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {outcome.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4 border-t border-[#E5E0D5]">
            <button
              onClick={onSelectPricing}
              type="button"
              className="flex items-center justify-center gap-2 px-6 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-base font-bold text-white animated-gradient-button rounded-full cursor-pointer shadow-lg max-w-full text-center"
            >
              <span>Выбрать формат участия</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
