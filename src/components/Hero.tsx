import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, ArrowRight, Mail, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroThreeScene } from './HeroThreeScene';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography, Badges & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Top Status & Grade Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{personal.classGrade} • {personal.school}</span>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-slate-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{personal.city}, {personal.province}, {personal.country}</span>
            </motion.div>
          </div>

          {/* Greeting */}
          <motion.div
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <span className="text-lg md:text-xl font-medium text-cyan-400/90 font-mono tracking-wide">
              Hi, I'm Lufi
            </span>
            <span className="text-2xl animate-bounce" style={{ animationDuration: '2.5s' }}>👋</span>
          </motion.div>

          {/* Full Name */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <span className="text-white">Lufi</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent text-glow">
              Noferiza
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.div
            className="inline-flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-slate-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Code className="w-6 h-6 text-cyan-400" />
            <span className="border-b-2 border-cyan-500/40 pb-0.5">
              {personal.heroHeadline}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            &ldquo;{personal.heroDescription}&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 shadow-neon-blue hover:shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span className="relative z-10">Explore My Portfolio</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-heading font-medium text-sm text-slate-200 glass-panel border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:text-cyan-300 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div>
              <div className="text-xl sm:text-2xl font-heading font-bold text-white">
                {personal.year}
              </div>
              <div className="text-xs text-slate-400 font-mono">Academic Year</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-heading font-bold text-cyan-400">
                {personal.classGrade}
              </div>
              <div className="text-xs text-slate-400 font-mono">Vocational Class</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-heading font-bold text-violet-400">
                16 y.o.
              </div>
              <div className="text-xs text-slate-400 font-mono">Young Developer</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive 3D Tech Canvas */}
        <motion.div
          className="lg:col-span-5 flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-full relative">
            <HeroThreeScene />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          SCROLL DOWN
        </span>
        <div className="w-5 h-8 rounded-full border border-cyan-500/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-2 rounded-full bg-cyan-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};
