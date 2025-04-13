import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-white w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <a href="/home-page" className="-m-1.5 p-1.5">
          <span className="sr-only">Soulful Sojourns</span>
          <img
            className="custom-logo w-auto"
            src={logo}
            alt="Soulful Sojournss"
            style={{ height: "65px" }}
          />
        </a>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/top-destination-page" className="text-sm font-semibold leading-6 text-gray-900">
            Top Destinations
          </a>
          <a href="/tour-package-page" className="text-sm font-semibold leading-6 text-gray-900">
            Tour Packages
          </a>
          <a href="/registration-form" className="text-sm font-semibold leading-6 text-gray-900">
            Register
          </a>
          <a href="/contact-us-page" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </a>
          <a href="/login-page" className="text-sm font-semibold leading-6 text-gray-900">
            Log in →
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
