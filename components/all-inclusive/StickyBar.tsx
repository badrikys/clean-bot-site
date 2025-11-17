'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-border"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="text-2xl">⭐</div>
                <div className="hidden md:block">
                  <div className="font-bold text-primary">Clean Bot</div>
                  <div className="text-xs text-text-secondary">
                    5 990 ₽ за 4 часа | Оплата после
                  </div>
                </div>
              </div>

              {/* Mobile: Just price */}
              <div className="md:hidden text-center">
                <div className="text-xl font-bold text-primary">5 990 ₽</div>
                <div className="text-xs text-text-secondary">Оплата после</div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.href = 'tel:+74954142743'}
                  className="hidden sm:flex"
                >
                  <Phone size={16} className="mr-2" />
                  <span className="hidden lg:inline">8 (495) 414-27-43</span>
                  <span className="lg:hidden">Позвонить</span>
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={scrollToBooking}
                >
                  Заказать
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
