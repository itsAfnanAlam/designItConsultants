import React from "react";
import "./Approach.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Approach = () => {
  return (
    <div className="about_container">
      <div className="text">
        <h2>
          You can find us at the intersection of creativity and
          <span className="circle-sketch-highlight">experience</span>
        </h2>
        <div className="approach_section">
          <h3>our approach</h3>
          <p>
            We continuously push the boundaries of creative design to develop
            unique emotional experiences for our clients.
          </p>
        </div>
          <Link to="/about" className="link">
        <button>
          learn more about what we do
            <ArrowForwardIcon  className="arrow"/>
        </button>
          </Link>
      </div>
      <div className="video">
        <video src="/vid/lobby_vid.mp4" autoPlay muted loop/>
      </div>
    </div>
  );
};

export default Approach;
