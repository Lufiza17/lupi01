import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-[1px] shadow-neon-blue">
            <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
              <span className="font-heading font-black text-sm text-cyan-300">LN</span>
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-white text-base tracking-tight">
              {personal.fullName}
            </div>
            <div className="text-xs font-mono text-cyan-400">
              {personal.bioHeadline}
            </div>
          </div>
        </div>

        {/* Center Tagline & Copyright */}
        <div className="flex flex-col items-center text-center space-y-1">
          <p className="text-xs sm:text-sm text-slate-300 font-light flex items-center gap-1.5">
            <span>Built with curiosity & code</span>
            <Terminal className="w-3.5 h-3.5 text-cyan-400 inline" />
          </p>
          <p className="text-xs text-slate-400 font-mono">
            © {personal.year} {personal.fullName}. All rights reserved.
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-300"
          aria-label="Back to top"
        >
          <span className="text-xs font-mono">Top</span>
          <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
