"use client";

import { Card } from "./ui/card";
import "../styles/abtesting.css";

interface VideoItem {
  id: number;
  category: string;
  embedUrl: string;
  videoPlatform: string; // Add this to match Portfolio
}

export function ABTesting() {
  const abTestingVideos: VideoItem[] = [
    {
      id: 101,
      category: "Hook 1",
      embedUrl:"https://player.vimeo.com/video/1126210202?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo" // Add this
    },
    {
      id: 102,
      category: "Hook 2", 
      embedUrl: "https://player.vimeo.com/video/1122144735?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo" // Add this
    },
  ];

  const renderInlineVideo = (item: VideoItem) => {
    if (item.videoPlatform === "vimeo") {
      return (
        <iframe
          src={item.embedUrl}
          className="abtesting-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <video
          src={item.embedUrl} // Use embedUrl as fallback
          controls
          autoPlay
          muted
          className="abtesting-video"
        >
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <section id="ab-testing" className="abtesting-section">
      <div className="abtesting-container">
        <div className="abtesting-header">
          <h2>Hook Testing</h2>
        </div>

        <div className="abtesting-grid">
          {abTestingVideos.map((item) => (
            <Card key={item.id} className="abtesting-card">
              <div className="abtesting-video-wrapper">
                {renderInlineVideo(item)}
              </div>
            </Card>
          ))}
        </div>

        <div className="abtesting-description">
          <h3>Why Testing Matters</h3>
          <p>
            Every audience is different. What works for one audience might not
            work for another. That's why we create multiple versions of your
            content and test them against each other.
          </p>
          <p>
            Our approach helps identify which messaging, visuals, and
            calls-to-action drive the best engagement for your specific
            audience.
          </p>
        </div>
      </div>
    </section>
  );
}