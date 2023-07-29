import React from "react";
import "./other.css";

const Other = () => {
  return (
    <>
      <>
        <>
          {/* intro section starts  */}
          <section className="intro mt-5">
            <div className="heading">
              <h4>
                What is <span>Skilline?</span>
              </h4>
              <p>
                Skilline is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </div>
            <div className="container">
              <div className="instructor platform">
                <h4>FOR INSTRUCTORS</h4>
                <button>Start a className today</button>
              </div>
              <div className="student platform">
                <h4>FOR STUDENT</h4>
                <button>Enter Access code</button>
              </div>
            </div>
          </section>
        </>

        {/* everything section starts */}
        <section className="everything mt-6">
          <div className="main">
            <div className="content">
              <div className="orange-circle" />
              <h4>
                Everything you can do in a physical classroom,{" "}
                <span>you can do with Skilline</span>
              </h4>
              <p>
                Skilline’s school management software helps traditional and
                online schools manage scheduling, attendance, payments and
                virtual classrooms all in one secure cloud-based system.
              </p>
              <a href="">Learn More</a>
            </div>
            <div className="img">
              <div className="blue" />
              <div className="orange" />
              <img src="images/teacher-explaining.png" alt="" />
              <div className="play">
                <i className="bi bi-play-fill" />
              </div>
            </div>
          </div>
        </section>
        {/* ui section starts  */}
        <section className="user-interface">
          <div className="main">
            <div className="img">
              <img src="images/vcall.png" className="vcall" alt="" />
              <div className="green" />
              <div className="blue" />
            </div>
            <div className="content">
              <h4>
                A <span> user interface</span> designed for the classroom
              </h4>
              <ul className="list">
                <li>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <rect
                      width="11.8182"
                      height="11.8182"
                      rx={2}
                      fill="#2F327D"
                    />
                    <rect
                      y="14.1816"
                      width="11.8182"
                      height="11.8182"
                      rx={2}
                      fill="#2F327D"
                    />
                    <rect
                      x="14.7727"
                      width="11.8182"
                      height="11.8182"
                      rx={2}
                      fill="#2F327D"
                    />
                    <rect
                      x="14.7727"
                      y="14.1816"
                      width="11.8182"
                      height="11.8182"
                      rx={2}
                      fill="#F48C06"
                    />
                  </svg>
                  <p>
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </p>
                </li>
                <li>
                  <svg
                    viewBox="0 0 28 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <rect
                      x={8}
                      y={6}
                      width={20}
                      height={20}
                      rx={2}
                      fill="#2F327D"
                    />
                    <rect
                      width="21.2245"
                      height="21.2245"
                      rx={2}
                      fill="#F48C06"
                    />
                  </svg>
                  <p>
                    TA’s and presenters can be moved to the front of the className.
                  </p>
                </li>
                <li>
                  <svg
                    viewBox="0 0 30 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z"
                      fill="#2F327D"
                    />
                  </svg>
                  <p>
                    Teachers can easily see all students and className data at one
                    time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* tool section starts  */}
        <section className="tool mt-5">
          <div className="main">
            <div className="content">
              <h4>
                <span>Tools</span> For Teachers And Learners
              </h4>
              <p>
                Class has a dynamic set of teaching tools built to be deployed
                and used during className. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <div className="img">
              <img src="images/girl-with-books.png" alt="" />
            </div>
          </div>
        </section>
        {/* test section starts  */}
        <section className="test mt-6">
          <div className="main">
            <div className="img">
              <img src="images/true-false.png" alt="" />
            </div>
            <div className="content">
              <h4>
                Assessments, <span>Quizzes</span>, Tests
              </h4>
              <p>
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
        </section>
        {/* management section starts  */}
        <section className="management mt-5">
          <div className="main">
            <div className="content">
              <h4>
                <span>Class Management</span> Tools for Educators
              </h4>
              <p>
                Class provides tools to help run and manage the className such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <div className="img">
              <img src="images/gradebook.png" alt="" />
            </div>
          </div>
        </section>
        {/* discussion section starts  */}
        <section className="discussion mt-5">
          <div className="main">
            <div className="img">
              <img src="images/discussion.png" alt="" />
            </div>
            <div className="content">
              <h4>
                One-on-One<span> Discussions</span>
              </h4>
              <p>
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </section>
        <div className="btn mt-2">
          <button className="more">See more features</button>
        </div>
        {/* integration section starts  */}
        <section className="integration mt-6">
          <div className="main">
            <div className="img">
              <img src="images/integrations.png" alt="" />
            </div>
            <div className="content">
              <small>
                <div className="line" /> INTEGRATION
              </small>
              <h4>
                200+ educational tools and platform<span>integrations</span>
              </h4>
              <p>
                Schoology has every tool your classroom needs and comes
                pre-integrated with more than 200+ tools, student information
                systems (SIS), and education platforms.
              </p>
              <button>See All Integrations</button>
            </div>
          </div>
        </section>
        {/* testimonial section starts  */}
        <section className="testimonial mt-6">
          <div className="main">
            <div className="content">
              <small>
                <div className="line" /> TESTIMONIAL
              </small>
              <h4>What They Say?</h4>
              <p>
                Skilline has got more than 100k positive ratings from our users
                around the world.
              </p>
              <p>
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>
              <p>Are you too? Please give your assessment</p>
              <button>
                Write your assessment
                <i className="bi bi-arrow-right" />
              </button>
            </div>
            <div className="img">
              <img src="images/testimonials.png" alt="" />
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Other;
