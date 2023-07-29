import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer mt-6">
      <div className="edu-logo">
      <div className="logo">
          <div className="square"></div>
          <h4>EduWise</h4>
        </div>
        <div className="v-line" />
        <span>New Era of learning</span>
      </div>
      <div className="subscribe-letter">
        <h5>Contact Us for any kind of <span>query</span></h5>
        <div className="form">
          <input type="text" placeholder="Your Email" />
          <button>Message</button>
        </div>
      </div>
      {/* <div className="links mt-4">
        <a href="">Careers</a>
        <a href="">Privacy</a>
        <a href="">Terms &amp; Condition</a>
      </div> */}
      <div className="copyright">
        <p>© 2023 EduWise Copyrights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
