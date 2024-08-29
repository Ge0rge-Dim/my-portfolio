import HeroImage from "../assets/images/projectTwo/project-two-thumbnail.png";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="medium-container mt-24 font-roboto text-primary-light">
      <>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={HeroImage} alt="Project hero image" className=" pb-24" />
        </motion.div>
        <SectionHeader title="Project" number="01" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div className="flex flex-col pt-8 gap-4">
            <h1 className="text-6xl max-sm:text-5xl font-medium">Edgingtons</h1>
            <h2 className="text-3xl max-sm:text-2xl font-normal">
              Brand Identity Redesign and Landing Page Prototype
            </h2>
            <p className="text-lg">
              This project was a school assignment focused on redesigning the
              brand identity and landing page for 'Edgingtons Architects,' an
              architecture firm. Please note, this project is a conceptual
              exercise and not commissioned work by the firm.
            </p>
            <a
              href="https://edgingtons.netlify.app/"
              className="inline-block self-start"
            >
              <button className="font-normal text-lg max-sm:text-base text-primary-dark bg-green-300 hover:bg-green-400 py-2 px-7 mt-3 rounded transition-all duration-300 ease-in-out">
                Prototype
              </button>
            </a>
          </div>
          <div className="flex justify-end items-baseline max-sm:justify-start gap-10 pt-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-normal max-sm:text-2xl">Timeline</h3>
              <p className="text-xl max-sm:text-base">3 Weeks</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-normal max-sm:text-2xl">Role</h3>
              <p className="text-xl max-sm:text-base">UI/UX Designer</p>
              <p className="text-xl max-sm:text-base">Developer</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-normal max-sm:text-2xl">Tools</h3>
              <p className="text-lg max-sm:text-base">Figma</p>
              <p className="text-lg max-sm:text-base">Illustrator</p>
              <p className="text-lg max-sm:text-base">ReactJSX</p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Hero;
