import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience" data-aos="fade-left">

      <div className="experience-title">
        <span>EXPERIENCE</span>
        <h2>Professional Journey</h2>
      </div>

      <div className="experience-container">

        {/* ==================== VDart ==================== */}

        <div className="experience-card">

          <span className="date">
            Aug 2025 – Sep 2025
          </span>

          <h3>Cloud Computing Intern</h3>

          <h4>VDart Technologies Pvt. Ltd.</h4>

          <div className="experience-tags">

            <div className="exp-tag">
              <h5>ETL Process</h5>
              <p>Worked on ETL workflows using Azure cloud services.</p>
            </div>

            <div className="exp-tag">
              <h5>SQL Upload</h5>
              <p>Uploaded and managed SQL data for analytics.</p>
            </div>

            <div className="exp-tag">
              <h5>Azure Analytics</h5>
              <p>Worked with Azure Analytics Services for data processing.</p>
            </div>

            <div className="exp-tag">
              <h5>Cloud Services</h5>
              <p>Hands-on exposure to Azure cloud infrastructure.</p>
            </div>

          </div>

        </div>

        {/* ==================== BBSSL ==================== */}

        <div className="experience-card">

          <span className="date">
            May 2026 – Jul 2026
          </span>

          <h3>Trainee</h3>

          <h4>Best of Breed Software Solutions</h4>

          <div className="experience-tags">

            <div className="exp-tag">
              <h5>Oracle SQL</h5>
              <p>Worked with SQL queries and database operations.</p>
            </div>

            <div className="exp-tag">
              <h5>PL/SQL</h5>
              <p>Learned procedures, functions and packages.</p>
            </div>

            <div className="exp-tag">
              <h5>Linux</h5>
              <p>Worked with Linux commands and environment.</p>
            </div>

            <div className="exp-tag">
              <h5>Finacle</h5>
              <p>Understood enterprise banking software workflow.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;