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
          title="Arts&Craft"
          des=" This MERN Stack project for an Arts and Craft School enables users to register, view instructors, and select classes. Instructors can add, edit, and publish courses, while admins manage user roles, approve courses, and provide feedback
          "
          src={three}
         livesite={'https://arts-and-craft-6dd2b.web.app/'}
         clientsite={'https://github.com/sadiaafrin1529/summer-camp-client'}
         serversite={'https://github.com/sadiaafrin1529/summer-camp-server'}
        />
       
       
        <ProjectCard
          title="Dolls Shop"
          des="In this project, I've designed a user-friendly login and registration system. The home page features a banner, gallery, and categorized dolls with sub-categories. Users can log in to add new toys via 'Add toys' and manage their collection in 'My Toys,' including the option to edit or delete added toys.
          "
          src={projectOne}
          livesite={'https://dollproject-e5762.web.app/'}
          clientsite={'https://github.com/sadiaafrin1529/dolls-shop'}  
          serversite={'https://github.com/sadiaafrin1529/toy-server'}      />
           <ProjectCard
          title="Chef Recipe"
          des=" Welcome to the Indian Cuisine Recipes Website, featuring recipes from renowned chefs. Users can explore recipes, discover celebrity chefs, and add recipes to their favorites list. To access a chef's recipe details, users must log in or register, then click 'View Recipe' and mark it as a favorite."
          src={two}
          livesite={'https://chef-recipe-e10c5.web.app/'}
          clientsite={'https://github.com/sadiaafrin1529/chefs'}
          serversite={'https://github.com/sadiaafrin1529/server'}
          
        />
        
       </div>
    </section>
  )
}

export default Projects