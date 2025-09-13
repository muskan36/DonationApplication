/*import React from 'react'
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import BlogCard from './BlogCard';


const BlogData =  [
  {
  img: Img1,
  title:
  "Adopt Animals",
  description:
 "Adopting animals is a compassionate choice that saves lives and reduces overcrowding in shelters. Pets offer unconditional love, companionship, and even health benefits like reduced stress. By adopting, you support animal welfare and discourage unethical breeding practices. Every rescued animal deserves a second chance—opening your home to one brings joy to both you and your new furry friend. Choose adoption and make a difference today!",
  date:
  "April 23, 2025",
  writer:
  "John",
  },
  {
    img: Img2,
  title:
  "Protect Forests: Save Our Green Lungs",
  description:
  "Forests are vital for life on Earth—they purify air, regulate climate, and support biodiversity. Deforestation threatens wildlife, disrupts ecosystems, and worsens global warming. By planting trees, reducing paper waste, and supporting sustainable practices, we can conserve these natural treasures. Governments and individuals must act together to prevent illegal logging and wildfires. Protecting forests ensures a healthier planet for future generations.",
  date:
  "Jan 21, 2025",
  writer:
  "Annoymous" 
  },
  {
  img: Img3,
  title:
  "Protect Wildlife: Preserve Earth’s Natural Heritage",
  description:
  "Wildlife maintains ecological balance, yet habitat loss, poaching, and climate change push many species toward extinction. Protecting animals safeguards biodiversity and sustains ecosystems we depend on. Support conservation efforts, avoid products harming wildlife, and promote habitat restoration. Strict anti-poaching laws and community awareness are crucial. Every species has a role—let’s act now to secure their future and ours.",
  date:
  "Dec 12, 2024",
  writer:
  "Frank",
  },
];

const Blogs = () => {
  return <div className='dark:bg-gray-900 dark:text-white'>
    <div className='container py-8'>
      <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold'> Our Latest Blog</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        {BlogData.map((blog) =>(
           <BlogCard 
            key={blog.title}
            img={blog.img}
            description={blog.description}
            date={blog.date}
            writer={blog.writer}
           />
        ))}
      </div>
    </div>
  </div>
};

export default Blogs*/

/*import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import BlogCard from './BlogCard';

const BlogData = [
  {
    id: 1,
    img: Img1,
    title: "Adopt Animals",
    description: "Adopting animals is a compassionate choice that saves lives and reduces overcrowding in shelters. Pets offer unconditional love, companionship, and even health benefits like reduced stress. By adopting, you support animal welfare and discourage unethical breeding practices. Every rescued animal deserves a second chance—opening your home to one brings joy to both you and your new furry friend. Choose adoption and make a difference today!",
    date: "April 23, 2025",
    writer: "John",
  },
  {
    id: 2,
    img: Img2,
    title: "Protect Forests: Save Our Green Lungs",
    description: "Forests are vital for life on Earth—they purify air, regulate climate, and support biodiversity. Deforestation threatens wildlife, disrupts ecosystems, and worsens global warming. By planting trees, reducing paper waste, and supporting sustainable practices, we can conserve these natural treasures. Governments and individuals must act together to prevent illegal logging and wildfires. Protecting forests ensures a healthier planet for future generations.",
    date: "Jan 21, 2025",
    writer: "Anonymous" 
  },
  {
    id: 3,
    img: Img3,
    title: "Protect Wildlife: Preserve Earth's Natural Heritage",
    description: "Wildlife maintains ecological balance, yet habitat loss, poaching, and climate change push many species toward extinction. Protecting animals safeguards biodiversity and sustains ecosystems we depend on. Support conservation efforts, avoid products harming wildlife, and promote habitat restoration. Strict anti-poaching laws and community awareness are crucial. Every species has a role—let's act now to secure their future and ours.",
    date: "Dec 12, 2024",
    writer: "Frank",
  },
];

const Blogs = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-12 text-center text-4xl font-bold'>Our Latest Blogs</h1>
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

export default Blogs;
export { BlogData };*/ // Export BlogData for use in BlogDetail*/

import React from 'react';
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import BlogCard from './BlogCard';

export const BlogData = [
  {
    id: 1,
    img: Img1,
    title: "Adopt Animals",
    description: "Adopting animals is a compassionate choice that saves lives and reduces overcrowding in shelters. Pets offer unconditional love, companionship, and even health benefits like reduced stress. By adopting, you support animal welfare and discourage unethical breeding practices. Every rescued animal deserves a second chance—opening your home to one brings joy to both you and your new furry friend. Choose adoption and make a difference today!",
    date: "April 23, 2025",
    writer: "John",
  },
  {
    id: 2,
    img: Img2,
    title: "Protect Forests: Save Our Green Lungs",
    description: "Forests are vital for life on Earth—they purify air, regulate climate, and support biodiversity. Deforestation threatens wildlife, disrupts ecosystems, and worsens global warming. By planting trees, reducing paper waste, and supporting sustainable practices, we can conserve these natural treasures. Governments and individuals must act together to prevent illegal logging and wildfires. Protecting forests ensures a healthier planet for future generations.",
    date: "Jan 21, 2025",
    writer: "Anonymous" 
  },
  {
    id: 3,
    img: Img3,
    title: "Protect Wildlife: Preserve Earth's Natural Heritage",
    description: "Wildlife maintains ecological balance, yet habitat loss, poaching, and climate change push many species toward extinction. Protecting animals safeguards biodiversity and sustains ecosystems we depend on. Support conservation efforts, avoid products harming wildlife, and promote habitat restoration. Strict anti-poaching laws and community awareness are crucial. Every species has a role—let's act now to secure their future and ours.",
    date: "Dec 12, 2024",
    writer: "Frank",
  },
];

const Blogs = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-12 text-center text-4xl font-bold'>Our Latest Blogs</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {BlogData.map((blog) => (
            <BlogCard 
              key={blog.id}
              {...blog}
              showButton={true}
              clampDescription={true}  // New prop to control line clamping
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

