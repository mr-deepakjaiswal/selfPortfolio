import React from 'react'
import headderImg from "../assets/images/headder_img.png"
export default function Navbar() {

  return (
    <div className='shadow mynavbar' >
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-2" >
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img className='navbarImg' src={headderImg} alt="" />
            <span className="fs-4 fw-bold text-body-emphasis text-uppercase" style={{ fontFamily: "Quicksand" }}>Deepak Jaiswal</span>
          </a>

          <ul className="nav nav-pills" style={{ fontFamily: "Quicksand" }}>
            <li className="nav-item fs-5"><a href="#home" className="nav-link text-black fw-medium navbarLi">Home</a></li>
            <li className="nav-item fs-5"><a href="#about" className="nav-link text-black fw-medium navbarLi">About</a></li>
            <li className="nav-item fs-5"><a href="#skills" className="nav-link text-black fw-medium navbarLi">Skills</a></li>
            <li className="nav-item fs-5"><a href="#projects" className="nav-link text-black fw-medium navbarLi">Projects</a></li>
            <li className="nav-item fs-5"><a href="#contact" className="nav-link text-black fw-medium navbarLi">Contact</a></li>
          </ul>
        </header>
      </div>
    </div>
  )
}
