import React from 'react'
import './styling/projects.css'

export default function Projects() {
  return (
    <section className="projects-page" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="projects-text">
              <h2>My projects</h2>
              <br />
              <p>
                Full-Stack Web Application, To-Do — React, Node.js, MongoDB, Docker.
                <br />
                <a href="https://github.com/gromov-ivan/todo-app" target="_blank">GitHub Repository</a>
              </p>
              <p>
                Web Application, Weather Forecast — JavaScript, HTML, CSS.
                <br />
                <a href="https://github.com/gromov-ivan/weather-app" target="_blank">GitHub Repository</a>
              </p>
              <p>
                Java Application, Searching and Sorting Program — Java.
                <br />
                <a href="https://github.com/gromov-ivan/searching-and-sorting" target="_blank">GitHub Repository</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
