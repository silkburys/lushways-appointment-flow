
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Customer } from '../../types/booking';

interface CustomerInformationProps {
  onSubmit: (customer: Customer) => void;
  onBack: () => void;
  onAddMore: () => void;
}

const CustomerInformation = ({ onSubmit, onBack, onAddMore }: CustomerInformationProps) => {
  const [customer, setCustomer] = useState<Customer>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: ''
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    if (!customer.firstName || !customer.lastName || !customer.phone || !customer.email) {
      setError('Please fill in all required fields');
      return;
    }

    // Simulate email validation error
    if (customer.email === 'gdbaalsllc@gmail.com') {
      setError('An account with that email address already exists. Please try signing in.');
      return;
    }

    setError('');
    onSubmit(customer);
  };

  const handleAutofill = () => {
    setCustomer({
      firstName: 'Mohamad',
      lastName: 'ElMuslimani',
      phone: '+971 055396262',
      email: 'gdbaalsllc@gmail.com',
      comments: ''
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">📝</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Your Information</h2>
          <p className="text-gray-600">
            Please provide your contact details so we can send you a 
            confirmation and other contact info
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Customer Information</h3>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="First Name"
                value={customer.firstName}
                onChange={(e) => setCustomer(prev => ({ ...prev, firstName: e.target.value }))}
                onFocus={handleAutofill}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                value={customer.lastName}
                onChange={(e) => setCustomer(prev => ({ ...prev, lastName: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                🇦🇪 +971
              </span>
              <Input
                id="phone"
                placeholder="50 123 4567"
                value={customer.phone.replace('+971 ', '')}
                onChange={(e) => setCustomer(prev => ({ ...prev, phone: '+971 ' + e.target.value }))}
                className="rounded-l-none"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className={error.includes('email') ? 'text-red-600' : ''}>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={customer.email}
              onChange={(e) => setCustomer(prev => ({ ...prev, email: e.target.value }))}
              className={error.includes('email') ? 'border-red-300' : ''}
            />
          </div>

          <div>
            <Label htmlFor="comments">Add Comments</Label>
            <Textarea
              id="comments"
              placeholder="Add Comments"
              value={customer.comments}
              onChange={(e) => setCustomer(prev => ({ ...prev, comments: e.target.value }))}
              rows={4}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button 
            onClick={handleSubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            Next
          </Button>
          <Button 
            variant="outline" 
            onClick={onAddMore}
            className="text-orange-600 border-orange-300 hover:bg-orange-50"
          >
            + Add More
          </Button>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">questions?</p>
          <p className="text-sm text-gray-500">
            Call 052 182 2999 for help<br />
            booking@lushways.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
