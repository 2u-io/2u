import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Navbar} from 'react-materialize';
import logoP from './image/logo.png';
import SignIn from './SignIn'

const Header = (props) => {
    return (
        <React.Fragment>
            <Navbar className='navTrans' brand={<Link to='/'><img src={logoP} alt="Logo" className="logop"/></Link>}  alignLinks="right">
                <div>
                    <NavLink to='/' onClick={props.onOpenModal} activeClassName="active">Login</NavLink>
                    <SignIn 
                        isOpen={props.modalIsOpen}
                        onClose={props.onCloseModal}
                        onClickButton={props.onClickLogin}
                        handleUser={props.handleUser}
                        handlePassword={props.handlePassword}
                    />
                </div>
                <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                <NavLink to="/catalogo" activeClassName="active">Tiendas</NavLink>
                <NavLink to="/perfil" activeClassName="active" right>Perfil</NavLink>
                <NavLink to="/shopcar" activeClassName="active" right>Carrito</NavLink>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
