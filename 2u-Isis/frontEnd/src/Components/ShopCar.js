import React from 'react';
import {Table, Icon, Button} from 'react-materialize';

const ShopCar = () => {
    return (
        <React.Fragment>
                <div>
                    <h4>Shoping Cart</h4>
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
                                    Alvin
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    $0.87
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
                        Buy
                        <Icon left> 
                            attach_money 
                        </Icon>
                    </Button>
                </div>
            </React.Fragment>
    );
}

export default ShopCar;
