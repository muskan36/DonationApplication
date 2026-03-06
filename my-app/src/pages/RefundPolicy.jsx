import { motion } from "framer-motion";

const fadeAnimation = (delay) => ({
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeInOut" },
  },
});

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold dark:text-white mt-10">Refund Policy</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toDateString()}
          </p>
        </motion.div>

        <motion.div
          variants={fadeAnimation(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Donations made to Eco & Animal Protection Initiative are voluntary
            contributions intended to support environmental conservation,
            wildlife protection, and sustainability initiatives.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Donation Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All donations made through our platform are considered voluntary
            contributions and are used to support environmental protection,
            animal welfare, and sustainability awareness programs.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Refund Eligibility
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Donations are generally non-refundable. However, refunds may be
            considered in cases such as duplicate transactions or technical
            errors during payment processing.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Refund Request
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you believe a transaction was made in error, please contact us
            within 7 days of the donation with the transaction details.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Processing Time
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Approved refunds will be processed within 5–10 business days and
            credited to the original payment method.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default RefundPolicy;