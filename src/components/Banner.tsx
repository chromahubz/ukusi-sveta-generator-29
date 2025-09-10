import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Utensils } from "lucide-react";
import bannerSerbian from "@/assets/banner-serbian.jpg";
import bannerItalian from "@/assets/banner-italian.jpg";
import bannerAsian from "@/assets/banner-asian.jpg";
import bannerHealthy from "@/assets/banner-healthy.jpg";
import bannerRandom from "@/assets/banner-random.jpg";

interface BannerProps {
  categoryId: string;
}

const getCategoryImage = (categoryId: string): string => {
  const imageMap: Record<string, string> = {
    // Serbian and Balkan
    serbian: bannerSerbian,
    homemade: bannerSerbian,
    bbq: bannerSerbian,
    gevrek: bannerSerbian,
    bakery: bannerSerbian,
    
    // Italian
    italian: bannerItalian,
    pasta: bannerItalian,
    pizza: bannerItalian,
    
    // Asian
    asian: bannerAsian,
    chinese: bannerAsian,
    japanese: bannerAsian,
    korean: bannerAsian,
    thai: bannerAsian,
    sushi: bannerAsian,
    noodles: bannerAsian,
    curry: bannerAsian,
    
    // Healthy
    healthy: bannerHealthy,
    salad: bannerHealthy,
    vegetarian: bannerHealthy,
    vegan: bannerHealthy,
    bowl: bannerHealthy,
    smoothie: bannerHealthy,
    "gluten-free": bannerHealthy,
    
    // Default for all others
    random: bannerRandom
  };
  
  return imageMap[categoryId] || bannerRandom;
};

export const Banner = ({ categoryId }: BannerProps) => {
  const bannerImage = getCategoryImage(categoryId);

  return (
    <Card className="food-card animate-fade-in overflow-hidden">
      <CardContent className="p-0">
        <div className="relative group">
          {/* Image */}
          <div className="aspect-[16/9] bg-gradient-primary overflow-hidden">
            <img
              src={bannerImage}
              alt={`${categoryId} cuisine`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Naručite hranu na Wolt-u
                  </h3>
                  <p className="text-white/90 mb-4">
                    Pronađite restorane u Beogradu i naručite omiljeno jelo
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Beograd</span>
                </div>
              </div>
              
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a
                  href="https://wolt.com/sr/srb/belgrade/restaurants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Poručite na Wolt-u
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};