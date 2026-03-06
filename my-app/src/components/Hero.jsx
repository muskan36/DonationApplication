import React from 'react'
import hero from "../../src/assets/hero.jpg";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const bgStyle = {
  backgroundImage: `url(${hero})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {

  const navigate = useNavigate();

  const [data, setData] = React.useState({
    name: "",
    email: "",
    amount: 1,
  });

  const handleclick = (e) => {
    const name = e.target.name;
    setData((previousData) => {
      return {
        ...previousData,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // redirect to donation page with data
    navigate("/donate", { state: data });
  };

  return (
    <div style={bgStyle}>
      <div className='min-h-[650px] md:min-h-[750px] 
      bg-gradient-to-r from-black/80 to-primary/60 
      pt-20 pb-10 md:pt-48'>

        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white py-10px'>

            {/* hero text section */}
            <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>

              <motion.h1
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="animate"
                className='text-5xl lg:text-6xl font-bold py-10px'
              >
                Join Us in Protecting Nature and Animal Life
              </motion.h1>

              <motion.p
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
              >
                Together, we restore habitats, protect endangered species, and support animal welfare—every donation brings us closer to a healthier planet.
              </motion.p>

              <div className='space-x-4'>

                <Link to="/started">
                  <motion.button
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className='btn-primary'
                  >
                    Get Started
                  </motion.button>
                </Link>

                <Link to="/login">
                  <motion.button
                    variants={FadeUp(0.8)}
                    initial="initial"
                    animate="animate"
                    className='btn-outline'
                  >
                    Login
                  </motion.button>
                </Link>

              </div>
            </div>

            {/* Donation Form */}
            <motion.div
              variants={FadeUp(0.2)}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'
            >

              <h1 className='text-lg text-center font-semibold'>
                Quick Donation Form
              </h1>

              <div className='flex items-center justify-center gap-8 py-4'>

                <button
                  onClick={() => setData({ ...data, amount: 1 })}
                  className="button-square"
                >
                  $01
                </button>

                <button
                  onClick={() => setData({ ...data, amount: 5 })}
                  className="button-square"
                >
                  $05
                </button>

                <button
                  onClick={() => setData({ ...data, amount: 10 })}
                  className="button-square"
                >
                  $10
                </button>

                <button
                  onClick={() => setData({ ...data, amount: 99 })}
                  className="button-square"
                >
                  $99
                </button>

              </div>

              <div className='space-y-6'>

                <input
                  type='number'
                  name="amount"
                  onChange={handleclick}
                  placeholder='Amount'
                  value={data.amount}
                  min={1}
                  max={100}
                  className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                />

                <input
                  type="text"
                  name="name"
                  onChange={handleclick}
                  placeholder="Name"
                  className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                />

                <input
                  type="email"
                  name="email"
                  onChange={handleclick}
                  placeholder="Email"
                  className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                />

                <button
                  className='btn-primary w-full rounded-full'
                  onClick={handleSubmit}
                >
                  Donate Now
                </button>

              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero