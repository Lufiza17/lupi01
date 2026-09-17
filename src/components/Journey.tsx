import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Hammer, TrendingUp, Sparkles, Compass, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Hammer,
  TrendingUp,
  Sparkles,
};

export const Journey: React.FC = () => {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>GROWTH ROADMAP</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            My Learning <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light"
          >
            Filosofi dan tahapan terstruktur yang saya jalani untuk bertransformasi dari seorang siswa menjadi software developer seutuhnya.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Roadmap Cards Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journey.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-panel-glow rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-glass"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-5 text-4xl font-heading font-black text-white/[0.04] group-hover:text-cyan-400/10 transition-colors pointer-events-none">
                  {item.step}
                </span>

                <div>
                  {/* Step Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] shadow-sm mb-6`}>
                    <div className="w-full h-full bg-dark-900/90 rounded-[15px] flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Badge */}
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-2">
                    Phase {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Progress Connector Arrow */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>STEP {item.step} / 04</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
