'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const columns = [
  {
    icon: TrendingUp,
    iconColor: 'text-success',
    bgColor: 'bg-success/10',
    title: 'Мотивация клинера',
    items: [
      { label: 'Базовая ставка', value: '3 000 ₽' },
      { label: 'Премия за 5★', value: '+750 ₽ (25%)' },
      { label: 'Итого при хорошей оценке', value: '3 750 ₽', highlight: true },
      { label: 'При плохой оценке', value: '3 000 ₽', muted: true },
    ],
    footer: 'Клинер теряет 750 ₽, если вы недовольны',
  },
  {
    icon: TrendingDown,
    iconColor: 'text-danger',
    bgColor: 'bg-danger/10',
    title: 'Невыгодность компании',
    items: [
      { label: 'Продление', value: '+1 290 ₽' },
      { label: 'Потеря клиента', value: '-50 000 ₽/год', highlight: true },
      { label: 'Плохой отзыв', value: '-10 новых клиентов' },
    ],
    footer: 'Развод на 1 290 ₽ = потеря 100 000 ₽',
  },
  {
    icon: Shield,
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10',
    title: 'Ваша гарантия',
    items: [
      { label: 'Гарантия "Антиразвод"', value: '🛡️', highlight: true },
      { label: 'Если клинер тянул время:', value: '' },
      { label: '• Продление не оплачиваете', value: '✓' },
      { label: '• Возврат 50% основной суммы', value: '✓' },
    ],
    footer: 'Риск на нас, не на вас',
  },
];

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
            Почему клинеру невыгодно тянуть время?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Математика, которая гарантирует честность
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${column.bgColor} flex items-center justify-center mb-4`}>
                  <column.icon className={column.iconColor} size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  {column.title}
                </h3>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {column.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-center justify-between ${
                        item.highlight ? 'bg-primary/5 -mx-2 px-2 py-2 rounded-lg' : ''
                      } ${item.muted ? 'opacity-50' : ''}`}
                    >
                      <span className={`text-sm ${item.highlight ? 'font-bold' : ''}`}>
                        {item.label}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          item.highlight ? 'text-primary text-lg' : 'text-text-secondary'
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className={`${column.bgColor} rounded-xl p-4 text-center`}>
                  <p className={`text-sm font-bold ${column.iconColor}`}>
                    {column.footer}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
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
                  жалоб на "тянули время"
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
