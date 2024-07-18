import { Nav, Hero, Work, About, Contact, Footer } from "./sections";

const App = () => (
  <main className="relative">
    <header className="">
      <Nav />
    </header>
    <section className="p-5">
      <Hero />
    </section>
    <section className="bg-blue-400 p-5">
      <Work />
    </section>
    <section className="">
      <About />
    </section>
    <section className="bg-red-400 p-5">
      <Contact />
    </section>
    <section className="bg-slate-300 p-5">
      <Footer />
    </section>
  </main>
);

export default App;
