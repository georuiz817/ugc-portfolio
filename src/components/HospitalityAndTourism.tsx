import "../styles/HospitalityTourism.css";
import "../index.css";

export function HospitalityTourism() {
  return (
    <section className="hospitality-section">
      <div className="portfolio-header">
        <h2>Hospitality &amp; Tourism</h2>
      </div>
      <div className="hospitality-container">
        <div className="hospitality-row">

          {/* First card with stats */}
          <div className="hospitality-card">
            <div className="hospitality-stats">
              <div className="hospitality-stat">
                <span className="hospitality-stat-label">Views</span>
                <span className="hospitality-stat-value">11,550</span>
              </div>
              <div className="hospitality-stat">
                <span className="hospitality-stat-label">Interactions</span>
                <span className="hospitality-stat-value">80</span>
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://www.instagram.com/p/REPLACE_ME_1/embed"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Instagram post 1"
              />
            </div>
          </div>

          {/* Second card with stats */}
          <div className="hospitality-card">
            <div className="hospitality-stats">
              <div className="hospitality-stat">
                <span className="hospitality-stat-label">Views</span>
                <span className="hospitality-stat-value">0</span>
              </div>
              <div className="hospitality-stat">
                <span className="hospitality-stat-label">Interactions</span>
                <span className="hospitality-stat-value">0</span>
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://www.instagram.com/p/REPLACE_ME_2/embed"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Instagram post 2"
              />
            </div>
          </div>

          {/* Third card with stats */}
          <div className="hospitality-card">
            <div className="hospitality-stats">
              <div className="hospitality-stat">
                <span className="hospitality-stat-label">Views</span>
                <span className="hospitality-stat-value">0</span>
              </div>
              <div className="hospitality-stat">
                <span className="hospitality-stat-label">Interactions</span>
                <span className="hospitality-stat-value">0</span>
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://www.instagram.com/p/REPLACE_ME_3/embed"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Instagram post 3"
              />
            </div>
          </div>

          {/* Example for additional card – no stats, use mini header and large header */}
          <div className="hospitality-card">
            <div className="hospitality-card-heading">
              <div
                className="hospitality-mini-header"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "5px",
                  textTransform: "uppercase"
                }}
              >
                Mini Header
              </div>
              <div
                className="hospitality-large-header"
                style={{
                  fontFamily: "'Aboreto', cursive",
                  fontSize: "24px",
                  marginTop: "0.35em"
                }}
              >
                Large Header
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://www.instagram.com/p/REPLACE_ME_4/embed"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Instagram post 4"
              />
            </div>
          </div>

          {/* Example for another additional card */}
          <div className="hospitality-card">
            <div className="hospitality-card-heading">
              <div
                className="hospitality-mini-header"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "5px",
                  textTransform: "uppercase"
                }}
              >
                Mini Header 2
              </div>
              <div
                className="hospitality-large-header"
                style={{
                  fontFamily: "'Aboreto', cursive",
                  fontSize: "24px",
                  marginTop: "0.35em"
                }}
              >
                Large Header 2
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://www.instagram.com/p/REPLACE_ME_5/embed"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Instagram post 5"
              />
            </div>
          </div>

          {/* Add more cards as needed following the above structure */}

        </div>
      </div>
    </section>
  );
}