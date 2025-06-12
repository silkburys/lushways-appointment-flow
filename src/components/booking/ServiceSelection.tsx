
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Location, Service } from '../../types/booking';

interface ServiceSelectionProps {
  location: Location;
  onSelect: (service: Service) => void;
  onBack: () => void;
}

const services: Record<string, Service[]> = {
  'BarberShop': [
    { id: '1', name: 'Hair Cut', price: 70, duration: 45, category: 'Gents' },
    { id: '2', name: 'Beard Trim', price: 30, duration: 20, category: 'Gents' },
    { id: '3', name: 'Full Service', price: 95, duration: 60, category: 'Gents' }
  ],
  'Meaisem City Centre Ladies': [
    { id: '4', name: 'Classic Manicure', price: 75, duration: 45, category: 'Nail' },
    { id: '5', name: 'Gel polish application', price: 65, duration: 30, category: 'Nail' },
    { id: '6', name: 'Classic Pedicure', price: 90, duration: 60, category: 'Nail' },
    { id: '7', name: 'Hair Cut & Style', price: 120, duration: 90, category: 'Hair' },
    { id: '8', name: 'Hair Color', price: 200, duration: 120, category: 'Hair' }
  ],
  'Al Barsha City Centre Ladies': [
    { id: '9', name: 'Classic Manicure', price: 75, duration: 45, category: 'Nail' },
    { id: '10', name: 'Gel polish application', price: 65, duration: 30, category: 'Nail' },
    { id: '11', name: 'Classic Pedicure', price: 90, duration: 60, category: 'Nail' }
  ]
};

const ServiceSelection = ({ location, onSelect, onBack }: ServiceSelectionProps) => {
  const locationServices = services[location.name] || [];
  const categories = [...new Set(locationServices.map(s => s.category))];

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold">Select Service</h2>
          <p className="text-gray-600">{location.name}</p>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-lg font-medium mb-3 text-orange-600">{category}</h3>
            <div className="space-y-2">
              {locationServices
                .filter(service => service.category === category)
                .map(service => (
                  <Button
                    key={service.id}
                    variant="outline"
                    className="w-full p-4 h-auto text-left justify-between hover:bg-orange-50 hover:border-orange-200"
                    onClick={() => onSelect(service)}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-500">{service.duration} min</div>
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {service.price} AED
                    </div>
                  </Button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
