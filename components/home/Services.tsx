'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SERVICES_DATA } from '@/lib/constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Профессиональный клининг для любых задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <Card key={service.id} hover className="flex flex-col h-full">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {service.name}
              </h3>
              <div className="text-2xl font-bold text-primary mb-2">
                {service.price}
              </div>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-sm text-text-secondary"
                  >
                    <span className="text-success mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full group"
                onClick={() => {
                  const calculatorEl = document.getElementById('calculator');
                  calculatorEl?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Подробнее
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
