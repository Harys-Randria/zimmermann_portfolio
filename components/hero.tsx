'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-professional">
      {/* Fond avec tes vraies couleurs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-highlight/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Badge - plus élégant */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary tracking-wide">
                Disponible pour mission
              </span>
            </div>

            {/* Titre + sous-titre */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.2] tracking-tight">
                Piloter vos projets vers le
                <span className="gradient-text block mt-2"> succès</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                Directeur de projet avec 32 ans d&apos;expérience en pilotage de programmes complexes, 
                transformation SI et management de transition.
              </p>
            </div>

            {/* CTA Buttons - plus aérés */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                Démarrer une conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#experience"
                className="px-8 py-4 border border-border hover:border-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                Voir mon expérience
              </a>
            </div>

            {/* Stats - design plus moderne */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: '32+', label: 'Ans d\'expérience', color: 'from-primary to-secondary' },
                { value: '30+', label: 'Projets complétés', color: 'from-secondary to-highlight' },
                { value: '50+', label: 'Clients satisfaits', color: 'from-highlight to-primary' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image avec effet moderne */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Cercle de fond décoratif */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-highlight/20 rounded-full blur-2xl" />
              
              {/* Cadre image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-card/30 backdrop-blur-sm">
                <Image
                  src="/zimmermann.jpg"
                  alt="Serge Zimmermann"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - plus discret */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2 text-foreground/40 text-xs">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}