import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./BottomLinks.scss";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import CollectionsIcon from '@mui/icons-material/Collections';
const BottomLinks = () => {
  return (
    <div className="BottomLinks-container">
      <Link to="/works" className="links">
        {/* <i>view works</i> */}
        <CollectionsIcon className="link-btn" />
      </Link>
      <Link to="/" className="links">
        <InstagramIcon className="link-btn" />
      </Link>
      <Link to="/contact" className="links">
        <PermPhoneMsgIcon className="link-btn" />
      </Link>
    </div>
  );
};

export default BottomLinks;
