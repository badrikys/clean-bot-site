'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { COMPANY_INFO, HERO_FEATURES } from '@/lib/constants';
import { Calculator } from './Calculator';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-surface via-white to-surface py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 text-balance">
              Профессиональная уборка квартир в Москве от 3 990 ₽
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              {COMPANY_INFO.completedCleanings} выполненных уборок с {COMPANY_INFO.foundedYear} года • Рейтинг {COMPANY_INFO.rating} ⭐ на Яндекс.Картах
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {HERO_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-card"
                >
                  <Check size={20} className="text-success flex-shrink-0" />
                  <span className="text-text-primary font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator */}
          <Calculator />
        </div>
      </div>
    </section>
  );
};
