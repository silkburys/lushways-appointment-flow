
import { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal';
import { Button } from '../components/ui/button';
import { Instagram, PhoneCall, Mail } from 'lucide-react';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Black header with gold logo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md py-2' : 'bg-black py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/b3235b7a-c67c-4b61-8d20-82fc8d031c95.png" 
                alt="LUSHWAYS" 
                className="h-8 md:h-10" 
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-amber-100 hover:text-white text-sm font-medium">HOME</a>
              <a href="/quick-pay" className="text-amber-100 hover:text-white text-sm font-medium">QUICK PAY</a>
              <a href="/terms" className="text-amber-100 hover:text-white text-sm font-medium">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-amber-100 hover:text-white text-sm font-medium">PRIVACY POLICY</a>
              <a href="/contact" className="text-amber-100 hover:text-white text-sm font-medium">CONTACT US</a>
            </nav>
            
            {/* Login Button */}
            <Button 
              variant="link" 
              className="text-amber-100 hover:text-white"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Booking Modal */}
      <section className="pt-24 md:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="flex h-full">
            <div className="w-1/2 h-full overflow-hidden">
              <img 
                src="/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png" 
                alt="Men's salon services" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <img 
                src="/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png" 
                alt="Women's salon services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">
            BEAUTY & SALON SERVICES
          </h1>
          <Button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-amber-200 text-black hover:bg-amber-300 px-8 py-4 text-lg font-medium"
          >
            Book in 60 Seconds
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">OUR SERVICES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">💇</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hair Services</h3>
              <p className="text-gray-600">Professional haircuts, styling, color treatments and more</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">💅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nail Services</h3>
              <p className="text-gray-600">Manicures, pedicures, gel polish and nail extensions</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spa Treatments</h3>
              <p className="text-gray-600">Relaxing massages, facials, body treatments and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">OUR LOCATIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Barber Shop</h3>
                <p className="text-gray-600 mb-4">Al Barsha City Centre Gents and ladies, Dubai, UAE</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Meaisem City Centre Ladies</h3>
                <p className="text-gray-600 mb-4">Meaisem City Centre, Dubai, UAE</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Al Barsha City Centre Ladies</h3>
                <p className="text-gray-600 mb-4">Al Barsha City Centre, Dubai, UAE</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">WHAT OUR CLIENTS SAY</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">See what our satisfied clients have to say about our beauty and salon services.</p>
          
          {/* Google Reviews Widget - This would be replaced with the actual Google Reviews embed */}
          <div className="border rounded-lg p-6 bg-gray-50 flex flex-col items-center">
            <div className="mb-6 flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google" 
                className="h-8 mr-2" 
              />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-center mb-6">
              Replace this with your live Google Reviews plugin. Simply paste the embed code here for your actual Google Reviews widget.
            </p>
            <div className="text-sm text-gray-500">
              Based on 150+ reviews
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">FOLLOW US ON INSTAGRAM</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Stay updated with our latest styles, promotions, and beauty tips.</p>
          
          <div className="flex items-center justify-center mb-12">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Instagram className="mr-2" />
              Follow @lushways
            </a>
          </div>
          
          {/* Instagram Gallery - This would be replaced with the actual Instagram feed */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                {/* This would be filled with actual Instagram posts */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Memberships</h3>
              <p className="text-gray-600 mb-6">Enjoy exclusive benefits and savings with our membership plans.</p>
              <Button className="bg-amber-200 text-black hover:bg-amber-300">View Memberships</Button>
            </div>
            
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Products</h3>
              <p className="text-gray-600 mb-6">Discover our premium beauty and salon products.</p>
              <Button className="bg-amber-200 text-black hover:bg-amber-300">Shop Products</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LUSHWAYS</h3>
              <p className="mb-4">Professional beauty and salon services across Dubai.</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center"><PhoneCall size={16} className="mr-2" /> 052 162 2999</p>
                <p className="flex items-center"><Mail size={16} className="mr-2" /> booking@lushways.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/quick-pay" className="hover:text-white">Quick Pay</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default Index;
