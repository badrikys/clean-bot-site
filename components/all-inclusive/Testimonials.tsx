'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    name: 'Мария К.',
    location: 'Москва, Хамовники',
    rating: 5,
    date: 'Октябрь 2024',
    text: 'Боялась доплат, но в итоге заплатила ровно 5990₽. Клинер помыл 4 окна, кухню изнутри (даже духовку!) и всю квартиру. Работал быстро, без воды. Теперь только сюда!',
    highlight: 'Без доплат',
  },
  {
    name: 'Алексей П.',
    location: 'Москва, Крылатское',
    rating: 5,
    date: 'Ноябрь 2024',
    text: 'Заказывал в других компаниях — всегда какие-то доп. услуги накручивали. Здесь реально всё за одну цену. Клинер сам предложил помыть холодильник изнутри, не попросив доплаты. Впечатлён!',
    highlight: 'Клинер работал быстро и качественно',
  },
  {
    name: 'Елена В.',
    location: 'Москва, Тропарёво',
    rating: 5,
    date: 'Сентябрь 2024',
    text: 'У меня 5 окон. Думала, что клинер скажет "это дополнительная услуга". Но нет! Помыл все 5 окон + всю уборку за 4 часа. Честно говорят, что успеют, а что нет.',
    highlight: '5 окон + вся квартира',
  },
  {
    name: 'Дмитрий С.',
    location: 'Москва, Беляево',
    rating: 5,
    date: 'Ноябрь 2024',
    text: 'Был небольшой косяк с плитой. Позвонил — через 2 часа приехал тот же клинер и переделал. Без разговоров, без доплат. Такого отношения давно не видел. Рекомендую!',
    highlight: 'Компания исправила недочёт',
  },
  {
    name: 'Анна М.',
    location: 'Москва, Черёмушки',
    rating: 5,
    date: 'Октябрь 2024',
    text: 'Заказываю уже 3-й месяц подряд. Приезжает один и тот же клинер, уже знает все мои тараканы. Цена не меняется, качество стабильное. Для меня это идеально.',
    highlight: 'Постоянный клиент',
  },
  {
    name: 'Игорь Р.',
    location: 'Москва, Ясенево',
    rating: 5,
    date: 'Октябрь 2024',
    text: 'Трёшка 85 м². Думал, 4 часов не хватит. Клинер честно сказал, что лучше взять 6 часов или расставить приоритеты. Взял 6 — всё сделали идеально. Ценю честность!',
    highlight: 'Большая квартира',
  },
];

export const Testimonials: React.FC = () => {
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
            Что говорят клиенты
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Реальные отзывы о сервисе "Всё включено"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                {/* Quote Icon */}
                <Quote className="text-primary/20 mb-4" size={32} />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-warning fill-warning"
                    />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {testimonial.highlight}
                </div>

                {/* Text */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.location}
                    </p>
                  </div>
                  <p className="text-xs text-text-secondary">{testimonial.date}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Link to all reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://yandex.ru/maps/org/clean_bot/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
          >
            Все 2 847 отзывов на Яндекс.Картах →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
