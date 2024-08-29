import UiKit from "../assets/images/projectOne/design-system.png";
import ImageModal from "../components/ImageModal";
import SectionHeader from "../components/SectionHeader";

const DesignSystem = () => {
  return (
    <section className="my-44 font-roboto text-primary-light">
      <div className="medium-container">
        <SectionHeader title="Consistency" number="05" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            Creating a Simple
            <br />
            Design System
          </h2>
          <p className="text-lg">
            To ensure a consistent user experience across the app, I developed a
            straightforward design system. This system includes key reusable
            components such as spacing, colors, font sizes, and UI elements,
            which help maintain uniformity throughout the app’s interface.
          </p>
        </div>
      </div>
      <div className="max-container mt-20">
        <ImageModal
          imgSrc={UiKit}
          altText="A design system for a finance mobile app"
        />
      </div>
    </section>
  );
};

export default DesignSystem;
