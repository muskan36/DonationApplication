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
            We'd love to hear from you. Reach out for any questions, suggestions, or feedback.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="space-y-6 text-gray-700 dark:text-gray-300">

            {/* Organization Info */}
            <div>
              <h2 className="text-xl font-semibold dark:text-white">
                Eco & Animal Protection Initiative
              </h2>
              <p className="mt-1">📍 Gorakhpur, Uttar Pradesh, India - 273015</p>
            </div>

            {/* Contact Details */}
            <div>
              <p>📧 Email: ritikayadav1101@gmail.com</p>
              <p>📞 Phone: +91 9305813469</p>
            </div>

            {/* Support Hours */}
            <div>
              <p>🕒 Support Hours:</p>
              <p>Monday – Friday</p>
              <p>10:00 AM – 6:00 PM (IST)</p>
            </div>

            {/* Professional Links */}
            <div>
              <p>🔗 LinkedIn: https://www.linkedin.com/in/ritikayadav-933052258</p>
              <p>💻 GitHub: https://github.com/muskan36</p>
            </div>

            {/* Developer */}
            <div>
              <p className="font-medium">Developer: Ritika Yadav</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We usually respond to queries within 24–48 hours.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-green-50 dark:bg-gray-700 p-5 rounded-lg text-sm">
              This website is a demonstration project built for educational and 
              portfolio purposes. It simulates a donation platform supporting 
              environmental and animal protection initiatives. No real donations 
              are collected through this platform.
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default ContactUs;