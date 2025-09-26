import React from 'react';

interface BadgeProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ name, description, icon }) => {
  return (
    <div className="bg-green-100 border border-green-200 p-4 rounded-lg flex items-center space-x-4 shadow-sm transform hover:scale-105 transition-transform duration-300">
      <div className="bg-green-500 p-3 rounded-full text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-green-800">{name}</h4>
        <p className="text-sm text-green-700">{description}</p>
      </div>
    </div>
  );
};

export default Badge;
