'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, DollarSign, Calendar, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const advantages = [
  {
    icon: Calendar,
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10',
    title: '6 лет опыта',
    description: 'Работаем с 2018 года\n32 000+ выполненных заказов',
  },
  {
    icon: Star,
    iconColor: 'text-warning',
    bgColor: 'bg-warning/10',
    title: 'Высокая оценка',
    description: 'Средний рейтинг 4.9 из 5\n2 847 отзывов на Яндекс.Картах',
  },
  {
    icon: DollarSign,
    iconColor: 'text-success',
    bgColor: 'bg-success/10',
    title: 'Честность',
    description: 'Фиксированные цены\nБез скрытых доплат',
  },
  {
    icon: Shield,
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10',
    title: 'Прозрачность',
    description: 'Оплата после работы\nВидите результат — платите',
  },
  {
    icon: Award,
    iconColor: 'text-danger',
    bgColor: 'bg-danger/10',
    title: 'Ответственность',
    description: 'Недовольны — возврат или бесплатная доработка\nГарантия на все работы',
  },
  {
    icon: Users,
    iconColor: 'text-success',
    bgColor: 'bg-success/10',
    title: 'Профессионализм',
    description: 'Обученные клинеры\nПрофессиональная химия',
  },
];

export const WhyCleanBot: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            Почему 32 000+ клиентов выбрали Clean Bot
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Цифры и факты, которые говорят сами за себя
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 text-center hover:shadow-xl transition-all">
                <div className={`w-16 h-16 rounded-2xl ${advantage.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <advantage.icon className={advantage.iconColor} size={32} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                  {advantage.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="primary" size="lg" onClick={scrollToBooking}>
            Убедиться самому — заказать уборку
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
