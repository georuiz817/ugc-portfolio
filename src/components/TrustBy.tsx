import "../styles/portfolio.css";
import "../index.css";
import avilaBeachHotelLogo from "../assets/UGCLOGOS/avila-beach-hotel-logo.png";
import wynwoodLogo from "../assets/UGCLOGOS/Wynwood.png";
import begasoLogo from "../assets/UGCLOGOS/Begaso.png";
import endlessSummerLogo from "../assets/UGCLOGOS/Endless Summer.png";
import jilooLogo from "../assets/UGCLOGOS/Jiloo.png";
import folkCafeLogo from "../assets/UGCLOGOS/Folk Cafe.png";
import inlightLogo from "../assets/UGCLOGOS/inlight-logo-300x_orig.png";
import casaArekaLogo from "../assets/UGCLOGOS/CasaAreka.png";

export function TrustBy() {
  return (
    <section className="trustby-section">
      <div className="portfolio-header">
        <h2>Trusted By...</h2>
      </div>
      <div className="trustby-container">
        <div className="trustby-row trustby-row-large">
          <div className="trustby-logo-col">
            <img
              src={avilaBeachHotelLogo}
              alt="Avila Beach Hotel"
              className="trustby-logo trustby-logo-large"
            />
          </div>
          <div className="trustby-logo-col">
            <img
              src={wynwoodLogo}
              alt="Wynwood"
              className="trustby-logo trustby-logo-large"
            />
          </div>
          <div className="trustby-logo-col">
            <img
              src={begasoLogo}
              alt="Begaso"
              className="trustby-logo trustby-logo-large"
            />
          </div>
        </div>
        <div className="trustby-row trustby-row-small">
          <div className="trustby-logo-col">
            <img
              src={endlessSummerLogo}
              alt="Endless Summer"
              className="trustby-logo trustby-logo-small"
            />
          </div>
          <div className="trustby-logo-col">
            <img
              src={jilooLogo}
              alt="Jiloo"
              className="trustby-logo trustby-logo-small"
            />
          </div>
          <div className="trustby-logo-col">
            <img
              src={folkCafeLogo}
              alt="Folk Cafe"
              className="trustby-logo trustby-logo-small"
            />
          </div>
          <div className="trustby-logo-col">
            <img
              src={inlightLogo}
              alt="Inlight"
              className="trustby-logo trustby-logo-small"
            />
          </div>
          <div className="trustby-logo-col">
            <img
              src={casaArekaLogo}
              alt="Casa Areka"
              className="trustby-logo trustby-logo-small"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
