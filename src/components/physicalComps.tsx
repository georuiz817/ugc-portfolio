import "../styles/HospitalityTourism.css";

export function PhysicalComps() {
  return (
    <section className="hospitality-section">
      <div className="portfolio-header  hos-color">
        <h2>Physical Products</h2>
      </div>
      <div className="hospitality-container">
        <div className="hospitality-row">
          {/* Card 1 */}
          <div className="hospitality-card">
            <div className="hospitality-card-heading">
              <div className="hospitality-mini-header">
                SHOES
              </div>
              <div className="hospitality-large-header">
                feature showcase
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1122144587"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Vimeo Shoes Feature Showcase"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="hospitality-card">
            <div className="hospitality-card-heading">
              <div className="hospitality-mini-header">
                BACKPACKS
              </div>
              <div className="hospitality-large-header">
                testimonial
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1122144965"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Vimeo Backpacks Testimonial"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="hospitality-card">
            <div className="hospitality-card-heading">
              <div className="hospitality-mini-header">
                SUNSCREEN
              </div>
              <div className="hospitality-large-header">
                trending video
              </div>
            </div>
            <div className="hospitality-embed-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1122144938"
                className="hospitality-embed"
                loading="lazy"
                allowTransparency
                title="Vimeo Sunscreen Trending Video"
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