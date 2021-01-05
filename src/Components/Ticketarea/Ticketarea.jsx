import React from "react";
import "./TicketArea.scss";
import menuBtn from "../../Components/Sidebar-all/TitleComponent/menuBtn.svg";
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
