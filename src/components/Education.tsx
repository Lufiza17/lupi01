import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, BookCheck, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Formal <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light"
          >
            Pendidikan kejuruan formal tempat saya menimba ilmu dan mendalami dunia rekayasa perangkat lunak.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Futuristic Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

          {/* Timeline Node & Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col sm:flex-row items-center gap-8 pl-12 sm:pl-0"
          >
            {/* Center Animated Node */}
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-neon-cyan z-20">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />
              <School className="w-5 h-5 text-cyan-300" />
            </div>

            {/* Content Box */}
            <div className="w-full sm:w-[calc(50%-2.5rem)] sm:mr-auto glass-panel-glow p-8 rounded-3xl border border-cyan-500/30 shadow-glass relative group hover:border-cyan-400/60 transition-all duration-300">
              {/* Corner Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  <span>{education.year}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-xs font-mono text-violet-300">
                  {education.classGrade}
                </span>
              </div>

              {/* School Name */}
              <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {education.school}
              </h3>

              {/* Major */}
              <div className="text-sm font-mono text-cyan-400 mb-4 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>{education.major}</span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                &ldquo;{education.description}&rdquo;
              </p>

              {/* Competencies Acquired */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <BookCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kurikulum: Rekayasa Perangkat Lunak Terapan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Status: Pelajar Aktif Kelas XI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
