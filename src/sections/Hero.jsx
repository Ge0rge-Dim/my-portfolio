import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col mt-40 max-sm:my-24 mb-48 text-primary-light font-roboto font-light max-container">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <h1 className="text-9xl max-sm:text-6xl font-medium leading-tight">
          Hey, <br />
          I'm George
        </h1>
      </motion.div>
      <div className="flex justify-end text-2xl max-sm:text-xl">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p>
            — a UI/UX designer based in{" "}
            <span className="font-normal text-secondary-dark">Greece</span> who
            loves turning ideas into intuitive digital experiences. While design
            is my forte, I occasionally code to bring my visions to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
