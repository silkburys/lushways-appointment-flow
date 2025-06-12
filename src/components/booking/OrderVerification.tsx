
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { BookingItem, Customer } from '../../types/booking';

interface OrderVerificationProps {
  cartItems: BookingItem[];
  customer: Customer;
  totalPrice: number;
  onSubmit: () => void;
  onBack: () => void;
  onAddMore: () => void;
}

const OrderVerification = ({ 
  cartItems, 
  customer, 
  totalPrice, 
  onSubmit, 
  onBack, 
  onAddMore 
}: OrderVerificationProps) => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold">Verify Order Details</h2>
          <p className="text-gray-600">Please review your booking details before submitting</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Customer Information */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Customer Information</h3>
          <p className="text-sm text-gray-600">
            {customer.firstName} {customer.lastName}<br />
            {customer.email}<br />
            {customer.phone}
          </p>
          {customer.comments && (
            <p className="text-sm text-gray-600 mt-2">
              <strong>Comments:</strong> {customer.comments}
            </p>
          )}
        </div>

        {/* Appointments */}
        <div>
          <h3 className="font-medium mb-3">Appointments ({cartItems.length})</h3>
          <div className="space-y-3">
            {cartItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{item.service.name}</h4>
                    <p className="text-sm text-gray-600">
                      {item.date} at {item.time}
                    </p>
                    <p className="text-sm text-gray-600">
                      Agent: {item.staff.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Location: {item.location.name}
                    </p>
                  </div>
                  <div className="text-lg font-semibold">
                    {item.price} AED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-3">Cost Breakdown</h3>
          <div className="space-y-2">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.service.name}</span>
                <span>{item.price} AED</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total Price</span>
                <span>{totalPrice} AED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={onSubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            Submit Order
          </Button>
          <Button 
            variant="outline" 
            onClick={onAddMore}
            className="text-orange-600 border-orange-300 hover:bg-orange-50"
          >
            + Add more items to this order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderVerification;
