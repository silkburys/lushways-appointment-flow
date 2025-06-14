
import { PhoneCall, Mail, Instagram } from 'lucide-react';

interface VoucherFooterProps {
  colors: {
    gold: string;
    text: string;
    teal: string;
  };
}

const VoucherFooter = ({ colors }: VoucherFooterProps) => {
  return (
    <footer style={{ background: "#fff", color: colors.text }} className="py-12 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{
                color: colors.gold,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.02em'
              }}
            >
              LUSHWAYS
            </h3>
            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>Professional beauty and salon services across Dubai.</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: colors.teal, display: "inline-flex" }}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{
                color: colors.gold,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.02em'
              }}
            >
              Contact Us
            </h3>
            <div className="space-y-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <p className="flex items-center">
                <PhoneCall size={16} className="mr-2" style={{ color: colors.teal }} /> 
                <a href="tel:0521622999" style={{ color: colors.text }} className="hover:text-[#4A908A]">052 162 2999</a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" style={{ color: colors.teal }} /> 
                <a href="mailto:booking@lushways.com" style={{ color: colors.text }} className="hover:text-[#4A908A]">booking@lushways.com</a>
              </p>
            </div>
          </div>
          
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{
                color: colors.gold,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.02em'
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <li><a href="/" className="hover:text-[#4A908A]" style={{ color: colors.text }}>Home</a></li>
              <li><a href="/quick-pay" className="hover:text-[#4A908A]" style={{ color: colors.text }}>Quick Pay</a></li>
              <li><a href="/terms" className="hover:text-[#4A908A]" style={{ color: colors.text }}>Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-[#4A908A]" style={{ color: colors.text }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center" style={{ color: "#888", fontFamily: "'Open Sans', sans-serif" }}>
          <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default VoucherFooter;
