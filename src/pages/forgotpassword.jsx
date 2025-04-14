import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const ForgotPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword === passwords.confirmPassword) {
      setPasswordsMatch(true);
      // In a real app, you would handle password reset API call here
      // For now, we'll just navigate back to login
      navigate("/login");
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-10">
        <div>
          <img className="mx-auto h-22 w-auto" src={logo} alt="Soulful Sojourns" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Reset Your Password</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="col-span-2">
              <input 
                id="new-password" 
                name="newPassword" 
                type="password" 
                required 
                aria-label="Password" 
                className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                placeholder="Password"
                value={passwords.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="-mt-px">
              <input 
                id="confirm-password" 
                name="confirmPassword" 
                type="password" 
                required 
                aria-label="Confirm Password" 
                className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
                placeholder="Confirm Password"
                value={passwords.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {!passwordsMatch && (
            <p className="text-sm text-red-600 text-center">Passwords do not match</p>
          )}

          <div className="flex justify-center mt-6">
            <button 
              type="submit" 
              className="w-1/2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>

          <div className="text-center mt-4">
            <Link to="/login" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
