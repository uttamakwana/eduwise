import React from "react";
import "./hero.css";
import { Link, useNavigate } from "react-router-dom";
import images from "../../constants/images";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero bg-cream">
      <div className="main">
        <div className="hero-content">
          <h2>
            {/* <span>EduWise</span>  */}
            An One Stop Portal<br /> for <span>Education</span>
          </h2>
          <p>
            Get the best quality Handwritten Notes, Previous Year Question Paper, Important Questions and Syllabus Explanation
          </p>
          <form className="buttons">
            <input type="text" pattern="[0-9A-Za-z]+" className="search" placeholder="Looking for something..." />
            <button onClick={() => navigate("/content")} type="submit">Search</button>
            {/* <div className="play">
              <i className="bi bi-play-fill"></i>
              <a href="">Watch How it works</a>
            </div> */}
          </form>
        </div>
        <div className="img">
          <img src={images.girl} alt="none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
