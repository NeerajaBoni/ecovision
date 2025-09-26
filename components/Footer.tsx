import React from 'react';
import LeafIcon from './icons/LeafIcon';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    alert(`Thank you for subscribing, ${email}!`);
    e.currentTarget.reset();
  };
    
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <LeafIcon className="h-8 w-8 text-green-600" />
              <span className="ml-3 text-2xl font-bold tracking-tight text-gray-800">EcoAction</span>
            </div>
            <p className="max-w-md">
              Join our community dedicated to making a tangible difference for our planet. Together, we can create a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Get Involved</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4">Stay updated on our latest initiatives.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
              <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} EcoAction. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {/* Social media icons can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;