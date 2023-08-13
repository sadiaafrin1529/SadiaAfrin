import React,{useState,useRef } from 'react'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import ContactLeft from './ContactLeft';
import Title from '../layout/Title';


const Contact = () => {
  const [username, setUsername] = useState("");
  
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const form = useRef();
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    console.log(data);
    
    
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tzjyk8c', 'template_y1xtzxd', form.current, 'bfTAdldtKnCJEXAUE')
      .then((result) => {

          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//   ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
//   ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    }  else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
     
      setEmail("");
      setSubject("");
      setMessage("");
      
    }
    reset()
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
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p> 
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                 <input  {...register("name")} required  type="text" name="user_name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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
                <input required   {...register("email")}  type="email" name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  
                />
              </div>
              <div className="flex flex-col gap-4">
                
                <label className="text-sm text-gray-400 uppercase tracking-wide"  {...register("message")} >Message</label>
      <textarea name="message" required 
                  onChange={(e) => setMessage(e.target.value)}
                  value={message} 
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
              <div  >
              <input   className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent" type="submit" value="Send" />

              </div>
                {/* <button
                type="submit" 
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button> */}
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact