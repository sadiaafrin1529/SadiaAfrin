import React from 'react'
import contact from '../../assets/image/contact.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from "react-icons/bs";
const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                        <img className='w-full h-64 object-cover rounded-lg mb-2' src={contact}></img>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold text-white">Sadia Afrin</h3>
                            <p className="text-lg font-normal text-gray-400">
                                MERN Stack Developer
                            </p>
                            
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Phone: <span className="text-lightText">01924337235</span>
                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Email: <span className="text-lightText">sadiaafrin1529@gmail.com</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/profile.php?id=100014511813968'><FaFacebookF /></a>
            
          </span>
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/sadia-afrin-988985194/'><FaLinkedinIn /></a>
            
          </span>
          <span className="bannerIcon">
            <a href='https://github.com/sadiaafrin1529'> <BsGithub /></a>
         
          </span>
        </div>
      </div>
                    </div>
  )
}

export default ContactLeft