import React from "react";
import BackComponent from "./BackComponent/BackComponent";
import Add from "../MainSidebar/AddTicketButton/Add.svg";
import "./AddSidebar.scss";

const AddSidebar = ({ changeStateAddItem }) => (
  <div className="AddSidebar">
    <BackComponent changeStateAddItem={changeStateAddItem} />
    <input type="text" placeholder="Enter ID" className="input" />
    <select className="input">
      <option className="input-option" value="open">
        OPEN
      </option>
      <option className="input-option" value="closed">
        CLOSED
      </option>
    </select>
    <textarea type="text" className="input" placeholder="Enter Description" />
    <div className="AddTicketButton">
      <div className="AddTicketButton-content">
        <p className="AddTicketButton-content-slogan">ADD</p>
        <img src={Add} alt="" className="AddTicketButton-content-logo" />
      </div>
    </div>
  </div>
);

export default AddSidebar;
