'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Phone } from 'lucide-react';
import type { ServiceDetail } from '@/lib/services-data';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  service: ServiceDetail;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ service }) => {
  const scrollToBooking = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-white to-success/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-success rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Освободите субботу —{' '}
              <span className="text-primary">мы сделаем максимум за 4 часа</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              <span className="font-bold text-primary text-3xl">5 990 ₽</span> —
              честная цена за 4 часа уборки. Кухня, санузлы, окна, техника изнутри —{' '}
              <span className="font-semibold text-text-primary">
                всё можно включить в эти 4 часа без скрытых доплат
              </span>
            </p>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-3xl font-bold text-primary mb-1">32 000+</div>
                <div className="text-sm text-text-secondary">выполненных заказов</div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="text-warning fill-warning" size={24} />
                  <span className="text-3xl font-bold text-primary">4.9</span>
                </div>
                <div className="text-sm text-text-secondary">средняя оценка</div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-text-secondary">оплата после уборки</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToCalculator}
                className="text-lg px-8 py-6 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
              >
                Рассчитать стоимость для моей квартиры
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:+74954142743'}
                className="text-lg px-8 py-6 group"
              >
                <Phone size={20} className="mr-2 group-hover:animate-pulse" />
                Позвонить сейчас
              </Button>
            </div>

            {/* Sub-trust elements */}
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-success" />
                <span>Приезжаем через 2 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-success" />
                <span>Работаем в выходные</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-success" />
                <span>Гарантия качества 24ч</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-success/10 rounded-3xl flex items-center justify-center p-12 shadow-2xl">
              {/* Placeholder for image - can be replaced with actual image */}
              <div className="text-center">
                <div className="text-9xl mb-6">🏠</div>
                <div className="text-6xl mb-4">✨</div>
                <p className="text-2xl font-bold text-primary">
                  Результат, которым вы будете довольны
                </p>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-8 right-8 bg-white px-6 py-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-sm font-semibold text-primary">5 990 ₽</div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-white px-6 py-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-sm font-semibold text-success flex items-center gap-2">
                  <CheckCircle size={16} />
                  Без доплат
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
