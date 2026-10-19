import React from 'react';
import { Building2, Briefcase, Scale, GraduationCap, CheckCircle2, Shield, Users, Target } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

const NICHES = [
  {
    icon: Building2,
    title: 'Недвижимость и дорогие проекты',
    description: 'Владельцы агентств, девелоперы, руководители брокерских команд, компаний по дизайну, ремонту и реализации объектов.',
    tagline: 'Длинный цикл сделки и высокие чеки',
    examples: 'Девелопмент в Дубае, элитные брокеры, архитектура',
  },
  {
    icon: Briefcase,
    title: 'B2B и сложные продукты',
    description: 'Собственники и руководители IT-компаний, поставщиков оборудования, корпоративных сервисов и других бизнесов с продажами через переговоры.',
    tagline: 'Корпоративные клиенты и тендеры',
    examples: 'SaaS, enterprise-решения, системная интеграция',
  },
  {
    icon: Scale,
    title: 'Консалтинг и профессиональные услуги',
    description: 'Юридические, финансовые, управленческие, инвестиционные и налоговые компании, где клиент покупает экспертное доверие.',
    tagline: 'Продажи через доверие и личный бренд',
    examples: 'Corporate restructuring, wealth management, advisory',
  },
  {
    icon: GraduationCap,
    title: 'Образование и экспертные программы',
    description: 'Основатели действующих образовательных проектов, корпоративного обучения и премиальных консультационных продуктов.',
    tagline: 'Высокий LTV и повторные программы',
    examples: 'Бизнес-клубы, executive education, акселераторы',
  },
];

const SELECTION_CRITERIA = [
  {
    icon: Target,
    title: 'Действующий бизнес с высоким чеком',
    text: 'Формат рассчитан на компании, где средний чек продукта или услуги составляет от $10,000 / 35,000 AED или LTV клиента превышает эту сумму.',
  },
  {
    icon: Users,
    title: 'Только лица, принимающие решения',
    text: 'За столом собираются собственники, сооснователи и C-level руководители, отвечающие за стратегию, маркетинг и коммерческий результат.',
  },
  {
    icon: Shield,
    title: 'Конфиденциальность и отсутствие спама',
    text: 'Мы не допускаем «охотников за лидами» и агрессивных продаж. На встрече создаётся безопасная среда для открытого обсуждения цифр и задач.',
  },
];

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <AnimatedGridLines />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Кто участвует и как работает отбор</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] leading-tight max-w-2xl">
              20 лидеров за одним столом: для кого эта встреча
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-700 max-w-md leading-relaxed">
            Разные отрасли — общая специфика: привлечение клиентов, которые осознают ценность вашего предложения и готовы платить за качество.
          </p>
        </div>

        {/* 4 Niche Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {NICHES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E5E0D5] flex items-center justify-center text-[#E06D2B] mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-[#F1ECE1]">
                  <div className="text-xs font-semibold text-[#0A192F] mb-1">
                    {item.tagline}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {item.examples}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How Selection Works Banner */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-wider text-[#E06D2B] font-bold mb-2">
              Правила отбора
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-3">
              Почему отбор обязателен и как формируется группа
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Ценность закрытого завтрака определяется уровнем людей, которые сидят рядом с вами. Мы модерируем каждую заявку вручную, чтобы гарантировать сопоставимый масштаб задач.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SELECTION_CRITERIA.map((criterion, cIdx) => {
              const Icon = criterion.icon;
              return (
                <div key={cIdx} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-white flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5 text-[#E06D2B]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0A192F]">
                    {criterion.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {criterion.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-[#F1ECE1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              После подачи заявки организаторы знакомятся с вашим проектом и подтверждают участие в течение 24 часов.
            </div>
            <div className="font-mono text-slate-700 font-semibold shrink-0">
              Лимит: строго 20 мест
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
