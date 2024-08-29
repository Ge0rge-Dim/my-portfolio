import { socialMedia } from "../constants";
import CodeImage from "../assets/icons/code.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-20 mb-24">
      <div className="border bg-primary-light opacity-15 mb-20"></div>
      <div className="max-container w-full p-5">
        <div className="mb-20">
          <h3 className="text-primary-light font-roboto font-normal text-5xl max-sm:text-3xl">
            Thanks for visiting
            <br />
            my portfolio
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <p className="text-primary-light font-roboto text-lg max-sm:text-sm flex items-center">
            Made with <img src={CodeImage} alt="Code icon" className="px-1" />
            by me
          </p>
          <div className="flex space-x-4">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={media.src} alt={media.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
