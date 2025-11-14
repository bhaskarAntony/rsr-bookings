import { CheckCircle, Star, TrendingUp, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    'Largest fleet in Karnataka with good vehicles',
    'All drivers background verified and trained',
    'Real-time GPS tracking for all vehicles',
    'Transparent pricing with no hidden charges',
    'Dedicated account manager for corporates',
    '24/7 customer support and emergency assistance',
    'Flexible payment options and credit facilities',
    'Regular vehicle maintenance and quality checks',
    'Mobile app for easy booking and tracking',
    'blue vehicles available for eco-conscious clients',
    'Multi-city operations across South India',
    'Insurance coverage on all vehicles'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              The RSR Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6 leading-tight">
              Why Companies Choose RSR Tours & Travels
            </h2>
            <p className="text-md text-blue-100 mb-8 leading-relaxed">
              For over a decade, we've been the preferred transportation partner for leading enterprises, government organizations, and individuals across Karnataka. Our commitment to excellence, safety, and innovation sets us apart.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <Star className="text-blue-400 mb-2" size={32} />
                <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-sm text-blue-200">Customer Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <TrendingUp className="text-blue-400 mb-2" size={32} />
                <div className="text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-blue-200">On-Time Rate</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <Users className="text-blue-400 mb-3" size={32} />
              <div className="text-lg text-white font-semibold mb-2">Trusted by Leading Organizations</div>
              <div className="text-blue-200">
                IT Parks, Manufacturing Units, Hospitals, Educational Institutions, Government Offices, and Fortune more Companies
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h3>

              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-gray-700 leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Starting from</div>
                    <div className="text-3xl font-bold text-blue-600">₹12/km</div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
