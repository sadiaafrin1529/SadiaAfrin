import React from 'react'
import Title from '../layout/Title'
import Slider from 'react-slick'
import sadia from '../../assets/image/me4.png'
import cv from '../../assets/image/CV.pdf'
import quote from '../../assets/image/quote.png'
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <section id='testimonial'
            className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title des={'About Me'} />
            </div>
            <div className='max-w-6xl mx-auto '>
                <Slider {...settings}>
                    <div className='w-full '>

                        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>

                            <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                                <img src={sadia}></img>
                                <div className="w-full flex flex-col justify-end ">

                                </div>

                            </div>
                            <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                                <img className='w-20 lgl:w-32' src={quote}></img>
                                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8'>
                                <div>
                                    <h3 className="text-3xl font-bold justify-center items-center text-center">Hi, I am <span className='text-designColor'>Sadia Afrin</span></h3>

                                    <div className='flex flex-col justify-center items-center text-center mt-8 gap-20'>
                                        <ul className=' mt-5 w-full lg:w-2/4 pl-4 ml-5 lg:ml-0'>
                                            <li className=' pb-2'>
                                                <div className='grid grid-cols-2'>
                                                    <p className='font-semibold'>Age</p>
                                                    <p>:24years</p>
                                                </div>
                                            </li>
                                            <li className=' pb-2'>
                                                <div className='grid grid-cols-2'>
                                                    <p className='font-semibold'>Nationality</p>
                                                    <p>:Bangladesh</p>
                                                </div>
                                            </li>
                                            <li className=' pb-2'>
                                                <div className='grid grid-cols-2'>
                                                    <p className='font-semibold'>Languages</p>
                                                    <p>:Bangla, English</p>
                                                </div>
                                            </li>
                                            <li className=' pb-2'>
                                                <div className='grid grid-cols-2'>
                                                    <p className='font-semibold'>Address</p>
                                                    <p>:Mirpur 1, Dhaka, Bangladesh</p>
                                                </div>
                                            </li>
                                        </ul>


                                    </div>



                                </div>
                                <div className='justify-center items-center text-center'>

                                    <a href={cv} download>
                                        <button className="btn-primary rounded-full p-3">Download CV</button>
                                    </a>
                                </div> 
                                </div>
                               


                            </div>
                        </div>
                    </div>


                </Slider>
            </div>

        </section>
    )
}

export default Testimonial