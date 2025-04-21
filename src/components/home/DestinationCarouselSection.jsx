import React from 'react';
import SectionContainer from '../common/SectionContainer';
import SectionHeading from '../common/SectionHeading';
import ImageCarousel from '../common/ImageCarousel';
import CTAButton from '../common/CTAButton';

const DestinationCarouselSection = ({ images }) => {
  return (
    <SectionContainer bgColor="bg-gray-200">
      <SectionHeading title="Explore Our Destinations" />
      
      <ImageCarousel images={images} />
      
      {/* View More Button */}
      <div className="mt-10 text-center">
        <CTAButton 
          to="/topdestination" 
          variant="primary" 
          withArrow={true}
        >
          View All Destinations
        </CTAButton>
      </div>
    </SectionContainer>
  );
};

export default DestinationCarouselSection;
