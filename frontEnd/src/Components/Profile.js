import React from 'react';
import {Tabs, Tab,Button,Icon} from 'react-materialize';
import {Link} from 'react-router-dom'
import peluche from '../Components/image/peluche.jpg';

const Profile = () => {
    return (
            <React.Fragment>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Tabs className="tab-demo z-depth-1">
                        <Tab title="Configuración de la cuenta">
                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <i class="material-icons circle">people</i>
                                    <span class="title">{}</span>
                                    <p>Juan<br/>
                                       Pérez López<br/>
                                       pepe@gmail.com
                                    </p>
                                    <a href="#!" class="secondary-content"><i class="material-icons">edit</i></a>
                                </li>
                            </ul>
                        </Tab>
                        <Tab title="Datos de pago">
                            <div class="row">
                                <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input placeholder="Dirección" id="first_name" type="text" class="validate"/>
                                            <label for="first_name">Direccion</label>
                                            </div>
                                            <div class="input-field col s6">
                                            <input id="last_name" type="text" class="validate"/>
                                            <label for="last_name">Número de Tarjeta</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="last_name" type="text" class="validate"/>
                                            <label for="disabled">Fecha de expiración</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="password" type="password" class="validate"/>
                                            <label for="password">CVV2/CVC2</label>
                                        </div>
                                    </div>
                                    <Button waves="light">
                                        Guardar
                                        <Icon left> 
                                            attach_money 
                                        </Icon>
                                    </Button>
                                </form>
                            </div>
                        </Tab>
                        <Tab title="Historial de compras">
                        <div className="contenedor-anuncios">
                            <div className="anuncio">
                                <img src={peluche} alt=""/>
                                <div className="contenido-anuncio">
                                    <h3>Mono de Peluche con forma de lobo</h3>
                                    <p>$750.00</p>
                                    <Link to='/catalogo' className='btn'>Ver mas</Link>
                                </div>
                            </div>
                        </div>
                        </Tab>
                    </Tabs>
                </div>
            </React.Fragment>
    );
}

export default Profile;