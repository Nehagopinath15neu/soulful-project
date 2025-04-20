import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ marginTop: -10 }}>
      

      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {messageSent ? (
          // ✅ Confirmation Block
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <div className="mx-auto max-w-2xl text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mx-auto h-24 w-24 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Message Sent Successfully!
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Thank you for contacting Soulful Sojourns! We have received your message and our team will get back to you within 24 hours.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // ✅ Contact Form
          <form onSubmit={handleSubmit} className="space-y-12 p-8 bg-white rounded-lg">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-center">
              Contact Us
            </h1>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold text-gray-900">Get in Touch</h2>
              <p className="mt-1 text-sm text-gray-600">
                We'd love to hear from you. Please fill out this form.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {[
                  { label: "First name", name: "first-name", type: "text", span: 3 },
                  { label: "Last name", name: "last-name", type: "text", span: 3 },
                  { label: "Phone number", name: "phone-number", type: "tel", span: 3 },
                  { label: "Email", name: "email", type: "email", span: 3 },
                ].map((field, idx) => (
                  <div key={idx} className={`sm:col-span-${field.span}`}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-900">
                      {field.label}
                    </label>
                    <div className="mt-2">
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ))}
                <div className="col-span-full">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="border-b border-gray-900/10 pb-12">
              
              <div className="py-8">
                <h2 className="text-2xl font-bold mb-8">Our Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Address with Building Icon */}
                  <div className="flex items-start gap-3">
                    <svg 
                      className="h-6 w-6 text-gray-300" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 384 512"
                    >
                      <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
                    </svg>
                    <div>
                      <p className="text-gray-700">123 Park Ave</p>
                      <p className="text-gray-700">Arlington, VA, USA</p>
                    </div>
                  </div>

                  {/* Phone Icon */}
                  <div className="flex items-center gap-3">
                    <svg 
                      className="h-6 w-6 text-gray-300" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512 512"
                    >
                      <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                    <a href="tel:+1(555)234-5678" className="text-blue-600 hover:text-blue-800">
                      +1 (555) 234-5678
                    </a>
                  </div>

                  {/* Email Icon */}
                  <div className="flex items-center gap-3">
                    <svg 
                      className="h-6 w-6 text-gray-300" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512 512"
                    >
                      <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                    <a href="mailto:soulfulsojourns@gmail.com" className="text-blue-600 hover:text-blue-800">
                      soulfulsojourns@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-x-6 pt-6">
              <Link to="/" className="text-sm font-semibold text-gray-900 hover:text-gray-700">
                Cancel
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
