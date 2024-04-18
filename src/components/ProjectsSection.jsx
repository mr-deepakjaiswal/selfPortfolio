import React from 'react'

function ProjectsSection() {
  return (
    <div className='ProjectsSection' id='projects'>
      <div class="p-5 pb-md-5 mx-auto text-center projectTop">
        <h1 class="display-4 fw-bold text-body-emphasis">PROJECTS</h1>
        <div className="hrLine"></div>
        <h2 class="fs-5  text-body-secondary">Here you will find some of the personal projects </h2>
      </div>
      <div className="projectContent">
        <div class="projcts">
          <div class="projectText">
            <h1 class="fw-bold text-body-emphasis fs-2">Portfolio</h1>
            <p class="lead">Crafting a dynamic self-portfolio project, showcasing skills, experiences, and achievements succinctly. Using multimedia elements to engage viewers, offering a comprehensive glimpse into personal and professional identity.</p>
            <div class="">
              <button type="button" class="projectBtn mb-3">CASE STUDY</button>
            </div>

            
          </div>
          <div class="projectImg">
            <img src="/public/images/portfolio.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="880" height="400" loading="lazy" />
          </div>
        </div>
        <div class="projcts">
          <div class="projectText">
            <h1 class="fw-bold text-body-emphasis fs-2">Ochi Clone</h1>
            <p class="lead"> Developing a groundbreaking project to clone ochi, integrating cutting-edge genetic technology, ethical considerations, and advanced research methodologies to replicate the sensory experience and cognition of this remarkable creature.</p>
            <div class="">
              <button type="button" class="projectBtn mb-3">CASE STUDY</button>
            </div>
          </div>
          <div class="projectImg">
            <img src="/public/images/ochi.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="880" height="400" loading="lazy" />
          </div>
        </div>
        <div class="projcts">
          <div class="projectText">
            <h1 class="fw-bold text-body-emphasis fs-2">Myntra clone!</h1>
            <p class="lead">Revolutionize fashion with a Myntra clone! Seamless UX, personalized recommendations, diverse catalog, secure transactions. Tailored for the modern shopper. Elevate your brand with our customizable platform.</p>
            <div class="">
              <button type="button" class="projectBtn mb-3">CASE STUDY</button>
            </div>
          </div>
          <div class="projectImg">
            <img src="/public/images/myntra.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="880" height="400" loading="lazy" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsSection