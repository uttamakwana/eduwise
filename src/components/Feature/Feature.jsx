import React from "react";
import "./feature.css";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const navigate = useNavigate();
  // cardArray for Popular Subject Section
  const cardArray = [
    {
      img: images.ADA,
      title: "ADA",
      description: "Analysis and Design of Algorithm",
    },
    {
      img: images.WT,
      title: "WT",
      description: "Web Technology",
    },
    {
      img: images.CN,
      title: "CN",
      description: "Web Development",
    },
    {
      img: images.AWP,
      title: "AWP",
      description: "Advanced Web Programming",
    },
    {
      img: images.SC,
      title: "SC",
      description: "Satellite Communication",
    },
  ];
  // departmentArray for All Department Section
  const departmentArray = [
    {
      img: images.IT,
      title: "Information Technology",
    },
    {
      img: images.CE,
      title: "Computer Engineering",
    },
    {
      img: images.EC,
      title: "Electronic Communication",
    },
    {
      img: images.ME,
      title: "Mechanical Engineering",
    },
  ];
  return (
    <section className="feature mt-4">
      <div className="heading">
        <h4>
          Popular <span>Subject</span>
        </h4>
        <p>
          EduWise is one powerful online software suite that combines all the
          tools <br /> needed to enhance exam preparation.
        </p>
      </div>
      <div className="feature-card">
        {/* Mapping in Popular Subject */}
        {cardArray.map((card) => {
          return (
            <div className="card" key={Math.floor(Math.random() * 100)}>
              <img src={card.img} alt="none" style={{ display: "block" }} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <button
                onClick={() => {
                  navigate("/content");
                  window.scrollTo(0, 0);
                }}
              >
                Explore
              </button>
            </div>
          );
        })}
        <br />
      </div>
      <div id="all-department"></div>
      <div className="heading" style={{ marginTop: "3rem" }}>
        <h4>
          All <span>Department</span>
        </h4>
        <p>
          EduWise is a powerfull one stop portal that covers <br /> all department of the college.
        </p>
      </div>
      
      <div className="feature-card">
        {/* Mapping in All Department */}
        {departmentArray.map((card) => {
          return (
            <div className="card" key={Math.floor(Math.random() * 100)}>
              <img src={card.img} alt="none" style={{ display: "block" }} />
              <h4>{card.title}</h4>
              <button
                onClick={() => {
                  navigate("/content");
                  window.scrollTo(0, 0);
                }}
              >
                Explore
              </button>
            </div>
          );
        })}
        <br />
      </div>
    </section>
  );
};

export default Feature;
