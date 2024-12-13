import React from "react";
import aboutImage1 from "../images/about1.jpg.webp";
import aboutImage2 from "../images/about2.jpg.webp";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        {/* First Grid */}
        <div className="about__grid about__grid-1">
          <div className="lft">
            <span className="orange-line">About Us</span>
            <h3 className="common_h3">We Invite You to Visit Our Restaurant</h3>
            <p className="common_p">
              Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
              repudiandae dolorem, beatae dolorum, praesentium itaque et quam
              quaerat.
            </p>
            <a className="about_a" href="#home">READ MORE</a>
          </div>
          <div className="rgt">
            <img src={aboutImage1} alt="About Us" />
          </div>
        </div>

        {/* Second Grid */}
        <div className="about__grid about__grid-2">
          <div className="rgt">
            <img src={aboutImage2} alt="Restaurant Menu" />
          </div>
          <div className="lft">
            <span className="orange-line">Restaurant Menu</span>
            <h3>
              Always Fresh <br /> Ingredients
            </h3>
            <p>
              Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
              repudiandae dolorem, beatae dolorum, praesentium itaque et quam
              quaerat.
            </p>
            <a className="about_a" href="#home">VIEW MENU</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
