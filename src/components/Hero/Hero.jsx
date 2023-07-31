import React, { useEffect, useState } from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";

const Hero = ({ setSelectedCard }) => {
  const cardArray = [
    {
      img: images.ADA,
      title: "Analysis and Design of Algorithm",
      code: "3150709",
      department: "Information Technology",
      semester: "5",
      keywords: [
        "ADA",
        "Analysis and Design of Algorithm",
        "Algorithm",
        "IT",
        "3150709",
      ],
    },
    {
      img: images.WT,
      title: "Web Technology",
      code: "2160708",
      department: "Computer Engineering",
      semester: "6",
      keywords: [
        "WT",
        "Web Technology",
        "Computer Engineering",
        "CE",
        "2160708",
      ],
    },
    {
      img: images.TOC,
      title: "Theory of Computation",
      code: "2160704",
      department: "Computer Engineeing",
      semester: "6",
      keywords: [
        "TC",
        "Theory of Computation",
        "Computer Engineering",
        "CE",
        "2160704",
      ],
    },
    {
      img: images.AWP,
      title: "Advanced Web Programming",
      code: "3161611",
      department: "Information Technology",
      semester: "6",
      keywords: [
        "AWP",
        "Advanced Web Programming",
        "Information Technology",
        "IT",
        "3161611",
      ],
    },
    {
      img: images.OOP,
      title: "OOP",
      code: "2140705",
      department: "Computer Engineering",
      semester: "6",
      keywords: [
        "OOP",
        "Object Oriented Programming",
        "Computer Engineering",
        "CE",
        "2140705",
      ],
    },
    {
      img: images.OS,
      title: "Operating System",
      code: "3154985",
      department: "Information Technology",
      semester: "4",
      keywords: [
        "OS",
        "Operating System",
        "Information Technology",
        "IT",
        "3154985",
      ],
    },
    {
      img: images.CS,
      title: "Cyber Security",
      code: "3150714",
      department: "Information Technology",
      semester: "5",
      keywords: [
        "Cyber Security",
        "CS",
        "Information Technology",
        "IT",
        "3150714",
      ],
    },
    {
      img: images.CN,
      title: "Computer Network",
      code: "3150710",
      department: "Information Technology",
      semester: "5",
      keywords: [
        "CN",
        "Computer Networks",
        "Information Technology",
        "IT",
        "3150710",
      ],
    },
    {
      img: images.SC,
      title: "Satellite Communication",
      code: "3154985",
      department: "Electronics and Communication",
      semester: "6",
      keywords: [
        "SC",
        "Satellite Communication",
        "Electronics and Communication",
        "EC",
        "3154985",
      ],
    },
    {
      img: images.ET,
      title: "Engineering Thrmodynamics",
      code: "3131905",
      department: "Mechanical Engineering",
      semester: "3",
      keywords: [
        "ET",
        "Engineering Thrmodynamics",
        "Mechanical Engineering",
        "ME",
        "3131905",
      ],
    },

    {
      img: images.SE,
      title: "Software Engineering",
      code: "3150711",
      department: "Information Technology",
      semester: "6",
      keywords: [
        "SE",
        "Software Engineering",
        "Information Technology",
        "IT",
        "3150711",
      ],
    },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [filterdArray, setFilteredArray] = useState([]);

  // useEffect(() => {
  //   if (searchValue === "") {
  //     setFilteredArray([]);
  //   } else {
  //     const updatedArray = cardArray.filter((card) =>
  //       card.keywords.some((keyword) =>
  //         keyword.toLowerCase().includes(searchValue.toLowerCase())
  //       )
  //     );
  //     setFilteredArray(updatedArray);
  //   }
  // }, [searchValue]);
  const handleClick = () => {
    if (searchValue === "") {
      setFilteredArray([]);
    } else {
      const updatedArray = cardArray.filter((card) =>
        card.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setFilteredArray(updatedArray);
    }
  };
  // to navigate to different pages
  const navigate = useNavigate();
  return (
    // hero section
    <>
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
            <div className="buttons">
              <input
                type="text"
                pattern="[0-9A-Za-z]+"
                className="search"
                placeholder="Looking for something..."
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  // navigate("/content");
                  handleClick();
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="img">
            <img src={images.boy} alt="none" />
          </div>
        </div>
        {filterdArray.length > 0 && (
          <div className="bg-cream">
            <div className="hero-card-container">
              {filterdArray &&
                filterdArray.map((card) => {
                  return (
                    <div className="hero-card">
                      <img src={card.img} alt="none" />
                      <h1>{card.title}</h1>
                      <p>{card.department}</p>
                      <p>{card.code}</p>
                      <button
                        onClick={() => {
                          setSelectedCard(card);
                          navigate("/subject");
                          window.scrollTo(0, 0);
                        }}
                      >
                        Explore
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
