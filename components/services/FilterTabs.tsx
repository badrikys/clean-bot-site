'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type FilterCategory = 'all' | 'cleaning' | 'windows' | 'chemical' | 'subscription';

interface FilterTabsProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

const FILTER_OPTIONS: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'Все услуги' },
  { value: 'cleaning', label: 'Уборка' },
  { value: 'windows', label: 'Мытье окон' },
  { value: 'chemical', label: 'Химчистка' },
  { value: 'subscription', label: 'Подписки' },
];

export const FilterTabs: React.FC<FilterTabsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={cn(
            'px-6 py-3 rounded-lg font-semibold transition-all duration-200',
            'hover:shadow-md',
            activeFilter === option.value
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-text-secondary border-2 border-border hover:border-primary'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
