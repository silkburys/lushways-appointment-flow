import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { Service } from '../../types/booking';
import { initialCategories } from '../../data/servicesCategoriesData';
import { useState, useEffect } from 'react';

interface ServiceCategoryDetailProps {
  categoryId: string;
  onSelect: (service: Service) => void;
  onBack: () => void;
}

const ServiceCategoryDetail = ({ categoryId, onSelect, onBack }: ServiceCategoryDetailProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // Find the selected category
  const selectedCategory = initialCategories.find(cat => cat.id === categoryId);
  
  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  const handleServiceSelect = async (service: Service) => {
    setIsLoading(true);
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 150));
    onSelect(service);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="w-10 h-10 rounded-md" />
          <div>
            <Skeleton className="h-6 w-56 mb-2" />
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Skeleton className="h-5 w-40 mb-1" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-5 w-16 mb-1" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
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
              className={`border transition-all duration-200 cursor-pointer group ${
                service.priceIsFrom 
                  ? 'border-orange-300 bg-orange-50 hover:border-orange-400 hover:bg-orange-100' 
                  : 'border-gray-200 hover:border-orange-400 hover:shadow-md'
              }`}
              onClick={() => handleServiceSelect(frontendService)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-base font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200">{service.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-orange-500 group-hover:text-orange-600 transition-colors duration-200">
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
