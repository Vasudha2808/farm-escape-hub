import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  Wifi, 
  Car, 
  Utensils, 
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface FarmhouseDetailsProps {
  farmhouse: any;
  onBack: () => void;
}

const FarmhouseDetails = ({ farmhouse, onBack }: FarmhouseDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock additional data
  const images = [
    farmhouse.image,
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
    "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab2?w=800"
  ];

  const activities = [
    "Farm Animal Feeding",
    "Organic Vegetable Harvesting",
    "Horse Riding",
    "Nature Hiking Trails",
    "Traditional Cooking Classes",
    "Wine & Cheese Tasting"
  ];

  const nearbyRestaurants = [
    {
      name: "The Village Tavern",
      distance: "0.5 km",
      cuisine: "Traditional Local",
      rating: 4.6
    },
    {
      name: "Countryside Bistro",
      distance: "1.2 km", 
      cuisine: "Farm-to-Table",
      rating: 4.8
    },
    {
      name: "Organic Garden Restaurant",
      distance: "2.1 km",
      cuisine: "Vegetarian",
      rating: 4.5
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
          Back to Results
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {farmhouse.name}
              </h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{farmhouse.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-accent mr-1 fill-current" />
                <span className="text-xl font-semibold">{farmhouse.rating}</span>
                <span className="text-muted-foreground ml-1">({farmhouse.reviews} reviews)</span>
              </div>
              <div className="text-3xl font-bold text-primary">
                ${farmhouse.price}
                <span className="text-lg text-muted-foreground">/night</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative mb-8">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-nature">
            <img
              src={images[currentImageIndex]}
              alt={farmhouse.name}
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-background/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="restaurants">Nearby Dining</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="shadow-nature">
                  <CardHeader>
                    <CardTitle>About This Farmhouse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {farmhouse.description}. This beautiful countryside retreat offers the perfect 
                      escape from city life. Set among rolling hills and peaceful meadows, our farmhouse 
                      combines rustic charm with modern comfort. Experience authentic farm life while 
                      enjoying luxury amenities.
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <Users className="h-5 w-5 text-muted-foreground mr-3" />
                      <span>Accommodates up to {farmhouse.capacity} guests</span>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Amenities</h4>
                      <div className="flex flex-wrap gap-3">
                        {farmhouse.amenities.map((amenity: string) => (
                          <Badge 
                            key={amenity} 
                            variant="secondary" 
                            className="flex items-center gap-2 px-3 py-2"
                          >
                            {getAmenityIcon(amenity)}
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="shadow-nature">
                  <CardHeader>
                    <CardTitle>Book Your Stay</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-secondary rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          ${farmhouse.price}
                        </div>
                        <div className="text-sm text-muted-foreground">per night</div>
                      </div>
                      <Button variant="hero" size="lg" className="w-full">
                        Reserve Now
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Free cancellation up to 24 hours before check-in
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-6">
            <Card className="shadow-nature">
              <CardHeader>
                <CardTitle>Farm Activities & Experiences</CardTitle>
                <CardDescription>
                  Immerse yourself in authentic countryside experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activities.map((activity, index) => (
                    <div 
                      key={index}
                      className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-smooth"
                    >
                      <h4 className="font-semibold text-foreground">{activity}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card className="shadow-nature">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with the farmhouse hosts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border border-border rounded-lg">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 border border-border rounded-lg">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@{farmhouse.name.toLowerCase().replace(/\s+/g, '')}.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="restaurants" className="mt-6">
            <Card className="shadow-nature">
              <CardHeader>
                <CardTitle>Nearby Restaurants</CardTitle>
                <CardDescription>
                  Discover local dining options near your farmhouse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyRestaurants.map((restaurant, index) => (
                    <div 
                      key={index}
                      className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-smooth"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{restaurant.name}</h4>
                          <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                          <p className="text-xs text-muted-foreground mt-1">{restaurant.distance} away</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                          <span className="text-sm font-medium">{restaurant.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FarmhouseDetails;