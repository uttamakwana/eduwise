import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Content from "../Content/Content.jsx";

const AllRoutes = ({ theme, setTheme }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/content" element={<Content setTheme={setTheme} theme={theme} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
