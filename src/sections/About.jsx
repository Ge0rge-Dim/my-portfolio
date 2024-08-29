import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BentoGrid from "../components/BentoGrid";
import Lightbox from "../components/Lightbox";
import { aboutImages } from "../constants";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(Object.values(aboutImages)[index]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col max-container w-full font-roboto text-primary-light mt-32 max-sm:mt-20 mb-10">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mb-10">
          <h2 className="text-5xl max-sm:text-4xl">
            Some Things
            <br />
            About Me
          </h2>
          <div className="text-xl max-sm:text-lg font-light">
            <p className="pb-5">
              When I'm not designing user interfaces, I'm usually diving into
              new creative projects. Whether exploring 3D art or crafting
              striking visuals, I’m always seeking my next creative challenge.
              With a background in graphic design, I bring a fresh and
              innovative perspective to every project.
            </p>
          </div>
        </div>

        <BentoGrid onImageClick={handleImageClick} />

        <AnimatePresence>
          {selectedImage && (
            <Lightbox
              src={selectedImage}
              alt="Selected"
              onClose={handleClose}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default About;
