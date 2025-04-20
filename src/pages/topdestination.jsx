import React from "react";
import { Link } from "react-router-dom";
import KyotoJapan from "../assets/images/kyoto-Japan.png";
import SantoriniGreece from "../assets/images/Santorini-Greece.png";
import SedonaArizonaUSA from "../assets/images/Sedona-Arizona-USA.png";

const TopDestination = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title and description */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Top Destinations
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover the magic of these carefully curated destinations that promise unforgettable experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Destination Cards */}
          {[
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
              link: "/santorini-destination",
              linkText: "Explore Santorini",
            },
            {
              title: "Sedona, Arizona",
              imgSrc: SedonaArizonaUSA,
              alt: "Sedona Red Rocks",
              description:
                "Discover the spiritual heart of the American Southwest. With its stunning red rock formations, energy vortexes, and endless outdoor adventures, Sedona offers a unique blend of natural beauty, spiritual wellness, and outdoor excitement.",
              link: "/sedona-destination",
              linkText: "Explore Sedona",
            },
          ].map((destination, index) => (
            <article
              key={index}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={destination.imgSrc}
                alt={destination.alt}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

              <h3 className="mt-3 text-2xl font-bold leading-6 text-white">
                {destination.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {destination.description}
              </p>
              <div className="mt-6">
                <Link
                  to={destination.link}
                  className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                >
                  {destination.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
