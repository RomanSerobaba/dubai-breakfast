import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

interface ProblemSectionProps {
  onLearnMoreClick?: () => void;
}

const TAGS = [
  'Заявки не от тех людей',
  'После оффера звучит «дорого»',
  'Сделки держатся на собственнике',
  'Сарафанное радио не масштабируется',
  'Медленный выход на рынок ОАЭ',
  'Реклама работает, а сделок нет',
  'Маркетинг из разрозненных частей',
];

const PAIN_POINTS = [
  {
    title: 'Заявки приходят, но не от тех людей',
    description: 'Потенциальные клиенты интересуются, запрашивают подробности — и не располагают нужным бюджетом.',
  },
  {
    title: 'После предложения звучит «дорого» или «мы подумаем»',
    description: 'Ценность продукта не очевидна до оглашения цены, и переговоры сваливаются в сравнение прайсов.',
  },
  {
    title: 'Реклама работает, а продажи не растут',
    description: 'Непонятно, где именно возникает сбой: в качестве трафика, предложении, первичной квалификации или обработке лидов.',
  },
  {
    title: 'Сделки держатся на собственнике',
    description: 'Именно вам приходится лично выстраивать доверие, проводить ключевые переговоры и возвращать клиента к финальному решению.',
  },
  {
    title: 'Рекомендации дают хороших покупателей, но их недостаточно',
    description: 'Сарафанное радио не масштабируется. Нет управляемого способа стабильно наращивать число качественных переговоров.',
  },
  {
    title: 'Выход на новую аудиторию или рынок идёт медленно',
    description: 'Прежние подходы на локальном рынке не дают нужного результата в ОАЭ или на международной арене, а тесты стоят дорого.',
  },
  {
    title: 'Маркетинг состоит из отдельных активностей',
    description: 'Сайт, соцсети, платная реклама и отдел продаж существуют параллельно, но не связаны в прозрачную сквозную систему.',
  },
];

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="problems" className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header: Title + Explanation */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
            Сильный продукт и высокий чек ещё не гарантируют стабильных продаж
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            У вас есть опыт, команда и продукт, который приносит клиентам ценность. Но привлечение новых покупателей всё ещё может зависеть от личных связей, отдельных удачных кампаний и постоянного участия собственника.
          </p>
        </div>

        {/* 7 Pain Points Grid */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E2DDD3]">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F]">
              Узнаёте свою ситуацию?
            </h3>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              7 типичных барьеров масштабирования
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PAIN_POINTS.map((item, index) => (
              <div
                key={index}
                className={`p-7 sm:p-8 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs hover:border-[#CBD5E1] transition-colors ${
                  index === PAIN_POINTS.length - 1 ? 'bg-[#F5F1E8]' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-mono text-[#E06D2B] font-bold mb-3">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#0A192F] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Key Takeaway Card filling the remaining 2 columns in the grid */}
            <div className="p-7 sm:p-8 bg-[#0D213F] text-white rounded-3xl border border-[#1E3A5F] flex flex-col justify-between shadow-lg md:col-span-1 lg:col-span-2">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#E06D2B] font-bold mb-2">
                  Ключевой вывод
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                  На высоком чеке важно не только получить обращение
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Важно привлечь подходящего клиента, обосновать ценность и провести его через решение о покупке. Именно эту систему мы разберём на встрече.
                </p>
              </div>
              <a
                href="#application"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E06D2B] hover:text-white transition-colors uppercase tracking-wider pt-4 border-t border-white/10"
              >
                <span>Разобрать систему привлечения</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
