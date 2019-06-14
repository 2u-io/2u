import React from 'react';

import ModalRegistro from './ModalRegistro';

function SignUp(props) {
  return (
    <ModalRegistro isOpen={props.isOpen} onClose={props.onClose}>
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.name} onChange={props.handleName} type="text" className="validate"/>
                    <label className="active">Nombre(s)</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.lastName} onChange={props.handleLastName} type="text" className="validate"/>
                    <label className="active">Apellidos(s)</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.username} onChange={props.handleUserName} type="text" className="validate"/>
                    <label className="active">Usuario</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.email} onChange={props.handleEmail} type="text" className="validate"/>
                    <label className="active">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.password} onChange={props.handlePasswordRegister} type="password" className="validate"/>
                    <label className="active">Contraseña</label>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <button onClick={props.handleSubmitRegister} type="button" className='btn green'>Regístrate</button>
                </div>
                <div className="col s6">
                    <button onClick={props.onClose} className='btn red'>Cancelar</button>
                </div>
            </div>
        </form>
    </ModalRegistro>
  );
}

export default SignUp;