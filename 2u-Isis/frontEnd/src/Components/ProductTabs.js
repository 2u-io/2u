import React, {Component} from 'react';
import {Button, Tabs,Tab, Table, CardTitle, CardPanel,Checkbox} from 'react-materialize';
import '../Components/styles/Product.css'
import bolsa1 from '../Components/image/Coffee_bag.jpg'
import bolsa2 from '../Components/image/Dark_bag.jpg'
import bolsa3 from '../Components/image/HBD_bag.jpg'
import envoltura1 from '../Components/image/HBD_wrap.jpg'
import envoltura2 from '../Components/image/Flower_wrap.jpg'
import envoltura3 from '../Components/image/Waves_wrap.jpg'
import moño1 from '../Components/image/pull_bow.jpg'
import moño2 from '../Components/image/star_bow.jpg'
import moño3 from '../Components/image/Curly_bow.png'

export default class ProductTabs extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className=' row Product' >
            <Tabs className="tab-demo z-depth-1">
                <Tab title="Descripción">
                    <br/>
                    <div>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>
                                        Modelo:
                                    </th>
                                    <td>
                                        32686
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Dimensiones:
                                    </th>
                                    <td>
                                        9.5 x 7 cm
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Piezas:
                                    </th>
                                    <td>
                                        1
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Peso:
                                    </th>
                                    <td>
                                        200g
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>
                <Tab title="Cajas y Bolsas de regalo">
                    <div>
                        <h5>Elige una de las cajas o bolsas disponibles</h5>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={bolsa1}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Bolsa Otoño<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Bolsa Otoño<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 873</p>
                            <p>Precio: $32.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={bolsa2}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Bolsa Negra<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Bolsa Negra<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 900</p>
                            <p>Precio: $50.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={bolsa3}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Bolsa de cumpleaños<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Bolsa de cumpleaños<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 234</p>
                            <p>Precio: $30.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Envolturas">
                <div>
                        <h5>Elige una envoltura para tu regalo</h5>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={envoltura1}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Envoltura de cumpleaños<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Envoltura de cumpleaños<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 1</p>
                            <p>Precio: $10.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={envoltura2}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Envoltura de Flores<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Envoltura de Flores<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 10</p>
                            <p>Color: Rojo</p>
                            <p>Precio: $15.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={envoltura3}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Envoltura de grecas<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Envoltura de grecas<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 8</p>
                            <p>Color: Blanco y azul</p>
                            <p>Precio: $10.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Moños">
                    <div>
                        <h5>Añade un toque especial a tu regalo con uno de nuestros moños</h5>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={moño1}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Moño <i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Moño<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 54</p>
                            <p>Color: Negro</p>
                            <p>Precio: $3.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={moño2}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Moño tipo estrella<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Moño tipo estrella<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 21</p>
                            <p>Color: Azul</p>
                            <p>Precio: $5.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                        <div class="card col s12 m6 l4">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator box-image" src={moño3}/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator Main-color">Moño enchinado<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title Main-color">Moño enchinado<i class="material-icons right">close</i></span>
                            <br/>
                            <p>Modelo: 18</p>
                            <p>Color: Multicolor</p>
                            <p>Precio: $13.00</p>
                            <br/>
                            <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                                Agregar al carrito
                            </Button>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
      </React.Fragment>
    )
  }
}

