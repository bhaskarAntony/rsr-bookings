import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Lakshman Reddy',
      position: 'Local Guide',
      company: 'Tech Solutions Pvt Ltd',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Very nice and comfortable car and the driver was also very humble, competent and he knew all the routes. My trip was a great success. Special mention to Sachin who is extremely efficient and safe driver. Highly recommend!'
    },
    {
      name: 'Sunil Kumar R',
      position: 'Operations Head',
      company: 'Manufacturing Corp',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Tried first time Vel Service for local drop off. Booking was so smooth over the phone and driver reached on time. Driver Mr Arun is friendly, Will book again in the future.'
    },
    {
      name: 'Tilak Somashekara',
      position: 'Event Manager',
      company: 'Celebrations & Events',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'One of the best travels that I have come across. I had bad experience with the previous travels and was little hesitant at first but once when I experienced it, there was nothing short of feeling good experience. Thanks to Ramesh and Akash.'
    },
    {
      name: 'Somushekar Reddy',
      position: 'Travel Enthusiast',
      company: 'Global Services Ltd',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Thanks to RSR for providing awesome service & best memories. Provided good Innova crysta, reached on time and driver was super, my upcoming all journeys with u'
    },
    {
      name: 'Lavanya M',
      position: 'HR Manager',
      company: 'IT Park Services',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Excellent service... Budget friendly. Highly recommended'
    },
    {
      name: 'Manjunathareddy J',
      position: 'Finance Director',
      company: 'Pharma Industries',
      image: 'https://images.pexels.com/photos/3756166/pexels-photo-3756166.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Very decent with reasonable rates for flight booking...'
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-5 mb-4">
            Trusted by
            <span className="text-green-600"> Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from companies and individuals who rely on us every day
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory">
            <div className="flex gap-6 md:gap-8 px-4 py-2">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-full sm:w-96 md:w-80 lg:w-96 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                >
                  {/* Quote Icon */}
                  <Quote className="text-gray-500 mb-5" size={40} />

                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className1 className="flex items-center gap-4">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-100"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{t.name}</div>
                      {/* <div className="text-sm text-gray-500">
                        {t.position && `${t.position}, `}{t.company}
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-200 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-200 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-6 mt-16 md:mt-20 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-green-600">500+</div>
            <div className="text-gray-600 mt-1">Corporate Clients</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-green-600">4.9</div>
            <div className="text-gray-600 mt-1">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-green-600">98%</div>
            <div className="text-gray-600 mt-1">Retention Rate</div>
          </div>
        </div> */}
      </div>

      {/* Hide scrollbar but keep functionality */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}