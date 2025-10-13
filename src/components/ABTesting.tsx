"use client";


import { Card } from "./ui/card";

export function ABTesting() {
  
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
    <section id="ab-testing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 font-aboreto">
              Hook Testing
            </h2>

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
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-4 font-aboreto">Why Testing Matters</h3>
                <div className="space-y-4 text-primary">
                  <p>
                    Every audience is different. What works for one audience might not work for another. That's why we create multiple versions of your content and test them against each other.
                  </p>
                  <p>
                    Our approach helps identify which messaging, visuals, and calls-to-action drive the best engagement for your specific audience.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}