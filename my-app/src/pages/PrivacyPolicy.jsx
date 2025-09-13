import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

const PrivacyPolicy = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in system preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={fadeAnimation(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At Environment and Animal Protection Fund, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our website and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, make a donation, sign up for our newsletter, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment information when you make donations</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Process your donations and provide receipts</li>
              <li>Send you updates about our projects and impact</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Information Sharing</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We do not sell, trade, or rent your personal information to others. We may share information with:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Law enforcement or other third parties when required by law</li>
              <li>Other organizations in connection with mergers, acquisitions, or asset sales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify or update inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Restrict or object to the processing of your personal data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us so we can remove the information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
              <p className="text-gray-800 dark:text-gray-200 font-medium">Environment and Animal Protection Fund</p>
              <p className="text-gray-600 dark:text-gray-300">123 Conservation Way, Eco City, EC 12345</p>
              <p className="text-gray-600 dark:text-gray-300">Email: privacy@environmentfund.org</p>
              <p className="text-gray-600 dark:text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;