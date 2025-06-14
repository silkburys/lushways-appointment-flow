import { PhoneCall, Mail, Instagram } from 'lucide-react';

interface VoucherFooterProps {
  colors: {
    primary: string;
    text: string;
    accent: string;
    background: string;
  };
}

const VoucherFooter = ({ colors }: VoucherFooterProps) => {
  return (
    <footer 
      style={{ 
        background: colors.background, 
        color: colors.text,
        borderTop: `2px solid ${colors.primary}`
      }} 
      className="py-16 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3
              className="text-2xl font-bold mb-5"
              style={{
                color: colors.primary,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '0.01em'
              }}
            >
              LUSHWAYS
            </h3>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: '17px', lineHeight: 1.5 }}>
              Professional beauty and salon services across Dubai.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: colors.accent, display: "inline-flex" }}
                className="transition-colors hover:scale-110"
                onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                onMouseOut={e => (e.currentTarget.style.color = colors.accent)}
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3
              className="text-2xl font-bold mb-5"
              style={{
                color: colors.primary,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '0.01em'
              }}
            >
              Contact Us
            </h3>
            <div className="space-y-3" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '17px' }}>
              <p className="flex items-center">
                <PhoneCall size={18} className="mr-3" style={{ color: colors.accent }} /> 
                <a 
                  href="tel:0521622999" 
                  style={{ color: colors.text }} 
                  className="transition-colors"
                  onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.text)}
                >
                  052 162 2999
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-3" style={{ color: colors.accent }} /> 
                <a 
                  href="mailto:booking@lushways.com" 
                  style={{ color: colors.text }} 
                  className="transition-colors"
                  onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.text)}
                >
                  booking@lushways.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3
              className="text-2xl font-bold mb-5"
              style={{
                color: colors.primary,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '0.01em'
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '17px' }}>
              <li>
                <a 
                  href="/" 
                  className="transition-colors" 
                  style={{ color: colors.text }}
                  onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.text)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/quick-pay" 
                  className="transition-colors" 
                  style={{ color: colors.text }}
                  onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.text)}
                >
                  Quick Pay
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="transition-colors" 
                  style={{ color: colors.text }}
                  onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.text)}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="transition-colors" 
                  style={{ color: colors.text }}
                  onMouseOver={e => (e.currentTarget.style.color = colors.primary)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.text)}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div 
          className="border-t pt-8 text-center" 
          style={{ 
            borderColor: colors.primary, 
            color: "#888", 
            fontFamily: "'Roboto', sans-serif",
            fontSize: '16px'
          }}
        >
          <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default VoucherFooter;
