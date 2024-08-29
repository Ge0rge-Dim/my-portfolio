import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "../constants";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <header className="medium-container mx-auto flex justify-center items-center mt-20 max-sm:mt-16 overflow-hidden">
      <motion.nav
        animate={isHidden ? "hidden" : "visible"}
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        className=" bg-primary-dark shadow-lg py-6 max-sm:py-5 max-sm:px-7 px-10 mb-10 max-sm:mb-8 rounded-full fixed z-50"
      >
        <ul className="flex justify-center gap-10 max-sm:gap-6">
          {navLinks.map((item) => (
            <li key={item.label} className="relative group">
              {item.newTab ? (
                // External links
                <a
                  href={item.href}
                  className="font-roboto font-light text-lg max-sm:text-sm text-primary-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsHidden(false)}
                >
                  {item.label}
                </a>
              ) : (
                // Internal links
                <Link
                  to={item.href}
                  className="font-roboto font-light text-lg max-sm:text-sm text-primary-light"
                  onClick={() => setIsHidden(true)}
                >
                  {item.label}
                </Link>
              )}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Nav;
