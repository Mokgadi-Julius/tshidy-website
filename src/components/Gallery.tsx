'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaExpand } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'childcare', name: 'Childcare & Nannies' },
    { id: 'domestic', name: 'Domestic Work' },
    { id: 'elderly', name: 'Care Giving' },
    { id: 'aupairs', name: 'AU Pairs' },
    { id: 'nightcare', name: 'Night Care' },
    { id: 'garden', name: 'Gardening' }
  ];

  // Real service photos showcasing our quality work
  const galleryImages = [
    // Childcare & Nannies
    {
      id: 1,
      category: 'childcare',
      title: 'Professional Nanny Services',
      description: 'Caring for children with love and attention',
      image: '/Nannies.png',
      alt: 'Professional nanny reading with child'
    },
    {
      id: 2,
      category: 'childcare',
      title: 'Educational Activities',
      description: 'Learning through play and structured activities',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (1).png',
      alt: 'Nanny helping child with homework'
    },
    {
      id: 3,
      category: 'childcare',
      title: 'Baking & Cooking Together',
      description: 'Teaching life skills through fun activities',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (10).png',
      alt: 'Nanny baking with children'
    },
    {
      id: 4,
      category: 'childcare',
      title: 'Bedtime Stories',
      description: 'Creating peaceful bedtime routines',
      image: '/Gemini_Generated_Image_f7s0e5f7s0e5f7s0 (1).png',
      alt: 'Nanny reading bedtime story'
    },
    
    // AU Pairs
    {
      id: 5,
      category: 'aupairs',
      title: 'Cultural Exchange AU Pairs',
      description: 'Teaching languages and sharing cultures',
      image: '/AUPAIRS.png',
      alt: 'AU pair teaching children with educational materials'
    },
    
    // Domestic Work
    {
      id: 6,
      category: 'domestic',
      title: 'House Cleaning Services',
      description: 'Keeping your home spotless and organized',
      image: '/DomesticWork.png',
      alt: 'Professional house cleaning service'
    },
    {
      id: 7,
      category: 'domestic',
      title: 'Laundry & Ironing',
      description: 'Professional care for your clothing and linens',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (5).png',
      alt: 'Professional laundry and ironing service'
    },
    {
      id: 8,
      category: 'domestic',
      title: 'Kitchen Organization',
      description: 'Maintaining clean and organized living spaces',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (2).png',
      alt: 'Clean and organized kitchen'
    },
    {
      id: 9,
      category: 'domestic',
      title: 'Deep Cleaning Services',
      description: 'Thorough cleaning for every corner of your home',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (3).png',
      alt: 'Deep cleaning bathroom service'
    },
    {
      id: 10,
      category: 'domestic',
      title: 'Meal Preparation',
      description: 'Healthy meal preparation for busy families',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (4).png',
      alt: 'Professional meal preparation'
    },
    
    // Care Giving / Elderly Care
    {
      id: 11,
      category: 'elderly',
      title: 'Elderly Care Services',
      description: 'Compassionate care for your loved ones',
      image: '/CareGivers.png',
      alt: 'Caregiver with elderly person'
    },
    {
      id: 12,
      category: 'elderly',
      title: 'Meal Assistance',
      description: 'Helping with meals and nutrition',
      image: '/Gemini_Generated_Image_f7s0e5f7s0e5f7s0 (3).png',
      alt: 'Caregiver helping elderly person with meal'
    },
    {
      id: 13,
      category: 'elderly',
      title: 'Companion Care',
      description: 'Providing companionship and emotional support',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (6).png',
      alt: 'Companion care for elderly'
    },
    {
      id: 14,
      category: 'elderly',
      title: 'Personal Care Assistance',
      description: 'Daily living assistance with dignity and respect',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (7).png',
      alt: 'Personal care assistance'
    },
    {
      id: 15,
      category: 'elderly',
      title: 'Medical Support',
      description: 'Medication reminders and health monitoring',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (8).png',
      alt: 'Medical support for elderly'
    },
    
    // Night Care
    {
      id: 16,
      category: 'nightcare',
      title: 'Night Care Services',
      description: 'Specialized overnight care and monitoring',
      image: '/NIGHTGIVERS.png',
      alt: 'Night care service'
    },
    {
      id: 17,
      category: 'nightcare',
      title: 'Overnight Monitoring',
      description: 'Peace of mind with professional night supervision',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (9).png',
      alt: 'Overnight monitoring service'
    },
    
    // Gardening
    {
      id: 18,
      category: 'garden',
      title: 'Professional Gardening',
      description: 'Beautiful outdoor spaces maintained with care',
      image: '/GARDEN.png',
      alt: 'Professional gardener working'
    },
    {
      id: 19,
      category: 'garden',
      title: 'Garden Maintenance',
      description: 'Regular upkeep of your outdoor spaces',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (11).png',
      alt: 'Garden maintenance service'
    },
    {
      id: 20,
      category: 'garden',
      title: 'Landscape Design',
      description: 'Creating beautiful and functional outdoor areas',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd (12).png',
      alt: 'Landscape design and maintenance'
    },
    
    // Additional Services
    {
      id: 21,
      category: 'domestic',
      title: 'Home Organization',
      description: 'Creating organized and functional living spaces',
      image: '/Gemini_Generated_Image_f7s0e5f7s0e5f7s0 (2).png',
      alt: 'Home organization service'
    },
    {
      id: 22,
      category: 'childcare',
      title: 'Outdoor Activities',
      description: 'Supervised outdoor play and activities',
      image: '/Gemini_Generated_Image_f7s0e5f7s0e5f7s0 (4).png',
      alt: 'Children outdoor activities'
    },
    {
      id: 23,
      category: 'domestic',
      title: 'Window Cleaning',
      description: 'Professional window and glass cleaning',
      image: '/Gemini_Generated_Image_f7s0e5f7s0e5f7s0 (5).png',
      alt: 'Professional window cleaning'
    },
    {
      id: 24,
      category: 'childcare',
      title: 'Creative Learning',
      description: 'Arts, crafts and creative educational activities',
      image: '/Gemini_Generated_Image_m4kdu0m4kdu0m4kd.png',
      alt: 'Creative learning activities'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Take a look at our professional services in action. We take pride in the quality 
            of care and attention we provide to every family.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Expand Button */}
                <button
                  onClick={() => openModal(index)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                >
                  <FaExpand className="w-4 h-4 text-white" />
                </button>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-200 z-10"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <div className="relative h-[70vh]">
                  <Image
                    src={filteredImages[selectedImage].image}
                    alt={filteredImages[selectedImage].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Our Quality Service?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your family&apos;s needs and let us provide the same level of care and professionalism.
          </p>
          <motion.a
            href="https://wa.me/27649872099"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-green-700 transition-colors duration-200"
          >
            Contact Us Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;