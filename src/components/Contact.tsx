import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate swift interactive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory micro-interaction
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#06b6d4', '#8b5cf6', '#00f2fe'],
      });

      // Reset form fields
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONNECT WITH ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-4 max-w-xl mx-auto font-light leading-relaxed"
          >
            &ldquo;Saya terbuka untuk belajar, berdiskusi, dan mengembangkan project di bidang teknologi.&rdquo;
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Details & Mailto CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel-glow p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Inisiasi Komunikasi
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light mb-8 leading-relaxed">
                Punya pertanyaan seputar studi saya di SMKN Tembarak atau ingin bertukar pikiran tentang coding? Jangan ragu untuk menghubungi saya.
              </p>

              {/* Email Information Card */}
              <div className="p-4 rounded-2xl bg-dark-950/70 border border-white/5 space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-white font-mono">
                      {personal.email}
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:${personal.email}`}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-neon-blue transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Me an Email</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Lokasi Domisili
                  </div>
                  <div className="text-sm font-medium text-slate-200">
                    {personal.city}, {personal.province}, {personal.country}
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Respon aktif untuk diskusi pemrograman</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl border border-white/10 relative shadow-glass">
              <div className="flex items-center gap-2.5 mb-6">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-heading font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-sm">
                    Terima kasih telah menghubungi saya. Pesan Anda telah diterima dalam simulasi antarmuka.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      NAME <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm placeholder:text-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      EMAIL <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm placeholder:text-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      MESSAGE <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pesan, saran, atau peluang kolaborasi..."
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm placeholder:text-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-neon-blue transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
