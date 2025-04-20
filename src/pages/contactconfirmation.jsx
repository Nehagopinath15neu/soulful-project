import React from "react";
import { Link } from "react-router-dom";

const ContactConfirmation = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-2xl text-center bg-white p-8 rounded-lg shadow-sm">
        <div className="mx-auto h-24 w-24 text-indigo-600">
          {/* Success checkmark icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Message Sent Successfully!</h1>
        
        <p className="mt-6 text-base leading-7 text-gray-600">
          Thank you for contacting Soulful Sojourns! We have received your message and our team will get back to you within 24 hours. We appreciate your interest and look forward to assisting you.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactConfirmation;
