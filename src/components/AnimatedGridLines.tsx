import React from 'react';

interface AnimatedGridLinesProps {
  className?: string;
}

/**
 * Three vertical semi-transparent pulsing and dropping grid lines
 * rendered fixed across the entire viewport so they run continuously
 * across all sections without interruption.
 */
export const AnimatedGridLines: React.FC<AnimatedGridLinesProps> = ({ className = '' }) => {
  return (
    <div
      className={`animated-grid-lines fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-10 ${className}`}
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
