import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Home from "./pages/Home";
import Expend from "./pages/Expend";
import Edgingtons from "./pages/Edgingtons";
import Nav from "./sections/Nav";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position when the path changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/expend" element={<Expend />} />
            <Route path="/edgingtons" element={<Edgingtons />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
