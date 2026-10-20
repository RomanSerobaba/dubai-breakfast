import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (packageId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="w-full py-12 sm:py-32 bg-[#0D213F] text-white border-b border-[#1E3A5F]/60 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.07),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Тарифы и форматы</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl">
              Пакеты участия в бизнес-завтраке
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-300 max-w-md leading-relaxed">
            Раннее бронирование действует на первые 8 мест. Выберите формат индивидуального участия или совместной работы с партнёром.
          </p>
        </div>

        {/* 2 Vertical Cards without photo placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Card 1: Participant */}
          <div className="bg-[#0A192F] rounded-3xl border border-[#1E3A5F] overflow-hidden flex flex-col justify-between shadow-lg hover:border-[#2A4D7C] transition-all">
            <div className="p-8">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">
                  Участник
                </h3>
                <div className="text-right">
                  <span className="text-3xl font-extrabold font-mono text-white">€85</span>
                  <span className="text-xs text-slate-400 line-through block">€110</span>
                </div>
              </div>

              <div className="text-xs font-semibold text-[#E06D2B] mb-4">
                Раннее бронирование · 3 места осталось
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Для тех, кто хочет разобраться в системе привлечения клиентов, участвовать в профессиональной дискуссии и расширить деловое окружение.
              </p>

              <div className="pt-4 border-t border-[#1E3A5F] space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Практическая сессия Алины Лисиной</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Участие в мастермайнде и чужих кейсах</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Представление своего бизнеса группе</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Завтрак a la carte включён в стоимость</span>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={() => onSelectPackage('participant_single')}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Выбрать тариф «Участник»</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Participant with Business Breakdown (Flagship) */}
          <div className="bg-[#142C52] text-white rounded-3xl border-2 border-[#E06D2B] overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-[#E06D2B] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md mb-3">
                Флагманский формат
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">
                  С разбором бизнеса
                </h3>
                <div className="text-right">
                  <span className="text-3xl font-extrabold font-mono text-[#E06D2B]">€150</span>
                  <span className="text-xs text-slate-300 line-through block">€180</span>
                </div>
              </div>

              <div className="text-xs font-bold text-amber-300 mb-4">
                Осталось всего 1 место из 3
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                Для тех, кто хочет вынести собственную задачу на профессиональный разбор, получить точные гипотезы и план действий от эксперта международного агентства.
              </p>

              <div className="pt-4 border-t border-white/15 space-y-3 text-xs text-white">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Всё, что входит в базовый тариф «Участник»</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Предварительная анкета о показателях бизнеса</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Подготовка ведущей к вашему индивидуальному запросу</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Выступление со своей задачей перед 20 топ-предпринимателями</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E06D2B] mt-0.5 shrink-0" />
                  <span>Приоритет при отборе (строго 3 места)</span>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={() => onSelectPackage('breakdown_single')}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-wider text-white animated-gradient-button rounded-full cursor-pointer shadow-lg"
              >
                <span>Выбрать участие с разбором</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Pair 20% Discount Comparison: Desktop Table & Mobile Mini-Cards */}
        <div className="bg-[#0A192F] rounded-3xl border border-[#1E3A5F] p-5 sm:p-12 shadow-lg">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <div className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm mb-3">
              Скидка 20%
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Приходите вдвоём — скидка 20%
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Пригласите бизнес-партнёра, сооснователя или руководителя маркетинга и продаж. Обсудите идеи вместе и сформируйте общее понимание следующих шагов.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1E3A5F] text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="py-4 pr-4">Формат для двоих</th>
                  <th className="py-4 px-4">Раннее бронирование</th>
                  <th className="py-4 px-4">Стандартная стоимость</th>
                  <th className="py-4 pl-4 text-right">Выбрать</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E3A5F] text-sm">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-5 pr-4">
                    <div className="font-bold text-white">Два участника без разбора</div>
                    <div className="text-xs text-slate-400 mt-0.5">2 базовых билета на бизнес-завтрак</div>
                  </td>
                  <td className="py-5 px-4 font-mono font-bold text-white text-base tabular-nums">
                    €136
                  </td>
                  <td className="py-5 px-4 font-mono text-slate-400 text-xs tabular-nums line-through">
                    €176
                  </td>
                  <td className="py-5 pl-4 text-right">
                    <button
                      onClick={() => onSelectPackage('pair_both_regular')}
                      type="button"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-colors cursor-pointer"
                    >
                      Выбрать
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors bg-white/5">
                  <td className="py-5 pr-4">
                    <div className="font-bold text-white">Один участник с разбором + один без разбора</div>
                    <div className="text-xs text-slate-400 mt-0.5">Разбор компании + второй билет для партнёра</div>
                  </td>
                  <td className="py-5 px-4 font-mono font-bold text-[#E06D2B] text-base tabular-nums">
                    €188
                  </td>
                  <td className="py-5 px-4 font-mono text-slate-400 text-xs tabular-nums line-through">
                    €232
                  </td>
                  <td className="py-5 pl-4 text-right">
                    <button
                      onClick={() => onSelectPackage('pair_one_breakdown')}
                      type="button"
                      className="px-5 py-2.5 text-xs font-semibold text-white animated-gradient-button rounded-full cursor-pointer shadow-md"
                    >
                      Выбрать
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-5 pr-4">
                    <div className="font-bold text-white">Два участника, каждый с отдельным разбором</div>
                    <div className="text-xs text-slate-400 mt-0.5">Два независимых разбора бизнес-задач</div>
                  </td>
                  <td className="py-5 px-4 font-mono font-bold text-white text-base tabular-nums">
                    €240
                  </td>
                  <td className="py-5 px-4 font-mono text-slate-400 text-xs tabular-nums line-through">
                    €288
                  </td>
                  <td className="py-5 pl-4 text-right">
                    <button
                      onClick={() => onSelectPackage('pair_two_breakdowns')}
                      type="button"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-colors cursor-pointer"
                    >
                      Выбрать
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Mini-Cards View (no horizontal scroll) */}
          <div className="md:hidden space-y-3.5 mb-6">
            {/* Card 1 */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="font-bold text-white text-sm mb-1 leading-snug">
                Два участника без разбора
              </div>
              <div className="text-xs text-slate-400 mb-3">
                2 базовых билета на бизнес-завтрак
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono font-bold text-white text-lg tabular-nums">€136</span>
                    <span className="font-mono text-slate-400 text-xs tabular-nums line-through">€176</span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">за двоих</span>
                </div>
                <button
                  onClick={() => onSelectPackage('pair_both_regular')}
                  type="button"
                  className="px-5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-colors cursor-pointer"
                >
                  Выбрать
                </button>
              </div>
            </div>

            {/* Card 2 (Featured) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#E06D2B]/15 to-white/[0.04] border border-[#E06D2B]/40 relative">
              <div className="inline-block px-2 py-0.5 bg-[#E06D2B]/20 text-[#E06D2B] border border-[#E06D2B]/30 text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                Популярный выбор
              </div>
              <div className="font-bold text-white text-sm mb-1 leading-snug">
                Один участник с разбором + один без разбора
              </div>
              <div className="text-xs text-slate-300 mb-3">
                Разбор компании + второй билет для партнёра
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono font-bold text-[#E06D2B] text-lg tabular-nums">€188</span>
                    <span className="font-mono text-slate-400 text-xs tabular-nums line-through">€232</span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">за двоих</span>
                </div>
                <button
                  onClick={() => onSelectPackage('pair_one_breakdown')}
                  type="button"
                  className="px-5 py-2 text-xs font-semibold text-white animated-gradient-button rounded-full cursor-pointer shadow-md"
                >
                  Выбрать
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="font-bold text-white text-sm mb-1 leading-snug">
                Два участника, каждый с отдельным разбором
              </div>
              <div className="text-xs text-slate-400 mb-3">
                Два независимых разбора бизнес-задач
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono font-bold text-white text-lg tabular-nums">€240</span>
                    <span className="font-mono text-slate-400 text-xs tabular-nums line-through">€288</span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">за двоих</span>
                </div>
                <button
                  onClick={() => onSelectPackage('pair_two_breakdowns')}
                  type="button"
                  className="px-5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-colors cursor-pointer"
                >
                  Выбрать
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-400 leading-relaxed border-t border-[#1E3A5F] pt-4">
            <p>Цены указаны за двоих. Каждый гость проходит предварительный отбор. Два отдельных разбора доступны при наличии двух свободных мест в мастермайнде.</p>
            <p className="text-[#E06D2B] font-semibold">Раннее бронирование действует на первые 8 оплаченных мест.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
