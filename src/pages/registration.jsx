import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    numberOfTravelers: "",
    specialRequests: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex-grow bg-white">
      {!isSubmitted ? (
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
              Register for a Soulful Experience
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Join us for a transformative journey that will connect you with
              extraordinary destinations and create lasting memories.
            </p>

            <form
              id="registrationForm"
              className="bg-white rounded-lg shadow-sm p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="destination"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Preferred destination
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="destination"
                      name="destination"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option value="">Select a destination</option>
                      <option value="Kyoto, Japan">Kyoto, Japan</option>
                      <option value="Santorini, Greece">Santorini, Greece</option>
                      <option value="Sedona, Arizona">Sedona, Arizona</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="travelDate"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Preferred travel date
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="date"
                      name="travelDate"
                      id="travelDate"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.travelDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="numberOfTravelers"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Number of travelers
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      name="numberOfTravelers"
                      id="numberOfTravelers"
                      min="1"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={formData.numberOfTravelers}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="specialRequests"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Special requests or preferences
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="specialRequests"
                      id="specialRequests"
                      rows="4"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.specialRequests}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register Now
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500 text-center">
                By registering, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  terms of service
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div className="text-center mb-8">
              <div className="mx-auto h-12 w-12 text-green-600 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Registration Successful!</h3>
              <p className="mt-2 text-gray-600">
                Thank you for registering with Soulful Sojourns. We'll contact you within 24-48 hours.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Registration Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(formData).map(([key, value]) => {
                  if (value) {
                    const label = key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase());
                    return (
                      <div className="flex flex-col" key={key}>
                        <span className="text-sm font-medium text-gray-500">{label}</span>
                        <span className="mt-1 text-base font-medium text-gray-900">{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Registration;
