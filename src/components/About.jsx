import { Shield, Users, Clock, Award, TrendingUp, Headphones } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Shield, label: 'Safe & Secure', description: 'GPS tracked vehicles with verified drivers' },
    { icon: Users, label: 'Expert Team', description: 'Professional chauffeurs with 5+ years experience' },
    { icon: Clock, label: '24/7 Available', description: 'Round-the-clock service for your convenience' },
    { icon: Award, label: 'Certified Service', description: 'Certified operator' },
    { icon: TrendingUp, label: 'Growing Network', description: 'more corporate clients trust us daily' },
    { icon: Headphones, label: 'Dedicated Support', description: 'Personal account manager for enterprises' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                About RSR Tours
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Driven by Trust,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Powered by Technology
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              RSR Tours & Travels is Karnataka's most trusted travel partner for corporates, government offices, and individuals. From daily employee transport to premium cab rentals, we combine comfort, safety, and smart technology to redefine travel management.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of excellence in the transportation industry, we've built our reputation on reliability, professionalism, and innovative solutions. Our fleet is maintained to the highest standards, and our drivers undergo rigorous training and background verification.
            </p>

            {/* <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                  250+
                </div>
                <div className="text-sm text-gray-600 font-medium">Active Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-20 blur-2xl" />
            <img
              src="https://seattlecarservice.com/wp-content/uploads/2023/11/gettyimages-668933976-2048x2048-1-1024x683.jpg"
              alt="RSR Fleet"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.label}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
