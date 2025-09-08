'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    const message = "Hi! I'm interested in your domestic and nanny services. Could you please provide me with more information?";
    const whatsappUrl = `https://wa.me/27649872099?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
          <motion.button
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 group"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
            
            {/* WhatsApp Icon */}
            <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
            
            {/* Tooltip - Hidden on mobile to prevent overflow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 0 : 20 
              }}
              className="hidden sm:block absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
            >
              Chat with us on WhatsApp
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}

    </>
  );
};

export default WhatsAppButton;