import "./Projects.css";
import { useState, useEffect } from "react";

import retail1 from "../../assets/projects/retail1.png";
import retail2 from "../../assets/projects/retail2.png";
import retail3 from "../../assets/projects/retail3.png";
import fmcg from "../../assets/projects/fmcg.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ImageViewer from "../ImageViewer/ImageViewer";

function Projects() {

  const retailImages = [retail1, retail2, retail3];

  const [currentRetailImage, setCurrentRetailImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [viewerImages, setViewerImages] = useState([]);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {

      setCurrentRetailImage((prev) => (prev + 1) % retailImages.length);

    }, 3000);

    return () => clearInterval(interval);

  }, [isPaused]);

  const openRetailViewer = () => {
    setViewerImages(retailImages);
    setViewerIndex(currentRetailImage);
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

          {/* ================= Retail ================= */}

          <div className="project-card">

            <div
              className="project-image"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

              <img
                src={retailImages[currentRetailImage]}
                alt="Retail Dashboard"
              />

            </div>

            <div className="slider-controls">

              <button
                className="slider-nav"
                onClick={() =>
                  setCurrentRetailImage(
                    (currentRetailImage - 1 + retailImages.length) %
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
                      currentRetailImage === index
                        ? "dot active"
                        : "dot"
                    }
                  ></span>

                ))}

              </div>

              <button
                className="slider-nav"
                onClick={() =>
                  setCurrentRetailImage(
                    (currentRetailImage + 1) %
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
                Interactive Power BI dashboard with KPI cards,
                DAX measures, Power Query transformations,
                customer insights and market analysis.
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

          {/* ================= FMCG ================= */}

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
                Power BI dashboard for demand forecasting,
                inventory analysis, promotions and business insights.
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