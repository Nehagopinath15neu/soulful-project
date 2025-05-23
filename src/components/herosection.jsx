import React from "react";
import herosection from "../assets/images/herosection.png";

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden h-[500px] sm:h-[600px]">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 h-full">
        <img
          src={herosection}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Top blurred gradient shape */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Discover Your Soulful Destination with us
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Unforgettable journeys, exclusive deals, and world-class accommodations await. Book now and get 20% off on your first trip!
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/registration"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom blurred gradient shape */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
