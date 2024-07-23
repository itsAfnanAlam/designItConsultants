import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <Link className="logo">DesignIt Consultants</Link>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s ",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/">Home</Link>
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => setNavOpen(!navOpen)}>About Us</Link>
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/works" onClick={() => setNavOpen(!navOpen)}>Our Works</Link>
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => setNavOpen(!navOpen)}>Contact Us</Link>
              <div className="nav-link-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div className="location">
              <span>New Delh, India</span>
            </div>

            <div className="nav-social-links">
              <ul>
                <li>
                  <Link to="/">Insta</Link>
                </li>
                <li>
                  <Link to="/">Insta</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from '@mui/icons-material/Close';
// import { Link } from "react-router-dom";
// import "./Navbar.scss";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [size, setSize] = useState({
//     width: 0,
//     height: 0,
//   });
//   useEffect(() => {
//     const handleResize = () => {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const menuToggleHandler = () => {
//     setMenuOpen((p) => !p);
//   };

//   return (
//     <header className="header">
//       <div className="header__content">
//         <Link to="/" className="header__content__logo">
//           <img src="/img/logo.png" alt="" />

//           DesignIt Consultants
//         </Link>
//         <nav
//           className={`${"header__content__nav"}
//           ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""}
//           }`}
//         >
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/works">Our Works</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="header__content__toggle">
//           {!menuOpen ? (
//             <MenuIcon onClick={menuToggleHandler} />
//           ) : (
//             <CloseIcon onClick={menuToggleHandler} />
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
