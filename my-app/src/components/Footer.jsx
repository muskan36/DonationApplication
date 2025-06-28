import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import FooterLinks from './FooterLinks';

const importantLinks =[
    {
        name: "Home",
    },
    {
        name:"About",
    },
    {
        name:"Service",
    },
    {
        name:"Login",
    }
];

const Links = [
    {
        name:"Privacy Policy",
    },
    {
        name:"Services",
    },
    {
        name:"About Us",
    },
];


const Footer = () => {
  return (
    <div className='text-white rounded-t-3xl bg-gradient-to-r from-green-950 to-green-900' >
        <div className='mx-auto max-w-[1200px] p-4'>
            {/* footer content section */}
             <div className='grid py-5 md:grid-cols-3 '>
                <div className='px-4 py-8'>
                    <h1 className='mb-3 text-justify text-xl sm:text-left sm:text-3xl'>
                        <a href="/#home" className='uppercase'>
                        E & A
                            <span className='inline-block font-bold text-primary'>
                             Protection Fund
                            </span>
                        </a>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaLocationArrow />
                        <p> Gorakhpur, Uttar Pradesh</p>
                    </div>
                     <div className='flex items-center gap-3 mt-2'>
                      <FaMobileAlt />
                      <p>+01 235 467 1098</p>
                  </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                   <div className='px-4 py-8'>
                    <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                       <FooterLinks  links={importantLinks} />  
                    </ul>
                   </div>
                   <div className='px-4 py-8'>
                    <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'> Links</h1>
                    <ul className='flex flex-col gap-3'>
                       <FooterLinks  links={Links} />  
                    </ul>
                   </div>
                    <div className='px-4 py-8'>
                    <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'> Social Links</h1>
                    <div className='space-y-3'>
                        <h1>Subscribe to our newsletter</h1>
                        <input
                        type="text"
                        placeholder='Enter your email'
                        className='rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500'
                        />
                        <div className='flex gap-3 mt-3 items-center py-4'>
                        <a href='#' className='duration-200 hover:scale-105'>
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href='#' className='duration-200 hover:scale-105'>
                            <FaFacebook className='text-3xl'/>
                        </a>
                        <a href='#' className='duration-200 hover:scale-105'>
                            <FaLinkedin className='text-3xl'/>
                        </a>
                        </div>
                    </div>
                   </div>
                </div>
             </div>
            {/* footer copyright section */}
            <div className='bottom-footer'>
                <p className='border-t-2 border-gray-300/50 py-6 text-center'>
                    copyright © 2025. All rights reserved.
                </p>
            </div>
           

        </div>
    </div>
  )
}

export default Footer