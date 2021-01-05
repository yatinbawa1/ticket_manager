import React from "react";
import "./Ticketarea.scss";
import menuBtn from "../../Components/Titlecomponent/menuBtn.svg";
const Ticketarea = ({ changeStateSidebar, showSidebar }) => {
  return (
    <div className="Ticketarea">
      <div></div>
      {!showSidebar ? (
        <div className="sidebarStarter" onClick={changeStateSidebar}>
          <img src={menuBtn} className="sidebarStarter-btn" alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Ticketarea;
