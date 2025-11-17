'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

const comparisonData = [
  {
    parameter: 'Цена в рекламе',
    typical: 'От 2 000 ₽',
    cleanbot: '5 990 ₽',
    typicalBad: false,
  },
  {
    parameter: 'Реальная цена с доплатами',
    typical: '8-10 000 ₽',
    cleanbot: '5 990 ₽',
    typicalBad: true,
  },
  {
    parameter: 'Что включено',
    typical: 'Базовый пакет (пол, пыль). Окна, техника, шкафы — отдельно',
    cleanbot: 'Всё, без ограничений',
    typicalBad: true,
  },
  {
    parameter: 'Оплата',
    typical: 'Предоплата 50-100%',
    cleanbot: 'После работы',
    typicalBad: true,
  },
  {
    parameter: 'Гарантия',
    typical: '"Мы не отвечаем за..."',
    cleanbot: 'Возврат или бесплатная доработка',
    typicalBad: true,
  },
  {
    parameter: 'Мотивация клинера',
    typical: 'Зарплата фиксированная (качество не важно)',
    cleanbot: '25% премии = ваша оценка',
    typicalBad: true,
  },
];

export const ComparisonSection: React.FC = () => {
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
            Clean Bot vs типичная клининговая компания
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Честное сравнение без прикрас
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Header */}
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-6 font-bold text-text-primary">
                    Параметр
                  </th>
                  <th className="text-center p-6 font-bold text-text-secondary">
                    Типичная компания
                  </th>
                  <th className="text-center p-6 font-bold text-primary bg-primary/5">
                    Clean Bot
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-t border-border hover:bg-surface/50 transition-colors"
                  >
                    <td className="p-6 font-semibold text-text-primary">
                      {row.parameter}
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.typicalBad && (
                          <X size={20} className="text-danger flex-shrink-0" />
                        )}
                        <span className={row.typicalBad ? 'text-text-secondary' : ''}>
                          {row.typical}
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle size={20} className="text-success flex-shrink-0" />
                        <span className="font-semibold text-primary">
                          {row.cleanbot}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-primary/10 rounded-2xl p-8 text-center"
          >
            <p className="text-xl font-bold text-primary">
              Мы не самые дешёвые в рекламе. Но мы — самые честные по итоговой цене.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
