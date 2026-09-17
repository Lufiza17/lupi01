import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  FileCode2,
  Server,
  Database,
  GitBranch,
  Github,
  Smartphone,
  Layout,
  Cpu,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Map icon string to Lucide component
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Palette,
  FileCode2,
  Server,
  Database,
  GitBranch,
  Github,
  Smartphone,
  Layout,
};

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>LEARNING PATH & TECH STACK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Skills & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light"
          >
            Daftar teknologi dan konsep yang sedang aktif saya pelajari dan kembangkan selama masa studi di SMK Negeri Tembarak.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl glass-panel p-6 border border-white/10 hover:border-cyan-500/40 hover:shadow-neon-cyan/20 transition-all duration-300 overflow-hidden"
              >
                {/* Ambient hover glow inside card */}
                <div
                  className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: skill.accent }}
                />

                <div className="flex items-start justify-between mb-4">
                  {/* Technology Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${skill.accent}33, #070a12)`,
                      border: `1px solid ${skill.accent}55`,
                      color: skill.accent,
                    }}
                  >
                    <IconComponent className="w-6 h-6 group-hover:rotate-6 transition-transform" />
                  </div>

                  {/* Status Badge */}
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                    In Progress
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center gap-1.5">
                  <span>{skill.name}</span>
                  <Sparkles className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Learning Description */}
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {skill.status}
                </p>

                {/* Bottom learning progress bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out group-hover:w-full w-2/3"
                    style={{
                      backgroundColor: skill.accent,
                      boxShadow: `0 0 10px ${skill.accent}`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Commitment Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/5 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Fokus saat ini: Pemrograman Web Berbasis RPL SMK Negeri Tembarak</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
