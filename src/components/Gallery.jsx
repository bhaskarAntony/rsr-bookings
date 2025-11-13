import { useState } from 'react';
import { Users } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'sedan', label: 'Sedans' },
    { id: 'suv', label: 'SUVs' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'bus', label: 'Buses' }
  ];

  const vehicles = [
    {
      name: 'Toyota Innova Crysta',
      category: 'suv',
      image: 'https://images.pexels.com/photos/3874343/pexels-photo-3874343.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '6-7 Seater',
      type: 'Premium SUV'
    },
    {
      name: 'Honda City',
      category: 'sedan',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '4 Seater',
      type: 'Executive Sedan'
    },
    {
      name: 'Mercedes E-Class',
      category: 'luxury',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '4 Seater',
      type: 'Luxury Sedan'
    },
    {
      name: 'Toyota Fortuner',
      category: 'suv',
      image: 'https://images.pexels.com/photos/3802085/pexels-photo-3802085.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '7 Seater',
      type: 'Premium SUV'
    },
    {
      name: 'Maruti Swift Dzire',
      category: 'sedan',
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '4 Seater',
      type: 'Economy Sedan'
    },
    {
      name: 'BMW 5 Series',
      category: 'luxury',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '5 Seater',
      type: 'Luxury Sedan'
    },
    {
      name: 'Force Traveller',
      category: 'bus',
      image: 'https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '17 Seater',
      type: 'Mini Bus'
    },
    {
      name: 'Luxury Coach',
      category: 'bus',
      image: 'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: '45 Seater',
      type: 'AC Coach'
    }
  ];

  const filteredVehicles = activeCategory === 'all'
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Our Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Premium Vehicle Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From economical sedans to luxury coaches - find the perfect vehicle for your needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-green-600" />
                    {vehicle.capacity}
                  </span>
                  <span className="text-green-600 font-semibold">Book Now →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-green-100 mb-6">
            We have a diverse fleet of 250+ vehicles. Contact us for custom requirements.
          </p>
          <button className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all">
            Request Custom Vehicle
          </button>
        </div>
      </div>
    </section>
  );
}
