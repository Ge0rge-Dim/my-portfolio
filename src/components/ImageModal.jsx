import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({ imgSrc, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        closeModal();
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isOpen, closeModal]);

  return (
    <>
      <img
        src={imgSrc}
        alt={altText}
        onClick={openModal}
        className="cursor-zoom-in"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bg-primary-light inset-0 z-50 flex items-center justify-center cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              src={imgSrc}
              alt={altText}
              className="max-h-full max-w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageModal;
