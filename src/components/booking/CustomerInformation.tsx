import { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Customer } from '../../types/booking';

interface CustomerInformationProps {
  onSubmit: (customer: Customer) => void;
  onBack: () => void;
  onAddMore: () => void;
}

// Common countries with their codes and flags
const countries = [
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺' },
  { code: '+40', name: 'Romania', flag: '🇷🇴' },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+385', name: 'Croatia', flag: '🇭🇷' },
  { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
  { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+371', name: 'Latvia', flag: '🇱🇻' },
  { code: '+372', name: 'Estonia', flag: '🇪🇪' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+375', name: 'Belarus', flag: '🇧🇾' },
  { code: '+373', name: 'Moldova', flag: '🇲🇩' },
  { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
  { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
  { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: '+389', name: 'North Macedonia', flag: '🇲🇰' },
  { code: '+381', name: 'Serbia', flag: '🇷🇸' },
  { code: '+355', name: 'Albania', flag: '🇦🇱' },
  { code: '+356', name: 'Malta', flag: '🇲🇹' },
  { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+967', name: 'Yemen', flag: '🇾🇪' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+963', name: 'Syria', flag: '🇸🇾' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+212', name: 'Morocco', flag: '🇲🇦' },
  { code: '+213', name: 'Algeria', flag: '🇩🇿' },
  { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
  { code: '+218', name: 'Libya', flag: '🇱🇾' },
  { code: '+249', name: 'Sudan', flag: '🇸🇩' },
  { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+256', name: 'Uganda', flag: '🇺🇬' },
  { code: '+260', name: 'Zambia', flag: '🇿🇲' },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+592', name: 'Guyana', flag: '🇬🇾' },
  { code: '+597', name: 'Suriname', flag: '🇸🇷' },
  { code: '+594', name: 'French Guiana', flag: '🇬🇫' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
  { code: '+504', name: 'Honduras', flag: '🇭🇳' },
  { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+507', name: 'Panama', flag: '🇵🇦' },
  { code: '+53', name: 'Cuba', flag: '🇨🇺' },
  { code: '+1876', name: 'Jamaica', flag: '🇯🇲' },
  { code: '+1809', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+509', name: 'Haiti', flag: '🇭🇹' },
  { code: '+1787', name: 'Puerto Rico', flag: '🇵🇷' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+850', name: 'North Korea', flag: '🇰🇵' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
  { code: '+856', name: 'Laos', flag: '🇱🇦' },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+960', name: 'Maldives', flag: '🇲🇻' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+853', name: 'Macau', flag: '🇲🇴' },
  { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
];

const CustomerInformation = ({ onSubmit, onBack, onAddMore }: CustomerInformationProps) => {
  const [customer, setCustomer] = useState<Customer>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: ''
  });
  const [error, setError] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState('+971'); // Default to UAE
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const handleSubmit = () => {
    if (!customer.firstName || !phoneNumber || !customer.email) {
      setError('Please fill in all required fields');
      return;
    }

    // Simulate email validation error
    if (customer.email === 'gdbaalsllc@gmail.com') {
      setError('An account with that email address already exists. Please try signing in.');
      return;
    }

    setError('');
    onSubmit({
      ...customer,
      phone: selectedCountry + ' ' + phoneNumber
    });
  };

  const handleAutofill = () => {
    setCustomer({
      firstName: 'Mohamad ElMuslimani',
      lastName: '',
      phone: '',
      email: 'gdbaalsllc@gmail.com',
      comments: ''
    });
    setSelectedCountry('+971');
    setPhoneNumber('055396262');
  };

  const selectedCountryData = countries.find(c => c.code === selectedCountry) || countries[0];

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

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
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-auto min-w-[130px] rounded-r-none border-r-0 justify-between px-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{selectedCountryData.flag}</span>
                      <span className="text-sm">{selectedCountryData.code}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="start">
                  <div className="p-3 border-b">
                    <Input
                      placeholder="Search country..."
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="h-9"
                    />
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {filteredCountries.map((country) => (
                      <Button
                        key={country.code}
                        variant="ghost"
                        className="w-full justify-start px-3 py-2 h-auto text-left"
                        onClick={() => {
                          setSelectedCountry(country.code);
                          setIsCountryOpen(false);
                          setCountrySearch('');
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{country.flag}</span>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{country.name}</div>
                            <div className="text-xs text-gray-500">{country.code}</div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <Input
                id="phone"
                placeholder="50 123 4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="rounded-l-none flex-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              value={customer.firstName}
              onChange={(e) => setCustomer(prev => ({ ...prev, firstName: e.target.value }))}
              onFocus={handleAutofill}
              className="w-full"
            />
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
