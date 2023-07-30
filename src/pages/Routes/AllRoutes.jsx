import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Content from "../Content/Content.jsx";
import { Subject } from "../../components/index.js";

const AllRoutes = ({ theme, setTheme }) => {
  const location = useLocation();

  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route
          path="/content"
          element={
            <Content
              setTheme={setTheme}
              theme={theme}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          }
        />
        <Route
          path="/subject"
          element={<Subject selectedCard={selectedCard} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
