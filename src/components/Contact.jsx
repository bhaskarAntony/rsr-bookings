import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_osx8o5p',     // ← Replace
        'template_1ic0vli',    // ← Replace
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'D_EGEAmR1lfz0xEls'      // ← Replace
      );

      setSent(true);
      setTimeout(() => {
        setSent(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 3000);
    } catch (err) {
      setError('Failed to send. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
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
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <hr className="border-white/30 mb-6" />
              <div className="space-y-6">
                <InfoItem icon={<Phone size={24} />} label="Call Us">
                  <a href="tel:+919900197160" className="text-lg font-semibold hover:text-yellow-400">+91 99001 97160</a>
                  <br />
                  <a href="tel:+919019121137" className="text-lg font-semibold hover:text-yellow-400">+91 90191 21137</a>
                </InfoItem>

                <InfoItem icon={<Mail size={24} />} label="Email Us">
                  <a href="mailto:rsrtoursandtravelsblr@gmail.com" className="text-lg font-semibold hover:text-yellow-400 break-all">
                    rsrtoursandtravelsblr@gmail.com
                  </a>
                </InfoItem>

                <InfoItem icon={<MapPin size={24} />} label="Visit Us">
                  No.21/1, 1st Main, 1st Cross,<br />
                  RMS Colony, Bhattarahalli<br />
                  Bangalore, Karnataka 560049
                </InfoItem>

                <InfoItem icon={<Clock size={24} />} label="Working Hours">
                  24/7 Available<br />
                  <span className="text-sm text-blue-100">Office: Mon-Sat, 9 AM - 6 PM</span>
                </InfoItem>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Emergency Support</h4>
              <p className="text-gray-600 mb-3">
                For urgent assistance or immediate bookings, call our 24/7 helpline
              </p>
              <a href="tel:+919900197160" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                +91 99001 97160
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-blue-100 rounded-full p-4 mb-4">
                    <CheckCircle className="text-blue-600" size={56} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 text-center max-w-md">
                    Your message has been sent successfully. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="bg-red-50 text-red-700 p-3 rounded-lg text-sm text-center">
                      {error}
                    </p>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} required />
                    <Input label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option>Corporate Transportation</option>
                        <option>Employee Transport</option>
                        <option>Cab & Car Rental</option>
                        <option>Event & VIP Service</option>
                        <option>Airport Transfer</option>
                        <option>Outstation Trip</option>
                        <option>Bus Booking</option>
                        <option>Holiday Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
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

// Reusable Components
const InfoItem = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    {icon}
    <div>
      <div className="text-sm text-blue-100 mb-1">{label}</div>
      <div className="text-lg font-semibold">{children}</div>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...props}
    />
  </div>
);