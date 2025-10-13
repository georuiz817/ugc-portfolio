import image_833975ad9fafa7ba67b1adab48bacc5f7c8af8bb from 'figma:asset/833975ad9fafa7ba67b1adab48bacc5f7c8af8bb.png';
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight font-aboreto">
                Remote Roams UGC
              </h1>
              <p className="text-xl text-primary max-w-lg">
                A digital nomad couple blending diverse perspectives to showcase the soul of travel and hospitality </p>
            </div>
            
            <div className="space-y-4">

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#portfolio">
                  View Our Work
                </a>
              </Button>

            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={image_833975ad9fafa7ba67b1adab48bacc5f7c8af8bb}
                alt="Kash & George travel content creators"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}