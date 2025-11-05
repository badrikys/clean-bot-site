'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  before: string;
  after: string;
  title: string;
}

// Placeholder images - in production these would be real images
const GALLERY_IMAGES: GalleryImage[] = [
  {
    before: '/images/gallery/kitchen-before.jpg',
    after: '/images/gallery/kitchen-after.jpg',
    title: 'Кухня после генеральной уборки',
  },
  {
    before: '/images/gallery/bathroom-before.jpg',
    after: '/images/gallery/bathroom-after.jpg',
    title: 'Ванная комната',
  },
  {
    before: '/images/gallery/living-before.jpg',
    after: '/images/gallery/living-after.jpg',
    title: 'Гостиная',
  },
  {
    before: '/images/gallery/windows-before.jpg',
    after: '/images/gallery/windows-after.jpg',
    title: 'Мытье окон',
  },
  {
    before: '/images/gallery/sofa-before.jpg',
    after: '/images/gallery/sofa-after.jpg',
    title: 'Химчистка дивана',
  },
  {
    before: '/images/gallery/renovation-before.jpg',
    after: '/images/gallery/renovation-after.jpg',
    title: 'После ремонта',
  },
];

export const ServiceGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    setShowAfter(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    setShowAfter(false);
  };

  const currentImage = GALLERY_IMAGES[currentIndex];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          Результаты нашей работы
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-card overflow-hidden">
            {/* Main Image */}
            <div className="relative aspect-video bg-surface">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {showAfter ? '✨' : '🏠'}
                  </div>
                  <p className="text-lg font-semibold text-text-primary">
                    {showAfter ? 'После уборки' : 'До уборки'}
                  </p>
                  <p className="text-sm text-text-secondary mt-2">
                    {currentImage.title}
                  </p>
                </div>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="absolute top-4 right-4 px-6 py-3 bg-white rounded-lg shadow-lg font-semibold text-primary hover:bg-primary hover:text-white transition-all"
              >
                {showAfter ? 'Показать ДО' : 'Показать ПОСЛЕ'}
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 bg-white border-t-2 border-border">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-surface transition-colors"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>

              <div className="flex gap-2">
                {GALLERY_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowAfter(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Перейти к фото ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-surface transition-colors"
                aria-label="Следующее фото"
              >
                <ChevronRight size={24} className="text-primary" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowAfter(false);
                }}
                className={`aspect-square bg-surface rounded-lg flex items-center justify-center transition-all hover:shadow-lg ${
                  index === currentIndex
                    ? 'ring-4 ring-primary'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <span className="text-2xl">
                  {index === 0 && '🍳'}
                  {index === 1 && '🚿'}
                  {index === 2 && '🛋️'}
                  {index === 3 && '🪟'}
                  {index === 4 && '🪑'}
                  {index === 5 && '🔨'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
