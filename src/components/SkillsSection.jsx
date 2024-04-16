import React from 'react'
import { MdVerified } from "react-icons/md";
function SkillsSection() {
  return (
    <div className='skillSection' id='skills'>
      <div class="p-5 pb-md-5 mx-auto text-center Skill">
        <h1 class="display-4 fw-bold text-body-emphasis">Skills</h1>
        <div className="hrLine"></div>
        <h2 class="fs-5  text-body-secondary">My Technical Skills</h2>
      </div>
      <div class="container px-4 py-4">
        <div class="row g-4 py-2 row-cols-1 row-cols-lg-3 SkillsDiv">
          <div class="feature col  innerSkillsDiv shadow">
            <h1>Frontend Developer</h1>
            <div className='Skills'>
              <div class="row">
                <div class="col">
                  <h4><span className='skillsIcon'><MdVerified /></span> HTML</h4>
                  <p>Basic</p>
                </div>
                <div class="col">
                  <h4><span><MdVerified /></span> Bootstrap</h4>
                  <p>Intermediate</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h4><span><MdVerified /></span> CSS</h4>
                  <p>Advance</p>
                </div>
                <div class="col">
                  <h4><span><MdVerified /></span> Git</h4>
                  <p>Basic</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h4><span><MdVerified /></span> JavaScript</h4>
                  <p>Intermediate</p>
                </div>
                <div class="col">
                  <h4><span><MdVerified /></span> React</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
          <div class="feature col innerSkillsDiv shadow ">
            <h1>Backend Developer</h1>
            <div className='Skills'>
              <div class="row">
                <div class="col">
                  <h4><span><MdVerified /></span> Node Js</h4>
                  <p>Intermediate</p>
                </div>
                <div class="col">
                  <h4><span><MdVerified /></span> Java</h4>
                  <p>Basic</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h4><span><MdVerified /></span> Python</h4>
                  <p>Basic</p>
                </div>
                <div class="col">
                  <h4><span><MdVerified /></span> Dbms</h4>
                  <p>Intermediate</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h4><span><MdVerified /></span> My Sql</h4>
                  <p>Intermediate</p>
                </div>
                <div class="col">
                  <h4><span><MdVerified /></span> MongoDB</h4>
                  <p>Basic</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SkillsSection