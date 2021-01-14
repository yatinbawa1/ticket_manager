import React from "react";
import TicketInflater from "../TicketInfalter/TicketInflater";
import "./TicketComponent.scss";

class TicketComponent extends React.Component {
  state = {
    tickets: [
      {
        id: "#A10B",
        desc: "Biogas plant client, lookin required",
        status: "CLOSED",
      },
      {
        id: "#A20B",
        desc: "serverless rearrangement",
        status: "OPEN",
      },
      {
        id: "#A30B",
        desc: "New ui for clothing brand: visua",
        status: "OPEN",
      },

      {
        id: "#A40B",
        desc: "Updating ui of ticketing system",
        status: "OPEN",
      },
      {
        id: "#A50B",
        desc: "finding new jr dev",
        status: "CLOSED",
      },
      {
        id: "#A60B",
        desc: "spotify redesign",
        status: "OPEN",
      },
      {
        id: "#A70B",
        desc: "change server for spotify",
        status: "CLOSED",
      },
    ],
    clicked: 0,
  };
  updateClicked = (pos) => {
    this.setState({ clicked: pos });
  };
  render() {
    const { tickets } = this.state;
    return (
      <div className="TicketComponent">
        {tickets.map((ticket, pos) => (
          <TicketInflater
            key={ticket.id}
            {...ticket}
            className="inflater"
            clicked={this.state.clicked}
            positionOnArray={pos}
            updateClicked={this.updateClicked}
          />
        ))}
      </div>
    );
  }
}

export default TicketComponent;
