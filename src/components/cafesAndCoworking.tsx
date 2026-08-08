import "../styles/cafesAndCoWorking.css";

export function CafesAndCoworking() {
  return (
    <section className="cafes-section">
      <div className="portfolio-header">
        <h2>CAFES &amp; COWORKING</h2>
      </div>
      <div className="cafes-container">
        <div className="cafes-row">
          {/* Card 1 */}
          <div className="cafes-card">
            <div className="cafes-card-heading">
              <div className="cafes-mini-header">
                CAFE
              </div>
              <div className="cafes-large-header">
                VoiceOVER
              </div>
            </div>
            <div className="cafes-embed-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1126196501"
                className="cafes-embed"
                loading="lazy"
                title="Vimeo Cafe Voiceover"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="cafes-card">
            <div className="cafes-card-heading">
              <div className="cafes-mini-header">
                COWORKING
              </div>
              <div className="cafes-large-header">
                TESTIMONIAL
              </div>
            </div>
            <div className="cafes-embed-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1122144520"
                className="cafes-embed"
                loading="lazy"
                title="Vimeo Coworking Testimonial"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          {/* Card 3 */}
          <div className="cafes-card">
            <div className="cafes-card-heading">
              <div className="cafes-mini-header">
                CAFE
              </div>
              <div className="cafes-large-header">
                CINEMATIC
              </div>
            </div>
            <div className="cafes-embed-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1126195868"
                className="cafes-embed"
                loading="lazy"
                title="Vimeo Cafe Cinematic"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}