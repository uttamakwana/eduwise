import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import "./subject.css";

const Subject = ({ selectedCard }) => {
  //   console.log(selectedCard);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const locationValue = location.pathname;

  const [showContent, setShowContent] = useState("Syllabus");

  return (
    <section className="subject-container-component">
      <Header toggle={toggle} setToggle={setToggle} location={locationValue} />
      <div className="container">
        <h1>{selectedCard.title}</h1>
        <main className="container-display">
          <section>
            <button onClick={() => setShowContent("Syllabus")}>Syllabus</button>
            <button onClick={() => setShowContent("PYQs")}>PYQs</button>
            <button onClick={() => setShowContent("IMPQ")}>IMP Question</button>
            <button onClick={() => setShowContent("HWN")}>
              Handwritten Notes
            </button>
          </section>
          <div className="show-content">
            {showContent === "Syllabus" && (
              <div className="content-card card-syllabus">
                <div className="left">a</div>
                <div className="right">b</div>
              </div>
            )}
            {showContent === "PYQs" && (
              <div className="content-card card-pyqs">
                <div className="left"></div>
                <div className="right"></div>
              </div>
            )}
            {showContent === "IMPQ" && (
              <div className="content-card card-impq">
                <div className="left"></div>
                <div className="right"></div>
              </div>
            )}
            {showContent === "HWN" && (
              <div className="content-card card-hwn">
                <div className="right"></div>
              </div>
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Subject;
