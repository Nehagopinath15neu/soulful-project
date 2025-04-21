import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../common/SectionContainer';
import DestinationCard from '../common/DestinationCard';
import CTAButton from '../common/CTAButton';

const TopDestinationsSection = ({ backgroundImage, destinations }) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      {/* Background for larger screens */}
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <img src={backgroundImage} alt="Background" className="size-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>

      </div>

      {/* Title section */}
      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background for mobile */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img src={backgroundImage} alt="Background" className="size-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>

        </div>

        <div className="relative py-32">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t('home.destinations.title')}
          </h1>
          <div className="mt-6 sm:mt-8">
            <CTAButton to="/topdestination" variant="primary">
              {t('home.destinations.cta')}
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Destination cards */}
      <section aria-labelledby="collection-heading" className="relative -mt-96 sm:-mt-24">
        <h2 id="collection-heading" className="sr-only">Collections</h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8 mt-6 sm:mt-10">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              image={destination.src}
              title={destination.title}
              link={destination.link}
              variant="home"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopDestinationsSection;
