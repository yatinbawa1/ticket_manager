import React from "react";
import "./TicketInflater.scss";

const TicketInflater = ({
  id,
  desc,
  status,
  positionOnArray,
  clicked,
  updateClicked,
}) => {
  let isClicked = "false";
  if (clicked === positionOnArray) {
    isClicked = "true";
  }
  const onClickFunction = () => {
    updateClicked(positionOnArray);
  };
  return (
    <div className={`ticket ${status} ${isClicked}`} onClick={onClickFunction}>
      <div className="ticket-info">
        <p className="ticket-info-id">{id}</p>
        <p className="ticket-info-desc">{desc}</p>
      </div>
    </div>
  );
};
export default TicketInflater;
