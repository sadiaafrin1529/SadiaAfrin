import React from 'react'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <div className='w-full '>
        <div >
        <div className='py-12 font-titleFont'>
          {/* <p className='text-sm text-designColor tracking-[4px]'>2016-2018</p> */}
          <h2 className='text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
          title="Higher Seconday School Certificate"
          subTitle="Shaheed Police Smrity College,Dhaka (2016-2018)"
          result="4.75/5"
          des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
        />
        {/* className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" */}
        <ResumeCard
            title="BSc in Computer Science"
            subTitle="Bangladesh University of Business and Technology (2019-2023)"
            
          />
        </div>
        </div>

        
        
        </div>
  )
}

export default Education