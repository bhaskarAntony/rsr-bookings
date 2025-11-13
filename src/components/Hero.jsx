import { ArrowRight, PlayCircle, Phone, Mail } from 'lucide-react';
import video1 from '../assets/hero-bg.mp4'

export default function Hero({ onBookingOpen }) {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-10  w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/80 z-10" />

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={video1}
        >
        
        </video>
      </div>

      <div className="relative z-20  flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-block mt-10">
              <span className="bg-green-500 text-black px-4  sm:px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                Karnataka's Premier Travel Partner
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Your Reliable Companion for
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
                Every Adventure
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Corporate Transport • Employee Shuttles • Cab & Car Rentals • Event & VIP Services
              <br />
              <span className="text-base sm:text-lg text-gray-300">Airport Transfers • Outstation Trips • Bus Bookings • Luxury Holiday Packages</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6">
              <button
                onClick={onBookingOpen}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 shadow-md"
              >
                Book Your Ride
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} sm:size={24} />
              </button>
              <button
                onClick={scrollToGallery}
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3"
              >
                <PlayCircle size={20} sm:size={24} />
                View Our Services
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6 text-gray-200 text-sm sm:text-base">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Phone size={18} sm:size={20} />
                +91 99001 97160 / +91 90191 21137
              </a>
              <a href="mailto:info@travelpartner.com" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Mail size={18} sm:size={20} />
                rsrtoursandtravelsblr@gmail.com
              </a>
            </div>

            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">300+</div>
                <div className="text-white font-semibold text-sm sm:text-base">Premium Vehicles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">24/7/365</div>
                <div className="text-white font-semibold text-sm sm:text-base">Dedicated Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">100%</div>
                <div className="text-white font-semibold text-sm sm:text-base">Certified Drivers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">50K+</div>
                <div className="text-white font-semibold text-sm sm:text-base">Happy Customers</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <button
          onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white hover:text-green-400 transition-colors"
        >
          <ArrowRight className="rotate-90" size={32} />
        </button>
      </div>
    </section>
  );
}