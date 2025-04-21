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

// Bali Images
import baliImage from "../assets/images/Bali-hero.jpg";
import baliTemple from "../assets/images/bali_temple.jpg";
import baliSunset from "../assets/images/bali_sunset.jpg";
import baliDance from "../assets/images/bali dance.jpg";
import balineseCuisine from "../assets/images/Balinese-cuisine.jpg";

// Goa Images
import goaImage from "../assets/images/GOA.jpeg";
import goaBeach from "../assets/images/goa_beach.jpeg";
import goaSunset from "../assets/images/GOA_sunset.jpeg";
import goaMarkets from "../assets/images/Goa-Markets.jpg";
import goaSpicePlantations from "../assets/images/spice-plantations-in-goa-large.jpg";
import goaCuisine from "../assets/images/spice-goa-food.jpg";

// Paris Images
import parisImage from "../assets/images/paris.jpg";
import eiffelTower from "../assets/images/eiffiel_tower.jpg";
import louvreMuseum from "../assets/images/Louvre_museum.jpeg";
import notredame from "../assets/images/Notre_dame_de_paris.jpg";
import seineRiver from "../assets/images/Seine river.jpg";
import parisCuisine from "../assets/images/best-french-food.jpg";
import montmartre from "../assets/images/Montmarte.jpeg";

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
        <div className="group relative mb-24">
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

        {/* Paris Package */}
        <div className="group relative mb-24">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={parisImage} alt="Paris cityscape with Eiffel Tower" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Paris: City of Light</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">Experience the romance and elegance of Paris with our 5-day cultural journey. Starting at $999 for two people, immerse yourself in world-class art, iconic landmarks, and exquisite French cuisine in the heart of Europe's most enchanting city.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Skip-the-line access to the Eiffel Tower</li>
                <li>Guided tour of the Louvre Museum</li>
                <li>Seine River dinner cruise</li>
                <li>Montmartre art district walking tour</li>
                <li>French pastry and wine tasting experience</li>
                <li>Day trip to Versailles Palace (optional)</li>
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
                  <dd className="text-gray-600">Starting at $999 for two people<br />Additional guests: +$349 per person</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Accommodation:</dt>
                  <dd className="text-gray-600">Boutique hotel in central Paris</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Paris Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 1: Bienvenue à Paris</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Airport pickup and hotel check-in</li>
                    <li>Welcome dinner at a traditional French bistro</li>
                    <li>Evening illuminations tour</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 2: Iconic Landmarks</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning visit to the Eiffel Tower with skip-the-line access</li>
                    <li>Lunch at a local café</li>
                    <li>Afternoon Seine River cruise</li>
                    <li>Evening at leisure to explore the Left Bank</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 3: Art & Culture</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Guided tour of the Louvre Museum</li>
                    <li>Lunch in the Tuileries Garden</li>
                    <li>Visit to Notre-Dame Cathedral (exterior view)</li>
                    <li>Evening wine and cheese tasting experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 4: Montmartre & Culinary Delights</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning walking tour of Montmartre art district</li>
                    <li>Visit to Sacré-Cœur Basilica</li>
                    <li>French pastry cooking class</li>
                    <li>Farewell dinner cruise on the Seine</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 5: Au Revoir</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning shopping on Champs-Élysées</li>
                    <li>Optional visit to Versailles Palace (additional fee)</li>
                    <li>Airport transfer</li>
                  </ul>
                </div>
              </div>

              {/* Right side: Image Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Large featured image */}
                  <div className="col-span-2">
                    <img src={eiffelTower} alt="Eiffel Tower" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  {/* Smaller images in grid */}
                  <div>
                    <img src={louvreMuseum} alt="Louvre Museum" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={notredame} alt="Notre Dame Cathedral" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={seineRiver} alt="Seine River" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={parisCuisine} alt="French Cuisine" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border line after complete itinerary */}
          <div className="mt-8 border-t border-gray-900/10"></div>
        </div>

        {/* Bali Package */}
        <div className="group relative mb-24">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={baliImage} alt="Bali rice terraces and temples" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Bali: Island of the Gods</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">Discover the mystical beauty of Bali with our 5-day tropical paradise experience. Starting at $899 for two people, explore ancient temples, lush rice terraces, and pristine beaches while immersing yourself in the island's rich spiritual culture.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Guided tour of sacred temples including Uluwatu and Tanah Lot</li>
                <li>Traditional Balinese dance performance</li>
                <li>Ubud art village exploration</li>
                <li>Tegallalang rice terrace visit</li>
                <li>Balinese cooking class</li>
                <li>Sunset beach dinner</li>
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
                  <dd className="text-gray-600">Luxury villa with private pool</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Bali Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 1: Welcome to Paradise</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Airport pickup and transfer to villa</li>
                    <li>Welcome drink and tropical fruit basket</li>
                    <li>Evening beach dinner at Jimbaran Bay</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 2: Sacred Temples</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning visit to Uluwatu Temple</li>
                    <li>Traditional Kecak dance performance</li>
                    <li>Afternoon at Tanah Lot Temple</li>
                    <li>Sunset photography session</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 3: Ubud Cultural Immersion</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Tegallalang rice terrace tour</li>
                    <li>Visit to sacred Monkey Forest</li>
                    <li>Ubud art market exploration</li>
                    <li>Traditional Balinese massage</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 4: Culinary & Nature</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning yoga session</li>
                    <li>Balinese cooking class with local chef</li>
                    <li>Visit to coffee plantation</li>
                    <li>Evening fire dance performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 5: Farewell</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning at leisure by private pool</li>
                    <li>Optional water temple blessing ceremony</li>
                    <li>Airport transfer</li>
                  </ul>
                </div>
              </div>

              {/* Right side: Image Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Large featured image */}
                  <div className="col-span-2">
                    <img src={baliTemple} alt="Bali Temple" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  {/* Smaller images in grid */}
                  <div>
                    <img src={baliSunset} alt="Bali Sunset" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={baliDance} alt="Balinese Dance" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={balineseCuisine} alt="Balinese Cuisine" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={baliTemple} alt="Bali Temple" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border line after complete itinerary */}
          <div className="mt-8 border-t border-gray-900/10"></div>
        </div>

        {/* Goa Package */}
        <div className="group relative mb-24">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={goaImage} alt="Goa beaches and culture" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Goa: Beaches & Spices</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">Experience the perfect blend of relaxation and adventure in Goa with our 5-day coastal retreat. Starting at $799 for two people, enjoy pristine beaches, Portuguese colonial heritage, vibrant markets, and delicious Goan cuisine.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Highlights:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Guided tour of Old Goa's Portuguese architecture</li>
                <li>Spice plantation visit with traditional lunch</li>
                <li>Sunset beach yoga sessions</li>
                <li>Anjuna flea market exploration</li>
                <li>Goan cooking class</li>
                <li>Dolphin watching cruise</li>
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
                  <dd className="text-gray-600">Starting at $799 for two people<br />Additional guests: +$249 per person</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Accommodation:</dt>
                  <dd className="text-gray-600">Beachfront resort with spa</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Goa Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 1: Coastal Welcome</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Airport pickup and resort check-in</li>
                    <li>Welcome coconut drink and orientation</li>
                    <li>Evening sunset beach walk</li>
                    <li>Dinner with live Goan music</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 2: Colonial Heritage</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning tour of Old Goa churches</li>
                    <li>Visit to Fontainhas Latin Quarter</li>
                    <li>Traditional Goan lunch</li>
                    <li>Evening cruise on the Mandovi River</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 3: Spices & Flavors</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Spice plantation tour</li>
                    <li>Traditional spice-infused lunch</li>
                    <li>Goan cooking class</li>
                    <li>Evening beach bonfire</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 4: Beach & Markets</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning dolphin watching cruise</li>
                    <li>Beach yoga session</li>
                    <li>Anjuna flea market visit</li>
                    <li>Sunset dinner at beachfront shack</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">Day 5: Relaxation & Departure</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>Morning Ayurvedic spa treatment</li>
                    <li>Free time for beach relaxation</li>
                    <li>Airport transfer</li>
                  </ul>
                </div>
              </div>

              {/* Right side: Image Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Large featured image */}
                  <div className="col-span-2">
                    <img src={goaBeach} alt="Goa Beach" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  {/* Smaller images in grid */}
                  <div>
                    <img src={goaSunset} alt="Goa Sunset" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={goaMarkets} alt="Goa Markets" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={goaSpicePlantations} alt="Goa Spice Plantations" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src={goaCuisine} alt="Goan Cuisine" className="w-full h-48 object-cover rounded-lg" />
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
          <Link to="/registration" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Register Now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TourPackages;
