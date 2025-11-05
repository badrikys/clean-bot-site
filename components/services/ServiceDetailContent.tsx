'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, CheckCircle, Clock } from 'lucide-react';
import type { ServiceDetail } from '@/lib/services-data';
import { getRelatedServices } from '@/lib/services-data';
import { ServiceCard } from './ServiceCard';
import { PricingCalculator } from './PricingCalculator';
import { ServiceGallery } from './ServiceGallery';
import { BookingForm } from './BookingForm';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ServiceDetailContentProps {
  service: ServiceDetail;
}

export const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({
  service,
}) => {
  const relatedServices = getRelatedServices(service.slug);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-surface py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <ChevronRight size={16} />
            <Link href="/services" className="hover:text-primary transition-colors">
              Услуги
            </Link>
            <ChevronRight size={16} />
            <span className="text-text-primary font-semibold">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                {service.fullDescription}
              </p>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                  <Clock size={20} className="text-primary" />
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                  <Star size={20} className="text-warning fill-warning" />
                  <span className="font-semibold">{service.rating} рейтинг</span>
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                  <CheckCircle size={20} className="text-success" />
                  <span className="font-semibold">{service.completedCount} выполненных</span>
                </div>
              </div>

              {/* Hero Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.heroFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 bg-success/10 px-4 py-3 rounded-lg"
                  >
                    <CheckCircle size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-text-primary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Заказать сейчас
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Рассчитать стоимость
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Gallery Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-surface rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">{service.icon}</div>
                  <p className="text-lg font-semibold text-text-primary">
                    Фото результата
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Что входит в {service.name.toLowerCase()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.whatIncluded.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle
                          size={16}
                          className="text-success mt-0.5 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          {service.additionalServices && service.additionalServices.length > 0 && (
            <div className="mt-12 max-w-4xl mx-auto">
              <Card>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Дополнительные услуги (оплачиваются отдельно)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.additionalServices.map((additionalService, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-surface rounded-lg"
                    >
                      <span className="text-sm text-text-primary">
                        {additionalService.name}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {additionalService.price} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Как проходит {service.name.toLowerCase()}
          </h2>

          <div className="max-w-4xl mx-auto">
            {service.processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <span className="text-sm text-text-secondary font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary">{step.description}</p>
                  {index < service.processSteps.length - 1 && (
                    <div className="w-0.5 h-8 bg-border ml-6 mt-4" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      {(service.slug === 'podderzhka' ||
        service.slug === 'general' ||
        service.slug === 'posle-remonta') && (
        <section id="calculator" className="py-16 bg-surface">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
              Рассчитайте точную стоимость
            </h2>
            <PricingCalculator
              serviceType={service.slug as 'podderzhka' | 'general' | 'remont'}
              basePrice={service.priceFrom}
            />
          </div>
        </section>
      )}

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Преимущества заказа у нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card hover className="text-center h-full">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery />

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Часто задаваемые вопросы
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faq.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {item.question}
                </h3>
                <p className="text-text-secondary">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <BookingForm serviceName={service.name} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
              Вам также может понадобиться
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedServices.slice(0, 3).map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
