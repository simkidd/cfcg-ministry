import React, { useCallback } from "react";
import LightGallery from "lightgallery/react";
import { galleryImages } from "../data/gallery.data";
import "../styles/custom.scss";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryComp: React.FC = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const getImages = useCallback(() => {
    return galleryImages.map((item) => {
      return (
        <a key={item.id} className="gallery-item" data-src={item.image.src}>
          <img className="img-responsive" src={item.image.src} />
        </a>
      );
    });
  }, [galleryImages]);

  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgZoom]}>
        {getImages()}
      </LightGallery>
    </div>
  );
};

export default GalleryComp;
