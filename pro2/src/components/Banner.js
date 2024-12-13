import React from "react";
import bannerBg from "../images/seafood-slide.jpg";
import "./Header.css";

const Banner = ({ heading, subheading, fontStyle }) => {
    return (
      <section id="home" className="hero">
        <div className="overlay">
          <p id="home_p" style={{ fontFamily: fontStyle }}>
            Hello, New Friend!
          </p>
          <h2 style={{ fontFamily: fontStyle }}>
            {heading}
          </h2>
          <div className="cta-buttons">
            <button id="book_btn">Book a Table</button>
            <button id="menu_btn">Open Menu</button>
          </div>
        </div>
      </section>
    );
};
  

export default Banner;
