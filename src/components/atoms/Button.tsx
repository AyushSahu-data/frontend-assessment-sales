import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ active, children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition-colors ${
      active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    {...props}
  >
    {children}
  </button>
);