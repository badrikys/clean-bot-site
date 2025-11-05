import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { Services } from '@/components/home/Services';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Benefits } from '@/components/home/Benefits';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { FAQ } from '@/components/home/FAQ';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Services />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTASection />
      <FAQ />
    </main>
  );
}
