import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const AboutUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in system preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const stats = [
    { value: '50,000+', label: 'Trees Planted' },
    { value: '15,000+', label: 'Animals Rescued' },
    { value: '200+', label: 'Projects Completed' },
    { value: '40+', label: 'Countries Reached' }
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Founder & Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Michael Chen', role: 'Head of Conservation', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Elena Rodriguez', role: 'Wildlife Veterinarian', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'David Kim', role: 'Community Outreach', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 py-10"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Mission
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Dedicated to protecting our planet and its inhabitants through action, education, and compassion.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            variants={fadeAnimation(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Founded in 2010, the Environment and Animal Protection Fund began as a small group of passionate individuals 
              determined to make a difference. Today, we've grown into a global movement with thousands of volunteers 
              and supporters working together to create a sustainable future.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our journey started with a single forest conservation project and a modest animal shelter. 
              Through dedication and the unwavering support of our community, we've expanded our reach 
              to over 40 countries, impacting millions of lives—both human and animal.
            </p>
            <div className="flex space-x-4 pt-4">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-medium rounded-md transition-colors">
                Join Our Mission
              </button>
              <button className="px-6 py-3 border border-green-600 dark:border-yellow-500 text-green-600 dark:text-yellow-500 hover:bg-green-50 dark:hover:bg-gray-700 font-medium rounded-md transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeAnimation(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img 
                src={about1} 
                alt="Forest conservation efforts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-8">
              <img 
                src={about2} 
                alt="Animal rescue operation" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-green-600 dark:text-yellow-500">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">We prioritize long-term solutions that create lasting impact for generations to come.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Compassion</h3>
              <p className="text-gray-600 dark:text-gray-300">Every life has value. We approach all beings with empathy, respect, and kindness.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">We believe in the power of collective action and inclusive partnerships.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;