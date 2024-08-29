import SectionHeader from "../components/SectionHeader";

const Prototype = () => {
  return (
    <section
      id="prototype"
      className="medium-container my-44 font-roboto text-primary-light"
    >
      <>
        <SectionHeader title="Prototype" number="08" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            Bringing It All
            <br />
            Together
          </h2>
          <p className="text-lg font-light">
            After incorporating feedback from usability testing and refining the
            design, I created an interactive prototype to showcase the final
            product. Feel free to engage with the live prototype below.
          </p>
        </div>
        <div className="flex justify-center pt-20">
          <iframe
            title="Expend Prototype"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="1080"
            height="900"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxSVjXZlHs8Z8Myn0PEAMag%2FExpend-App%3Fpage-id%3D1%253A4%26node-id%3D248-6414%26node-type%3DCANVAS%26viewport%3D1148%252C656%252C0.14%26t%3DEqw8c9scqKmFrCPN-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1451%253A10282"
            allowFullScreen
          ></iframe>
        </div>
      </>
    </section>
  );
};

export default Prototype;
