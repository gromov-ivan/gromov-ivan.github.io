import React from 'react';
import './styling/about.css'
import { Carousel } from 'react-bootstrap';
import Photo1 from '../assets/my-photo-1.jpg';
import Photo2 from '../assets/my-photo-2.jpg';
import Photo3 from '../assets/my-photo-3.jpg';

export default function About() {
  return (
    <section className="about-page" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h2>about me</h2>
              <br />
              <p>
                Enthusiastic and responsible Software Engineering student with the desire to
                develop himself and apply the acquired knowledge in practice.<br />An experienced
                and valuable team player, effectively collaborating with others while being able
                to work independently. A capable software developer who is attentive to details
                and adaptable to changing circumstances.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-slider">
              <Carousel
                pause={true}
                fade={false}
                controls={true}
                indicators={false}
                touch={false}
                interval={7000}
                >
                <Carousel.Item key={1}>
                  <img className="d-block w-100" src={Photo1} alt="My Photo 1" />
                </Carousel.Item>
                <Carousel.Item key={2}>
                  <img className="d-block w-100" src={Photo2} alt="My Photo 2" />
                </Carousel.Item>
                <Carousel.Item key={3}>
                  <img className="d-block w-100" src={Photo3} alt="My Photo 3" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
