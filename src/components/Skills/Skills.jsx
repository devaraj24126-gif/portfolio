import "./Skills.css";
import { FaServer, FaShieldAlt } from "react-icons/fa";

function Skills() {
  return (
   <section className="skills" id="skills" data-aos="zoom-in">

      <div className="skills-title">
        <span>MY SKILLS</span>
        <h2>Technologies I Work With</h2>
      </div>

     <div className="skills-grid">

  

  {/* Programming */}

  <div className="skill-card">
    <i className="devicon-python-plain colored"></i>
    <p>Python</p>
  </div>

  <div className="skill-card">
    <i className="devicon-java-plain colored"></i>
    <p>Java</p>
  </div>

  <div className="skill-card">
    <i className="devicon-javascript-plain colored"></i>
    <p>JavaScript</p>
  </div>

  <div className="skill-card">
    <i className="devicon-react-original colored"></i>
    <p>React</p>
  </div>

  {/* Backend */}

  <div className="skill-card">
    <i className="devicon-fastapi-plain colored"></i>
    <p>FastAPI</p>
  </div>

  <div className="skill-card">
    <i className="devicon-postgresql-plain colored"></i>
    <p>PostgreSQL</p>
  </div>

  <div className="skill-card">
    <i className="devicon-oracle-original colored"></i>
    <p>Oracle DB</p>
  </div>

  <div className="skill-card">
    <i className="devicon-sqlalchemy-plain colored"></i>
    <p>SQLAlchemy</p>
  </div>

  {/* Analytics */}

  <div className="skill-card">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      alt="SQL"
      style={{width:"70px",height:"70px"}}
    />
    <p>SQL</p>
  </div>

  <div className="skill-card">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
      alt="Power BI"
      style={{width:"65px"}}
    />
    <p>Power BI</p>
  </div>

<div className="skill-card">
  <i className="devicon-vitejs-plain colored"></i>
  <p>Vite</p>
</div>
<div className="skill-card">
  <i className="devicon-npm-original-wordmark colored"></i>
  <p>NPM</p>
</div>
<div className="skill-card">
  <i className="devicon-postman-plain colored"></i>
  <p>Postman</p>
</div>

  <div className="skill-card">
    <i className="devicon-azure-plain colored"></i>
    <p>Azure</p>
  </div>

  {/* Deployment */}

  <div className="skill-card">
    <img
      src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
      alt="Vercel"
      style={{width:"65px"}}
    />
    <p>Vercel</p>
  </div>

  <div className="skill-card">
  <i className="devicon-googlecloud-plain colored"></i>
  <p>Render</p>
</div>

  {/* Tools */}

  <div className="skill-card">
    <i className="devicon-linux-plain colored"></i>
    <p>Linux</p>
  </div>

  <div className="skill-card">
    <i className="devicon-vscode-plain colored"></i>
    <p>VS Code</p>
  </div>

  <div className="skill-card">
    <i className="devicon-git-plain colored"></i>
    <p>Git</p>
  </div>

  <div className="skill-card">
    <i className="devicon-github-original colored"></i>
    <p>GitHub</p>
  </div>

  {/* APIs */}

  <div className="skill-card">
  <FaServer className="react-icon" />
  <p>REST APIs</p>
</div>

<div className="skill-card">
  <FaShieldAlt className="react-icon" />
  <p>JWT Auth</p>
</div>

</div>



     

    </section>
  );
}

export default Skills;