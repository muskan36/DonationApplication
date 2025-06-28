import React from 'react'

const VideoBanner = () => {
  return (
   <div className='bg-primary'> 
    <div className='container py-88 md:py-16'>
        <div className='grid grid-colds-1 items-center md:grid-cols-2 gap-4 md:gap-8'>
            {/* video section */}
            <div>
                <iframe 
                width="560"
                height="365"
                src="https://www.youtube.com/embed/iFMMI5TF-Mc?si=uhNbYdL89jEwganX"
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-orign-when-cros s-origin"
                allowFullScreen
                className='aspect-video w-full' 
                >
                     
                </iframe>
            </div>
            {/* text section */}
            <div className='space-y-4 text-center md:text-left text-white'>
                <h1 className='text-4xl font-bold'> Watch Our Video</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button className='btn-primary !bg-white !text-black '>
                    Get Started
                </button>
            </div>
        </div>
    </div>
 </div>   
  )
}

export default VideoBanner