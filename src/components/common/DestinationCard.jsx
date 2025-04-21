import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ 
  image, 
  title, 
  link, 
  description, 
  linkText,
  variant = 'home' // 'home' or 'detail'
}) => {
  // Home page variant (simple card with image and title)
  if (variant === 'home') {
    return (
      <div className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-[4/5] sm:h-auto">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
            <img src={image} alt={title} className="size-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        </div>
        <div className="absolute inset-0 flex items-end rounded-lg p-6">
          <div>
            <h3 className="mt-1 font-semibold text-white text-lg">
              <Link to={link} className="text-white hover:text-white">
                <span className="absolute inset-0"></span>
                {title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
  
  // Detail variant for Top Destinations page (with description and button)
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

      <h3 className="mt-3 text-2xl font-bold leading-6 text-white">
        {title}
      </h3>
      {description && (
        <p className="mt-3 text-sm leading-6 text-gray-300">
          {description}
        </p>
      )}
      <div className="mt-6">
        <Link
          to={link}
          className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        >
          {linkText || 'Explore'}
        </Link>
      </div>
    </article>
  );
};

export default DestinationCard;
