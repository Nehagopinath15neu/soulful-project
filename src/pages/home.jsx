import React from "react";
import { useTranslation } from 'react-i18next';

// Import components
import AboutSection from "../components/home/AboutSection";
import TopDestinationsSection from "../components/home/TopDestinationsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import DestinationCarouselSection from "../components/home/DestinationCarouselSection";

// Import images
import about from "../assets/images/about.png";
import sky from "../assets/images/sky.png";
import KyotoJapan from "../assets/images/kyoto-Japan.png";
import SantoriniGreece from "../assets/images/Santorini-Greece.png";
import SedonaArizonaUSA from "../assets/images/Sedona-Arizona-USA.png";
import picture01 from "../assets/images/picture01.png";
import picture02 from "../assets/images/picture02.png";
import picture03 from "../assets/images/picture03.png";
import picture04 from "../assets/images/picture04.png";
import baliImage from "../assets/images/Bali-hero.jpg";
import parisImage from "../assets/images/paris.jpg";
import goaImage from "../assets/images/GOA.jpeg";
import santoriniSunset from "../assets/images/santorini-sunset.png";
import redBeach from "../assets/images/red-beach.png";
import kyotoTemple from "../assets/images/kyoto-temple2.png";

const HomePageContent = () => {
  const { t } = useTranslation();
  // Data for the about section
  const aboutData = {
    image: about,
    title: t('home.about.title'),
    description: t('home.about.description')
  };

  // Data for top destinations section
  const topDestinations = [
    { src: KyotoJapan, title: t('destinations.kyoto.title'), link: "/kyoto" },
    { src: SantoriniGreece, title: t('destinations.santorini.title'), link: "/santorini" },
    { src: SedonaArizonaUSA, title: "Sedona, Arizona, USA", link: "/sedona" },
  ];

  // Data for testimonial section
  const testimonials = [
    {
      quote: t('home.testimonial.quote'),
      author: "Judith Black",
      authorImage: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
      rating: 5
    },
    {
      quote: "The Kyoto cultural tour was beyond my expectations. The guides were knowledgeable and the experiences were authentic. I'll cherish these memories forever!",
      author: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      quote: "Santorini was a dream come true. The views were breathtaking and the local experiences arranged by Soulful Sojourns made our honeymoon truly special.",
      author: "Emma Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      quote: "Our spiritual journey to Sedona was transformative. The attention to detail and the carefully curated experiences helped us connect with nature and ourselves.",
      author: "David Thompson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4
    }
  ];

  // Data for carousel images
  const carouselImages = [
    { src: picture01, alt: "Gallery 1" },
    { src: picture02, alt: "Gallery 2" },
    { src: picture03, alt: "Gallery 3" },
    { src: picture04, alt: "Gallery 4" },
    { src: baliImage, alt: "Bali" },
    { src: parisImage, alt: "Paris" },
    { src: goaImage, alt: "Goa" },
    { src: santoriniSunset, alt: "Santorini Sunset" },
    { src: redBeach, alt: "Red Beach" },
    { src: kyotoTemple, alt: "Kyoto Temple" },
  ];

  return (
    <main className="flex-1">
      {/* About Section */}
      <AboutSection 
        image={aboutData.image}
        title={aboutData.title}
        description={aboutData.description}
      />

      {/* Top Destinations Section */}
      <TopDestinationsSection 
        backgroundImage={sky}
        destinations={topDestinations}
      />

      {/* Testimonial Section */}
      <TestimonialSection testimonials={testimonials} />

      {/* Destination Carousel Section */}
      <DestinationCarouselSection images={carouselImages} />
    </main>
  );
};

export default HomePageContent;
