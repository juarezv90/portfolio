import React from "react";
import "../scss/contactform.scss";

function ContactForm() {
  return (
    <div className="contactform">
      <h4>Contact Me:</h4>
      <form>
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            required
          ></textarea>
        </p>
        <p>
          <button type="submit">Full Send</button>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
