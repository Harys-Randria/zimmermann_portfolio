'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header - plus épuré */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Parcours professionnel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Expérience <span className="gradient-text">professionnelle</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Plus de 30 ans d&apos;expertise en pilotage de projets et programmes complexes
            </p>
          </div>

          {/* Timeline - design alterné gauche/droite pour plus de modernité */}
          <div className="relative">
            {/* Ligne verticale décorative */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
            
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Point temporel sur la timeline */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10 hidden md:block" />
                  
                  {/* Contenu - côté gauche ou droit */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                      
                      {/* En-tête avec timeline compacte pour mobile */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-sm text-primary/80 mb-3 md:hidden">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                          {exp.role}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-secondary" />
                            <span className="font-semibold text-secondary">
                              {exp.company}
                            </span>
                            {exp.sector && (
                              <span className="text-xs text-foreground/50">{exp.sector}</span>
                            )}
                          </div>
                          
                          {/* Date desktop */}
                          <div className="hidden md:flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary/60" />
                            <span className="text-sm text-foreground/60">{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Technologies - chips */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Réalisations */}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                          Principales réalisations
                        </p>
                        <ul className="space-y-3">
                          {exp.achievements.slice(0, 5).map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                              <CheckCircle2 className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0 transition-transform group-hover/item:scale-110" />
                              <span className="text-sm text-foreground/70 leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                          {exp.achievements.length > 5 && (
                            <li className="text-sm text-primary/60 pl-7">
                              + {exp.achievements.length - 5} autres réalisations
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}