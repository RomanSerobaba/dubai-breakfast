import React from 'react';

interface AnimatedGridLinesProps {
  className?: string;
}

/**
 * Three vertical semi-transparent pulsing and dropping grid lines
 * inspired by rkaccounting.co.uk (lines at 25%, 50%, 75%).
 * Rendered across sections with a light background.
 */
export const AnimatedGridLines: React.FC<AnimatedGridLinesProps> = ({ className = '' }) => {
  return (
    <div
      className={`animated-grid-lines absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full relative">
        {/* Line 1: 25% from left of content grid */}
        <div className="animated-grid-line animated-grid-line-1">
          <div className="animated-grid-drop drop-1" />
        </div>

        {/* Line 2: 50% center of content grid */}
        <div className="animated-grid-line animated-grid-line-2">
          <div className="animated-grid-drop drop-2" />
        </div>

        {/* Line 3: 75% from left of content grid */}
        <div className="animated-grid-line animated-grid-line-3">
          <div className="animated-grid-drop drop-3" />
        </div>
      </div>
    </div>
  );
};
