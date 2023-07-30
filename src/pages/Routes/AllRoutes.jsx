import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Content } from "../index.js";
import { Subject } from "../../components/index.js";

const AllRoutes = ({ theme, setTheme }) => {
  // to access the location of url
  const location = useLocation();
  // to get the details of selected card in a content page
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Home Route */}
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        {/* Content Route */}
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
        {/* Subject Route */}
        <Route
          path="/subject"
          element={<Subject selectedCard={selectedCard} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
