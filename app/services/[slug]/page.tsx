import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServices } from '@/lib/services-data';
import { ServiceDetailContent } from '@/components/services/ServiceDetailContent';
import { COMPANY_INFO } from '@/lib/constants';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Услуга не найдена | Clean Bot',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://clean-bot.ru/services/${service.slug}`,
      siteName: 'Clean Bot',
      locale: 'ru_RU',
      type: 'website',
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceDetailContent service={service} />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.fullDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: COMPANY_INFO.name,
              telephone: COMPANY_INFO.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Москва',
                addressCountry: 'RU',
              },
            },
            areaServed: {
              '@type': 'City',
              name: 'Москва',
            },
            offers: {
              '@type': 'Offer',
              price: service.priceFrom.toString(),
              priceCurrency: 'RUB',
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: service.rating.toString(),
              reviewCount: service.completedCount.replace(/\D/g, ''),
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: 'https://clean-bot.ru',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Услуги',
                item: 'https://clean-bot.ru/services',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.name,
                item: `https://clean-bot.ru/services/${service.slug}`,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
