import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

function Leftbanner() {
    const [text] = useTypewriter({
        words: ["Junior MEAN Stack developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='felx flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY PORTFOLIO</h4>
               
                <h1 className='text-6xl font-bold text-white '>

                    Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Sadia Afrin</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'> A <span>  {text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    /></h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide mt-4'>
                    As a Junior MEAN Stack developer, I am a detail-oriented and collaborative problem solver with expertise in MongoDB, Express.js, Angular, and Node.js. Committed to delivering seamless user experiences, I continuously learn and adapt to the latest technologies to contribute effectively to any development project.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <a href='https://www.facebook.com/profile.php?id=100014511813968'> <FaFacebookF /></a>
                           
                        </span>
                        <span className="bannerIcon">
                            <a href='https://github.com/sadiaafrin1529'><BsGithub /></a>
                            
                        </span>
                        <span className="bannerIcon">
                            <a href='https://www.linkedin.com/in/sadia-afrin-988985194/'><FaLinkedinIn /></a>
                            
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiNextdotjs />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbanner