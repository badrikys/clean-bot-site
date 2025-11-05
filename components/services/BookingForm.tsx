'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

const bookingSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z
    .string()
    .min(10, 'Введите корректный номер телефона')
    .regex(/^[+]?[0-9\s\-\(\)]+$/, 'Некорректный формат телефона'),
  date: z.string().min(1, 'Выберите дату'),
  time: z.string().min(1, 'Выберите время'),
  address: z.string().min(5, 'Введите адрес'),
  comment: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  serviceName: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  serviceName,
  onSuccess,
  compact = false,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Booking data:', { ...data, service: serviceName });

      setIsSuccess(true);
      reset();

      if (onSuccess) {
        onSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="text-center py-8">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Заявка отправлена!
        </h3>
        <p className="text-text-secondary">
          Менеджер свяжется с вами в течение 15 минут для подтверждения заказа
        </p>
      </Card>
    );
  }

  return (
    <Card>
      {!compact && (
        <>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Закажите {serviceName.toLowerCase()} сейчас
          </h3>
          <p className="text-accent font-semibold mb-6">
            🎉 Скидка 15% при заказе на завтра!
          </p>
        </>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            {...register('name')}
            placeholder="Ваше имя"
            error={errors.name?.message}
          />
        </div>

        <div>
          <Input
            {...register('phone')}
            type="tel"
            placeholder="+7 (___) ___-__-__"
            error={errors.phone?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              {...register('date')}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              error={errors.date?.message}
            />
          </div>
          <div>
            <select
              {...register('time')}
              className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-text-primary"
            >
              <option value="">Выберите время</option>
              <option value="09:00-12:00">09:00 - 12:00</option>
              <option value="12:00-15:00">12:00 - 15:00</option>
              <option value="15:00-18:00">15:00 - 18:00</option>
              <option value="18:00-21:00">18:00 - 21:00</option>
            </select>
            {errors.time && (
              <p className="text-warning text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <Input
            {...register('address')}
            placeholder="Адрес"
            error={errors.address?.message}
          />
        </div>

        <div>
          <textarea
            {...register('comment')}
            placeholder="Комментарий (необязательно)"
            rows={3}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-text-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Заказать со скидкой →'}
        </Button>

        <p className="text-xs text-text-secondary text-center">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
        </p>
      </form>
    </Card>
  );
};
