import React from "react";
import "./style.css"

const Burgeringredient = props => {
    if(props.type === "bread-top") return (
        <div className="bread-top">
            <div className="seed"></div>
            <div className="seed second"></div>
            <div className="seed third"></div>
            <div className="seed fourth"></div>
        </div>
    )
    if(props.type === "salad") return <div className="salad"></div>
    if(props.type === "bacon") return <div className="bacon"></div>
    if(props.type === "cheese") return <div className="cheese"></div>
    if(props.type === "meat") return <div className="meat"></div>
    if(props.type === "bread-bottom") return <div className="bread-bottom"></div>
    else {
        return <div>...</div>
    }
}
export default Burgeringredient;