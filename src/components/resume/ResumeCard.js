import React from 'react'

const ResumeCard = ({title,subTitle}) => {
  return (
    
    <div className='w-full h-1/3 group flex'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'></span>
            <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </div>
        <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne'>
            <div  className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
           < div>
            <h3>{title}</h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
            
            {/* text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer */}
            </div>
            </div>
        </div>

    </div>
  )
}

export default ResumeCard