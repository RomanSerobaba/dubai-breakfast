import React from 'react';
import { Building2, Briefcase, Scale, GraduationCap, Award, Users, Euro, CheckCircle } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

const NICHES = [
  {
    icon: Building2,
    title: 'Недвижимость и дорогие проекты',
    description: 'Владельцы агентств, девелоперы, руководители брокерских команд, компаний по дизайну, ремонту и реализации проектов.',
    tagline: 'Длинный цикл сделки и высокие чеки',
  },
  {
    icon: Briefcase,
    title: 'B2B и сложные продукты',
    description: 'Собственники и руководители IT-компаний, поставщиков оборудования, корпоративных сервисов и других бизнесов с продажами через переговоры.',
    tagline: 'Корпоративные клиенты и тендеры',
  },
  {
    icon: Scale,
    title: 'Консалтинг и профессиональные услуги',
    description: 'Юридические, финансовые, управленческие и другие компании, где клиент покупает экспертизу и доверяет решение значимой задачи.',
    tagline: 'Продажи через доверие и личный бренд',
  },
  {
    icon: GraduationCap,
    title: 'Образование и экспертные программы',
    description: 'Основатели действующих образовательных проектов, корпоративного обучения и премиальных консультационных продуктов.',
    tagline: 'Высокий LTV и повторные программы',
  },
];

export const BuildingSystemSection: React.FC = () => {
  return (
    <section id="system" className="py-20 sm:py-28 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Целевая аудитория и ведущая</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A192F] leading-tight max-w-xl">
              Для кого эта встреча и кто её проводит
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Разные отрасли — общая задача: привлекать клиентов, которые понимают ценность вашего предложения и готовы платить за неё.
          </p>
        </div>

        {/* 2-Column Layout matching reference: Vertical Portrait on Left, 2x2 Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Vertical Portrait Card */}
          <div className="lg:col-span-5 flex flex-col">
            <MediaPlaceholder
              type="portrait"
              aspectRatio="auto"
              title="Алина Лисина"
              description="Предприниматель, маркетолог с 20-летним опытом, основатель Blue White Agency"
              recommendedSize="800 × 1000 px (Вертикальный портрет ведущей)"
              className="h-full min-h-[460px] rounded-3xl"
            >
              <div className="p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end text-white">
                <div className="text-xs font-mono uppercase tracking-wider text-[#E06D2B] font-bold mb-1">
                  Ведущая бизнес-завтрака
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  Алина Лисина
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Основатель международного агентства Blue White. Практика в Дубае, Европе и США.
                </p>
              </div>
            </MediaPlaceholder>
          </div>

          {/* Right Column: 2x2 Grid of Niche Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {NICHES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs hover:border-[#CBD5E1] transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E5E0D5] flex items-center justify-center text-[#E06D2B] mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A192F] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F1ECE1] text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {item.tagline}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Horizontal Stat Bar matching reference */}
        <div className="p-8 sm:p-10 bg-[#0D213F] text-white rounded-3xl border border-[#1E3A5F] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-4 text-left max-w-xs shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-[#142C52] border border-[#2A4D7C] flex items-center justify-center text-[#E06D2B] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Стандарты Blue White</div>
              <div className="text-xs text-slate-400">Только проверенные форматы и реальные кейсы</div>
            </div>
          </div>

          {/* Stats Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full border-t lg:border-t-0 lg:border-l border-[#1E3A5F] pt-6 lg:pt-0 lg:pl-8 text-center sm:text-left">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                20
              </div>
              <div className="text-xs text-slate-400 mt-1">Мест всего (закрытая группа)</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#E06D2B] tracking-tight">
                3
              </div>
              <div className="text-xs text-slate-400 mt-1">Персональных разбора</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                18-й
              </div>
              <div className="text-xs text-slate-400 mt-1">Бизнес-завтрак серии</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                €85
              </div>
              <div className="text-xs text-slate-400 mt-1">Раннее бронирование</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
