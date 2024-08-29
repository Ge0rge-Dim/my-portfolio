import heroImage from "../assets/images/projectOne/expend-hero-image.webp";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="medium-container my-24 font-roboto text-primary-light">
      <>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="small-container max-sm:mb-4"
        >
          <img src={heroImage} alt="Project hero image" />
        </motion.div>
        <SectionHeader title="Project" number="01" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div className="pt-8 space-y-3">
            <h1 className="text-6xl max-sm:text-5xl font-medium">Expend</h1>
            <h2 className="text-3xl max-sm:text-2xl font-normal">
              A Personal <span className="text-[#BFABEF]">Finance</span> Mobile
              App
            </h2>
            <p className="text-lg">
              Expend is a mobile app designed to help users manage their
              expenses, track spending habits, and achieve financial goals
              through a user-friendly, visually appealing interface.
            </p>
            <a href="#prototype">
              <button className="font-light text-lg max-sm:text-base bg-[#7752D3] py-2 px-7 mt-7 rounded hover:bg-[#5C37BB] transition-all duration-300 ease-in-out">
                Prototype
              </button>
            </a>
          </div>
          <div className="flex justify-end items-baseline max-sm:justify-start gap-10 pt-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-normal max-sm:text-2xl">Timeline</h3>
              <p className="text-xl max-sm:text-base">2 Weeks</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-normal max-sm:text-2xl">Role</h3>
              <p className="text-xl max-sm:text-base">UI/UX Designer</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-normal max-sm:text-2xl">Tools</h3>
              <p className="text-lg max-sm:text-base">Figma</p>
              <p className="text-lg max-sm:text-base">Illustrator</p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Hero;
