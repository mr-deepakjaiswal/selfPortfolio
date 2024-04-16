import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

function ContactSection() {
  return (
    <div className='contactSection' id='contact'>
      <div class="p-5 pb-md-5 mx-auto text-center contactTop">
        <h1 class="display-4 fw-bold text-body-emphasis">CONTACT</h1>
        <div className="hrLine"></div>
        <h2 class="fs-5  text-body-secondary">Feel free to Contact me by submitting the form below</h2>
      </div>
      <div className="contactForm ">
        <div className="formDiv shadow">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Your Name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control input" id="email" placeholder="Enter Your Email  " />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea style={{ backgroundColor: "#F0F0F0" }} class="form-control textarea" id="message" rows="3" placeholder='Enter Your Message'></textarea>
          </div>
          <button className='formBtn'>Send Message <span><RiSendPlaneFill /></span></button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection