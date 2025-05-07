import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiHandsPrayingFill } from "react-icons/pi";
import PROFILE from '../assets/images/profile.jpg'

function HomeSection() {
  return (
    <div className='homeSection row px-2' id='home'>
      <div className='leftHomeSection col-3'>
        <div className='links'>
          <a href="https://www.linkedin.com/in/mrdeepakjaiswal/" className='linksIcons' target='_blank'><FaLinkedin /></a>
          <a href="https://github.com/mr-deepakjaiswal" target='_blank' className='linksIcons'><FaGithub /></a>
          <a href="https://www.instagram.com/mr.deepak_jaiswal" className='linksIcons' target='_blank'><FaInstagram /></a>
        </div>
      </div>
      <div className='rightHomeSection col-9'>
        <div className=" col--8  ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-4">
              <img src={PROFILE} className="d-block mx-lg-auto img-fluid profile_img" alt="Profile img" loading="lazy" />
            </div>
            <div className="col-lg-8">
              <h1 className="fw-bold text-body-emphasis lh-2 mb-3 HomeH1">HEY I'M DEEPAK JAISWAL</h1>
              <h3 className=' text-body-emphasis lh-1 mt-4 mb-3'>------- Front-End Developer</h3>
              <p className="lead homeText mt-4 mb-4" >A passionate web development student with a strong desire to <br /> create meaningful online experiences.</p>

              <button type="button" className="HomeRightBtn mt-3 mb-3">
                <a href="#contact">Say <span>Hello</span><span><PiHandsPrayingFill /></span></a></button>

            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* <div className="mouseScrollCont">
        <div className="mouse"></div>
      </div> */}
    </div >
  )
}

export default HomeSection