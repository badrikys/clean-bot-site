'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">
                🤖 Clean Bot
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                <Phone size={20} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <Button
                size="md"
                onClick={() => {
                  const calculatorEl = document.getElementById('calculator');
                  calculatorEl?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Заказать уборку
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};
