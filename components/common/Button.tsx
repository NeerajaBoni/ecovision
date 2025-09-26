
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4';

  const variantStyles = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    outline: 'bg-transparent text-green-700 border-2 border-green-600 hover:bg-green-50 focus:ring-green-200'
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
