import React from 'react';
import './styling/home.css'
import PDF from '../assets/Ivan_Gromov_CV.pdf';

export default function Home() {
  return (
    <section className="home-page" id="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="home-text">
              <h2>Hi, I'm Ivan Gromov</h2>
              <h5>
                <span className="my-title">
                  Software Developer
                </span>
              </h5>
              <a href={PDF} without rel="noopener noreferrer" target="_blank">
                <button type="button" className="resume-button">
                  My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
