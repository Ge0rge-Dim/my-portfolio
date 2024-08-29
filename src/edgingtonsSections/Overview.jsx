import React from "react";
import SectionHeader from "../components/SectionHeader";

const Overview = () => {
  return (
    <section className="medium-container my-24 font-roboto text-primary-light">
      <>
        <SectionHeader title="Overview" number="02" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="flex flex-col gap-2 pt-8">
            <h3 className="text-3xl font-normal">Objective</h3>
            <p className="text-lg">
              The goal was to refresh and modernize the brand identity and
              landing page, enhancing the brand’s visual elements and improving
              the user experience of the landing page.
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-8">
            <h3 className="text-3xl font-normal">Approach</h3>
            <p className="text-lg">
              I started by researching Edgingtons' brand identity, analyzing
              their logo, and studying market trends. Using these insights, I
              redesigned the logo, developed a cohesive corporate identity, and
              created a wireframe for the landing page. I then took it a step
              further by building a functional prototype, coding it myself—a key
              milestone in the project!
            </p>
          </div>
        </div>
      </>
    </section>
  );
};

export default Overview;
