import SectionHeader from "../components/SectionHeader";
import HeroImage from "../assets/images/projectTwo/project-two-thumbnail.png";
import Mockup from "../assets/images/projectTwo/brand-identity-mockup.webp";
import ImageModal from "../components/ImageModal";

const Logo = () => {
  return (
    <section className="medium-container my-32 font-roboto text-primary-light">
      <div className="flex flex-col w-full">
        <SectionHeader title="Brand Identity" number="05" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8 pb-20">
          <h2 className="text-4xl items-center font-medium">
            Creating a New
            <br />
            Identity
          </h2>
          <p className="text-lg">
            The existing logo was already minimalistic, which presented a unique
            challenge in redesigning it. My goal was to enhance its simplicity
            while embedding deeper meaning.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-32">
          <img
            src={HeroImage}
            alt="First logo concept"
            className="col-span-2"
          />
          <div className="max-sm:col-span-2">
            <h3 className="font-medium text-3xl">
              Color, Typography & Kerning
            </h3>
            <p className="pt-4 text-lg">
              I made subtle adjustments to the color of the letters, opting for
              a slightly darker shade to enhance visibility and modernize the
              look. The font used closely resembles the original, preserving the
              brand’s established identity. Additionally, the kerning between
              the "s" in both words has been maintained, ensuring the logo's
              readability and visual connection remains strong.
            </p>
          </div>
          <div className="max-sm:col-span-2">
            <h3 className="font-medium text-3xl">Icon</h3>
            <p className="pt-4 text-lg">
              To reinforce the firm’s commitment to environmental
              sustainability, I introduced a green icon to the left of the text.
              This icon, representing two buildings, serves as a visual nod to
              the firm's eco-friendly ethos and architectural focus.
            </p>
          </div>
        </div>
        <div className="mt-32 mb-12">
          <ImageModal imgSrc={Mockup} altText="" />
        </div>
      </div>
    </section>
  );
};

export default Logo;
