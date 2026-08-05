import "./Projects.css";
import {
    useState,
    useEffect
} from "react";

import retail1 from "../../assets/projects/retail1.png";
import retail2 from "../../assets/projects/retail2.png";
import retail3 from "../../assets/projects/retail3.png";
import fmcg from "../../assets/projects/fmcg.png";

import login from "../../assets/projects/vertexops/login.png";
import dashboard from "../../assets/projects/vertexops/dashboard.png";
import users from "../../assets/projects/vertexops/users.png";
import adminTickets from "../../assets/projects/vertexops/admin-tickets.png";
import adminProfile from "../../assets/projects/vertexops/admin-profile.png";
import employeeDashboard from "../../assets/projects/vertexops/employee-dashboard.png";
import employeeTickets from "../../assets/projects/vertexops/employee-tickets.png";
import employeeProfile from "../../assets/projects/vertexops/employee-profile.png";
import api from "../../assets/projects/vertexops/api.png";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
} from "react-icons/fa";

import ImageViewer from "../ImageViewer/ImageViewer";

function Projects() {

    /* ===========================
       IMAGE ARRAYS
    =========================== */

    const vertexImages = [
        login,
        dashboard,
        users,
        adminTickets,
        employeeDashboard,
        employeeTickets,
        adminProfile,
        employeeProfile,
        api,
    ];

    const retailImages = [
        retail1,
        retail2,
        retail3,
    ];

    /* ===========================
       STATES
    =========================== */

    const [vertexIndex, setVertexIndex] = useState(0);

    const [retailIndex, setRetailIndex] = useState(0);

    const [pauseVertex, setPauseVertex] = useState(false);

    const [pauseRetail, setPauseRetail] = useState(false);

    const [viewerImages, setViewerImages] = useState([]);

    const [viewerIndex, setViewerIndex] = useState(0);

    const [viewerOpen, setViewerOpen] = useState(false);

    /* ===========================
       AUTO SLIDER
    =========================== */

    useEffect(() => {

        if (pauseVertex) return;

        const interval = setInterval(() => {

            setVertexIndex((prev) =>

                (prev + 1) % vertexImages.length

            );

        }, 3000);

        return () => clearInterval(interval);

    }, [pauseVertex]);

    useEffect(() => {

        if (pauseRetail) return;

        const interval = setInterval(() => {

            setRetailIndex((prev) =>

                (prev + 1) % retailImages.length

            );

        }, 3000);

        return () => clearInterval(interval);

    }, [pauseRetail]);

    /* ===========================
       IMAGE VIEWER
    =========================== */

    const openVertexViewer = () => {

        setViewerImages(vertexImages);

        setViewerIndex(vertexIndex);

        setViewerOpen(true);

    };

    const openRetailViewer = () => {

        setViewerImages(retailImages);

        setViewerIndex(retailIndex);

        setViewerOpen(true);

    };

    const openFMCGViewer = () => {

        setViewerImages([fmcg]);

        setViewerIndex(0);

        setViewerOpen(true);

    };
    return (
        <>
      <section className="projects" id="projects" data-aos="fade-up">

        <div className="projects-title">
          <span>PROJECTS</span>
          <h2>Featured Work</h2>
        </div>

        <div className="projects-grid">

          {/* =======================
              FEATURED PROJECT (VertexOps)
          ======================== */}

          <div className="featured-card">

            <div
              className="featured-image"
              onMouseEnter={() => setPauseVertex(true)}
              onMouseLeave={() => setPauseVertex(false)}
            >

              <img
                src={vertexImages[vertexIndex]}
                alt="VertexOps"
              />

              <div className="slider-controls">

                <button
                  className="slider-nav"
                  onClick={() =>
                    setVertexIndex(
                      (vertexIndex - 1 + vertexImages.length) %
                        vertexImages.length
                    )
                  }
                >
                  ❮
                </button>

                <div className="slider-dots">

                  {vertexImages.map((_, index) => (

                    <span
                      key={index}
                      className={
                        vertexIndex === index
                          ? "dot active"
                          : "dot"
                      }
                    ></span>

                  ))}

                </div>

                <button
                  className="slider-nav"
                  onClick={() =>
                    setVertexIndex(
                      (vertexIndex + 1) %
                        vertexImages.length
                    )
                  }
                >
                  ❯
                </button>

              </div>

            </div>

            <div className="featured-content">

              <span className="featured-badge">
                ⭐ Featured Project
              </span>

              <h2>
                VertexOps
              </h2>

              <h4>
                Enterprise IT Ticket Management System
              </h4>

              <p>

                VertexOps is a production-ready
                <strong> Enterprise IT Ticket Management System </strong>

                built to streamline IT support operations
                through secure authentication,
                role-based access control,
                centralized ticket management,
                and cloud deployment.

              </p>

              <p>

                Developed using
                <strong>

                  React,
                  FastAPI,
                  Python,
                  PostgreSQL,
                  Oracle Database,
                  SQLAlchemy,
                  JWT Authentication,
                  REST APIs,
                  Vercel,
                  and Render

                </strong>

                demonstrating modern enterprise
                full-stack development.

              </p>

              <div className="feature-list">

                <span>✔ JWT Authentication</span>

                <span>✔ Role Based Access Control</span>

                <span>✔ Ticket Lifecycle Management</span>

                <span>✔ User Management</span>

                <span>✔ Employee & Admin Portals</span>

                <span>✔ REST APIs</span>

                <span>✔ PostgreSQL Database</span>

                <span>✔ Oracle Database</span>

                <span>✔ Cloud Deployment</span>

                <span>✔ Responsive UI</span>

              </div>

              <div className="project-tags">

                <span>React</span>

                <span>FastAPI</span>

                <span>Python</span>

                <span>PostgreSQL</span>

                <span>Oracle</span>

                <span>SQLAlchemy</span>

                <span>JWT</span>

                <span>REST API</span>

                <span>Vercel</span>

                <span>Render</span>

              </div>

              <div className="project-buttons">

                <a
                  href="https://github.com/devaraj24126-gif/VertexOps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://vertex-ops-gray.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="https://vertexops-api.onrender.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode />
                  API Docs
                </a>

                <button onClick={openVertexViewer}>
                  <FaExternalLinkAlt />
                  Preview
                </button>

              </div>

            </div>

          </div>

          {/* ================= Retail Dashboard ================= */}

          <div className="project-card">

            <div
              className="project-image"
              onMouseEnter={() => setPauseRetail(true)}
              onMouseLeave={() => setPauseRetail(false)}
            >

              <img
                src={retailImages[retailIndex]}
                alt="Retail Dashboard"
              />

            </div>

            <div className="slider-controls">

              <button
                className="slider-nav"
                onClick={() =>
                  setRetailIndex(
                    (retailIndex - 1 + retailImages.length) %
                      retailImages.length
                  )
                }
              >
                ❮
              </button>

              <div className="slider-dots">

                {retailImages.map((_, index) => (

                  <span
                    key={index}
                    className={
                      retailIndex === index
                        ? "dot active"
                        : "dot"
                    }
                  ></span>

                ))}

              </div>

              <button
                className="slider-nav"
                onClick={() =>
                  setRetailIndex(
                    (retailIndex + 1) %
                      retailImages.length
                  )
                }
              >
                ❯
              </button>

            </div>

            <div className="project-content">

              <h3>Retail Sales Dashboard</h3>

              <p>
                Interactive Power BI dashboard featuring KPI cards,
                DAX measures, Power Query transformations,
                customer insights, sales performance,
                and business intelligence reporting.
              </p>

              <div className="project-tags">

                <span>Power BI</span>
                <span>DAX</span>
                <span>Power Query</span>
                <span>Excel</span>

              </div>

              <div className="project-buttons">

                <a
                  href="https://github.com/devaraj24126-gif/sales-dashboard-powerbi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <button onClick={openRetailViewer}>
                  <FaExternalLinkAlt />
                  Preview
                </button>

              </div>

            </div>

          </div>

          {/* ================= FMCG Dashboard ================= */}

          <div className="project-card">

            <div className="project-image">

              <img
                src={fmcg}
                alt="FMCG Dashboard"
              />

            </div>

            <div className="project-content">

              <h3>FMCG Demand Forecast Dashboard</h3>

              <p>
                Power BI dashboard designed for demand forecasting,
                inventory analysis, promotion tracking,
                and business performance visualization.
              </p>

              <div className="project-tags">

                <span>Power BI</span>
                <span>Analytics</span>
                <span>Excel</span>

              </div>

              <div className="project-buttons">

                <a
                  href="https://github.com/devaraj24126-gif/fmcg-demand-forecasting-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <button onClick={openFMCGViewer}>
                  <FaExternalLinkAlt />
                  Preview
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <ImageViewer
        images={viewerImages}
        currentImage={viewerIndex}
        setCurrentImage={setViewerIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />

    </>
    );
}

export default Projects;
