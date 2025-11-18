'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Lock, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const uspItems = [
  {
    icon: Clock,
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10',
    title: 'Платите только за время — всё остальное включено',
    price: '5 990 ₽ за 4 часа работы',
    features: [
      'Окна, техника изнутри, посуда, глажка — без доплат',
      'Не нужно считать каждый шкаф и окно',
      'Простая и понятная ценовая модель',
    ],
  },
  {
    icon: Lock,
    iconColor: 'text-success',
    bgColor: 'bg-success/10',
    title: 'Прозрачная цена — всё ясно с самого начала',
    price: 'В 95% случаев цена = 5 990 ₽',
    features: [
      'Итоговая сумма известна до начала работы',
      'Возможные доплаты (выезд за МКАД, оборудование) оговариваем заранее',
      'Никаких скрытых платежей',
    ],
  },
  {
    icon: Shield,
    iconColor: 'text-warning',
    bgColor: 'bg-warning/10',
    title: 'Оплата после — сначала результат, потом деньги',
    price: 'Риск на нас, не на вас',
    features: [
      'Видите чистоту — платите',
      'Наличные, карта или СБП',
      'Если недовольны — бесплатная доработка или возврат',
    ],
  },
];

export const USPSection: React.FC = () => {
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
            Как работает «Всё включено»
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Три простых принципа, которые делают наш сервис честным и удобным
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {uspItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6`}>
                  <item.icon className={`${item.iconColor}`} size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Price/Highlight */}
                <div className="bg-primary/5 rounded-xl px-4 py-3 mb-6">
                  <p className="text-lg font-bold text-primary text-center">
                    {item.price}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
