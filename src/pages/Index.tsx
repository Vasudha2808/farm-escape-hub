import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import AuthPage from "@/components/AuthPage";
import SearchPage from "@/components/SearchPage";
import SearchResults from "@/components/SearchResults";
import FarmhouseDetails from "@/components/FarmhouseDetails";

type AppState = 'landing' | 'auth' | 'search' | 'results' | 'details';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<AppState>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [selectedFarmhouse, setSelectedFarmhouse] = useState(null);

  const handleGetStarted = () => {
    setCurrentPage('auth');
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('search');
  };

  const handleSearchResults = (data: any) => {
    setSearchData(data);
    setCurrentPage('results');
  };

  const handleSelectFarmhouse = (farmhouse: any) => {
    setSelectedFarmhouse(farmhouse);
    setCurrentPage('details');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'auth':
        return (
          <AuthPage
            onBack={() => setCurrentPage('landing')}
            onAuthSuccess={handleAuthSuccess}
          />
        );
      case 'search':
        return (
          <SearchPage
            onBack={() => setCurrentPage('auth')}
            onSearchResults={handleSearchResults}
          />
        );
      case 'results':
        return (
          <SearchResults
            onBack={() => setCurrentPage('search')}
            onSelectFarmhouse={handleSelectFarmhouse}
          />
        );
      case 'details':
        return (
          <FarmhouseDetails
            farmhouse={selectedFarmhouse}
            onBack={() => setCurrentPage('results')}
          />
        );
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return <div className="min-h-screen">{renderCurrentPage()}</div>;
};

export default Index;
