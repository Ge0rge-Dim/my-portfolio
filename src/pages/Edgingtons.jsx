import {
  Hero,
  Overview,
  Research,
  Inspiration,
  Logo,
  Wireframes,
  Prototype,
  Learned,
} from "../edgingtonsSections";
import Footer from "../sections/Footer";

const Edgingtons = () => {
  return (
    <main className="relative">
      ;
      <section className="p-5">
        <Hero />
      </section>
      <section className="p-5">
        <Overview />
      </section>
      <section>
        <Research />
      </section>
      <section>
        <Inspiration />
      </section>
      <section className="p-5">
        <Logo />
      </section>
      <section>
        <Wireframes />
      </section>
      <section className="p-5">
        <Prototype />
      </section>
      <section className="p-5">
        <Learned />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Edgingtons;
