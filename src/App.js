import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Register from "./components/Register";
import Footer from "./components/Footer";
import About from "./components/About";
import EventPage from "./components/EventPage";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <About />
        <Events />
        <Register />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
