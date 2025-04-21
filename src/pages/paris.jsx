import React from "react";
import { Link } from "react-router-dom";

// Import images
import parisImage from "../assets/images/paris.jpg";
import eiffelTower from "../assets/images/eiffiel_tower.jpg";
import louvreMuseum from "../assets/images/Louvre_museum.jpeg";
import parisCuisine from "../assets/images/best-french-food.jpg";
import montmartre from "../assets/images/Montmarte.jpeg";
import seineRiver from "../assets/images/Seine river.jpg";
import notredame from "../assets/images/Notre_dame_de_paris.jpg";

const Paris = () => {
  return (
    <main className="flex-1 bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden mb-10">
        <div className="relative w-full h-[70vh]">
          <img src={parisImage} alt="Paris, France" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">Paris, France</h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">The City of Light: Romance, art, and culinary excellence</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Discover Paris</h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Paris, the iconic capital of France and one of the world's most visited cities. Known for its art, fashion, gastronomy, and culture, Paris offers a perfect blend of historic grandeur and contemporary charm. From the iconic Eiffel Tower to the artistic treasures of the Louvre, the city captivates visitors with its timeless beauty and romantic ambiance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">130+</p>
                <p className="text-sm text-gray-600">Museums</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">2000+</p>
                <p className="text-sm text-gray-600">Years of History</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-4xl font-bold text-indigo-600">40,000</p>
                <p className="text-sm text-gray-600">Restaurants</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img src={eiffelTower} alt="Eiffel Tower" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
              Experience the Best of Paris
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  Iconic Landmarks
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Visit world-famous monuments like the Eiffel Tower, Arc de Triomphe, and Notre-Dame Cathedral that define Paris's majestic skyline and rich history.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  World-Class Museums
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Explore the Louvre, Musée d'Orsay, and Centre Pompidou, housing some of the world's most treasured art collections from ancient artifacts to modern masterpieces.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                  Culinary Excellence
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Indulge in Paris's renowned gastronomy, from Michelin-starred restaurants to charming bistros, patisseries, and the finest French wines and cheeses.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Paris Elegance Package</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our 5-day Paris Elegance package offers an immersive experience in the City of Light, combining iconic landmarks, cultural treasures, and authentic Parisian lifestyle.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>4 nights accommodation in a boutique hotel near the Seine</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily breakfast and 2 gourmet dinners</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Skip-the-line tickets to the Louvre and Eiffel Tower</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Seine River dinner cruise</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Guided walking tour of Montmartre and Latin Quarter</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-indigo-600 mb-4">$1,499</p>
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
                "Our Paris trip was everything we dreamed of and more. The hotel was charming and perfectly located, and the skip-the-line access to attractions saved us so much time. The Seine dinner cruise was magical!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Robert & Claire</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">New York, USA</div>
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
                "As an art lover, the Louvre and Musée d'Orsay were absolute highlights. Our guide was incredibly knowledgeable and passionate. The food was exceptional - especially the patisserie tour. Paris exceeded all expectations!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Sophia L.</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Melbourne, Australia</div>
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
                "The walking tour of Montmartre was the highlight of our trip - so charming and full of character. The hotel was comfortable, though a bit small (typical for Paris). Overall, a wonderful experience in this beautiful city."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Thomas & Maria</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Madrid, Spain</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Experience Paris</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image 1 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={eiffelTower} 
                 alt="Eiffel Tower" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Ascend the iconic Iron Lady for breathtaking views</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={louvreMuseum} 
                 alt="Louvre Museum" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Discover masterpieces at the world's largest art museum</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={montmartre} 
                 alt="Montmartre" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Wander through the artistic heart of Paris</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={seineRiver} 
                 alt="Seine River" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Cruise along the romantic Seine River</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={notredame} 
                 alt="Notre Dame" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Marvel at the Gothic masterpiece of Notre-Dame</p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative h-80 overflow-hidden rounded-lg group">
            <img src={parisCuisine} 
                 alt="French Cuisine" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-lg font-semibold text-center">Indulge in exquisite French gastronomy</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Paris;
