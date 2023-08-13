import React from 'react'
import Title from '../layout/Title'
import ProjectCard from './ProjectCard'
import projectOne from '../../assets/image/projectOne.png'
import two from'../../assets/image/two.png'
import three from'../../assets/image/three.png'
const Projects = () => {
  return (
    <section id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'>
       <div className='flex justify-center items-center text-center'>
       <Title title={'VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'}
        des={'MY PROJECTS'}/>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Chef Recipe"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={two}
          livesite={'https://chef-recipe-e10c5.web.app/'}
          clientsite={'https://github.com/sadiaafrin1529/chefs'}
          
        />
        <ProjectCard
          title="Dolls Shop"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          livesite={'https://dollproject-e5762.web.app/'}
          clientsite={'https://github.com/sadiaafrin1529/dolls-shop'}        />
        <ProjectCard
          title="Arts&Craft"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={three}
         livesite={'https://arts-and-craft-6dd2b.web.app/'}
         clientsite={'https://github.com/sadiaafrin1529/summer-camp-client'}
        />
       
       </div>
    </section>
  )
}

export default Projects