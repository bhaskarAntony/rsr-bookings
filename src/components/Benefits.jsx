import { DollarSign, Shield, Clock, BarChart3, Wrench, Smartphone, FileCheck, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Save up to 40% on transportation costs compared to traditional cab services. Volume discounts and corporate packages available.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Complete Safety',
      description: 'GPS-enabled vehicles, driver verification, emergency SOS button, and 24/7 monitoring for passenger security.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Punctual Service',
      description: 'On-time guarantee with route optimization, traffic updates, and real-time ETA sharing for hassle-free commutes.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting on usage, costs, employee attendance, and route efficiency with downloadable reports.',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      icon: Wrench,
      title: 'Regular Maintenance',
      description: 'Fleet maintained as per manufacturer guidelines with daily checks, monthly servicing, and breakdown support.',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Access',
      description: 'Book rides, track vehicles, view schedules, and manage bookings through our user-friendly mobile application.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      icon: FileCheck,
      title: 'Transparent Billing',
      description: 'No hidden charges. Clear invoicing with detailed breakdown, GST compliant, and multiple payment options.',
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Instant booking confirmation, last-minute changes accommodated, and emergency vehicle replacement within 30 minutes.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Why Choose RSR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Benefits That Drive Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of partnering with Karnataka's leading transportation service provider
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />

              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className={`${benefit.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={benefit.color} size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Transportation?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies who trust RSR Tours for their daily transportation needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-md border w-full border-white/30 rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-white">Client Satisfaction</div>
            </div>
            {/* <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-blue-400">5000+</div>
              <div className="text-sm text-white">Daily Rides</div>
            </div> */}
            <div className="bg-white/20 backdrop-blur-md border w-full border-white/30 rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
