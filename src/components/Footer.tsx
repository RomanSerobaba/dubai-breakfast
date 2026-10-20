import React from 'react';
import { ArrowUpRight, Send, Phone, MapPin } from 'lucide-react';
import { AnimatedGridLines } from './AnimatedGridLines.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#071324] text-slate-400 py-16 sm:py-20 border-t border-[#1E3A5F]/40 text-xs relative overflow-hidden">
      <AnimatedGridLines className="z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#1E3A5F]/40 items-start">
          
          {/* Brand & Mission column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-white tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06D2B]" />
              <span>Blue White Networking</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Закрытые бизнес-завтраки и стратегические мастермайнды для лидеров компаний в недвижимости, B2B, консалтинге и других нишах с высоким чеком.
            </p>
            
            {/* Website & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://bluewhiteagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#E06D2B] transition-colors"
              >
                <svg className="w-4 h-4 text-[#E06D2B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span>bluewhiteagency.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/bluewhite.lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>

                <a
                  href="https://instagram.com/blue.white.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-6 space-y-3 md:text-right">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Контакты организатора
            </div>
            <ul className="space-y-3 text-slate-300 md:inline-block md:text-left">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E06D2B]" />
                <a href="tel:+34619625462" className="hover:text-white transition-colors font-medium text-white">
                  +34 619 625 462
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-[#E06D2B]" />
                <a
                  href="https://wa.me/37129785825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  WhatsApp: +371 29 785 825
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
        </div>

      </div>
    </footer>
  );
};
