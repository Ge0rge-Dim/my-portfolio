import { navLinks, hamMenu } from "../constants";

const Nav = () => {
  return (
    <header className="flex py-6 z-10 w-full fixed bg-gradient-to-b from-primary-dark">
      <nav className="flex justify-between items-center w-full px-60 max-xl:px-8 my-0 mx-auto">
        <h3 className=" text-primary-light text-6xl max-lg:text-5xl font-katibeh cursor-pointer">
          George Dimos<span className="text-secondary-dark ">.</span>
        </h3>
        <ul className="flex justify-end items-center pt-6 gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-roboto leading-normal font-light text-xl text-primary-light"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <img src={hamMenu.src} alt={hamMenu.alt} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
