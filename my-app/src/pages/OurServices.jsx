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

const ServiceCard = ({ title, description, index }) => {
  return (
    <motion.div
      variants={fadeAnimation(index * 0.1)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-green-600 dark:border-purple-500"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const serviceDetails = [
    {
      title: "Environmental Consulting",
      description: "Our expert team provides comprehensive environmental assessments, sustainability planning, and regulatory compliance guidance to help organizations minimize their ecological footprint."
    },
    {
      title: "Wildlife Rescue & Rehabilitation",
      description: "We operate 24/7 rescue services for injured or distressed wildlife, with fully-equipped rehabilitation centers and trained veterinarians to provide expert care and eventual release back to natural habitats."
    },
    {
      title: "Stray Animal Management",
      description: "Our humane stray animal programs include sterilization drives, vaccination campaigns, and community feeding initiatives to manage populations ethically and improve animal welfare."
    },
    {
      title: "Adoption Services",
      description: "We facilitate the matching process between rescued animals and loving families, with thorough screening, counseling, and post-adoption support to ensure successful forever homes."
    },
    {
      title: "Educational Workshops",
      description: "Our interactive workshops for schools, businesses, and communities teach practical environmental conservation techniques and responsible animal care practices."
    },
    {
      title: "Habitat Restoration",
      description: "We design and implement ecosystem restoration projects, including reforestation, wetland rehabilitation, and coral reef regeneration to revive damaged natural environments."
    },
    {
      title: "Corporate Sustainability Programs",
      description: "We partner with businesses to develop customized sustainability strategies, green certifications, and employee engagement programs that align profitability with planetary health."
    },
    {
      title: "Emergency Response",
      description: "Our rapid response teams are trained and equipped to handle environmental disasters and animal emergencies, providing critical intervention during crises."
    },
    {
      title: "Research & Conservation",
      description: "We conduct scientific research on endangered species and ecosystems, using data-driven approaches to develop effective conservation strategies and policy recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 py-14"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl px-3 py-8">
            Our Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Comprehensive solutions for environmental and animal welfare challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((item, index) => (
            <ServiceCard 
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Services;