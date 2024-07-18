import Button from "../components/Button";
import arrowDown from "../assets/icons/arrowdown.svg";
import Secondary from "../components/Secondary";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 w-full max-w-4xl p-8 max-container mt-40 mb-20 max-lg:my-10">
      <h1 className="text-primary-light mb-5 text-5xl max-lg:text-3xl text-center font-thin leading-tight">
        Hello! I'm{" "}
        <span className="text-secondary-dark font-medium font-katibeh text-7xl max-xl:text-5xl">
          George
        </span>
        , a product designer with a Front End Developement knowledge.
      </h1>
      <div className="flex gap-2">
        <Button label="Resume" iconURL={arrowDown} />
        <Secondary label="Contact" />
      </div>
    </section>
  );
};

export default Hero;
