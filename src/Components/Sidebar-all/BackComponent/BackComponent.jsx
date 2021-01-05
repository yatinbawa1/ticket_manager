import React from "react";
import back from "./back.svg";
import "./BackComponent.scss";

const BackComponent = ({ changeStateAddItem }) => {
  return (
    <div className="BackComponent" onClick={changeStateAddItem}>
      <div className="center-ver">
        <img src={back} alt="" className="menuBtn" />
        <h2 className="title">BACK</h2>
      </div>
    </div>
  );
};

export default BackComponent;
