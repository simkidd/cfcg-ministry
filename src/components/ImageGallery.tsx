import React, { useState } from "react";
import type { Gallery } from "../data/gallery.data";
import "../styles/custom.scss";

const ImageGallery: React.FC<{ images: Gallery[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="image-gallery">
      <div className="image-grid">
        {images.map((image, i) => (
          <div className="image-grid-wrap" key={i}>
            <img
              src={image.image.src}
              alt={image.desc}
              onClick={() => handleClick(i)}
              className="grid-item"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <span className="nav previous" onClick={handlePrevious}>
            &#10094;
          </span>
          <div className="modal-content">
            <div className="image-wrap">
              <img
                src={images[selectedImageIndex].image.src}
                alt={images[selectedImageIndex].desc}
              />
            </div>
            <div className="image-info mt-auto">
              <p className="mb-0">{images[selectedImageIndex].desc}</p>
            </div>
          </div>
          <span className="nav next" onClick={handleNext}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
