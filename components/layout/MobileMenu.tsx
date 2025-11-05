'use client';

import React from 'react';
import { X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="text-xl font-bold text-primary">🤖 Clean Bot</div>
            <button
              onClick={onClose}
              className="p-2 text-text-muted hover:text-text-primary"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="block w-full text-left text-lg font-medium text-text-primary hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-4 pt-8 border-t border-border">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center space-x-3 text-text-primary hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span className="font-semibold">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center space-x-3 text-text-secondary">
                <MapPin size={20} />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-3 text-text-secondary">
                <Clock size={20} />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-border">
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                handleLinkClick('#calculator');
              }}
            >
              Заказать уборку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
