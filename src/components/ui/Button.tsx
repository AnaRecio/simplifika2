import React, { ButtonHTMLAttributes } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full flex justify-center py-2 px-4 border border-transparent 
        rounded-md shadow-sm text-sm font-medium text-white bg-primary 
        hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-primary disabled:opacity-50 transition-colors duration-200"
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}