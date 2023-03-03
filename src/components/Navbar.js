import React from 'react'
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const sections = document.querySelectorAll('section');
      const links = document.querySelectorAll('.nav-link');

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];
        if (
          currentScrollPos >= section.offsetTop - 100 &&
          (nextSection && currentScrollPos < nextSection.offsetTop - 100 ||
          !nextSection && currentScrollPos >= section.offsetTop + section.offsetHeight - 100)
        ) {
          const currentId = section.id;
          removeActiveClass();
          addActiveClass(currentId);
        }
      });

      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (isBottom) {
        removeActiveClass();
        links[3].classList.add("active");
      }
    };

    const addActiveClass = (id) => {
      const link = document.querySelector(`.nav-link[href='#${id}']`);
      link.classList.add("active");
    };

    const removeActiveClass = () => {
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        link.classList.remove("active");
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar id="my-navbar" variant="light" sticky="top" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">Ivan Gromov</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navbar-home active'>Home</Nav.Link>
            <Nav.Link href="#about" className='navbar-about'>About</Nav.Link>
            <Nav.Link href="#projects" className='navbar-projects'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='navbar-contact'>Contact</Nav.Link>
          </Nav>
          <Nav className="navbar-links">
            <Nav.Link href="https://github.com/gromov-ivan" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="GitHubBtn"></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ivan-gromov-7a5646230/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="LinkedInBtn"></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/grcmcv/" target="_blank">
              <FontAwesomeIcon icon={faInstagramSquare} className="InstagramBtn"></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}
