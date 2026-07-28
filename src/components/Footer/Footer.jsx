import "./Footer.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer" data-aos="fade">

      <div className="footer-logo">
        Devaraj<span>.</span>
      </div>

      <p>© 2026 Devaraj P. All Rights Reserved.</p>

      <div className="footer-icons">

        <a
          href="https://github.com/devaraj24126-gif"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/deva-p-883651329"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <IoChevronUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;