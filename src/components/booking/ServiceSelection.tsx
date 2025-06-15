
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Location, Service } from '../../types/booking';
import { initialCategories } from '../../data/servicesCategoriesData';
import { useState } from 'react';
import ServiceCategoryDetail from './ServiceCategoryDetail';

interface ServiceSelectionProps {
  location: Location;
  onSelect: (service: Service) => void;
  onBack: () => void;
}

// Location to service category mapping
const locationServiceMapping: Record<string, string[]> = {
  'BarberShop': ['8'], // Gents category
  'Meaisem City Centre Ladies': ['1', '2', '3', '4', '5', '6', '7', '9'], // All ladies categories
  'Al Barsha City Centre Ladies': ['1', '2', '3', '4', '5', '6', '7', '9'] // All ladies categories
};

const ServiceSelection = ({ location, onSelect, onBack }: ServiceSelectionProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Get relevant categories for this location
  const relevantCategoryIds = locationServiceMapping[location.name] || [];
  const availableCategories = initialCategories.filter(cat => 
    relevantCategoryIds.includes(cat.id)
  );

  // Check if this is a ladies location (should show categories) or BarberShop (show services directly)
  const isLadiesLocation = location.name === 'Meaisem City Centre Ladies' || location.name === 'Al Barsha City Centre Ladies';

  // If a category is selected for ladies locations, show the service detail
  if (isLadiesLocation && selectedCategoryId) {
    return (
      <ServiceCategoryDetail
        categoryId={selectedCategoryId}
        onSelect={onSelect}
        onBack={() => setSelectedCategoryId(null)}
      />
    );
  }

  const handleCategoryOrServiceSelect = (item: any) => {
    if (isLadiesLocation) {
      // For ladies locations, this is category selection - go to service detail
      setSelectedCategoryId(item.id);
    } else {
      // For BarberShop, this is direct service selection
      onSelect(item);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {isLadiesLocation ? 'Select Category' : 'Select Service'}
          </h2>
          <p className="text-sm text-gray-500">{location.name}</p>
        </div>
      </div>

      <div className="space-y-3">
        {isLadiesLocation ? (
          // Show categories for ladies locations
          availableCategories.map(category => (
            <Card 
              key={category.id} 
              className="border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
              onClick={() => handleCategoryOrServiceSelect(category)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  {category.imageUrl && (
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src={category.imageUrl} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Tap to view services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          // Show services directly for BarberShop
          availableCategories.map(category => (
            <div key={category.id} className="space-y-3">
              <div className="flex items-center gap-3 mb-3">
                {category.imageUrl && (
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src={category.imageUrl} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-lg font-medium text-orange-600">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.services.map(service => {
                  // Convert backend service format to frontend Service type
                  const frontendService: Service = {
                    id: service.id,
                    name: service.name,
                    price: service.price,
                    duration: 45, // Default duration, can be made dynamic later
                    category: category.name
                  };

                  return (
                    <Card 
                      key={service.id}
                      className="border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
                      onClick={() => onSelect(frontendService)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-base font-medium text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-500">{frontendService.duration} min</p>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-semibold text-gray-900">
                              {service.priceIsFrom ? 'From ' : ''}{service.price} AED
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceSelection;
