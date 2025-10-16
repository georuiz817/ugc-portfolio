"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Video, Plane, Waves, Smartphone } from "lucide-react";
import '../styles/services.css'
 
export function Services() {
  const videoTypes = [
    {
      title: "Montages",
      description: "Visual storytelling that captures the essence of your brand in seconds."
    },
    {
      title: "Cinematic Videos", 
      description: "High-quality, content with smooth camera movements and cinematic flair."
    },
    {
      title: "Voiceovers & Script Reads",
      description: "Engaging narration that brings your message to life with authentic delivery."
    },
    {
      title: "Day in the Life Vlogs",
      description: "Authentic behind-the-scenes content showing genuine moments."
    },
    {
      title: "Unboxing Videos",
      description: "Product reveals that build excitement and showcase features in an engaging way."
    },
    {
      title: "How-to Tutorials",
      description: "Educational content that demonstrates processes, features, or experiences step-by-step."
    },
    {
      title: "Property & Room Tours",
      description: "Comprehensive walkthroughs that showcase spaces, amenities, and unique features."
    },
    {
      title: "Trending Videos",
      description: "Creative content that leverages current social media trends and viral formats."
    }
  ];

  const equipment = [
    {
      icon: Plane,
      title: "DJI Mini 4 Pro Drone",
      description: "Stunning aerial perspectives and smooth cinematic drone footage for breathtaking overviews.",
      capabilities: ["Aerial shots", "Cinematic movements", "4K video", "Follow shots"],
      color: "text-blue-500"
    },
    {
      icon: Smartphone,
      title: "iPhone 15 Pro",
      description: "Professional-grade mobile filming with advanced camera capabilities and creative flexibility.",
      capabilities: ["Creative angles", "Portrait mode", "Night mode", "ProRes video"],
      color: "text-gray-600"
    },
    {
      icon: Waves,
      title: "GoPro Hero 11",
      description: "Adventure-ready action camera for unique perspectives and underwater filming.",
      capabilities: ["Underwater footage", "Action shots", "Wide angles", "Stabilization"],
      color: "text-cyan-500"
    }
  ];

  const abTestingVideos = [
    {
      id: 101,
      category: "Hook 1",
      embedUrl: "https://player.vimeo.com/video/1122144735?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo"
    },
    {
      id: 102,
      category: "Hook 2",
      embedUrl: "https://player.vimeo.com/video/1122144672?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo"
    }
  ];

  const renderInlineVideo = (item: any) => {
    const { videoUrl, embedUrl, videoPlatform } = item;

    switch (videoPlatform) {
      case 'vimeo':
        return (
          <iframe
            src={embedUrl}
            className="hook-video"
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
            className="hook-video"
          >
            Your browser does not support the video tag.
          </video>
        );
    }
  };

  return (
    <section className="services-section">
      <div className="services-container">

        {/* Section Header */}
        <div className="services-header">
          <h2>Services</h2>
        </div>

        {/* Video Types */}
        <div className="video-types-grid">
          {videoTypes.map((video, index) => (
            <Card key={index} className="video-type-card">
              <CardHeader className="video-type-card-header">
                <CardTitle className="video-type-card-title">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="video-type-card-content">
                <p>{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      {/* Hook Testing */}
<div className="hook-testing-section">
  <div className="hook-testing-header">
    <h3 className="hook-testing-title">Hook Testing</h3>
  </div>

  <div className="hook-videos-grid">
    <div className="hook-videos-container">
      <div className="hook-videos-inner-grid">
        {abTestingVideos.map((item) => (
          <Card key={item.id} className="hook-video-card">
            <div className="hook-video-wrapper">
              {renderInlineVideo(item)}
            </div>
          </Card>
        ))}
      </div>
    </div>

    <div className="hook-description-container">
      <Card className="hook-description-card">
        <CardHeader className="hook-description-header">
          <CardTitle className="hook-description-title">Why Testing Matters</CardTitle>
        </CardHeader>
        <CardContent className="hook-description-content">
          <p className="hook-description-text">Every audience is different. What works for one audience might not work for another. That's why we create multiple versions of your content and test them against each other.</p>
          <p className="hook-description-text">Our approach helps identify which messaging, visuals, and calls-to-action drive the best engagement for your specific audience.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>

{/* Equipment Section */}
<div className="equipment-section">
  <div className="equipment-header">
    <h3 className="equipment-title">Our Equipment</h3>
  </div>

  <div className="equipment-grid">
    {equipment.map((item, index) => (
      <Card key={index} className="equipment-card">
        <CardHeader className="equipment-card-header">
          <div className="equipment-icon-title">
            <item.icon className={`equipment-icon ${item.color.replace('text-', 'equipment-')}`} />
            <CardTitle className="equipment-card-title">{item.title}</CardTitle>
          </div>
          <p className="equipment-description">{item.description}</p>
        </CardHeader>
        <CardContent className="equipment-capabilities">
          {item.capabilities.map((capability) => (
            <Badge key={capability} className="capability-badge">
              {capability}
            </Badge>
          ))}
        </CardContent>
      </Card>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
