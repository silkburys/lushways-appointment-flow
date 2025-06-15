
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Service } from '../../types/booking';
import { initialCategories } from '../../data/servicesCategoriesData';

interface ServiceCategoryDetailProps {
  categoryId: string;
  onSelect: (service: Service) => void;
  onBack: () => void;
}

const ServiceCategoryDetail = ({ categoryId, onSelect, onBack }: ServiceCategoryDetailProps) => {
  // Find the selected category
  const selectedCategory = initialCategories.find(cat => cat.id === categoryId);
  
  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Price Menu (Prices include 5% VAT)
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {selectedCategory.services.map(service => {
          // Convert backend service format to frontend Service type
          const frontendService: Service = {
            id: service.id,
            name: service.name,
            price: service.price,
            duration: 45, // Default duration
            category: selectedCategory.name
          };

          return (
            <Card 
              key={service.id}
              className={`border transition-colors cursor-pointer ${
                service.priceIsFrom 
                  ? 'border-orange-300 bg-orange-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onSelect(frontendService)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-base font-medium text-gray-900">{service.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-orange-500">
                      {service.price}AED
                    </p>
                    {service.priceIsFrom && (
                      <p className="text-sm text-gray-500 mt-1">
                        Starts From
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategoryDetail;
