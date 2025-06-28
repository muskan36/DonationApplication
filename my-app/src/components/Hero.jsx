import React from 'react'
import hero from "../../src/assets/hero.jpg";
import {motion} from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    width:'100%',
}
const FadeUp =(delay)=>{
    return{
         initial :{
            opacity:0,
            y:100,
         },
         animate:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay,
                ease:"easeInOut",
            },
         },
    };
};

const Hero = () => {
    const [data, setData]= React.useState({
        name:"",
        email:"",
        amount:0,
 } );

const handleclick = (e)=>{
    const name = e.target.name;
    setData((previousData) =>{
        return{
            ...previousData,
            [name]: e.target.value,
        };
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
};

  return (
    <div style={bgStyle}>
        <div className='min-h-[650px] md:min-h-[750px] 
        bg-gradient-to-r from-black/80 to-primary/60 
        pt-3 pb-10 md:pt-48'>
            <div className='container'>
               <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white'>
                  {/* hero text section */}
                  <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>
                    <motion.h1 
                     variants={FadeUp(0.2)}
                     initial="initial"
                     animate="animate"
                    className='text-5xl lg:text-6xl font-bold '> Join Us in Changing Lives</motion.h1>
                    <motion.p
                    variants={FadeUp(0.4)}
                    initial="initial"
                    animate="animate"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                    </motion.p>
                    <div className='space-x-4'>
                    <button 
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className='btn-primary'> Get Started </button> 
                    <button 
                    variants={FadeUp(0.8)}
                    initial="initial"
                    animate="animate"
                    className='btn-outline'> Login </button> 
                    </div> 
                  </div>
                  {/* Form Section */}
                  <motion.div 
                  variants={FadeUp(0.2)}
                  initial={{opacity:0, x:100}}
                  animate={{ opacity: 1, x: 0}} 
                  transition={{type:"spring", stiffness:100}}
                  className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'>
                     <div>
                        <h1 className='text-lg text-center font-semibold'> Quick Donation Form
                        </h1>
                        <div className='flex items-center justify justify-center gap-8 py-4'>
                            <button onClick={() => setData({...data, amount:1})} 
                            className="button-square"> $01 </button>
                            <button onClick={() => setData({...data, amount:1})} 
                            className="button-square"> $05 </button>
                            <button onClick={() => setData({...data, amount:1})} 
                            className="button-square"> $10 </button>
                            <button onClick={() => setData({...data, amount:1})} 
                            className="button-square"> $99 </button>
                        </div>
                        {/* input section here */}
                     </div>
                     <div className='space-y-6'>
                     <input type='number' 
                        name="amount"
                        id="amount"
                        onChange={handleclick}
                        placeholder='Amount'
                        defaultValue={1}
                        value={data.amount}
                        min={1}
                        max={100}
                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                     />
                     <input 
                        type="text"
                        name="name"
                        //id="name"
                        onChange={handleclick}
                        placeholder="Name"
                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                     />
                     <input 
                        type="email"
                        name="email"
                        id="email"
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