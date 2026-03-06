import { motion } from "framer-motion";

const fadeAnimation = (delay) => ({
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeInOut" },
  },
});

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold dark:text-white mt-10">
            Terms & Conditions
          </h1>
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
            By accessing and using this website, you agree to comply with the
            following terms and conditions.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Use of Website
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This platform allows individuals to voluntarily donate to support
            environmental conservation and animal protection initiatives.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Donations
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All donations are voluntary and will be used to support
            sustainability programs, wildlife conservation projects, and
            environmental awareness campaigns.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Intellectual Property
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All content on this website including text, graphics, and images is
            intended for informational purposes and belongs to the project
            developer unless otherwise stated.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-3">
            Changes to Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We reserve the right to modify or update these terms at any time
            without prior notice.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsConditions;