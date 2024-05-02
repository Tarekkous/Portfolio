import React, { useRef } from "react";
import "../contact/contact.scss";
import emailjs from '@emailjs/browser'

const Contact = () => {

const refForm = useRef()

const sendEmail = (e) => {
e.preventDefault()
}

  return (
    <div className="container">
      <div className="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className="half">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li className="half">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value={"SEND"} />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
