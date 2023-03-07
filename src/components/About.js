import { React, useState } from 'react';
import './styling/about.css';
import { Carousel, Tab, Nav } from 'react-bootstrap';
import Photo1 from '../assets/my-photo-1.jpg';
import Photo2 from '../assets/my-photo-2.jpg';
import Photo3 from '../assets/my-photo-3.jpg';
import Photo4 from '../assets/my-photo-4.jpg';

export default function About() {
  const [activeKey, setActiveKey] = useState("about-me");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <section className="about-page" id="about">
      <div className="container">
      <div className="row align-items-top">
        <Tab.Container defaultActiveKey="about-me">
          <div className="col-md-2">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="about-me">About me</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="education">Education</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-md-5">
            <Tab.Content>
              <Tab.Pane eventKey="about-me">
                <div className="about-text">
                  <h2>About Me</h2>
                  <br/>
                  <p>
                    Enthusiastic and responsible Software Engineering student with the desire to
                    develop himself and apply the acquired knowledge in practice.
                  </p>
                  <p>
                    An experienced and valuable team player, effectively collaborating with others while being able
                    to work independently. A capable software developer who is attentive to details
                    and adaptable to changing circumstances.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="skills">
                <div className="skills-text">
                  <h2>Skills</h2>
                  <br/>
                  <p>
                    I am pursuing Bachelor's Degree in Software Engineering at Tampere University of
                    Applied Sciences. During my education and self-study, I have acquired knowledge in
                    JavaScript, React, Node.js, MongoDB, and Docker, which I use in my web development
                    projects.
                  </p>
                  <p>
                    Additionally, I am familiar with Java and C++ as well as have experience
                    with Git and DevOps, including implementing CI/CD practices in teamwork. I also
                    have a certificate from Samsung IT School, where I studied Java Android development
                    together with the basics of UX/UI design, which were used for both individual and
                    group projects.
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="education">
                <div className="education-text">
                  <h2>Education</h2>
                  <br/>
                  <p>
                    Bachelor's Degree Programme in Software Engineering,<br />Tampere
                    University of Applied Sciences
                  </p>
                  <p>
                    August 2021 — Present
                  </p>
                  <p>
                    GPA – 4.43/5
                  </p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
        <div className="col-md-5">
          <div className="about-slider">
            <Carousel
              pause={false}
              fade={true}
              controls={true}
              indicators={false}
              interval={10000}
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
              <Carousel.Item key={4}>
                <img className="d-block w-100" src={Photo4} alt="My Photo 4" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
