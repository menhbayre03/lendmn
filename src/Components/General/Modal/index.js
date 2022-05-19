import React from 'react'
import Shadow from '../Shadow';
import "./style.css";

const Modal = props => (
    <div className='contain'>
        <Shadow show={props.show} closeComfirmModal={props.closeComfirmModal}/>
        <div 
            style={{ 
                transform: props.show ? "translateY(0)" : "translateY(-100vh)", 
                opacity: props.show ? "1" : "0"
            }}
                className='modal'
        >
            {props.children}
        </div>
    </div>
)

export default Modal;