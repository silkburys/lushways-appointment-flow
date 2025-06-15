
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Location, Service } from '../../types/booking';
import { initialCategories } from '../../data/servicesCategoriesData';

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
  // Get relevant categories for this location
  const relevantCategoryIds = locationServiceMapping[location.name] || [];
  const availableCategories = initialCategories.filter(cat => 
    relevantCategoryIds.includes(cat.id)
  );

  // Check if this is a ladies location (should show categories) or BarberShop (show services directly)
  const isLadiesLocation = location.name === 'Meaisem City Centre Ladies' || location.name === 'Al Barsha City Centre Ladies';

  const handleCategoryOrServiceSelect = (item: any) => {
    if (isLadiesLocation) {
      // For ladies locations, this would be a category selection
      // You'll need to implement category selection flow
      console.log('Category selected:', item);
    } else {
      // For BarberShop, this is direct service selection
      onSelect(item);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold">
            {isLadiesLocation ? 'Select Category' : 'Select Service'}
          </h2>
          <p className="text-gray-600">{location.name}</p>
        </div>
      </div>

      <div className="space-y-4">
        {isLadiesLocation ? (
          // Show categories for ladies locations
          availableCategories.map(category => (
            <Button
              key={category.id}
              variant="outline"
              className="w-full p-4 h-auto text-left justify-start hover:bg-orange-50 hover:border-orange-200"
              onClick={() => handleCategoryOrServiceSelect(category)}
            >
              <div className="flex items-center gap-3">
                {category.imageUrl && (
                  <img 
                    src={category.imageUrl} 
                    alt={category.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                )}
                <div>
                  <div className="font-medium text-gray-900">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.name}</div>
                </div>
              </div>
            </Button>
          ))
        ) : (
          // Show services directly for BarberShop
          availableCategories.map(category => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-3">
                {category.imageUrl && (
                  <img 
                    src={category.imageUrl} 
                    alt={category.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <h3 className="text-lg font-medium text-orange-600">{category.name}</h3>
              </div>
              <div className="space-y-2">
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
                    <Button
                      key={service.id}
                      variant="outline"
                      className="w-full p-4 h-auto text-left justify-between hover:bg-orange-50 hover:border-orange-200"
                      onClick={() => onSelect(frontendService)}
                    >
                      <div>
                        <div className="font-medium text-gray-900">{service.name}</div>
                        <div className="text-sm text-gray-500">{frontendService.duration} min</div>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {service.priceIsFrom ? 'From ' : ''}{service.price} AED
                      </div>
                    </Button>
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
