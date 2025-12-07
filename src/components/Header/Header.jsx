import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={230} />

        <div className="flexCenter h-menu">
          {/* Link to Residences section */}
          <a href="#Home">HOME</a>

          {/* Link to Residences section */}
          <a href="#Residences">RESIDENCES</a>

          {/* Link to Value section */}
          <a href="#Value">OUR VALUE</a>

          {/* Link to Contact section */}
          <a href="#Contact">CONTACT US</a>

          {/* Contact button also points to Contact section */}
          <button className="button">
            <a href="#Contact">CONTACT</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
