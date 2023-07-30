import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ setToggle, toggle, location }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      const currentScrollPos = window.scrollY;
      const scrollingDown = currentScrollPos > prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (scrollingDown) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
        timeoutId = setTimeout(() => {
          setIsHeaderVisible(false);
        }, 200); // Adjust the pause duration (in milliseconds) as per your requirement
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`header ${toggle ? "header-not-active" : ""} ${
        isHeaderVisible ? "visible" : "invisible"
      }`}
    >
      <nav className="navbar bg-cream">
        <div className="logo">
          <div className="square"></div>
          <Link to="/">
            <h4>EduWise</h4>
          </Link>
        </div>
        <ul
          className={`nav-list ${toggle ? "active" : ""} ${
            location === "/content" ? "small-height" : ""
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          {location === "/content" ? (
            ""
          ) : (
            <li>
              <Link to="/content">Subject</Link>
            </li>
          )}

          {location === "/content" ? (
            ""
          ) : (
            <li>
              <a
                href="#all-department"
                onClick={() => {
                  setToggle(!toggle);
                  // window.scrollTo(0, 1000);
                }}
              >
                Why EduWise?
              </a>
            </li>
          )}
          {location === "/content" ? (
            ""
          ) : (
            <li>
              <a href="#">About Us</a>
            </li>
          )}
        </ul>
        <div
          className={`hamburger ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line lin2-3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
