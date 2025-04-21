import React from "react";

// Import components
import PageHeader from "../components/common/PageHeader";
import DestinationsGrid from "../components/common/DestinationsGrid";
import SectionContainer from "../components/common/SectionContainer";

// Import images
import KyotoJapan from "../assets/images/kyoto-Japan.png";
import SantoriniGreece from "../assets/images/Santorini-Greece.png";
import SedonaArizonaUSA from "../assets/images/Sedona-Arizona-USA.png";
import BaliIndonesia from "../assets/images/beach.jpg";
import GoaIndia from "../assets/images/GOA.jpeg";
import ParisFrance from "../assets/images/paris.jpg";

const TopDestination = () => {
  // Destination data
  const destinations = [
    {
      title: "Kyoto, Japan",
      imgSrc: KyotoJapan,
      alt: "Kyoto Temple",
      description:
        "Immerse yourself in centuries of Japanese culture and tradition. Experience ancient temples, serene gardens, traditional tea ceremonies, and the breathtaking beauty of cherry blossoms in this historic imperial capital.",
      link: "/kyoto",
      linkText: "Explore Kyoto",
    },
    {
      title: "Santorini, Greece",
      imgSrc: SantoriniGreece,
      alt: "Santorini Sunset",
      description:
        "Experience the magic of the Mediterranean in this stunning Greek island. From iconic white-washed buildings and blue domes to spectacular sunsets, volcanic beaches, and world-class wineries, Santorini offers a perfect blend of romance and adventure.",
      link: "/santorini",
      linkText: "Explore Santorini",
    },
    {
      title: "Sedona, Arizona",
      imgSrc: SedonaArizonaUSA,
      alt: "Sedona Red Rocks",
      description:
        "Discover the spiritual heart of the American Southwest. With its stunning red rock formations, energy vortexes, and endless outdoor adventures, Sedona offers a unique blend of natural beauty, spiritual wellness, and outdoor excitement.",
      link: "/sedona",
      linkText: "Explore Sedona",
    },
    {
      title: "Bali, Indonesia",
      imgSrc: BaliIndonesia,
      alt: "Bali Temple",
      description:
        "Discover the Island of the Gods with its lush landscapes, ancient temples, and vibrant culture. From pristine beaches and terraced rice fields to spiritual retreats and world-class surfing, Bali offers a perfect blend of relaxation, adventure, and spiritual awakening.",
      link: "/bali",
      linkText: "Explore Bali",
    },
    {
      title: "Goa, India",
      imgSrc: GoaIndia,
      alt: "Goa Beach",
      description:
        "Experience the perfect blend of Indian and Portuguese cultures in this coastal paradise. With its golden beaches, spice plantations, colonial architecture, and vibrant nightlife, Goa offers a unique travel experience unlike anywhere else in India.",
      link: "/goa",
      linkText: "Explore Goa",
    },
    {
      title: "Paris, France",
      imgSrc: ParisFrance,
      alt: "Eiffel Tower",
      description:
        "Fall in love with the City of Light. From iconic landmarks like the Eiffel Tower and Louvre to charming cafés and world-class cuisine, Paris offers a perfect blend of art, history, romance, and culinary excellence in an atmosphere of timeless elegance.",
      link: "/paris",
      linkText: "Explore Paris",
    },
  ];

  return (
    <SectionContainer bgColor="bg-white" paddingY="py-24 sm:py-32">
      {/* Title and description */}
      <PageHeader 
        title="Our Top Destinations" 
        description="Discover the magic of these carefully curated destinations that promise unforgettable experiences."
      />

      {/* Destinations Grid */}
      <DestinationsGrid destinations={destinations} variant="detail" />
    </SectionContainer>
  );
};

export default TopDestination;
