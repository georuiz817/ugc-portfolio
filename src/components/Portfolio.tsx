"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hotel", "Tourism", "Cafes & Coworking", "Physical Product"];

  const portfolioItems = [
    {
      id: 1,
      category: "Hotel",
      embedUrl: "https://player.vimeo.com/video/1126210202?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo",
    },
    {
      id: 2,
      category: "Tourism",
      embedUrl: "https://player.vimeo.com/video/1126209938?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo",
    },
      {
      id: 3,
      category: "Hotel",
      embedUrl: "https://player.vimeo.com/video/1126209854?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo",
    },
        {
      id: 4,
      category: "Physical Product",
      embedUrl: "https://player.vimeo.com/video/1122144587?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo",
    },
          {
      id: 5,
      category: "Cafes & Coworking",
      embedUrl: "https://player.vimeo.com/video/1122145147?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo",
    },
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const renderInlineVideo = (item: any) => {
    const { videoUrl, embedUrl, videoPlatform } = item;

    switch (videoPlatform) {
      case 'vimeo':
        return (
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        );
      
      case 'html5':
      default:
        return (
          <video
            src={videoUrl}
            controls
            autoPlay
            muted
            className="w-full h-full object-cover rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        );
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 font-aboreto">
            Work
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-lg ${
                activeCategory === category 
                  ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[9/16] overflow-hidden">
                <div className="relative w-full h-full">
                  {renderInlineVideo(item)}
                </div>

              </div>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}