import React from 'react';

import Modal from './Modal';

function SignIn(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.user} onChange={props.handleUser} type="text" className="validate"/>
                    <label className="active">Usuario</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input value={props.password} onChange={props.handlePassword} type="password" className="validate"/>
                    <label className="active">Contraseña</label>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <button onClick={props.onClickButton} type="button" className='btn green'>Ingresar</button>
                </div>
                <div className="col s6">
                    <button onClick={props.onClose} className='btn red'>Cancelar</button>
                </div>
            </div>
        </form>
    </Modal>
  );
}

export default SignIn;