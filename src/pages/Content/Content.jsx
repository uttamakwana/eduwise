import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components";
import { motion } from "framer-motion";
import "./content.css";
import images from "../../constants/images";
const Content = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  // const departmentRef = useRef(null);
  // const semesterRef = useRef(null);

  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");

  const location = useLocation();
  const locationValue = location.pathname;

  const cardArray = [
    {
      img: images.airbnb,
      title: "Anyalysis and Design of Algorithm",
      code: "3150709",
      department: "Information Technology",
      semester: "5",
    },
    {
      img: images.google,
      title: "Web Technology",
      code: "2160708",
      department: "Computer Engineering",
      semester: "6",
    },
    {
      img: images.amazon,
      title: "Theory of Computation",
      code: "2160704",
      department: "Computer Engineeing",
      semester: "6",
    },
    {
      img: images.airbnb,
      title: "Advanced Web Programming",
      code: "3161611",
      department: "Information Technology",
      semester: "6",
    },
    {
      img: images.airbnb,
      title: "OOP",
      code: "2140705",
      department: "Computer Engineering",
      semester: "6",
    },
    {
      img: images.airbnb,
      title: "Operating System",
      code: "3154985",
      department: "Information Technology",
      semester: "4",
    },
    {
      img: images.airbnb,
      title: "ADA",
      code: "3150709",
      department: "Information Technology",
      semester: "6",
    },
    {
      img: images.airbnb,
      title: "ADA",
      code: "3150709",
      department: "Information Technology",
      semester: "6",
    },
  ];

  const [filterdArray, setFilteredArray] = useState(cardArray);

  // console.log("outside", departmentRef.current.value);
  console.log("outside", department);
  useEffect(() => {
    // console.log(departmentRef.current.value);
    console.log("inside", department);
    if (department) {
      const updatedArray = cardArray.filter(
        (card) => card.department === department
      );
      setFilteredArray(updatedArray);
    }
  }, [department, semester]);
  // console.log(departmentRef.current);

  return (
    <motion.main
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Header
        toggle={toggle}
        setToggle={setToggle}
        location={locationValue}
        setTheme={setTheme}
        theme={theme}
      />
      <section className="filter">
        {/* <h1>Subjects</h1> */}
        <h1>Subjects</h1>
        <div className="filter-list">
          <div className="filter-list-group">
            <select
              name="department"
              id="department"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Department</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Bio Medical">Bio Medical</option>
              <option value="Electornics and Communication">
                Electornics and Communication
              </option>
            </select>
          </div>
          <div className="filter-list-group">
            <select
              name="semester"
              id="semester"
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="Semester">Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>
      </section>
      <div className="subject-container">
        <div className="container">
          {filterdArray.map((card, index) => {
            return (
              <div className="card">
                <img src={card.img} alt="none" style={{ display: "block" }} />
                <strong>{card.title}</strong>
                <p>{card.code}</p>
                <button>Explore</button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button onClick={() => navigate("/")}>Back to home</button> */}
    </motion.main>
  );
};

export default Content;
