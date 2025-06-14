
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { PhoneCall, Mail, Instagram } from 'lucide-react';

const Vouchers = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const vouchers = [
    {
      id: 1,
      title: "MANI / PEDI",
      price: 500,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["5% OFF on services"]
    },
    {
      id: 2,
      title: "BLOW DRY PACKAGE",
      price: 650,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["Blow dry package"]
    },
    {
      id: 3,
      title: "BLOW DRY PACKAGE",
      price: 750,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["PAY FOR 5 GET 1 BLOW DRY COMPLIMENTARY"]
    },
    {
      id: 4,
      title: "DAZZLING BEAUTY",
      price: 1000,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["10% OFF on services"]
    },
    {
      id: 5,
      title: "SMILE",
      price: 1250,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["10% OFF on services", "ONE SESSION OF CLASSIC MANICURE COMPLIMENTARY"]
    },
    {
      id: 6,
      title: "GLAM UP",
      price: 1500,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["15% OFF on services", "ONE SESSION OF CLASSIC MANI PEDI COMPLIMENTARY"]
    },
    {
      id: 7,
      title: "SWEETHEART",
      price: 1750,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["15% OFF on services"]
    },
    {
      id: 8,
      title: "LUSHSTATIC",
      price: 2000,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["15% OFF on services", "ONE SESSION OF GELISH MANI PEDI COMPLIMENTARY"]
    },
    {
      id: 9,
      title: "LAVISH",
      price: 2500,
      duration: "6 MONTHS MEMBERSHIP",
      details: ["15% OFF on services", "ONE SESSION OF CLASSIC MANI PEDI AND ONE SESSION OF GELISH MANI PEDI COMPLIMENTARY"]
    },
    {
      id: 10,
      title: "SUPER SAVER",
      price: 3000,
      duration: "ANNUAL MEMBERSHIP",
      details: ["20% OFF on services", "COMPLIMENTARY ONE SESSION OF GELISH MANI PEDI", "COMPLIMENTARY ONE SESSION OF CLASSIC MANI PEDI", "COMPLIMENTARY ONE SESSION OF BACK AND SHOULDER MASSAGE"]
    },
    {
      id: 11,
      title: "ULTIMATE",
      price: 4000,
      duration: "UNLIMITED MEMBERSHIP",
      details: ["25% OFF on services", "FREE THREE SESSIONS GELISH Mani Pedi", "FREE THREE SESSIONS CLASSIC MANI PEDI", "FREE ONE SESSION OF FULL BODY MASSAGE"]
    }
  ];

  const handleBookNow = (amount: number) => {
    window.open(`https://lushways.com/payment/pay.php?amount=${amount}&type=membership`, '_blank');
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
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-amber-100 hover:text-white text-sm font-medium">HOME</a>
              <a href="/quick-pay" className="text-amber-100 hover:text-white text-sm font-medium">QUICK PAY</a>
              <a href="/terms" className="text-amber-100 hover:text-white text-sm font-medium">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-amber-100 hover:text-white text-sm font-medium">PRIVACY POLICY</a>
              <a href="/contact" className="text-amber-100 hover:text-white text-sm font-medium">CONTACT US</a>
            </nav>
            
            <Button 
              variant="link" 
              className="text-amber-100 hover:text-white"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif text-black mb-4">
              MEMBERSHIP VOUCHERS
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A wide variety and choice of Free add on's. Approach the receptionist at the nearest branch to know more.
            </p>
          </div>

          {/* Vouchers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vouchers.map((voucher) => (
              <Card key={voucher.id} className="border-2 border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-amber-200 text-center">
                  <div className="text-sm font-medium text-black mb-2">
                    {voucher.duration}
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    AED {voucher.price.toLocaleString()}
                  </div>
                  <CardTitle className="text-xl font-semibold text-black mb-4">
                    {voucher.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-black mb-4">
                    MEMBERSHIP DETAILS
                  </div>
                  <div className="space-y-2 mb-6">
                    {voucher.details.map((detail, index) => (
                      <p key={index} className="text-sm text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    className="bg-amber-200 text-black hover:bg-amber-300 w-full"
                    onClick={() => handleBookNow(voucher.price)}
                  >
                    BOOK NOW
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-amber-100 py-12 mt-16">
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

export default Vouchers;
