import React from "react";
import "./Why.scss";
import VillaIcon from "@mui/icons-material/Villa";
import BedIcon from '@mui/icons-material/Bed';
import FoundationIcon from '@mui/icons-material/Foundation';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const Why = () => {
  return (
    <div className="why" id="why">
      <div className="why_container">
        <h3>Why DesignIt Consultants</h3>
        <div className="services">
          <div className="service">
            <BedIcon className="service-icon" />
            <h4>Interior Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad.
            </p>
          </div>
          <div className="service">
            <FoundationIcon className="service-icon" />
            <h4>Structure Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad.
            </p>
          </div>
          <div className="service">
            <DomainAddIcon className="service-icon" />
            <h4>Structure Audit</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad.
            </p>
          </div>
          <div className="service">
            <ArchitectureIcon className="service-icon" />
            <h4>Architecture & Planning</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad.
            </p>
          </div>
          <div className="service">
            <VillaIcon className="service-icon" />
            <h4>Building permits</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad.
            </p>
          </div>
          <div className="service">
            <VillaIcon className="service-icon" />
            <h4>Building permits</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
