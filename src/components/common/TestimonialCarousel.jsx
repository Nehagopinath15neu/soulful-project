import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/styles/carousel.css';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel = ({ testimonials }) => {
  // Default settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true
  };

  return (
    <div className="testimonial-carousel-container relative px-8 max-w-3xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <TestimonialCard 
              quote={testimonial.quote}
              author={testimonial.author}
              authorImage={testimonial.authorImage}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
