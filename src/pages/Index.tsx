
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import { Button } from '../components/ui/button';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Lushways</h1>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
            >
              Book in 60 Seconds
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Beauty & Wellness Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book professional beauty and wellness services across multiple locations in Dubai. 
            Hair, nails, spa treatments and more.
          </p>
          <Button 
            onClick={() => setIsBookingOpen(true)}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            Start Booking Now
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Locations</h3>
            <p className="text-gray-600">Choose from various locations across Dubai</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-xl">💅</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Services</h3>
            <p className="text-gray-600">Hair, nails, spa treatments by certified professionals</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quick Booking</h3>
            <p className="text-gray-600">Book multiple services in under 60 seconds</p>
          </div>
        </div>
      </main>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default Index;
