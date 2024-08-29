import { Hero, Work, About, Footer } from "../sections";

const Home = () => {
  return (
    <main className="relative">
      ;
      <section className="p-5">
        <Hero />
      </section>
      <section className="p-5">
        <Work />
      </section>
      <section className="p-5">
        <About />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
