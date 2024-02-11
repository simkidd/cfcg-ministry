import React, { useState } from "react";
import "../styles/custom.scss";
import type { Gallery } from "../data/gallery.data";

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
          <img
            key={i}
            src={image.image.src}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => handleClick(i)}
            className="grid-item"
          />
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
            <img
              src={images[selectedImageIndex].image.src}
              alt={`Image ${selectedImageIndex + 1}`}
            />
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
