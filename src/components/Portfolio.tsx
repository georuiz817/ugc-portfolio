"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import "../styles/portfolio.css";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hotel", "Tourism", "Cafes & Coworking", "Physical Product"];

  const portfolioItems = [
    { id: 1, category: "Hotel", embedUrl: "https://player.vimeo.com/video/1126210202?badge=0&autopause=0&player_id=0&app_id=58479", videoPlatform: "vimeo" },
    { id: 2, category: "Tourism", embedUrl: "https://player.vimeo.com/video/1126209938?badge=0&autopause=0&player_id=0&app_id=58479", videoPlatform: "vimeo" },
    { id: 3, category: "Hotel", embedUrl: "https://player.vimeo.com/video/1126209854?badge=0&autopause=0&player_id=0&app_id=58479", videoPlatform: "vimeo" },
    { id: 4, category: "Physical Product", embedUrl: "https://player.vimeo.com/video/1122144587?badge=0&autopause=0&player_id=0&app_id=58479", videoPlatform: "vimeo" },
    { id: 5, category: "Cafes & Coworking", embedUrl: "https://player.vimeo.com/video/1122145147?badge=0&autopause=0&player_id=0&app_id=58479", videoPlatform: "vimeo" },
  ];

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const renderInlineVideo = (item: any) => {
    const { videoUrl, embedUrl, videoPlatform } = item;

    if (videoPlatform === "vimeo") {
      return (
        <iframe
          src={embedUrl}
          className="portfolio-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <video
          src={videoUrl}
          controls
          autoPlay
          muted
          className="portfolio-video"
        >
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Work</h2>
        </div>

        {/* Category Filter */}
        <div className="portfolio-categories">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category)}
              className={`portfolio-category-button ${activeCategory === category ? "active" : ""}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <Card key={item.id} className="portfolio-card">
              <div className="portfolio-video-wrapper">
                {renderInlineVideo(item)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
