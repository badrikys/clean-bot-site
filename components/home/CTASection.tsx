'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Check } from 'lucide-react';

export const CTASection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [cleaningType, setCleaningType] = useState('podderzhka');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log({ phone, cleaningType, date });
    setIsSubmitted(true);

    // Сброс через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setPhone('');
      setDate('');
    }, 3000);
  };

  return (
    <section id="cta" className="section bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Закажите уборку прямо сейчас
          </h2>
          <p className="text-xl text-white/90 mb-4">
            Получите скидку 10% на первый заказ
          </p>
          <div className="inline-flex items-center space-x-2 bg-success/20 text-white px-4 py-2 rounded-lg mb-8">
            <Check size={20} />
            <span>Акция действует до конца месяца</span>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-success mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-text-secondary">
                Наш менеджер свяжется с вами в течение 15 минут
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <select
                  value={cleaningType}
                  onChange={(e) => setCleaningType(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="podderzhka">Поддерживающая</option>
                  <option value="general">Генеральная</option>
                  <option value="remont">После ремонта</option>
                </select>

                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full mb-4">
                Заказать со скидкой 10% →
              </Button>

              <p className="text-sm text-text-muted text-center">
                <Check size={16} className="inline mr-1" />
                Нажимая кнопку, вы соглашаетесь с условиями оферты
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
