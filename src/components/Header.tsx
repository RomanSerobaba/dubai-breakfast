import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pointer-events-none">
        <div className="w-full flex items-center justify-between gap-4 p-2 sm:p-2.5 bg-[#0A192F]/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl text-white pointer-events-auto">
        
        {/* Left: Brand mark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 pl-3 sm:pl-4 text-xs sm:text-sm font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-[#E06D2B] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#E06D2B]" />
          <span>Blue White Networking</span>
        </a>

        {/* Center: Navigation Links in a subtle inner pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 text-xs font-medium text-slate-300">
          <a href="#about" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            О встрече
          </a>
          <a href="#speaker" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Ведущая
          </a>
          <a href="#breakdown" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Разбор бизнеса
          </a>
          <a href="#audience" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Участники и отбор
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

        {/* Right: CTA button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 pr-1">
          <button
            onClick={onApplyClick}
            type="button"
            className="flex items-center gap-1.5 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#E06D2B] hover:bg-[#C65A1B] active:bg-[#B34E14] rounded-full transition-all duration-150 cursor-pointer shadow-md hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Подать заявку</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};
