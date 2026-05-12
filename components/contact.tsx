'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { 
  Mail, Linkedin, Phone, MapPin, ArrowRight, 
  Calendar, Clock, Shield, CheckCircle2, 
  Briefcase, Sparkles 
} from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-container bg-gradient-professional">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Parlons de votre projet</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Prêt à <span className="gradient-text">collaborer</span> ?
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Discutons de votre projet et comment je peux vous aider à sécuriser vos objectifs.
              Audit, implémentation ou accompagnement de transition.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card - existant */}
            <motion.a
              href={`mailto:${portfolioData.contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-card/40 backdrop-blur-sm border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-primary font-semibold group-hover:text-secondary transition-colors break-all">
                {portfolioData.contact.email}
              </p>
              <p className="text-xs text-foreground/50 mt-2 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Réponse sous 24h
              </p>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-card/40 backdrop-blur-sm border border-border hover:border-secondary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Téléphone</h3>
              </div>
              <p className="text-secondary font-semibold group-hover:text-primary transition-colors">
                {portfolioData.contact.phone}
              </p>
              <p className="text-xs text-foreground/50 mt-2 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Lundi - Vendredi, 9h-18h
              </p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-highlight/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-highlight" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Localisation</h3>
              </div>
              <p className="text-foreground font-semibold">
                {portfolioData.contact.location}
              </p>
              <p className="text-xs text-foreground/50 mt-2 flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                Télétravail & déplacements
              </p>
            </motion.div>
          </div>

          {/* Calendly Section - MIS EN AVANT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-highlight rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500" />
            
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-highlight/5 border border-primary/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-sm font-medium text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Prise de rendez-vous simplifiée</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Un créneau en <span className="gradient-text">2 minutes</span>
                  </h3>
                  <p className="text-foreground/70 max-w-lg">
                    Réservez un créneau directement sur mon Calendly. Échange sans engagement 
                    pour discuter de votre projet et de mes disponibilités.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Sans engagement</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span>30 min offertes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <CheckCircle2 className="w-4 h-4 text-highlight" />
                      <span>Confirmation immédiate</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={portfolioData.contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Prendre rendez-vous sur Calendly</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Professional Networks - AVEC IMAGES PNG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-foreground/50 mb-4">
                Retrouvez-moi sur les réseaux professionnels
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {/* LinkedIn */}
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-card/40 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-foreground/60 group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>

                {/* Malt - Avec image PNG + filtre blanc */}
                <a
                  href={portfolioData.social.malt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-card/40 backdrop-blur-sm border border-border hover:border-secondary/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/10"
                  aria-label="Malt"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/malt.png"
                      alt="Malt"
                      fill
                      className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Malt
                  </span>
                </a>

                {/* Collective - Avec image PNG + filtre blanc */}
                <a
                  href={portfolioData.social.collective}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-card/40 backdrop-blur-sm border border-border hover:border-highlight/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-highlight/10"
                  aria-label="Collective"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/collective.png"
                      alt="Collective"
                      fill
                      className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Collective
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="group relative w-14 h-14 bg-card/40 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-foreground/60 group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Note de confiance */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <p className="text-xs text-foreground/40 flex items-center justify-center gap-2">
              <Shield className="w-3 h-3" />
              Vos informations sont confidentielles
              <Shield className="w-3 h-3" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}