import emailjs from '@emailjs/browser';
import React ,{useRef, useState } from 'react'
import ContactLeft from './ContactLeft';
import Title from '../layout/Title';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import toast, { Toaster } from 'react-hot-toast';
const Contacts = () => {
  const [errMsg, setErrMsg] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    console.log(data);
    reset()
   
    toast.success('Message Send', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    
    // toast.success('🦄 Wow so easy!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   });
    
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tzjyk8c', 'template_y1xtzxd', form.current, 'bfTAdldtKnCJEXAUE')
      .then((result) => {
        
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
         title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft/>
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
         <div onSubmit={handleSubmit(onSubmit)}>
         <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" ref={form} onSubmit={sendEmail}>

         <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Name
                </p>
                 <input required  {...register("name")} type="text" name="user_name"
                  
                  className={`${
                    errMsg === "Username is required!" &&
                    "outline-designColor"
                  } contactInput`}
                
                />
              </div>
         <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input required  {...register("email")}  type="email" name="user_email" 
                  
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                
                />
              </div>
         <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
                </p>
                 <input required  {...register("subject")} type="text" name="subject"
                  
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                
                />
              </div>
        


              <div className="flex flex-col gap-4">
              
                <label className="text-sm text-gray-400 uppercase tracking-wide"  {...register("message")} >Message</label>
      <textarea name="message" required
       className={`${
        errMsg === "Message is required!" && "outline-designColor"
      } contactTextArea`}
      cols="30"
      rows="8"
       />
                
              </div>
        
      <input  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent" type="submit" value="Send" />

      {/* <Toaster /> */}
      <ToastContainer />
    </form>
         </div>
          
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts