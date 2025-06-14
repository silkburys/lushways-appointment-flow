
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Instagram, PhoneCall, Mail } from 'lucide-react';

const Privacy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
              <a href="/" className="text-amber-100 hover:text-white text-sm font-medium font-yeserva">HOME</a>
              <a href="/quick-pay" className="text-amber-100 hover:text-white text-sm font-medium font-yeserva">QUICK PAY</a>
              <a href="/terms" className="text-amber-100 hover:text-white text-sm font-medium font-yeserva">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-amber-100 hover:text-white text-sm font-medium font-yeserva">PRIVACY POLICY</a>
              <a href="/contact" className="text-amber-100 hover:text-white text-sm font-medium font-yeserva">CONTACT US</a>
            </nav>
            
            {/* Login Button */}
            <Button 
              variant="link" 
              className="text-amber-100 hover:text-white font-yeserva"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </header>

      {/* Privacy Content */}
      <div className="pt-24 md:pt-32 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-amber-300 mb-4 font-yeserva">
              Privacy Policy
            </h1>
            <p className="text-amber-100 text-lg">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.lushways.com
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-yeserva">PERSONAL INFORMATION WE COLLECT</h2>
              <p className="mb-4">
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information".
              </p>
              
              <h3 className="text-xl font-semibold text-amber-300 mb-3 font-yeserva">We collect Device Information using the following technologies:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Cookies"</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
                <li><strong>"Log files"</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                <li><strong>"Web beacons", "tags", and "pixels"</strong> are electronic files used to record information about how you browse the Site.</li>
              </ul>
              
              <p className="mb-4 mt-4">
                Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information".
              </p>
              
              <p className="mb-4">
                When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-yeserva">DO NOT TRACK</h2>
              <p className="mb-4">
                Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-yeserva">DATA RETENTION</h2>
              <p className="mb-4">
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-yeserva">CREDIT CARDS</h2>
              <p className="mb-4">
                All credit/debit cards details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties.
              </p>
              <p className="mb-4">
                All credit/debit cards' details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties. If you make a payment for our products or services on our website, the details you are asked to submit will be provided directly to our payment provider via a secured connection. We will not pass any debit/credit card details to third parties.
              </p>
              <p className="mb-4">
                We will take all appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, (Lushways.com) cannot guarantee the security of any information that is disclosed online.
              </p>
              <p className="mb-4">
                Some of the advertisements you see on the Site are selected and delivered by third parties, such as ad networks, advertising agencies, advertisers, and audience segment providers. These third parties may collect information about you and your online activities, either on the Site or on other websites, through cookies, web beacons, and other technologies in an effort to understand your interests and deliver to you advertisements that are tailored to your interests. Please remember that we do not have access to, or control over, the information these third parties may collect. The information practices of these third parties are not covered by this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-yeserva">CHANGES</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-yeserva">CONTACT US</h2>
              <p className="mb-4">
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at legal@lushways.com
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-amber-100 py-12">
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

export default Privacy;
