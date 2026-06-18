import emailjs from "@emailjs/browser";
import { useState } from "react";

import "../styles/contact.css";

function Contact() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_e9214q7",
      "template_7gt9tgk",
      formData,
      "dDWH6oqgAxlZYZzFF"
    )
    .then(() => {
      alert(
  "Thank you for contacting Shasa Tech. Our team will reach out shortly."
);

      setFormData({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
});
    })
    .catch((error) => {
  console.log("EMAILJS ERROR:", error);
  alert(JSON.stringify(error));
});
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          Tell us about your project and our team
will get back to you with the right
solution and consultation.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Let's Connect</h2>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 9642659228</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>shasatech0910@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Telangana, India</p>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={sendEmail}
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  required
/>

<select
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
>

  <option value="">
    Select Service
  </option>

  <option value="School ERP">
    School ERP Software
  </option>

  <option value="Website Development">
    Website Development
  </option>

  <option value="Mobile App Development">
    Mobile App Development
  </option>

  <option value="AI & Robotics Training">
    AI & Robotics Training
  </option>

  <option value="Custom Software">
    Custom Software
  </option>

</select>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      <section className="contact-cta">

        <h2>
          Need Immediate Assistance?
        </h2>

        <p>
          Get a free consultation today.
        </p>

        <a
          href="https://wa.me/919642659228"
          target="_blank"
          rel="noreferrer"
        >
          Chat directly with us on WhatsApp
for faster responses.
        </a>

      </section>

    </div>
  );
}

export default Contact;