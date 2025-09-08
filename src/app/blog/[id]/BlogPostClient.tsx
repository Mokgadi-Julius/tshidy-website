'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock, FaShareAlt, FaArrowLeft, FaWhatsapp, FaTwitter, FaLinkedin, FaTag } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Hiring a Nanny in South Africa: What Every Parent Needs to Know",
    excerpt: "Discover the essential steps, legal requirements, and red flags to watch for when hiring a nanny in South Africa. Our comprehensive guide covers everything from interviews to contracts.",
    content: "Full detailed content would go here...",
    author: "Sarah Johnson",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Childcare",
    image: "/Nannies.png",
    tags: ["nanny", "childcare", "hiring", "legal", "South Africa"],
    featured: true
  },
  {
    id: 2,
    title: "5 Essential Questions to Ask Before Hiring Domestic Help",
    excerpt: "Protect your family and ensure quality service by asking these crucial questions during the hiring process. Learn what separates professional domestic workers from the rest.",
    content: "Full detailed content would go here...",
    author: "Michael Thompson",
    date: "2024-03-12",
    readTime: "6 min read",
    category: "Domestic Services",
    image: "/DomesticWork.png",
    tags: ["domestic", "hiring", "interview", "home security"],
    featured: false
  },
];

interface BlogPostClientProps {
  postId: string;
}

export default function BlogPostClient({ postId }: BlogPostClientProps) {
  const [shareOpen, setShareOpen] = useState(false);
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    notFound();
  }

  const shareUrl = `https://www.tshidydomesticnannyservices.co.za/blog/${post.id}`;

  const handleShare = (platform: string) => {
    const text = `Check out this article: ${post.title}`;
    let url = '';

    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(`${text} ${shareUrl}`)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }

    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/blog"
                className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 font-semibold transition-colors duration-200"
              >
                <FaArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-ZA', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <motion.button
                    onClick={() => setShareOpen(!shareOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <FaShareAlt className="w-4 h-4 mr-2" />
                    Share Article
                  </motion.button>

                  {shareOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-2 flex gap-2 z-10"
                    >
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            >
              <div className="whitespace-pre-line">
                {post.content}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <FaTag className="text-gray-500" />
                <span className="text-gray-700 font-semibold">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Professional Domestic Services?
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Let our experienced team help you find the perfect domestic help for your family
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/27649872099"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 inline-flex items-center justify-center"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </motion.a>
                
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-200 inline-flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}