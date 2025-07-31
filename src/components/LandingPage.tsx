import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Users, Star } from "lucide-react";
import farmhouseHero from "@/assets/farmhouse-hero.jpg";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${farmhouseHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Escape to
            <span className="block text-transparent bg-hero-gradient bg-clip-text">
              Nature's Embrace
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover peaceful farmhouse retreats where rustic charm meets modern comfort. 
            Book your perfect countryside getaway today.
          </p>
          
          {/* Search Section */}
          <div className="bg-card-gradient p-6 rounded-2xl shadow-nature max-w-2xl mx-auto backdrop-blur-sm border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Where do you want to go?"
                  className="pl-10 h-12 bg-background/80"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10 h-12 bg-background/80"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Guests"
                  className="pl-10 h-12 bg-background/80"
                />
              </div>
            </div>
            <Button variant="hero" size="xl" className="w-full" onClick={onGetStarted}>
              Find Your Perfect Farmhouse
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Our Farmhouses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-muted-foreground">
                Handpicked farmhouses in the most scenic countryside locations
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Experience</h3>
              <p className="text-muted-foreground">
                Luxury amenities combined with authentic rural charm
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Activities</h3>
              <p className="text-muted-foreground">
                Farm experiences, nature walks, and cultural immersion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;