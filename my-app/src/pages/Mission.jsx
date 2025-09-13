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

const MissionCard = ({ title, description, icon, index }) => {
  const icons = [
    '🌱', '🐾', '💧', '🏥', '👥', '🌍'
  ];
  
  return (
    <motion.div
      variants={fadeAnimation(index * 0.1)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{icons[index % icons.length]}</div>
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Mission = () => {
  const missionDetails = [
    {
      title: "Ecosystem Preservation",
      description: "Implementing large-scale conservation projects to protect forests, wetlands, and marine environments from degradation and destruction."
    },
    {
      title: "Animal Rescue Operations",
      description: "24/7 emergency response teams for rescuing injured, abused, or endangered animals with immediate medical care and rehabilitation."
    },
    {
      title: "Clean Water Initiatives",
      description: "Restoring polluted water bodies and ensuring access to clean water for both wildlife and human communities that depend on these ecosystems."
    },
    {
      title: "Veterinary Care Network",
      description: "Establishing clinics and mobile units to provide free or low-cost medical services for stray and wild animals in need."
    },
    {
      title: "Community Engagement",
      description: "Training local volunteers and creating green jobs in conservation to build sustainable, long-term protection for natural resources."
    },
    {
      title: "Global Impact",
      description: "Collaborating across borders to address climate change, wildlife trafficking, and other transnational environmental challenges."
    },
    {
      title: "Education Programs",
      description: "Developing school curricula and public awareness campaigns about environmental stewardship and animal welfare."
    },
    {
      title: "Sustainable Solutions",
      description: "Promoting green technologies and practices that reduce human impact on the environment while improving quality of life."
    },
    {
      title: "Policy Advocacy",
      description: "Working with governments to strengthen environmental laws and ensure proper enforcement of animal protection regulations."
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
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl py-5">
            Our Mission in Action
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            How we're making a difference every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionDetails.map((item, index) => (
            <MissionCard 
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          {/*<Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors">
            Back to Home
          </Link>*/}
          <p className="text-gray-500 dark:text-gray-400">
            Want to join our mission? <Link href="/get-involved" className="text-yellow-600 dark:text-yellow-400 hover:underline">Get involved</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;