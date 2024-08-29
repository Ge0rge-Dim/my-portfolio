import Footer from "../sections/Footer";
import {
  Hero,
  ProjectGoals,
  Prototype,
  UserResearch,
  Branding,
  DesignSystem,
  Wireframes,
  Testing,
  Learned,
} from "../expendSections";

const Expend = () => {
  return (
    <main className="relative">
      ;
      <section className="px-5">
        <Hero />
      </section>
      <section className="px-5">
        <ProjectGoals />
      </section>
      <section>
        <UserResearch />
      </section>
      <section className="px-5">
        <Branding />
      </section>
      <section className="px-5">
        <DesignSystem />
      </section>
      <section className="px-5">
        <Wireframes />
      </section>
      <section>
        <Testing />
      </section>
      <section className="px-5">
        <Prototype />
      </section>
      <section className="px-5">
        <Learned />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Expend;
