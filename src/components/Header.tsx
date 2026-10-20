import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pointer-events-none">
        <div className="w-full flex items-center justify-between gap-2 sm:gap-4 p-1.5 sm:p-2 bg-[#0A192F]/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl text-white pointer-events-auto">
        
        {/* Left: Brand mark */}
        <a 
          href="#" 
          className="flex items-center gap-2 sm:gap-2.5 pl-2.5 sm:pl-4 text-xs sm:text-sm font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-[#E06D2B] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#E06D2B] shrink-0" />
          <span>Blue White Networking</span>
        </a>

        {/* Center: Navigation Links in a subtle inner pill (without Ведущая and Участники и отбор) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 text-xs font-medium text-slate-300">
          <a href="#breakdown" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Разбор бизнеса
          </a>
          <a href="#program" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Программа
          </a>
          <a href="#pricing" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Тарифы
          </a>
          <a href="#faq" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            FAQ
          </a>
        </nav>

        {/* Right: Social Icons (desktop only) & CTA button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="https://wa.me/37129785825"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden md:flex w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          <a
            href="https://t.me/AlinaLisina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hidden md:flex w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.261.26-.536.26l.21-3.05 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.941z"/>
            </svg>
          </a>
          <button
            onClick={onApplyClick}
            type="button"
            className="flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white animated-gradient-button rounded-full cursor-pointer shadow-md whitespace-nowrap shrink-0"
          >
            <span>Подать заявку</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};
