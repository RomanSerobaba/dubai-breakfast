import React from 'react';
import { Target, CheckCircle2, TrendingUp, Users, Layers } from 'lucide-react';

const ELEMENTS = [
  {
    num: '01',
    title: 'Платёжеспособная аудитория',
    description: 'Как определить наиболее перспективные сегменты клиентов, учитывать их мотивы и выбирать подходящий момент для коммуникации.',
    focus: 'Фокус: качество потенциальных покупателей, а не количество обращений любой ценой.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Предложение, которое обосновывает высокий чек',
    description: 'Что клиент должен понять о вашем продукте, экспертизе и результате ещё до обсуждения стоимости. Как использовать позиционирование, кейсы и доказательства, чтобы усиливать ценность предложения.',
    focus: 'Фокус: почему клиенту стоит выбрать вас, даже если есть варианты дешевле.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Каналы, подходящие вашей модели продаж',
    description: 'Когда использовать LinkedIn и cold email, когда — Google и Meta, какую роль играют контент, SEO/GEO и партнёрские рекомендации.',
    focus: 'Фокус: как выбирать и сочетать инструменты под конкретный бизнес.',
    icon: TrendingUp,
  },
  {
    num: '04',
    title: 'Путь от обращения до сделки',
    description: 'Квалификация, первая встреча, презентация предложения, работа с сомнениями и последующие касания. Где потенциальные клиенты теряются и как AI помогает в процессе обработки лидов.',
    focus: 'Фокус: как связать привлечение и работу отдела продаж.',
    icon: Users,
  },
  {
    num: '05',
    title: 'Экономика и управляемый рост',
    description: 'Стоимость квалифицированного обращения, встречи и нового клиента. Конверсия в сделку, длительность цикла продажи и окупаемость привлечения.',
    focus: 'Фокус: какие показатели нужны собственнику, чтобы принимать решения о бюджете и масштабировании.',
    icon: CheckCircle2,
  },
];

export const SystemElementsSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
            <span>Методология Blue White</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
            От отдельных заявок — к системе продаж с высоким чеком
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Как найти аудиторию, у которой есть потребность и бюджет? Как сформировать предложение, которое не сводится к сравнению цен? Как связать маркетинг и продажи, чтобы интерес превращался в предметные переговоры? Как внедрять AI в маркетинг и продажи, не теряя концепции «люди покупают у людей».
          </p>
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#0A192F] text-white text-xs sm:text-sm font-semibold tracking-wide">
            На бизнес-завтраке рассмотрим пять ключевых элементов.
          </div>
        </div>

        {/* 5 Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ELEMENTS.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === ELEMENTS.length - 1;
            return (
              <div
                key={idx}
                className={`p-8 bg-white rounded-3xl border border-[#E5E0D5] flex flex-col justify-between shadow-2xs hover:border-[#CBD5E1] transition-colors ${
                  isLast ? 'md:col-span-2 lg:col-span-1 bg-[#F5F1E8]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#E06D2B] font-bold px-3 py-1 rounded-full bg-[#E06D2B]/10">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A192F] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F1ECE1] text-xs font-medium text-slate-800">
                  {item.focus}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
