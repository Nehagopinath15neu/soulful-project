import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTAButton from '../common/CTAButton';

const AboutSection = ({ image, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img className="size-full object-cover" src={image} alt={title} />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <defs>
            <linearGradient
              id="gradient"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset="1" stopColor="#FF4694" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            {description}
          </p>
          <div className="mt-8">
            <CTAButton to="/about" variant="secondary">
              {t('home.about.cta', 'Know More')}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
