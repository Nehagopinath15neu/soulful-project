import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationsGrid = ({ destinations, variant = 'detail' }) => {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {destinations.map((destination, index) => (
        <DestinationCard
          key={index}
          image={destination.imgSrc || destination.src || destination.image}
          title={destination.title}
          description={destination.description}
          link={destination.link}
          linkText={destination.linkText}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default DestinationsGrid;
