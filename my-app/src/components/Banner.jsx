import React from 'react'
import banner from "../../src/assets/banner.jpg"
const Banner = () => {
  return (
   <div className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
    <div className='container md:h-[500px] flex items-center justify-center py-10'>
       <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
         {/* img container */}
           <div>
            <img src={banner} alt="" 
                className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl'
            />
           </div>
         {/* text container*/}
         <div className='lg:max-w-[400px] space-y-6'>
            <h1 className='text-2xl font-semibold'>
                  Adopt Pet Animals
            </h1>
            <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                <li className='font-medium'>Adopting pet animals gives them a loving home and a second chance at life</li>
                <li className='font-medium'>It helps reduce overcrowding in shelters and supports animal welfare.</li>
                <li className='font-medium'>Pets bring joy, companionship, and emotional benefits to their adoptive families.</li>
            </ul>
            <button className='btn-primary'> Get Started </button>
         </div>
       </div>
    </div>
   </div>
    
  )
}

export default Banner