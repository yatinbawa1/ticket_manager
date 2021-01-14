import React from 'react'
import menuBtn from "../Sidebar-all/MainSidebar/TitleComponent/menuBtn.svg";
import './TicketArea.scss';

class TicketArea extends React.Component {
    render(){
        const {showSidebar, changeStateSidebar} = this.props
        console.log(showSidebar,changeStateSidebar)
        if (showSidebar) { return(
            <div className = "TicketArea">
            </div>
        )} else{ return(
            <div className="TicketArea">
                <div className="changeStateButton" onClick={changeStateSidebar}>
                    <img src={menuBtn} alt="" className="changeStateButton-image"/>
                </div>
            </div>
        )}
    }
}

export default TicketArea;