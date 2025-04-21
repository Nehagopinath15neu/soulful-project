import React from 'react';

const SectionHeading = ({ title, centered = true, className = '' }) => {
  return (
    <h2 
      className={`text-3xl font-bold tracking-tight text-gray-900 mb-8 ${centered ? 'text-center' : ''} ${className}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
