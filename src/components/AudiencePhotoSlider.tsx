import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_PHOTOS = [
  { url: '/assets/aistudio/slide-1_ef652416.webp', alt: 'Атмосфера встречи 1' },
  { url: '/assets/aistudio/slide-2_de11f938.webp', alt: 'Атмосфера встречи 2' },
  { url: '/assets/aistudio/slide-3_a57e3614.webp', alt: 'Атмосфера встречи 3' },
  { url: '/assets/aistudio/slide-4_567a2a21.webp', alt: 'Атмосфера встречи 4' },
  { url: '/assets/aistudio/slide-5_30496190.webp', alt: 'Атмосфера встречи 5' },
  { url: '/assets/aistudio/slide-6_cd43fefa.webp', alt: 'Атмосфера встречи 6' },
  { url: '/assets/aistudio/slide-7_6096ebf3.webp', alt: 'Атмосфера встречи 7' },
  { url: '/assets/aistudio/slide-8_6632d543.webp', alt: 'Атмосфера встречи 8' },
];

export const AudiencePhotoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = SLIDE_PHOTOS.length;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, totalSlides - visibleCount);

  // Keep currentIndex in bounds if visibleCount changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="w-full bg-[#0D213F] rounded-3xl p-4 sm:p-10 border border-[#1E3A5F] shadow-2xl relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out sm:-mx-3"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {SLIDE_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 sm:px-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-white/10 group">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 sm:w-8 bg-[#E06D2B]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={prevSlide}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
