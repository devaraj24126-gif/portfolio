import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
  className="contact"
  id="contact"
  data-aos="fade-up"
>

      <div className="contact-title">
        <span>CONTACT</span>
        <h2>Let's Connect</h2>

        <p className="contact-description">
          Passionate about building software, solving real-world problems,
          and continuously learning new technologies.
        </p>

        <p className="contact-description">
          Open to software development, data analytics, and technology
          opportunities. Feel free to connect for collaborations,
          internships, or full-time roles.
        </p>

      </div>

      <div className="contact-grid">

        <a
          href="mailto:devaraj24126@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />
          <h3>Email</h3>
          <p>devaraj24126@gmail.com</p>
        </a>

        <a
          href="tel:+916379178708"
          className="contact-card"
        >
          <FaPhone />
          <h3>Phone</h3>
          <p>+91 6379178708</p>
        </a>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Tiruchirappalli,<br />Tamil Nadu, India</p>
        </div>

        <a
          href="https://www.linkedin.com/in/deva-p-883651329"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <p>View Profile</p>
        </a>

        <a
          href="https://github.com/devaraj24126-gif"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <h3>GitHub</h3>
          <p>View Repository</p>
        </a>

      </div>

    </section>
  );
}

export default Contact;