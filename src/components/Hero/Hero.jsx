import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/real_react/Beach.jpg",
  "/real_react/Villa.jpg",
  "/real_react/Villa2.jpg",
  "/real_react/Island.jpg"
];

const categories = ["New Listings", "Lifestyle", "Communities", "Private Islands"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("New Listings");

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Spacer to push content below fixed header */}
      <div className="header-spacer" />

      <section id="Home" className="hero">
        {/* Background image */}
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div className="hero-overlay">
            <h1>Find Your Paradise in the Bahamas</h1>
            <p>Explore stunning homes, condos, and private islands.</p>

            {/* ✅ Button scrolls to Residences */}
            <button className="hero-btn">
              <a href="#Residences">Explore Residences</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
