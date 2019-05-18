import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import {Navbar} from 'react-materialize'

const Header = () => {
    return (
        <div>
            <React.Fragment>
                <Navbar className='red darken-3' brand={<Link to='/'><img src="" alt="Logo"/></Link>} centerLogo alignLinks="left">
                    <NavLink to="/catalogo" activeClassName="active">Tiendas</NavLink>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
                    <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                    <NavLink to="/perfil" activeClassName="active" right>Perfil</NavLink>
                    <NavLink to="/shopcar" activeClassName="active" right>Carrito</NavLink>
                </Navbar>
            </React.Fragment>
        </div>
    );
}

export default Header;
