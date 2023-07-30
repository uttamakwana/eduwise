import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";

const Hero = () => {
  // to navigate to different pages
  const navigate = useNavigate();
  return (
    // hero section
    <section className="hero bg-cream">
      <div className="main">
        <div className="hero-content">
          <h2>
            An One Stop Portal
            <br /> for <span>Education</span>
          </h2>
          <p>
            Get the best quality Handwritten Notes, Previous Year Question
            Paper, Important Questions and Syllabus Explanation
          </p>
          <form className="buttons">
            <input
              type="text"
              pattern="[0-9A-Za-z]+"
              className="search"
              placeholder="Looking for something..."
            />
            <button onClick={() => navigate("/content")} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="img">
          <img src={images.boy} alt="none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
