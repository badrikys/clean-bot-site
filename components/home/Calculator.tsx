'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { formatPrice, calculatePriceByRooms, calculatePriceByArea } from '@/lib/utils';
import { ADDITIONAL_SERVICES } from '@/lib/constants';

type CleaningType = 'podderzhka' | 'general' | 'remont';
type CalculationMode = 'time' | 'area';

export const Calculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('time');
  const [cleaningType, setCleaningType] = useState<CleaningType>('podderzhka');
  const [rooms, setRooms] = useState(2);
  const [area, setArea] = useState(50);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [address, setAddress] = useState('');

  // Расчет базовой стоимости
  const basePrice = mode === 'time'
    ? calculatePriceByRooms(rooms, cleaningType)
    : calculatePriceByArea(area, cleaningType);

  // Добавляем стоимость дополнительных услуг
  const additionalPrice = selectedServices.reduce((total, serviceId) => {
    const service = ADDITIONAL_SERVICES.find(s => s.id === serviceId);
    return total + (service?.price || 0);
  }, 0);

  const totalPrice = basePrice + additionalPrice;

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleOrder = () => {
    // Скролл к секции CTA или открытие модального окна
    const ctaSection = document.getElementById('cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="calculator" className="max-w-3xl mx-auto">
      <Card>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-8">
        Рассчитайте стоимость уборки
      </h2>

      {/* Mode Tabs */}
      <div className="flex bg-surface rounded-lg p-1 mb-8">
        <button
          onClick={() => setMode('time')}
          className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
            mode === 'time'
              ? 'bg-white text-primary shadow-card'
              : 'text-text-secondary hover:text-primary'
          }`}
        >
          По времени
        </button>
        <button
          onClick={() => setMode('area')}
          className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
            mode === 'area'
              ? 'bg-white text-primary shadow-card'
              : 'text-text-secondary hover:text-primary'
          }`}
        >
          По площади
        </button>
      </div>

      {/* Cleaning Type */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-text-primary mb-3">
          Тип уборки
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setCleaningType('podderzhka')}
            className={`p-4 rounded-lg border-2 transition-all ${
              cleaningType === 'podderzhka'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="font-semibold text-text-primary mb-1">
              Поддерживающая
            </div>
            <div className="text-sm text-text-secondary">3 990 ₽ (3 часа)</div>
          </button>
          <button
            onClick={() => setCleaningType('general')}
            className={`p-4 rounded-lg border-2 transition-all ${
              cleaningType === 'general'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="font-semibold text-text-primary mb-1">
              Генеральная
            </div>
            <div className="text-sm text-text-secondary">6 990 ₽ (4 часа)</div>
          </button>
          <button
            onClick={() => setCleaningType('remont')}
            className={`p-4 rounded-lg border-2 transition-all ${
              cleaningType === 'remont'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="font-semibold text-text-primary mb-1">
              После ремонта
            </div>
            <div className="text-sm text-text-secondary">11 990 ₽ (4 часа)</div>
          </button>
        </div>
      </div>

      {/* Room/Area Selection */}
      {mode === 'time' ? (
        <div className="mb-8">
          <label className="block text-sm font-medium text-text-primary mb-3">
            Количество комнат
          </label>
          <div className="flex space-x-3">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setRooms(num)}
                className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                  rooms === num
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:border-primary/50 text-text-primary'
                }`}
              >
                {num === 4 ? '4+' : num}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <label className="block text-sm font-medium text-text-primary mb-3">
            Площадь квартиры: {area} м²
          </label>
          <input
            type="range"
            min="20"
            max="200"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-text-muted mt-2">
            <span>20 м²</span>
            <span>200 м²</span>
          </div>
        </div>
      )}

      {/* Additional Services */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-text-primary mb-3">
          Дополнительные услуги
        </label>
        <div className="space-y-2">
          {ADDITIONAL_SERVICES.map((service) => (
            <label
              key={service.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-all"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => handleServiceToggle(service.id)}
                  className="w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                />
                <span className="text-text-primary font-medium">
                  {service.name}
                </span>
              </div>
              <span className="text-text-secondary">
                +{formatPrice(service.price)}{service.perHour && '/час'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Address */}
      <div className="mb-8">
        <Input
          label="Адрес"
          placeholder="Введите адрес для точного расчета"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Total & CTA */}
      <div className="border-t border-border pt-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-semibold text-text-secondary">
            Итого:
          </span>
          <span className="text-3xl font-bold text-primary">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <Button size="lg" className="w-full" onClick={handleOrder}>
          Заказать уборку
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
      </Card>
    </div>
  );
};
