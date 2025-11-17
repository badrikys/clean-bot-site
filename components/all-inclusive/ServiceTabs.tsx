'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { ServiceDetail } from '@/lib/services-data';
import { Card } from '@/components/ui/Card';

interface ServiceTabsProps {
  service: ServiceDetail;
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState(0);

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
            За 4 часа клинер сделает максимум по вашим приоритетам
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Вы выбираете, что важнее — клинер делает это в первую очередь
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {service.whatIncluded.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface text-text-secondary hover:bg-primary/10'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {service.whatIncluded[activeTab].title}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.whatIncluded[activeTab].items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={20}
                        className="text-success mt-0.5 flex-shrink-0"
                      />
                      <span className="text-text-primary">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="bg-warning/10 border-2 border-warning/30 rounded-2xl p-6 text-center">
            <p className="text-lg font-bold text-text-primary">
              ⚠️ Единственное ограничение — время 4 часа
            </p>
            <p className="text-text-secondary mt-2">
              Вы выбираете приоритеты, клинер делает максимум. Если нужно больше
              времени — честно предупредим заранее
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
