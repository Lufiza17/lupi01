import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollPercentage(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-dark-900/50 z-[60] backdrop-blur-sm pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
