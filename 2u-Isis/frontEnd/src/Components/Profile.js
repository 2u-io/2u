import React from 'react';
import {Tabs, Tab, TextInput, Button, Icon, Col, Row} from 'react-materialize';

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
                        <TextInput placeholder="Nombre" />
                        <TextInput placeholder="Apellido" />
                        <TextInput email validate placeholder="Email" />
                        <TextInput disabled placeholder="Usuario" />
                        <TextInput password placeholder="Contraseña" />
                        <Button waves="light">
                            Guardar cambios
                        <Icon left> save </Icon>
                        </Button>
                    </Tab>
                    <Tab title="Datos de pago">
                    <Row>
                        <Col>
                            <h5>Información de pago</h5>
                            <p>Información de tarjeta</p>
                            <TextInput placeholder="Nombre" />
                            <TextInput password placeholder="Número de tarjeta" />
                            <TextInput placeholder="CVV" />
                            <TextInput placeholder="Vencimiento" />
                            <Button waves="light">
                                Guardar cambios
                            <Icon left> save </Icon>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h5>Direcciones de entrega</h5>
                        <p>Dirección principal</p>

                        
                        </Col>     
                    </Row>                       
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
