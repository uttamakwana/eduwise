import React from "react";
import './aboutus.css';

const AboutUs = () => {
  return (
    <section className="about-us-container" id="about-us-container">
        <h1 className="about-us-heading"><span>About</span> Us</h1>
      <div className="about-us-content">
        <h1>
          About <span>EduWise</span>
        </h1>
        <p>
          EduWise is an educational portal that caters to the needs of students
          by offering concise handwritten notes, effective exam preparation
          materials, previous year question papers, and important topics for
          exams. It provides comprehensive explanations in a well understanding
          format for subjects covered in the syllabus.
        </p>
      </div>
      <div className="about-us-content">
        <h1>
          Why this <span>Project</span>
        </h1>
        <p>
          The objective of EduWise is to address the challenges faced by
          students in their academic journey. By providing concise handwritten
          notes, relevant study material, and previous year's question papers,
          EduWise ensures that students have access to high-quality resources in
          a convenient manner. It aims to enhance their understanding and
          retention of the subject matter.
        </p>
      </div>
      <div className="about-us-content">
        <h1>
          Our <span>Ideology</span>
        </h1>
        <p>
          EduWise's website is a one-stop solution for students seeking
          comprehensive study resources. It simplifies finding reliable
          materials, saving students valuable time and effort. The website's
          user-friendly interface and organized structure facilitate easy
          navigation and efficient learning. Students can benefit from organized
          resources, improved understanding, and enhanced academic performance,
          ultimately leading to their success.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
