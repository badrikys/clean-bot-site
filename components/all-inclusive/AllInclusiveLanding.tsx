'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { ServiceDetail } from '@/lib/services-data';
import { getRelatedServices } from '@/lib/services-data';
import { ServiceCard } from '../services/ServiceCard';

// Import sub-components
import { HeroSection } from './HeroSection';
import { PainPoints } from './PainPoints';
import { USPSection } from './USPSection';
import { ServiceTabs } from './ServiceTabs';
import { TimeCalculator } from './TimeCalculator';
import { AntiScam } from './AntiScam';
import { Testimonials } from './Testimonials';
import { ProcessSteps } from './ProcessSteps';
import { FAQAccordion } from './FAQAccordion';
import { CoverageMap } from './CoverageMap';
import { WhyCleanBot } from './WhyCleanBot';
import { ComparisonSection } from './ComparisonSection';
import { FinalCTA } from './FinalCTA';
import { StickyBar } from './StickyBar';

interface AllInclusiveLandingProps {
  service: ServiceDetail;
}

export const AllInclusiveLanding: React.FC<AllInclusiveLandingProps> = ({
  service,
}) => {
  const relatedServices = getRelatedServices(service.slug);

  return (
    <>
      {/* Sticky Bar - appears after scroll */}
      <StickyBar />

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

      {/* 1. Hero Section */}
      <HeroSection service={service} />

      {/* 2. Pain Points (Проблематизация) */}
      <PainPoints />

      {/* 3. USP (Уникальное предложение) */}
      <USPSection />

      {/* 4. What's Included with Tabs */}
      <ServiceTabs service={service} />

      {/* 5. Time Calculator (Калькулятор/Квалификатор) */}
      <TimeCalculator />

      {/* 6. Motivation and Quality Guarantee Block (Мотивация и гарантии качества) */}
      <AntiScam />

      {/* 7. Testimonials (Отзывы) */}
      <Testimonials />

      {/* 8. Process Steps (Как проходит уборка) */}
      <ProcessSteps service={service} />

      {/* 9. FAQ */}
      <FAQAccordion service={service} />

      {/* 10. Coverage Map (Зона покрытия) */}
      <CoverageMap />

      {/* 11. Why Clean Bot (О компании) */}
      <WhyCleanBot />

      {/* 12. Comparison with Competitors */}
      <ComparisonSection />

      {/* 13. Final CTA */}
      <FinalCTA />

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
