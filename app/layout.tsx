import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Уборка квартир в Москве от 3990₽ | Clean Bot - Клининг с 2018',
  description: 'Профессиональная уборка квартир в Москве и МО ⭐ 32000+ выполненных заказов ✅ Оплата после уборки ✅ Своё оборудование Karcher 📱 +7(495)414-27-43',
  keywords: [
    'уборка квартир москва',
    'клининг москва',
    'уборка квартир',
    'генеральная уборка',
    'уборка после ремонта',
    'мытье окон',
    'химчистка мебели',
    'клининговые услуги',
  ],
  authors: [{ name: COMPANY_INFO.founder }],
  creator: 'Clean Bot',
  publisher: 'Clean Bot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clean-bot.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Уборка квартир в Москве от 3990₽ | Clean Bot',
    description: 'Профессиональная уборка квартир в Москве и МО. 32000+ выполненных заказов. Оплата после уборки. Своё оборудование Karcher.',
    url: 'https://clean-bot.ru',
    siteName: 'Clean Bot',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Bot - Профессиональная уборка квартир',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Уборка квартир в Москве от 3990₽ | Clean Bot',
    description: 'Профессиональная уборка квартир в Москве и МО. 32000+ выполненных заказов.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://clean-bot.ru',
              name: COMPANY_INFO.name,
              image: 'https://clean-bot.ru/logo.png',
              description: 'Профессиональная клининговая компания в Москве',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Москва',
                addressCountry: 'RU',
              },
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              priceRange: '₽₽',
              openingHours: 'Mo-Su 09:00-21:00',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: COMPANY_INFO.rating,
                reviewCount: 500,
                bestRating: 5,
                worstRating: 1,
              },
              sameAs: [
                'https://yandex.ru/maps',
              ],
            }),
          }}
        />

        {/* Structured Data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Клининговые услуги',
              provider: {
                '@type': 'LocalBusiness',
                name: COMPANY_INFO.name,
              },
              areaServed: {
                '@type': 'City',
                name: 'Москва',
              },
              offers: {
                '@type': 'Offer',
                price: '3990',
                priceCurrency: 'RUB',
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
