import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    destination: '',
    rating: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can also handle the backend API call here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex-grow bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 text-indigo-600 mb-8">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Thank You for Your Feedback!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We appreciate you taking the time to share your experience with us. Your feedback helps us improve our services.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/" className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Return Home
              </Link>
              <Link to="/packages" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-gray-50">
                Explore More Tours
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-white py-16">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
            Share Your Experience
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formValues.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formValues.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-medium leading-6 text-gray-900">Destination Visited</label>
              <select
                name="destination"
                id="destination"
                required
                value={formValues.destination}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                <option value="">Select a destination</option>
                <option value="sedona">Sedona, Arizona</option>
                <option value="santorini">Santorini, Greece</option>
                <option value="kyoto">Kyoto, Japan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">Rate Your Experience</label>
              <div className="flex gap-4 flex-wrap">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      id={`rating-${rating}`}
                      value={rating}
                      checked={formValues.rating === `${rating}`}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600"
                    />
                    <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-600">
                      {rating} - {['Very Bad', 'Bad', 'Average', 'Good', 'Excellent'][5 - rating]}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Your Feedback</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={formValues.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Feedback;
