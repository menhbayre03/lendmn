import React from "react";
import Burgeringredient from "../Burgeringredient";
import "./style.css";

const Burger = props => {


    const items = Object.entries(props.orts)
    // console.log(items);

    let content = [];
    items.map(el => {
        for(let i=0; i<el[1]; i++) {
            content.push(<Burgeringredient key={`${el[0]} ${i+1}`} type={el[0]} />);
        }
    })

    if(content.length === 0) {
        content = <p style={{fontFamily:"monospace"}}>Хачиртай талхныхаа орцыг сонгоно уу...</p>
    }

    return (
        <div className="Burger">
            <Burgeringredient type="bread-top" />
            {content}
            <Burgeringredient type="bread-bottom" />
        </div>
    )
}


export default Burger;