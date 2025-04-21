import React from "react";
import { Link } from "react-router-dom";

// Import images
import sedonaImage from "../assets/images/Sedona-Arizona-USA.png";
import redRocks from "../assets/images/Red-Rock.png";
import hikingTrail from "../assets/images/hiking-trail.png";
import vortexSite from "../assets/images/vortex-site.png";
import jeepTour from "../assets/images/jeep-tour.png";
import sedonaSunset from "../assets/images/sedona-sunset.png";
import canyonView from "../assets/images/canyon-view.png";
import sunriseYoga from "../assets/images/sunrise-yoga.png";
import hotAirBalloon from "../assets/images/hot-air-Balloon.png";
import cathedralRock from "../assets/images/cathedral-rock.png";
import nativeCulture from "../assets/images/native-culture.png";
import sedonaCuisine from "../assets/images/sedona-cuisine.png";

const Sedona = () => {
  return (
    <main className="flex-1 bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden mb-10">
        <div className="relative w-full h-[70vh]">
          <img src={sedonaImage} alt="Sedona, Arizona" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">Sedona, Arizona</h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">Where red rock beauty meets spiritual energy</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Discover Sedona</h2>
            <p className="text-lg text-gray-600 mb-4">
              Experience the magic of red rock country where stunning natural formations meet spiritual energy. Sedona, known for its vortexes and dramatic landscapes, offers an perfect blend of outdoor adventure, wellness, and southwestern charm.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">200+</p>
                <p className="text-sm text-gray-600">Hiking Trails</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">4</p>
                <p className="text-sm text-gray-600">Energy Vortexes</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">300</p>
                <p className="text-sm text-gray-600">Sunny Days</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img src={redRocks} alt="Red Rock Formations" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Highlights & Specialties */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">What Makes Sedona Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Red Rock Formations */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Rock Formations</h3>
              <p className="text-gray-600">Iconic sandstone formations like Cathedral Rock and Bell Rock offer stunning views and hiking opportunities.</p>
            </div>
  
            {/* Energy Vortexes */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Vortexes</h3>
              <p className="text-gray-600">Discover spiritual energy centers known for their healing and meditative properties.</p>
            </div>
  
            {/* Outdoor Adventures */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Outdoor Adventures</h3>
              <p className="text-gray-600">World-class hiking, mountain biking, and jeep tours through stunning red rock terrain.</p>
            </div>
  
            {/* Wellness & Spa */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wellness & Spa</h3>
              <p className="text-gray-600">Luxurious spa treatments and wellness experiences inspired by Native American traditions.</p>
            </div>
  
            {/* Art Galleries */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Art Scene</h3>
              <p className="text-gray-600">Vibrant arts community with over 80 galleries showcasing Southwestern and contemporary art.</p>
            </div>
  
            {/* Local Cuisine */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Southwest Cuisine</h3>
              <p className="text-gray-600">Farm-to-table restaurants and authentic Southwestern flavors with stunning views.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Package Details */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">Our Sedona Experience</h2>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5-Day Mediterranean Journey</h3>
              <p className="text-gray-600 mb-6">Immerse yourself in Greek island life with our carefully curated 5-day experience. From sunset cruises to wine tasting, every moment is designed to connect you with Sedona's beauty.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Luxury Cave Hotel Stay</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Guided Vortex Tours</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Pink Jeep Adventure Tour</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Sunrise Hot Air Balloon Ride</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Guided Meditation Sessions</span>
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
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The Pink Jeep tour to ancient ruins was incredible! Our guide was knowledgeable about geology and Native American history. The sunset at Cathedral Rock was absolutely magical."</p>
              <p className="font-semibold text-gray-900">Robert & Lisa K.</p>
              <p className="text-sm text-gray-500">Visited March 2024</p>
            </div>
  
            {/* Review Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The vortex meditation tour followed by a spa treatment was transformative. Hiking Devil's Bridge at sunrise was breathtaking. Sedona's energy is truly special."</p>
              <p className="font-semibold text-gray-900">Michael & Amy S.</p>
              <p className="text-sm text-gray-500">Visited April 2024</p>
            </div>
  
            {/* Review Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Mountain biking the trails was exhilarating! The local art galleries and restaurants in Tlaquepaque were charming. Perfect blend of adventure and culture."</p>
              <p className="font-semibold text-gray-900">Chris & Jennifer B.</p>
              <p className="text-sm text-gray-500">Visited May 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Experience Sedona</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image 1 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={sunriseYoga} 
                 alt="Sunrise Yoga" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Begin your day with yoga amidst the red rocks</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={hotAirBalloon} 
                 alt="Hot Air Balloon" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Soar above the majestic landscape in a hot air balloon</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={cathedralRock} 
                 alt="Cathedral Rock" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Hike the iconic Cathedral Rock formation</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={nativeCulture} 
                 alt="Native Culture" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Connect with the rich Native American heritage</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={sedonaImage} 
                 alt="Sedona Landscape" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Experience the breathtaking red rock vistas</p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={sedonaCuisine} 
                 alt="Sedona Cuisine" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Taste the flavors of Southwest cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sedona;
