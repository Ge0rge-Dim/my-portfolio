import Logo from "../assets/images/projectTwo/edgingtons-logo.webp";

const Research = () => {
  return (
    <section className="pt-32 font-roboto text-primary-dark bg-primary-light p-5">
      <div className="flex flex-col medium-container w-full">
        <div className="flex flex-row justify-between pb-2">
          <h3 className="text-lg"> Research</h3>
          <p className="text-lg">03</p>
        </div>
        <div className="border bg-primary-dark opacity-30 h-1"></div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8 pb-20">
          <h2 className="text-4xl items-center font-medium">
            Understanding <br />
            the Brand
          </h2>
          <p className="text-lg">
            To begin the rebranding, I dove into understanding the essence of
            the firm. Through careful research, I decoded their existing logo
            and discovered that the firm is deeply committed to using {""}
            <span className="font-medium text-green-700">
              environmentally
            </span>{" "}
            friendly materials. Below is the current logo and what I uncovered
            in the process:
          </p>
        </div>
        <>
          <img src={Logo} alt="" />
        </>
        <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-3 pt-16">
          <div className="flex flex-col max-sm:col-span-2 gap-3 pt-2">
            <h3 className="font-medium text-2xl">Font</h3>
            <p className="text-lg">
              The condensed font ensures readability even at smaller sizes,
              conveying professionalism and seriousness—key traits for a firm in
              this industry.
            </p>
          </div>
          <div className="flex flex-col max-sm:col-span-2 gap-3 pt-1">
            <h3 className="font-medium text-2xl">Kerning</h3>
            <p className="text-lg">
              The kerning between the "s" in both words connects them visually,
              enhancing the logo's readability and distinctiveness.
            </p>
          </div>
          <div className="flex flex-col max-sm:col-span-2 gap-3 pt-8">
            <h3 className="font-medium text-2xl">Font Weight</h3>
            <p className="text-lg">
              The contrast between the bold "Edgingtons" and the lighter
              "Architects" emphasizes the company’s strength and originality,
              while highlighting its specialized expertise.
            </p>
          </div>
          <div className="flex flex-col max-sm:col-span-2 gap-3 pt-6">
            <h3 className="font-medium text-2xl">Capitals</h3>
            <p className="text-lg">
              The use of all capital letters gives the logo a modern, serious
              tone, targeting professional clients. Capitals also make the logo
              more striking and readable from a distance.
            </p>
          </div>
          <div className="flex flex-col max-sm:col-span-2 gap-3 pt-8">
            <h3 className="font-medium text-2xl">Color</h3>
            <p className="text-lg">
              The gray color symbolizes consistency, seriousness, and
              professionalism, subtly referencing the architectural materials
              commonly used in England, such as concrete and stone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
