import React, { useState } from "react";
import "../styles/custom.scss";

const ImageGallery: React.FC<{ images: any[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image: any) => {
    setSelectedImage(image.image.src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      <div className="image-grid">
        {images.map((image: any, i: number) => (
          <img
            key={i}
            src={image.image.src}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => handleClick(image)}
            className="grid-item"
          />
        ))}
      </div>
      
      {selectedImage && (
        <div className="modal">
          <span
            className="close d-flex align-items-center justify-content-center"
            onClick={handleCloseModal}
          >
            &times;
          </span>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" />
            <span>{selectedImage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
