import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"

import "../styles/FlipCountdown.css";

const HeroSection = () => {


  const CountdownTimer = () => {
    const eventDate = new Date("2025-04-18T10:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(eventDate - new Date().getTime());
      }, 1000);
      return () => clearInterval(timer);
    }, [eventDate]);

    const formatTime = (time) => {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
      <div className="countdown-container">
        <div className="countdown-box animate-flip">
          <span className="countdown-number">{days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-box animate-flip">
          <span className="countdown-number">{hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-box animate-flip">
          <span className="countdown-number">{minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-box animate-flip">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    );
  };



  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <video autoPlay loop muted className="video-background">
        <source
          src="\path1.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <h1 className="font-orbitron text-4xl text-[#f72585]">
          PARADOX 2K25
        </h1>
      </div>
      <div className="overlay"></div>
      <div className="relative z-10 text-pink-500 px-5">
        <TypeAnimation
          sequence={[
            "Welcome to Tech Event 2025",
            3000,
            "Innovate, Code, Compete!",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        />

        <h1 className="text-2xl md:text-3xl animate-fadeInUp neon-glow mt-5">
          Event Starts in:
        </h1>
        <CountdownTimer />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-8 py-6 rounded-2xl shadow-lg w-fit mx-auto text-center mt-20 animate-bounce font-bold border-2 border-white/20 backdrop-blur-sm"
        >
          <p className="text-xl mb-2 animate-pulse">🎉 Spot Registration Available ..!</p>
          <p className="text-base">⏰ Timing: 8.30 A.M to 9.30 A.M</p>
          <p className="text-base">🚀 1st come 1st serve</p>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
