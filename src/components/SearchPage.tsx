import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search, ArrowLeft } from "lucide-react";

interface SearchPageProps {
  onBack: () => void;
  onSearchResults: (searchData: any) => void;
}

const SearchPage = ({ onBack, onSearchResults }: SearchPageProps) => {
  const [searchData, setSearchData] = useState({
    location: "",
    checkin: "",
    checkout: "",
    guests: ""
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchResults(searchData);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-nature">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground">
              Find Your Perfect Farmhouse
            </CardTitle>
            <CardDescription>
              Enter your details to discover amazing countryside retreats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground font-medium">
                  Where would you like to stay?
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="location"
                    value={searchData.location}
                    onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                    placeholder="City, region, or specific area"
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-foreground font-medium">
                    Check-in Date
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="checkin"
                      type="date"
                      value={searchData.checkin}
                      onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-foreground font-medium">
                    Check-out Date
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="checkout"
                      type="date"
                      value={searchData.checkout}
                      onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-medium">
                  Number of Guests
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    value={searchData.guests}
                    onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    placeholder="How many guests?"
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                <Search className="h-5 w-5 mr-2" />
                Search Farmhouses
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchPage;