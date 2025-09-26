
import React from 'react';

const TreeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M12 22V10" />
    <path d="M12 10a5 5 0 0 1 5-5 5 5 0 0 1 5 5" />
    <path d="M12 10a5 5 0 0 0-5-5 5 5 0 0 0-5 5" />
    <path d="M7 10h10" />
  </svg>
);

export default TreeIcon;
