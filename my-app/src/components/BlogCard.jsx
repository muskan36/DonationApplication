/*import React from 'react'

const BlogCard = ({
    img, title, description, date, writer
}) => {
  return (
    <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white'>
        <div className='overflow-hidden'>
            <img src={img} alt=""
            className='mx-auto h-[350px] w-[350px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
            />
        </div>
        <div className='flex justify-between pt-2 text-slate-600 text-sm'>
            <p>{date}</p>
            <p className='line-clamp-1'>by {writer}</p>
        </div>
        <div className='space-y-2 py-3'>
            <h1 className='line-clamp-1 font-bold'>{title}</h1>
            <p className='line-clamp-2 text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default BlogCard*/

/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ img, title, description, date, writer, id }) => {
  const navigate = useNavigate();
  
  return (
    <div className='p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className='overflow-hidden rounded-lg'>
        <img 
          src={img} 
          alt={title}
          className='w-full h-48 object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className='flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400'>
        <span>{date}</span>
        <span>by {writer}</span>
      </div>
      <h2 className='mt-3 text-xl font-bold line-clamp-1'>{title}</h2>
      <p className='mt-2 text-gray-600 dark:text-gray-300 line-clamp-2'>{description}</p>
      <button 
        onClick={() => navigate('/blogs/all')}
        className='mt-4 w-full py-2 bg-green-700 hover:bg-green-900 text-white rounded-lg transition-colors duration-300'
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ img, title, description, date, writer, showButton = false, clampDescription = false }) => {
  const navigate = useNavigate();
  
  return (
    <div className='p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col'>
      <div className='overflow-hidden rounded-lg'>
        <img 
          src={img} 
          alt={title}
          className='w-full h-82 object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className='flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400'>
        <span>{date}</span>
        <span>by {writer}</span>
      </div>
      <h2 className='mt-3 text-xl font-bold'>{title}</h2>
      <p className={`mt-2 text-gray-600 dark:text-gray-300 ${clampDescription ? 'line-clamp-3' : ''}`}>
        {description}
      </p>
      {showButton && (
        <button 
          onClick={() => navigate('/blogs/all')}
          className='mt-4 w-full py-2 bg-green-700 hover:bg-green-900 text-white rounded-lg transition-colors duration-300'
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default BlogCard;

