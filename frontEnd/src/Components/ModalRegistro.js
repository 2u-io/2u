import React from 'react';
import ReactDOM from 'react-dom'

import './styles/Modal.css'

const ModalRegistro = (props) => {
    if(!props.isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onClose} className="Modal__close-button">
                    x
                </button>
                {props.children}
            </div>
        </div>,
        document.getElementById('modal_registro')
    )
}

export default ModalRegistro;