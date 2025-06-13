
import { useState } from 'react';
import { Button } from '../ui/button';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
}

interface LocationSelectionProps {
  onSelect: (location: Location) => void;
}

const locations: Location[] = [
  {
    id: '1',
    name: 'BarberShop',
    address: 'Al Barsha City Centre Gents and ladies, Dubai, UAE',
    image: '/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png'
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
    image: '/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png'
  }
];

const LocationSelection = ({ onSelect }: LocationSelectionProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleNext = () => {
    if (selectedLocation) {
      onSelect(selectedLocation);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
          <MapPin className="w-8 h-8 text-orange-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Select Location</h2>
          <p className="text-gray-600">
            Please select a location you want the service to be performed at
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedLocation?.id === location.id
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedLocation(location)}
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-12 h-12 rounded-lg object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 ${
              selectedLocation?.id === location.id
                ? 'border-orange-500 bg-orange-500'
                : 'border-gray-300'
            }`}>
              {selectedLocation?.id === location.id && (
                <div className="w-full h-full rounded-full bg-white border-2 border-orange-500"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <Button 
          onClick={handleNext}
          disabled={!selectedLocation}
          className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 text-lg font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
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
