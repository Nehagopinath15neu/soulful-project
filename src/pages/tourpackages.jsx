import React from "react";
import { Link } from "react-router-dom";

// Import images
import kyotoImage from "../assets/images/Kyoto-Japan.png";
import kyotoTemple from "../assets/images/kyoto-temple2.png";
import teaCeremony from "../assets/images/tea-ceremony.png";
import zenGarden from "../assets/images/zen-garden.png";
import kimonoExperience from "../assets/images/kimono-experience.png";
import japaneseCuisine from "../assets/images/japanese-cuisine.png";

import santoriniImage from "../assets/images/Santorini-Greece.png";
import santoriniSunset from "../assets/images/santorini-sunset.png";
import redBeach from "../assets/images/red-beach.png";
import wineTasting from "../assets/images/wine-tasting.png";
import catamaranCruise from "../assets/images/catamaran-cruise.png";
import oiaVillage from "../assets/images/oia-village.png";

import sedonaImage from "../assets/images/Sedona-Arizona-USA.png";
import redRock from "../assets/images/Red-Rock.png";
import sunriseYoga from "../assets/images/sunrise-yoga.png";
import hotAirBalloon from "../assets/images/hot-air-Balloon.png";
import cathedralRock from "../assets/images/cathedral-rock.png";
import nativeCulture from "../assets/images/native-culture.png";

const TourPackages = () => {
  return (
    <main className="bg-white flex-grow">
      {/* Tour Packages Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        {/* Kyoto Package */}
        <div className="group relative mb-24">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={kyotoImage} alt="Kyoto temples and cherry blossoms" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Kyoto Cultural Experience</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">Immerse yourself in the heart of Japanese culture with our 7-day Kyoto experience. Starting at $899 for two people, this journey takes you through ancient temples, traditional tea ceremonies, and the breathtaking beauty of cherry blossoms.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Guided tours of historic temples including Kinkaku-ji and Fushimi Inari</li>
                <li>Traditional tea ceremony experience</li>
                <li>Zen garden meditation session</li>
                <li>Kimono wearing experience</li>
                <li>Local cuisine cooking class</li>
                <li>Cherry blossom viewing (seasonal)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Details:</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">Duration:</dt>
                  <dd className="text-gray-600">7 days, 6 nights</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Price:</dt>
                  <dd className="text-gray-600">Starting at $899 for two people<br />Additional guests: +$299 per person</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Accommodation:</dt>
                  <dd className="text-gray-600">Traditional ryokan and modern hotel stays</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Kyoto Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                {/* Day 1 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 1: Arrival & Welcome</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Airport pickup and transfer to traditional ryokan</li>
                    <li>Welcome dinner featuring seasonal Kyoto cuisine</li>
                    <li>Evening orientation and trip overview</li>
                  </ul>
                </div>

                {/* Day 2 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 2: Ancient Temples & Tea Ceremony</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning visit to Kinkaku-ji (Golden Pavilion)</li>
                    <li>Traditional tea ceremony experience</li>
                    <li>Afternoon at Ryoan-ji Temple and rock garden</li>
                    <li>Evening walk through historic Gion district</li>
                  </ul>
                </div>

                {/* Day 3 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 3: Cultural Immersion</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Kimono fitting and wearing experience</li>
                    <li>Japanese cooking class with local chef</li>
                    <li>Visit to local craft workshops</li>
                    <li>Evening meditation session</li>
                  </ul>
                </div>

                {/* Day 4 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 4: Sacred Sites</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Early morning visit to Fushimi Inari Shrine</li>
                    <li>Bamboo Grove exploration in Arashiyama</li>
                    <li>Zen meditation at local temple</li>
                    <li>Traditional music performance</li>
                  </ul>
                </div>

                {/* Day 5 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 5: Nature & Gardens</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Cherry blossom viewing (seasonal)</li>
                    <li>Visit to imperial palace gardens</li>
                    <li>Traditional garden design workshop</li>
                    <li>Evening kaiseki dinner</li>
                  </ul>
                </div>

                {/* Day 6 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 6: Art & History</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Visit to Nijo Castle</li>
                    <li>Traditional arts workshop (calligraphy/origami)</li>
                    <li>Museum visits</li>
                    <li>Farewell dinner with maiko performance</li>
                  </ul>
                </div>

                {/* Day 7 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 7: Departure</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning free for shopping</li>
                    <li>Optional visit to local market</li>
                    <li>Airport transfer</li>
                  </ul>
                </div>
              </div>

              {/* Right side: Image Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-2 h-full">
                  {/* Large featured image */}
                  <div className="col-span-2 mb-2">
                    <img src={kyotoTemple} alt="Kyoto Temple" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  {/* Smaller images in grid */}
                  <div className="pr-1">
                    <img src={teaCeremony} alt="Tea Ceremony" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div className="pl-1">
                    <img src={zenGarden} alt="Zen Garden" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div className="pr-1 pt-2">
                    <img src={kimonoExperience} alt="Kimono Experience" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div className="pl-1 pt-2">
                    <img src={japaneseCuisine} alt="Japanese Cuisine" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border line after complete itinerary */}
          <div className="mt-8 border-t border-gray-900/10"></div>
        </div>

        {/* Santorini Package */}
        <div className="group relative mb-24">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={santoriniImage} alt="Santorini white buildings and blue domes" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Santorini Island Paradise</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">Experience the magic of the Mediterranean with our 5-day Santorini getaway. Starting at $899 for two people, enjoy stunning sunsets, white-washed villages, and crystal-clear waters.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Sunset catamaran cruise</li>
                <li>Wine tasting at local vineyards</li>
                <li>Private caldera view dinner</li>
                <li>Walking tour of Oia and Fira</li>
                <li>Beach day at Red Beach</li>
                <li>Greek cooking class</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Details:</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">Duration:</dt>
                  <dd className="text-gray-600">5 days, 4 nights</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Price:</dt>
                  <dd className="text-gray-600">Starting at $899 for two people<br />Additional guests: +$299 per person</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Accommodation:</dt>
                  <dd className="text-gray-600">Boutique hotel with caldera views</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Santorini Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 1: Welcome to Paradise</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Airport pickup and scenic transfer to hotel</li>
                    <li>Welcome drink at sunset viewpoint</li>
                    <li>Traditional Greek dinner in Oia</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 2: Island Exploration</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning walking tour of Oia</li>
                    <li>Visit to blue-domed churches</li>
                    <li>Afternoon wine tasting experience</li>
                    <li>Sunset photography session</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 3: Sea & Sun</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Catamaran cruise around the caldera</li>
                    <li>Swimming at volcanic hot springs</li>
                    <li>Beach BBQ lunch</li>
                    <li>Evening cooking class with local chef</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 4: Culture & History</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Visit to Akrotiri archaeological site</li>
                    <li>Red Beach exploration</li>
                    <li>Traditional village tour</li>
                    <li>Private caldera view dinner</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 5: Farewell</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning at leisure</li>
                    <li>Optional spa treatment</li>
                    <li>Airport transfer</li>
                  </ul>
                </div>
              </div>

              {/* Right side: Image Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Large featured image */}
                  <div className="col-span-2">
                    <img src={santoriniSunset} alt="Santorini Sunset" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  {/* Smaller images in grid */}
                  <div>
                    <img src={redBeach} alt="Red Beach" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={wineTasting} alt="Wine Tasting" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={catamaranCruise} alt="Catamaran Cruise" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={oiaVillage} alt="Oia Village" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border line after complete itinerary */}
          <div className="mt-8 border-t border-gray-900/10"></div>
        </div>

        {/* Sedona Package */}
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={sedonaImage} alt="Sedona red rocks and desert landscape" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sedona Red Rock Adventure</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">Discover the spiritual and natural wonders of Sedona with our 6-day adventure package. Starting at $899 for two people, explore stunning red rock formations and experience the unique energy of this desert paradise.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Guided vortex tours</li>
                <li>Jeep adventure through red rock formations</li>
                <li>Sunrise yoga sessions</li>
                <li>Hot air balloon ride</li>
                <li>Native American cultural experience</li>
                <li>Hiking in Oak Creek Canyon</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Details:</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">Duration:</dt>
                  <dd className="text-gray-600">6 days, 5 nights</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Price:</dt>
                  <dd className="text-gray-600">Starting at $899 for two people<br />Additional guests: +$299 per person</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Accommodation:</dt>
                  <dd className="text-gray-600">Luxury resort with red rock views</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Sedona Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 1: Arrival & Introduction</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Airport pickup from Phoenix/Flagstaff</li>
                    <li>Welcome ceremony with local guide</li>
                    <li>Evening vortex introduction</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 2: Spiritual Awakening</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Sunrise yoga session</li>
                    <li>Guided vortex tour</li>
                    <li>Meditation workshop</li>
                    <li>Stargazing experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 3: Adventure Day</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Pink Jeep tour through red rocks</li>
                    <li>Hiking at Cathedral Rock</li>
                    <li>Picnic lunch at scenic viewpoint</li>
                    <li>Evening sound healing session</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 4: Native Culture</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Native American cultural experience</li>
                    <li>Traditional crafts workshop</li>
                    <li>Medicine wheel ceremony</li>
                    <li>Storytelling around the fire</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 5: Natural Wonders</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Hot air balloon ride at sunrise</li>
                    <li>Oak Creek Canyon hike</li>
                    <li>Swimming at natural pools</li>
                    <li>Spa treatment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 6: Departure</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Final morning yoga session</li>
                    <li>Farewell ceremony</li>
                    <li>Airport transfer</li>
                  </ul>
                </div>
              </div>

              {/* Right side: Image Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Large featured image */}
                  <div className="col-span-2">
                    <img src={redRock} alt="Red Rocks" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  {/* Smaller images in grid */}
                  <div>
                    <img src={sunriseYoga} alt="Sunrise Yoga" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={hotAirBalloon} alt="Hot Air Balloon" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={cathedralRock} alt="Cathedral Rock" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={nativeCulture} alt="Native Culture" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border line after complete itinerary */}
          <div className="mt-8 border-t border-gray-900/10"></div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <Link to="/register" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Register Now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TourPackages;
