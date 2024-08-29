import LandingMoodboard from "../assets/images/projectTwo/moodboard-landing.webp";
import LogoMoodboard from "../assets/images/projectTwo/moodboard-logo.webp";
import ImageModal from "../components/ImageModal";

const Inspiration = () => {
  return (
    <section className="pt-32 pb-40 font-roboto text-primary-dark bg-primary-light p-5">
      <div className="flex flex-col medium-container w-full">
        <div className="flex flex-row justify-between pb-2">
          <h3 className="text-lg">Inspiration</h3>
          <p className="text-lg">04</p>
        </div>
        <div className="border bg-primary-dark opacity-30 h-1"></div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl max-sm:text-3xl items-center font-medium">
            Curating Inspiration—
            <br />
            Research and Moodboarding
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              After decoding the logo and analyzing the firm's essence, I
              shifted my focus to researching the competition. I identified key
              competitors and studied their branding strategies to understand
              industry trends. To gather visual inspiration, I created two
              distinct mood boards: one for the landing page design and another
              for the logo.
            </p>
          </div>
          <div className="flex flex-row max-sm:flex-col mt-10 gap-10">
            <ImageModal
              imgSrc={LandingMoodboard}
              altText="Moodboard with landing pages"
            />
            <ImageModal imgSrc={LogoMoodboard} altText="Moodboard with logos" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
