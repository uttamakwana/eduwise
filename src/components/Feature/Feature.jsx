import React from "react";
import "./feature.css";
import images from "../../constants/images";

const Feature = () => {
  const cardArray = [
    {
      img: images.girlwithlaptop,
      title: "ADA",
      description: "Analysis and Design of Algorithm",
    },
    {
      img: images.girl,
      title: "ADA",
      description: "Analysis and Design of Algorithm",
    },
    {
      img: images.girlwithlaptop,
      title: "ADA",
      description: "Analysis and Design of Algorithm",
    },
    {
      img: images.girlwithlaptop,
      title: "ADA",
      description: "Analysis and Design of Algorithm",
    },
    {
      img: images.girlwithlaptop,
      title: "ADA",
      description: "Analysis and Design of Algorithm",
    },
  ];
  const departmentArray = [
    {
      img: images.girlwithlaptop,
      title: "Information Technology",
    },
    {
      img: images.girl,
      title: "Computer Engineering",
    },
    {
      img: images.girlwithlaptop,
      title: "Electronic Communication",
    },
    {
      img: images.girlwithlaptop,
      title: "Mechanical",
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
        {cardArray.map((card) => {
          return (
            <div className="card" key={Math.floor(Math.random() * 100)}>
              <img src={card.img} alt="none" style={{ display: "block" }} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <button>Explore</button>
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
          Skilline is one powerful online software suite that combines all the
          tools <br /> needed to run a successful school or office.
        </p>
      </div>
      <div className="feature-card">
        {departmentArray.map((card) => {
          return (
            <div className="card" key={Math.floor(Math.random() * 100)}>
              <img src={card.img} alt="none" style={{ display: "block" }} />
              <h4>{card.title}</h4>
              <button>Explore</button>
            </div>
          );
        })}
        <br />
      </div>
    </section>
  );
};

export default Feature;
