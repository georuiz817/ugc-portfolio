import { Instagram, Youtube, Video, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Remote Roams</h3>
            <p className="text-primary-foreground/80 text-sm">
              Blending diverse perspectives to showcase the soul of travel and hospitality
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:kashandgeorge@gmail.com" 
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Based Worldwide
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Follow Us</h4>
            <div className="space-y-2">
              <a 
                href="https://www.instagram.com/remoteroams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@remoteroams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Video className="h-4 w-4" />
                Tiktok
              </a>
              <a 
                href="https://www.youtube.com/@remoteroams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
                Youtube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Remote Roams </p>
        </div>
      </div>
    </footer>
  );
}