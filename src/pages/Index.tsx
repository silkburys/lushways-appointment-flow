import { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal';
import { Button } from '../components/ui/button';
import { Instagram, PhoneCall, Mail, MapPin, ShoppingBag, CreditCard, Gift } from 'lucide-react';

const Index = () => {
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
              <a href="/">
                <img 
                  src="/lovable-uploads/b3235b7a-c67c-4b61-8d20-82fc8d031c95.png" 
                  alt="LUSHWAYS" 
                  className="h-8 md:h-10 cursor-pointer" 
                />
              </a>
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

      {/* Hero Section with Embedded Booking */}
      <section className="pt-24 md:pt-32 relative overflow-hidden min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background */}
          <div className="hidden md:block w-full h-full">
            <img 
              src="/lovable-uploads/57c261ea-b093-4b27-9510-aaf80ab2c7d0.png" 
              alt="Beauty services for men and women" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Mobile Background */}
          <div className="block md:hidden w-full h-full">
            <img 
              src="/lovable-uploads/f83342f5-83bc-4eb0-a214-dc4e18c6b8f4.png" 
              alt="Beauty services" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Embedded Booking Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-serif text-black mb-4">
              BEAUTY & SALON SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Book your appointment in 60 seconds
            </p>
          </div>
          
          {/* Embedded Booking Modal */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <BookingModal isOpen={true} onClose={() => {}} />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section - moved to first position */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">SHOP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.location.href = '/products'}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-amber-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Products</h3>
              <p className="text-gray-600">Premium beauty and salon products for professional results at home</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-amber-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Memberships</h3>
              <p className="text-gray-600">Exclusive membership plans with special benefits and savings</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.location.href = '/vouchers'}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-amber-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vouchers</h3>
              <p className="text-gray-600">Gift vouchers perfect for treating someone special to our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - moved to second position */}
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
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://lushways.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-07-at-12.05.42-PM-150x150.png"
                  alt="Meaisem City Centre Ladies"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.backgroundColor = '#e5e7eb';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Meaisem City Centre Ladies</h3>
                <p className="text-gray-600 mb-4">Meaisem City Centre, Dubai, UAE</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => window.open('https://maps.app.goo.gl/gpWiYDvQMxohYH2w8', '_blank')}
                  >
                    <MapPin size={16} />
                    Directions
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => window.location.href = 'tel:0521622999'}
                  >
                    <PhoneCall size={16} />
                    Call
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://lushways.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-07-at-12.14.18-PM-150x150.png"
                  alt="Al Barsha City Centre Ladies"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.backgroundColor = '#e5e7eb';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Al Barsha City Centre Ladies</h3>
                <p className="text-gray-600 mb-4">Al Barsha City Centre, Dubai, UAE</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => window.open('https://maps.app.goo.gl/k5kYCNkqbnfRw3Xv6', '_blank')}
                  >
                    <MapPin size={16} />
                    Directions
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => window.location.href = 'tel:045540344'}
                  >
                    <PhoneCall size={16} />
                    Call
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://lushways.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-07-at-12.18.40-PM-150x150.png"
                  alt="Barber Shop"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.backgroundColor = '#e5e7eb';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Barber Shop</h3>
                <p className="text-gray-600 mb-4">Al Barsha City Centre Gents and ladies, Dubai, UAE</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => window.open('https://maps.app.goo.gl/SbyRyFuaXE1WYWWy5', '_blank')}
                  >
                    <MapPin size={16} />
                    Directions
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => window.location.href = 'tel:0585618383'}
                  >
                    <PhoneCall size={16} />
                    Call
                  </Button>
                </div>
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
              <Button
                className="bg-amber-200 text-black hover:bg-amber-300"
                onClick={() => window.location.href = '/vouchers'}
              >
                View Memberships
              </Button>
            </div>
            
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Products</h3>
              <p className="text-gray-600 mb-6">Discover our premium beauty and salon products.</p>
              <Button
                className="bg-amber-200 text-black hover:bg-amber-300"
                onClick={() => window.location.href = '/products'}
              >
                Shop Products
              </Button>
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
                <p className="flex items-center">
                  <PhoneCall size={16} className="mr-2" /> 
                  <a href="tel:0521622999" className="hover:text-white">052 162 2999</a>
                </p>
                <p className="flex items-center">
                  <Mail size={16} className="mr-2" /> 
                  <a href="mailto:booking@lushways.com" className="hover:text-white">booking@lushways.com</a>
                </p>
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
    </div>
  );
};

export default Index;
