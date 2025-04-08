import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Register from "./components/Register";
import Footer from "./components/Footer";
import About from "./components/About";
import EventList from "./components/Eventlist";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <Events />
              <Register />
              <Footer />
            </>
          } />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
