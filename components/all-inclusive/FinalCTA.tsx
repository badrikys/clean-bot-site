'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export const FinalCTA: React.FC = () => {
  const [formType, setFormType] = useState<'quick' | 'detailed'>('quick');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rooms, setRooms] = useState('');
  const [area, setArea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, send data to backend
    console.log({ formType, name, phone, rooms, area });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="final-cta" className="py-16 bg-gradient-to-br from-primary/5 via-white to-success/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Готовы освободить свою субботу?
          </h2>

          {/* Deadline Element */}
          <div className="inline-block bg-warning/10 border-2 border-warning/30 rounded-xl px-6 py-3 mb-6">
            <p className="text-lg font-bold text-warning flex items-center gap-2 justify-center">
              🔥 Акция действует до конца месяца
            </p>
            <p className="text-text-primary mt-1">
              <span className="line-through text-text-secondary">6 990 ₽</span>{' '}
              <span className="text-2xl font-bold text-primary">5 990 ₽</span>
            </p>
          </div>
        </motion.div>

        {/* Form Type Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFormType('quick')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                formType === 'quick'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary/10'
              }`}
            >
              Быстрый заказ
            </button>
            <button
              onClick={() => setFormType('detailed')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                formType === 'detailed'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary/10'
              }`}
            >
              Рассчитать точную стоимость
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={64} className="text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Заявка принята!
                </h3>
                <p className="text-text-secondary">
                  Мы перезвоним вам в течение 15 минут
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formType === 'quick' ? (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        Ваше имя
                      </label>
                      <Input
                        type="text"
                        placeholder="Иван"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        Номер телефона
                      </label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        Количество комнат
                      </label>
                      <Input
                        type="number"
                        placeholder="2"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        Площадь (м²)
                      </label>
                      <Input
                        type="number"
                        placeholder="60"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2">
                        Номер телефона
                      </label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {formType === 'quick' ? 'Перезвоните мне' : 'Получить расчёт'}
                </Button>

                {/* Trust elements */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle size={14} className="text-success" />
                    <span>Перезвоним за 15 минут</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle size={14} className="text-success" />
                    <span>Рассчитаем точную стоимость</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle size={14} className="text-success" />
                    <span>Подберём удобное время</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle size={14} className="text-success" />
                    <span>Никаких спам-звонков</span>
                  </div>
                </div>
              </form>
            )}
          </Card>
        </div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-text-secondary mb-4">Или свяжитесь удобным способом:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = 'tel:+74954142743'}
            >
              <Phone size={20} className="mr-2" />
              8 (495) 414-27-43
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://t.me/CleanBot_msk', '_blank')}
            >
              <MessageCircle size={20} className="mr-2" />
              Telegram
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://wa.me/74954142743', '_blank')}
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
