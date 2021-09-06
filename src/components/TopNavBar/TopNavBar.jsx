import React from "react";
import "./TopNavBar.css";
import {FaPhoneAlt} from 'react-icons/fa';
import {FiChevronDown} from 'react-icons/fi';

const TopNavBar = () => {
  return (
    <div className="top__nav__bar">
      <div className="container py-2">
        <div className="d-flex justify-content-between align-items-center custom-flex-column">
          <div className="">
            <a href="tel:+01900220033" className="text-decoration-none text-white"> <span className="mr-2"><FaPhoneAlt/></span> Call us: +01900220033</a>
          </div>
          <div className="d-flex align-items-center">
            <div className="custom__selector mr-4">
              <select className="form-select" aria-label="Default select example">
                <option selected>USD</option>
                <option value="1">BDT</option>
                <option value="3">EUR</option>
              </select>
             <div className="custom__selector_icon">
               <span className="text-white"><FiChevronDown/></span>
            </div>
            </div>
            
            <div className="custom__selector2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Languages</option>
                <option value="1">English</option>
                <option value="3">Bengali</option>
                <option value="3">India</option>
              </select>
              <div className="custom__selector_icon2">
               <span className="text-white"><FiChevronDown/></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
