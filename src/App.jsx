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
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/navbar";
import Banner from "./components/banner";
import HeroSection from "./components/herosection";
import HomePageContent from "./pages/home";
import TopDestination from "./pages/topdestination";
import TourPackages from "./pages/tourpackages";
import DestinationDetail from "./pages/destinationdetail";
import Footer from "./components/footer";

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
        <Route path="/destinations" element={<TopDestination />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
