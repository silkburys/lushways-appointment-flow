
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

interface VoucherHeaderProps {
  colors: {
    teal: string;
    text: string;
  };
}

const VoucherHeader = ({ colors }: VoucherHeaderProps) => {
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

  return (
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
            <a href="/" className="text-neutral-800 hover:text-[#4A908A] text-sm font-medium transition-colors">HOME</a>
            <a href="/quick-pay" className="text-neutral-800 hover:text-[#4A908A] text-sm font-medium transition-colors">QUICK PAY</a>
            <a href="/terms" className="text-neutral-800 hover:text-[#4A908A] text-sm font-medium transition-colors">TERMS & CONDITIONS</a>
            <a href="/privacy" className="text-neutral-800 hover:text-[#4A908A] text-sm font-medium transition-colors">PRIVACY POLICY</a>
            <a href="/contact" className="text-neutral-800 hover:text-[#4A908A] text-sm font-medium transition-colors">CONTACT US</a>
          </nav>
          <Button 
            variant="link"
            className="text-neutral-800 hover:text-[#4A908A] transition-colors"
          >
            LOG IN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default VoucherHeader;
