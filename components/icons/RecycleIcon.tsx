
import React from 'react';

const RecycleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="12 12 8 8 12 4" />
    <path d="M20 12a8 8 0 1 1-8-8" />
    <polyline points="12 12 16 16 12 20" />
    <path d="M4 12a8 8 0 0 1 8-8" />
    <polyline points="12 12 8 16 12 20" />
    <path d="M12 20a8 8 0 0 1-8-8" />
  </svg>
);

export default RecycleIcon;
