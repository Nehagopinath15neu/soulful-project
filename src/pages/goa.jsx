import React from "react";
import { Link } from "react-router-dom";

// Import images
import goaImage from "../assets/images/GOA.jpeg";
import goaBeach from "../assets/images/goa_beach.jpeg";
import goaSpices from "../assets/images/spice-plantations-in-goa-large.jpg";
import goaMarket from "../assets/images/Goa-Markets.jpg";
import goaCuisine from "../assets/images/spice-goa-food.jpg";
import goaChurch from "../assets/images/portugese_church.jpg";
import goaSunset from "../assets/images/GOA_sunset.jpeg";

const Goa = () => {
  return (
    <main className="flex-1 bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden mb-10">
        <div className="relative w-full h-[70vh]">
          <img src={goaImage} alt="Goa, India" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">Goa, India</h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">Where beaches meet heritage in a perfect blend</p>
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
                Contact Us <span aria-hidden="true">u2192</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Overview */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Discover Goa</h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Goa, India's smallest state with the biggest personality. A blend of Indian and Portuguese cultures, Goa offers pristine beaches along the Arabian Sea, colonial architecture, spice plantations, and a vibrant nightlife. From relaxing on golden sands to exploring 16th-century churches, Goa provides a unique travel experience unlike anywhere else in India.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">50+</p>
                <p className="text-sm text-gray-600">Beaches</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">450</p>
                <p className="text-sm text-gray-600">Years of Heritage</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">300+</p>
                <p className="text-sm text-gray-600">Sunny Days</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img src={goaBeach} alt="Goa Beach" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
              Experience the Best of Goa
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  Portuguese Heritage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Explore Goa's colonial past through its UNESCO World Heritage sites, including the Basilica of Bom Jesus and the Churches and Convents of Old Goa.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Spice Plantations
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Visit aromatic spice plantations where you can learn about the cultivation of cardamom, pepper, cloves, and nutmeg while enjoying traditional Goan cuisine.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Beach Life
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Experience Goa's famous beaches, from the lively shores of Baga and Calangute to the tranquil stretches of Agonda and Palolem, perfect for sunbathing, water sports, or sunset views.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Goa Discovery Package</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our 6-day Goa Discovery package offers the perfect blend of relaxation and exploration, taking you from pristine beaches to historic sites and vibrant markets.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5 nights accommodation in beachfront resorts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily breakfast and 2 authentic Goan dinners</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Heritage tour of Old Goa and its churches</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Spice plantation visit with traditional lunch</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sunset cruise on the Mandovi River</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-indigo-600 mb-4">$899</p>
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
                "Goa exceeded all our expectations! The beaches were pristine, and the blend of Indian and Portuguese cultures was fascinating. The spice plantation tour was a highlight, and the food was absolutely incredible."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Raj & Priya</div>
                <span className="mx-2 text-gray-500">u2022</span>
                <div className="text-gray-500">Mumbai, India</div>
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
                "The sunset cruise on the Mandovi River was magical. We saw dolphins and enjoyed traditional Goan music and dance. Our beachfront resort was perfect, and the staff made our honeymoon truly special."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">James & Lisa</div>
                <span className="mx-2 text-gray-500">u2022</span>
                <div className="text-gray-500">Chicago, USA</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="h-5 w-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The heritage tour was informative and the churches were beautiful. I would have liked more time at the beaches, but overall it was a great experience. The Goan cuisine was a delightful surprise - so flavorful!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Elena K.</div>
                <span className="mx-2 text-gray-500">u2022</span>
                <div className="text-gray-500">Berlin, Germany</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Experience Goa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image 1 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={goaBeach} 
                 alt="Goa Beach" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Unwind on Goa's golden sandy beaches</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={goaChurch} 
                 alt="Portuguese Church" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Explore Goa's rich Portuguese colonial heritage</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={goaSpices} 
                 alt="Spice Plantation" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Discover aromatic spice plantations and their secrets</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={goaMarket} 
                 alt="Local Market" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Browse vibrant local markets for unique treasures</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={goaSunset} 
                 alt="Goa Sunset" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Experience magical sunsets over the Arabian Sea</p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={goaCuisine} 
                 alt="Goan Cuisine" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Savor the unique flavors of Goan cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Goa;
