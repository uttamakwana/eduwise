import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Header,
  Hero,
  Feature,
  WhyEduWise,
  Footer,
  AboutUs,
} from "../../components";

const Home = ({setSelectedCard}) => {
  // to toggle the mobile menu when screen goes for mobiles screens
  const [toggle, setToggle] = useState(false);
  // to go in the top when clicked a top button
  const [showToTop, setShowToTop] = useState(false);

  // this function will handle the top button click event
  const handleToTop = () => {
    console.log("first");
    window.scrollTo(0, 0);
  };

  // this function will handle the scroll position. It means move to top button will be visible after 300 position
  const handleScroll = () => {
    const scrolled = window.scrollY;
    // Adjust the value (300 in this case) to control when the icon becomes visible
    setShowToTop(scrolled > 300);
  };

  // useEffect will handle the scroll event and call handleScroll function
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.main
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header Component */}
      <Header toggle={toggle} setToggle={setToggle} />
      {/* Hero Component */}
      <Hero setSelectedCard={setSelectedCard} />
      {/* Feature Component */}
      <Feature />
      {/* WhyEduWise Component */}
      <WhyEduWise />
      {/* AboutUs Component */}
      <AboutUs />
      {/* Footer Component */}
      <Footer />
      {/* Button to scroll to top 
          showToTop state will toggle the visiblility of button
      */}
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
