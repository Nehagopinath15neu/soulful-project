import React from 'react';

const TestimonialCard = ({ quote, author, authorImage, rating = 5 }) => {
  return (
    <figure className="mx-auto max-w-2xl">
      {/* Star Rating */}
      <div className="flex gap-x-1 text-indigo-600">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mt-10 text-xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
        <p>"{quote}"</p>
      </blockquote>
      
      {/* Author */}
      <figcaption className="mt-10 flex items-center gap-x-6">
        {authorImage && (
          <img
            className="size-12 rounded-full bg-gray-50"
            src={authorImage}
            alt={author}
          />
        )}
        <div className="text-sm leading-6">
          <div className="font-semibold text-gray-900">{author}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
