
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Service, Location, Staff } from '../../types/booking';
import { teamMembersData } from '../admin/AdminTeams';

interface StaffSelectionProps {
  service: Service;
  location: Location;
  onSelect: (staff: Staff) => void;
  onBack: () => void;
}

// Location name to ID mapping
const locationNameToId: Record<string, number> = {
  'BarberShop': 3,
  'Meaisem City Centre Ladies': 1,
  'Al Barsha City Centre Ladies': 2
};

const StaffSelection = ({ service, location, onSelect, onBack }: StaffSelectionProps) => {
  const locationId = locationNameToId[location.name];
  
  // Filter team members by location and service
  const availableStaff = teamMembersData.filter(member => 
    member.locations.includes(locationId) && 
    member.offeredServiceIds.includes(service.id)
  );

  // Convert team member data to Staff type
  const convertToStaff = (member: any): Staff => ({
    id: member.id.toString(),
    name: member.name,
    image: member.avatar,
    specialties: [] // Not needed for display
  });

  // Handle Any Agent selection
  const handleAnyAgentSelect = () => {
    const anyAgent: Staff = {
      id: 'any',
      name: 'Any Agent',
      image: '/placeholder.svg',
      specialties: []
    };
    onSelect(anyAgent);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Pick a Professional
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Any Agent Option */}
        <Card 
          className="border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all duration-200 cursor-pointer group"
          onClick={handleAnyAgentSelect}
        >
          <CardContent className="p-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-3 flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-200">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
            <h4 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
              Any Agent
            </h4>
          </CardContent>
        </Card>

        {/* Available Team Members */}
        {availableStaff.map(member => {
          const staff = convertToStaff(member);
          return (
            <Card 
              key={staff.id}
              className="border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all duration-200 cursor-pointer group"
              onClick={() => onSelect(staff)}
            >
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 group-hover:ring-2 group-hover:ring-orange-200 transition-all duration-200">
                  <img 
                    src={staff.image} 
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                  {staff.name}
                </h4>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StaffSelection;
