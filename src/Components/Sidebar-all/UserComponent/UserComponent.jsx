import React from "react";
import logOut from "./logOut.svg";
import "./UserComponent.scss";

const Usercomponent = ({ backgroundImage, userName, userPosition }) => {
  return (
    <div className="Usercomponent">
      <div className="full-width center-ver">
        <div className="flipper">
          <div className="toBeBlur">
            <div
              className="Usercomponent-image"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="Usercomponent-Userinfo">
              <p className="Usercomponent-Userinfo-name">{userName}</p>
              <p className="Usercomponent-Userinfo-position">{userPosition}</p>
            </div>
          </div>
          <div className="backside">
            <p className="backside-slogan">LOGOUT</p>
          </div>
        </div>
        <div className="Usercomponent-logout">
          <img src={logOut} alt="logout" className="Usercomponent-logout-img" />
        </div>
      </div>
    </div>
  );
};

export default Usercomponent;
