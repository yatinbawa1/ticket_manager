import React from "react";
import "./Homepage.scss";
import Sidebar from "../../Components/Sidebar-all/Sidebar/Sidebar";
import TicketArea from "../../Components/TicketArea/TicketArea";
class Homepage extends React.Component {
  state = {
    showSidebar: true,
  };
  changeStateSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
    console.log(this.state.showSidebar);
  };
  render() {
    const showSidebar = this.state.showSidebar;
    if (showSidebar) {
      return (
        <div className="Homepage Homepage-on">
          <Sidebar
            className="Homepage-sidebar"
            changeStateSidebar={this.changeStateSidebar}
          />
          <TicketArea showSidebar={showSidebar} />
        </div>
      );
    }
    return (
      <div className="Homepage Homapage-off">
        <TicketArea
          showSidebar={showSidebar}
          changeStateSidebar={this.changeStateSidebar}
        />
      </div>
    );
  }
}
export default Homepage;
