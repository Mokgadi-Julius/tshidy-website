'use client';

import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaShieldAlt, FaHeart, FaStar, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const stats = [
    { icon: FaUsers, number: '500+', label: 'Happy Families', color: 'from-blue-500 to-cyan-500' },
    { icon: FaAward, number: '5+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
    { icon: FaStar, number: '5.0', label: 'Average Rating', color: 'from-yellow-500 to-orange-500' },
    { icon: FaClock, number: '24/7', label: 'Support Available', color: 'from-purple-500 to-violet-500' }
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Compassionate Care',
      description: 'We treat every family member with love, respect, and genuine care, ensuring comfort and happiness.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Trust & Safety',
      description: 'All our staff undergo thorough background checks and training to ensure your family\'s safety.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaAward,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of service delivery and continuous professional development.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-6"
            >
              <FaHeart className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-700 font-semibold">About Our Company</span>
              <FaHeart className="w-5 h-5 text-blue-600 ml-2" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
            >
              <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
                Caring for Your Family
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                Like Our Own
              </span>
            </motion.h2>
          </motion.div>
        </div>

        {/* Team Photo and Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100 mb-16 sm:mb-20 relative overflow-hidden mx-4 sm:mx-0"
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/ABOUT.png"
                  alt="Tshidy Domestic and Nanny Services Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Photo Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Team Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">Our Professional Team</h4>
                      <p className="text-sm text-gray-600">20+ Experienced Staff Members</p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                        <FaUsers className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs opacity-90">Years</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Meet Our Dedicated Team
                </span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg">
                  At Tshidy Domestic & Nanny Services, we understand that your family is your most precious asset. 
                  With over 5 years of experience in providing exceptional domestic and childcare services, we have 
                  built our reputation on trust, reliability, and genuine care for the families we serve.
                </p>

                <p>
                  Our team consists of carefully vetted professionals who share our commitment to excellence. 
                  Whether you need a caring nanny for your children, reliable domestic help, compassionate caregivers 
                  for elderly family members, or skilled gardeners to maintain your outdoor spaces, we are here to help.
                </p>

                <p>
                  Every member of our team undergoes thorough background checks, professional training, and continuous 
                  development to ensure we maintain the highest standards of service. We treat your family like our own, 
                  bringing dedication, compassion, and professionalism to every interaction.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <motion.a
                  href="https://wa.me/27649872099"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaPhone className="w-4 h-4 mr-2" />
                  Contact Us Today
                </motion.a>
                
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  View Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-all duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Contact us today to discuss your family&apos;s specific needs. We&apos;re here to provide 
                personalized care solutions that give you peace of mind.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.a
                href="tel:0649872099"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-white/20 p-4 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">Call Us</div>
                  <div className="text-blue-100">064 987 2099</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@tshidydomesticnannyservices.co.za"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-white/20 p-4 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">Email Us</div>
                  <div className="text-green-100">info@tshidydomesticnannyservices.co.za</div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">Our </span>
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Values</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and ensure we provide the best possible service to your family.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-all duration-300`}>
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;