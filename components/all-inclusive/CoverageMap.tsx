'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calculator } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const CoverageMap: React.FC = () => {
  const [address, setAddress] = useState('');
  const [distance, setDistance] = useState<number | null>(null);

  const calculateDistance = () => {
    // Simplified calculation - in real app would use geocoding API
    const randomDistance = Math.floor(Math.random() * 40) + 5;
    setDistance(randomDistance);
  };

  const calculatePrice = () => {
    if (!distance) return 5990;
    if (distance <= 10) return 5990;
    return 5990 + (distance - 10) * 100;
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
            Работаем в Москве и МО
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Прозрачные цены на выезд
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Зоны обслуживания
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-success rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">
                      МКАД + 10 км (без доплат)
                    </p>
                    <p className="text-sm text-text-secondary">
                      Фиксированная цена 5 990 ₽
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-warning rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">
                      10-30 км от МКАД
                    </p>
                    <p className="text-sm text-text-secondary">
                      +100 ₽/км (минимум 500 ₽)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-border rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">
                      Более 30 км от МКАД
                    </p>
                    <p className="text-sm text-text-secondary">
                      Обсуждается индивидуально
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Visualization */}
              <div className="aspect-square bg-gradient-to-br from-success/10 via-warning/10 to-border/10 rounded-2xl flex items-center justify-center">
                <MapPin size={64} className="text-primary" />
              </div>
            </Card>
          </motion.div>

          {/* Distance Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <Calculator size={24} className="text-primary" />
                Калькулятор выезда
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Введите ваш адрес
                  </label>
                  <Input
                    type="text"
                    placeholder="Например: Москва, ул. Ленина, 1"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button
                  variant="primary"
                  onClick={calculateDistance}
                  disabled={!address}
                  className="w-full"
                >
                  Рассчитать стоимость
                </Button>

                {distance !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/5 rounded-xl p-6"
                  >
                    <div className="text-center mb-4">
                      <p className="text-sm text-text-secondary mb-2">
                        Расстояние от МКАД
                      </p>
                      <p className="text-3xl font-bold text-primary mb-4">
                        {distance} км
                      </p>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-secondary">
                          Базовая стоимость:
                        </span>
                        <span className="font-semibold">5 990 ₽</span>
                      </div>
                      {distance > 10 && (
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-text-secondary">
                            Доплата за выезд:
                          </span>
                          <span className="font-semibold">
                            +{(distance - 10) * 100} ₽
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-lg font-bold text-primary pt-2 border-t border-border">
                        <span>Итого:</span>
                        <span>{calculatePrice().toLocaleString()} ₽</span>
                      </div>
                    </div>

                    {distance > 30 && (
                      <div className="mt-4 p-3 bg-warning/10 rounded-lg">
                        <p className="text-sm text-text-secondary">
                          💡 Для вашего адреса стоимость обсуждается индивидуально.
                          Позвоните нам для уточнения.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
