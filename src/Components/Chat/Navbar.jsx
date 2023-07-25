import React from "react";
import {} from "../../Styles/Chat/Nav.css";
import { AiOutlineMore, AiOutlineLeft } from "react-icons/ai";
import { CgShapeHalfCircle } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="container-info-nav">
      <CgShapeHalfCircle className="icon-arrow-nav" ></CgShapeHalfCircle>
        <img
          className="photo-nav"
          src="https://s1.eestatic.com/2023/06/08/vivir/salud-mental/769933690_233804290_1706x960.jpg"
          alt="profile-photo"
        />
        <div className="text-nav">
          <span className="user-name-nav">Julia Robers</span>
          <span className="user-state-nav">On Line</span>
        </div>
        <AiOutlineMore className="point-options-nav" ></AiOutlineMore>
      </div>
    </div>
  );
};

export default Navbar;
