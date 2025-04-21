import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/carousel.css";

import about from "../assets/images/about.png";
import sky from "../assets/images/sky.png";
import KyotoJapan from "../assets/images/kyoto-Japan.png";
import SantoriniGreece from "../assets/images/Santorini-Greece.png";
import SedonaArizonaUSA from "../assets/images/Sedona-Arizona-USA.png";
import picture01 from "../assets/images/picture01.png";
import picture02 from "../assets/images/picture02.png";
import picture03 from "../assets/images/picture03.png";
import picture04 from "../assets/images/picture04.png";
// Import additional images for the carousel
import baliImage from "../assets/images/Bali-hero.jpg";
import parisImage from "../assets/images/paris.jpg";
import goaImage from "../assets/images/GOA.jpeg";
import santoriniSunset from "../assets/images/santorini-sunset.png";
import redBeach from "../assets/images/red-beach.png";
import kyotoTemple from "../assets/images/kyoto-temple2.png";

const HomePageContent = () => {
  return (
    <main className="flex-1">
      {/* About Section */}
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img className="size-full object-cover" src={about} alt="About" />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <defs>
              <linearGradient
                id="gradient"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset="1" stopColor="#FF4694" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              About Soulful Sojourns
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              At Soulful Sojourns, we believe travel is not just about places, but about new ways of seeing things. Dedicated to crafting immersive experiences, we connect you with the heart of each destination. Join us for journeys that enrich, inspire, and rejuvenate.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top Destinations Section */}
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img src={sky} alt="Sky" className="size-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img src={sky} alt="Sky" className="size-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white" />
          </div>

          <div className="relative py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Top Destinations of Soulful Sojourns
            </h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="/topdestination"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Checkout!
              </a>
            </div>
          </div>
        </div>

        <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
          <h2 id="collection-heading" className="sr-only">Collections</h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            {[
              { src: KyotoJapan, title: "Kyoto, Japan", link: "/kyoto" },
              { src: SantoriniGreece, title: "Santorini, Greece", link: "/santorini" },
              { src: SedonaArizonaUSA, title: "Sedona, Arizona, USA", link: "/sedona" },
            ].map((item, index) => (
              <div key={index} className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-[4/5] sm:h-auto">
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img src={item.src} alt={item.title} className="size-full object-cover object-center" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                  <div>
                    <h3 className="mt-1 font-semibold text-white text-lg">
                      <a href={item.link} className="text-white hover:text-white">
                        <span className="absolute inset-0"></span>
                        {item.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Review Section */}
      <section className="bg-indigo-200">
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <figure className="mx-auto max-w-2xl">
            <div className="flex gap-x-1 text-indigo-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <blockquote className="mt-10 text-xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                "From the moment I started planning my trip with Soulful Sojourns, I knew I was in for something special. Every detail was handled with care, and the destinations were beyond breathtaking. Highly recommend for anyone looking to truly connect with the places they visit."
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img
                className="size-12 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                alt="Judith Black"
              />
              <div className="text-sm leading-6">
                <div className="font-semibold text-gray-900">Judith Black</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Image Carousel Section */}
      <div className="bg-gray-200 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Explore Our Destinations</h2>
          
          <div className="carousel-container relative px-8">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              responsive={[
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
              ]}
            >
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={picture01} alt="Gallery 1" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={picture02} alt="Gallery 2" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={picture03} alt="Gallery 3" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={picture04} alt="Gallery 4" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={baliImage} alt="Bali" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={parisImage} alt="Paris" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={goaImage} alt="Goa" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={santoriniSunset} alt="Santorini Sunset" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={redBeach} alt="Red Beach" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
              <div className="px-2">
                <div className="overflow-hidden rounded-lg">
                  <img src={kyotoTemple} alt="Kyoto Temple" className="w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                </div>
              </div>
            </Slider>
          </div>
          
          {/* View More Button */}
          <div className="mt-10 text-center">
            <Link
              to="/topdestination"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View All Destinations
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePageContent;

