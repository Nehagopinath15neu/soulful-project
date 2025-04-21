import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/styles/carousel.css';

const ImageCarousel = ({ images }) => {
  // Default settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container relative px-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt || `Image ${index + 1}`} 
                className="w-full h-64 object-cover hover:opacity-90 transition-opacity" 
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
