import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
      <h1>UC Berkeley</h1>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img
            src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            alt="icons"
            height={'30px'}
            width={'30px'}
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="icons"
            height={'30px'}
            width={'30px'}
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://img.icons8.com/?size=100&id=XErM9A1xNUK5&format=png&color=000000"
            alt="icons"
            height={'30px'}
            width={'30px'}
          />
        </div>
      </div>
      <div className="subpart">
      <a href="#">Medium</a>  <a href="#">Visit</a> <a href="#">Jobs</a> <a href="#">News</a> <a href="#">Blog</a> 
      <a href="#">Events</a> <a href="#">Give</a>
      </div>
      </div>
      <hr/>
      <div className="part1">
      <ul className="footer-links"> 
        <li>Libraries</li> 
        <li>Cal</li> 
        <li>Athletics</li> 
        <li>Equity,Inclliusion & Diversity</li>
        <li>Accreditation</li>
        <li> Berkeley Inspire</li>
        <li>HEERF Report</li>
        <li>Nondiscriminatione</li>
        <li> Websites A-Z</li>
        <li> Directore</li>
        <li> Map</li>
        <li> Contact Us</li>
        <li> Privacy policy</li>
        <li> Accessibility</li>
        <li> Media inquiries</li>
      </ul>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
