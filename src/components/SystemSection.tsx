import React from 'react';

const SYSTEM_PILLARS = [
  {
    number: '01',
    title: 'Платёжеспособная аудитория',
    description: 'Как определить наиболее перспективные сегменты клиентов, учитывать их мотивы и выбирать подходящий момент для коммуникации.',
    focus: 'Качество потенциальных покупателей, а не количество обращений любой ценой.',
  },
  {
    number: '02',
    title: 'Предложение, которое обосновывает высокий чек',
    description: 'Что клиент должен понять о вашем продукте, экспертизе и результате ещё до обсуждения стоимости. Как использовать позиционирование, кейсы и доказательства, чтобы усиливать ценность предложения.',
    focus: 'Почему клиенту стоит выбрать вас, даже если есть варианты дешевле.',
  },
  {
    number: '03',
    title: 'Каналы, подходящие вашей модели продаж',
    description: 'Когда использовать LinkedIn и cold email, когда — Google и Meta, какую роль играют контент, SEO/GEO и партнёрские рекомендации.',
    focus: 'Как выбирать и сочетать инструменты под конкретный бизнес.',
  },
  {
    number: '04',
    title: 'Путь от обращения до сделки',
    description: 'Квалификация, первая встреча, презентация предложения, работа с сомнениями и последующие касания. Где потенциальные клиенты теряются и как AI помогает в процессе обработки лидов.',
    focus: 'Как связать привлечение и работу отдела продаж.',
  },
  {
    number: '05',
    title: 'Экономика и управляемый рост',
    description: 'Стоимость квалифицированного обращения, встречи и нового клиента. Конверсия в сделку, длительность цикла продажи и окупаемость привлечения.',
    focus: 'Какие показатели нужны собственнику, чтобы принимать решения о бюджете и масштабировании.',
  },
];

export const SystemSection: React.FC = () => {
  return (
    <section id="system" className="py-20 sm:py-28 bg-[#0A192F] text-white border-b border-[#1E3A5F]/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section lead */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#E06D2B] font-semibold mb-3">
            Методология Blue White
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
            От отдельных заявок — к системе продаж с высоким чеком
          </h2>
          
          {/* Key questions */}
          <div className="space-y-3 text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-[#E06D2B] pl-4 my-6">
            <p>Как найти аудиторию, у которой есть потребность и бюджет?</p>
            <p>Как сформировать предложение, которое не сводится к сравнению цен?</p>
            <p>Как связать маркетинг и продажи, чтобы интерес превращался в предметные переговоры?</p>
            <p className="text-slate-200 font-medium">Как внедрять AI в маркетинг и продажи, не теряя концепции «люди покупают у людей»?</p>
          </div>

          <p className="text-base text-slate-400 mt-6">
            На бизнес-завтраке рассмотрим пять ключевых элементов.
          </p>
        </div>

        {/* 5 Key elements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEM_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 bg-[#0D213F] rounded-xl border border-[#1E3A5F] flex flex-col justify-between ${
                idx === 3 ? 'md:col-span-1 lg:col-span-1' : ''
              } ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2 bg-[#122A4E]' : ''
              }`}
            >
              <div>
                <div className="text-sm font-mono text-[#E06D2B] font-semibold mb-3">
                  {pillar.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Clean unboxed focus indicator */}
              <div className="pt-4 border-t border-[#1E3A5F] text-xs text-slate-300">
                <span className="font-semibold text-white uppercase tracking-wider text-[11px] block mb-1">
                  Фокус
                </span>
                <span>{pillar.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
