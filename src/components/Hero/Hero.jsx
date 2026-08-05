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
              "Python Developer...",
              "Data Analyst...",
              "Full Stack Developer...",
              "Cloud Enthusiast...",
              "SQL Developer...",
          
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={45}
            delaySpeed={1800}
          />
        </h2>

        <p>
          MCA student with hands-on experience in Full Stack Development, Python,
          Data Analytics, Databases, and Cloud Computing. Passionate about building
          modern applications, analyzing data, and developing scalable software
          solutions using React, FastAPI, SQL, Oracle Database, and cloud technologies.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume_deva.pdf"
            download
            className="btn btn-primary"
          >
            Download CV
          </a>

          <a
            href="#projects"
            className="btn btn-secondary"
          >
            Explore My Work
          </a>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        <div className="image-card">
          <img src={profile} alt="Devaraj P" />
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