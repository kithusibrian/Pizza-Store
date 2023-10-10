import React from "react";
import contactImage from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="rightside">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter your full name"
            required
            type="text"
          />
          <label htmlFor="email">E mail </label>
          <input
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Type your Message Here"
            required
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
