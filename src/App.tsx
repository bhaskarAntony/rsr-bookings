import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ServiceModal from './components/ServiceModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookingOpen={() => setIsBookingModalOpen(true)} />
      <Hero onBookingOpen={() => setIsBookingModalOpen(true)} />
      <About />
      <Services onServiceClick={handleServiceClick} />
      <Benefits />
      <WhyChooseUs />
      {/* <Gallery /> */}
      <Testimonials />
      <Contact />
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        service={selectedService}
        onBooking={() => setIsBookingModalOpen(true)}
      />
    </div>
  );
}

export default App;
