import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from "../assets/images/logo.png";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-white w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:pr-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Soulful Sojourns</span>
          <img
            className="custom-logo w-auto"
            src={logo}
            alt="Soulful Sojourns"
            style={{ height: "65px" }}
          />
        </Link>

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
        <div className="hidden lg:flex lg:gap-x-6 lg:ml-auto lg:items-center lg:justify-end lg:flex-1">
          <div className="flex gap-x-6 items-center">
            <Link to="/destinations" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out flex items-center">
              {t('navbar.destinations')}
            </Link>
            <Link to="/packages" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out flex items-center">
              {t('navbar.packages')}
            </Link>
            <Link to="/registration" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out flex items-center">
              {t('navbar.register')}
            </Link>
            <Link to="/contactus" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out flex items-center">
              {t('navbar.contact')}
            </Link>
            <Link to="/login" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out flex items-center">
              {t('navbar.login')} →
            </Link>
          </div>
          
          {/* Language Selector */}
          <div className="ml-2 flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
