import React from 'react'
import "./Footer.css";
//import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-columns paddings innerWidth">
          {/* Properties */}
          <div className="footer-col">
            <h3>Properties</h3>
            <ul>
              <li>House For Sale</li>
              <li>House For Rent</li>
              <li>Apartment For Rent</li>
              <li>Apartment For Sale</li>
            </ul>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h3>Links</h3>
            <ul>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li>Usage Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <ul>
              <li>Who Are We?</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-botttom-left">
                Copyright © 2025 Bahamas Real State
            </div>

          <div className="footer-bottom-logo">
            <img src='./logo.png' alt="Your Logo" />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer