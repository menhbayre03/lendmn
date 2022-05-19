import React from "react";
import BuildControl from "../BuildControl";
import "./style.css"

const BuildControls = props => {

    return (
        <div className="BuildControls">
            <p>Бургэрийн үнэ : <strong>{props.price}</strong></p>

            {
                Object.keys(props.ingredientsNames).map(el => (
                    // console.log(props.ingredientsNames[el]),
                    <BuildControl 
                        key={props.ingredientsNames[el]}
                        disabled={props.disabledIngredients} 
                        ortsNemeh={props.ortsNemeh} 
                        ortsHasah={props.ortsHasah} 
                        type={el} 
                        orts={props.ingredientsNames[el]}
                    />
            ))}

            <button 
                onClick={props.showComfirmModal} 
                disabled={props.disabled} 
                className="OrderButton"
            >
                ЗАХИАЛАХ
            </button>

        </div>
    )
}

export default BuildControls;