import SectionHeader from "../components/SectionHeader";

const ProjectGoals = () => {
  return (
    <section className="medium-container my-32 font-roboto text-primary-light">
      <>
        <SectionHeader title="Overview" number="02" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="flex flex-col gap-2 pt-8">
            <h3 className="text-3xl font-normal">Problem</h3>
            <p className="text-lg">
              Managing personal finances can be overwhelming. Many people
              struggle with tracking their monthly expenses, and existing tools
              often complicate the process with cluttered interfaces and
              excessive features, leading to frustration and financial
              mismanagement.
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-8">
            <h3 className="text-3xl font-normal">Solution</h3>
            <p className="text-lg">
              To address this, I designed a mobile app that simplifies expense
              tracking. The app features a clear, straightforward user
              interface, making it easy for users to manage their finances
              without confusion or stress.
            </p>
          </div>
        </div>
      </>
    </section>
  );
};

export default ProjectGoals;
