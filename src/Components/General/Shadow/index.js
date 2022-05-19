import React from "react";
import "./style.css";


const Shadow = props => {
    return props.show ? <div onClick={props.closeComfirmModal} className="Shadow"></div> : null;
}

export default Shadow;