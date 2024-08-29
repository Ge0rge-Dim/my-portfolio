import { useEffect } from "react";
import { motion } from "framer-motion";

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onClose]);

  return (
    <motion.div
      className="fixed top-0 left-0 p-5 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="max-sm:w-full max-container object-contain cursor-zoom-out rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Lightbox;
