// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Header from "./components/navbar";
import Banner from "./components/banner";
import HeroSection from "./components/herosection";
import HomePageContent from "./pages/home";
import TopDestination from "./pages/topdestination";
import TourPackages from "./pages/tourpackages";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotpassword";
import About from "./pages/about";
import Registration from "./pages/registration";
import ContactUs from "./pages/contactus";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import Footer from "./components/footer";
import Review from "./pages/review";
import Feedback from "./pages/feedback";
import Kyoto from "./pages/kyoto";
import Santorini from "./pages/santorini";
import Sedona from "./pages/sedona";
import Bali from "./pages/bali";
import Goa from "./pages/goa";
import Paris from "./pages/paris";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <Banner />
      {isHomePage && (
        <div className="flex flex-col">
          <HeroSection />
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/topdestination" element={<TopDestination />} />
        <Route path="/destinations" element={<TopDestination />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/kyoto" element={<Kyoto />} />
        <Route path="/santorini" element={<Santorini />} />
        <Route path="/sedona" element={<Sedona />} />
        <Route path="/bali" element={<Bali />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/paris" element={<Paris />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
