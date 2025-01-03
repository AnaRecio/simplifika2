import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextArea({ label, error, ...props }: TextAreaProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        {...props}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
          disabled:bg-gray-50 disabled:text-gray-500"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}