import arrowRight from "../assets/icons/Arrow-Right.svg";
import ExpendThumnail from "../assets/images/projectOne/project-one-thumbnail.png";
import EdgingtonsThumnail from "../assets/images/projectTwo/project-two-thumbnail.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="max-container">
      <>
        <div className="flex flex-row justify-between items-center">
          <Link to="/Expend">
            <button
              className="text-primary-light flex justify-center items-center py-3 font-roboto font-normal text-2xl max-sm:text-xl hover:text-purple-100 transition duration-300 group"
              href=""
            >
              Expend
              <img
                src={arrowRight}
                alt="arrow down icon"
                className="ml-2 w-5 transition duration-300 group-hover:translate-x-1 group-hover:text-purple-200"
              />
            </button>
          </Link>
          <p className="font-normal text-2xl max-sm:text-xl text-primary-light">
            01
          </p>
        </div>
        <div className="border bg-white"></div>
        <p className="text-primary-light opacity-90 font-extralight text-lg max-sm:text-base mt-2">
          Personal Project - UI/UX Design - Prototype
        </p>
        <Link to="/Expend">
          <div className="mt-6 relative cursor-pointer rounded-xl overflow-hidden group">
            <img
              src={ExpendThumnail}
              alt="First project thumbnail, with 3 mobile screens"
              className="rounded-xl transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-purple-300 bg-opacity-0 group-hover:bg-opacity-5 transition duration-300 ease-in-out rounded-xl"></div>
          </div>
        </Link>
      </>
      <div className="mt-12">
        <div className="flex flex-row justify-between items-center">
          <Link to="/Edgingtons">
            <button
              className="text-primary-light flex justify-center items-center py-3 font-roboto font-normal text-2xl max-sm:text-xl hover:text-green-100 transition duration-300 group"
              href=""
            >
              Edgingtons
              <img
                src={arrowRight}
                alt="arrow down icon"
                className="ml-2 w-5 transition duration-300 group-hover:translate-x-1 group-hover:text-green-200"
              />
            </button>
          </Link>
          <p className="font-normal text-2xl max-sm:text-xl text-primary-light">
            02
          </p>
        </div>
        <div className="border bg-white"></div>
        <p className="text-primary-light opacity-90 font-extralight text-lg max-sm:text-base mt-2">
          School Assignment - Rebranding - Coded Prototype
        </p>
        <Link to="/Edgingtons">
          <div className="mt-6 relative cursor-pointer rounded-xl overflow-hidden group">
            <img
              src={EdgingtonsThumnail}
              alt="Second project thumbnail, with a logo"
              className="rounded-xl transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-green-300 bg-opacity-0 group-hover:bg-opacity-5 transition duration-300 ease-in-out rounded-xl"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Work;
