
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Instagram, PhoneCall, Mail } from 'lucide-react';

const Terms = () => {
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
              <a href="/">
                <img 
                  src="/lovable-uploads/b3235b7a-c67c-4b61-8d20-82fc8d031c95.png" 
                  alt="LUSHWAYS" 
                  className="h-8 md:h-10 cursor-pointer" 
                />
              </a>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-lushways hover:text-white text-sm font-medium font-yeserva">HOME</a>
              <a href="/quick-pay" className="text-lushways hover:text-white text-sm font-medium font-yeserva">QUICK PAY</a>
              <a href="/terms" className="text-white text-sm font-medium font-yeserva">TERMS & CONDITIONS</a>
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

      {/* Terms Content */}
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-black mb-4 font-yeserva">
              Terms & Conditions
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">OVERVIEW</h2>
              <p className="mb-4">
                This website lushways.com is operated by Lushways salon FZ LLC. Throughout the site, the terms "we", "us" and "our" refer to lushways.com. offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
              <p className="mb-4">All services are provided by Lushways Salon FZ LLC</p>
              <p className="mb-4">
                By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
              </p>
              <p className="mb-4">
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
              </p>
              <p className="mb-4">
                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">SECTION 1 – ONLINE STORE TERMS & CONDITIONS</h2>
              <p className="mb-4">
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
              </p>
              <p className="mb-4">
                You may not use our services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
              <p className="mb-4">You must not transmit any worms or viruses or any code of a destructive nature.</p>
              <p className="mb-4">A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
              <p className="mb-4">Any dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of UAE.</p>
              <p className="mb-4">United Arab of Emirates is our country of domicile.</p>
              <p className="mb-4">Minors under the age of 18 shall are prohibited to register as a User of this website and are not allowed to transact or use the website.</p>
              <p className="mb-4">If you make a payment for our services or services on our website, the details you are asked to submit will be provided directly to our payment provider via a secured connection.</p>
              <p className="mb-4">The cardholder must retain a copy of transaction records and Merchant policies and rules.</p>
              <p className="mb-4">We accept payments online using Visa and MasterCard credit/debit card in AED (or any other agreed currency).</p>
              <p className="mb-4">www.lushways.com will NOT deal or provide any services or services to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of UAE.</p>
              <p className="mb-4">Multiple transactions may result in multiple postings to the cardholder's monthly statement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">SECTION 2 – GENERAL CONDITIONS</h2>
              <p className="mb-4">We reserve the right to refuse service to anyone for any reason at any time.</p>
              <p className="mb-4">You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
              <p className="mb-4">You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
              <p className="mb-4">The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">CONTACT INFORMATION</h2>
              <p className="mb-4">Questions about the Terms of Service should be sent to us at legal@lushways.com.</p>
            </section>

            <div className="border-t border-gray-300 pt-8 mt-12">
              <p className="text-sm text-gray-600 mb-2">
                Any dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of United Arab Emirates
              </p>
              <p className="text-sm text-gray-600 mb-2">
                United Arab of Emirates is our country of domicile and stipulate that the governing law is the local law.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Customer using the website who are Minor /under the age of 18 shall not register as a User of the website and shall not transact on or use the website.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                We accept payments online using Visa and MasterCard credit/debit card in United Arab Dirhams
              </p>
              <p className="text-sm text-gray-600 mb-2">
                The cardholder must retain a copy of transaction records
              </p>
              <p className="text-sm text-gray-600 mb-2">
                You are responsible maintaining the confidentiality of your account
              </p>
              <p className="text-sm text-gray-600 mb-2">
                The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the requirements and standards. Therefore the Customers' are encouraged to frequently visit these sections in order to be updated about the changes on the website. Modifications will be effective on the day they are posted.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Lushways will NOT deal or provide any services or products to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of United Arab Emirates
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Multiple transactions may result in multiple postings to the cardholder's monthly statement.
              </p>
              <p className="text-sm text-gray-600">
                Any Payments made on our website will take 2-5 minutes to be posted and you should receive a confirmation by email and SMS.
              </p>
            </div>
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

export default Terms;
