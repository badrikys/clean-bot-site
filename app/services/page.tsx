import type { Metadata } from 'next';
import { ServicesPageContent } from '@/components/services/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Клининговые услуги в Москве - Цены на все виды уборки | Clean Bot',
  description: 'Все виды клининговых услуг в Москве ⭐ Поддерживающая, генеральная уборка, после ремонта, мытье окон, химчистка ✅ От 2990₽ ✅ Оплата после работы 📱 +7(495)414-27-43',
  keywords: [
    'клининговые услуги москва',
    'уборка квартир москва',
    'клининг москва цены',
    'генеральная уборка',
    'поддерживающая уборка',
    'уборка после ремонта',
    'мытье окон',
    'химчистка мебели',
  ],
  openGraph: {
    title: 'Все виды клининговых услуг в Москве | Clean Bot',
    description: 'Профессиональная уборка любой сложности с гарантией качества. От 2990₽. Оплата после работы.',
    url: 'https://clean-bot.ru/services',
    siteName: 'Clean Bot',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesPageContent />

      {/* JSON-LD для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Клининговые услуги Clean Bot',
            description: 'Полный каталог клининговых услуг в Москве',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'Service',
                  name: 'Поддерживающая уборка',
                  url: 'https://clean-bot.ru/services/podderzhka',
                  offers: {
                    '@type': 'Offer',
                    price: '3990',
                    priceCurrency: 'RUB',
                  },
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'Service',
                  name: 'Генеральная уборка',
                  url: 'https://clean-bot.ru/services/general',
                  offers: {
                    '@type': 'Offer',
                    price: '6990',
                    priceCurrency: 'RUB',
                  },
                },
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'Service',
                  name: 'Уборка после ремонта',
                  url: 'https://clean-bot.ru/services/posle-remonta',
                  offers: {
                    '@type': 'Offer',
                    price: '11990',
                    priceCurrency: 'RUB',
                  },
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
