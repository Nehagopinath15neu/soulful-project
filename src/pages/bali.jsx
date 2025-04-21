import React from "react";
import { Link } from "react-router-dom";

// Import images
import baliImage from "../assets/images/beach.jpg";
import baliTemple from "../assets/images/bali_temple.jpg";
import baliBeach from "../assets/images/beach.jpg";
import baliRiceTerraces from "../assets/images/rice_terrace.jpg";
import baliCuisine from "../assets/images/Balinese-cuisine.jpg";
import baliDance from "../assets/images/bali dance.jpg";
import baliSunset from "../assets/images/bali_sunset.jpg";

const Bali = () => {
  return (
    <main className="flex-1 bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden mb-10">
        <div className="relative w-full h-[70vh]">
          <img src={baliImage} alt="Bali, Indonesia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">Bali, Indonesia</h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">Island of the Gods: Where spirituality meets paradise</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/registration"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Your Journey
              </Link>
              <Link
                to="/contactus"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Overview */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Discover Bali</h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Bali, Indonesia's most famous island destination. Known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs, Bali is a paradise for travelers seeking both relaxation and adventure. The island's rich cultural heritage is evident in its thousands of Hindu temples, traditional ceremonies, and vibrant arts scene.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">10,000+</p>
                <p className="text-sm text-gray-600">Temples</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">80+</p>
                <p className="text-sm text-gray-600">Beaches</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">365</p>
                <p className="text-sm text-gray-600">Days of Beauty</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img src={baliTemple} alt="Bali Temple" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Highlights & Specialties */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Highlights & Specialties
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience the Best of Bali
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  Sacred Temples
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Explore Bali's ancient temples like Uluwatu, Tanah Lot, and Besakih, perched on cliffs, surrounded by the sea, or nestled on the slopes of Mount Agung.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  Rice Terraces
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Witness the breathtaking Tegallalang and Jatiluwih rice terraces, UNESCO-recognized landscapes that showcase Bali's ancient subak irrigation system.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  Wellness & Yoga
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Immerse yourself in Bali's spiritual side with yoga retreats, traditional healing practices, and luxurious spa treatments in Ubud and beyond.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Tour Package Details */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Bali Explorer Package</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our comprehensive 7-day Bali Explorer package takes you through the island's most iconic locations, from the cultural heart of Ubud to the stunning beaches of Uluwatu and Nusa Dua.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>6 nights accommodation in luxury villas and resorts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily breakfast and 3 traditional Balinese dinners</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Private guided tours of temples and cultural sites</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sunrise trek to Mount Batur volcano</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Traditional Balinese cooking class</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-indigo-600 mb-4">$1,299</p>
            <p className="text-gray-600 mb-6">per person, based on double occupancy</p>
            <Link
              to="/booking"
              className="block w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-md font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Book This Package
            </Link>
            <p className="text-sm text-gray-500 mt-4">* Airfare not included. Optional activities available at additional cost.</p>
          </div>
        </div>
      </div>

      {/* Guest Reviews */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Guest Reviews
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Travelers Say
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Bali trip was absolutely magical! From the serene rice terraces to the stunning beaches, every moment was picture-perfect. Our guide was knowledgeable and helped us discover hidden gems we would have missed otherwise."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Emma & David</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">London, UK</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The sunrise trek to Mount Batur was the highlight of our trip! Watching the sun rise over the volcano while enjoying a hot breakfast was an experience we'll never forget. The accommodations were luxurious and the staff went above and beyond."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Michael T.</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Toronto, Canada</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a solo traveler, I was concerned about navigating Bali on my own, but this tour package made everything seamless. The cooking class was fantastic, and I loved learning about Balinese culture from the locals. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Sarah J.</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Sydney, Australia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Experience Bali</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image 1 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={baliBeach} 
                 alt="Bali Beach" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Relax on pristine beaches with crystal clear waters</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={baliRiceTerraces} 
                 alt="Rice Terraces" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Explore the stunning terraced rice fields of Tegallalang</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={baliTemple} 
                 alt="Bali Temple" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Discover ancient temples and spiritual traditions</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={baliDance} 
                 alt="Traditional Dance" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Experience the vibrant cultural performances</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={baliSunset} 
                 alt="Bali Sunset" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Witness breathtaking sunsets over the ocean</p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={baliCuisine} 
                 alt="Balinese Cuisine" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Savor authentic Balinese flavors and spices</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bali;
