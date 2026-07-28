import "./ImageViewer.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageViewer({
  images,
  currentImage,
  setCurrentImage,
  isOpen,
  onClose,
}) {

  if (!isOpen) return null;

  const previousImage = () => {
    setCurrentImage(
      (currentImage - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImage(
      (currentImage + 1) % images.length
    );
  };

  return (

    <div className="viewer">

      <div className="viewer-overlay" onClick={onClose}></div>

      <div className="viewer-content">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <button
          className="nav-btn left"
          onClick={previousImage}
        >
          <FaChevronLeft />
        </button>

        <img
          src={images[currentImage]}
          alt="Project Preview"
        />

        <button
          className="nav-btn right"
          onClick={nextImage}
        >
          <FaChevronRight />
        </button>

        <p className="counter">
          {currentImage + 1} / {images.length}
        </p>

      </div>

    </div>

  );
}

export default ImageViewer;