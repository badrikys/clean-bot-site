'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { calculatePriceByArea, formatPrice } from '@/lib/utils';

interface PricingCalculatorProps {
  serviceType: 'podderzhka' | 'general' | 'remont';
  basePrice: number;
}

interface AdditionalService {
  id: string;
  name: string;
  price: number;
  checked: boolean;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  serviceType,
  basePrice,
}) => {
  const [area, setArea] = useState(50);
  const [bathrooms, setBathrooms] = useState(1);
  const [additionalServices, setAdditionalServices] = useState<AdditionalService[]>([
    { id: 'windows', name: 'Мытье окон (все окна)', price: 2990, checked: false },
    { id: 'furniture', name: 'Химчистка дивана 2-местный', price: 2990, checked: false },
    { id: 'fridge', name: 'Внутри холодильника', price: 750, checked: false },
    { id: 'oven', name: 'Внутри духовки', price: 650, checked: false },
    { id: 'ironing', name: 'Глажка (1 час)', price: 1390, checked: false },
  ]);

  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [estimatedTime, setEstimatedTime] = useState('4 часа');

  useEffect(() => {
    let price = calculatePriceByArea(area, serviceType);

    // Add bathroom surcharge
    if (bathrooms > 1) {
      price += (bathrooms - 1) * 500;
    }

    // Add additional services
    additionalServices.forEach((service) => {
      if (service.checked) {
        price += service.price;
      }
    });

    setTotalPrice(price);

    // Calculate estimated time
    const baseTime = serviceType === 'podderzhka' ? 3 : serviceType === 'general' ? 4 : 6;
    const additionalTime = Math.floor(additionalServices.filter(s => s.checked).length * 0.5);
    setEstimatedTime(`${baseTime + additionalTime}-${baseTime + additionalTime + 1} часов`);
  }, [area, bathrooms, additionalServices, serviceType]);

  const handleServiceToggle = (id: string) => {
    setAdditionalServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, checked: !service.checked } : service
      )
    );
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-text-primary mb-6">
        Рассчитайте точную стоимость
      </h3>

      <div className="space-y-6">
        {/* Area Slider */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Площадь квартиры: {area} м²
          </label>
          <input
            type="range"
            min="30"
            max="200"
            value={area}
            onChange={(e) => setArea(parseInt(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-secondary mt-1">
            <span>30 м²</span>
            <span>200 м²</span>
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Количество санузлов
          </label>
          <div className="flex gap-3">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setBathrooms(num)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  bathrooms === num
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface text-text-secondary border-2 border-border hover:border-primary'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-3">
            Дополнительные услуги
          </label>
          <div className="space-y-2">
            {additionalServices.map((service) => (
              <label
                key={service.id}
                className="flex items-center justify-between p-3 bg-surface rounded-lg cursor-pointer hover:bg-border/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={service.checked}
                    onChange={() => handleServiceToggle(service.id)}
                    className="w-5 h-5 text-primary rounded focus:ring-primary cursor-pointer"
                  />
                  <span className="text-text-primary">{service.name}</span>
                </div>
                <span className="text-primary font-semibold">
                  +{formatPrice(service.price)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Address Input */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Адрес (для расчета выезда за МКАД)
          </label>
          <Input
            type="text"
            placeholder="Например: Москва, ул. Ленина, д. 1"
            className="w-full"
          />
        </div>

        {/* Total */}
        <div className="border-t-2 border-border pt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-text-primary">Итого:</span>
            <span className="text-3xl font-bold text-primary">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <div className="text-sm text-text-secondary text-right mb-4">
            Время работы: ~{estimatedTime}
          </div>

          <Button variant="primary" size="lg" className="w-full">
            Заказать уборку на эту сумму →
          </Button>

          <p className="text-xs text-text-secondary text-center mt-3">
            Финальная стоимость может измениться после осмотра квартиры клинером
          </p>
        </div>
      </div>
    </Card>
  );
};
