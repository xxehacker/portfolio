import React, { useRef, useState } from 'react';
import '../styles/contact.scss'
import { MdMarkEmailRead } from 'react-icons/md'
import { IoIosContact } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { IconContext } from 'react-icons'
import SocialIcons from './Socialicons'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Contact() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
    

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const servideId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publickey = import.meta.env.VITE_PUBLIC_KEY


    const templateParams = {
      from_name: username,
      from_email: email,
      to_name: "Mridupawan Bordoloi",
      message: message,
    };

    emailjs
      .send(servideId, templateId, templateParams , publickey)
      .then(
        (res) => {
          console.log('SUCCESS!', res);
          setUsername('');
          setEmail('');
          setMessage('');
          res.status === 200 ? toast("Successful") : toast("Failed");

        })
      .catch((error) => {
        console.log("Error sending email", error)
        toast("Please check your internet..")
      })
  };


  return (
    <div className='contact'>
         <ToastContainer />
      <h1>Contact with me</h1>

      <div className='main'>
        <div className='top'>

          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests</label>
            <label>Your Name: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Your Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Your Message: </label>
            <textarea value={message} rows={10} onChange={(e) => setMessage(e.target.value)} />
            <input id='submut-btn' type="submit" value="Send" />

          </form>

        </div>

        <div className='bottom'>

          <div className='email'>
            <IconContext.Provider value={{ className: 'RIcons' }}>

              <MdMarkEmailRead size={"1.5rem"} />

            </IconContext.Provider>

            <h1><a href="mailto:Mridupawan503@gmail.com">Mridupawan503@gmail.com</a></h1>

          </div>
          <div className='contactNo'>

            <IconContext.Provider value={{ className: 'RIcons' }}>

              <IoIosContact size={"1.5rem"} />

            </IconContext.Provider>
            <h1>+91-7099550167</h1>
          </div>
          <div className='address'>
            <IconContext.Provider value={{ className: 'RIcons' }}>

              <FaLocationDot size={"1.5rem"} />

            </IconContext.Provider>

            <h1>Guwahati , Assam </h1>

          </div>
          <div className='socialIcons'>

            <SocialIcons />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact
