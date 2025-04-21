import React from "react";
import { Link } from "react-router-dom";

import kyotoTemple2 from "../assets/images/kyoto-temple2.png";
import person2 from "../assets/images/person2.png";
import Redrock from "../assets/images/Red-Rock.png";
import person4 from "../assets/images/person4.png";
import santoriniSunset from "../assets/images/santorini-sunset.png";
import person1 from "../assets/images/person1.png";
import baliTemple from "../assets/images/bali_temple.jpg";
import person3 from "../assets/images/person3.png";
import goaBeach from "../assets/images/goa_beach.jpeg";
import eiffelTower from "../assets/images/eiffiel_tower.jpg";
import seineRiver from "../assets/images/Seine river.jpg";

const Blog = () => {
  return (
    <div style={{ marginTop: "-10px" }}>
      

      {/* Blog Section */}
      <main className="flex-grow bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
            Travel Stories & Insights
          </h2>

          <div className="space-y-16">
            {/** BLOG POSTS DATA (could be moved to a JSON later) */}
            {[
              {
                title: "Discovering the Energy Vortexes of Sedona: A Spiritual Journey",
                date: "2024-03-16",
                category: "Spiritual Travel",
                description:
                  "Experience the mystical side of Sedona as we explore its famous energy vortexes and discover how these powerful sites can transform your travel experience into a spiritual awakening.",
                author: "Sarah Johnson",
                role: "Spiritual Guide & Travel Writer",
                image: Redrock,
                avatar: person4,
              },
              {
                title: "Hidden Gems of Santorini: Beyond the Famous Sunset",
                date: "2024-03-20",
                category: "Island Life",
                description:
                  "While Oia's sunset is world-famous, Santorini holds countless other treasures waiting to be discovered. From secret beaches to family-owned wineries, explore the authentic side of this Greek paradise.",
                author: "Elena Papadopoulos",
                role: "Local Guide & Culture Expert",
                image: santoriniSunset,
                avatar: person1,
              },
              {
                title: "The Art of Zen: A Season in Kyoto's Gardens",
                date: "2024-03-25",
                category: "Cultural Journey",
                description:
                  "Immerse yourself in the tranquil beauty of Kyoto's temple gardens through the seasons. Learn how these masterpieces of landscape design embody the principles of harmony, simplicity, and mindfulness.",
                author: "Takashi Yamamoto",
                role: "Garden Master & Cultural Guide",
                image: kyotoTemple2,
                avatar: person2,
              },
              {
                title: "Sacred Temples and Healing Rituals: Bali's Spiritual Side",
                date: "2024-04-02",
                category: "Wellness Travel",
                description:
                  "Beyond Bali's beautiful beaches lies a world of spiritual traditions and healing practices. Join us as we explore ancient temples, participate in purification ceremonies, and discover the island's unique approach to wellness and balance.",
                author: "Maya Dewi",
                role: "Wellness Expert & Cultural Guide",
                image: baliTemple,
                avatar: person3,
              },
              {
                title: "Goa's Perfect Blend: Portuguese Heritage Meets Indian Spirit",
                date: "2024-04-10",
                category: "Cultural Fusion",
                description:
                  "Discover how centuries of Portuguese influence created India's most unique coastal destination. From colonial architecture and fusion cuisine to vibrant markets and golden beaches, Goa offers a travel experience unlike anywhere else in the subcontinent.",
                author: "Raj Fernandes",
                role: "Historian & Food Explorer",
                image: goaBeach,
                avatar: person4,
              },
              {
                title: "Paris Beyond the Postcard: A Local's Guide to the City of Light",
                date: "2024-04-15",
                category: "Urban Exploration",
                description:
                  "Step away from the tourist crowds and discover the Paris that locals cherish. From hidden gardens and neighborhood cafés to underground art scenes and architectural treasures, experience the authentic heart of the world's most romantic city.",
                author: "Sophie Laurent",
                role: "Parisian Writer & Cultural Guide",
                image: eiffelTower,
                avatar: person1,
              },
            ].map((post, index) => (
              <article
                key={index}
                className="relative isolate flex flex-col lg:flex-row gap-8"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.avatar}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          {post.author}
                        </p>
                        <p className="text-gray-600">{post.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
