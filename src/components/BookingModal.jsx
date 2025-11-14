import { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    passengers: '1',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        pickupLocation: '',
        dropLocation: '',
        date: '',
        time: '',
        passengers: '1',
        notes: ''
      });
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-3xl flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Book Your Ride</h2>
            <p className="text-blue-100 mt-1">Fill in the details and we'll get back to you shortly</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <CheckCircle className="text-blue-600" size={64} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 text-center max-w-md">
                Thank you for choosing RSR Tours. Our team will contact you within 30 minutes to confirm your booking details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="corporate">Corporate Transportation</option>
                  <option value="employee">Employee Transport Management</option>
                  <option value="rental">Cab & Car Rental</option>
                  <option value="vip">Event & VIP Service</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="outstation">Outstation Trip</option>
                  <option value="bus">Bus Booking</option>
                  <option value="holiday">Holiday Package</option>
                </select>
              </div>

              {/* <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-1" />
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pickup address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-1" />
                    Drop Location *
                  </label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter drop address"
                  />
                </div>
              </div> */}

              {/* <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-1" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock size={16} className="inline mr-1" />
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users size={16} className="inline mr-1" />
                    Passengers *
                  </label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, '8+'].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div> */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Any special requirements or preferences..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                {/* <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button> */}
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
