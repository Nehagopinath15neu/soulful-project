import React from 'react';

const SectionContainer = ({ 
  children, 
  className = '', 
  bgColor = 'bg-white',
  paddingY = 'py-12 sm:py-16',
  maxWidth = 'max-w-7xl'
}) => {
  return (
    <section className={`${bgColor} ${paddingY} ${className}`}>
      <div className={`mx-auto ${maxWidth} px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
