'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaStar, FaShieldAlt, FaUsers, FaHeart, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-80"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8"
          >
            <FaStar className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white font-medium">South Africa&apos;s Trusted Domestic Services</span>
            <FaStar className="w-4 h-4 text-yellow-400 ml-2" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8"
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Tshidy
            </span>
            <br />
            <span className="text-white">Domestic &</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nanny Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Professional, reliable, and caring domestic services for modern families. 
            From nannies to gardeners, we provide trusted staff who treat your family like their own.
          </motion.p>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {[
              { icon: FaHeart, text: "Nannies", color: "from-pink-500 to-rose-500" },
              { icon: FaShieldAlt, text: "Domestic", color: "from-blue-500 to-cyan-500" },
              { icon: FaUsers, text: "Caregivers", color: "from-green-500 to-emerald-500" },
              { icon: FaStar, text: "AU Pairs", color: "from-purple-500 to-violet-500" },
              { icon: FaCheckCircle, text: "Night Care", color: "from-indigo-500 to-blue-500" },
              { icon: FaHeart, text: "Gardeners", color: "from-emerald-500 to-green-500" }
            ].map((service, index) => (
              <motion.div
                key={service.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-white font-medium text-xs sm:text-sm">{service.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <motion.a
              href="https://wa.me/27649872099"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center"
            >
              <FaWhatsapp className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              WhatsApp Us Now
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
            
            <motion.a
              href="tel:0649872099"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <FaPhone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Call: 064 987 2099
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4 sm:px-0"
          >
            {[
              { number: "500+", label: "Happy Families", icon: FaHeart, color: "text-pink-400" },
              { number: "5+", label: "Years Experience", icon: FaStar, color: "text-yellow-400" },
              { number: "24/7", label: "Available Support", icon: FaShieldAlt, color: "text-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + (index * 0.2) }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;