'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b-2 border-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-highlight rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-secondary/30 transition-all">
              <span className="text-sm font-bold text-primary-foreground">SZ</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">Serge Zimmermann</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-secondary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-highlight text-primary-foreground rounded-lg text-sm font-bold transition-all duration-300 glow-primary"
            >
              Me contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-secondary/30 bg-background-deep/80 backdrop-blur-md py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground/70 hover:text-secondary transition-colors pl-4 py-2 border-l-2 border-transparent hover:border-secondary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="block mx-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg text-sm font-bold hover:from-secondary hover:to-highlight transition-all text-center glow-primary"
              onClick={() => setIsOpen(false)}
            >
              Me contacter
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
