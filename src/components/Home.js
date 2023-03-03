import React from 'react';
import PDF from '../assets/Ivan_Gromov_CV.pdf';

export default function Home() {
  const openResume = () => {
    window.open(`file:///home/ivan_gromov/react-portfolio-1/src/assets/Ivan_Gromov_CV.pdf`, '_blank');
  };

  return (
    <section className="home-page" id="home">
      <h2>
        Hi, I'm Ivan Gromov
      </h2>
      <h5>
        <span className="my-title">
          Software Developer
        </span>
      </h5>
      <a href={PDF} without rel="noopener noreferrer" target="_blank">
        <button type="button" class="resume-button">
          My Resume
        </button>
      </a>
    </section>
  );
}
