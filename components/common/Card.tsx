
import React from 'react';

// FIX: Extend props with standard HTML div attributes to allow props like onClick.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
