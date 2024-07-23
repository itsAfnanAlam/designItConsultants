import React from "react";
import "./Contact.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
// import { Parallax } from "react-parallax";

const Contact = () => {
  // const parallax_styles = {
  //   position: "absolute",
  //   top: "0%",
  //   width: "100%",
  //   height: "100%",
  //   zIndex: "99",
  // };

  // const insideStyles = {
  //   background: "black",
  //   padding: 20,
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  //   fontSize: "6rem",
  //   borderRadius: "15px",
  //   opacity: "80%",
  // };
  // const image1 =
  //   "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

  return (
      <div className="contact-container">
        <div className="contact-fields">
          <div className="contact-info">
            <i>
              <h4>Our Office</h4>
              <span>9862646362</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                eligendi atque similique eum accusantium quas repellat veritatis
                error, exercitationem deleniti?
              </p>
              <Link
                to="https://www.google.com/maps/place/Ram+Kutir+-+Gambhirs,+J-1813,+Block+J,+Chittaranjan+Park,+New+Delhi,+Delhi+110019/data=!4m2!3m1!1s0x390ce31c6a8182c7:0x9e8e6ba6bd68f90?entry=gps&coh=192189&g_ep=CAESCjExLjEzMy4xMDIYACDXggMqdSw5NDIwMzMyNCw0NzA3NTQ4OSw5NDIyNzY5Miw5NDIyNzY5Myw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D"
                target="_blank"
                rel="noreference"
                className="link"
              >
                Get directons
                <ArrowForwardIosIcon className="arrow" />
              </Link>
            </i>
          </div>
          <div className="contact-form">
            <h5>Contact Us</h5>
            <p>
              Use the form below to get in touch or email us at{" "}
              <span> example@example.com </span>.
            </p>
            <form action="https://formspree.io/f/xkgwgywv" method="POST">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="Email"
                autoComplete="off"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="Phone Number"
                autoComplete="off"
                required
              />
              <textarea
                rows="1"
                placeholder="How can we help you?"
                name="Message"
                autoComplete="off"
                required
              ></textarea>
              <button type="submit">
                Submit
                <ArrowForwardIosIcon className="arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
