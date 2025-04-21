import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Available languages
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  // Change language handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lng);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Set language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Get current language
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <span className="mr-1 text-lg">{currentLanguage.flag}</span>
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`${language.code === i18n.language ? 'bg-gray-100 text-indigo-600' : 'text-gray-700'} flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100`}
                onClick={() => changeLanguage(language.code)}
                role="menuitem"
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
