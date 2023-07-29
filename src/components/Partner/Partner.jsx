import React from "react";
import images from "../../constants/images";
import "./partner.css"

const Partner = () => {
  return (
    <section className="partner">
      <p>Trusted by 5,000+ Companies Worldwide</p>
      <div className="img">
        <img src={images.google} alt="none" />
        <img src={images.netflix} alt="none" />
        <img src={images.airbnb} alt="none" />
        <img src={images.amazon} alt="none" />
        <img src={images.grab} alt="none" />
      </div>
    </section>
  );
};

export default Partner;
