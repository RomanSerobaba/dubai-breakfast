import React from 'react';
import { ArrowUpRight, Send, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#071324] text-slate-400 py-16 sm:py-20 border-t border-[#1E3A5F]/40 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#1E3A5F]/40">
          
          {/* Brand & Mission column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-white tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06D2B]" />
              <span>Blue White Networking</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Закрытые бизнес-завтраки и стратегические мастермайнды для лидеров компаний в недвижимости, B2B, консалтинге и других нишах с высоким чеком.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Дубай · Лимассол · Лондон · Ереван · Бали
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Навигация по разделам
            </div>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#speaker" className="hover:text-white transition-colors">Ведущая — Алина Лисина</a>
              </li>
              <li>
                <a href="#breakdown" className="hover:text-white transition-colors">Персональный разбор бизнеса</a>
              </li>
              <li>
                <a href="#audience" className="hover:text-white transition-colors">Участники и правила отбора</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Форматы участия и тарифы</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Частые вопросы</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Контакты организатора
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E06D2B]" />
                <a href="mailto:events@bluewhiteagency.com" className="hover:text-white transition-colors">
                  events@bluewhiteagency.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-[#E06D2B]" />
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  WhatsApp: +971 50 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs pt-1">
                <MapPin className="w-4 h-4 text-[#E06D2B] shrink-0 mt-0.5" />
                <span>Площадка: Downtown / DIFC, Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Blue White Agency. Все права защищены.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Предварительный отбор участников</span>
            <span>·</span>
            <span>Конфиденциальность гарантирована</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
