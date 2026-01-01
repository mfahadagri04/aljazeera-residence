import { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { format } from 'date-fns';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({ name: '', testimonial: '', rating: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get('https://aljazeera-residence.onrender.com/api/testimonials');
        setTestimonials(res.data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      }
    };
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        testimonial: formData.testimonial,
        rating: formData.rating,
      };
      const res = await axios.post(
        'https://aljazeera-residence.onrender.com/api/testimonials',
        payload
      );
      setTestimonials((prev) => [res.data, ...prev]);
      setFormData({ name: '', testimonial: '', rating: 0 });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-xl ${index < rating ? 'text-secondary' : 'text-primary/20'}`}
      />
    ));
  };

  // Calculate slides per view and group based on window width
  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const slidesPerView = getSlidesPerView();
  const slidesPerGroup = slidesPerView;

  // Calculate max possible index (last slide group start)
  const maxIndex = testimonials.length - (testimonials.length % slidesPerGroup || slidesPerGroup);

  // Custom next button handler
  const handleNext = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    let newIndex = activeIndex + slidesPerGroup;

    // If overshoot, move to last group exactly
    if (newIndex >= maxIndex) {
      newIndex = maxIndex;
    }
    swiper.slideTo(newIndex);
  };

  // Custom prev button handler
  const handlePrev = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    let newIndex = activeIndex - slidesPerGroup;
    if (newIndex < 0) newIndex = 0;
    swiper.slideTo(newIndex);
  };

  return (
    <section id="Testimonials" className="py-10 px-4 md:px-16 bg-tertiary z-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Guest Experiences</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Share your story and read what our guests say about their stay!
          </p>
        </div>

        {/* Testimonial Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">Share Your Experience</h3>

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
        <h3 className="text-2xl font-semibold text-black mb-8 text-center">Recent Testimonials</h3>

        {testimonials.length > 0 ? (
          <div className="px-4 py-8 pb-10 relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={slidesPerView}
              slidesPerGroup={slidesPerGroup}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              navigation={false} // We'll use custom buttons
              pagination={{ clickable: true }}
              autoHeight={true}
              style={{ paddingBottom: '50px' }}
              loop={false}
              watchOverflow={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial._id}>
                  <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow h-full mx-2 min-h-[200px] flex flex-col">
                    <div className="flex gap-1 mb-3 text-secondary">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h4 className="text-lg font-semibold text-black mb-1">{testimonial.name}</h4>
                    <p className="text-xs text-black/50 mb-2">
                      {testimonial.date ? format(new Date(testimonial.date), 'MMMM d yyyy') : ''}
                    </p>
                    <blockquote className="text-black/70 italic text-sm flex-grow">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`p-2 rounded-full bg-secondary text-primary ${
                  activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                aria-label="Previous testimonials"
              >
                ‹
              </button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
              <button
                onClick={handleNext}
                disabled={activeIndex >= maxIndex}
                className={`p-2 rounded-full bg-secondary text-primary ${
                  activeIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                aria-label="Next testimonials"
              >
                ›
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-black/60 italic">No testimonials yet — be the first to share!</p>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
