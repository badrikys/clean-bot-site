'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceDetail } from '@/lib/services-data';
import { Button } from '@/components/ui/Button';

interface ProcessStepsProps {
  service: ServiceDetail;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ service }) => {
  const scrollToBooking = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            Как проходит уборка — шаг за шагом
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Полная прозрачность на каждом этапе
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {service.processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6 mb-8">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-text-primary pr-4">
                      {step.title}
                    </h3>
                    {step.duration && step.duration !== '-' && (
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full flex-shrink-0">
                        {step.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < service.processSteps.length - 1 && (
                <div className="w-0.5 h-8 bg-primary/30 ml-7 mb-4" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg" onClick={scrollToBooking}>
            Оставить заявку
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
