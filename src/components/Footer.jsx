import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-4">
              RSR TOURS & TRAVELS
            </h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Karnataka's most trusted travel partner, delivering excellence in corporate and employee transportation since 2013.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-green-100 hover:text-yellow-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-green-100 hover:text-yellow-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-green-100 hover:text-yellow-400 transition-colors">Fleet Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="text-green-100 hover:text-yellow-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-green-100 hover:text-yellow-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">Corporate Transport</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">Employee Shuttle</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">Car Rentals</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">Airport Transfers</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">Outstation Trips</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">Bus Bookings</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-green-100">
                 No.21/1, 1st Main, 1st Cross, <br /> RMS Colony, Bhattarahalli, Bangalore-560049
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-green-100 hover:text-yellow-400 transition-colors">
                    +91 99001 97160 / +91 90191 21137
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@rsrtours.com" className="text-green-100 hover:text-yellow-400 transition-colors">
                  rsrtoursandtravelsblr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-green-200 text-sm">
              © {currentYear} RSR Tours & Travels. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
