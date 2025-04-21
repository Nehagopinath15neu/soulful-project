import React from "react";
import { Link } from "react-router-dom";

// Import images
import santoriniImage from "../assets/images/Santorini-Greece.png";
import santoriniSunset from "../assets/images/santorini-sunset.png";
import wineTasting from "../assets/images/wine-tasting.png";
import redBeach from "../assets/images/red-beach.png";
import catamaranCruise from "../assets/images/catamaran-cruise.png";
import santoriniNight from "../assets/images/santorini-night.png";
import oiaVillage from "../assets/images/oia-village.png";

const Santorini = () => {
  return (
    <main className="flex-1 bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden mb-10">
        <div className="relative w-full h-[70vh]">
          <img src={santoriniImage} alt="Santorini, Greece" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">Santorini, Greece</h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">Where azure domes meet crystal waters</p>
          </div>
        </div>
      </div>

      {/* Destination Overview */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Discover Santorini</h2>
            <p className="text-lg text-gray-600 mb-4">
              Step into a world where white-washed buildings meet azure domes against the backdrop of the Aegean Sea. Santorini, shaped by one of history's largest volcanic eruptions, offers an enchanting blend of natural wonders, rich history, and Mediterranean charm.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">300+</p>
                <p className="text-sm text-gray-600">Sunny Days</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">15</p>
                <p className="text-sm text-gray-600">Traditional Villages</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">3600</p>
                <p className="text-sm text-gray-600">Years of History</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img src={santoriniImage} alt="Santorini Greece" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Highlights & Specialties */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">What Makes Santorini Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Iconic Architecture */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cycladic Architecture</h3>
              <p className="text-gray-600">Iconic white-washed buildings and blue-domed churches cascading down volcanic cliffs.</p>
            </div>

            {/* Volcanic Landscapes */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volcanic Landscapes</h3>
              <p className="text-gray-600">Experience the breathtaking views of the Aegean Sea and the volcanic landscape.</p>
            </div>

            {/* Culinary Excellence */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Culinary Excellence</h3>
              <p className="text-gray-600">Savor Santorini's refined cuisine, from fresh seafood to local wine and traditional Greek dishes.</p>
            </div>

            {/* Sunset Views */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunset Views</h3>
              <p className="text-gray-600">Experience the world-famous Oia sunset, painting the white buildings in golden hues.</p>
            </div>

            {/* Cave Hotels */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cave Hotels</h3>
              <p className="text-gray-600">Stay in unique cave accommodations carved into the volcanic cliffs with infinity pools.</p>
            </div>

            {/* Wine Heritage */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wine Heritage</h3>
              <p className="text-gray-600">Explore ancient vineyards and taste unique Assyrtiko wines grown in volcanic soil.</p>
            </div>

            {/* Catamaran Cruises */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Catamaran Cruises</h3>
              <p className="text-gray-600">Sail around the caldera, visit hot springs, and enjoy the island from a different perspective.</p>
            </div>

            {/* Colorful Beaches */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Colorful Beaches</h3>
              <p className="text-gray-600">Discover unique red, black, and white beaches formed by volcanic activity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Package Details */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">Our Santorini Experience</h2>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5-Day Mediterranean Journey</h3>
              <p className="text-gray-600 mb-6">Immerse yourself in Greek island life with our carefully curated 5-day experience. From sunset cruises to wine tasting, every moment is designed to connect you with Santorini's beauty.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Luxury Cave Hotel Stay</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sunset Catamaran Cruise</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Wine Tasting Tour</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Greek Cooking Class</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-2xl font-bold text-indigo-600">$899</p>
                <p className="text-sm text-gray-600">Starting price for two people</p>
              </div>
              <Link to="/registration" className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
                Book This Experience
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Reviews */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Our stay in the cave hotel was magical. The caldera views at sunrise were breathtaking, and the private terrace with infinity pool was perfect for relaxation. The staff's hospitality made us feel like family."</p>
              <p className="font-semibold text-gray-900">Maria & James P.</p>
              <p className="text-sm text-gray-500">Visited July 2024</p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The sunset catamaran cruise was unforgettable. Swimming in the hot springs, visiting the volcanic islands, and enjoying fresh Greek mezedes while watching the famous Oia sunset - pure perfection!"</p>
              <p className="font-semibold text-gray-900">Sophie & Thomas R.</p>
              <p className="text-sm text-gray-500">Visited June 2024</p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The wine tasting at Santo Wines was exceptional. Learning about Assyrtiko grapes and visiting the traditional vineyards, followed by a cooking class where we made authentic moussaka - a perfect Greek experience!"</p>
              <p className="font-semibold text-gray-900">David & Emma L.</p>
              <p className="text-sm text-gray-500">Visited May 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Experience Santorini</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image 1 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={santoriniSunset} 
                alt="Santorini Sunset" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Image 2 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={wineTasting} 
                alt="Wine Tasting" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Image 3 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={redBeach} 
                alt="Red Beach" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Image 4 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={catamaranCruise} 
                alt="Catamaran Cruise" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Image 5 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={santoriniNight} 
                alt="Santorini Night" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Image 6 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={oiaVillage} 
                alt="Oia Village" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Santorini;
