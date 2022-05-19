import React from "react";
import "./style.css"

const BuildControl = props => (
    <div className="BuildControl">
        <div className="Label">{props.orts}</div>
        <button 
            onClick={() => props.ortsNemeh(props.type)}  
            className="Less">Нэмэх</button>
        <button 
            disabled={props.disabled[props.type]} 
            onClick={() => props.ortsHasah(props.type)} 
            className="More">Хасах</button>
    </div>
)

export default BuildControl;