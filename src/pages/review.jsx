import React from 'react';
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <main className="flex-grow bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
          What Our Travelers Say
        </h2>

        {/* Sedona Reviews */}
        <ReviewSection
          title="Sedona Adventures"
          reviews={[
            {
              rating: 5,
              text: 'The vortex meditation experience was life-changing! Our guide was incredibly knowledgeable and helped us connect with Sedona\'s spiritual energy. The red rock formations were breathtaking.',
              name: 'Sarah & John M.',
              date: 'Visited March 2024',
            },
            {
              rating: 5,
              text: 'Mountain biking the trails was exhilarating! The local art galleries and restaurants in Tlaquepaque were charming. Perfect blend of adventure and culture.',
              name: 'Chris & Jennifer B.',
              date: 'Visited May 2024',
            }
          ]}
        />

        {/* Santorini Reviews */}
        <ReviewSection
          title="Santorini Experiences"
          reviews={[
            {
              rating: 5,
              text: 'The sunset catamaran cruise was magical! Swimming in the hot springs and enjoying local wine while watching the sun set over the caldera was unforgettable.',
              name: 'Maria & Andreas P.',
              date: 'Visited June 2024',
            },
            {
              rating: 5,
              text: 'The private wine tasting tour through traditional vineyards was exceptional. The knowledge of local wines combined with stunning views made it perfect.',
              name: 'Emma & James W.',
              date: 'Visited April 2024',
            }
          ]}
        />

        {/* Kyoto Reviews */}
        <ReviewSection
          title="Kyoto Experiences"
          reviews={[
            {
              rating: 5,
              text: 'The traditional tea ceremony and meditation session at the ancient temple was a deeply moving experience. Our guide\'s knowledge of Japanese culture and traditions made every moment meaningful.',
              name: 'Akiko & James T.',
              date: 'Visited April 2024',
            },
            {
              rating: 5,
              text: 'Walking through the bamboo forest and visiting the historic temples was like stepping back in time. The cherry blossom viewing and traditional ryokan stay exceeded our expectations.',
              name: 'Michael & Lisa K.',
              date: 'Visited March 2024',
            }
          ]}
        />

        {/* Overall Experience */}
        <ReviewSection
          title="Overall Experience"
          reviews={[
            {
              rating: 5,
              text: 'The attention to detail in planning our trip was impressive. Every accommodation, activity, and transfer was perfectly coordinated. Truly a stress-free travel experience.',
              name: 'Rachel & Mark T.',
              date: 'Visited May 2024',
            },
            {
              rating: 5,
              text: 'From booking to return, the team at Soulful Sojourns made our dream vacation a reality. Their local knowledge and personalized service exceeded our expectations.',
              name: 'Sofia & David L.',
              date: 'Visited March 2024',
            }
          ]}
        />

        {/* Stats */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat label="Average Rating" value="4.9/5" />
            <Stat label="Happy Travelers" value="500+" />
            <Stat label="Would Recommend" value="98%" />
            <Stat label="Destinations" value="3" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Story?
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="/tour-package"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Explore Tour Packages
            </a>
            <a
              href="/feedback"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-gray-50"
            >
              Share Your Experience
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

// Subcomponents

const ReviewSection = ({ title, reviews }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {reviews.map((review, idx) => (
        <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <StarRating count={review.rating} />
          <p className="text-gray-600 mb-4">"{review.text}"</p>
          <p className="font-semibold text-gray-900">{review.name}</p>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      ))}
    </div>
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <p className="text-4xl font-bold text-indigo-600">{value}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StarRating = ({ count }) => (
  <div className="flex text-yellow-400 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default Reviews;
