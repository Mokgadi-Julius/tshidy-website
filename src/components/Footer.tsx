'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaClock, FaStar } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Nannies',
    'Domestic Work',
    'Care Givers', 
    'AU Pairs',
    'Night Givers',
    'Gardeners'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Tshidy Domestic & Nanny Services"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional domestic and childcare services you can trust. We provide caring, 
              reliable staff for all your family&apos;s needs with over 5 years of experience.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-xs text-gray-400">Happy Families</div>
              </div>
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
            </div>

            <div className="flex items-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 mr-1" />
              ))}
              <span className="text-gray-300 ml-2 text-sm">5.0 Rating</span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="tel:0649872099"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaPhone className="w-5 h-5 mr-3 text-blue-400" />
                064 987 2099
              </a>
              
              <a
                href="https://wa.me/27649872099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5 mr-3 text-green-400" />
                WhatsApp: 064 987 2099
              </a>
              
              <a
                href="mailto:info@tshidydomesticnannyservices.co.za"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaEnvelope className="w-5 h-5 mr-3 text-red-400" />
                info@tshidydomesticnannyservices.co.za
              </a>
              
              <div className="flex items-center text-gray-300">
                <FaClock className="w-5 h-5 mr-3 text-purple-400" />
                Available 24/7
              </div>

              <div className="flex items-start text-gray-300">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-yellow-400 mt-1" />
                <span>Serving families across South Africa</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="mt-8 space-y-3">
              <motion.a
                href="https://wa.me/27649872099"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </motion.a>
              
              <motion.a
                href="tel:0649872099"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full border-2 border-blue-600 text-blue-400 py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Tshidy Domestic & Nanny Services. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional domestic and childcare services you can trust.
              </p>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-400 text-sm mr-2">Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 mx-1" />
              <span className="text-gray-400 text-sm ml-2">for families</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Vetted Staff
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Insured Services
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                24/7 Support
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                5-Star Rated
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;