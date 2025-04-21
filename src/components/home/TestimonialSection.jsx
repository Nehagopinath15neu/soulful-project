import React from 'react';
import SectionContainer from '../common/SectionContainer';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialSection = ({ testimonial }) => {
  return (
    <SectionContainer bgColor="bg-indigo-200" paddingY="py-24 sm:py-32">
      <TestimonialCard 
        quote={testimonial.quote}
        author={testimonial.author}
        authorImage={testimonial.authorImage}
        rating={testimonial.rating}
      />
    </SectionContainer>
  );
};

export default TestimonialSection;
