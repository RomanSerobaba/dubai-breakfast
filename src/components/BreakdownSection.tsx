import React from 'react';
import { ArrowUpRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

interface BreakdownSectionProps {
  onApplyBreakdown: () => void;
}

const REVIEW_POINTS = [
  'Кому вы продаёте и насколько точно выбираете аудиторию.',
  'Как сформулировано предложение и чем подтверждается его ценность.',
  'Какие каналы используете и где может теряться результат.',
  'Как устроен переход от обращения к переговорам и покупке.',
  'Какое ограничение стоит проверить первым.',
  'Какие действия и гипотезы имеют приоритет.',
];

const EXAMPLES = [
  '«Как привлекать покупателей недвижимости с нужным бюджетом?»',
  '«Почему после презентации дорогой услуги клиенты исчезают?»',
  '«Как выйти на владельцев компаний и лиц, принимающих решения?»',
  '«Что менять, если реклама приносит заявки, но не сделки?»',
];

export const BreakdownSection: React.FC<BreakdownSectionProps> = ({ onApplyBreakdown }) => {
  return (
    <section id="breakdown" className="w-full py-24 sm:py-32 bg-[#0D213F] text-white border-b border-[#1E3A5F]/60 relative overflow-hidden">
      <AnimatedGridLines className="z-10" />
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Kicker Tag */}
        <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
          <span>Формат стратегического мастермайнда</span>
        </div>

        {/* Main Content Body Grid (Title and Right Card aligned at the same level) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          
          {/* Left Column: Title, Subtitle, Questionnaire & During Review */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header / Title */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                Ваш бизнес — предмет профессионального разбора
              </h2>
              <p className="text-lg sm:text-xl text-slate-200 font-medium">
                Три участника смогут вынести свою задачу на стратегический мастермайнд с Алиной Лисиной.
              </p>
            </div>

            {/* Questionnaire Card */}
            <div className="p-8 bg-[#0A192F] rounded-3xl border border-[#1E3A5F] shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">
                Анкета перед встречей
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                До мероприятия вы заполните анкету: продукт, аудитория, средний чек, каналы привлечения, текущие результаты и основной запрос. Это позволит заранее погрузиться в контекст и использовать время встречи для предметной работы.
              </p>
            </div>

            {/* During Review Points */}
            <div className="p-8 bg-[#0A192F] rounded-3xl border border-[#1E3A5F] shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">
                Во время разбора рассмотрим:
              </h3>
              <ul className="space-y-4">
                {REVIEW_POINTS.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E06D2B] shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Examples & Public Format (Aligned with title top) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Examples Card */}
            <div className="p-8 bg-[#0A192F] rounded-3xl border border-[#1E3A5F] shadow-lg">
              <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-mono font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>Например:</span>
              </div>
              <div className="space-y-4">
                {EXAMPLES.map((example, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base text-white font-serif italic"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>

            {/* Public Format Card */}
            <div className="p-8 bg-[#0A192F] rounded-3xl border border-[#1E3A5F] shadow-lg text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-white font-semibold">Разбор проходит публично:</strong> остальные участники смогут сопоставить выводы со своим бизнесом и включиться в обсуждение.
            </div>

          </div>

        </div>

        {/* Bottom CTA Box Stretched Full Width */}
        <div className="p-5 sm:p-10 bg-gradient-to-br from-[#E06D2B]/20 to-[#0A192F] rounded-3xl border border-[#E06D2B]/30 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E06D2B] font-bold mb-2 block">
              Осталось 3 места
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Хотите разбор вашего бизнеса?
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-2xl">
              Приходите с конкретным вопросом. Уходите с профессиональной обратной связью и приоритетами для дальнейшей работы.
            </p>
          </div>
          <button
            onClick={onApplyBreakdown}
            type="button"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-white animated-gradient-button rounded-full cursor-pointer shadow-lg text-center shrink-0"
          >
            <span>Подать заявку на разбор бизнеса</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
