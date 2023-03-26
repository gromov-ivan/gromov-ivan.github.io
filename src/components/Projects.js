import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import './styling/projects.css';

export default function Projects() {
  useEffect(() => {
    const sphere = document.querySelector('.tags-cloud');
    const tags = ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Linux',
    'Git', 'Bootstrap', 'Java', 'C++', 'CI/CD', 'Android', 'MongoDB', 'Docker'];
    TagCloud(sphere, tags, {
      // radius in px
      radius: 200,

      // animation speed
      // slow, normal, fast
      maxSpeed: "normal",
      initSpeed: 'normal',

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,

      // interact with cursor move on mouse out
      keep: false
    });
  }, []);

  return (
    <section className="projects-page" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="projects-text">
              <h2>My projects</h2>
              <br />
              <p>
                Personal Website — React, Bootstrap 5.2.
                <br />
                <a href="https://github.com/gromov-ivan/gromov-ivan.github.io" target="_blank">
                  <button button type="button" className="git-btn">
                    View GitHub
                  </button>
                </a>
              </p>
              <p>
                Full-Stack Web Application, To-Do — React, Node.js, MongoDB, Docker.
                <br />
                <a href="https://github.com/gromov-ivan/todo-app" target="_blank">
                  <button button type="button" className="git-btn">
                    View GitHub
                  </button>
                </a>
              </p>
              <p>
                Web Application, Weather Forecast — JavaScript, HTML, CSS.
                <br />
                <a href="https://github.com/gromov-ivan/weather-app" target="_blank">
                  <button button type="button" className="git-btn">
                    View GitHub
                  </button>
                </a>
              </p>
              <p>
                Java Application, Searching and Sorting Program — Java.
                <br />
                <a href="https://github.com/gromov-ivan/searching-and-sorting" target="_blank">
                  <button button type="button" className="git-btn">
                    View GitHub
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="tags-cloud"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
