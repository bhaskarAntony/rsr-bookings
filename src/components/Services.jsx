import { Building2, Car, Sparkles, MapPin, Plane, Bus, Users, Package, ChevronRight } from 'lucide-react';

export default function Services({ onServiceClick }) {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transportation',
      description: 'Enterprise-grade employee shuttle services with real-time tracking, route optimization, and dedicated fleet management.',
      features: ['Fixed Route Shuttles', 'Door-to-Door Pickup', 'Live GPS Tracking', 'Corporate Billing'],
      headerImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      id: 'corporate'
    },
    {
      icon: Users,
      title: 'Employee Transport',
      description: 'End-to-end workforce mobility with automated scheduling, biometric attendance, and safety compliance.',
      features: ['Smart Scheduling', 'Biometric Check-in', 'Women Safety Features', 'Route Analytics'],
      headerImage: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      id: 'employee'
    },
    {
      icon: Car,
      title: 'Cab & Car Rentals',
      description: 'Premium sedans, SUVs, and luxury cars with professional chauffeurs for business and executive travel.',
      features: ['Luxury Sedans & SUVs', 'Chauffeur Driven', 'Hourly & Daily Plans', 'In-Car WiFi'],
      headerImage: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      id: 'rental'
    },
    {
      icon: Sparkles,
      title: 'Event & VIP Services',
      description: 'Luxury fleet coordination for weddings, conferences, celebrity visits, and high-profile events.',
      features: ['Mercedes & Audi Fleet', 'Red Carpet Service', 'Event Logistics', '24/7 Coordination'],
      headerImage: 'https://admin-control-panel.limogrow.com/all-uploads/royalluxury320/uploads/services/vip_yukon_large.jpg',
      id: 'vip'
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Seamless airport pickups & drops with flight monitoring, meet & greet, and priority handling.',
      features: ['Real-time Flight Tracking', 'Meet & Greet', 'Porter Service', 'No Surge Pricing'],
      headerImage: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/2c/62.jpg',
      id: 'airport'
    },
    {
      icon: MapPin,
      title: 'Outstation Trips',
      description: 'Comfortable long-distance travel with flexible routes, experienced drivers, and transparent pricing.',
      features: ['One-way & Round Trips', 'Toll & Parking Included', 'Multi-stop Itineraries', 'Driver Allowance'],
      headerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56Qcggw6C9BSaDCI42YJDlTpDqUd5KMP2kA&s',
      id: 'outstation'
    },
    {
      icon: Bus,
      title: 'Bus Bookings',
      description: 'AC coaches and minibuses for group tours, corporate events, and educational excursions.',
      features: ['20–50 Seater Buses', 'AC & Non-AC Options', 'Entertainment Systems', 'Group Discounts'],
      headerImage: 'https://images.pexels.com/photos/3856050/pexels-photo-3856050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      id: 'bus'
    },
    {
      icon: Package,
      title: 'Holiday Packages',
      description: 'All-inclusive travel packages with stays, meals, sightseeing, and hassle-free transportation.',
      features: ['Curated Itineraries', '5-Star Stays', 'Local Guides', 'Customizable Plans'],
      headerImage: 'https://www.indiantempletour.com/wp-content/uploads/2022/10/Europe-Tour-Packages-from-Mumbai.webp',
      id: 'holiday'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles size={16} />
            Our Comprehensive Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-3 leading-tight">
            Travel Solutions for
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Every Need</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From daily commutes to luxury getaways — we deliver safe, reliable, and technology-powered transportation across Karnataka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => onServiceClick(service)}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                <img
                  src={service.headerImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                
                {/* Icon & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/25 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                  Explore Service
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-sm text-gray-500">
            Trusted by <span className="font-bold text-blue-600">More companies</span> across Karnataka • 
            <span className="font-bold text-blue-600"> 99.8% on-time performance</span>
          </p>
        </div>
      </div>
    </section>
  );
}