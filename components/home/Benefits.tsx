import React from 'react';
import { Card } from '@/components/ui/Card';
import { BENEFITS_DATA } from '@/lib/constants';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Почему выбирают Clean Bot
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Мы ценим ваше доверие и гарантируем высокое качество услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_DATA.map((benefit, index) => (
            <Card key={index} className="text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
