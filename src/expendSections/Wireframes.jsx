import ImageModal from "../components/ImageModal";
import MidFiWireframes from "../assets/images/projectOne/mid-fi-wireframes.png";
import SectionHeader from "../components/SectionHeader";

const Wireframes = () => {
  return (
    <section className="flex flex-col w-full my-44 font-roboto text-primary-light">
      <div className="medium-container">
        <SectionHeader title="Mid-Fi" number="06" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            Medium Fidelity <br />
            Wireframes
          </h2>
          <p className="text-lg">
            To refine the app’s interactions and user flows, I created{" "}
            <span className="font-medium">53 medium fidelity wireframes</span>.
            These screens outline the mobile version of the application,
            providing a foundation for user testing and further iteration.
          </p>
        </div>
      </div>
      <div className="max-container mt-20">
        <ImageModal
          imgSrc={MidFiWireframes}
          altText="This is a design system"
        />
      </div>
    </section>
  );
};

export default Wireframes;
