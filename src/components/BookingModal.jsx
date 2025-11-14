import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_osx8o5p',     // ← replace
        'template_llp230f',    // ← replace
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
        },
        'D_EGEAmR1lfz0xEls'      // ← replace
      );

      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', phone: '', service: '' });
        onClose();
      }, 3000);
    } catch (err) {
      setError('Oops! Something went wrong. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-3xl flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Quick Booking Demo</h2>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-6">
          {sent ? (
            <div className="flex flex-col items-center py-10">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <CheckCircle className="text-blue-600" size={56} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 text-center">
                Your demo request has been sent. We’ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {error && (
                <p className="bg-red-50 text-red-700 p-3 rounded-lg text-sm text-center">
                  {error}
                </p>
              )}

              <Input label="Full Name *" name="name" value={form.name} onChange={handleChange} required />
              <Input label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Input label="Phone *" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a service</option>
                  <option>Corporate Transport</option>
                  <option>Employee Shuttle</option>
                  <option>Cab & Car Rental</option>
                  <option>Event & VIP</option>
                  <option>Airport Transfer</option>
                  <option>Outstation Trip</option>
                  <option>Bus Booking</option>
                  <option>Holiday Package</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending…
                  </>
                ) : (
                  'Send Request'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* Tiny reusable input */
const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);