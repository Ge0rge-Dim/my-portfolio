import SectionHeader from "../components/SectionHeader";
import Code from "../assets/images/projectTwo/code.webp";
import ImageModal from "../components/ImageModal";

const Prototype = () => {
  return (
    <section className="medium-container mt-32 mb-16 font-roboto text-primary-light">
      <div className="flex flex-col w-full">
        <SectionHeader title="Coded Prototype" number="07" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8 pb-20">
          <h2 className="text-4xl items-center font-medium">
            Where the Fun
            <br />
            Begins
          </h2>
          <div>
            <p className="text-lg pb-7">
              Driven by my passion for exploring new challenges, I decided to
              take the project a step further by transforming my high-fidelity
              wireframe into a coded prototype. Using ReactJS and Tailwind CSS,
              I brought the design to life, turning vision into reality. The
              process was challenging but incredibly rewarding. Take a look at
              the code in action, and explore the live prototype below.
            </p>
            <a href="https://edgingtons.netlify.app/">
              <button className="font-normal text-lg max-sm:text-base text-primary-dark bg-green-300 py-2 px-7 hover:bg-green-400 mt-3 rounded transition-all duration-300 ease-in-out">
                Prototype
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <ImageModal imgSrc={Code} altText="" />
        </div>
      </div>
    </section>
  );
};

export default Prototype;
