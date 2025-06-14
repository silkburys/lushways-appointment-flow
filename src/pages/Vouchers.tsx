
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

  const expandedPrices = [1000, 1750, 4000];

  return (
    <div
      style={{ background: "#FCF7EE" }}
      className="min-h-screen"
    >
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
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
              <a href="/" className="text-neutral-800 hover:text-amber-700 text-sm font-medium transition-colors">HOME</a>
              <a href="/quick-pay" className="text-neutral-800 hover:text-amber-700 text-sm font-medium transition-colors">QUICK PAY</a>
              <a href="/terms" className="text-neutral-800 hover:text-amber-700 text-sm font-medium transition-colors">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-neutral-800 hover:text-amber-700 text-sm font-medium transition-colors">PRIVACY POLICY</a>
              <a href="/contact" className="text-neutral-800 hover:text-amber-700 text-sm font-medium transition-colors">CONTACT US</a>
            </nav>
            <Button 
              variant="link" 
              className="text-neutral-800 hover:text-amber-700 transition-colors"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="text-center mb-12">
            <h1 
              className="text-3xl md:text-5xl font-serif mb-4 font-bold tracking-tight" 
              style={{ color: "#E6BB53" }}
            >
              MEMBERSHIP VOUCHERS
            </h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              A wide variety and choice of Free add on's. Approach the receptionist at the nearest branch to know more.
            </p>
          </div>
          {/* Vouchers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vouchers.map((voucher) => {
              const isExpanded = expandedPrices.includes(voucher.price);
              return (
                <Card
                  key={voucher.id}
                  className={`border-2 border-gold-brand bg-white transition-shadow
                    ${isExpanded ? "expanded-voucher-card" : ""}
                  `}
                  style={{
                    borderRadius: '12px',
                    boxShadow: isExpanded 
                      ? "0 6px 24px 0 rgba(198,187,77,0.07), 0 2px 8px 0 rgba(90,70,0,0.04)" 
                      : "0 1.5px 6px 0 rgba(170,146,73,0.06)",
                  }}
                >
                  <CardHeader className="bg-gold-brand text-center py-3 rounded-t-[10px]">
                    <div className="text-sm font-medium" style={{ color: "#744800" }}>
                      {voucher.duration}
                    </div>
                  </CardHeader>
                  <CardContent
                    className={`p-6 text-center flex flex-col ${isExpanded ? "py-12 md:py-14 min-h-[360px] md:min-h-[400px]" : ""}`}
                    style={{
                      background: "#fff",
                      borderRadius: "0 0 10px 10px",
                      overflowWrap: "break-word",
                      wordBreak: "break-word"
                    }}
                  >
                    <div className="text-3xl font-bold mb-2 break-words text-neutral-900">
                      AED {voucher.price.toLocaleString()}
                    </div>
                    <CardTitle className="text-xl font-semibold mb-4 break-words text-neutral-900">
                      {voucher.title}
                    </CardTitle>
                    <div className="text-sm font-medium mb-4" style={{ color: "#75541C" }}>
                      MEMBERSHIP DETAILS
                    </div>
                    <div className="space-y-2 mb-6">
                      {voucher.details.map((detail, index) => (
                        <p key={index} className="text-sm text-neutral-700 break-words whitespace-pre-line">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button
                      className="diamond-gold-gradient w-full font-medium py-2 px-6 rounded-md"
                      onClick={() => handleBookNow(voucher.price)}
                    >
                      PAY NOW
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-neutral-800 py-12 mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#E6BB53" }}>LUSHWAYS</h3>
              <p className="mb-4">Professional beauty and salon services across Dubai.</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#E6BB53" }}>Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <PhoneCall size={16} className="mr-2" /> 
                  <a href="tel:0521622999" className="hover:text-amber-700">052 162 2999</a>
                </p>
                <p className="flex items-center">
                  <Mail size={16} className="mr-2" /> 
                  <a href="mailto:booking@lushways.com" className="hover:text-amber-700">booking@lushways.com</a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#E6BB53" }}>Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-amber-700">Home</a></li>
                <li><a href="/quick-pay" className="hover:text-amber-700">Quick Pay</a></li>
                <li><a href="/terms" className="hover:text-amber-700">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-amber-700">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Vouchers;
