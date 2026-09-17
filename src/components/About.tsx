import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { User, School, MapPin, Sparkles, Code2, GraduationCap, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  // 3D Card Tilt State
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  const profileRows = [
    { label: 'Name', value: personal.fullName, icon: User },
    { label: 'Nickname', value: personal.nickname, icon: Sparkles },
    { label: 'Age', value: `${personal.age} Years Old`, icon: ShieldCheck },
    { label: 'Status', value: personal.status, icon: GraduationCap },
    { label: 'School', value: personal.school, icon: School },
    { label: 'Major', value: 'Software Engineering', icon: Code2 },
    { label: 'Class', value: personal.classGrade, icon: School },
    { label: 'Location', value: `${personal.city}, ${personal.province}`, icon: MapPin },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>DISCOVER THE PROFILE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel-glow p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-neon-blue">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {personal.fullName}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {personal.bioHeadline} • {personal.classGrade}
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-200 text-base sm:text-lg leading-relaxed font-light border-l-2 border-cyan-500/50 pl-5 mb-6 italic">
                &ldquo;{personal.aboutDescription}&rdquo;
              </blockquote>

              <p className="text-slate-400 text-sm leading-relaxed">
                Sebagai siswa SMK di Temanggung, saya mendedikasikan waktu saya untuk mempelajari fundamental pemrograman, arsitektur web modern, dan logika software yang solid. Saya percaya dedikasi dan eksplorasi berkelanjutan adalah kunci menjadi engineer yang berkompeten.
              </p>

              {/* Student Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-cyan-400 font-mono text-xs mb-1">Focus Area</div>
                  <div className="text-white font-heading font-semibold text-sm">Fullstack Fundamentals</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-violet-400 font-mono text-xs mb-1">Institution</div>
                  <div className="text-white font-heading font-semibold text-sm">SMKN Tembarak</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Tilt Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex justify-center perspective-[1000px]"
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
              className="relative w-full max-w-lg glass-panel-glow rounded-3xl p-8 border border-cyan-500/30 shadow-glass overflow-hidden cursor-default"
            >
              {/* Dynamic Glare Reflection */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(6, 182, 212, ${glarePosition.opacity}), transparent 60%)`,
                }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                      Personal Information
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Verified Identity Profile
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Student
                </span>
              </div>

              {/* Information Rows */}
              <div className="space-y-3.5">
                {profileRows.map((row, index) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/20 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 text-slate-400 text-xs font-mono">
                        <Icon className="w-3.5 h-3.5 text-cyan-400/80" />
                        <span>{row.label}</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-100 font-heading text-right">
                        {row.value}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>IDENTITY NO. LN-2026-RPL</span>
                <span className="text-cyan-400">SMKN TEMBARAK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
