import React from "react";
import "./AddTicketButton.scss";
import Add from "./Add.svg";
const AddTicketButton = ({ changeStateAddItem }) => {
  return (
    <div className="AddTicketButton" onClick={changeStateAddItem}>
      <div className="AddTicketButton-content">
        <p className="AddTicketButton-content-slogan">ADD TICKET</p>
        <img src={Add} alt="" className="AddTicketButton-content-logo" />
      </div>
    </div>
  );
};

export default AddTicketButton;
