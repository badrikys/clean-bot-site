'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={24}
                  className={cn(
                    'text-text-muted flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'transform rotate-180'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-6 text-text-secondary">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="tel:+74954142743"
            className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
          >
            Позвоните нам: +7 (495) 414-27-43
          </a>
        </div>
      </div>
    </section>
  );
};
