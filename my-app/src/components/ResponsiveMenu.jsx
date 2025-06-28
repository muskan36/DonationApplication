import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const ResponsiveMenu=({showMenu, theme}) => {
   console.log('Received theme:', theme);
  return (
  <>
    <div className={`fixed top-0 z-50 ${showMenu ? "left-0" : "-left-[100%]"} h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between md:hidden`}>
      {/* Navbar section*/}
        <div>
            {/* user section */}
            <div className="flex items-center justify-start gap-3">
                <FaUserCircle size={50} />
                <div>
                    <h1 className="text-xl font-semibold"> John Doe</h1>
                    <h1 className='text-sm text-slate-500'>+123456789</h1>
                </div>
            </div>
        </div>
       {/* Nav Footer Section*/}
      
        

       <div> 
         <p> @2025 All Rights Reserved</p>
        </div>
    </div>
    </>
  );
};

export default ResponsiveMenu;

