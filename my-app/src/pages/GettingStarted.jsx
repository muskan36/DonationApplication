import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

const GettingStarted = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState(25);
  const [frequency, setFrequency] = useState('monthly');

  const donationOptions = [10, 25, 50, 100, 250, 'Other'];
  const impactExamples = [
    { amount: 10, text: 'Provides food for a rescued animal for one week' },
    { amount: 25, text: 'Plants 5 trees in deforested areas' },
    { amount: 50, text: 'Supports wildlife rescue operations for a day' },
    { amount: 100, text: 'Funds educational materials for a community workshop' },
    { amount: 250, text: 'Helps maintain conservation areas for a month' },
  ];

  const progressSteps = [
    { id: 1, title: 'Choose Amount' },
    { id: 2, title: 'Your Information' },
    { id: 3, title: 'Payment' },
    { id: 4, title: 'Confirmation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl py-10">
            Make a Difference
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Your support helps protect our planet and its precious wildlife
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          variants={fadeAnimation(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-between relative">
            {progressSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeStep >= step.id
                      ? 'bg-green-600 dark:bg-yellow-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300'
                  } font-semibold`}
                >
                  {step.id}
                </div>
                <p
                  className={`mt-2 text-sm font-medium ${
                    activeStep >= step.id
                      ? 'text-green-600 dark:text-yellow-500'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.title}
                </p>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -z-1">
              <div
                className="h-1 bg-green-600 dark:bg-yellow-500 transition-all duration-300"
                style={{ width: `${((activeStep - 1) / (progressSteps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          {/* Step 1: Choose Amount */}
          {activeStep === 1 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Choose Your Donation Type</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`p-4 rounded-lg border-2 ${
                    donationType === 'one-time'
                      ? 'border-green-600 dark:border-yellow-500 bg-green-50 dark:bg-yellow-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                  } text-center`}
                >
                  <span className="block text-lg font-medium text-gray-900 dark:text-white">One-time</span>
                  <span className="block text-sm text-gray-600 dark:text-gray-300">Make a single donation</span>
                </button>
                
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`p-4 rounded-lg border-2 ${
                    donationType === 'monthly'
                      ? 'border-green-600 dark:border-yellow-500 bg-green-50 dark:bg-yellow-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                  } text-center`}
                >
                  <span className="block text-lg font-medium text-gray-900 dark:text-white">Monthly</span>
                  <span className="block text-sm text-gray-600 dark:text-gray-300">Ongoing support</span>
                </button>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Select Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {donationOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setAmount(option === 'Other' ? '' : option)}
                      className={`py-3 px-4 rounded-lg border ${
                        amount === option
                          ? 'border-green-600 dark:border-yellow-500 bg-green-50 dark:bg-yellow-900/20 text-green-600 dark:text-yellow-500'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      } font-medium`}
                    >
                      {option === 'Other' ? 'Other' : `$${option}`}
                    </button>
                  ))}
                </div>
                
                {amount === '' && (
                  <div className="mt-4">
                    <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Enter custom amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">$</span>
                      <input
                        type="number"
                        id="custom-amount"
                        className="pl-8 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter amount"
                        min="1"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>

              {donationType === 'monthly' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Frequency</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['weekly', 'monthly', 'yearly'].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFrequency(freq)}
                        className={`py-3 px-4 rounded-lg border ${
                          frequency === freq
                            ? 'border-green-600 dark:border-yellow-500 bg-green-50 dark:bg-yellow-900/20 text-green-600 dark:text-yellow-500'
                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                        } font-medium capitalize`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact Preview */}
              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Your Impact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {amount ? (
                    impactExamples
                      .filter(item => amount >= item.amount)
                      .slice(-1)[0]?.text || 'Every dollar makes a difference in our conservation efforts'
                  ) : (
                    'Select an amount to see your impact'
                  )}
                </p>
              </div>

              <button
                onClick={() => setActiveStep(2)}
                className="w-full py-3 px-4 bg-green-600 dark:bg-yellow-500 hover:bg-green-700 dark:hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                disabled={!amount}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Your Information */}
          {activeStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="First name"
                  />
                </div>
                
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Email address"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 dark:text-yellow-500 focus:ring-green-500 dark:focus:ring-yellow-500 border-gray-300 dark:border-gray-600 rounded"
                  defaultChecked
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Send me updates about how my donation is making a difference
                </label>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveStep(1)}
                  className="py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setActiveStep(3)}
                  className="py-3 px-6 bg-green-600 dark:bg-yellow-500 hover:bg-green-700 dark:hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment (simplified) */}
          {activeStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Information</h2>
              
              <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Your donation:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {donationType === 'one-time' ? 'One-time' : `Monthly (${frequency})`}: ${amount}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                <p className="text-center text-gray-600 dark:text-gray-400">
                  This is a demonstration page. In a real application, you would integrate with a payment processor like Stripe or PayPal.
                </p>
                
                <div className="flex justify-between pt-8">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="py-3 px-6 bg-green-600 dark:bg-yellow-500 hover:bg-green-700 dark:hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Complete Donation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {activeStep === 4 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You for Your Donation!</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                Your support of ${amount} {donationType === 'monthly' && `every ${frequency}`} will help us continue our important work protecting the environment and animal welfare.
              </p>
              
              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg text-left">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">What happens next?</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>You'll receive a confirmation email with your donation receipt</li>
                  <li>We'll keep you updated on how your donation is making an impact</li>
                  <li>Follow our social media to see our conservation work in action</li>
                </ul>
              </div>
              
              <div className="pt-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Secure Donations</h3>
            <p className="text-gray-600 dark:text-gray-300">Your payment information is protected with industry-standard encryption.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tax Deductible</h3>
            <p className="text-gray-600 dark:text-gray-300">We are a registered 501(c)(3) organization. Donations are tax-deductible.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Questions?</h3>
            <p className="text-gray-600 dark:text-gray-300">Our team is here to help. Contact us at donations@environmentfund.org</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GettingStarted;