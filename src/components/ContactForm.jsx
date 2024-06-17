import React, { useState } from "react";
import "../scss/contactform.scss";

function ContactForm() {

  const [message, setMessage] = useState({ name: "", message: "", email: "" })
  const [responded, setResponded] = useState({ status:0, message: "" })


  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    async function send() {
      const response = await fetch('https://portfolioapi.victorjuarez.dev/api/contact/', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(message) })
      const data = await response.json()
      const status = await response.status
      if (await response.ok) {
        setMessage({ name: "", message: "", email: "" })
      }
      setResponded({
        status: status,
        message: data.success
      })
    } 

    send()

    setTimeout(() => {
      setResponded({status:0, message:""})
    }, 2000);
    
  }


  return (
    <div className="contactform">
      <h3>Contact Me:</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="name" id="name" required onChange={handleChange} value={message.name} placeholder="Name" />
        </p>
        <p>
          <input type="email" name="email" id="email" required onChange={handleChange} value={message.email} placeholder="Email" />
        </p>
        <p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            required
            onChange={handleChange}
            value={message.message}
            placeholder="Let's discuss an opportunity"></textarea>
        </p>
        <p>
          <button type="submit">Full Send</button>
        </p>
        {responded.status >= 200 && responded.status < 300 && <p className="success">Email Sent</p>}
        {responded.status < 200 || responded.status >= 300 && <p className="failed">Error Sending : {responded.message}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
