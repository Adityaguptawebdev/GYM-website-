





import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Social Media and Contact Information */}
        <div className="footer-left">
          {/* Social Media Links */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com/kgf__gym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:kgfgym@gmail.com">kgfgym@gmail.com</a></p>
            <p>Phone: <a href="tel:+9140097829">9140097829</a></p>
            <p>Address: <a href="https://www.google.com/maps?q=JUNGLE+HAKIM+NO-2+NEAR+PARDHAN+KATRA,+GORAKHPUR" target="_blank" rel="noopener noreferrer">JUNGLE HAKIM NO-2 NEAR PARDHAN KATRA, GORAKHPUR</a></p>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="footer-right">
          <div className="footer-section">
            <h4>Our Location</h4>
            <div className="map-container">
              {/* Smaller Google Maps Embedded */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.688970288801!2d83.40682041033632!3d26.77467947663268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914594dc12a21b%3A0xdee5cbc850f64fec!2sKGF%20GYM!5e1!3m2!1sen!2sin!4v1731932913463!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KGF GYM Location"
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KGF GYM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;





