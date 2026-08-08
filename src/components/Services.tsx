"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Waves, Smartphone, Drone, Camera } from "lucide-react";

import '../styles/services.css'
 
export function Services() {
  const videoTypes = [
    {
      title: "Drone & Underwater",
      description: "Immersive perspectives to add a unique touch "
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
      icon: Drone,
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
    },
    {
      icon: Camera,
      title: "DJI Osmo Pocket 3",
      description: "Ultra stabilized mini gimbal camera for the smoothest footage",
      capabilities: ["Cinematic footage", "Timelapse", "Stabilization"],
      color: "text-cyan-500"
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Equipment Section FIRST */}
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
                  <div className="capabilities-label">Capabilities:</div>
                  <div className="capabilities-list">
                    {item.capabilities.map((capability) => (
                      <Badge key={capability} className="capability-badge">
                        {capability}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div  id="services" className="services-header">
          <h2>Services</h2>
        </div>

        {/* Video Types (Services) SECOND */}
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
      </div>
    </section>
  );
}
