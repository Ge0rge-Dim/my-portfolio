import { aboutImages } from "../constants";

const BentoGrid = ({ onImageClick }) => {
  const imagesArray = Object.values(aboutImages);

  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 auto-rows-[400px] gap-3 pt-10">
      {imagesArray.map((image, index) => (
        <div
          key={index}
          className={`rounded-2xl ${
            index === 0 || index === 6 ? "col-span-2 max-sm:col-span-1" : ""
          } ${index === 3 ? "max-lg:row-span-2 max-sm:row-span-1" : ""}`}
          onClick={() => onImageClick(index)}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
