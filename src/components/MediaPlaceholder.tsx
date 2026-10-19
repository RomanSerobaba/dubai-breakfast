import React from 'react';
import { Camera, Video, User, Image as ImageIcon } from 'lucide-react';

interface MediaPlaceholderProps {
  type?: 'photo' | 'video' | 'portrait' | 'gallery';
  title: string;
  recommendedSize?: string;
  description?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4' | '21:9' | 'auto';
  className?: string;
  overlayBadge?: string;
  imageUrl?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type = 'photo',
  title,
  recommendedSize = '1920 × 1080 px',
  description,
  aspectRatio = '16:9',
  className = '',
  overlayBadge,
  imageUrl,
  imageAlt,
  children,
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case '16:9': return 'aspect-video';
      case '4:3': return 'aspect-[4/3]';
      case '1:1': return 'aspect-square';
      case '3:4': return 'aspect-[3/4]';
      case '21:9': return 'aspect-[21/9]';
      case 'auto': return '';
      default: return 'aspect-video';
    }
  };

  const renderIcon = () => {
    switch (type) {
      case 'video':
        return <Video className="w-8 h-8 text-[#E06D2B]" />;
      case 'portrait':
        return <User className="w-8 h-8 text-[#E06D2B]" />;
      default:
        return <Camera className="w-8 h-8 text-[#E06D2B]" />;
    }
  };

  // If an image URL is provided, display high-fidelity visual with replacement badge
  if (imageUrl) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#0B1A30] border border-[#1E3A5F]/70 text-white flex flex-col justify-between group shadow-xl ${getAspectClass()} ${className}`}
      >
        {/* Render Image with subtle hover zoom */}
        <img
          src={imageUrl}
          alt={imageAlt || title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />

        {/* Ambient Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/30 to-black/40 pointer-events-none" />

        {/* Top bar with placeholder/replacement badge */}
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-xs">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-slate-200 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B] animate-pulse" />
            {overlayBadge || (type === 'video' ? 'Видео / Визуал' : 'Сгенерированный визуал')}
          </span>
          {recommendedSize && (
            <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-slate-300 font-mono text-[11px] border border-white/10 hidden sm:inline-block">
              {recommendedSize}
            </span>
          )}
        </div>

        {/* Bottom caption / Title */}
        <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-[#071324] via-[#071324]/80 to-transparent">
          <div className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
            {title}
          </div>
          {description && (
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    );
  }

  // Fallback / Standard placeholder container
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F223D] via-[#0B1A30] to-[#071324] border border-[#1E3A5F]/70 text-white flex flex-col justify-between group ${getAspectClass()} ${className}`}
    >
      {/* Subtle blueprint / grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(224,109,43,0.08),transparent_70%)] pointer-events-none" />

      {/* Top bar with placeholder badge */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-xs">
        <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E06D2B] animate-pulse" />
          {overlayBadge || (type === 'video' ? 'Место под видео' : 'Место под фото')}
        </span>
        {recommendedSize && (
          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline-block">
            {recommendedSize}
          </span>
        )}
      </div>

      {/* Center content */}
      <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center my-auto">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
          {renderIcon()}
        </div>
        {!children ? (
          <>
            <div className="text-base sm:text-lg font-bold text-white max-w-md tracking-tight mb-1">
              {title}
            </div>
            {description && (
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
                {description}
              </p>
            )}
          </>
        ) : (
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            {title}
          </div>
        )}
      </div>

      {/* Bottom overlay or optional slotted content */}
      {children ? (
        <div className="relative z-10">{children}</div>
      ) : (
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 bg-black/20">
          <span>Заглушка контента</span>
          <span className="font-mono text-slate-300">Готово к замене</span>
        </div>
      )}
    </div>
  );
};
