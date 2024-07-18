const Contact = () => {
  return (
    <section>
      <form
        action=""
        className="flex flex-col items-start justify-start bg-blue-300"
      >
        <h2>Contact Me</h2>
        <div className="flex flex-col items-start">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
      </form>
    </section>
  );
};

export default Contact;
