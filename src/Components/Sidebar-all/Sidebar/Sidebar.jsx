import React from "react";
import MainSidebar from "../MainSidebar/MainSidebar";
import AddSidebar from "../AddSidebar/AddSidebar";
import "./Sidebar.scss";

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
        <div className="Sidebar">
          <MainSidebar
            changeStateAddItem={changeStateAddItem}
            changeStateSidebar={changeStateSidebar}
          />
        </div>
      );
    } else {
      return (
        <div className="Sidebar">
          <AddSidebar changeStateAddItem={changeStateAddItem} />
        </div>
      );
    }
  }
}
export default Sidebar;
