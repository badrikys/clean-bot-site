'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { FilterTabs, type FilterCategory } from './FilterTabs';
import { ServiceCard } from './ServiceCard';
import { ComparisonTable } from './ComparisonTable';
import { FAQ } from '@/components/home/FAQ';
import { Button } from '@/components/ui/Button';
import { getAllServices } from '@/lib/services-data';
import { COMPANY_INFO } from '@/lib/constants';

export const ServicesPageContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const allServices = getAllServices();

  const filteredServices = allServices.filter((service) => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Все виды клининговых услуг в Москве
            </h1>
            <p className="text-xl md:text-2xl text-accent mb-8">
              Профессиональная уборка любой сложности с гарантией качества
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>Рейтинг 4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>32 000+ уборок</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>Оплата после</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧹</span>
                <span>Karcher</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-text-secondary">
                Услуги в этой категории скоро появятся
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Не нашли нужную услугу?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Позвоните нам, и мы подберем индивидуальное решение
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone size={20} className="mr-2" />
                  {COMPANY_INFO.phone}
                </Button>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-surface text-primary"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs for SEO */}
      <div className="sr-only">
        <nav aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <span>Услуги</span>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};
