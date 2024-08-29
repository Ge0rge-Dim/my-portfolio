import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const Learned = () => {
  return (
    <section className="mt-20 mb-20 medium-container font-roboto text-primary-light">
      <>
        <SectionHeader title="What i learnded" number="08" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            Reflecting on the
            <br />
            Project
          </h2>
          <p className="text-lg font-light">
            This project was a significant challenge, taking 3 weeks to complete
            from start to finish.
          </p>
          <div className="gap-2 pt-8">
            <h2 className="font-medium text-4xl pb-2">01</h2>
            <p className="text-lg font-light">
              <span className="font-medium">Rebranding is tough</span> <br />
              Conducting thorough research on the company and analyzing the
              competition was essential before diving into the design. I learned
              that redesigning an existing brand is much more challenging than
              starting something new from scratch.
            </p>
          </div>
          <div className="gap-2 pt-8">
            <h2 className="font-medium text-4xl pb-2">02</h2>
            <p className="text-lg font-light">
              <span className="font-medium">I did it!</span> <br />
              I’m proud of what I accomplished in these 3 weeks. I managed to
              conduct research, design the brand identity, and even build a
              coded prototype—all while working a full-time job. This project
              pushed my limits and showed me what I’m capable of.
            </p>
          </div>
          <Link to="/Expend" className="w-fit">
            <button className="font-normal text-lg max-sm:text-base text-primary-dark bg-primary-light py-2 px-7 mt-3 rounded hover:bg-slate-200 transition-all duration-300 ease-in-out">
              Next Project
            </button>
          </Link>
        </div>
      </>
    </section>
  );
};

export default Learned;
