'use client';

import React from 'react';

interface ComparisonRow {
  parameter: string;
  podderzhka: string | boolean;
  general: string | boolean;
  remont: string | boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    parameter: 'Цена',
    podderzhka: 'От 3 990 ₽',
    general: 'От 6 990 ₽',
    remont: 'От 11 990 ₽'
  },
  {
    parameter: 'Время работы',
    podderzhka: '3 часа',
    general: '4 часа',
    remont: '6-8 часов'
  },
  {
    parameter: 'Пылесос',
    podderzhka: 'От клиента',
    general: 'Наш Karcher',
    remont: 'Наш Karcher'
  },
  {
    parameter: 'Химия',
    podderzhka: 'Стандартная',
    general: 'Профессиональная',
    remont: 'Специальная'
  },
  {
    parameter: 'Мытье окон',
    podderzhka: false,
    general: '✅ Опция +2990₽',
    remont: true
  },
  {
    parameter: 'Внутри шкафов',
    podderzhka: false,
    general: true,
    remont: true
  },
  {
    parameter: 'Сложные пятна',
    podderzhka: false,
    general: true,
    remont: true
  },
  {
    parameter: 'Строительная пыль',
    podderzhka: false,
    general: false,
    remont: true
  }
];

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          Сравнение типов уборки
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-card">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-4 px-6 text-left font-semibold text-text-primary">
                  Параметр
                </th>
                <th className="py-4 px-6 text-center font-semibold text-text-primary">
                  Поддерживающая
                </th>
                <th className="py-4 px-6 text-center font-semibold text-text-primary bg-accent/10">
                  Генеральная
                </th>
                <th className="py-4 px-6 text-center font-semibold text-text-primary">
                  После ремонта
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-surface transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-text-primary">
                    {row.parameter}
                  </td>
                  <td className="py-4 px-6 text-center text-text-secondary">
                    {typeof row.podderzhka === 'boolean' ? (
                      row.podderzhka ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-2xl">❌</span>
                      )
                    ) : (
                      row.podderzhka
                    )}
                  </td>
                  <td className="py-4 px-6 text-center text-text-secondary bg-accent/5">
                    {typeof row.general === 'boolean' ? (
                      row.general ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-2xl">❌</span>
                      )
                    ) : (
                      row.general
                    )}
                  </td>
                  <td className="py-4 px-6 text-center text-text-secondary">
                    {typeof row.remont === 'boolean' ? (
                      row.remont ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-2xl">❌</span>
                      )
                    ) : (
                      row.remont
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
