import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <main className="bg-white flex-grow">
      {/* Tour Packages Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        {/* Kyoto Package */}
        <div className="group relative mb-24">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-3 sm:h-64">
            <img src={kyotoImage} alt="Kyoto temples and cherry blossoms" className="h-full w-full object-cover object-center" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{t('packages.kyoto.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">{t('packages.kyoto.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.kyoto.highlights')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {t('packages.kyoto.highlights_list', { returnObjects: true }).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Details:</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.kyoto.duration')}</dt>
                  <dd className="text-gray-600">{t('packages.kyoto.duration_value')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.kyoto.price')}</dt>
                  <dd className="text-gray-600">{t('packages.kyoto.price_value')}<br />{t('packages.kyoto.price_additional')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.kyoto.accommodation')}</dt>
                  <dd className="text-gray-600">{t('packages.kyoto.accommodation_value')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Kyoto Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('packages.kyoto.itinerary')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                {/* Day 1 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day1')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day1_items.item1')}</li>
                    <li>{t('packages.kyoto.day1_items.item2')}</li>
                    <li>{t('packages.kyoto.day1_items.item3')}</li>
                  </ul>
                </div>

                {/* Day 2 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day2')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day2_items.item1')}</li>
                    <li>{t('packages.kyoto.day2_items.item2')}</li>
                    <li>{t('packages.kyoto.day2_items.item3')}</li>
                    <li>{t('packages.kyoto.day2_items.item4')}</li>
                  </ul>
                </div>

                {/* Day 3 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day3')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day3_items.item1')}</li>
                    <li>{t('packages.kyoto.day3_items.item2')}</li>
                    <li>{t('packages.kyoto.day3_items.item3')}</li>
                    <li>{t('packages.kyoto.day3_items.item4')}</li>
                  </ul>
                </div>

                {/* Day 4 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day4')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day4_items.item1')}</li>
                    <li>{t('packages.kyoto.day4_items.item2')}</li>
                    <li>{t('packages.kyoto.day4_items.item3')}</li>
                    <li>{t('packages.kyoto.day4_items.item4')}</li>
                  </ul>
                </div>

                {/* Day 5 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day5')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day5_items.item1')}</li>
                    <li>{t('packages.kyoto.day5_items.item2')}</li>
                    <li>{t('packages.kyoto.day5_items.item3')}</li>
                    <li>{t('packages.kyoto.day5_items.item4')}</li>
                  </ul>
                </div>

                {/* Day 6 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day6')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day6_items.item1')}</li>
                    <li>{t('packages.kyoto.day6_items.item2')}</li>
                    <li>{t('packages.kyoto.day6_items.item3')}</li>
                    <li>{t('packages.kyoto.day6_items.item4')}</li>
                  </ul>
                </div>

                {/* Day 7 */}
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.kyoto.day7')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.kyoto.day7_items.item1')}</li>
                    <li>{t('packages.kyoto.day7_items.item2')}</li>
                    <li>{t('packages.kyoto.day7_items.item3')}</li>
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
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{t('packages.santorini.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">{t('packages.santorini.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.santorini.highlights')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {t('packages.santorini.highlights_list', { returnObjects: true }).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Details:</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.santorini.duration')}</dt>
                  <dd className="text-gray-600">{t('packages.santorini.duration_value')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.santorini.price')}</dt>
                  <dd className="text-gray-600">{t('packages.santorini.price_value')}<br />{t('packages.santorini.price_additional')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.santorini.accommodation')}</dt>
                  <dd className="text-gray-600">{t('packages.santorini.accommodation_value')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Santorini Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('packages.kyoto.itinerary')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.santorini.day1')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.santorini.day1_items.item1')}</li>
                    <li>{t('packages.santorini.day1_items.item2')}</li>
                    <li>{t('packages.santorini.day1_items.item3')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.santorini.day2')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.santorini.day2_items.item1')}</li>
                    <li>{t('packages.santorini.day2_items.item2')}</li>
                    <li>{t('packages.santorini.day2_items.item3')}</li>
                    <li>{t('packages.santorini.day2_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.santorini.day3')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.santorini.day3_items.item1')}</li>
                    <li>{t('packages.santorini.day3_items.item2')}</li>
                    <li>{t('packages.santorini.day3_items.item3')}</li>
                    <li>{t('packages.santorini.day3_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.santorini.day4')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.santorini.day4_items.item1')}</li>
                    <li>{t('packages.santorini.day4_items.item2')}</li>
                    <li>{t('packages.santorini.day4_items.item3')}</li>
                    <li>{t('packages.santorini.day4_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.santorini.day5')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.santorini.day5_items.item1')}</li>
                    <li>{t('packages.santorini.day5_items.item2')}</li>
                    <li>{t('packages.santorini.day5_items.item3')}</li>
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
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{t('packages.sedona.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">{t('packages.sedona.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.sedona.highlights')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {t('packages.sedona.highlights_list', { returnObjects: true }).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.sedona.details')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.sedona.duration')}</dt>
                  <dd className="text-gray-600">{t('packages.sedona.duration_value')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.sedona.price')}</dt>
                  <dd className="text-gray-600">{t('packages.sedona.price_value')}<br />{t('packages.sedona.price_additional')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.sedona.accommodation')}</dt>
                  <dd className="text-gray-600">{t('packages.sedona.accommodation_value')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Sedona Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('packages.kyoto.itinerary')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.sedona.day1')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.sedona.day1_items.item1')}</li>
                    <li>{t('packages.sedona.day1_items.item2')}</li>
                    <li>{t('packages.sedona.day1_items.item3')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.sedona.day2')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.sedona.day2_items.item1')}</li>
                    <li>{t('packages.sedona.day2_items.item2')}</li>
                    <li>{t('packages.sedona.day2_items.item3')}</li>
                    <li>{t('packages.sedona.day2_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.sedona.day3')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.sedona.day3_items.item1')}</li>
                    <li>{t('packages.sedona.day3_items.item2')}</li>
                    <li>{t('packages.sedona.day3_items.item3')}</li>
                    <li>{t('packages.sedona.day3_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.sedona.day4')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.sedona.day4_items.item1')}</li>
                    <li>{t('packages.sedona.day4_items.item2')}</li>
                    <li>{t('packages.sedona.day4_items.item3')}</li>
                    <li>{t('packages.sedona.day4_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.sedona.day5')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.sedona.day5_items.item1')}</li>
                    <li>{t('packages.sedona.day5_items.item2')}</li>
                    <li>{t('packages.sedona.day5_items.item3')}</li>
                    <li>{t('packages.sedona.day5_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.sedona.day6')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.sedona.day6_items.item1')}</li>
                    <li>{t('packages.sedona.day6_items.item2')}</li>
                    <li>{t('packages.sedona.day6_items.item3')}</li>
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
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{t('packages.paris.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">{t('packages.paris.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.paris.highlights')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {t('packages.paris.highlights_list', { returnObjects: true }).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.paris.details')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.paris.duration')}</dt>
                  <dd className="text-gray-600">{t('packages.paris.duration_value')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.paris.price')}</dt>
                  <dd className="text-gray-600">{t('packages.paris.price_value')}<br />{t('packages.paris.price_additional')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.paris.accommodation')}</dt>
                  <dd className="text-gray-600">{t('packages.paris.accommodation_value')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Paris Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('packages.kyoto.itinerary')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.paris.day1')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.paris.day1_items.item1')}</li>
                    <li>{t('packages.paris.day1_items.item2')}</li>
                    <li>{t('packages.paris.day1_items.item3')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.paris.day2')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.paris.day2_items.item1')}</li>
                    <li>{t('packages.paris.day2_items.item2')}</li>
                    <li>{t('packages.paris.day2_items.item3')}</li>
                    <li>{t('packages.paris.day2_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.paris.day3')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.paris.day3_items.item1')}</li>
                    <li>{t('packages.paris.day3_items.item2')}</li>
                    <li>{t('packages.paris.day3_items.item3')}</li>
                    <li>{t('packages.paris.day3_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.paris.day4')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.paris.day4_items.item1')}</li>
                    <li>{t('packages.paris.day4_items.item2')}</li>
                    <li>{t('packages.paris.day4_items.item3')}</li>
                    <li>{t('packages.paris.day4_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.paris.day5')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.paris.day5_items.item1')}</li>
                    <li>{t('packages.paris.day5_items.item2')}</li>
                    <li>{t('packages.paris.day5_items.item3')}</li>
                    <li>{t('packages.paris.day5_items.item4')}</li>
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
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{t('packages.bali.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">{t('packages.bali.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.bali.highlights')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {t('packages.bali.highlights_list', { returnObjects: true }).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.bali.details')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.bali.duration')}</dt>
                  <dd className="text-gray-600">{t('packages.bali.duration_value')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.bali.price')}</dt>
                  <dd className="text-gray-600">{t('packages.bali.price_value')}<br />{t('packages.bali.price_additional')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.bali.accommodation')}</dt>
                  <dd className="text-gray-600">{t('packages.bali.accommodation_value')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Bali Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('packages.kyoto.itinerary')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.bali.day1')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.bali.day1_items.item1')}</li>
                    <li>{t('packages.bali.day1_items.item2')}</li>
                    <li>{t('packages.bali.day1_items.item3')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.bali.day2')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.bali.day2_items.item1')}</li>
                    <li>{t('packages.bali.day2_items.item2')}</li>
                    <li>{t('packages.bali.day2_items.item3')}</li>
                    <li>{t('packages.bali.day2_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.bali.day3')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.bali.day3_items.item1')}</li>
                    <li>{t('packages.bali.day3_items.item2')}</li>
                    <li>{t('packages.bali.day3_items.item3')}</li>
                    <li>{t('packages.bali.day3_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.bali.day4')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.bali.day4_items.item1')}</li>
                    <li>{t('packages.bali.day4_items.item2')}</li>
                    <li>{t('packages.bali.day4_items.item3')}</li>
                    <li>{t('packages.bali.day4_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.bali.day5')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.bali.day5_items.item1')}</li>
                    <li>{t('packages.bali.day5_items.item2')}</li>
                    <li>{t('packages.bali.day5_items.item3')}</li>
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
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{t('packages.goa.title')}</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 mb-6">{t('packages.goa.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.goa.highlights')}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {t('packages.goa.highlights_list', { returnObjects: true }).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('packages.goa.details')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.goa.duration')}</dt>
                  <dd className="text-gray-600">{t('packages.goa.duration_value')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.goa.price')}</dt>
                  <dd className="text-gray-600">{t('packages.goa.price_value')}<br />{t('packages.goa.price_additional')}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">{t('packages.goa.accommodation')}</dt>
                  <dd className="text-gray-600">{t('packages.goa.accommodation_value')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Goa Detailed Itinerary */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('packages.kyoto.itinerary')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side: Daily Itinerary */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.goa.day1')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.goa.day1_items.item1')}</li>
                    <li>{t('packages.goa.day1_items.item2')}</li>
                    <li>{t('packages.goa.day1_items.item3')}</li>
                    <li>{t('packages.goa.day1_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.goa.day2')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.goa.day2_items.item1')}</li>
                    <li>{t('packages.goa.day2_items.item2')}</li>
                    <li>{t('packages.goa.day2_items.item3')}</li>
                    <li>{t('packages.goa.day2_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.goa.day3')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.goa.day3_items.item1')}</li>
                    <li>{t('packages.goa.day3_items.item2')}</li>
                    <li>{t('packages.goa.day3_items.item3')}</li>
                    <li>{t('packages.goa.day3_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.goa.day4')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.goa.day4_items.item1')}</li>
                    <li>{t('packages.goa.day4_items.item2')}</li>
                    <li>{t('packages.goa.day4_items.item3')}</li>
                    <li>{t('packages.goa.day4_items.item4')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-indigo-600">{t('packages.goa.day5')}</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>{t('packages.goa.day5_items.item1')}</li>
                    <li>{t('packages.goa.day5_items.item2')}</li>
                    <li>{t('packages.goa.day5_items.item3')}</li>
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
