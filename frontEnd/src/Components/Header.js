import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Navbar} from 'react-materialize';
import logoP from './image/logo.png';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar className='navTrans' brand={<Link to='/'><img src={logoP} alt="Logo" className="logop"/></Link>}  alignLinks="right">
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                <NavLink to="/catalogo" activeClassName="active">Tiendas</NavLink>
                <NavLink to="/perfil" activeClassName="active" right>Perfil</NavLink>
                <NavLink to="/shopcar" activeClassName="active" right>Carrito</NavLink>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
