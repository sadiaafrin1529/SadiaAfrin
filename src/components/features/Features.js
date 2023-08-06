import React from 'react'
import Title from '../layout/Title';
import Card from './Card';
import { DiCodeBadge } from "react-icons/di";
import { FaNodeJs, FaReact } from 'react-icons/fa';
function Features() {
  return (
    <section id='features'
      className="w-full h-[800px] py-20  border-b-[1px]  border-b-black">
      <Title title='Features' des='MY SKILLS' />
      <div className='grid grid-cols-3 gap-20'>
        <Card title='Front-end-Development' des='I possess strong front-end development skills, creating captivating and responsive web experiences with HTML, CSS, JavaScript, and frameworks like React, while ensuring user-centric design and optimal performance.'
          icon={<DiCodeBadge />} />
        <Card title='Backend Development' des='Proficient backend developer skilled in creating efficient APIs, optimizing databases, and implementing secure server-side operations. Passionate about building scalable and reliable web applications to enhance user experiences.'
          icon={<FaNodeJs />} />
        <Card title='Backend Development' des='Proficient backend developer skilled in creating efficient APIs, optimizing databases, and implementing secure server-side operations. Passionate about building scalable and reliable web applications to enhance user experiences.'
          icon={<FaReact />} />
        <Card title='React Development' des='
Experienced React developer proficient in creating elegant and interactive user interfaces. Strong command of state management, component architecture, and modern frontend tools to deliver engaging and efficient web applications.'
          icon={<FaReact />} />



      </div>
    </section>
  )
}

export default Features;