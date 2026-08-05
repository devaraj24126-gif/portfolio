import "./About.css";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

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
            I'm an MCA student passionate about Full Stack Development,
            Python Programming, Data Analytics, and Cloud Computing,
            with a strong interest in building scalable applications
            and solving real-world business problems.
          </p>

          <p>
            I have hands-on experience developing modern web applications
            using React, FastAPI, Python, PostgreSQL, Oracle Database,
            SQLAlchemy, REST APIs, JWT Authentication, Git, GitHub,
            Vercel, and Render.
          </p>

          <p>
            I also enjoy working with SQL, Power BI, Excel, and Python
            to analyze data, build interactive dashboards, and transform
            raw data into meaningful business insights.
          </p>

          <p>
            My goal is to continuously learn new technologies, build
            impactful projects, and develop secure, efficient, and
            user-focused software solutions across software development,
            data analytics, and cloud technologies.
          </p>

        </div>

        <div className="about-grid">

          <div className="box">
            <FaGraduationCap />
            <h3>MCA Student</h3>
          </div>

          <div className="box">
            <FaLaptopCode />
            <h3>Full Stack Development</h3>
          </div>

          <div className="box">
            <FaServer />
            <h3>Python & Cloud</h3>
          </div>

          <div className="box">
            <FaDatabase />
            <h3>Data Analytics</h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;