import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServiceModal({ isOpen, onClose, service, onBooking }) {
  if (!isOpen || !service) return null;

  const serviceDetails = {
    corporate: {
      fullDescription: 'Our corporate transportation solution is designed for businesses that want to provide reliable, safe, and comfortable commute options for their employees. We handle everything from route planning to driver management, giving you a completely managed service.',
      highlights: [
        'Fixed monthly pricing with no hidden costs',
        'Customized routes based on employee locations',
        'Real-time vehicle tracking and monitoring',
        'Professional uniformed chauffeurs',
        'Automated attendance and reporting system',
        'Flexible fleet options from sedans to buses',
        'Dedicated account manager',
        'Emergency backup vehicles available'
      ],
      pricing: 'Starting from ₹18,000/month per vehicle',
      ideal: 'IT companies, manufacturing units, BPOs, and enterprises with 50+ employees'
    },
    employee: {
      fullDescription: 'Complete employee transport management system with technology-driven solutions. Our platform provides end-to-end visibility and control over your workforce transportation with automated scheduling, route optimization, and comprehensive analytics.',
      highlights: [
        'Smart route optimization to reduce costs',
        'Mobile app for employees to track shuttles',
        'Automated shift-wise scheduling',
        'Integration with attendance systems',
        'Emergency SOS and safety features',
        'Female-only cab options available',
        'Monthly usage reports and analytics',
        'Flexible vehicle assignment'
      ],
      pricing: 'Custom pricing based on employee count and routes',
      ideal: 'Organizations with multiple shifts, remote offices, or 100+ employees'
    },
    rental: {
      fullDescription: 'Premium chauffeur-driven car rental services for business meetings, client visits, and corporate events. Choose from our range of well-maintained sedans and SUVs with professional drivers who know the city inside out.',
      highlights: [
        'Hourly, daily, and weekly rental options',
        'Sedans: Honda City, Maruti Ciaz, Toyota Camry',
        'SUVs: Innova Crysta, Toyota Fortuner, Mahindra XUV',
        'Professional chauffeurs with 5+ years experience',
        'Corporate billing and credit facilities',
        'Multiple pickup and drop points',
        'Free cancellation up to 2 hours before',
        'All-inclusive pricing (fuel, driver, parking)'
      ],
      pricing: 'Sedans from ₹14/km | SUVs from ₹18/km | Hourly packages from ₹350/hr',
      ideal: 'Business meetings, client visits, executive transport, and outstation travel'
    },
    vip: {
      fullDescription: 'Luxury vehicle fleet for VIP guests, corporate events, weddings, and special occasions. Our premium service includes event coordination, protocol management, and attention to every detail to ensure a memorable experience.',
      highlights: [
        'Luxury sedans: Mercedes, BMW, Audi',
        'Premium SUVs: Range Rover, Toyota Land Cruiser',
        'Professional protocol-trained chauffeurs',
        'Event transportation coordination',
        'Multiple vehicle bookings for large events',
        'Red carpet and concierge services',
        'Flexible itinerary management',
        'Complimentary decorations for weddings'
      ],
      pricing: 'Starting from ₹35/km for luxury vehicles | Event packages from ₹50,000',
      ideal: 'Corporate events, weddings, VIP guest transport, conferences, and celebrations'
    },
    airport: {
      fullDescription: 'Hassle-free airport pickup and drop services with flight tracking, meet & greet, and luggage assistance. Our drivers monitor your flight status and are always on time, ensuring you never miss your flight or wait at the airport.',
      highlights: [
        'Real-time flight tracking',
        'Professional meet & greet service',
        'Complimentary waiting time (30 min)',
        'Luggage assistance included',
        'All-inclusive pricing (toll, parking)',
        'Sedan and SUV options available',
        'Early morning and late night pickups',
        'SMS and email confirmation'
      ],
      pricing: 'Airport transfers from ₹800 | Premium vehicles from ₹1,500',
      ideal: 'Business travelers, executives, families, and tourists'
    },
    outstation: {
      fullDescription: 'Comfortable and safe outstation travel with experienced drivers who know the routes well. Whether it\'s a business trip or weekend getaway, we provide flexible packages for one-way, round trips, and multi-city tours.',
      highlights: [
        'One-way and round trip options',
        'Multi-city tour packages',
        'Experienced drivers familiar with routes',
        'Flexible itinerary and stops',
        'Well-maintained AC vehicles',
        'Driver allowance included',
        'No hidden charges for tolls',
        '24/7 roadside assistance'
      ],
      pricing: 'Starting from ₹12/km | Minimum 250 km/day for multi-day trips',
      ideal: 'Business trips, weekend getaways, family vacations, and pilgrimages'
    },
    bus: {
      fullDescription: 'Mini buses and luxury coaches for group travel needs. Perfect for corporate outings, educational trips, employee transport, and large events. All our buses are regularly maintained and equipped with modern amenities.',
      highlights: [
        '17-seater Tempo Travellers',
        '20-seater mini buses',
        '32 and 45-seater AC coaches',
        'Luxury coaches with reclining seats',
        'Push-back seats and ample legroom',
        'Audio/video entertainment systems',
        'First aid and fire extinguisher',
        'Experienced drivers with clean records'
      ],
      pricing: 'Tempo Traveller from ₹22/km | 45-seater coach from ₹35/km | Daily packages available',
      ideal: 'Corporate outings, educational trips, pilgrimage tours, and events'
    },
    holiday: {
      fullDescription: 'Curated holiday packages to popular destinations with complete transportation, accommodation, and sightseeing arrangements. Let us handle all the logistics while you enjoy your vacation with family and friends.',
      highlights: [
        'Popular destinations covered across South India',
        'Customizable tour packages',
        'Hotel and resort bookings',
        'Complete sightseeing with guide',
        'AC transportation throughout',
        'Meal arrangements on request',
        'Photography services available',
        'Flexible payment options'
      ],
      pricing: 'Packages starting from ₹8,999 per person | Custom quotes available',
      ideal: 'Family vacations, honeymoon trips, group tours, and corporate retreats'
    }
  };

  const details = serviceDetails[service.id] || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 p-5 rounded-t-3xl flex items-start justify-between`}>
          <div className="flex items-start gap-4">
            {/* <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl">
              <service.icon className="text-white" size={40} />
            </div> */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
              <p className="text-white/90 text-lg">{service.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all flex-shrink-0"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-5 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{details.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features & Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {details.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pricing Information</h3>
            <p className="text-lg text-gray-700 mb-4">{details.pricing}</p>
            <p className="text-sm text-gray-600">
              <strong>Ideal For:</strong> {details.ideal}
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">Special Offer</h4>
            <p className="text-gray-700 mb-3">
              Get 10% discount on your first booking. Valid for new corporate clients.
            </p>
            <p className="text-sm text-gray-600">
              Terms and conditions apply. Offer valid till end of the month.
            </p>
          </div>

          <div className="flex gap-4">
            {/* <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all"
            >
              Close
            </button> */}
            <button
              onClick={() => {
                onClose();
                onBooking();
              }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Book This Service
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
