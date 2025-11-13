import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your transportation experience? Reach out to us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-5 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <hr /><br />
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <Phone size={24} />
                  <div>
                    <div className="text-sm text-green-100 mb-1">Call Us</div>
                    <a href="tel:+919876543210" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
                      +91 99001 97160
                    </a>
                    <br />
                    <a href="tel:+918012345678" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
                      +91 90191 21137
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* <div className="bg-white/20 p-3 rounded-xl">
                  
                  </div> */}
                    <Mail size={24} />
                  <div>
                    <div className="text-sm text-green-100 mb-1">Email Us</div>
                    <a href="mailto:rsrtoursandtravelsblr@gmail.com" style={{wordWrap:"break-word"}} className="text-lg font-semibold hover:text-yellow-400 transition-colors w-full">
                      rsrtoursandtravelsblr<br/>@gmail.com
                    </a>
                   
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* <div className="bg-white/20 p-3 rounded-xl">
                    
                  </div> */}
                  <MapPin size={24} />
                  <div>
                    <div className="text-sm text-green-100 mb-1">Visit Us</div>
                    <div className="text-lg font-semibold">
                      No.21/1, 1st Main, 1st Cross, <br /> RMS Colony, Bhattarahalli
                      <br />
                      Bangalore, Karnataka 560049
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* <div className="bg-white/20 p-3 rounded-xl">
                  
                  </div> */}
                    <Clock size={24} />
                  <div>
                    <div className="text-sm text-green-100 mb-1">Working Hours</div>
                    <div className="text-lg font-semibold">
                      24/7 Available
                      <br />
                      <span className="text-sm text-green-100">Office: Mon-Sat, 9 AM - 6 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Emergency Support</h4>
              <p className="text-gray-600 mb-3">
                For urgent assistance or immediate bookings, call our 24/7 helpline
              </p>
              <a
                href="tel:1800123456"
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
              >
                +91 99001 97160
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-5 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-100 rounded-full p-4 mb-4">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 text-center">
                    Your message has been sent successfully. Our team will contact you within 24 hours.
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="corporate">Corporate Transportation</option>
                        <option value="employee">Employee Transport</option>
                        <option value="rental">Cab & Car Rental</option>
                        <option value="vip">Event & VIP Service</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="outstation">Outstation Trip</option>
                        <option value="bus">Bus Booking</option>
                        <option value="holiday">Holiday Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
