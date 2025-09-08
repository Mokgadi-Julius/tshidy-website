'use client';

import { motion } from 'framer-motion';
import { FaBaby, FaHome, FaUserNurse, FaSeedling, FaHeart, FaArrowRight, FaStar, FaWhatsapp } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      icon: FaBaby,
      title: 'Nannies',
      description: 'Professional and caring nannies who provide exceptional childcare services, ensuring your children are safe, happy, and well-cared for.',
      features: ['Qualified childcare providers', 'Educational activities', 'Meal preparation', 'Safety focused'],
      color: 'from-pink-500 via-rose-500 to-pink-600',
      bgColor: 'from-pink-50 to-rose-100',
      iconBg: 'bg-gradient-to-r from-pink-500 to-rose-500',
      image: '/Nannies.png',
      rating: 4.9
    },
    {
      icon: FaHome,
      title: 'Domestic Work',
      description: 'Comprehensive domestic services including cleaning, laundry, cooking, and household management to keep your home pristine.',
      features: ['House cleaning', 'Laundry services', 'Meal preparation', 'Home organization'],
      color: 'from-blue-500 via-cyan-500 to-blue-600',
      bgColor: 'from-blue-50 to-cyan-100',
      iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      image: '/DomesticWork.png',
      rating: 4.8
    },
    {
      icon: FaUserNurse,
      title: 'Care Givers',
      description: 'Compassionate caregivers for elderly family members, providing personal care, companionship, and assistance with daily activities.',
      features: ['Personal care assistance', 'Companionship', 'Medication reminders', 'Mobility support'],
      color: 'from-green-500 via-emerald-500 to-green-600',
      bgColor: 'from-green-50 to-emerald-100',
      iconBg: 'bg-gradient-to-r from-green-500 to-emerald-500',
      image: '/CareGivers.png',
      rating: 4.9
    },
    {
      icon: MdNightlight,
      title: 'Night Givers',
      description: 'Specialized night care services for babies, elderly, or family members who need overnight assistance and monitoring.',
      features: ['Overnight care', 'Sleep support', 'Emergency response', 'Peace of mind'],
      color: 'from-indigo-500 via-blue-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-blue-100',
      iconBg: 'bg-gradient-to-r from-indigo-500 to-blue-500',
      image: '/NIGHTGIVERS.png',
      rating: 4.9
    },
    {
      icon: FaSeedling,
      title: 'Gardeners',
      description: 'Professional gardening services to maintain beautiful outdoor spaces, including lawn care, planting, and garden design.',
      features: ['Lawn maintenance', 'Garden design', 'Plant care', 'Seasonal cleanup'],
      color: 'from-emerald-500 via-green-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-green-100',
      iconBg: 'bg-gradient-to-r from-emerald-500 to-green-500',
      image: '/GARDEN.png',
      rating: 4.8
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-6"
          >
            <FaHeart className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-gray-700 font-semibold">Our Services</span>
            <FaHeart className="w-5 h-5 text-blue-600 ml-2" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
              Professional Care
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              For Every Need
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive domestic and childcare services tailored to meet your family&apos;s unique needs.
            All our staff are carefully vetted, trained, and committed to excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <FaStar className="w-3 h-3 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-800">{service.rating}</span>
                </div>

                {/* Service Category Icon */}
                <div className={`absolute top-4 right-4 z-20 ${service.iconBg} w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="relative p-4 sm:p-6 h-full bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 transition-all duration-500">
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-xs font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <motion.a
                    href="https://wa.me/27649872099"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:flex-1 group/btn inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-sm"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    WhatsApp
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full sm:flex-1 group/btn inline-flex items-center justify-center bg-gradient-to-r ${service.color} text-white px-4 py-2.5 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
                  >
                    Book Now
                    <FaArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 lg:p-16 text-white overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Tshidy?</span>
              </h3>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                We understand that your family is your most precious asset. That&apos;s why we go above and beyond 
                to provide only the highest quality domestic and childcare services.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
                <FaHeart className="w-5 h-5 ml-3" />
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: FaHeart, number: '500+', label: 'Happy Families', color: 'text-pink-400' },
                { icon: FaSeedling, number: '24/7', label: 'Available', color: 'text-green-400' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;