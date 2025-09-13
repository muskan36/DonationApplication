/*import { animate, motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import React from 'react'
const fadeAnimation = (delay) => {
    return{
        initial: {
            opacity : 0,
            y:100,
        },
        animate :{
            opacity:1,
            y:0,
            transition:{
                duration:0.6,
                delay:delay,
                ease:"easeInOut",
            },
        },
    }
}
const OurVision = () => {
  return (
    <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <motion.div 
        variants={fadeAnimation(0.2)}
        initial="initial"
        whileInView="animate"
        className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800'>
            <h1 className='text-xl font-semibold'>Our Vision</h1>
            <p>As the Environment and Animal Protection Fund, our vision is to create a world where nature thrives, wildlife is safe, and every animal-whether wild or stray-is treated with care and compassion. We believe that protecting the environment and the creatures that live in it is not just a responsibility, but a shared duty for a better future.</p>

            <p>We work to preserve forests, clean up polluted areas, and protect natural habitats that are home to countless species. At the same time, we focus on the animals around us-especially stray dogs, cats, and other abandoned pets—who need love, shelter, and care. Through our adoption programs, rescue missions, and funding support, we give these animals a second chance at life.</p>

            <p>With the help of donations and community support, we aim to build safe spaces, support medical treatment, and raise awareness about the importance of living in harmony with nature. Our goal is simple: to protect, to rescue, and to inspire kindness—toward the Earth and every life it holds.</p>

            <p>Together, we can make a difference.</p>
          <Link href="/Vision" className='inline-block hover:text-primary border-b hover:border-primary'>
            Learn More
         </Link>
        </motion.div>
       
        <motion.div
        variants={fadeAnimation(0.4)}
        initial="initial"
        whileInView="animate"
        className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800'>
            <h1 className='text-xl font-semibold'>Our Mission</h1>
            <p>Our mission at the Environment and Animal Protection Fund is to take meaningful action to protect the Earth, its wildlife, and animals in need. We are committed to preserving natural ecosystems, promoting sustainable living, and reducing harm to our environment through clean-up efforts, conservation projects, and education.</p>

            <p> We also work tirelessly to improve the lives of stray and abandoned animals by providing shelter, food, medical care, and opportunities for adoption. Whether it's rescuing a wounded dog, finding a home for a stray cat, or protecting an endangered species in the wild, our mission is grounded in compassion and responsibility.</p>

            <p> Through donations, volunteer efforts, and partnerships, we strive to create a more balanced world—where humans live in harmony with nature and treat all living beings with respect. Every act of care brings us closer to a planet that is safe, healthy, and kind—for today and for generations to come.</p>


             <Link href="/Mission" className='inline-block hover:text-primary border-b hover:border-primary'>
  Learn More
</Link>
        </motion.div>
        
        <div></div>
        </div>
    </div>
    
  )
}

export default OurVision
*/


import { animate, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import React from 'react';

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

const OurVision = () => {
  return (
    <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800'
        >
          <h1 className='text-xl font-semibold'>Our Vision</h1>
          <p>As the Environment and Animal Protection Fund, our vision is to create a world where nature thrives, wildlife is safe, and every animal—whether wild or stray—is treated with care and compassion. We believe that protecting the environment and the creatures that live in it is not just a responsibility, but a shared duty for a better future.</p>
          
          <p>We work to preserve forests, clean up polluted areas, and protect natural habitats that are home to countless species. At the same time, we focus on the animals around us—especially stray dogs, cats, and other abandoned pets—who need love, shelter, and care. Through our adoption programs, rescue missions, and funding support, we give these animals a second chance at life.</p>
          
          <p>With the help of donations and community support, we aim to build safe spaces, support medical treatment, and raise awareness about the importance of living in harmony with nature. Our goal is simple: to protect, to rescue, and to inspire kindness—toward the Earth and every life it holds.</p>
          
          <p>Together, we can make a difference.</p>
          
          
          {/*<a href="/Vision" className='inline-block hover:text-primary border-b hover:border-primary'>
            Learn More
          </a>*/}

          <Link to="/vision" className='inline-block hover:text-primary border-b hover:border-primary'>
          Learn More
          </Link>
        </motion.div>

        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800'
        >
          <h1 className='text-xl font-semibold'>Our Mission</h1>
          <p>Our mission at the Environment and Animal Protection Fund is to take meaningful action to protect the Earth, its wildlife, and animals in need. We are committed to preserving natural ecosystems, promoting sustainable living, and reducing harm to our environment through clean-up efforts, conservation projects, and education.</p>
          
          <p>We also work tirelessly to improve the lives of stray and abandoned animals by providing shelter, food, medical care, and opportunities for adoption. Whether it's rescuing a wounded dog, finding a home for a stray cat, or protecting an endangered species in the wild, our mission is grounded in compassion and responsibility.</p>
          
          <p>Through donations, volunteer efforts, and partnerships, we strive to create a more balanced world—where humans live in harmony with nature and treat all living beings with respect. Every act of care brings us closer to a planet that is safe, healthy, and kind—for today and for generations to come.</p>
          
          
          {/*<a href="/Mission" className='inline-block hover:text-primary border-b hover:border-primary'>
            Learn More
          </a>**/}

          <Link to="/mission" className='inline-block hover:text-primary border-b hover:border-primary'>
          Learn More
          </Link>

        </motion.div>
        
        
      </div>
    </div>
  );
};

export default OurVision;

