import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Header,
  Hero,
  Partner,
  Feature,
  Other,
  Blog,
  Footer,
  WhyEduWise,
} from "../../components";

const Home = ({ setTheme, theme }) => {
  const [toggle, setToggle] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  const handleToTop = () => {
    console.log("first");
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    // Adjust the value (300 in this case) to control when the icon becomes visible
    setShowToTop(scrolled > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.main initial={{ x: -1000 }} animate={{ x: 0 }}>
      <Header
        toggle={toggle}
        setToggle={setToggle}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero />
      {/* <Partner /> */}
      <Feature />
      {/* <Other /> */}
      {/* <Blog /> */}
      <WhyEduWise />
      <Footer />
      <div
        id="top"
        onClick={handleToTop}
        className={`top ${showToTop ? "visible" : "invisible"}`}
      >
        <img
          src="https://img.icons8.com/fluency/48/login-rounded-up.png"
          alt="login-rounded-up"
        />
      </div>
    </motion.main>
  );
};

export default Home;
