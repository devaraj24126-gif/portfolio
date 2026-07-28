import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

import { Typewriter } from "react-simple-typewriter";

import {
  FaReact,
  FaPython,
  FaGithub,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";


function Hero() {
  return (
<section className="hero" id="home" data-aos="fade-up">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* LEFT */}

      <div className="hero-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1>Devaraj P</h1>

        <h2 className="typing">

          <Typewriter
            words={[
              "Data Analyst",
              "Python Developer",
              "React Developer",
              "Power BI Developer",
              "Oracle SQL Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1800}
          />

        </h2>

        <p className="description">
          Recent BCA graduate currently pursuing MCA with hands-on experience
          in Python, SQL, Oracle Database, React, Power BI and Cloud Computing.
          Passionate about building modern applications and solving business
          problems through technology.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume_deva.pdf"
            download
            className="btn btn-primary"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="btn btn-secondary"
          >
            View Projects
          </a>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        <div className="image-card">
          <img src={profile} alt="profile" />
        </div>

        <div className="icon python">
          <FaPython />
        </div>

        <div className="icon react">
          <FaReact />
        </div>

        <div className="icon github">
          <FaGithub />
        </div>

        <div className="icon database">
          <FaDatabase />
        </div>

        <div className="icon powerbi">
            <FaChartBar />
        </div>

      </div>

    </section>
  );
}

export default Hero;