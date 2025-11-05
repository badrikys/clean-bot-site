import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-card p-6',
        hover && 'transition-shadow duration-200 cursor-pointer hover:shadow-card-hover',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
