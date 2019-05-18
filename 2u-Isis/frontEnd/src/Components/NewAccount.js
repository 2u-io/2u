import React from 'react';
import {TextInput, Button, Icon} from 'react-materialize';

const signIn = () => {
    return (
        <div>
            <React.Fragment>
                <h3>
                    Crea una cuenta gratis
                </h3>
                <p>
                    Completa el formulario y obtén descuentos especiales al crear tu cuenta.
                </p>
                <TextInput placeholder="Nombre" />
                <TextInput placeholder="Apellido" />
                <TextInput email validate placeholder="Email" />
                <TextInput placeholder="Usuario" />
                <TextInput password placeholder="Contraseña" />
                {/* <Button waves="light">
                    Google 
                </Button>
                <Button waves="light">
                    Facebook
                </Button> */}
                <Button waves="light">
                    Crear cuenta
                        <Icon left> people </Icon>
                </Button>
            </React.Fragment>
        </div>
    );
}

export default signIn;
