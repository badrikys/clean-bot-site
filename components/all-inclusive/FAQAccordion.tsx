'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ServiceDetail } from '@/lib/services-data';
import { Card } from '@/components/ui/Card';

interface FAQAccordionProps {
  service: ServiceDetail;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ service }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Ответы на частые вопросы
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Всё, что нужно знать перед заказом
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {service.faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card
                className={`cursor-pointer transition-all ${
                  openIndex === index ? 'shadow-xl' : 'shadow-md'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6">
                  {/* Question */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-text-primary">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`text-primary flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-text-secondary mt-4 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
