
import { Button } from '../ui/button';
import { BookingItem } from '../../types/booking';
import { BookingStep } from '../BookingModal';

interface BookingSummaryProps {
  cartItems: BookingItem[];
  totalPrice: number;
  onRemoveItem: (index: number) => void;
  onAddMore: () => void;
  currentStep: BookingStep;
}

const BookingSummary = ({ 
  cartItems, 
  totalPrice, 
  onRemoveItem, 
  onAddMore, 
  currentStep 
}: BookingSummaryProps) => {
  const showAddMore = ['customer', 'verification'].includes(currentStep);

  return (
    <div className="p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">Summary</h3>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-sm">No services selected yet</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.service.name}</h4>
                  <p className="text-xs text-gray-600">
                    {item.date} {item.time}
                  </p>
                  <p className="text-xs text-gray-600">
                    Agent: <span className="text-blue-600">{item.staff.name}</span>
                  </p>
                  <p className="text-xs text-gray-600">
                    Location: {item.location.name}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-sm">{item.price} AED</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 hover:text-red-700 p-1 h-auto ml-2"
                  >
                    ×
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {showAddMore && (
            <Button 
              variant="link" 
              onClick={onAddMore}
              className="text-orange-600 hover:text-orange-700 p-0 h-auto text-sm"
            >
              + Add More
            </Button>
          )}
          
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Price</span>
              <span className="font-bold text-lg">{totalPrice} AED</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
