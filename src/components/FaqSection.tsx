import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

const FAQ_ITEMS = [
  {
    question: 'Подойдёт ли встреча, если я продаю частным клиентам, а не компаниям?',
    answer: 'Да. Ключевой критерий — не тип клиента (B2B или B2C), а модель продажи: высокий чек, необходимость формировать доверие, длинный цикл принятия решения и работа с ценностью предложения.',
  },
  {
    question: 'Чем этот бизнес-завтрак отличается от обычных нетворкинг-встреч в Дубае?',
    answer: 'Здесь нет случайных людей, ярмарки визиток и монологов со сцены. Встреча объединяет ровно 20 собственников, прошедших предварительный отбор. Главный фокус — профессиональная работа над системой привлечения клиентов и 3 живых разбора реальных бизнесов под руководством эксперта с 20-летним опытом.',
  },
  {
    question: 'В чём разница между тарифом «Участник» и тарифом «С разбором бизнеса»?',
    answer: 'В тарифе «Участник» вы полноценно участвуете во всей программе: экспертной сессии, обсуждении чужих кейсов, мастермайнде и нетворкинге за завтраком. В тарифе «С разбором» вы заранее заполняете детальную анкету, ведущая готовится к вашей ситуации, и на встрече ваш бизнес становится предметом 25-минутного публичного стратегического разбора с точечными рекомендациями. Таких мест всего 3.',
  },
  {
    question: 'Что делать, если я не хочу раскрывать конфиденциальные цифры бизнеса на разборе?',
    answer: 'Вам не обязательно называть абсолютные финансовые показатели, названия закрытых клиентов или коммерческие тайны. Для качественного разбора достаточно относительных величин: конверсии этапов, структуры оффера, динамики среднего чека и описания текущих сложностей в переговорах.',
  },
  {
    question: 'Почему группа ограничена ровно 20 участниками?',
    answer: '20 человек — это оптимальный состав для сохранения камерности, при котором каждый успевает лично познакомиться со всеми гостями, задать вопрос ведущей и включиться в обсуждение без ощущения «массовой конференции».',
  },
  {
    question: 'Как добраться до площадки и где именно пройдёт завтрак?',
    answer: 'Встреча пройдёт в приватном лаундже премиального ресторана в районе Downtown / DIFC, Дубай. Точный адрес, инструкции по парковке и схема проезда направляются участникам персонально после подтверждения и оплаты участия.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <AnimatedGridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Ответы на вопросы</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Частые вопросы
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Всё, что важно знать о формате, подготовке и участии в закрытом бизнес-завтраке в Дубае.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#CBD5E1] shadow-xs'
                    : 'bg-white/80 border-[#E5E0D5] hover:border-[#CBD5E1]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A192F] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#0A192F] text-white'
                        : 'bg-[#F8F6F0] text-slate-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-[#F1ECE1]">
                    <div className="pt-4">{item.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-base font-bold text-[#0A192F]">Остались вопросы по участию?</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">
              Напишите команде организатора напрямую в WhatsApp, чтобы уточнить детали.
            </div>
          </div>
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#1E3A5F] rounded-full transition-colors whitespace-nowrap shrink-0"
          >
            Задать вопрос в WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
