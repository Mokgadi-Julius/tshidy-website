'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Working Mother',
      content: 'Tshidy Services has been a lifesaver for our family! Our nanny is incredibly caring and professional. My children love her, and I have complete peace of mind knowing they are in safe hands.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Williams',
      role: 'Business Executive',
      content: 'The domestic worker we hired through Tshidy is exceptional. Our home is always spotless, and she goes above and beyond with meal preparation. Highly recommended!',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Lisa Chen',
      role: 'Family Caregiver',
      content: 'Finding the right caregiver for my elderly mother was crucial. Tshidy connected us with an amazing caregiver who treats my mother with such kindness and respect.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'David Thompson',
      role: 'Homeowner',
      content: 'Our gardener from Tshidy has transformed our outdoor space into something beautiful. Professional, reliable, and passionate about their work. We couldn\'t be happier!',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emma Davis',
      role: 'New Parent',
      content: 'As first-time parents, we were nervous about hiring help. The night caregiver from Tshidy has been amazing - professional, gentle, and allowed us to get much-needed rest.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'James Wilson',
      role: 'Busy Professional',
      content: 'The au pair program exceeded our expectations. Our children are learning a new language while receiving excellent care. It\'s been a wonderful cultural exchange experience.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what families across the community are saying about our services.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl mx-auto max-w-4xl mb-8"
          >
            <div className="text-center">
              {/* Quote Icon */}
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
                <FaQuoteLeft className="w-8 h-8 text-green-600" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid - Show 3 at once on larger screens */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={`grid-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.content.substring(0, 100)}...&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Families?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same level of care and professionalism that our clients rave about.
          </p>
          <motion.a
            href="https://wa.me/27649872099"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-green-700 transition-colors duration-200"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;