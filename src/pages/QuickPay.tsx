import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Instagram, PhoneCall, Mail } from 'lucide-react';

const QuickPay = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    amount: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.mobile || !formData.email || !formData.amount) {
      alert('Please fill in all fields');
      return;
    }

    // Validate amount is numeric
    if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Create a form and submit to the PHP endpoint
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://lushways.com/payment/index.php';

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Submit the form
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <a href="/" className="text-lushways hover:text-white text-sm font-medium font-yeserva">HOME</a>
              <a href="/quick-pay" className="text-lushways hover:text-white text-sm font-medium font-yeserva">QUICK PAY</a>
              <a href="/terms" className="text-lushways hover:text-white text-sm font-medium font-yeserva">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-lushways hover:text-white text-sm font-medium font-yeserva">PRIVACY POLICY</a>
              <a href="/contact" className="text-lushways hover:text-white text-sm font-medium font-yeserva">CONTACT US</a>
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

      {/* Quick Pay Content */}
      <div className="pt-24 md:pt-32 min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-lushways mb-2 font-yeserva">
              QUICK PAY
            </h1>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-lushways focus:ring-lushways"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="sr-only">Mobile</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-lushways focus:ring-lushways"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-lushways focus:ring-lushways"
                  required
                />
              </div>

              <div>
                <p className="text-yellow-400 text-sm mb-2">
                  Numeric value only, no commas or Text. Default currency AED
                </p>
                <Label htmlFor="amount" className="sr-only">Amount</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-lushways focus:ring-lushways"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-lushways hover:bg-lushways text-black font-semibold py-3 rounded-md transition-colors"
              >
                PAY NOW
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
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 font-yeserva">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center"><PhoneCall size={16} className="mr-2" /> 052 162 2999</p>
                <p className="flex items-center"><Mail size={16} className="mr-2" /> booking@lushways.com</p>
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
            <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuickPay;
