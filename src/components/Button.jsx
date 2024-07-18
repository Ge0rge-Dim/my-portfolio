import resume from "../assets/icons/Θέμα-1.pdf";

const Button = ({ label, iconURL }) => {
  return (
    <a href={resume} download>
      <button
        className="text-primary-dark bg-primary-light flex justify-center items-center gap-1 px-5 py-3 border font-roboto font-normal rounded-md"
        href=""
      >
        {label}
        <img
          src={iconURL}
          alt="arrow down icon"
          className="ml-2 rounded-full w-5 h-5 text-primary-dark"
        />
      </button>
    </a>
  );
};

export default Button;
