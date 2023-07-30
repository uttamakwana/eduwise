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
            <button>
              <a
                href="https://drive.google.com/file/d/1VgK7KBKIT5Xn4yusP1MybUODmEbmwQO6/view?usp=drivesdk"
                target="_blank"
              >
                Handwritten Notes
              </a>
            </button>
            <button>
              <a
                href="https://drive.google.com/file/d/1Vhxbn9Kxy1KZ4dcJ0pmTvw5TJQm9AXXP/view?usp=drivesdk"
                target="_blank"
              >
                IMP Questions
              </a>
            </button>
            <button>
              <a
                href="https://drive.google.com/file/d/1VgnTiap2EAldhwcvIY0VmlSVYqyTvbzA/view?usp=drivesdk"
                target="_blank"
              >
                Syllabus
              </a>
            </button>
            <button>
              <a
                href="https://drive.google.com/file/d/1Vhxbn9Kxy1KZ4dcJ0pmTvw5TJQm9AXXP/view?usp=drivesdk"
                target="_blank"
              >
                PYQs
              </a>
            </button>
          </section>
          {/* <div className="show-content">
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
          </div> */}
        </main>
      </div>
    </section>
  );
};

export default Subject;
