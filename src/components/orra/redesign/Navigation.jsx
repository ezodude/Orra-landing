import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-sm border-b border-amber-400/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
          >
            <span className="text-3xl">🪡</span>
            <span className="ml-2 text-black">orra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-600 hover:text-black font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="text-slate-600 hover:text-black font-medium transition-colors"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-black font-medium transition-colors"
            >
              Services
            </button>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/orra-dev/orra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-black transition-colors p-2"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Button
              variant="primary"
              href="https://cal.com/orra-dev/agent-apps-to-prod"
              className="hidden sm:inline-flex"
            >
              Build With Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
