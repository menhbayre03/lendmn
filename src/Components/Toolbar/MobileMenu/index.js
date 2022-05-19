import React from "react";

import  "./style.css";

const MobileMenu = props => (
    <div onClick={props.toggleSideBar} className="mobile_menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
);

export default MobileMenu;