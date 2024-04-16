import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footerSection'>
      <div class="container fotterMain">
        <footer class="py-3 my-4">
          <h1 className='my-2'>Deepak Jaiswal</h1>
          <h4 className='my-2'>A passionate web development student with a strong desire to
            create meaningful online experiences.</h4>
          <div className='my-2'>
            <span className='fotterIcons'><a href=""><FaFacebookSquare /></a></span>
            <span className='fotterIcons'><a href=""><FaInstagramSquare /></a></span>
            <span className='fotterIcons'><a href=""><FaSquareXTwitter /></a></span>
          </div>
          <div className='divider'>
            <p class="text-center text-body-secondary">© Copyright 2024 . Made by Deepak Jaiswal</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer