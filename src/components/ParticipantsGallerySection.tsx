import React from 'react';
import { Linkedin, Building2, Quote } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

const PARTICIPANTS = [
  {
    name: 'Дмитрий Волков',
    role: 'Основатель и управляющий партнёр',
    company: 'Prime Horizon Real Estate',
    city: 'Дубай',
    outcome: '+115% к закрытию встреч',
  },
  {
    name: 'Елена Морозова',
    role: 'CEO и сооснователь',
    company: 'FinTax Advisory Group',
    city: 'Лимассол',
    outcome: '2 закрытых контракта',
  },
  {
    name: 'Максим Каримов',
    role: 'Коммерческий директор',
    company: 'Synapse Cloud Systems',
    city: 'Дубай',
    outcome: 'Цикл сделки с 90 до 35 дней',
  },
  {
    name: 'Анна Бережная',
    role: 'Основатель EdTech Академии',
    company: 'Executive Growth Hub',
    city: 'Ереван',
    outcome: 'Масштабирование чека в 2 раза',
  },
];

export const ParticipantsGallerySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Lead matching reference */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Состав участников и нетворкинг</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A192F] mb-4 leading-tight">
            За одним столом — лидеры компаний с высоким чеком
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Собственники и топ-менеджеры действующих бизнесов. Состав участников — ключевая ценность встречи.
          </p>
        </div>

        {/* 4 Vertical Portrait Cards matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PARTICIPANTS.map((person, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-xs border border-[#E5E0D5] group hover:border-[#CBD5E1] transition-all flex flex-col"
            >
              <MediaPlaceholder
                type="portrait"
                aspectRatio="3:4"
                title="Фото участника"
                description={`${person.role}, ${person.company}`}
                recommendedSize="600 × 800 px"
                className="h-full min-h-[380px]"
              >
                {/* Dark gradient overlay with text at bottom matching reference */}
                <div className="p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="text-base font-bold text-white tracking-tight">
                      {person.name}
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 font-medium mb-1">
                    {person.role}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mb-3">
                    {person.company} · {person.city}
                  </div>

                  <div className="pt-2 border-t border-white/15 text-[11px] font-semibold text-[#E06D2B]">
                    Результат: {person.outcome}
                  </div>
                </div>
              </MediaPlaceholder>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
