import React from 'react';
import {Table, Icon, Button} from 'react-materialize';
import {Link} from 'react-router-dom'
import peluche from '../Components/image/peluche.jpg';

const ShopCar = () => {
    return (
        <React.Fragment>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th data-field="id">
                                    Product
                                </th>
                                <th data-field="name">
                                    Quantity
                                </th>
                                <th data-field="price">
                                    Price
                                </th>
                                <th>
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
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
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    $1500
                                </td>
                                <td>
                                    X
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table>
                        <thead>
                            <th>
                                Total
                            </th>
                        </thead>
                    </Table>
                    <Button waves="light">
                        Comprar
                        <Icon left> 
                            attach_money 
                        </Icon>
                    </Button>
                </div>
            </React.Fragment>
    );
}

export default ShopCar;