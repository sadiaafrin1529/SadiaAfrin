import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-4">
      <div className="w-full h-full flex flex-col gap-8">
       
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/profile.php?id=100014511813968'><FaFacebookF /></a>
            
          </span>
          <span className="bannerIcon">
            <a href='https://github.com/sadiaafrin1529'><BsGithub /></a>
            
          </span>
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/sadia-afrin-988985194/'><FaLinkedinIn /></a>
            
          </span>
        </div>
      </div>
      <div className="w-full py-">
        
        <p className="text-center text-gray-500 text-base">
          © 2023. All rights reserved by Sadia Afrin
        </p>
      </div>
    </div>
  );
}

export default Footer