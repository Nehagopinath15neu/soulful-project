import React from "react";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  // Destination data
  const destinations = [
    {
      title: t('destinations.kyoto.title'),
      imgSrc: KyotoJapan,
      alt: "Kyoto Temple",
      description: t('destinations.kyoto.description'),
      link: "/kyoto",
      linkText: t('destinations.kyoto.cta'),
    },
    {
      title: t('destinations.santorini.title'),
      imgSrc: SantoriniGreece,
      alt: "Santorini Sunset",
      description: t('destinations.santorini.description'),
      link: "/santorini",
      linkText: t('destinations.santorini.cta'),
    },
    {
      title: t('destinations.sedona.title'),
      imgSrc: SedonaArizonaUSA,
      alt: "Sedona Red Rocks",
      description: t('destinations.sedona.description'),
      link: "/sedona",
      linkText: t('destinations.sedona.cta'),
    },
    {
      title: t('destinations.bali.title'),
      imgSrc: BaliIndonesia,
      alt: "Bali Temple",
      description: t('destinations.bali.description'),
      link: "/bali",
      linkText: t('destinations.bali.cta'),
    },
    {
      title: t('destinations.goa.title'),
      imgSrc: GoaIndia,
      alt: "Goa Beach",
      description: t('destinations.goa.description'),
      link: "/goa",
      linkText: t('destinations.goa.cta'),
    },
    {
      title: t('destinations.paris.title'),
      imgSrc: ParisFrance,
      alt: "Eiffel Tower",
      description: t('destinations.paris.description'),
      link: "/paris",
      linkText: t('destinations.paris.cta'),
    },
  ];

  return (
    <SectionContainer bgColor="bg-white" paddingY="py-24 sm:py-32">
      {/* Title and description */}
      <PageHeader 
        title={t('destinations.title')} 
        description={t('destinations.description')}
      />

      {/* Destinations Grid */}
      <DestinationsGrid destinations={destinations} variant="detail" />
    </SectionContainer>
  );
};

export default TopDestination;
