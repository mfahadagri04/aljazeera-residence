import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

localStorage.removeItem('testimonials');

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    testimonial: '',
    rating: 0,
  });

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      ...formData,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      id: Date.now(),
    };
    setTestimonials((prev) => [newTestimonial, ...prev]);
    setFormData({ name: '', testimonial: '', rating: 0 });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-xl ${index < rating ? 'text-secondary' : 'text-primary/20'}`}
      />
    ));
  };

  return (
    <section id="Testimonials" className="py-10 px-4 md:px-16 bg-tertiary z-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Guest Experiences
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Share your story and read what our guests say about their stay!
          </p>
        </div>

        {/* Testimonial Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Share Your Experience
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Rating */}
            <div>
              <label className="block text-black text-sm mb-2">Rating</label>
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setFormData({ ...formData, rating: index + 1 })}
                    className="transition-transform hover:scale-110"
                  >
                    <FaStar
                      className={`text-2xl ${
                        index < formData.rating ? 'text-secondary' : 'text-black/20'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-black text-sm mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border border-black/20 rounded-lg text-sm focus:ring-1 focus:ring-secondary"
                required
              />
            </div>

            {/* Testimonial */}
            <div>
              <label className="block text-black text-sm mb-1">Your Testimonial</label>
              <textarea
                value={formData.testimonial}
                onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                className="w-full p-2 border border-black/20 rounded-lg h-28 text-sm focus:ring-1 focus:ring-secondary"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-secondary text-primary px-8 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-secondary transition-all duration-200"
              >
                Submit Testimonial
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials Carousel */}
        <h3 className="text-2xl font-semibold text-black mb-8 text-center">
          Recent Testimonials
        </h3>

        {testimonials.length > 0 ? (
          <div className="px-4 py-8 pb-10">
            <Swiper
              key={testimonials.length}
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoHeight={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              style={{ paddingBottom: '50px' }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow h-full mx-2 min-h-[200px] flex flex-col">
                    <div className="flex gap-1 mb-3 text-secondary">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-black/50 mb-2">{testimonial.date}</p>
                    <blockquote className="text-black/70 italic text-sm flex-grow">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p className="text-center text-black/60 italic">
            No testimonials yet — be the first to share!
          </p>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
