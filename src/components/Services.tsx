"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Video, Plane, Waves, Smartphone } from "lucide-react";

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
      embedUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID_1?badge=0&autopause=0&player_id=0&app_id=58479",
      videoPlatform: "vimeo"
    },
    {
      id: 102,
      category: "Hook 2",
      embedUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID_2?badge=0&autopause=0&player_id=0&app_id=58479",
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 font-aboreto">
            Services
          </h2>
        </div>

        {/* Video Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">


          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTypes.map((video, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-1">
                  <CardTitle className="text-base">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hook Testing Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-medium mb-4">
              Hook Testing
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Video Cards */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {abTestingVideos.map((item) => (
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

            {/* Description */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Why Testing Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-primary">
                      Every audience is different. What works for one audience might not work for another. That's why we create multiple versions of your content and test them against each other.
                    </p>
                    <p className="text-sm text-primary">
                      Our approach helps identify which messaging, visuals, and calls-to-action drive the best engagement for your specific audience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium mb-4">Our Equipment</h3>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {equipment.map((item, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <p className="text-primary text-sm">
                    {item.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Capabilities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.capabilities.map((capability) => (
                        <Badge key={capability} variant="outline" className="text-xs">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}