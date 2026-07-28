import "./About.css";
import { FaGraduationCap, FaLaptopCode, FaDatabase, FaChartLine } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">

      <div className="about-glow"></div>

      <div className="about-title">
        <span>ABOUT ME</span>
        <h2>Who Am I?</h2>
      </div>

      <div className="about-card">

        <div className="about-text">

          <p>
            I'm a passionate MCA student with a strong interest in Data Analytics,
            Python Development, Oracle Database and React.
          </p>

          <p>
            I enjoy building modern applications, solving real-world problems,
            and continuously learning new technologies.
          </p>

        </div>

        <div className="about-grid">

          <div className="box">
            <FaGraduationCap />
            <h3>MCA Student</h3>
          </div>

          <div className="box">
            <FaLaptopCode />
            <h3>React Developer</h3>
          </div>

          <div className="box">
            <FaDatabase />
            <h3>Oracle SQL</h3>
          </div>

          <div className="box">
            <FaChartLine />
            <h3>Data Analytics</h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;