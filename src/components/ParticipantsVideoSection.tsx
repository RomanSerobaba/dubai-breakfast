import React from 'react';
import { MediaPlaceholder } from './MediaPlaceholder.tsx';

export const ParticipantsVideoSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F8F6F0] text-[#0A192F] border-b border-[#E2DDD3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E06D2B] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B]" />
              <span>Закрытый состав участников</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A192F] leading-tight">
              За одним столом — люди, принимающие решения
            </h2>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Мы собираем 20 собственников и руководителей действующих компаний, которые продают дорогие продукты и услуги и заинтересованы в развитии бизнеса.
            </p>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Состав участников — часть ценности мероприятия. Поэтому участие подтверждается после рассмотрения заявки.
            </p>
          </div>

          {/* Right Column: Video Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5E0D5]">
              <MediaPlaceholder
                type="video"
                title="Атмосфера встреч и участники"
                description="Видео-презентация закрытого бизнес-завтрака в Дубае"
                recommendedSize="1920 × 1080 px (Видеоролик)"
                aspectRatio="16:9"
                className="w-full min-h-[360px] sm:min-h-[420px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
