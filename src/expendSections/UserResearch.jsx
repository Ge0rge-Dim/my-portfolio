import UserFlow from "../assets/images/projectOne/user-flow.webp";
import ImageModal from "../components/ImageModal";

const UserResearch = () => {
  return (
    <section className="flex flex-col py-32 font-roboto text-primary-dark bg-primary-light p-5">
      <div className="medium-container w-full">
        <div className="flex flex-row justify-between pb-2">
          <h3 className="text-lg">Research</h3>
          <p className="text-lg">03</p>
        </div>
        <div className="border bg-primary-dark opacity-30 h-1"></div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            User research — <br />
            findings & insights
          </h2>
          <p className="text-lg">
            To understand user behavior and pain points, I did a small survey
            with <span className="font-medium">14 participants</span>. Key
            insights guided the app's design and functionality. Here's what I
            uncovered:
          </p>
          <div className="gap-2 pt-8">
            <h2 className="font-semibold text-4xl max-sm:text-3xl">59%</h2>
            <p className="text-lg">
              <span className="font-medium">
                Of respondents are hesitant to link their credit cards to
                start-ups for automatic expense updates
              </span>
              <br />
              This reluctance stems from concerns about trusting newly
              established companies, especially those without established
              reputations or reviews.
            </p>
          </div>
          <div className="gap-2 pt-8">
            <h2 className="font-semibold text-4xl max-sm:text-3xl">78%</h2>
            <p className="text-lg">
              <span className="font-medium">
                Found other expense management tools confusing and overwhelming.
              </span>
              <br />
              Most participants felt that existing tools on the market were
              unclear and lacked straightforward navigation, leading to
              frustration and a poor user experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-40 gap-10">
          <h2 className="text-4xl items-center max-sm:col-span-2 font-medium">
            From Insights to
            <br />
            Action
          </h2>
          <p className="text-lg max-sm:col-span-2">
            Building on these insights, I crafted the user flow. This visual map
            outlines the journey users take within the app, ensuring a logical,
            efficient, and user-friendly experience from start to finish.
          </p>
        </div>
      </div>
      <div className="max-container mt-20">
        <ImageModal imgSrc={UserFlow} altText="User flow mapping image" />
      </div>
    </section>
  );
};

export default UserResearch;
