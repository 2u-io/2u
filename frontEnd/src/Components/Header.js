import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Navbar} from 'react-materialize';
import logoP from './image/logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';


const Header = (props) => {
    return (
        <React.Fragment>
            <Navbar className='navTrans' brand={<Link to='/'><img src={logoP} alt="Logo" className="logop"/></Link>}  alignLinks="right">
                <div>
                    <NavLink to='/' onClick={props.onOpenModal} activeClassName="active">Inicia sesión</NavLink>
                    <SignIn 
                        isOpen={props.modalIsOpen}
                        onClose={props.onCloseModal}
                        onClickButton={props.onClickLogin}
                        handleUser={props.handleUser}
                        handlePassword={props.handlePassword}
                    />
                </div>
                <div>
                    <NavLink to="/" onClick={props.onOpenRModal} activeClassName="active">Regístrate</NavLink>
                    <SignUp
                        isOpen={props.registroModal}
                        onClose={props.onCloseRModal}
                        onClickRegister={props.handleRegister}
                        handleUsername={props.handleUsername}
                        handlePasswordRegister={props.handlePasswordRegister}
                        handleName={props.handleName}
                        handleLastName={props.handleLastName}
                        handleEmail={props.handleEmail}
                        handleSubmitRegister={props.handleSubmitRegister}
                    />
                </div>
                <NavLink to="/catalogo" activeClassName="active">Regalos</NavLink>
                <NavLink to="/gifts/:id" activeClassName="active" >Productos</NavLink>
                <NavLink to="/perfil" activeClassName="active" right>Perfil</NavLink>
                <NavLink to="/shopcar" activeClassName="active" right>Carrito</NavLink>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
