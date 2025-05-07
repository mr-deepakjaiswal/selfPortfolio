// src/components/Project.js
import React from 'react';

function Project({ title, description, image, reverse }) {
  return (
    <div className={`projects d-flex flex-column flex-lg-row ${reverse ? 'flex-lg-row-reverse' : ''} mb-5`}>
      <div className="projectText pe-lg-4">
        <h1 className="fw-bold text-body-emphasis fs-2 mt-3">{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <div className="projectImg">
        <img src={image} className="d-block mx-lg-auto img-fluid" alt={title} width="880" height="400" loading="lazy" />
      </div>
    </div>
  );
}

export default Project;
