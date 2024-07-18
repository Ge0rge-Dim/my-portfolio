import React, { useState } from "react";
import BentoGrid from "../components/BentoGrid";
import Lightbox from "../components/Lightbox";
import { aboutImages } from "../constants";

const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex + 1) % Object.keys(aboutImages).length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) =>
        (prevIndex - 1 + Object.keys(aboutImages).length) %
        Object.keys(aboutImages).length
    );
  };

  const imagesArray = Object.values(aboutImages);

  return (
    <section
      id="about"
      className="flex flex-col p-8 my-20 w-full max-w-7xl max-container"
    >
      <>
        <h2 className="text-primary-light text-3xl">
          In my free time i love to coding, <br /> sketching and create digital
          art!
        </h2>
        <BentoGrid onImageClick={openLightbox} />
        <Lightbox
          isOpen={lightboxOpen}
          imgSrc={imagesArray[currentImage]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </>
    </section>
  );
};

export default About;
