import { useState, useEffect } from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';

export default function Navbar({ onBookingOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="https://www.rsr-tours.com/static/media/logoRSR.520d3b5c1fbc05c845d5.jpg"
              alt="RSR Tours"
              className="h-9 sm:h-12 rounded"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={onBookingOpen}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-gray-700 hover:text-blue-600 p-1"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* DRAWER (Mobile) */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <img
                src="https://www.rsr-tours.com/static/media/logoRSR.520d3b5c1fbc05c845d5.jpg"
                alt="RSR Tours"
                className="h-9"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-5 py-6 space-y-1">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                // { label: 'Gallery', id: 'gallery' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all group"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </button>
              ))}

              <button
                onClick={() => {
                  onBookingOpen();
                  setIsOpen(false);
                }}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Book a Ride
              </button>
            </nav>

            {/* Contact */}
            <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">+91 99001 97160</span>
              </a>
              <a href="mailto:info@rsrtours.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">rsrtoursandtravelsblr@gmail.com</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}