'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Globe, BookOpen, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="gradient-text">À propos</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Découvrez mon parcours et mon expertise au service de vos projets
            </p>
          </div>

          {/* Main About Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-xl p-8 space-y-4 hover:border-primary/20 transition-colors">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  Mon parcours
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {portfolioData.summary}
                </p>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Avec plus de trois décennies d&apos;expérience, j&apos;ai eu le privilège de piloter des programmes d&apos;envergure dans des environnements complexes et exigeants. Mon approche combine rigueur méthodologique, leadership adaptatif et focus constant sur les résultats.
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 space-y-6 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Atouts clés</h3>
              <div className="space-y-4">
                {[
                  { label: 'Expertise', value: '32 ans' },
                  { label: 'Projets', value: '30+' },
                  { label: 'Clients', value: '50+' },
                  { label: 'Secteurs', value: '10+' },
                ].map((stat, i) => (
                  <div key={i} className="pb-4 border-b border-border last:border-0">
                    <p className="text-xs text-foreground/60 uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-2xl font-bold mt-1 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages and Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-primary" />
                <span className="gradient-primary-secondary">Langues</span>
              </h3>
              <div className="space-y-4">
                {portfolioData.languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                    <span className="text-foreground font-medium">{lang.language}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full border border-border">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover:border-secondary/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="gradient-accent-highlight">Formation</span>
              </h3>
              <div className="space-y-5">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="pb-5 border-b border-border last:border-0">
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-sm text-foreground/70">{edu.school}</p>
                    <p className="text-xs text-foreground/50 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
