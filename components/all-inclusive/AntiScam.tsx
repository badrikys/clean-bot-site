'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const AntiScam: React.FC = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Почему клинеру выгодно работать быстро и качественно
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Простая система мотивации, чтобы вам было комфортно
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Мотивация клинера */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-8">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mb-4">
                <Award className="text-success" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Мотивация клинера
              </h3>

              {/* Text instead of table */}
              <p className="text-text-secondary leading-relaxed">
                Наши клинеры получают базовую оплату за заказ и дополнительную премию за оценку 5★. Чем выше ваша оценка, тем больше их доход. Поэтому им выгодно работать аккуратно, быстро и без лишних вопросов.
              </p>
            </Card>
          </motion.div>

          {/* Ваша гарантия */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="h-full p-8">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="text-primary" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Ваша гарантия
              </h3>
              <div className="text-sm font-semibold text-primary mb-6">
                Гарантия качества уборки
              </div>

              {/* New text */}
              <p className="text-text-secondary leading-relaxed">
                Если вам не понравится качество уборки или покажется, что клинер потратил время неэффективно, мы разберёмся в ситуации и предложим решение: бесплатную доработку или частичный возврат.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Нам важно, чтобы вы остались довольны.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">18%</div>
                <div className="text-sm text-text-secondary">
                  заказов с продлением
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  (клиент сам попросил)
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">4.9</div>
                <div className="text-sm text-text-secondary">средняя оценка</div>
                <div className="text-xs text-text-secondary mt-1">
                  из 32 000+ заказов
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">&lt;1%</div>
                <div className="text-sm text-text-secondary">
                  обращений по качеству уборки
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  статистика за 2024 год
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
