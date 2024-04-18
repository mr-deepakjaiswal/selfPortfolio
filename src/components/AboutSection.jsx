import React from 'react'
import { MdDownloading } from "react-icons/md";

function AboutSection() {
  const handleDownloadClick = () => {
    const pdfUrl = '/public/resumeDeepak.pdf';

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'DeepakJaiswal-Resume.pdf';
        a.target = '_blank';
        a.click();

        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error fetching PDF:', error);
      });
  }

  return (
    <div className='About' id='about'>
      <div class="p-5 pb-md-5 mx-auto text-center aboutTop">
        <h1 class="display-4 fw-bold text-body-emphasis">About</h1>
        <div className="hrLine"></div>
        <h2 class="fs-5  text-body-secondary">My Introduction</h2>
      </div>
      <div class="aboutMainSection">
        <div class="aboutText">
          <h1 class="fw-bold text-body-emphasis">Get to know me!</h1>
          <p class="lead">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b>  section.</p>
          <div class="">
            <button type="button" onClick={handleDownloadClick} class="aboutBtn mt-3 mb-3">Download CV <span className='aboutBtnicon'><MdDownloading /></span></button>
          </div>
        </div>
        <div class="aboutImg">
          <img src="/public/images/profile.jpg" className="d-block mx-lg-auto img-fluid aboutImg " alt="Bootstrap Themes" width="400" height="200" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection