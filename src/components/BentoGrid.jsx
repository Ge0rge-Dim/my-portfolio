import { aboutImages } from "../constants";
import { motion } from "framer-motion";

const BentoGrid = ({ onImageClick, selectedId }) => {
  const imagesArray = Object.values(aboutImages);

  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:auto-rows-[250px] auto-rows-[400px] gap-3 mt-10 max-container">
      {imagesArray.map((image, index) => (
        <motion.div
          key={index}
          className={`rounded-2xl ${
            index === 0 || index === 6 ? "col-span-2 max-sm:col-span-1" : ""
          } ${index === 3 ? "max-lg:row-span-2 max-sm:row-span-1" : ""}`}
          onClick={() => onImageClick(index)}
          layoutId={`image-${index}`}
        >
          <motion.img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-xl cursor-zoom-in"
            layoutId={`image-${index}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
