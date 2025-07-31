import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Wifi, Car, Utensils, ArrowLeft } from "lucide-react";

interface SearchResultsProps {
  onBack: () => void;
  onSelectFarmhouse: (farmhouse: any) => void;
}

// Mock farmhouse data
const mockFarmhouses = [
  {
    id: 1,
    name: "Sunset Valley Farm",
    location: "Tuscany Hills, Italy",
    price: 150,
    rating: 4.8,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400",
    capacity: 8,
    amenities: ["WiFi", "Parking", "Kitchen", "Garden"],
    description: "Charming farmhouse with stunning sunset views"
  },
  {
    id: 2,
    name: "Green Meadow Retreat",
    location: "Cotswolds, England",
    price: 120,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
    capacity: 6,
    amenities: ["WiFi", "Parking", "Fireplace", "Hiking"],
    description: "Traditional stone cottage in rolling countryside"
  },
  {
    id: 3,
    name: "Lavender Fields Estate",
    location: "Provence, France",
    price: 200,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1582739022739-4e14fb6bc88f?w=400",
    capacity: 10,
    amenities: ["WiFi", "Pool", "Kitchen", "Wine Tasting"],
    description: "Luxury farmhouse surrounded by lavender fields"
  }
];

const SearchResults = ({ onBack, onSelectFarmhouse }: SearchResultsProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "WiFi": return <Wifi className="h-4 w-4" />;
      case "Parking": return <Car className="h-4 w-4" />;
      case "Kitchen": return <Utensils className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Search
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Available Farmhouses
          </h1>
          <p className="text-muted-foreground">
            {mockFarmhouses.length} properties found for your dates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockFarmhouses.map((farmhouse) => (
            <Card 
              key={farmhouse.id} 
              className="shadow-nature hover:shadow-warm-glow transition-smooth cursor-pointer group"
              onClick={() => onSelectFarmhouse(farmhouse)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={farmhouse.image}
                  alt={farmhouse.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <Badge 
                  className="absolute top-3 right-3 bg-background/90 text-foreground"
                >
                  ${farmhouse.price}/night
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {farmhouse.name}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {farmhouse.location}
                    </CardDescription>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                    <span className="text-sm font-medium">{farmhouse.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({farmhouse.reviews})
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {farmhouse.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <Users className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm">Up to {farmhouse.capacity} guests</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {farmhouse.amenities.map((amenity) => (
                    <Badge 
                      key={amenity} 
                      variant="secondary" 
                      className="flex items-center gap-1"
                    >
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectFarmhouse(farmhouse);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;