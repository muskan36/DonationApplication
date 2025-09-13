import React from 'react'
import banner2 from "../../src/assets/banner2.jpg"
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
   <div className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
    <div className='container md:h-[500px] flex items-center justify-center py-10'>
       <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
        
         {/* text container*/}
         <div className='lg:max-w-[400px] space-y-6'>
            <h1 className='text-2xl font-semibold'>
                  Protect the Envionment and Nature
            </h1>
            <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                <li className='font-medium'>Protecting the environment and nature ensures clean air, water, and a healthy ecosystem for future generations.</li>
                <li className='font-medium'>Reducing pollution, conserving resources, and planting trees help combat climate change and biodiversity loss.</li>
                <li className='font-medium'>Every small action, like recycling or using sustainable products, contributes to preserving Earth's natural beauty.

</li>
            </ul>
              <Link to="started"><button className='btn-primary'> Get Started </button></Link>
         </div>
          {/* img container */}
           <div>
            <img src={banner2} alt="" 
                className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl'
            />
           </div>
       </div>
    </div>
   </div>
    
  ) }

export default Banner2

