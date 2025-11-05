import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_DATA } from '@/lib/constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Простой и прозрачный процесс заказа уборки
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_DATA.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < HOW_IT_WORKS_DATA.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-6 -ml-3">
                    <ArrowRight
                      size={24}
                      className="text-accent opacity-50"
                    />
                  </div>
                )}

                {/* Step Card */}
                <div className="bg-white rounded-lg p-6 border-2 border-border hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
