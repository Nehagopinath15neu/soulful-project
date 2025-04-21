import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ 
  to, 
  children, 
  variant = 'primary', 
  className = '',
  withArrow = false,
  external = false
}) => {
  // Define styles based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500';
      case 'secondary':
        return 'bg-white/10 text-white hover:bg-white/20 focus:ring-white';
      case 'outline':
        return 'bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500';
      default:
        return 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500';
    }
  };

  const baseStyles = 'inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const buttonStyles = `${baseStyles} ${getButtonStyles()} ${className}`;

  // Arrow icon for buttons that need it
  const ArrowIcon = () => (
    withArrow && (
      <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    )
  );

  // Return either a Link or an anchor based on whether it's an external link
  if (external) {
    return (
      <a href={to} className={buttonStyles} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link to={to} className={buttonStyles}>
      {children}
      <ArrowIcon />
    </Link>
  );
};

export default CTAButton;
