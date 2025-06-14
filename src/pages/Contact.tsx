
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Instagram, PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <a href="/" className="text-lushways hover:text-white text-sm font-medium font-yeserva">HOME</a>
              <a href="/quick-pay" className="text-lushways hover:text-white text-sm font-medium font-yeserva">QUICK PAY</a>
              <a href="/terms" className="text-lushways hover:text-white text-sm font-medium font-yeserva">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-lushways hover:text-white text-sm font-medium font-yeserva">PRIVACY POLICY</a>
              <a href="/contact" className="text-white text-sm font-medium font-yeserva">CONTACT US</a>
            </nav>
            
            {/* Login Button */}
            <Button 
              variant="link" 
              className="text-lushways hover:text-white font-yeserva"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <div className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-yeserva text-lushways mb-8">
              CONTACT US
            </h1>
            <p className="text-xl mb-8">Get in touch with us for bookings and inquiries</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <PhoneCall size={20} className="mr-2 text-lushways" />
                <a href="tel:0521622999" className="text-lg hover:text-lushways">052 162 2999</a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-lushways" />
                <a href="mailto:booking@lushways.com" className="text-lg hover:text-lushways">booking@lushways.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Location 1 */}
              <div className="text-center">
                <h2 className="text-2xl font-yeserva text-lushways mb-4">Meaisem City Centre Ladies</h2>
                <div className="space-y-2 text-lushways">
                  <p className="flex items-center justify-center">
                    <MapPin size={16} className="mr-2" />
                    Meaisem City Centre, Dubai, UAE
                  </p>
                  <p className="flex items-center justify-center">
                    <PhoneCall size={16} className="mr-2" />
                    <a href="tel:0521622999" className="hover:text-white">0521622999</a>
                  </p>
                </div>
                <h3 className="text-xl font-yeserva text-lushways mt-6 mb-2">Hours</h3>
                <div className="text-lushways space-y-1">
                  <p>Monday - Saturday: 11am - 7pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Location 2 */}
              <div className="text-center">
                <h2 className="text-2xl font-yeserva text-lushways mb-4">Al Barsha City Centre Ladies</h2>
                <div className="space-y-2 text-lushways">
                  <p className="flex items-center justify-center">
                    <MapPin size={16} className="mr-2" />
                    Al Barsha City Centre, Dubai, UAE
                  </p>
                  <p className="flex items-center justify-center">
                    <PhoneCall size={16} className="mr-2" />
                    <a href="tel:045540344" className="hover:text-white">045540344</a>
                  </p>
                </div>
                <h3 className="text-xl font-yeserva text-lushways mt-6 mb-2">Hours</h3>
                <div className="text-lushways space-y-1">
                  <p>Monday - Saturday: 11am - 7pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Location 3 */}
              <div className="text-center">
                <h2 className="text-2xl font-yeserva text-lushways mb-4">Barber Shop</h2>
                <div className="space-y-2 text-lushways">
                  <p className="flex items-center justify-center">
                    <MapPin size={16} className="mr-2" />
                    Al Barsha City Centre Gents and ladies, Dubai, UAE
                  </p>
                  <p className="flex items-center justify-center">
                    <PhoneCall size={16} className="mr-2" />
                    <a href="tel:0585618383" className="hover:text-white">0585618383</a>
                  </p>
                </div>
                <h3 className="text-xl font-yeserva text-lushways mt-6 mb-2">Hours</h3>
                <div className="text-lushways space-y-1">
                  <p>Monday - Saturday: 11am - 7pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-yeserva text-center mb-8 text-black">Find Us</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890!2d55.1162!3d25.1122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2a1b2a1b2a%3A0x1234567890abcdef!2sMeaisem%20City%20Centre!5e0!3m2!1sen!2sae!4v1639123456789!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lushways Salon Location - Meaisem City Centre"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-black text-white py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-yeserva text-lushways mb-4">
              STAY ON THE CUTTING-EDGE
            </h2>
            <p className="text-lg mb-8 text-lushways">
              Sign up to hear from us about specials, sales, events, and fashion tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-black"
                required
              />
              <Button
                type="submit"
                className="bg-lushways hover:bg-lushways text-black font-semibold px-8"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-lushways py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-yeserva">LUSHWAYS</h3>
              <p className="mb-4">Professional beauty and salon services across Dubai.</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 font-yeserva">Contact Us</h3>
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
              <h3 className="text-xl font-semibold mb-4 font-yeserva">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/quick-pay" className="hover:text-white">Quick Pay</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved. 
              <a href="/terms" className="hover:text-white ml-2">Terms & Conditions</a> | 
              <a href="/privacy" className="hover:text-white ml-2">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
