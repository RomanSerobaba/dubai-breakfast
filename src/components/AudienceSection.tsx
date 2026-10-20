import React from 'react';
import { Building2, Briefcase, Scale, GraduationCap } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';
import { AudiencePhotoSlider } from './AudiencePhotoSlider.tsx';

const NICHES = [
  {
    icon: Building2,
    title: 'Недвижимость и дорогие проекты',
    description: 'Владельцы агентств, девелоперы, руководители брокерских команд, компаний по дизайну, ремонту и реализации проектов.',
  },
  {
    icon: Briefcase,
    title: 'B2B и сложные продукты',
    description: 'Собственники и руководители IT-компаний, поставщиков оборудования, корпоративных сервисов и других бизнесов с продажами через переговоры.',
  },
  {
    icon: Scale,
    title: 'Консалтинг и профессиональные услуги',
    description: 'Юридические, финансовые, управленческие и другие компании, где клиент покупает экспертизу и доверяет решение значимой задачи.',
  },
  {
    icon: GraduationCap,
    title: 'Образование и экспертные программы',
    description: 'Основатели действующих образовательных проектов, корпоративного обучения и премиальных консультационных продуктов.',
  },
];

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="relative w-full py-24 sm:py-32 bg-[#0A192F] text-white border-b border-[#1E3A5F] overflow-hidden">
      <AnimatedGridLines className="z-10" />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(224,109,43,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Целевая аудитория</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Для кого эта встреча
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Разные отрасли. Общая задача: привлекать клиентов, которые понимают ценность вашего предложения и готовы платить за неё.
          </p>
        </div>

        {/* 4 Niche Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {NICHES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#0D213F] rounded-3xl border border-[#1E3A5F] flex flex-col justify-between shadow-lg hover:border-[#2A4D7C] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E06D2B] mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo Slider */}
        <AudiencePhotoSlider />

      </div>
    </section>
  );
};
