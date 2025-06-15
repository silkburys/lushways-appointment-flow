
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { BookingItem, Customer } from '../../types/booking';
import AddToCalendar from './AddToCalendar';
import { teamMembersData } from '../admin/AdminTeams';

interface AppointmentConfirmationProps {
  cartItems: BookingItem[];
  customer: Customer;
  orderNumber: string;
  totalPrice: number;
  onClose: () => void;
}

const AppointmentConfirmation = ({ 
  cartItems, 
  customer, 
  orderNumber, 
  totalPrice, 
  onClose 
}: AppointmentConfirmationProps) => {
  
  // Helper function to get agent image
  const getAgentImage = (staffId: string, staffName: string) => {
    if (staffId === 'any' || staffName === 'Any Agent') {
      return '/placeholder.svg'; // Default image for "Any Agent"
    }
    
    const teamMember = teamMembersData.find(member => member.id.toString() === staffId);
    return teamMember?.avatar || '/placeholder.svg';
  };

  return (
    <div className="p-6 text-center">
      {/* Success Icon */}
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>

      <h2 className="text-2xl font-bold mb-2">Appointment Confirmed</h2>
      <p className="text-gray-600 mb-6">We look forward to seeing you.</p>
      
      <div className="text-sm text-gray-500 mb-8">
        ORDER #{orderNumber}
      </div>

      {/* Appointments List */}
      <div className="space-y-4 mb-8">
        {cartItems.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 text-left">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-lg font-semibold text-center w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  {new Date(item.date).getDate()}
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}
                </div>
              </div>
              <div className="flex-1 ml-4">
                <h3 className="font-medium">{item.service.name}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}, {item.time}
                </p>
                <div className="flex justify-between mt-3">
                  <div>
                    <p className="text-xs text-gray-500">Agent</p>
                    <div className="flex items-center gap-2">
                      <img 
                        src={getAgentImage(item.staff.id, item.staff.name)}
                        alt={item.staff.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm">{item.staff.name}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <div className="flex items-center gap-2">
                      <img 
                        src={item.location.image}
                        alt={item.location.name}
                        className="w-6 h-6 rounded object-cover"
                      />
                      <span className="text-sm">{item.location.name}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-8 h-8 border-2 border-gray-300 flex items-center justify-center text-xs">
                  QR
                </div>
                <Button variant="link" size="sm" className="text-xs p-0 h-auto">
                  Show QR
                </Button>
              </div>
            </div>
            
            <div className="flex gap-2 justify-center">
              <AddToCalendar
                title={item.service.name}
                date={item.date}
                time={item.time}
                location={`${item.location.name}, ${item.location.address}`}
                description={`${item.service.name} appointment with ${item.staff.name}`}
              />
              {index === 1 && (
                <Button variant="outline" size="sm" className="text-xs text-red-600 border-red-300">
                  ❌ Cancel
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Customer Information */}
      <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-2">Customer</h3>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {customer.firstName.charAt(0)}{customer.lastName.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{customer.firstName} {customer.lastName}</p>
            <p className="text-sm text-gray-600">{customer.email}</p>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="text-left bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-3">Cost Breakdown</h3>
        <div className="space-y-2">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>{item.service.name}</span>
              <span>{item.price} AED</span>
            </div>
          ))}
          <div className="flex justify-between text-sm">
            <span>Payments and Credits</span>
            <span>0 AED</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold text-lg">
              <span>Balance Due</span>
              <span>{totalPrice} AED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
