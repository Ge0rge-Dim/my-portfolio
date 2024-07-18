import React, { useEffect, useState } from "react";
import ArrowLeft from "../assets/icons/Arrow-Left.svg";
import ArrowRight from "../assets/icons/Arrow-Right.svg";
import Close from "../assets/icons/Close.svg";

const Lightbox = ({ isOpen, imgSrc, onClose, onNext, onPrev }) => {
  const [visible, setVisible] = useState(false);
  const [fadeType, setFadeType] = useState("fade-enter");

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setFadeType("fade-enter");
    } else {
      setFadeType("fade-exit");
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (fadeType === "fade-exit") {
      setVisible(false);
    }
  };

  return (
    visible && (
      <div
        className={`fixed inset-0 z-20 w-full flex items-center justify-center bg-primary-dark bg-opacity-75 ${fadeType}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="relative p-20 flex items-center">
          <button
            className="bg-primary-dark rounded-full p-1 hover:bg-opacity-70 absolute left-5 max-md:w-7 max-md:h-7"
            onClick={onPrev}
          >
            <img src={ArrowLeft} alt="Arrow left icon" />
          </button>
          <img
            src={imgSrc}
            alt="Image full view"
            className="max-w-full max-h-full rounded-3xl"
          />
          <button
            className="p-1 bg-primary-dark rounded-full hover:bg-opacity-70 absolute right-5 max-md:w-7 max-md:h-7"
            onClick={onNext}
          >
            <img src={ArrowRight} alt="Arrow right icon" />
          </button>
          <button
            className="absolute top-0 right-0 m-4 max-md:w-8 max-md:h-8"
            onClick={onClose}
          >
            <img src={Close} alt="Close menu icon" />
          </button>
        </div>
      </div>
    )
  );
};

export default Lightbox;
