
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Service, Location, Staff } from '../../types/booking';

interface StaffSelectionProps {
  service: Service;
  location: Location;
  onSelect: (staff: Staff) => void;
  onBack: () => void;
}

const staffMembers: Record<string, Staff[]> = {
  'BarberShop': [
    { id: '1', name: 'Samir', image: '/placeholder.svg', specialties: ['Hair Cut', 'Beard Trim'] },
    { id: '2', name: 'Ahmed', image: '/placeholder.svg', specialties: ['Hair Cut', 'Full Service'] }
  ],
  'Meaisem City Centre Ladies': [
    { id: '3', name: 'Sakina', image: '/placeholder.svg', specialties: ['Gel polish application', 'Classic Manicure'] },
    { id: '4', name: 'Jharna', image: '/placeholder.svg', specialties: ['Classic Pedicure', 'Nail Art'] },
    { id: '5', name: 'Fatima', image: '/placeholder.svg', specialties: ['Hair Cut & Style', 'Hair Color'] }
  ],
  'Al Barsha City Centre Ladies': [
    { id: '6', name: 'Sakina', image: '/placeholder.svg', specialties: ['Gel polish application', 'Classic Manicure'] },
    { id: '7', name: 'Aisha', image: '/placeholder.svg', specialties: ['Classic Pedicure', 'Nail Art'] }
  ]
};

const StaffSelection = ({ service, location, onSelect, onBack }: StaffSelectionProps) => {
  const availableStaff = (staffMembers[location.name] || []).filter(staff =>
    staff.specialties.includes(service.name)
  );

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold">Pick a Professional</h2>
          <p className="text-gray-600">{service.name} at {location.name}</p>
        </div>
      </div>

      <div className="grid gap-4">
        {availableStaff.map(staff => (
          <Button
            key={staff.id}
            variant="outline"
            className="p-4 h-auto text-left justify-start hover:bg-orange-50 hover:border-orange-200"
            onClick={() => onSelect(staff)}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                <img 
                  src={staff.image} 
                  alt={staff.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900">{staff.name}</div>
                <div className="text-sm text-gray-500">
                  {staff.specialties.join(', ')}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StaffSelection;
