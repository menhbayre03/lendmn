import React from "react";
import './style.css';

const OrderSummary = props => {
    return (
        <div className="contain">
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орц : </p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li key={el}>
                        {props.ingredientsNames[el]} : {props.ingredients[el]}
                    </li>
                ))}
            </ul>

            <p><strong>Таны захиалгын дүн : {props.price}₮</strong></p>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
            <div className="check">

                <div onClick={props.onCancel} className="check_btn refuse">
                    Үгүй
                </div>

                <div onClick={props.onContinue} className="check_btn continue">
                    Тийм
                </div>

            </div>

        </div>
    )
}

export default OrderSummary;