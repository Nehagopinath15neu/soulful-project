import React from 'react';
import SectionContainer from '../common/SectionContainer';
import SectionHeading from '../common/SectionHeading';
import TestimonialCarousel from '../common/TestimonialCarousel';

const TestimonialSection = ({ testimonials }) => {
  return (
    <SectionContainer bgColor="bg-indigo-200" paddingY="py-24 sm:py-32">
      <SectionHeading title="What Our Travelers Say" />
      <TestimonialCarousel testimonials={testimonials} />
    </SectionContainer>
  );
};

export default TestimonialSection;
