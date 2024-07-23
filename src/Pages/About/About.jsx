import React from "react";
import "./About.scss";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Parallax } from "react-parallax";

const About = () => {
  const insideStyles = {
    background: "white",
    padding: 5,
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: "1.3rem",
    color: "black",
    // zIndex: "9999",
  };
  const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

  return (
    <div className="about-container">
      <div className="heading">
        <h2>Who we are</h2>
        <SouthEastIcon className="arrow" />
      </div>
      <Parallax bgImage={image1} strength={300} style={{ height: 600 }} className="parallax">
        <div className="parallax">
          <div style={insideStyles}>Our Team</div>
        </div>
      </Parallax>
      <div className="philosophy-text">
        <i>
          <h4>Our Philosophy</h4>
        </i>
        <p>
          Our industry can sometimes be a bit pretentious but our team is most
          certainly not. We prioritize our customer's vision and happiness above
          all else.
        </p>
      </div>
    </div>
  );
};

export default About;
