import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Button } from '../components/ui/button';
import { MapPin, Phone, Clock, Star, Instagram } from 'lucide-react';
import PageSkeleton from '../components/ui/skeletons/PageSkeleton';
import HeroSkeleton from '../components/ui/skeletons/HeroSkeleton';
import SectionSkeleton from '../components/ui/skeletons/SectionSkeleton';
import LocationsSkeleton from '../components/ui/skeletons/LocationsSkeleton';

// Lazy load the booking modal for better performance
const BookingModal = lazy(() => import('../components/BookingModal'));

const OptimizedIndex = () => {
  // State for managing the booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);

  // State for managing the selected date and time
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Function to handle date selection
  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
  };

  // Function to handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  // Function to reset the selected date and time
  const resetDateTime = () => {
    setSelectedDate(null);
    setSelectedTime('');
  };
  
  const [isLoading, setIsLoading] = useState(true);
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    shop: false,
    services: false,
    locations: false,
    reviews: false,
    instagram: false
  });
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Progressive loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Load sections progressively
      setTimeout(() => setSectionsLoaded(prev => ({ ...prev, hero: true })), 100);
      setTimeout(() => setSectionsLoaded(prev => ({ ...prev, shop: true })), 300);
      setTimeout(() => setSectionsLoaded(prev => ({ ...prev, services: true })), 500);
      setTimeout(() => setSectionsLoaded(prev => ({ ...prev, locations: true })), 700);
      setTimeout(() => setSectionsLoaded(prev => ({ ...prev, reviews: true })), 900);
      setTimeout(() => setSectionsLoaded(prev => ({ ...prev, instagram: true })), 1100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show full page skeleton during initial load
  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Always visible */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-xl md:text-2xl font-bold">Beauty Salon</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#shop" className="text-white hover:text-gray-300">Shop</a>
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
              <a href="#locations" className="text-white hover:text-gray-300">Locations</a>
              <a href="#reviews" className="text-white hover:text-gray-300">Reviews</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
            </nav>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!sectionsLoaded.hero ? (
        <HeroSkeleton />
      ) : (
        <section className="pt-24 md:pt-32 relative overflow-hidden min-h-screen">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
            <div className="text-center text-white mb-8 md:mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Beauty & Wellness Studio
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Transform Your Look, Elevate Your Confidence
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => setShowBookingModal(true)}
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Shop Section */}
      {!sectionsLoaded.shop ? (
        <SectionSkeleton title cards={3} background="gray" />
      ) : (
        <section id="shop" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Products
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: '/lovable-uploads/57c261ea-b093-4b27-9510-aaf80ab2c7d0.png',
                  title: 'Premium Skincare',
                  description: 'Professional-grade skincare products for all skin types.'
                },
                {
                  image: '/lovable-uploads/9457829a-7ad8-4f83-846a-9da00b4ed4d9.png',
                  title: 'Hair Care Essentials',
                  description: 'Luxury hair products for healthy, beautiful hair.'
                },
                {
                  image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
                  title: 'Makeup Collection',
                  description: 'High-quality cosmetics for every occasion.'
                }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex gap-2">
                      <Button className="flex-1">Shop Now</Button>
                      <Button variant="outline" className="flex-1">Learn More</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {!sectionsLoaded.services ? (
        <SectionSkeleton title cards={3} background="white" />
      ) : (
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8" />,
                  title: 'Facial Treatments',
                  description: 'Rejuvenating facial treatments tailored to your skin needs.'
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: 'Hair Styling',
                  description: 'Professional cuts, colors, and styling for any occasion.'
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: 'Wellness Spa',
                  description: 'Relaxing spa treatments for mind and body rejuvenation.'
                }
              ].map((service, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations Section */}
      {!sectionsLoaded.locations ? (
        <LocationsSkeleton />
      ) : (
        <section id="locations" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Locations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: '/lovable-uploads/b3235b7a-c67c-4b61-8d20-82fc8d031c95.png',
                  name: 'Downtown Studio',
                  address: '123 Main Street, City Center'
                },
                {
                  image: '/lovable-uploads/f83342f5-83bc-4eb0-a214-dc4e18c6b8f4.png',
                  name: 'Uptown Branch',
                  address: '456 Fashion Avenue, Uptown District'
                },
                {
                  image: '/lovable-uploads/13b0267d-8b36-40ad-b130-7ddd7df807ef.png',
                  name: 'Wellness Center',
                  address: '789 Spa Boulevard, Wellness Quarter'
                }
              ].map((location, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                    <p className="text-gray-600 flex items-center mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {location.address}
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1">Visit</Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {!sectionsLoaded.reviews ? (
        <SectionSkeleton title cards={1} background="white" />
      ) : (
        <section id="reviews" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              What Our Clients Say
            </h2>
            
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-600 mb-6">
                "Absolutely amazing experience! The staff is professional and the results exceeded my expectations. I'll definitely be coming back!"
              </blockquote>
              <cite className="text-gray-900 font-semibold">Sarah Johnson</cite>
            </div>
          </div>
        </section>
      )}

      {/* Instagram Section */}
      {!sectionsLoaded.instagram ? (
        <SectionSkeleton title cards={6} background="gray" />
      ) : (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Follow Us @beautysalon
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Beauty Salon</h3>
              <p className="text-gray-400">
                Your premier destination for beauty and wellness services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#locations" className="hover:text-white">Locations</a></li>
                <li><a href="#shop" className="hover:text-white">Shop</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Mon-Sat: 9AM-7PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingModal && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">Loading...</div>
        </div>}>
          <BookingModal onClose={() => setShowBookingModal(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default OptimizedIndex;
