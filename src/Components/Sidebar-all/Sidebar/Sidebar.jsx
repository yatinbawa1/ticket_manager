import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import UserComponent from "../UserComponent/UserComponent";
import TicketComponent from "../TicketComponent/TicketComponent";
import AddTicketButton from "../AddTicketButton/AddTicketButton";
import "./Sidebar.scss";
import BackComponent from "../BackComponent/BackComponent";

class Sidebar extends React.Component {
  state = {
    addItem: false,
  };
  render() {
    const changeStateAddItem = () => {
      console.log(this.state.addItem);
      this.setState({ addItem: !this.state.addItem });
    };
    const { changeStateSidebar } = this.props;
    const { addItem } = this.state;
    if (!addItem) {
      return (
        <div className="Sidebar Sidebar-main">
          <TitleComponent changeStateSidebar={changeStateSidebar} />
          <UserComponent
            backgroundImage={
              "https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            userName="YATIN BAWA"
            userPosition="Frontend Developer-Management System"
          />
          <TicketComponent className="tc" />
          <AddTicketButton changeStateAddItem={changeStateAddItem} />
        </div>
      );
    } else {
      return (
        <div className="Sidebar Sidebar-add">
          <BackComponent changeStateAddItem={changeStateAddItem} />
        </div>
      );
    }
  }
}
export default Sidebar;
