import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold text-primary mb-4">
              🤖 Clean Bot
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Профессиональная клининговая компания с {COMPANY_INFO.foundedYear} года.
              {COMPANY_INFO.completedCleanings} выполненных уборок.
            </p>
            <div className="flex items-center space-x-2 text-warning">
              <span className="text-xl">⭐</span>
              <span className="font-semibold">{COMPANY_INFO.rating}/5</span>
              <span className="text-text-muted text-sm">на Яндекс.Картах</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Уборка квартир
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Мытье окон
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Химчистка мебели
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Подписки
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#benefits"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Наша команда
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Как мы работаем
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-text-secondary text-sm">
                  <MapPin size={16} />
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-text-secondary text-sm">
                  <Clock size={16} />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {COMPANY_INFO.foundedYear}-{currentYear} Clean Bot | {COMPANY_INFO.founder} | {COMPANY_INFO.inn}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Публичная оферта
              </Link>
              <Link
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
