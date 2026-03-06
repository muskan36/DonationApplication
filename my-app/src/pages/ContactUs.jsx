import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">

      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold dark:text-white mt-10">Contact Us</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Reach out for any questions or suggestions.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10"
        >
          <div className="space-y-6 text-gray-700 dark:text-gray-300">

            <div>
              <h2 className="text-xl font-semibold dark:text-white">
                Eco & Animal Protection Initiative
              </h2>
              <p>Gorakhpur, Uttar Pradesh, 273015</p>
            </div>

            <div>
              <p>Email: ritikayadav1101@gmail.com</p>
              <p>Phone: +91 9305813469</p>
            </div>

            <div>
              <p>Developer: Ritika Yadav</p>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-5 rounded-lg text-sm">
              This website is a demonstration project created for educational
              and portfolio purposes to showcase a donation platform for
              environmental and animal protection initiatives.
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default ContactUs;