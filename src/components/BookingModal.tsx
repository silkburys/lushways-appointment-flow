
import { useState } from 'react';
import LocationSelection from './booking/LocationSelection';
import ServiceSelection from './booking/ServiceSelection';
import StaffSelection from './booking/StaffSelection';
import DateTimeSelection from './booking/DateTimeSelection';
import CustomerInformation from './booking/CustomerInformation';
import OrderVerification from './booking/OrderVerification';
import AppointmentConfirmation from './booking/AppointmentConfirmation';
import BookingSummary from './booking/BookingSummary';
import { BookingItem, Customer } from '../types/booking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type BookingStep = 
  | 'location' 
  | 'service' 
  | 'staff' 
  | 'datetime' 
  | 'customer' 
  | 'verification' 
  | 'confirmation';

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('location');
  const [cartItems, setCartItems] = useState<BookingItem[]>([]);
  const [currentBooking, setCurrentBooking] = useState<Partial<BookingItem>>({});
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');

  const addToCart = (item: BookingItem) => {
    setCartItems(prev => [...prev, item]);
    setCurrentBooking({});
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  const addMoreService = () => {
    setCurrentStep('location');
    setCurrentBooking({});
  };

  const handleClose = () => {
    setCurrentStep('location');
    setCartItems([]);
    setCurrentBooking({});
    setCustomer(null);
    setOrderNumber('');
    onClose();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'location':
        return (
          <LocationSelection
            onSelect={(location) => {
              setCurrentBooking(prev => ({ ...prev, location }));
              setCurrentStep('service');
            }}
          />
        );
      case 'service':
        return (
          <ServiceSelection
            location={currentBooking.location!}
            onSelect={(service) => {
              setCurrentBooking(prev => ({ ...prev, service, price: service.price }));
              setCurrentStep('staff');
            }}
            onBack={() => setCurrentStep('location')}
          />
        );
      case 'staff':
        return (
          <StaffSelection
            service={currentBooking.service!}
            location={currentBooking.location!}
            onSelect={(staff) => {
              setCurrentBooking(prev => ({ ...prev, staff }));
              setCurrentStep('datetime');
            }}
            onBack={() => setCurrentStep('service')}
          />
        );
      case 'datetime':
        return (
          <DateTimeSelection
            onSelect={(date, time) => {
              const newBooking: BookingItem = {
                id: Date.now().toString(),
                location: currentBooking.location!,
                service: currentBooking.service!,
                staff: currentBooking.staff!,
                date,
                time,
                price: currentBooking.price!
              };
              addToCart(newBooking);
              setCurrentStep('customer');
            }}
            onBack={() => setCurrentStep('staff')}
          />
        );
      case 'customer':
        return (
          <CustomerInformation
            onSubmit={(customerData) => {
              setCustomer(customerData);
              setCurrentStep('verification');
            }}
            onBack={() => setCurrentStep('datetime')}
            onAddMore={addMoreService}
          />
        );
      case 'verification':
        return (
          <OrderVerification
            cartItems={cartItems}
            customer={customer!}
            totalPrice={getTotalPrice()}
            onSubmit={() => {
              const orderNum = 'CTSRZZV'; // Generate random order number
              setOrderNumber(orderNum);
              setCurrentStep('confirmation');
            }}
            onBack={() => setCurrentStep('customer')}
            onAddMore={addMoreService}
          />
        );
      case 'confirmation':
        return (
          <AppointmentConfirmation
            cartItems={cartItems}
            customer={customer!}
            orderNumber={orderNumber}
            totalPrice={getTotalPrice()}
            onClose={handleClose}
          />
        );
      default:
        return null;
    }
  };

  // Only show summary if there are items in cart AND we're past the datetime step
  const showSummary = cartItems.length > 0 && ['customer', 'verification', 'confirmation'].includes(currentStep);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden min-h-[500px]">
          <div className={`flex-1 order-2 lg:order-1 ${showSummary ? '' : 'lg:pr-0'}`}>
            {renderCurrentStep()}
          </div>
          {showSummary && (
            <div className="w-full lg:w-80 order-1 lg:order-2 bg-gray-50 border-b lg:border-b-0 lg:border-l">
              <BookingSummary
                cartItems={cartItems}
                totalPrice={getTotalPrice()}
                onRemoveItem={removeFromCart}
                onAddMore={addMoreService}
                currentStep={currentStep}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
