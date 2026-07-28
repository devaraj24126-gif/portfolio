import "./Certifications.css";
import { useState } from "react";

import aws from "../../assets/certificates/aws.jpeg";
import java from "../../assets/certificates/java.jpeg";
import powerbi from "../../assets/certificates/powerbi.jpeg";
import analytics from "../../assets/certificates/analytics.png";
import excel from "../../assets/certificates/excel.png";

import ImageViewer from "../ImageViewer/ImageViewer";

function Certifications() {

  const certificates = [

    {
      title: "Fundamentals of Data Analytics",
      issuer: "Infosys Springboard",
      year: "June 2026",
      image: analytics,
    },

    {
      title: "Microsoft Excel for Data Analyst",
      issuer: "Infosys Springboard",
      year: "June 2026",
      image: excel,
    },

    {
      title: "Microsoft Power BI",
      issuer: "Infosys Springboard",
      year: "July 2026",
      image: powerbi,
    },

    {
      title: "Java Essentials",
      issuer: "Infosys Springboard",
      year: "July 2025",
      image: java,
    },

    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      year: "October 2025",
      image: aws,
    },

  ];

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  return (

   <section
  className="certifications"
  id="certifications"
  data-aos="zoom-in"
>

      <div className="cert-title">

        <span>CERTIFICATIONS</span>

        <h2>My Certifications</h2>

      </div>

      <div className="cert-grid">

        {certificates.map((cert,index)=>(

          <div
            className="cert-card"
            key={index}
            onClick={()=>{
              setViewerIndex(index);
              setViewerOpen(true);
            }}
          >

            <img
              src={cert.image}
              alt={cert.title}
            />

            <div className="cert-info">

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <span>{cert.year}</span>

            </div>

          </div>

        ))}

      </div>

      <ImageViewer

        images={certificates.map(c=>c.image)}

        currentImage={viewerIndex}

        setCurrentImage={setViewerIndex}

        isOpen={viewerOpen}

        onClose={()=>setViewerOpen(false)}

      />

    </section>

  );

}

export default Certifications;