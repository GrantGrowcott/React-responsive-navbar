import React from "react";
import "../css/contact.css";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__form">
        <h2>Contact Me</h2>
        <form action="https://formsubmit.co/grantgrowcott56@gmail.com" method="POST">
          <input type="text" id="name" placeholder="Your Name" name="name" required />
          <input type="email" id="email" placeholder="Your email" name="email" required />
          <textarea name="text" id="message" rows="10" placeholder="How can I help you?"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
