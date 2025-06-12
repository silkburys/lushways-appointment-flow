
import { MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Location } from '../../types/booking';

interface LocationSelectionProps {
  onSelect: (location: Location) => void;
}

const locations: Location[] = [
  {
    id: '1',
    name: 'BarberShop',
    address: 'Al Barsha City Centre Gents and ladies, Dubai, UAE',
    image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png'
  },
  {
    id: '2', 
    name: 'Meaisem City Centre Ladies',
    address: 'Meaisem City Centre, Dubai, UAE',
    image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png'
  },
  {
    id: '3',
    name: 'Al Barsha City Centre Ladies', 
    address: 'Al Barsha City Centre Gents and ladies, Dubai, UAE',
    image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png'
  }
];

const LocationSelection = ({ onSelect }: LocationSelectionProps) => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
          <MapPin className="w-8 h-8 text-orange-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Select Location</h2>
          <p className="text-gray-600">Please select a location you want the service to be performed at</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Location Selection</h3>
        <div className="space-y-3">
          {locations.map((location) => (
            <Button
              key={location.id}
              variant="outline"
              className="w-full p-4 h-auto text-left justify-start hover:bg-orange-50 hover:border-orange-200"
              onClick={() => onSelect(location)}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0">
                  <img 
                    src="/placeholder.svg" 
                    alt={location.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{location.name}</div>
                  <div className="text-sm text-gray-500">{location.address}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">questions?</p>
          <p className="text-sm text-gray-500">
            Call 052 182 2999 for help<br />
            booking@lushways.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSelection;
