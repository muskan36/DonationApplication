/*import React from 'react';
import { BlogData } from "../components/Blogs" ;
import BlogCard from '../components/BlogCard';

const BlogDetail = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12'>All Our Blogs</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {BlogData.map((blog) => (
            <BlogCard 
              key={blog.id}
              id={blog.id}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;*/

import React from 'react';
import { BlogData } from '../components/Blogs';
import BlogCard from '../components/BlogCard';

const BlogDetail = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-6 py-7'>Our Blogs</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {BlogData.map((blog) => (
            <BlogCard 
              key={blog.id}
              {...blog}
              showButton={false} // Hide button here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;