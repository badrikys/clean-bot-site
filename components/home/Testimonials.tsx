'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card';

// Временные данные отзывов (в будущем можно заменить на API Яндекс.Карт)
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Мария Петрова',
    rating: 5,
    date: '2 дня назад',
    text: 'Отличная команда! Делали генеральную уборку после ремонта. Приехали вовремя, работали быстро и качественно. Квартира блестит! Особенно понравилось, что использовали профессиональное оборудование Karcher.',
  },
  {
    id: 2,
    name: 'Алексей Иванов',
    rating: 5,
    date: '5 дней назад',
    text: 'Заказываю уборку каждую неделю уже полгода. Всегда один и тот же клинер, знает все особенности квартиры. Очень удобно, что можно оплатить после приемки работы. Цены адекватные.',
  },
  {
    id: 3,
    name: 'Екатерина Смирнова',
    rating: 5,
    date: 'неделю назад',
    text: 'Первый раз заказывала клининг, очень переживала. Но все прошло отлично! Менеджер подробно все объяснил, клинер приехал точно в назначенное время. Убрали идеально, даже в труднодоступных местах.',
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    rating: 5,
    date: '2 недели назад',
    text: 'Делали химчистку дивана и мытье окон. Результат превзошел ожидания! Диван как новый, пятна от кофе и вина полностью исчезли. Окна блестят. Спасибо за профессионализм!',
  },
  {
    id: 5,
    name: 'Ольга Новикова',
    rating: 5,
    date: '3 недели назад',
    text: 'Заказывала уборку после ремонта. Строительной пыли было очень много. Клинеры справились на отлично! Работали целый день, но убрали все до блеска. Цена полностью оправдана качеством.',
  },
  {
    id: 6,
    name: 'Сергей Волков',
    rating: 5,
    date: 'месяц назад',
    text: 'Пользуюсь подпиской Premium. 4 уборки в месяц + скидки на доп. услуги. Очень выгодно и удобно! Закрепленный клинер знает все наши предпочтения. Квартира всегда чистая.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            Более 500 отзывов на Яндекс.Картах с рейтингом 4.9
          </p>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="fill-warning text-warning"
              />
            ))}
            <span className="ml-2 text-xl font-semibold text-text-primary">
              4.9/5
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-muted">{testimonial.date}</p>
                </div>
                <Quote size={24} className="text-accent opacity-50" />
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-warning text-warning"
                  />
                ))}
              </div>

              <p className="text-text-secondary text-sm flex-grow">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://yandex.ru/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors font-semibold"
          >
            Читать все отзывы на Яндекс.Картах →
          </a>
        </div>
      </div>
    </section>
  );
};
