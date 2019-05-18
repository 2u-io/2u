import React from 'react';
import {Tabs, Tab} from 'react-materialize';

const Profile = () => {
    return (
            <React.Fragment>
             <div>
                <h3>
                    Perfil
                </h3>
                <Tabs className="tab-demo z-depth-1">
                    <Tab title="Configuración de la cuenta">
                        <h5>Datos personales</h5>
                    </Tab>
                    <Tab title="Datos de pago">
                        <h5>Datos de pago</h5>
                    </Tab>
                    <Tab title="Historial de compras">
                        <h5>Historial de compras</h5>
                    </Tab>
                    </Tabs>
             </div>
                
            </React.Fragment>
    );
}

export default Profile;
