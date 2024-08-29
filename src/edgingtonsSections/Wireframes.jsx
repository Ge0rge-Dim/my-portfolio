import LandingPage from "../assets/images/projectTwo/landing-page.webp";
import ImageModal from "../components/ImageModal";

const Wireframes = () => {
  return (
    <section className="pt-32 font-roboto text-primary-dark bg-primary-light p-5">
      <div className="flex flex-col medium-container w-full">
        <div className="flex flex-row justify-between pb-2">
          <h3 className="text-lg"> Wireframes</h3>
          <p className="text-lg">06</p>
        </div>
        <div className="border bg-primary-dark opacity-30 h-1"></div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8 pb-20">
          <h2 className="text-4xl items-center font-medium">
            Mid & High Fidelity
            <br />
            Wireframes
          </h2>
          <p className="text-lg">
            After finalizing the corporate identity, I moved on to creating
            wireframes for the landing page. I developed both a mid-fidelity and
            a high-fidelity wireframe to progressively refine the design. Below,
            you can see these wireframes alongside a comparison with the firm's
            current site.
          </p>
        </div>
        <div className="mt-8 mb-40">
          <ImageModal imgSrc={LandingPage} altText="" />
        </div>
      </div>
    </section>
  );
};

export default Wireframes;
