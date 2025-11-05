'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { ServiceDetail } from '@/lib/services-data';

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card hover className="flex flex-col h-full group">
      <div className="text-5xl mb-4">{service.icon}</div>

      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {service.name}
      </h3>

      <div className="flex items-baseline gap-2 mb-2">
        <div className="text-2xl font-bold text-primary">{service.price}</div>
        {service.duration && (
          <span className="text-sm text-text-secondary">| {service.duration}</span>
        )}
      </div>

      <p className="text-text-secondary mb-4 flex-grow">
        {service.shortDescription}
      </p>

      <ul className="space-y-2 mb-6">
        {service.heroFeatures.slice(0, 4).map((feature, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-sm text-text-secondary"
          >
            <span className="text-success mt-0.5 flex-shrink-0">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-auto">
        <Link href={`/services/${service.slug}`} className="flex-1">
          <Button variant="outline" className="w-full group">
            Подробнее
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </Link>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            // Scroll to calculator or open booking modal
            const calculatorEl = document.getElementById('calculator');
            if (calculatorEl) {
              calculatorEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Заказать
        </Button>
      </div>
    </Card>
  );
};
