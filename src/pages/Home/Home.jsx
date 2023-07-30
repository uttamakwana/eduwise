import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Header,
  Hero,
  Partner,
  Feature,
  Other,
  Blog,
  Footer,
  WhyEduWise
} from "../../components";

const Home = ({ setTheme, theme }) => {
  const [toggle, setToggle] = useState(false);
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
    </motion.main>
  );
};

export default Home;
