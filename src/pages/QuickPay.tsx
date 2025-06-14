import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const QuickPay = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    amount: ''
  });

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
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-300 mb-2">
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
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400"
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
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400"
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
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400"
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
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 rounded-md transition-colors"
            >
              PAY NOW
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickPay;
