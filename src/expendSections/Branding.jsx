import BrandLogo from "../assets/images/projectOne/brand-logo.png";
import SectionHeader from "../components/SectionHeader";

const Branding = () => {
  return (
    <section className="medium-container my-32 font-roboto text-primary-light">
      <>
        <SectionHeader title="Logo design" number="04" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            Building a <br />
            Visual Identity
          </h2>
          <p className="text-lg">
            To complement the app's purpose and user experience, I designed a
            logo that captures the essence of Expend while remaining visually
            cohesive with the app's overall aesthetic.
          </p>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-10 pt-20">
          <img
            src={BrandLogo}
            alt="Brand's logo in a different color backgrounds"
            className="col-span-2"
          />
          <div className="flex flex-col max-sm:col-span-2 gap-4 pt-8">
            <h2 className="font-medium text-3xl">Typography</h2>
            <p className="text-lg">
              I used <span className="font-medium text-[#BFABEF]">Baloo</span>{" "}
              font, which is a rounded, playful typeface. This font was chosen
              to convey a sense of approachability and ease of use.
            </p>
          </div>
          <div className="flex flex-col max-sm:col-span-2 gap-3 pt-8">
            <h2 className="font-medium text-3xl">Colors</h2>
            <p className="text-lg">
              For the colors, I chose light purple for the{" "}
              <span className="font-medium text-[#BFABEF]">'X'</span> and the{" "}
              <span className="font-medium text-[#BFABEF]">underline</span>, to
              evoke a soft, calm feeling, fostering trust and dependability. The
              very dark purple for the other letters adds a professional tone,
              reinforcing the app’s reliability as a financial management tool.
            </p>
          </div>
        </div>
      </>
    </section>
  );
};

export default Branding;
