'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaCommentDots } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissionType, setSubmissionType] = useState<'whatsapp' | 'form'>('whatsapp');

  const services = [
    'Nannies',
    'Domestic Work', 
    'Care Givers',
    'AU Pairs',
    'Night Givers',
    'Gardeners'
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      detail: '064 987 2099',
      action: 'tel:0649872099',
      color: 'bg-blue-500'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      detail: '064 987 2099',
      action: 'https://wa.me/27649872099',
      color: 'bg-green-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      detail: 'info@tshidydomesticnannyservices.co.za',
      action: 'mailto:info@tshidydomesticnannyservices.co.za',
      color: 'bg-red-500'
    },
    {
      icon: FaClock,
      title: 'Available',
      detail: '24/7 Support',
      action: null,
      color: 'bg-purple-500'
    }
  ];

  const handleSubmit = async (e: React.FormEvent, type: 'whatsapp' | 'form' = submissionType) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmissionType(type);
    
    try {
      // Prepare data for Google Apps Script
      const submitData = {
        formType: "mppreadymix",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: type === 'whatsapp' ? "Website Contact Form - WhatsApp" : "Website Contact Form - Direct"
      };

      // Submit to Google Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbzdEjBW8cpfs8UZmWk195lcI_NX2AJSzc7EVe6T3XaxBN5VH2aXqm-Xe5tr3KVuCXE/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setSubmitStatus('success');
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Open WhatsApp only for WhatsApp submission type
      if (type === 'whatsapp') {
        const whatsappMessage = `Hi! I just submitted a contact form on your website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/27649872099?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Get In <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find the perfect care solution for your family? Contact us today and let&apos;s discuss 
            how we can help make your life easier.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={(e) => handleSubmit(e, 'whatsapp')} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <FaUser className="inline w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <FaEnvelope className="inline w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <FaPhone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <FaCommentDots className="inline w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your specific needs..."
                />
              </div>

              <div className="space-y-3">
                <motion.button
                  type="submit"
                  disabled={isSubmitting && submissionType === 'whatsapp'}
                  whileHover={{ scale: (isSubmitting && submissionType === 'whatsapp') ? 1 : 1.02 }}
                  whileTap={{ scale: (isSubmitting && submissionType === 'whatsapp') ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg flex items-center justify-center ${
                    (isSubmitting && submissionType === 'whatsapp')
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : (submitStatus === 'success' && submissionType === 'whatsapp')
                      ? 'bg-green-600 hover:bg-green-700'
                      : (submitStatus === 'error' && submissionType === 'whatsapp')
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  {(isSubmitting && submissionType === 'whatsapp') ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (submitStatus === 'success' && submissionType === 'whatsapp') ? (
                    <>
                      <FaWhatsapp className="w-5 h-5 mr-2" />
                      Sent! Opening WhatsApp...
                    </>
                  ) : (submitStatus === 'error' && submissionType === 'whatsapp') ? (
                    <>
                      <FaWhatsapp className="w-5 h-5 mr-2" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={(e) => handleSubmit(e as React.FormEvent, 'form')}
                  disabled={isSubmitting && submissionType === 'form'}
                  whileHover={{ scale: (isSubmitting && submissionType === 'form') ? 1 : 1.02 }}
                  whileTap={{ scale: (isSubmitting && submissionType === 'form') ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg flex items-center justify-center ${
                    (isSubmitting && submissionType === 'form')
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : (submitStatus === 'success' && submissionType === 'form')
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : (submitStatus === 'error' && submissionType === 'form')
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {(isSubmitting && submissionType === 'form') ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (submitStatus === 'success' && submissionType === 'form') ? (
                    <>
                      <FaEnvelope className="w-5 h-5 mr-2" />
                      Form Submitted!
                    </>
                  ) : (submitStatus === 'error' && submissionType === 'form') ? (
                    <>
                      <FaEnvelope className="w-5 h-5 mr-2" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="w-5 h-5 mr-2" />
                      Submit Form
                    </>
                  )}
                </motion.button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 font-medium">
                    ✅ {submissionType === 'whatsapp' 
                      ? 'Message sent successfully! WhatsApp is opening for immediate contact.' 
                      : 'Form submitted successfully! We\'ll get back to you soon.'}
                  </p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-800 font-medium">
                    ❌ Please fill in all required fields (Name and Email).
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`${info.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-200`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-600">{info.detail}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className={`${info.color} p-4 rounded-2xl`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{info.title}</h4>
                        <p className="text-gray-600">{info.detail}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/27649872099"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full bg-green-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  WhatsApp: 064 987 2099
                </motion.a>
                <motion.a
                  href="tel:0649872099"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  <FaPhone className="w-5 h-5 mr-3" />
                  Call: 064 987 2099
                </motion.a>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Service Areas</h3>
              </div>
              <p className="opacity-90 mb-4">
                We proudly serve families throughout South Africa with our professional domestic and childcare services.
              </p>
              <div className="flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Available 24/7 for urgent needs</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;