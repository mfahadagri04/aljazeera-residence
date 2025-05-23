import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    testimonial: '',
    rating: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      ...formData,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };
    setTestimonials([newTestimonial, ...testimonials]);
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
    <section id="Testimonials" className="py-12 px-4 md:px-16 bg-tertiary">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Guest Experiences
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Share your story and read what our guests say about their stay!
          </p>
        </div>

        {/* Testimonial Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
            Share Your Experience
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-primary text-lg mb-3">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 border border-primary/30 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-primary text-lg mb-3">Your Testimonial</label>
              <textarea
                value={formData.testimonial}
                onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                className="w-full p-4 border border-primary/30 rounded-xl h-40 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-primary text-lg mb-4">Rating</label>
              <div className="flex justify-center gap-3">
                {[...Array(5)].map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setFormData({ ...formData, rating: index + 1 })}
                    className="transition-transform hover:scale-125"
                  >
                    <FaStar
                      className={`text-4xl ${
                        index < formData.rating ? 'text-secondary' : 'text-primary/20'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-secondary text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                Submit Testimonial
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials Grid */}
        <h3 className="text-3xl font-semibold text-primary mb-12 text-center">
          Recent Testimonials
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-2 mb-4 text-secondary">
                {renderStars(testimonial.rating)}
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">
                {testimonial.name}
              </h4>
              <p className="text-sm text-primary/60 mb-4">
                {testimonial.date}
              </p>
              <blockquote className="text-primary/80 italic">
                "{testimonial.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;