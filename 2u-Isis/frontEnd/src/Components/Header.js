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
                    />
                </div>
                <NavLink to="/signup" >Sign Up</NavLink>
                <NavLink to="/catalogo" >Gifts</NavLink>
                <NavLink to="/perfil"  right>Profile</NavLink>
                <NavLink to="/gifts/:id"  right>Product</NavLink>
                <NavLink to="/shopcar"  right>Cart</NavLink>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
