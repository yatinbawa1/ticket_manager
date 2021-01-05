import React from "react";
import "./Titlecomponent.scss";
import menuBtn from "./menuBtn.svg";
const Titlecomponent = ({ changeStateSidebar }) => {
  return (
    <div className="Titlecomponent" onClick={changeStateSidebar}>
      <div className="center-ver">
        <img src={menuBtn} alt="Menu Button" className="menuBtn" />
        <h2 className="title">TICKETS</h2>
      </div>
    </div>
  );
};

export default Titlecomponent;
