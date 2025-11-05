import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString('ru-RU')} ₽`;
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

// Формула расчета стоимости по площади
export function calculatePriceByArea(
  area: number,
  type: 'podderzhka' | 'general' | 'remont'
): number {
  const pricing = {
    podderzhka: { max: 133, min: 78 },
    general: { max: 211, min: 141 },
    remont: { max: 336, min: 242 },
  };

  const { max, min } = pricing[type];
  const pricePerM2 = Math.max(
    Math.min(max - ((area - 1) * ((max - min) / 120)), max),
    min
  );

  return Math.round(area * pricePerM2);
}

// Расчет стоимости выезда за МКАД
export function calculateDeliveryPrice(distance: number): number {
  if (distance <= 0) return 0;
  if (distance <= 10) return 490;
  return 490 + (distance - 10) * 90;
}

// Базовые цены по типу уборки
export function getBasePrice(type: 'podderzhka' | 'general' | 'remont'): number {
  const basePrices = {
    podderzhka: 3990,
    general: 6990,
    remont: 11990,
  };
  return basePrices[type];
}

// Расчет цены по количеству комнат
export function calculatePriceByRooms(
  rooms: number,
  type: 'podderzhka' | 'general' | 'remont'
): number {
  const basePrice = getBasePrice(type);
  const pricePerRoom = {
    podderzhka: 1200,
    general: 1800,
    remont: 3000,
  };

  if (rooms === 1) return basePrice;
  return basePrice + (rooms - 1) * pricePerRoom[type];
}

// Проверка валидности email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Проверка валидности телефона
export function isValidPhone(phone: string): boolean {
  const phoneDigits = formatPhone(phone);
  return phoneDigits.length === 11 && phoneDigits.startsWith('7');
}

// Форматирование даты
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// Генерация ID для заказа
export function generateOrderId(): string {
  return `CB-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}
