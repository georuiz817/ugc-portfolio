import image_833975ad9fafa7ba67b1adab48bacc5f7c8af8bb from 'figma:asset/833975ad9fafa7ba67b1adab48bacc5f7c8af8bb.png';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import '../styles/hero.css';

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-heading">
              <h1>Remote Roams UGC</h1>
              <p>
                A digital nomad couple blending diverse perspectives to showcase
                the soul of travel and hospitality
              </p>
            </div>

            <div className="hero-buttons">
              <Button size="lg" asChild>
                <a href="#portfolio">View Our Work</a>
              </Button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <ImageWithFallback
                src={image_833975ad9fafa7ba67b1adab48bacc5f7c8af8bb}
                alt="Kash & George travel content creators"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
