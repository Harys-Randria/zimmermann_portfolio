'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Zap, ChevronRight, Star, TrendingUp, Users, Code, FileText, Briefcase } from 'lucide-react';

// Icônes par catégorie pour plus de personnalisation
const categoryIcons: Record<string, React.ReactNode> = {
  "Pilotage de Programmes": <TrendingUp className="w-5 h-5" />,
  "Management & Transformation": <Users className="w-5 h-5" />,
  Méthodologies: <Zap className="w-5 h-5" />,
  Technologies: <Code className="w-5 h-5" />,
  Contractualisation: <FileText className="w-5 h-5" />,
  "Secteurs d'Expertise": <Briefcase className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="section-container bg-gradient-professional">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header - plus élégant */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Expertise & savoir-faire</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Compétences <span className="gradient-text">clés</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Un socle de compétences solide pour piloter vos projets avec excellence
            </p>
          </div>

          {/* Skills Grid - améliorée */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolioData.skillsByCategory).map(
              ([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  {/* Carte avec effet glassmorphism */}
                  <div className="relative h-full bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                    
                    {/* Dégradé d'arrière-plan au hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-highlight/0 group-hover:from-primary/3 group-hover:via-secondary/3 group-hover:to-highlight/5 transition-all duration-500" />
                    
                    {/* En-tête de catégorie */}
                    <div className="relative mb-6 pb-4 border-b border-border group-hover:border-primary/20 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                            {categoryIcons[category] || <Star className="w-5 h-5 text-primary" />}
                          </div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {category}
                          </h3>
                        </div>
                        <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Liste des compétences */}
                    <div className="relative flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.02 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group/skill px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default border bg-card/50 backdrop-blur-sm"
                          style={{
                            borderColor: `var(--border)`,
                          }}
                        >
                          <span className="bg-gradient-to-r from-foreground/80 to-foreground/60 bg-clip-text text-transparent group-hover/skill:from-primary group-hover/skill:to-secondary group-hover/skill:bg-clip-text transition-all duration-200">
                            {skill}
                          </span>
                        </motion.span>
                      ))}
                    </div>

                    {/* Indicateur de nombre de compétences */}
                    <div className="relative mt-6 pt-3 text-xs text-foreground/40 border-t border-border/50">
                      {skills.length} compétence{skills.length > 1 ? 's' : ''}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Badge supplémentaire - valeur ajoutée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-highlight/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-highlight" />
              <span className="text-sm font-medium text-foreground/80">
                Veille technologique continue • Formation permanente • Adaptabilité
              </span>
              <Star className="w-4 h-4 text-highlight" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}