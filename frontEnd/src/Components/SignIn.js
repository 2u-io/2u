import React from 'react';
import {TextInput, Button, Icon} from 'react-materialize';

const signIn = () => {
    return (
        <div className='container'>
            <React.Fragment>
                <TextInput placeholder="Usuario" />
                <TextInput password placeholder="Contraseña" />
                <Button waves="light">
                    Iniciar sesión
                        <Icon left> people </Icon>
                </Button>
            </React.Fragment>
        </div>
    );
}

export default signIn;