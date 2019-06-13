import React from 'react';
import logo from './image/portada.png'

const Galeria = () => {
    return (
        <React.Fragment>
            <img src={logo} alt="" className="portada"/>
        </React.Fragment>
    );
}

export default Galeria;
