import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, Clock, AlertCircle, X } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

// Individual 3D Tilt Project Card Component
const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  onOpenNotice: (msg: string) => void;
}> = ({ project, index, onOpenNotice }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-[1000px] flex justify-center"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className="w-full relative glass-panel-glow rounded-3xl border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-glass group"
      >
        {/* Dynamic Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(6, 182, 212, ${glare.opacity}), transparent 60%)`,
          }}
        />

        {/* Top Card Info */}
        <div>
          {/* Card Media Preview Placeholder (Futuristic Cyber Wireframe) */}
          <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-dark-950/80 border border-white/5 overflow-hidden mb-6 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
            {/* Animated Grid lines inside preview */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Glowing Accent Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

            {/* Center Graphic */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-neon-cyan/20 group-hover:scale-110 transition-transform">
                <FolderGit2 className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-cyan-300">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>{project.statusBadge}</span>
              </div>
            </div>

            {/* Top Right Project Number */}
            <span className="absolute top-3 right-3 font-mono text-xs text-slate-500 bg-dark-900/80 px-2 py-0.5 rounded-md border border-white/5">
              {project.number}
            </span>
          </div>

          {/* Project Title & Description */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              &ldquo;{project.description}&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom Tech Badges & Buttons */}
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() =>
                onOpenNotice(
                  `Project "${project.number}" saat ini sedang dalam proses pengembangan aktif oleh Lufi Noferiza sebagai bagian dari pembelajaran RPL.`
                )
              }
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Project</span>
            </button>

            <button
              onClick={() =>
                onOpenNotice(
                  `Repository kode untuk "${project.number}" akan dipublikasikan ke GitHub setelah fase pengerjaan selesai.`
                )
              }
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-heading font-medium text-slate-300 glass-panel border border-white/10 hover:border-cyan-400/30 hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light"
          >
            Ruang pamer karya masa depan. Seluruh project di bawah ini dirancang untuk mendokumentasikan eksplorasi kode saya.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenNotice={(msg) => setModalMessage(msg)}
            />
          ))}
        </div>

        {/* Notice Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 max-w-2xl mx-auto glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-3.5 text-xs text-slate-400"
        >
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>
            <strong>Catatan:</strong> Sebagai siswa SMK yang sedang berkembang, seluruh project di atas adalah slot showcase resmi yang akan diisi dengan kode nyata hasil pembelajaran saya di SMKN Tembarak.
          </span>
        </motion.div>
      </div>

      {/* Interactive Information Dialog */}
      <AnimatePresence>
        {modalMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full glass-panel-glow border border-cyan-500/40 rounded-3xl p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setModalMessage(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Status Project
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Development Stage
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {modalMessage}
              </p>
              <button
                onClick={() => setModalMessage(null)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-heading font-semibold text-xs uppercase tracking-wider"
              >
                Mengerti
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
