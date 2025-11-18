'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const painPoints = [
  {
    icon: '😓',
    title: 'На уборку уходит весь выходной',
    description: 'Хочется отдохнуть, но приходится весь день убираться вместо того, чтобы провести время с семьёй',
  },
  {
    icon: '💸',
    title: 'Боитесь скрытых доплат',
    description: 'В рекламе одна цена, а по факту другая. Каждое окно, каждый шкаф считают отдельно',
  },
  {
    icon: '🤷',
    title: 'Не знаете, сколько стоит уборка',
    description: 'Каждая компания считает по-своему. Непонятно, сколько заплатите в итоге',
  },
  {
    icon: '⏰',
    title: 'Не хотите, чтобы уборка растягивалась на весь день',
    description: 'Важно, чтобы клинер работал собранно и успел максимум за разумное время',
  },
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Знакомо?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Мы создали сервис, который решает все эти проблемы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary/20">
                <div className="text-5xl mb-4">{pain.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {pain.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pain.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
