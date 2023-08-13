import React from 'react'
import Title from '../layout/Title';

import Card from './Card';
import { DiCodeBadge } from "react-icons/di";
import { FaNodeJs, FaReact } from 'react-icons/fa';
function Features() {
  return (
    <section id='features'
      className="w-full py-20 border-b-[1px] border-b-black">
      <Title title='What I Do' des='MY SERVICE' />
     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card title='Front-end-Development' des='Versatile front-end developer proficient in creating visually appealing and user-friendly interfaces. Experienced in HTML, CSS, JavaScript, and modern web frameworks.'
          icon={<DiCodeBadge />} />
        <Card title='Backend Development' des='Experienced backend developer skilled in building robust APIs, managing databases, and ensuring seamless server-side functionality for efficient web applications.'
          icon={<FaNodeJs />} />
       
        <Card title='React Development' des='
Proficient React developer with expertise in building interactive UIs, employing state management, and delivering high-quality web applications.'
          icon={<FaReact />} />



      </div>
      
    </section>
  )
}

export default Features;