import React from 'react'
import me4 from '../../assets/image/me4.png'
function Rightbanner() {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
    <img className='w-[500px] h-[680px] z-10' src={me4}>
    </img>
    <div className='absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>

    </div>
</div>
  )
}

export default Rightbanner