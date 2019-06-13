import React, {Component} from 'react';
import {Col, Button, Card, Row, TextInput, Tabs,Tab} from 'react-materialize';
import '../Components/styles/Product.css'
import funko from '../Components/image/venom.jpg'

export default class Product extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Row className='Product' >
            <Col m={6} s={12}>
              <div>
                <img className="product-image"src={funko} alt='productos' />
              </div>
            </Col>
            <Col m={6} s={12}>
              <Card horizontal className="z-depth-0">
                <h4><strong className="Main-color">Fuko de Capitán América estilo Venom</strong></h4>
                <p> Figura coleccionable Funko Pop Capitán América estilo Venom, 9.5 cm de alto. 
                  El muñeco está fabricado en Vinilo.
                  La edad mínima recomendad por el fabricante es de 3 años
                </p>
                <h5 className="Price-color">$2,450.00</h5>
                <br/>
                <TextInput type="number" min="1" max="5" />
                <br/>
                <Button waves="light" className="tbn" style={{marginRight: '5px' }} href="http://localhost:3000/shopcar">
                  Agregar al carrito
                </Button>
                <br/>
              </Card>
            </Col>
        </Row>
      </React.Fragment>
    )
  }
}


