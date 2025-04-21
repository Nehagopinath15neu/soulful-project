import React from "react";

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
  // Data for the about section
  const aboutData = {
    image: about,
    title: "About Soulful Sojourns",
    description: "At Soulful Sojourns, we believe travel is not just about places, but about new ways of seeing things. Dedicated to crafting immersive experiences, we connect you with the heart of each destination. Join us for journeys that enrich, inspire, and rejuvenate."
  };

  // Data for top destinations section
  const topDestinations = [
    { src: KyotoJapan, title: "Kyoto, Japan", link: "/kyoto" },
    { src: SantoriniGreece, title: "Santorini, Greece", link: "/santorini" },
    { src: SedonaArizonaUSA, title: "Sedona, Arizona, USA", link: "/sedona" },
  ];

  // Data for testimonial section
  const testimonial = {
    quote: "From the moment I started planning my trip with Soulful Sojourns, I knew I was in for something special. Every detail was handled with care, and the destinations were beyond breathtaking. Highly recommend for anyone looking to truly connect with the places they visit.",
    author: "Judith Black",
    authorImage: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    rating: 5
  };

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
      <TestimonialSection testimonial={testimonial} />

      {/* Destination Carousel Section */}
      <DestinationCarouselSection images={carouselImages} />
    </main>
  );
};

export default HomePageContent;
