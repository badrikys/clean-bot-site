'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const TimeCalculator: React.FC = () => {
  const [rooms, setRooms] = useState<number>(2);
  const [area, setArea] = useState<number>(60);
  const [priorities, setPriorities] = useState<string[]>([]);

  const togglePriority = (priority: string) => {
    setPriorities((prev) =>
      prev.includes(priority)
        ? prev.filter((p) => p !== priority)
        : [...prev, priority]
    );
  };

  // Calculate if 4 hours is enough
  const calculateTime = () => {
    let baseTime = 240; // 4 hours in minutes
    let requiredTime = 0;

    // Base time by area
    requiredTime += area * 1.5; // 1.5 min per m²

    // Additional time for priorities
    if (priorities.includes('kitchen')) requiredTime += 60;
    if (priorities.includes('windows')) requiredTime += 45;
    if (priorities.includes('balcony')) requiredTime += 30;
    if (priorities.includes('ironing')) requiredTime += 40;
    if (priorities.includes('wardrobe')) requiredTime += 30;

    return { baseTime, requiredTime };
  };

  const { baseTime, requiredTime } = calculateTime();
  const isEnough = requiredTime <= baseTime;
  const estimatedHours = Math.ceil(requiredTime / 60);

  const scrollToBooking = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Хватит ли 4 часов для вашей квартиры?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Узнайте точную стоимость и время за 30 секунд
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            {/* Step 1: Rooms */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-text-primary mb-4">
                Шаг 1: Количество комнат
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRooms(num)}
                    className={`py-4 rounded-xl font-semibold transition-all ${
                      rooms === num
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-surface text-text-secondary hover:bg-primary/10'
                    }`}
                  >
                    {num === 4 ? '4+' : num}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-text-primary mb-4">
                Шаг 2: Примерная площадь
              </label>
              <div className="px-4">
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-sm text-text-secondary">
                  <span>30 м²</span>
                  <span className="text-primary font-bold text-xl">{area} м²</span>
                  <span>150 м²</span>
                </div>
              </div>
            </div>

            {/* Step 3: Priorities */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-text-primary mb-4">
                Шаг 3: Главные приоритеты
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: 'kitchen', label: 'Кухня изнутри (духовка, холодильник, шкафы)' },
                  { id: 'windows', label: 'Все окна (4+ стандартных)' },
                  { id: 'balcony', label: 'Балкон' },
                  { id: 'ironing', label: 'Глажка вещей' },
                  { id: 'wardrobe', label: 'Гардеробная' },
                ].map((priority) => (
                  <button
                    key={priority.id}
                    onClick={() => togglePriority(priority.id)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      priorities.includes(priority.id)
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'bg-surface border-2 border-transparent hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${
                          priorities.includes(priority.id)
                            ? 'bg-primary border-primary'
                            : 'border-border'
                        }`}
                      >
                        {priorities.includes(priority.id) && (
                          <CheckCircle size={16} className="text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-text-primary">
                        {priority.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className={`rounded-2xl p-6 ${isEnough ? 'bg-success/10' : 'bg-warning/10'}`}>
              {isEnough ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle size={32} className="text-success" />
                    <h3 className="text-2xl font-bold text-text-primary">
                      ✓ За 4 часа успеем полностью
                    </h3>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-4">
                    Ваша цена: 5 990 ₽
                  </p>
                  <Button variant="primary" size="lg" onClick={scrollToBooking} className="w-full">
                    Забронировать уборку
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle size={32} className="text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        ⚠️ Честно: это объём на {estimatedHours} часов, не на 4
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Но у вас есть несколько вариантов:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-text-primary">
                            4 часа + приоритеты
                          </p>
                          <p className="text-sm text-text-secondary">
                            Выберем главное, остальное — по времени
                          </p>
                        </div>
                        <p className="text-xl font-bold text-primary">5 990 ₽</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-text-primary">
                            {estimatedHours} часов (всё успеем)
                          </p>
                          <p className="text-sm text-text-secondary">
                            Один клинер, все задачи
                          </p>
                        </div>
                        <p className="text-xl font-bold text-primary">
                          {(estimatedHours * 1490 + 990).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-text-primary">
                            2 клинера × 4 часа
                          </p>
                          <p className="text-sm text-text-secondary">
                            Быстрее и эффективнее
                          </p>
                        </div>
                        <p className="text-xl font-bold text-primary">11 980 ₽</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="lg" onClick={scrollToBooking} className="w-full">
                    Обсудить с оператором
                  </Button>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
