import { motion } from 'framer-motion';
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

const Card = ({ title, description, index }) => {
  return (
    <motion.div
      variants={fadeAnimation(index * 0.1)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-green-600 dark:border-yellow-500"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Vision = () => {
  const visionDetails = [
    {
      title: "Environmental Protection",
      description: "We are committed to preserving natural habitats, reducing pollution, and promoting sustainable practices. Our team works on ground-level conservation projects and partners with local communities to protect ecosystems."
    },
    {
      title: "Wildlife Conservation",
      description: "From endangered species to local wildlife, we implement protection programs, anti-poaching initiatives, and habitat restoration to ensure biodiversity thrives for future generations."
    },
    {
      title: "Stray Animal Care",
      description: "Our network of shelters and volunteers provides food, medical care, and rehabilitation for stray and abandoned animals. We believe every creature deserves compassion and safety."
    },
    {
      title: "Adoption Programs",
      description: "Through our adoption initiatives, we match rescued animals with loving homes, ensuring they receive the care and attention they need while reducing the stray population humanely."
    },
    {
      title: "Community Education",
      description: "We conduct workshops and awareness campaigns to teach sustainable living and animal welfare practices, empowering communities to become stewards of their environment."
    },
    {
      title: "Global Partnerships",
      description: "By collaborating with international organizations, we amplify our impact, sharing resources and knowledge to address environmental and animal welfare challenges worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl px-3 py-5">
            Our Vision 
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Detailed look at our initiatives and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionDetails.map((item, index) => (
            <Card 
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        {/*<div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors">
            Back to Home
          </Link>
        </div>*/}
      </div>
    </div>
  );
};

export default Vision;