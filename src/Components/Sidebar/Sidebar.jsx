import React from "react";
import Titlecomponent from "../Titlecomponent/Titlecomponent";
import Usercomponent from "../Usercomponent/Usercomponent";
import "./Sidebar.scss";

const Sidebar = ({ changeStateSidebar }) => (
  <div className="Sidebar">
    <Titlecomponent changeStateSidebar={changeStateSidebar} />
    <Usercomponent
      backgroundImage={
        "https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      }
      userName="YATIN BAWA"
      userPosition="Frontend Developer-Management System"
    />
  </div>
);

export default Sidebar;
