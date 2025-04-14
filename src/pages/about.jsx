import React from "react";
import { Link } from "react-router-dom";

// Import images
import aboutImage from "../assets/images/about.png";
import person1 from "../assets/images/person4.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";
import award4 from "../assets/images/award4.png";

const About = () => {
  return (
    <main className="flex-grow bg-white">
      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Soulful Sojourns, we believe in creating transformative travel experiences that connect people with the world's most extraordinary destinations. From the spiritual red rocks of Sedona to the enchanting sunsets of Santorini, we curate journeys that inspire, rejuvenate, and create lasting memories.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img src={aboutImage} alt="Travel Experience" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2020, Soulful Sojourns grew from a passion for authentic travel experiences. We specialize in crafting unique journeys that blend cultural immersion, spiritual wellness, and natural wonders.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-2">2020</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
              <p className="text-gray-600">Started with curated experiences in Sedona, focusing on spiritual wellness and adventure.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-2">2022</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mediterranean Expansion</h3>
              <p className="text-gray-600">Expanded to Santorini, bringing our unique approach to Mediterranean destinations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-2">2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Recognition</h3>
              <p className="text-gray-600">Recognized for our commitment to authentic, transformative travel experiences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto mb-4">
              <img src={person1} alt="Team Member" className="rounded-full w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto mb-4">
              <img src={person2} alt="Team Member" className="rounded-full w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
            <p className="text-gray-600">Travel Experience Director</p>
          </div>

          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto mb-4">
              <img src={person3} alt="Team Member" className="rounded-full w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Elen Rodriguez</h3>
            <p className="text-gray-600">Customer Experience Manager</p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Experiences</h3>
              <p className="text-gray-600">We believe in creating genuine connections with local cultures and environments, offering experiences that go beyond typical tourist attractions.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Tourism</h3>
              <p className="text-gray-600">We're committed to responsible travel practices that respect local communities and preserve natural environments for future generations.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Growth</h3>
              <p className="text-gray-600">We design experiences that inspire personal transformation through cultural immersion and spiritual connection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">"Our Sedona retreat was life-changing. The team at Soulful Sojourns created an experience that perfectly balanced adventure with spiritual growth. The vortex meditation and red rock hiking were unforgettable."</p>
            <p className="font-semibold text-gray-900">- Rachel & Mark Thompson</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">"The Santorini experience exceeded all expectations. From the sunset catamaran cruise to the private wine tasting, every moment was carefully curated. The team's attention to detail made our trip truly special."</p>
            <p className="font-semibold text-gray-900">- Sofia & Andreas Papadopoulos</p>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <img src={award1} alt="Travel Award" className="h-full w-full object-contain" />
              </div>
              <p className="font-semibold text-gray-900">Best Spiritual Travel Experience 2023</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <img src={award2} alt="Travel Award" className="h-full w-full object-contain" />
              </div>
              <p className="font-semibold text-gray-900">Sustainable Tourism Award 2024</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <img src={award3} alt="Travel Award" className="h-full w-full object-contain" />
              </div>
              <p className="font-semibold text-gray-900">Excellence in Customer Service</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <img src={award4} alt="Travel Award" className="h-full w-full object-contain" />
              </div>
              <p className="font-semibold text-gray-900">Top Boutique Travel Agency 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
