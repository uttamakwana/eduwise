import React from "react";
import './blog.css';
import images from "../../constants/images";

const Blog = () => {
  return (
    <section className="blog mt-5">
      <div className="heading">
        <h4>Latest News and Resources</h4>
        <p>See the developments that have occurred to Skillines in the world</p>
      </div>
      <div className="blog-container">
        <div className="main-blog">
          <div className="blog-img">
            <img src={images.laptopnews} alt="None" />
          </div>
          <div className="blog-content">
            <h4>
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h4>
            <p>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="blog-post">
          <div className="post">
            <div className="img">
              <img src={images.girlwithlaptop} alt="none" />
            </div>
            <div className="blog-content">
              <h4>
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h4>
              <p>Class Technologies Inc., the company that created Class,...</p>
            </div>
          </div>
          <div className="post">
            <div className="img">
              <img src={images.girlwithlaptop} alt="none" />
            </div>
            <div className="blog-content">
              <h4>
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </h4>
              <p>
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </p>
            </div>
          </div>
          <div className="post">
            <div className="img">
              <img src={images.laptopnews} alt="none" />
            </div>
            <div className="blog-content">
              <h4>
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </h4>
              <p>
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
