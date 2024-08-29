import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const Learned = () => {
  return (
    <section className="mt-44 mb-20 medium-container font-roboto text-primary-light">
      <>
        <SectionHeader title="Lesson learnded" number="09" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl max-sm:text-3xl items-center font-medium">
            What I learned during
            <br />
            the Project
          </h2>
          <p className="text-lg font-light">
            Through this project, I gained invaluable insights into the
            importance of user research and design systems. Conducting surveys
            and usability tests not only informed my design decisions but also
            highlighted how critical these processes are for creating an
            effective user experience.
          </p>
          <div className="gap-2 pt-8">
            <h3 className="font-medium text-4xl max-sm:text-3xl pb-2">01</h3>
            <p className="text-lg font-light">
              <span className="font-medium">
                Research and testing play a crucial role before and during
                design.
              </span>{" "}
              <br />
              Even a small survey revealed insights I hadn’t anticipated.
              Additionally, usability testing highlighted features and issues
              that needed improvement, enhancing the overall user experience.
            </p>
          </div>
          <div className="gap-2 pt-8">
            <h3 className="font-medium text-4xl max-sm:text-3xl pb-2">02</h3>
            <p className="text-lg font-light">
              <span className="font-medium">
                A design system can significantly streamline the design process.
              </span>{" "}
              <br />
              By creating a system with reusable elements, I accelerated the
              design process and ensured consistency across the application,
              reducing user confusion.
            </p>
          </div>
          <Link to="/Edgingtons" className="w-fit">
            <button className="font-light text-lg bg-[#7752D3] py-2 px-7 mt-3 rounded hover:bg-[#5C37BB] transition-all duration-300 ease-in-out">
              Next Project
            </button>
          </Link>
        </div>
      </>
    </section>
  );
};

export default Learned;
