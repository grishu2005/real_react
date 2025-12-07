import React, { useState, useEffect } from "react";
import "./Residences.css";

const residences = [
  {
    name: "Residence On Clifton Bay",
    price: "$43,5000,000",
    location: "Lyford Cay Estate",
    image: "/R1.jpg",
    details: "5 Bed | 5 Bath | 11,079 Sqft",
  },
  {
    name: "104 Harbourway Ocean Club",
    price: "$9,250,000",
    location: "Ocean Club Estate",
    image: "/R2.jpg",
    details: "6 Bed | 6 Bath | 5,862 Sqft",
  },
  {
    name: "Residences at Goldwyn, Unit 219",
    price: "$795,000",
    location: "GoldWynn Luxury Condos",
    image: "/R3.jpg",
    details: "1 Bed | 1 Bath | 513 Sqft",
  },
  {
    name: "Abaco, BS",
    price: "$872,500",
    location: "Montage Cay",
    image: "/R4.jpg",
    details: "3 Bed | 2 Bath | 4,100 Sqft",
  },
  {
    name: "One Ocean, Unit 702",
    price: "$975,000",
    location: "One Ocean",
    image: "/R5.jpg",
    details: "3 Bed | 3 Bath | 1,879 Sqft",
  },
  {
    name: "Starfish Isle, Unit 1104",
    price: "$925,000",
    location: "Palm Cay Estate",
    image: "/R6.jpg",
    details: "4 Bed | 4 Bath | 2,300 Sqft",
  },
];

export default function Residences() {
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(3);

  // 🔑 Switch between 3 (desktop) and 1 (mobile)
  useEffect(() => {
    const updateVisible = () => {
      setVisible(window.innerWidth <= 768 ? 1 : 3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const prev = () => {
    setStart(start === 0 ? residences.length - visible : start - 1);
  };

  const next = () => {
    setStart(start + visible >= residences.length ? 0 : start + 1);
  };

  const shown = residences.slice(start, start + visible);

  return (
    <section id="Residences" className="residences">
      <div className="res-headings">
        <h2 className="orangeText">Top Picks</h2>
        <h3 className="primaryText">Featured Residences</h3>
      </div>

      <div className="slider">
        <button onClick={prev} className="slider-btn">←</button>

        <div className="res-grid">
          {shown.map((res, i) => (
            <div className="res-card" key={i}>
              <img src={res.image} alt={res.name} />
              <h4>{res.name}</h4>
              <p>{res.price}</p>
              <p>{res.location}</p>
              <p>{res.details}</p>
              <button className="explore-btn">Explore</button>
            </div>
          ))}
        </div>

        <button onClick={next} className="slider-btn">→</button>
      </div>
    </section>
  );
}
