import React from "react";
import "./style.css"

const Zahialga = props => {

    return (
        <div className="zahialga">
                <div className="section">
                    Таны захиалгын мэдээлэл
                </div>
            <div className="zahialganuud">{
                 Object.entries(props.orts).map(el => {
                     let ortsName = el[0];
                     let ortsToo = el[1];
                     return (
                        <div key={el} className="orts">
                             {ortsName} : {ortsToo}
                        </div>
                     )
                })
            }
            </div>
            <h1 style={{marginTop: "3rem"}}>Манайхаар үйлчлүүлсэн танд баярлалаа.</h1>
        </div>
    )
}

export default Zahialga;