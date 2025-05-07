import React from 'react'
import portfolioImg from '../assets/images/portfolio.jpeg'
import ochiImg from '../assets/images/ochi.jpeg'
import myntraImg from '../assets/images/myntra.jpeg'
import aspcart from '../assets/images/aspcart.jpg'
import aspcartAdmin from '../assets/images/aspcartAdmin.jpg'
import Project from './Project';

const projectData = [
  {
    title: 'Portfolio',
    description:
      'Crafting a dynamic self-portfolio project, showcasing skills, experiences, and achievements. It uses multimedia elements and interactivity to engage viewers and highlight personal identity.',
    image: portfolioImg,
  },
  {
    title: 'Ochi Clone',
    description:
      'A visually rich and interactive clone of the Ochi website, built using modern frontend technologies to replicate smooth animations, scroll effects, and a minimalistic UI/UX design.',
    image: ochiImg,
    reverse: true,
  },
  {
    title: 'Myntra Clone',
    description:
      'A fully responsive Myntra clone with seamless UX, personalized product filtering, and a secure shopping experience. Built to mimic e-commerce site structure and layout.',
    image: myntraImg,
  },
  {
    title: 'Aspcart',
    description:
      'AspCart is a responsive web platform for buying custom websites, built using React.js and Tailwind CSS with 64 pages and integrated JavaScript libraries for enhanced functionality.',
    image: aspcart,
    reverse: true,
  },
  {
    title: 'AspCart Admin Dashboard',
    description:
      'AspCart Admin Dashboard is a responsive React-based interface with React Router and Redux, featuring multiple pages and tabs for managing website data, settings, and user customization.',
    image: aspcartAdmin,

  },
];

function ProjectsSection() {
  return (
    <div className='ProjectsSection pb-5' id='projects'>
      <div class="p-5 pb-md-5 mx-auto text-center projectTop">
        <h1 class="display-4 fw-bold text-body-emphasis">PROJECTS</h1>
        <div className="hrLine"></div>
        <h2 class="fs-5  text-body-secondary">Here you will find some of the personal projects </h2>
      </div>
      <div className="projectContent container mt-4">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            reverse={project.reverse}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection