'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail, Github, Heart } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-highlight rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                <span className="text-sm font-bold text-primary-foreground">SZ</span>
              </div>
              <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Serge Zimmermann
              </span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Directeur de projet & Manager de transition avec 32 ans d&apos;expérience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-secondary transition-colors flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all" />
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-foreground/70 hover:text-secondary transition-colors flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all" />
                  Expérience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-foreground/70 hover:text-secondary transition-colors flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all" />
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-secondary transition-colors flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links - avec Malt & Collective */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Professionnel</h4>
            <div className="flex flex-wrap gap-3">
              {/* LinkedIn */}
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 bg-card border border-border hover:border-primary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-background border border-border px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  LinkedIn
                </span>
              </a>

              {/* Malt - avec logo PNG */}
              <a
                href={portfolioData.social.malt}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 bg-card border border-border hover:border-secondary/50 hover:bg-secondary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Malt"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/malt.png"
                    alt="Malt"
                    fill
                    className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-background border border-border px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Malt
                </span>
              </a>

              {/* Collective - avec logo PNG */}
              <a
                href={portfolioData.social.collective}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 bg-card border border-border hover:border-highlight/50 hover:bg-highlight/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Collective"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/collective.png"
                    alt="Collective"
                    fill
                    className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-background border border-border px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Collective
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group relative w-10 h-10 bg-card border border-border hover:border-primary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-background border border-border px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Email
                </span>
              </a>
            </div>

            {/* Note additionnelle */}
            <p className="text-xs text-foreground/40 mt-4">
              Disponible sur les principales plateformes freelance
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>
            &copy; {currentYear} Serge Zimmermann. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}