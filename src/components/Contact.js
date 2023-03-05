import React from 'react'
import './styling/contact.css'

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <div className="contact-text">
              <h5>contact me</h5>
            </div>
          </div>
          <div className="col-xs-6 col-md-6">
            <div className="number-text">
              <h5>+358 40 6278445</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <div className="copyright-text">
              <h5>© 2023 all rights reserved.</h5>
            </div>
          </div>
          <div className="col-xs-6 col-md-6">
            <div className="email-text">
              <h5>ivan.grcmcv@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
