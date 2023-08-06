import React from 'react'
import me4 from '../../assets/image/me4.png'

import Leftbanner from './Leftbanner';
import Rightbanner from './Rightbanner';
const Banner = () => {

    return (
        <section id='home'
            className="w-full pt-10 py-20 flex  items-center border-b-[1px] font-titleFont border-b-black  "
        >
            <Leftbanner />
            <Rightbanner/>
        </section>

    )
}

export default Banner