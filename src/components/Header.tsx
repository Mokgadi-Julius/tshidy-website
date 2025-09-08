'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-lg shadow-xl fixed w-full top-0 z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="Tshidy Domestic & Nanny Services"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </motion.div>

          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-green-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-green-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              href="tel:0649872099"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <HiPhone className="w-4 h-4 mr-2" />
              Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/27649872099"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              WhatsApp
            </motion.a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 p-2 rounded-lg hover:bg-green-50"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
        >
          <div className="px-4 py-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-green-600 px-4 py-3 text-base font-semibold transition-all duration-200 rounded-xl hover:bg-green-50"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <motion.a
                href="tel:0649872099"
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold"
              >
                <HiPhone className="w-4 h-4 mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/27649872099"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;