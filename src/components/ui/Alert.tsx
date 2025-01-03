import React from 'react';

interface AlertProps {
  type: 'success' | 'error';
  children: React.ReactNode;
}

export function Alert({ type, children }: AlertProps) {
  const styles = {
    success: 'bg-green-50 text-green-700',
    error: 'bg-red-50 text-red-700'
  };

  return (
    <div className={`p-4 rounded-lg ${styles[type]}`}>
      {children}
    </div>
  );
}