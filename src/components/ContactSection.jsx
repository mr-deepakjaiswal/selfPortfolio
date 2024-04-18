import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiSendPlaneFill } from "react-icons/ri";

function ContactSection() {

  const form = useRef();
  const userName = useRef();
  const userEmail = useRef();
  const UserMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lmc2yxr', 'template_zk8l8pd', form.current, {
        publicKey: 'Jf08pp7tONH7U_lG0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          userName.current.value = "";
          userEmail.current.value = "";
          UserMessage.current.value = "";
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contactSection' id='contact'>
      <div class="p-5 pb-md-5 mx-auto text-center contactTop">
        <h1 class="display-4 fw-bold text-body-emphasis">CONTACT</h1>
        <div className="hrLine"></div>
        <h2 class="fs-5  text-body-secondary">Feel free to Contact me by submitting the form below</h2>
      </div>
      <div className="contactForm ">
        <div className="formDiv shadow">
          <form ref={form} onSubmit={sendEmail}>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" ref={userName} name='from_name' class="form-control" id="name" placeholder="Enter Your Name" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" ref={userEmail} name='from_email' class="form-control input" id="email" placeholder="Enter Your Email  " />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea style={{ backgroundColor: "#F0F0F0" }} class="form-control textarea" ref={UserMessage} name='message' id="message" rows="3" placeholder='Enter Your Message'></textarea>
            </div>
            <button className='formBtn'>Send Message <span><RiSendPlaneFill /></span></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection