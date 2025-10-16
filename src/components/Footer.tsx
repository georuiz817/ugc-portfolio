import { Instagram, Youtube, Video, MapPin, Mail } from "lucide-react";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-company">
            <h3 className="footer-company-name">Remote Roams</h3>
            <p className="footer-company-description">
              Blending diverse perspectives to showcase the soul of travel and hospitality
            </p>
            <div className="footer-contact">
              <a 
                href="mailto:kashandgeorge@gmail.com" 
                className="footer-link"
              >
                <Mail className="footer-icon" />
                Email
              </a>
              <div className="footer-location">
                <MapPin className="footer-icon" />
                Based Worldwide
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">Follow Us</h4>
            <div className="footer-social-links">
              <a 
                href="https://www.instagram.com/remoteroams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Instagram className="footer-icon" />
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@remoteroams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Video className="footer-icon" />
                Tiktok
              </a>
              <a 
                href="https://www.youtube.com/@remoteroams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Youtube className="footer-icon" />
                Youtube
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Remote Roams </p>
        </div>
      </div>
    </footer>
  );
}